import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#6495ED' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Saúde Humana</ThemedText>
      </ThemedView>
      <ThemedText>
        Nessa aba, você aprenderá sobre a importância de manter a saúde física e mental no seu dia-a-dia. A saúde física e mental são importantes porque contribuem para a qualidade de vida e o bem-estar geral das pessoas. A saúde não se limita à ausência de doenças, mas sim a um equilíbrio entre os aspectos físicos, mentais e sociais. A saúde mental e física estão interligadas e podem influenciar uma na outra.
        Por exemplo, a depressão pode causar sintomas físicos como perda ou ganho de peso, fadiga, perda de energia, excesso de sono ou insônia. Já a ansiedade pode causar sensação de desmaio, sudorese, taquicardia e tremores.
      </ThemedText>

      {/* Primeira seção */}
      <Collapsible title="Melhoria e capacidade cognitiva">
        <Image
          source={require('@/assets/images/image_section01.webp')}
        />
        <ThemedText>
          A atividade física pode melhorar a capacidade mental de diversas formas, incluindo:
        </ThemedText>
        <ThemedText>
          - Aumento de neurotransmissores: A atividade física aumenta a produção e liberação de neurotransmissores, que regulam funções como a memória, aprendizagem, emoções, ansiedade e humor.
        </ThemedText>
        <ThemedText>
          - Redução do estresse: O exercício físico reduz os níveis de hormônios do estresse e estimula a produção de endorfinas, que são hormônios naturais que geram bom humor e deixam a pessoa mais relaxada.
        </ThemedText>
        <ThemedText>
          - Alívio da ansiedade: A atividade física pode ajudar a aliviar a ansiedade ao melhorar o fluxo sanguíneo para o cérebro e liberar substâncias que promovem a sensação de calma.
        </ThemedText>
        <ExternalLink href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-exercitar/noticias/2022/como-a-atividade-fisica-protege-o-cerebro">
          <ThemedText type="link">Confira mais no Ministério da Saúde</ThemedText>
        </ExternalLink>
      </Collapsible>

      {/* Segunda seção */}
      <Collapsible title="Diminui os níveis de ansiedade e estresse">
        <Image
          source={require('@/assets/images/image_section02.jpg')}
        />
        <ThemedText>
          A prática regular de exercícios físicos ajuda a reduzir os níveis de cortisol, o hormônio do estresse, e promove o relaxamento. Exercícios como caminhada, corrida leve, yoga e atividades ao ar livre têm se mostrado eficazes na redução da ansiedade e do estresse.
        </ThemedText>
        <ThemedText>
          - Caminhadas diárias, mesmo de curta duração, podem reduzir significativamente os níveis de estresse.
        </ThemedText>
        <ThemedText>
          - Práticas como yoga e meditação também são altamente recomendadas para aliviar a tensão mental e corporal.
        </ThemedText>
        <ExternalLink href="https://vidasaudavel.einstein.br/como-diminuir-o-estresse/">
          <ThemedText type="link">Saiba mais sobre como combater o estresse</ThemedText>
        </ExternalLink>

      </Collapsible>

      {/* Terceira seção */}
      <Collapsible title="Contribui para melhorar a autoestima, o autoconceito e a imagem corporal">
        <Image
          source={require('@/assets/images/image_section03.jpg')}
        />
        <ThemedText>
          A prática de atividades físicas está associada à melhoria da autoestima, do autoconceito e da percepção da imagem corporal. Isso é importante para a saúde mental, pois o exercício regular melhora a confiança em si mesmo e a percepção de bem-estar físico.
        </ThemedText>
        <ThemedText>
          - A atividade física pode melhorar a percepção da própria imagem corporal, tornando a pessoa mais confiante.
        </ThemedText>
        <ThemedText>
          - Ao atingir metas físicas, como completar uma corrida ou aumentar a força, a sensação de realização e autovalorização aumenta.
        </ThemedText>
        <ExternalLink href="https://www.psicologo.com.br/blog/autoestima-e-imagem-corporal/#:~:text=Uma%20pessoa%20satisfeita%20com%20a,do%20psic%C3%B3logo%20ajudar%20as%20pessoas.">
          <ThemedText type="link">Leia mais sobre autoestima e imagem corporal</ThemedText>
        </ExternalLink>

      </Collapsible>

      {/* Quarta seção */}
      <Collapsible title="Aumenta a produção de serotonina, o hormônio responsável pela sensação de bem-estar">
      <Image
          source={require('@/assets/images/image_section04.webp')}
        />
        <ThemedText>
          Exercícios físicos aumentam a produção de serotonina, um neurotransmissor que desempenha um papel importante na regulação do humor e do bem-estar. Níveis adequados de serotonina no cérebro podem reduzir os sintomas de depressão e melhorar o humor de maneira geral.
        </ThemedText>
        <ThemedText>
          - A serotonina também ajuda a regular o sono, o apetite e a digestão, que são elementos fundamentais para o equilíbrio físico e mental.
        </ThemedText>
        <ExternalLink href="https://www.uol.com.br/vivabem/faq/serotonina-o-que-e-e-como-aumentar.htm">
          <ThemedText type="link">Veja mais sobre a importância da serotonina na saúde mental</ThemedText>
        </ExternalLink>
        {Platform.select({
          ios: (
            <ThemedText>
              No iOS, você pode explorar mais sobre os benefícios da atividade física para o bem-estar mental.
            </ThemedText>
          ),
        })}

      </Collapsible>
    </ParallaxScrollView>
  );
}

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
});
