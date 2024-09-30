import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import * as Location from 'expo-location'; // Biblioteca para obter a localização do usuário

export default function TabThreeScreen() {

  // Hooks de estado para armazenar a localização do usuário e possíveis mensagens de erro
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<String | null>(null);

  // useEffect para solicitar permissão de localização e obter a posição atual do usuário
  useEffect(() => {
    (async () => {
      // Solicita a permissão para acessar a localização do usuário
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        //Se a permissão não seja concedida, define uma mensagem de erro
        setErrorMsg('Permission to access location was denied');
        return;
      }
      // E se a permissão for concedida pega a posição atual do usuário
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // O "Waiting" é exibido enquanto a localização é carregada ou se ocorrer algum erro
  let text: string = 'Waiting..';
  if (errorMsg) {
    let text = errorMsg; // Define o texto como a mensagem de erro, se houver
  } else if (location) {
    text = JSON.stringify(location); // Converte o objeto de localização para uma string 
  }
  
  return (
    // Componente customizado com efeito parallax no scroll
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#6495ED' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>

      {/* Título da página */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Saúde Humana</ThemedText>
      </ThemedView>

      {/* Texto introdutório sobre a importância da saúde física e mental */}
      <ThemedText>
        Nessa aba, você aprenderá sobre a importância de manter a saúde física e mental no seu dia-a-dia...
      </ThemedText>

      {/* Primeira seção */}
      <Collapsible title="Melhoria e capacidade cognitiva">
        <Image
          source={require('@/assets/images/image_section01.webp')}
        />
        <ThemedText>
          A atividade física pode melhorar a capacidade mental de diversas formas, incluindo...
        </ThemedText>
        <ExternalLink href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-exercitar/noticias/2022/como-a-atividade-fisica-protege-o-cerebro">
          <ThemedText type="link">Confira mais no Ministério da Saúde</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Segunda seção  */}
      <Collapsible title="Diminui os níveis de ansiedade e estresse">
        <Image
          source={require('@/assets/images/image_section02.jpg')}
        />
        <ThemedText>
          A prática regular de exercícios físicos ajuda a reduzir os níveis de cortisol...
        </ThemedText>
        <ExternalLink href="https://vidasaudavel.einstein.br/como-diminuir-o-estresse/">
          <ThemedText type="link">Saiba mais sobre como combater o estresse</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Terceira seção  */}
      <Collapsible title="Contribui para melhorar a autoestima, o autoconceito e a imagem corporal">
        <Image
          source={require('@/assets/images/image_section03.jpg')}
        />
        <ThemedText>
          A prática de atividades físicas está associada à melhoria da autoestima...
        </ThemedText>
        <ExternalLink href="https://www.psicologo.com.br/blog/autoestima-e-imagem-corporal/#:~:text=Uma%20pessoa%20satisfeita%20com%20a...">
          <ThemedText type="link">Leia mais sobre autoestima e imagem corporal</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Quarta seção */}
      <Collapsible title="Aumenta a produção de serotonina, o hormônio responsável pela sensação de bem-estar">
        <Image
          source={require('@/assets/images/image_section04.webp')}
        />
        <ThemedText>
          Exercícios físicos aumentam a produção de serotonina...
        </ThemedText>
        <ExternalLink href="https://www.uol.com.br/vivabem/faq/serotonina-o-que-e-e-como-aumentar.htm">
          <ThemedText type="link">Veja mais sobre a importância da serotonina na saúde mental</ThemedText>
        </ExternalLink>
        {/* Condicional para exibir texto específico no iOS */}
        {Platform.select({
          ios: (
            <ThemedText>
              No iOS, você pode explorar mais sobre os benefícios da atividade física...
            </ThemedText>
          ),
        })}
      </Collapsible>

      {/* Links para navegação interna na aplicação */}
      <Link href="/explore" asChild>
        <Pressable style={styles.pressable}>
          <Text style={styles.pressableText}>Explore</Text>
        </Pressable>
      </Link>

      <Link href="/" asChild>
        <Pressable style={styles.pressable}>
          <Text style={styles.pressableText}>Index</Text>
        </Pressable>
      </Link>

      {/* Exibe a localização ou mensagem de espera/erro */}
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
      </View>

    </ParallaxScrollView>
  );
}

// Estilos para o componente
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  pressable: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: 'flex-start',
  },
  pressableText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F0F8FF'
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginVertical: 10,
    lineHeight: 24,
  },
});
