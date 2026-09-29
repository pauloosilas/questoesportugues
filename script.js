// Banco de questões
const questions = {  

  "PortuguesSintaxe":[
    {
    "question": "Na frase 'A execução do projeto foi um sucesso', o termo 'do projeto' classifica-se como:",
    "options": [
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Objeto Indireto",
      "Predicativo do Sujeito"
    ],
    "correct": 1,
    "explanation": "'Execução' é um substantivo abstrato derivado de um verbo. 'Do projeto' recebe a ação (o projeto é executado), o que caracteriza o sentido passivo próprio do Complemento Nominal."
  },
  {
    "question": "Assinale a alternativa onde o termo sublinhado é um Adjunto Adnominal:",
    "options": [
      "A resposta ao aluno foi clara.",
      "A leitura do livro é prazerosa.",
      "O livro do professor sumiu.",
      "Ele estava consciente de tudo."
    ],
    "correct": 2,
    "explanation": "'Do professor' indica posse e acompanha o substantivo concreto 'livro'. Substantivos concretos não admitem complemento nominal, apenas adjunto adnominal."
  },
  {
    "question": "Em 'Os alunos nervosos saíram da sala' e 'Os alunos saíram nervosos da sala', o termo 'nervosos' é, respectivamente:",
    "options": [
      "Adjunto Adnominal e Adjunto Adnominal",
      "Predicativo e Predicativo",
      "Adjunto Adnominal e Predicativo",
      "Predicativo e Adjunto Adnominal"
    ],
    "correct": 2,
    "explanation": "Na primeira, 'nervosos' é uma característica inerente/restritiva (AA). Na segunda, indica um estado momentâneo durante a ação de sair (Predicativo)."
  },
  {
    "question": "O termo sublinhado em 'Ele agiu favoravelmente aos amigos' é um:",
    "options": [
      "Adjunto Adnominal",
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adverbial"
    ],
    "correct": 2,
    "explanation": "'Favoravelmente' é um advérbio. Termos preposicionados que completam o sentido de adjetivos ou advérbios são sempre Complementos Nominais."
  },
  {
    "question": "Qual a função de 'do jornalista' em: 'A crítica do jornalista foi ácida'?",
    "options": [
      "Complemento Nominal",
      "Adjunto Adnominal",
      "Objeto Direto",
      "Predicativo do Sujeito"
    ],
    "correct": 1,
    "explanation": "'Crítica' é substantivo abstrato, mas o jornalista é o AGENTE da ação de criticar. Se o termo tem valor ativo, é Adjunto Adnominal."
  },
  {
    "question": "Identifique a frase que contém um Predicativo do Objeto:",
    "options": [
      "O juiz considerou o réu inocente.",
      "O réu inocente saiu do tribunal.",
      "O juiz agiu com inocência.",
      "A inocência do réu foi provada."
    ],
    "correct": 0,
    "explanation": "'Inocente' é uma qualidade atribuída ao objeto direto ('o réu') pelo sujeito, através do verbo 'considerar'."
  },
  {
    "question": "Em 'A invenção da lâmpada mudou o mundo', o termo destacado é:",
    "options": [
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Sujeito",
      "Agente da Passiva"
    ],
    "correct": 1,
    "explanation": "A lâmpada foi inventada (sentido passivo). 'Invenção' é substantivo abstrato. Logo, temos um Complemento Nominal."
  },
  {
    "question": "Na oração 'O café frio estava ruim', as palavras 'frio' e 'ruim' são, respectivamente:",
    "options": [
      "Adjunto Adnominal e Predicativo",
      "Predicativo e Adjunto Adnominal",
      "Adjunto Adnominal e Adjunto Adnominal",
      "Predicativo e Predicativo"
    ],
    "correct": 0,
    "explanation": "'Frio' está junto ao nome caracterizando o substantivo dentro do sujeito (AA). 'Ruim' é o núcleo do predicado ligado pelo verbo de ligação (Predicativo)."
  },
  {
    "question": "Marque a opção em que o termo preposicionado é Complemento Nominal:",
    "options": [
      "A casa de madeira caiu.",
      "O medo da escuridão é comum.",
      "As luzes da cidade brilham.",
      "Comprei o anel de ouro."
    ],
    "correct": 1,
    "explanation": "'Escuridão' sofre a ação de ser temida. 'De madeira', 'da cidade' e 'de ouro' indicam matéria ou posse ligados a substantivos concretos (AA)."
  },
  {
    "question": "Qual a função do termo destacado: 'O povo elegeu-o deputado'?",
    "options": [
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Predicativo do Objeto",
      "Objeto Direto"
    ],
    "correct": 2,
    "explanation": "'Deputado' é uma qualidade/estado atribuído ao objeto direto 'o' (que representa ele)."
  },
  {
    "question": "A diferença fundamental entre o Adjunto Adnominal e o Complemento Nominal com substantivos abstratos é:",
    "options": [
      "O AA é paciente e o CN é agente.",
      "O AA é agente e o CN é paciente.",
      "O AA vem sempre com preposição 'a'.",
      "O CN nunca vem com preposição."
    ],
    "correct": 1,
    "explanation": "Regra de ouro: Substantivo Abstrato + Termo Agente = Adjunto Adnominal. Substantivo Abstrato + Termo Paciente = Complemento Nominal."
  },
  {
    "question": "Em 'Aqueles dois meninos estudiosos chegaram', os termos destacados são:",
    "options": [
      "Complementos Nominais",
      "Adjuntos Adnominais",
      "Predicativos do Sujeito",
      "Adjuntos Adverbiais"
    ],
    "correct": 1,
    "explanation": "Artigos, numerais, pronomes adjetivos e adjetivos que acompanham o substantivo dentro de uma função sintática são Adjuntos Adnominais."
  },
  {
    "question": "Na frase 'Os alunos chegaram cansados à escola', qual é o tipo de predicado?",
    "options": [
      "Predicado Nominal",
      "Predicado Verbal",
      "Predicado Verbo-Nominal",
      "Predicado Adjetival"
    ],
    "correct": 2,
    "explanation": "É um predicado verbo-nominal porque possui dois núcleos: um verbo de ação ('chegaram') e um predicativo do sujeito ('cansados')."
  },
  {
    "question": "Em 'Acreditamos em dias melhores', o termo destacado 'em dias melhores' exerce a função de:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adnominal"
    ],
    "correct": 1,
    "explanation": "O verbo 'acreditar' é transitivo indireto, exigindo a preposição 'em'. Portanto, o termo que o completa é um objeto indireto."
  },
  {
    "question": "Assinale a alternativa em que o termo sublinhado é um Complemento Nominal:",
    "options": [
      "A leitura do livro foi rápida.",
      "O livro do aluno sumiu.",
      "Comprei o livro ontem.",
      "Gosto de livros antigos."
    ],
    "correct": 0,
    "explanation": "'Do livro' completa o sentido do substantivo abstrato 'leitura' (sofre a ação de ser lido), caracterizando um complemento nominal."
  },
  {
    "question": "Qual é a classificação do predicado na oração 'O mar está revolto'?",
    "options": [
      "Predicado Verbal",
      "Predicado Nominal",
      "Predicado Verbo-Nominal",
      "Predicado Transitivo"
    ],
    "correct": 1,
    "explanation": "O predicado é nominal porque é formado por um verbo de ligação ('está') e um predicativo do sujeito ('revolto')."
  },
  {
    "question": "Na frase 'Entreguei o prémio ao vencedor', os termos destacados são, respetivamente:",
    "options": [
      "Objeto Indireto e Objeto Direto",
      "Complemento Nominal e Objeto Direto",
      "Objeto Direto e Complemento Nominal",
      "Objeto Direto e Objeto Indireto"
    ],
    "correct": 3,
    "explanation": "O verbo 'entregar' é transitivo direto e indireto. 'O prémio' é o objeto direto e 'ao vencedor' é o objeto indireto."
  },
  {
    "question": "A oração 'O diretor considerou a proposta inviável' possui predicado:",
    "options": [
      "Verbal",
      "Nominal",
      "Verbo-Nominal",
      "Complexo"
    ],
    "correct": 2,
    "explanation": "É verbo-nominal pois apresenta um verbo transitivo ('considerou') e um predicativo do objeto ('inviável')."
  },
  {
    "question": "Em 'Ela tem medo de altura', o termo 'de altura' classifica-se como:",
    "options": [
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adnominal",
      "Objeto Direto Preposicionado"
    ],
    "correct": 1,
    "explanation": "'Medo' é um substantivo que necessita de complemento para ter sentido completo; logo, 'de altura' é complemento nominal."
  },
  {
    "question": "Identifique a frase que contém um Objeto Direto:",
    "options": [
      "Duvido das tuas intenções.",
      "Eles moram em Lisboa.",
      "Nós vencemos a partida.",
      "Ela parece triste hoje."
    ],
    "correct": 2,
    "explanation": "O verbo 'vencer' é transitivo direto, e 'a partida' completa o seu sentido sem o auxílio de preposição obrigatória."
  },
  {
    "question": "Na frase 'A execução do projeto foi adiada', o termo 'do projeto' é:",
    "options": [
      "Complemento Nominal",
      "Adjunto Adnominal",
      "Objeto Indireto",
      "Sujeito Paciente"
    ],
    "correct": 0,
    "explanation": "'Execução' é um substantivo abstrato derivado de um verbo. 'Do projeto' recebe a ação de ser executado, sendo um complemento nominal."
  },
  {
    "question": "Qual a função sintática do pronome 'lhe' em 'Enviei-lhe os documentos'?",
    "options": [
      "Objeto Direto",
      "Adjunto Adnominal",
      "Objeto Indireto",
      "Complemento Nominal"
    ],
    "correct": 2,
    "explanation": "O pronome 'lhe', quando substitui um termo regido pela preposição 'a' (a ele/a ela), exerce a função de objeto indireto."
  },
  {
    "question": "O predicado da frase 'Os pássaros voam alto' é:",
    "options": [
      "Verbal",
      "Nominal",
      "Verbo-Nominal",
      "Indeterminado"
    ],
    "correct": 0,
    "explanation": "O núcleo do predicado é o verbo intransitivo 'voam'. O termo 'alto' é um advérbio (adjunto adverbial), não um adjetivo."
  },
  {
    "question": "Diferencie: 'Amor de mãe' vs 'Amor à mãe'. Os termos destacados são, respectivamente:",
    "options": [
      "Adjunto Adnominal e Complemento Nominal",
      "Complemento Nominal e Adjunto Adnominal",
      "Ambos são Complementos Nominais",
      "Ambos são Adjuntos Adnominais"
    ],
    "correct": 0,
    "explanation": "'De mãe' indica posse/origem (agente), sendo adjunto adnominal; 'à mãe' indica o alvo do sentimento (paciente), sendo complemento nominal."
  },
  {
    "question": "Na oração 'Os alunos saíram da prova exaustos', como se classifica o predicado?",
    "options": [
      "Predicado Nominal",
      "Predicado Verbal",
      "Predicado Verbo-Nominal",
      "Predicado Adjetival"
    ],
    "correct": 2,
    "explanation": "O predicado é verbo-nominal porque possui dois núcleos: um verbo de ação ('saíram') e um predicativo do sujeito ('exaustos')."
  },
  {
    "question": "Em 'O povo necessita de alimentos', o termo destacado 'de alimentos' exerce a função de:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adnominal"
    ],
    "correct": 1,
    "explanation": "O verbo 'necessitar' é transitivo indireto, exigindo a preposição 'de' para ligar-se ao seu complemento (objeto indireto)."
  },
  {
    "question": "Assinale a alternativa em que o termo sublinhado é um Complemento Nominal:",
    "options": [
      "A construção do prédio demorou anos.",
      "O prédio do centro é antigo.",
      "Comprei o prédio ontem.",
      "Ele mora no prédio."
    ],
    "correct": 0,
    "explanation": "'Do prédio' é complemento nominal pois completa o sentido do substantivo abstrato 'construção' (o prédio foi construído - sentido passivo)."
  },
  {
    "question": "Qual é o tipo de predicado na frase 'A natureza é bela'?",
    "options": [
      "Predicado Verbal",
      "Predicado Nominal",
      "Predicado Verbo-Nominal",
      "Predicado de Ligação"
    ],
    "correct": 1,
    "explanation": "O predicado é nominal porque é formado por um verbo de ligação ('é') e um predicativo do sujeito ('bela'), que indica um estado ou qualidade."
  },
  {
    "question": "Na frase 'Entreguei o relatório ao diretor', os termos sublinhados são, respetivamente:",
    "options": [
      "Objeto Indireto e Objeto Direto",
      "Complemento Nominal e Objeto Direto",
      "Objeto Direto e Objeto Indireto",
      "Objeto Direto e Complemento Nominal"
    ],
    "correct": 2,
    "explanation": "O verbo 'entregar' é transitivo direto e indireto; 'o relatório' é o objeto direto e 'ao diretor' é o objeto indireto."
  },
  {
    "question": "Em 'Ela tem medo de altura', o termo 'de altura' classifica-se como:",
    "options": [
      "Objeto Indireto",
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Aposto"
    ],
    "correct": 2,
    "explanation": "'Medo' é um substantivo abstrato que exige complemento. Como 'de altura' completa o sentido de um nome (substantivo), é um complemento nominal."
  },
  {
    "question": "O predicado na frase 'O professor considera o aluno brilhante' é:",
    "options": [
      "Predicado Verbal",
      "Predicado Nominal",
      "Predicado Verbo-Nominal",
      "Predicado Composto"
    ],
    "correct": 2,
    "explanation": "É verbo-nominal pois apresenta um verbo transitivo ('considera') e um predicativo do objeto ('brilhante')."
  },
  {
    "question": "Na frase 'Assisti ao filme ontem', o termo 'ao filme' é:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Complemento Nominal",
      "Adjunto Adverbial"
    ],
    "correct": 1,
    "explanation": "O verbo 'assistir' no sentido de ver é transitivo indireto e rege a preposição 'a', tornando 'ao filme' um objeto indireto."
  },
  {
    "question": "Qual a função sintática do termo sublinhado em 'A confiança em si é vital'?",
    "options": [
      "Objeto Indireto",
      "Adjunto Adnominal",
      "Complemento Nominal",
      "Sujeito"
    ],
    "correct": 2,
    "explanation": "'Em si' completa o sentido do substantivo 'confiança'. Complementos de substantivos, adjetivos ou advérbios são complementos nominais."
  },
  {
    "question": "Identifique a frase com Predicado Verbal:",
    "options": [
      "O dia está ensolarado.",
      "Os pássaros voam alto.",
      "Ela parece triste.",
      "Nós permanecemos calados."
    ],
    "correct": 1,
    "explanation": "No predicado verbal, o núcleo é um verbo que indica ação ou processo ('voam'), sem a presença de um predicativo."
  },
  {
    "question": "Diferencie o termo sublinhado: 'Amor de mãe' (1) e 'Amor à mãe' (2). Eles são:",
    "options": [
      "1- Adjunto Adnominal; 2- Complemento Nominal",
      "1- Complemento Nominal; 2- Adjunto Adnominal",
      "Ambos são Complementos Nominais",
      "Ambos são Adjuntos Adnominais"
    ],
    "correct": 0,
    "explanation": "No primeiro, a mãe pratica a ação (agente = adjunto); no segundo, a mãe recebe o amor (paciente = complemento)."
  },
  {
    "question": "Em 'O juiz julgou o réu culpado', o termo 'culpado' é:",
    "options": [
      "Predicativo do Sujeito",
      "Adjunto Adnominal",
      "Predicativo do Objeto",
      "Objeto Direto"
    ],
    "correct": 2,
    "explanation": "'Culpado' refere-se ao estado do objeto direto ('o réu') atribuído pelo verbo, sendo, portanto, um predicativo do objeto."
  },
  {
    "question": "Na frase 'A ponte foi construída por engenheiros estrangeiros', qual a função sintática de 'por engenheiros estrangeiros'?",
    "options": [
      "Objeto Indireto",
      "Agente da Passiva",
      "Adjunto Adnominal",
      "Complemento Nominal"
    ],
    "correct": 1,
    "explanation": "Em orações na voz passiva analítica, o termo que executa a ação verbal (precedido geralmente pela preposição 'por') é o Agente da Passiva."
  },
  {
    "question": "Em 'Os jogadores andavam cansados após o treino', o termo 'cansados' classifica-se como:",
    "options": [
      "Adjunto Adnominal",
      "Objeto Direto",
      "Predicativo do Sujeito",
      "Adjunto Adverbial de Modo"
    ],
    "correct": 2,
    "explanation": "'Cansados' é um predicativo do sujeito porque atribui um estado/qualidade ao sujeito 'Os jogadores' por meio de um verbo de ligação ('andavam')."
  },
  {
    "question": "Assinale a alternativa que contém um Objeto Direto Preposicionado:",
    "options": [
      "Eles necessitam de ajuda.",
      "Amo a Deus sobre todas as coisas.",
      "Entreguei o livro ao professor.",
      "Acredito em você."
    ],
    "correct": 1,
    "explanation": "O verbo 'amar' é transitivo direto, mas em contextos de ênfase ou nomes próprios sagrados, utiliza-se a preposição 'a', caracterizando o objeto direto preposicionado."
  },
  {
    "question": "Na oração 'O presente foi dado a ela por mim', o termo 'por mim' é:",
    "options": [
      "Sujeito",
      "Objeto Indireto",
      "Agente da Passiva",
      "Adjunto Adverbial"
    ],
    "correct": 2,
    "explanation": "Na voz passiva, quem pratica a ação de dar é 'mim' (agente da passiva), enquanto 'O presente' é o sujeito paciente."
  },
  {
    "question": "Qual a função sintática do pronome 'o' em 'Não o vimos na festa'?",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Sujeito",
      "Predicativo do Objeto"
    ],
    "correct": 0,
    "explanation": "Os pronomes oblíquos o, a, os, as (e variações lo/la) exercem tipicamente a função de Objeto Direto."
  },
  {
    "question": "Na frase 'Ela permanece feliz', o verbo é de ligação. Se mudarmos para 'Ela permanece em casa', a função de 'em casa' é:",
    "options": [
      "Predicativo do Sujeito",
      "Objeto Indireto",
      "Adjunto Adverbial de Lugar",
      "Agente da Passiva"
    ],
    "correct": 2,
    "explanation": "Cuidado! No segundo exemplo, 'permanecer' indica localização (verbo intransitivo), e 'em casa' é um adjunto adverbial, não um estado (predicativo)."
  },
  {
    "question": "Em 'Oferecemos flores às mães', o termo 'às mães' é um:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Complemento Nominal",
      "Agente da Passiva"
    ],
    "correct": 1,
    "explanation": "O verbo 'oferecer' é transitivo direto e indireto. 'Flores' é o objeto direto e 'às mães' (com preposição) é o objeto indireto."
  },
  {
    "question": "Identifique a frase que possui Predicativo do Sujeito:",
    "options": [
      "O menino quebrou o vaso.",
      "O artista pintou um quadro.",
      "A prova estava difícil.",
      "O cão correu pelo jardim."
    ],
    "correct": 2,
    "explanation": "'Difícil' é uma característica do sujeito 'A prova', ligada pelo verbo de estado 'estava'."
  },
  {
    "question": "O termo sublinhado em 'As terras foram desapropriadas pelo governo' exerce a função de:",
    "options": [
      "Sujeito Agente",
      "Objeto Direto",
      "Agente da Passiva",
      "Adjunto Adnominal"
    ],
    "correct": 2,
    "explanation": "O governo é quem pratica a ação na voz passiva analítica, logo, é o agente da passiva."
  },
  {
    "question": "Na frase 'Ninguém lhe obedece', a função de 'lhe' é:",
    "options": [
      "Objeto Direto",
      "Objeto Indireto",
      "Predicativo do Sujeito",
      "Agente da Passiva"
    ],
    "correct": 1,
    "explanation": "O verbo 'obedecer' é transitivo indireto (quem obedece, obedece A alguém). O pronome 'lhe' substitui o objeto indireto."
  },
  {
    "question": "Qual a classificação de 'vitoriosos' em 'Os candidatos saíram vitoriosos do debate'?",
    "options": [
      "Adjunto Adnominal",
      "Predicativo do Sujeito",
      "Objeto Direto",
      "Adjunto Adverbial"
    ],
    "correct": 1,
    "explanation": "Embora o verbo 'sair' indique ação, 'vitoriosos' qualifica o sujeito no momento da ação, sendo um predicativo do sujeito (num predicado verbo-nominal)."
  },
  {
    "question": "Em 'Tudo foi resolvido pelo diretor', se passarmos para a voz ativa, o Agente da Passiva passará a ser:",
    "options": [
      "Objeto Direto",
      "Sujeito",
      "Objeto Indireto",
      "Predicativo"
    ],
    "correct": 1,
    "explanation": "Na conversão da voz passiva para a ativa, o Agente da Passiva ('pelo diretor') assume a função de Sujeito ('O diretor resolveu tudo')."
  },
  {
    "question": "Na frase 'Os atletas correram muito ontem', os termos destacados indicam, respectivamente:",
    "options": [
      "Modo e Tempo",
      "Intensidade e Tempo",
      "Lugar e Modo",
      "Afirmação e Intensidade"
    ],
    "correct": 1,
    "explanation": "'Muito' intensifica a ação de correr (Intensidade) e 'ontem' localiza a ação no tempo (Tempo)."
  },
  {
    "question": "Em 'Ele cortou a árvore com um machado', o termo sublinhado classifica-se como:",
    "options": [
      "Adjunto Adverbial de Meio",
      "Adjunto Adverbial de Modo",
      "Adjunto Adverbial de Instrumento",
      "Objeto Direto Preposicionado"
    ],
    "correct": 2,
    "explanation": "'Com um machado' indica a ferramenta/objeto utilizado para realizar a ação, caracterizando um adjunto adverbial de instrumento."
  },
  {
    "question": "Assinale a alternativa que apresenta um Adjunto Adverbial de Causa:",
    "options": [
      "Trabalhou para sobreviver.",
      "Tremia de frio durante a noite.",
      "Falava com clareza.",
      "Chegou cedo ao compromisso."
    ],
    "correct": 1,
    "explanation": "'De frio' indica o motivo ou a causa de o sujeito estar tremendo."
  },
  {
    "question": "Na oração 'Talvez ele venha para a festa', o termo 'Talvez' expressa:",
    "options": [
      "Dúvida",
      "Afirmação",
      "Negação",
      "Modo"
    ],
    "correct": 0,
    "explanation": "Advérbios como 'talvez', 'quiçá' e 'provavelmente' indicam incerteza ou dúvida sobre o fato verbal."
  },
  {
    "question": "Em 'O projeto era muito ambicioso', o adjunto adverbial de intensidade modifica um:",
    "options": [
      "Verbo",
      "Advérbio",
      "Substantivo",
      "Adjetivo"
    ],
    "correct": 3,
    "explanation": "O adjunto adverbial pode modificar verbos, advérbios ou, neste caso, o adjetivo 'ambicioso'."
  },
  {
    "question": "Identifique a circunstância do termo destacado: 'Eles caminhavam em silêncio'.",
    "options": [
      "Lugar",
      "Modo",
      "Companhia",
      "Assunto"
    ],
    "correct": 1,
    "explanation": "'Em silêncio' indica a maneira (o modo) como a caminhada era realizada."
  },
  {
    "question": "Na frase 'Viajei com meus pais', o termo sublinhado é um:",
    "options": [
      "Adjunto Adnominal",
      "Objeto Indireto",
      "Adjunto Adverbial de Companhia",
      "Complemento Nominal"
    ],
    "correct": 2,
    "explanation": "Indica quem acompanha o sujeito na realização da ação verbal."
  },
  {
    "question": "Qual a função sintática de 'em casa' em: 'Devido à chuva, permanecemos em casa'?",
    "options": [
      "Adjunto Adverbial de Lugar",
      "Objeto Indireto",
      "Predicativo do Sujeito",
      "Adjunto Adnominal"
    ],
    "correct": 0,
    "explanation": "'Em casa' indica o local onde se desenvolve a ação de permanecer."
  },
  {
    "question": "Em 'Ele fala muito bem', temos dois adjuntos adverbiais. O primeiro ('muito') modifica o segundo ('bem'). Quais são as classificações?",
    "options": [
      "Ambos de Modo",
      "Tempo e Modo",
      "Intensidade e Modo",
      "Intensidade e Intensidade"
    ],
    "correct": 2,
    "explanation": "'Bem' é o modo como ele fala; 'Muito' intensifica o advérbio de modo 'bem'."
  },
  {
    "question": "Na frase 'Falamos sobre política ontem', o termo 'sobre política' é um adjunto adverbial de:",
    "options": [
      "Modo",
      "Causa",
      "Assunto",
      "Meio"
    ],
    "correct": 2,
    "explanation": "A preposição 'sobre' (ou a locução 'a respeito de') introduz frequentemente a circunstância de assunto."
  },
  {
    "question": "Marque a alternativa que contém um Adjunto Adverbial de Meio:",
    "options": [
      "Viajaremos de navio.",
      "Ficamos de pé.",
      "Estudei com atenção.",
      "Morreu de pneumonia."
    ],
    "correct": 0,
    "explanation": "'De navio' indica o veículo ou transporte utilizado para realizar a viagem (meio)."
  },
  {
    "question": "Diferencie: 'Chegamos ao banco' (1) e 'Precisamos do banco' (2). Os termos são:",
    "options": [
      "1- Adjunto Adverbial de Lugar; 2- Objeto Indireto",
      "1- Objeto Direto; 2- Objeto Indireto",
      "1- Objeto Indireto; 2- Adjunto Adverbial de Lugar",
      "Ambos são Objetos Indiretos"
    ],
    "correct": 0,
    "explanation": "Verbos de movimento (chegar, ir, vir) regem adjuntos adverbiais de lugar. Verbos transitivos indiretos (precisar) regem objetos indiretos."
  }
  
],
"OracoesSubordinadas":[
  {
    "question": "Na oração 'Parece <b>que o tempo vai mudar</b>', a classificação correta da subordinada é:",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva",
      "Substantiva Predicativa",
      "Substantiva Apositiva"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Subjetiva</b>: Correta. O verbo 'parecer' é usado de forma impessoal na principal, e a oração subordinada funciona como seu sujeito.<br/><b>Substantiva Objetiva Direta</b>: Incorreta. Não há verbo transitivo direto que exija objeto direto.<br/><b>Substantiva Predicativa</b>: Incorreta. O verbo 'parece' aqui inicia uma estrutura subjetiva, não ligando sujeito ao predicativo.<br/><b>Substantiva Apositiva</b>: Incorreta. Não há função de aposto explicativo."
  },
  {
    "question": "Qual a função da oração em: 'O certo é <b>que todos compareçam</b>'?",
    "options": [
      "Substantiva Predicativa",
      "Substantiva Subjetiva",
      "Substantiva Objetiva Direta",
      "Substantiva Completiva Nominal"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Predicativa</b>: Correta. A oração vem após o verbo de ligação 'é' e define o sujeito 'O certo'.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito 'O certo' já está presente na oração principal.<br/><b>Substantiva Objetiva Direta</b>: Incorreta. Verbos de ligação não possuem objeto direto.<br/><b>Substantiva Completiva Nominal</b>: Incorreta. A oração completa o sentido de um sujeito via verbo de ligação, não um nome diretamente."
  },
  {
    "question": "Em 'Ninguém sabe <b>quem ele é</b>', a oração destacada é:",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Objetiva Indireta",
      "Substantiva Objetiva Direta",
      "Substantiva Predicativa"
    ],
    "correct": 2,
    "explanation": "<b>Substantiva Objetiva Direta</b>: Correta. Quem sabe, sabe 'algo'. A oração funciona como objeto direto do verbo 'saber'.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito 'Ninguém' já está expresso.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta. O verbo 'saber' não rege preposição neste contexto.<br/><b>Substantiva Predicativa</b>: Incorreta. O verbo 'saber' não é de ligação."
  },
  {
    "question": "Classifique a oração: 'Tenho necessidade <b>de que me ajudem</b>'.",
    "options": [
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Predicativa",
      "Substantiva Subjetiva"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Completiva Nominal</b>: Correta. A oração completa o substantivo abstrato 'necessidade'.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta. Embora tenha preposição, ela completa um substantivo (nome), e não um verbo.<br/><b>Substantiva Predicativa</b>: Incorreta. Não exerce função de predicativo do sujeito.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito 'Eu' está oculto na principal."
  },
  {
    "question": "Identifique a oração: 'Exijo uma condição: <b>que sejas pontual</b>'.",
    "options": [
      "Substantiva Apositiva",
      "Substantiva Objetiva Direta",
      "Substantiva Predicativa",
      "Substantiva Subjetiva"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Apositiva</b>: Correta. A oração explica o substantivo 'condição' e vem após dois-pontos, como um aposto.<br/><b>Substantiva Objetiva Direta</b>: Incorreta. O objeto direto de 'exijo' é 'uma condição'.<br/><b>Substantiva Predicativa</b>: Incorreta. Não há verbo de ligação ligando sujeito ao termo.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito de 'exijo' é 'Eu' (desinencial)."
  },
  {
    "question": "A oração 'Necessitamos <b>de que o projeto seja aprovado</b>' é:",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Completiva Nominal",
      "Substantiva Objetiva Indireta",
      "Substantiva Predicativa"
    ],
    "correct": 2,
    "explanation": "<b>Substantiva Objetiva Indireta</b>: Correta. Completa o verbo transitivo indireto 'necessitar', que exige a preposição 'de'.<br/><b>Substantiva Objetiva Direta</b>: Incorreta. O verbo exige preposição, o que impede ser objetiva direta.<br/><b>Substantiva Completiva Nominal</b>: Incorreta. A oração completa um verbo, não um nome.<br/><b>Substantiva Predicativa</b>: Incorreta. O verbo 'necessitar' não é de ligação."
  },
  {
    "question": "Na frase 'Diz-se <b>que a economia vai crescer</b>', temos uma oração:",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva",
      "Substantiva Predicativa",
      "Substantiva Apositiva"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Subjetiva</b>: Correta. Em 'Diz-se' (voz passiva sintética), a oração que segue é o sujeito paciente (Que a economia vai crescer é dito).<br/><b>Substantiva Objetiva Direta</b>: Incorreta. A presença da partícula apassivadora 'se' converte o objeto em sujeito.<br/><b>Substantiva Predicativa</b>: Incorreta. Não há verbo de ligação.<br/><b>Substantiva Apositiva</b>: Incorreta. Não funciona como explicação de termo anterior."
  },
  {
    "question": "Classifique a oração: 'Perguntei-lhe <b>se estava bem</b>'.",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Objetiva Indireta",
      "Substantiva Subjetiva",
      "Substantiva Completiva Nominal"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Objetiva Direta</b>: Correta. O verbo 'perguntar' é bitransitivo; 'lhe' é o objeto indireto e a oração é o objeto direto.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta. A oração não é regida por preposição; o 'lhe' já ocupa essa função.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito 'Eu' é oculto.<br/><b>Substantiva Completiva Nominal</b>: Incorreta. Não completa um nome."
  },
  {
    "question": "Em 'Estou convencido <b>de que venceremos</b>', a oração é:",
    "options": [
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Predicativa",
      "Substantiva Subjetiva"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Completiva Nominal</b>: Correta. A oração completa o sentido do adjetivo 'convencido'.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta. Embora preposicionada, completa um nome (adjetivo) e não um verbo.<br/><b>Substantiva Predicativa</b>: Incorreta. 'Convencido' já é o predicativo do sujeito na oração principal.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito da principal é 'Eu'."
  },
  {
    "question": "Qual a classificação de: 'A dúvida era <b>se ele viria</b>'?",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Predicativa",
      "Substantiva Objetiva Direta",
      "Substantiva Apositiva"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Predicativa</b>: Correta. Segue o verbo de ligação 'era' e caracteriza o sujeito 'A dúvida'.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito 'A dúvida' já está expresso.<br/><b>Substantiva Objetiva Direta</b>: Incorreta. O verbo 'ser' é de ligação, não transitivo direto.<br/><b>Substantiva Apositiva</b>: Incorreta. Não está explicando um nome através de pontuação de aposto."
  },
  {
    "question": "Na frase 'Ela não gosta <b>de que falem alto</b>', a oração é:",
    "options": [
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Objetiva Indireta</b>: Correta. Completa o verbo transitivo indireto 'gostar', regido pela preposição 'de'.<br/><b>Substantiva Completiva Nominal</b>: Incorreta. Completa um verbo, portanto é objeto, não complemento nominal.<br/><b>Substantiva Objetiva Direta</b>: Incorreta. Verbos que exigem preposição não admitem objeto direto.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito é 'Ela'."
  },
  {
    "question": "Em 'Foi anunciado <b>que os preços subiriam</b>', a oração é:",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva",
      "Substantiva Predicativa",
      "Substantiva Completiva Nominal"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Subjetiva</b>: Correta. Na voz passiva analítica (Verbo auxiliar + Particípio), a oração é o sujeito da principal.<br/><b>Substantiva Objetiva Direta</b>: Incorreta. Em estruturas passivas, o que seria objeto torna-se sujeito.<br/><b>Substantiva Predicativa</b>: Incorreta. 'Anunciado' é parte da locução verbal passiva, não um predicativo comum.<br/><b>Substantiva Completiva Nominal</b>: Incorreta. Não completa um nome."
  },
  {
    "question": "Classifique: 'O diretor comunicou <b>que a reunião foi cancelada</b>'.",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Objetiva Direta",
      "Substantiva Objetiva Indireta",
      "Substantiva Predicativa"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Objetiva Direta</b>: Correta. Funciona como objeto direto do verbo transitivo 'comunicar'.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito 'O diretor' está presente.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta. Não há preposição ligando o verbo à oração subordinada.<br/><b>Substantiva Predicativa</b>: Incorreta. O verbo 'comunicar' não é de ligação."
  },
  {
    "question": "A oração 'Havia o receio <b>de que a chuva estragasse a festa</b>' é:",
    "options": [
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Apositiva",
      "Substantiva Subjetiva"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Completiva Nominal</b>: Correta. Completa o sentido do substantivo 'receio'.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta. 'Receio' é um substantivo, o que caracteriza complemento nominal, não objeto indireto.<br/><b>Substantiva Apositiva</b>: Incorreta. Não é uma explicação solta, mas um complemento necessário ao nome.<br/><b>Substantiva Subjetiva</b>: Incorreta. O sujeito da principal é inexistente (verbo haver), mas a subordinada não é subjetiva."
  },
  {
    "question": "Identifique a oração: 'Ficou decidido <b>que sairíamos cedo</b>'.",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Predicativa",
      "Substantiva Objetiva Direta",
      "Substantiva Apositiva"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Subjetiva</b>: Correta. 'Ficou decidido' é uma locução verbal que exige um sujeito, que é a oração seguinte.<br/><b>Substantiva Predicativa</b>: Incorreta. A oração não caracteriza um sujeito já existente.<br/><b>Substantiva Objetiva Direta</b>: Incorreta. Não completa um verbo transitivo direto na voz ativa.<br/><b>Substantiva Apositiva</b>: Incorreta. Não exerce função de aposto."
  },
  {
    "question": "Na frase 'É necessário <b>que todos colaborem</b>', a oração destacada é classificada como:",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva",
      "Substantiva Predicativa",
      "Substantiva Completiva Nominal"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Subjetiva</b>: Correta, pois a oração exerce a função de sujeito do verbo 'é'.<br/><b>Substantiva Objetiva Direta</b>: Incorreta, pois não completa um verbo transitivo direto.<br/><b>Substantiva Predicativa</b>: Incorreta, pois não atua como predicativo do sujeito.<br/><b>Substantiva Completiva Nominal</b>: Incorreta, pois não completa o sentido de um nome."
  },
  {
    "question": "Assinale a alternativa que classifica corretamente a oração: 'Desejo <b>que sejas feliz</b>'.",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Objetiva Indireta",
      "Substantiva Apositiva",
      "Substantiva Subjetiva"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Objetiva Direta</b>: Correta, funciona como objeto direto do verbo transitivo 'desejar'.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta, pois não há preposição regida pelo verbo.<br/><b>Substantiva Apositiva</b>: Incorreta, pois não explica um termo anterior como aposto.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito de 'desejo' é oculto (Eu)."
  },
  {
    "question": "Em 'Lembre-se <b>de que a vida é curta</b>', temos uma oração:",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Completiva Nominal",
      "Substantiva Objetiva Indireta",
      "Substantiva Subjetiva"
    ],
    "correct": 2,
    "explanation": "<b>Substantiva Objetiva Indireta</b>: Correta, completa o verbo 'lembrar-se', que é transitivo indireto e exige a preposição 'de'.<br/><b>Substantiva Objetiva Direta</b>: Incorreta, pois o complemento é preposicionado.<br/><b>Substantiva Completiva Nominal</b>: Incorreta, pois completa um verbo e não um substantivo/adjetivo.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito é 'você' (implícito no imperativo)."
  },
  {
    "question": "A oração 'Tenho medo <b>de que ele falhe</b>' é classificada como:",
    "options": [
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Predicativa",
      "Substantiva Subjetiva"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Completiva Nominal</b>: Correta, pois completa o sentido do substantivo 'medo'.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta, embora tenha preposição, ela completa um nome, não um verbo.<br/><b>Substantiva Predicativa</b>: Incorreta, não exerce função de característica do sujeito após verbo de ligação.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito da oração principal é 'Eu'."
  },
  {
    "question": "Qual a classificação da oração: 'Meu desejo é <b>que todos passem</b>'?",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Objetiva Direta",
      "Substantiva Predicativa",
      "Substantiva Apositiva"
    ],
    "correct": 2,
    "explanation": "<b>Substantiva Predicativa</b>: Correta, pois aparece após o verbo de ligação 'é', atribuindo uma qualidade/definição ao sujeito 'meu desejo'.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito já está expresso ('meu desejo').<br/><b>Substantiva Objetiva Direta</b>: Incorreta, não completa um verbo transitivo direto.<br/><b>Substantiva Apositiva</b>: Incorreta, não funciona como uma explicação entre pontuação."
  },
  {
    "question": "Identifique a oração apositiva em: 'Só quero uma coisa: <b>que vivam em paz</b>'.",
    "options": [
      "Substantiva Apositiva",
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva",
      "Substantiva Predicativa"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Apositiva</b>: Correta, pois explica o termo 'uma coisa', vindo geralmente após dois-pontos.<br/><b>Substantiva Objetiva Direta</b>: Incorreta, embora pareça completar o verbo, sua função sintática é de aposto explicativo.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito 'Eu' está implícito.<br/><b>Substantiva Predicativa</b>: Incorreta, não há função de predicativo aqui."
  },
  {
    "question": "Na frase 'Sabe-se <b>que o resultado foi positivo</b>', a oração é:",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Subjetiva",
      "Substantiva Predicativa",
      "Substantiva Completiva Nominal"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Subjetiva</b>: Correta. Com o verbo na voz passiva sintética (verbo + se), a oração atua como sujeito.<br/><b>Substantiva Objetiva Direta</b>: Incorreta, o 'se' aqui é partícula apassivadora, transformando o que seria objeto em sujeito.<br/><b>Substantiva Predicativa</b>: Incorreta, não há verbo de ligação ligando sujeito ao predicativo.<br/><b>Substantiva Completiva Nominal</b>: Incorreta, não completa um nome."
  },
  {
    "question": "Classifique: 'O professor quer <b>que façamos o dever</b>'.",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Objetiva Direta",
      "Substantiva Objetiva Indireta",
      "Substantiva Predicativa"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Objetiva Direta</b>: Correta, pois completa o sentido do verbo transitivo direto 'querer'.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito é 'O professor'.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta, não há preposição exigida pelo verbo.<br/><b>Substantiva Predicativa</b>: Incorreta, o verbo 'querer' não é de ligação."
  },
  {
    "question": "A oração 'Sou favorável <b>a que ele seja eleito</b>' é:",
    "options": [
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Subjetiva",
      "Substantiva Predicativa"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Completiva Nominal</b>: Correta, pois completa o sentido do adjetivo 'favorável'.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta, pois 'favorável' é um nome (adjetivo), não um verbo.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito é 'Eu'.<br/><b>Substantiva Predicativa</b>: Incorreta, 'favorável' já é o predicativo do sujeito na oração principal."
  },
  {
    "question": "Em 'Convém <b>que fiques aqui</b>', a oração destacada é:",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Objetiva Direta",
      "Substantiva Predicativa",
      "Substantiva Apositiva"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Subjetiva</b>: Correta, o verbo 'convir' é impessoal/unipessoal nesta estrutura, e a oração funciona como seu sujeito.<br/><b>Substantiva Objetiva Direta</b>: Incorreta, não completa um verbo transitivo direto.<br/><b>Substantiva Predicativa</b>: Incorreta, não há verbo de ligação ligando a um sujeito anterior.<br/><b>Substantiva Apositiva</b>: Incorreta, não exerce função de aposto."
  },
  {
    "question": "Classifique: 'Duvido <b>de que ele venha</b>'.",
    "options": [
      "Substantiva Objetiva Direta",
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Subjetiva"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Objetiva Indireta</b>: Correta, completa o verbo 'duvidar', que rege a preposição 'de'.<br/><b>Substantiva Objetiva Direta</b>: Incorreta, pois o verbo exige preposição.<br/><b>Substantiva Completiva Nominal</b>: Incorreta, pois completa um verbo e não um nome.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito é 'Eu'."
  },
  {
    "question": "Na frase 'A verdade é <b>que não estudamos o suficiente</b>', temos:",
    "options": [
      "Substantiva Predicativa",
      "Substantiva Subjetiva",
      "Substantiva Objetiva Direta",
      "Substantiva Apositiva"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Predicativa</b>: Correta, exerce a função de predicativo do sujeito 'A verdade' através do verbo de ligação 'é'.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito já está presente na principal.<br/><b>Substantiva Objetiva Direta</b>: Incorreta, não completa verbo transitivo direto.<br/><b>Substantiva Apositiva</b>: Incorreta, não é um esclarecimento de termo anterior em forma de aposto."
  },
  {
    "question": "Em 'Urge <b>que se tome uma decisão</b>', a oração é:",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Objetiva Direta",
      "Substantiva Predicativa",
      "Substantiva Completiva Nominal"
    ],
    "correct": 0,
    "explanation": "<b>Substantiva Subjetiva</b>: Correta, verbos como 'urgir', 'conter', 'bastar' iniciam orações onde a subordinada é o sujeito.<br/><b>Substantiva Objetiva Direta</b>: Incorreta, o verbo 'urgir' não transita diretamente para um objeto aqui.<br/><b>Substantiva Predicativa</b>: Incorreta, 'urgir' não é verbo de ligação.<br/><b>Substantiva Completiva Nominal</b>: Incorreta, não completa nenhum substantivo ou adjetivo."
  },
  {
    "question": "A oração 'Perguntaram <b>quem era o culpado</b>' é:",
    "options": [
      "Substantiva Subjetiva",
      "Substantiva Objetiva Direta",
      "Substantiva Objetiva Indireta",
      "Substantiva Predicativa"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Objetiva Direta</b>: Correta, é uma interrogativa indireta que funciona como objeto direto do verbo 'perguntar'.<br/><b>Substantiva Subjetiva</b>: Incorreta, o sujeito da principal é indeterminado.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta, o verbo perguntar, neste sentido, é transitivo direto.<br/><b>Substantiva Predicativa</b>: Incorreta, não há verbo de ligação na principal."
  },
  {
    "question": "Classifique a oração: 'Temos esperança <b>de que a situação melhore</b>'.",
    "options": [
      "Substantiva Objetiva Indireta",
      "Substantiva Completiva Nominal",
      "Substantiva Apositiva",
      "Substantiva Predicativa"
    ],
    "correct": 1,
    "explanation": "<b>Substantiva Completiva Nominal</b>: Correta, pois completa o sentido do substantivo 'esperança'.<br/><b>Substantiva Objetiva Indireta</b>: Incorreta, pois completa um nome, não um verbo.<br/><b>Substantiva Apositiva</b>: Incorreta, não explica 'esperança' como um aposto, mas sim completa sua significação.<br/><b>Substantiva Predicativa</b>: Incorreta, não funciona como predicativo."
  },
  
{
    "question": "É necessário <b>que você estude mais</b> para a prova. A oração destacada é:",
    "options": [
      "Subordinada substantiva subjetiva",
      "Subordinada substantiva objetiva direta",
      "Subordinada substantiva completiva nominal",
      "Subordinada substantiva predicativa"
    ],
    "correct": 0,
    "explanation": "A) Correta. A oração exerce função de <b>sujeito</b> do verbo \"é\".<br/>B) Incorreta. Não é objeto direto de verbo transitivo.<br/>C) Incorreta. Não completa um nome.<br/>D) Incorreta. Não funciona como predicativo."
  },
  {
    "question": "Eu sei <b>que ele virá</b>. A oração destacada é:",
    "options": [
      "Subjetiva",
      "Objetiva direta",
      "Objetiva indireta",
      "Predicativa"
    ],
    "correct": 1,
    "explanation": "A) Incorreta. Não exerce função de sujeito.<br/>B) Correta. Funciona como <b>objeto direto</b> do verbo \"sei\".<br/>C) Incorreta. Não há preposição exigida.<br/>D) Incorreta. Não é predicativo."
  },
  {
    "question": "Preciso de <b>que você me ajude</b>. A oração destacada é:",
    "options": [
      "Objetiva indireta",
      "Objetiva direta",
      "Subjetiva",
      "Predicativa"
    ],
    "correct": 0,
    "explanation": "A) Correta. A oração completa o verbo com <b>preposição</b> (de).<br/>B) Incorreta. Não é objeto direto.<br/>C) Incorreta. Não é sujeito.<br/>D) Incorreta. Não é predicativo."
  },
  {
    "question": "Tenho medo de <b>que ele falhe</b>. A oração destacada é:",
    "options": [
      "Completiva nominal",
      "Objetiva indireta",
      "Subjetiva",
      "Predicativa"
    ],
    "correct": 0,
    "explanation": "A) Correta. Completa o nome \"medo\" com preposição.<br/>B) Incorreta. Não completa verbo.<br/>C) Incorreta. Não é sujeito.<br/>D) Incorreta. Não é predicativo."
  },
  {
    "question": "O importante é <b>que todos participem</b>. A oração destacada é:",
    "options": [
      "Predicativa",
      "Subjetiva",
      "Objetiva direta",
      "Objetiva indireta"
    ],
    "correct": 0,
    "explanation": "A) Correta. Funciona como <b>predicativo do sujeito</b>.<br/>B) Incorreta. Não é sujeito.<br/>C) Incorreta. Não é objeto direto.<br/>D) Incorreta. Não há preposição."
  },
  {
    "question": "É certo <b>que ele venceu</b>. A oração destacada é:",
    "options": [
      "Subjetiva",
      "Predicativa",
      "Objetiva direta",
      "Completiva nominal"
    ],
    "correct": 0,
    "explanation": "A) Correta. A oração é o <b>sujeito</b> da oração principal.<br/>B) Incorreta. Não é predicativo.<br/>C) Incorreta. Não é objeto.<br/>D) Incorreta. Não completa nome."
  },
  {
    "question": "Desejo <b>que você seja feliz</b>. A oração destacada é:",
    "options": [
      "Objetiva direta",
      "Subjetiva",
      "Predicativa",
      "Completiva nominal"
    ],
    "correct": 0,
    "explanation": "A) Correta. Completa o verbo \"desejo\" sem preposição.<br/>B) Incorreta. Não é sujeito.<br/>C) Incorreta. Não é predicativo.<br/>D) Incorreta. Não completa nome."
  },
  {
    "question": "Ele insistiu em <b>que ficássemos</b>. A oração destacada é:",
    "options": [
      "Objetiva indireta",
      "Objetiva direta",
      "Subjetiva",
      "Predicativa"
    ],
    "correct": 0,
    "explanation": "A) Correta. O verbo exige <b>preposição</b> \"em\".<br/>B) Incorreta. Não é objeto direto.<br/>C) Incorreta. Não é sujeito.<br/>D) Incorreta. Não é predicativo."
  },
  {
    "question": "Minha esperança é <b>que ele volte</b>. A oração destacada é:",
    "options": [
      "Predicativa",
      "Subjetiva",
      "Objetiva indireta",
      "Objetiva direta"
    ],
    "correct": 0,
    "explanation": "A) Correta. Atua como <b>predicativo</b> do sujeito.<br/>B) Incorreta. Não é sujeito.<br/>C) Incorreta. Não depende de preposição.<br/>D) Incorreta. Não é objeto direto."
  },
  {
    "question": "Convém <b>que você espere</b>. A oração destacada é:",
    "options": [
      "Subjetiva",
      "Predicativa",
      "Objetiva direta",
      "Completiva nominal"
    ],
    "correct": 0,
    "explanation": "A) Correta. A oração é o <b>sujeito</b> de \"convém\".<br/>B) Incorreta. Não é predicativo.<br/>C) Incorreta. Não é objeto.<br/>D) Incorreta. Não completa nome."
  },
  {
    "question": "Ele tem certeza de <b>que vencerá</b>. A oração destacada é:",
    "options": [
      "Completiva nominal",
      "Objetiva indireta",
      "Subjetiva",
      "Predicativa"
    ],
    "correct": 0,
    "explanation": "A) Correta. Completa o nome \"certeza\".<br/>B) Incorreta. Não completa verbo.<br/>C) Incorreta. Não é sujeito.<br/>D) Incorreta. Não é predicativo."
  },
  {
    "question": "Não sei <b>se ele virá</b>. A oração destacada é:",
    "options": [
      "Objetiva direta",
      "Objetiva indireta",
      "Subjetiva",
      "Predicativa"
    ],
    "correct": 0,
    "explanation": "A) Correta. Funciona como <b>objeto direto</b> do verbo \"sei\".<br/>B) Incorreta. Não há preposição.<br/>C) Incorreta. Não é sujeito.<br/>D) Incorreta. Não é predicativo."
  },
  {
    "question": "É importante <b>que todos estudem</b>. A oração destacada é:",
    "options": [
      "Subjetiva",
      "Predicativa",
      "Objetiva direta",
      "Objetiva indireta"
    ],
    "correct": 0,
    "explanation": "A) Correta. A oração exerce função de <b>sujeito</b>.<br/>B) Incorreta. Não é predicativo.<br/>C) Incorreta. Não é objeto.<br/>D) Incorreta. Não há preposição."
  },
  {
    "question": "Ele gosta de <b>que o elogiem</b>. A oração destacada é:",
    "options": [
      "Objetiva indireta",
      "Objetiva direta",
      "Subjetiva",
      "Predicativa"
    ],
    "correct": 0,
    "explanation": "A) Correta. Completa o verbo com <b>preposição</b> \"de\".<br/>B) Incorreta. Não é objeto direto.<br/>C) Incorreta. Não é sujeito.<br/>D) Incorreta. Não é predicativo."
  },
  {
    "question": "A verdade é <b>que ele mentiu</b>. A oração destacada é:",
    "options": [
      "Predicativa",
      "Subjetiva",
      "Objetiva direta",
      "Completiva nominal"
    ],
    "correct": 0,
    "explanation": "A) Correta. Funciona como <b>predicativo do sujeito</b> \"verdade\".<br/>B) Incorreta. Não é sujeito.<br/>C) Incorreta. Não é objeto.<br/>D) Incorreta. Não completa nome."
  }
  
],

"OracoesCoordenadas":[
  {
    "question": "Na frase 'Ela não só foi a primeira a chegar, <b>mas também</b> ajudou na organização', a oração destacada é uma coordenada sindética:",
    "options": [
      "Adversativa",
      "Aditiva",
      "Conclusiva",
      "Explicativa"
    ],
    "correct": 1,
    "explanation": "Embora utilize 'mas', a locução 'mas também' estabelece uma relação de soma (adição) em relação à primeira oração."
  },
  {
    "question": "Em 'Estudei muito para a prova, <b>porém</b> não obtive o resultado esperado', a conjunção expressa:",
    "options": [
      "Conclusão",
      "Explicação",
      "Oposição",
      "Alternância"
    ],
    "correct": 2,
    "explanation": "'Porém' é uma conjunção adversativa, utilizada para indicar contraste ou oposição entre duas ideias."
  },
  {
    "question": "Assinale a alternativa que apresenta uma oração coordenada sindética <b>alternativa</b>:",
    "options": [
      "Ora ria, ora chorava de nervoso.",
      "Não estudou, nem trabalhou hoje.",
      "Estude, pois a prova é amanhã.",
      "Chegou, viu e venceu."
    ],
    "correct": 0,
    "explanation": "A estrutura 'ora... ora' indica exclusão ou alternância de eventos, característica das orações alternativas."
  },
  {
    "question": "Na oração 'O céu está repleto de nuvens escuras, <b>portanto</b> deve chover logo', o termo destacado introduz uma:",
    "options": [
      "Explicação",
      "Adição",
      "Conclusão",
      "Oposição"
    ],
    "correct": 2,
    "explanation": "'Portanto' é uma conjunção conclusiva, indicando que a chuva é uma consequência lógica da observação das nuvens."
  },
  {
    "question": "Qual a classificação da oração: 'Venha agora, <b>que</b> o jantar já está na mesa'?",
    "options": [
      "Coordenada Sindética Explicativa",
      "Subordinada Adverbial Causal",
      "Coordenada Sindética Conclusiva",
      "Coordenada Assindética"
    ],
    "correct": 0,
    "explanation": "O 'que' aqui equivale a 'porque'. Após orações imperativas (venha), a oração seguinte costuma ser uma coordenada explicativa."
  },
  {
    "question": "Em 'Você agiu mal; deve, <b>pois</b>, pedir desculpas', a conjunção destacada é:",
    "options": [
      "Explicativa",
      "Conclusiva",
      "Adversativa",
      "Aditiva"
    ],
    "correct": 1,
    "explanation": "Quando a conjunção 'pois' aparece deslocada (entre vírgulas e após o verbo), ela tem valor conclusivo."
  },
  {
    "question": "Identifique a frase que possui uma oração coordenada sindética <b>adversativa</b>:",
    "options": [
      "Não faça barulho, que o bebê dorme.",
      "Tudo estava pronto, contudo ninguém apareceu.",
      "Ou você entra, ou você sai.",
      "Penso, logo existo."
    ],
    "correct": 1,
    "explanation": "'Contudo' é uma conjunção que indica oposição ou ressalva, classificando a oração como adversativa."
  },
  {
    "question": "Na frase 'Não fomos ao cinema, <b>nem</b> ficamos em casa', o termo destacado indica:",
    "options": [
      "Negação simples",
      "Adição de ideias negativas",
      "Alternância de fatos",
      "Oposição de ações"
    ],
    "correct": 1,
    "explanation": "A conjunção 'nem' é usada para somar duas orações de valor negativo."
  },
  {
    "question": "Assinale a frase em que a conjunção <b>pois</b> tem valor explicativo:",
    "options": [
      "Ele está feliz, pois ganhou o prêmio.",
      "O time venceu; está, pois, classificado.",
      "Estudamos muito; seremos, pois, aprovados.",
      "Não saia agora, pois chove muito."
    ],
    "correct": 0,
    "explanation": "O 'pois' é explicativo quando aparece no início da oração (antes do verbo) e justifica a oração anterior."
  },
  {
    "question": "Em 'Quer chova, <b>quer</b> faça sol, iremos ao campo', a oração é:",
    "options": [
      "Sindética Aditiva",
      "Sindética Alternativa",
      "Sindética Adversativa",
      "Sindética Conclusiva"
    ],
    "correct": 1,
    "explanation": "A repetição do termo 'quer... quer' estabelece uma relação de alternância ou escolha."
  },
  {
    "question": "Na frase 'Ele era muito rico, <b>todavia</b> vivia de forma simples', o termo em negrito pode ser substituído sem perda de sentido por:",
    "options": [
      "Portanto",
      "Mas também",
      "Entretanto",
      "Porquanto"
    ],
    "correct": 2,
    "explanation": "'Todavia' e 'entretanto' são conjunções adversativas sinônimas."
  },
  {
    "question": "A oração 'Leve o guarda-chuva, <b>porque</b> vai chover' é classificada como:",
    "options": [
      "Explicativa",
      "Conclusiva",
      "Adversativa",
      "Causal"
    ],
    "correct": 0,
    "explanation": "Ela justifica a ordem/recomendação dada na oração anterior, caracterizando a coordenação explicativa."
  },
  {
    "question": "Em 'O projeto foi aprovado, <b>por isso</b> as obras começarão', a oração destacada é:",
    "options": [
      "Sindética Aditiva",
      "Sindética Conclusiva",
      "Sindética Explicativa",
      "Sindética Adversativa"
    ],
    "correct": 1,
    "explanation": "A locução 'por isso' introduz a consequência ou conclusão lógica do fato anterior."
  },
  {
    "question": "Assinale a alternativa que <b>não</b> apresenta uma oração coordenada sindética:",
    "options": [
      "Estudei muito, mas não aprendi.",
      "Cheguei, sentei, comecei a ler.",
      "Siga o mapa, ou se perderá.",
      "O diretor saiu, portanto a reunião acabou."
    ],
    "correct": 1,
    "explanation": "Esta alternativa apresenta apenas orações coordenadas assindéticas (separadas por vírgula, sem conjunção)."
  }
],

"crase":[
  {
    "question": "(Banco do Brasil) Opção que preenche corretamente as lacunas: O gerente dirigiu-se ___ sua sala e pôs-se ___ falar ___ todas as pessoas convocadas.",
    "options": [
      "a) à - à - à",
      "b) a - à - à",
      "c) à - a - a",
      "d) a - a - à",
      "e) à - a - à"
    ],
    "correct": 2,
    "explanation": "O gerente dirigiu-se à sua sala (antes de pronomes possessivos o uso da crase é facultativo). Pôs-se a falar (antes de verbos no infinitivo não se usa crase). A todas as pessoas (não há contração de artigo definido 'a' com a preposição 'a')."
  },
  {
    "question": "(Banespa) Assinale a alternativa que preenche corretamente as lacunas do texto ao lado: \"Recorreu ___ irmã e ___ ela se apegou como ___ uma tábua de salvação.\"",
    "options": [
      "a) à - à - a",
      "b) à - a - à",
      "c) a - a - a",
      "d) à - à - à",
      "e) à - a - a"
    ],
    "correct": 4,
    "explanation": "Recorreu à irmã (contração de preposição + artigo antes de palavra feminina). A ela se apegou (não se usa crase antes de pronomes pessoais do caso reto). A uma tábua de salvação (não se usa crase antes de artigos indefinidos)."
  },
  {
    "question": "(Cescem) Sentou-se ___ máquina e pôs-se ___ reescrever uma ___ uma as páginas do relatório.",
    "options": [
      "a) à - à - a",
      "b) a - à - à",
      "c) à - à - à",
      "d) à - a - a"
    ],
    "correct": 3,
    "explanation": "Sentou-se à máquina (crase antes de palavra feminina). Pôs-se a reescrever (antes de verbos no infinitivo não se usa crase). Uma a uma (não se usa crase em expressões com palavras repetidas ou antes de artigos indefinidos)."
  },
  {
    "question": "(Cesgranrio) Assinale a frase em que à ou às está mal empregado.",
    "options": [
      "a) Amores à vista.",
      "b) Referi-me às sem-razões do amor.",
      "c) Desobedeci às limitações sentimentais.",
      "d) Estava meu coração à mercê das paixões.",
      "e) Submeteram o amor à provações difíceis."
    ],
    "correct": 4,
    "explanation": "Na alternativa E, não existe contração de a + a, pois há apenas a preposição, sem ocorrência de artigo (provais está no plural e o 'a' no singular). O correto seria 'a provações' ou 'às provações'."
  },
  {
    "question": "(FEI) Assinalar a alternativa que preenche corretamente as lacunas das seguintes orações: \nI. Precisa falar ___ cerca de três mil operários. \nII. Daqui ___ alguns anos tudo estará mudado. \nIII. ___ dias está desaparecido. \nIV. Vindos de locais distantes, todos chegaram ___ tempo ___ reunião.",
    "options": [
      "a) a - a - há - a - à",
      "b) à - a - a - há - a",
      "c) a - à - a - a - há",
      "d) há - a - à - a - a",
      "e) a - há - a - à – a."
    ],
    "correct": 0,
    "explanation": "I. 'a' (preposição). II. 'a' (tempo futuro). III. 'Há' (tempo decorrido/passado). IV. 'a' tempo (palavra masculina) e 'à' reunião (contração de preposição + artigo feminino)."
  },
  
  {
    "question": "(FGV) Assinale a alternativa em que está correto o uso do acento indicativo de crase:",
    "options": [
      "a) O autor se comparou à alguém que tem boa memória.",
      "b) Ele se referiu às pessoas de boa memória.",
      "c) As pessoas aludem à uma causa específica.",
      "d) Ele passou a ser entendido à partir de suas reflexões sobre a memória.",
      "e) Os livros foram entregues à ele."
    ],
    "correct": 1,
    "explanation": "Há crase porque a oração apresenta preposição e artigo (referir a + as pessoas). Não ocorre crase antes de pronomes indefinidos (alguém), pronomes pessoais (ele), artigos indefinidos (uma) ou verbos (partir)."
  },
  {
    "question": "(Escrivão.Pol./SP) A alternativa em que o sinal de crase não procede é:",
    "options": [
      "a) À exceção da Bandeirantes, as outras emissoras de televisão detêm a ampla liderança com percentuais fabulosos.",
      "b) Está presente a cineasta das cidades brasileiras à quem a porcentagem de 7% surpreendeu.",
      "c) Os dados da pesquisa referem-se às cenas, certamente sem paralelo, em qualquer outro lugar no mundo.",
      "d) Cresce, às escondidas, o número de cidades recebendo imagens de televisão, ameaçadoras dos valores ético-culturais."
    ],
    "correct": 1,
    "explanation": "Em 'a quem' não ocorre crase pois o pronome relativo 'quem' não admite artigo feminino, apenas a preposição. 'À exceção' e 'às escondidas' são locuções femininas que exigem o acento."
  },
  {
    "question": "(FASP) Assinale a alternativa com erro de crase:",
    "options": [
      "a) nenhuma das alternativas está errada.",
      "b) Você já esteve em Roma? Eu irei à Roma logo.",
      "c) Fui à Lisboa de meus avós, pois gosto da Lisboa de meus avós.",
      "d) Já não agrada ir a Brasília. A gasolina…",
      "e) Refiro-me à Roma antiga, na qual viveu César."
    ],
    "correct": 1,
    "explanation": "O correto é 'Eu irei a Roma' (volto de Roma). A crase só ocorre em nomes de localidade quando há uma especificação/qualificação, como em 'à Lisboa de meus avós' ou 'à Roma antiga'."
  },
  {
    "question": "(FESP) Refiro-me ___ atitudes de adultos que, na verdade, levam as moças ___ rebeldia insensata e ___ uma fuga insensata.",
    "options": [
      "a) às - à - à",
      "b) as - à - à",
      "c) às - à - a",
      "d) à - a - a",
      "e) à - a - à"
    ],
    "correct": 2,
    "explanation": "'Refiro-me às atitudes' (preposição a + artigo as); 'levam à rebeldia' (preposição a + artigo a); 'a uma fuga' (apenas preposição, pois não há artigo definido antes de 'uma')."
  },
  {
    "question": "(IBGE) Assinale a opção incorreta com relação ao emprego do acento indicativo de crase:",
    "options": [
      "a) O pesquisador deu maior atenção à cidade menos privilegiada.",
      "b) Este resultado estatístico poderia pertencer à qualquer população carente.",
      "c) Mesmo atrasado, o recenseador compareceu à entrevista.",
      "d) A verba aprovada destina-se somente àquela cidade sertaneja.",
      "e) Veranópolis soube unir a atividade à prosperidade."
    ],
    "correct": 1,
    "explanation": "Não se utiliza crase antes do pronome indefinido 'qualquer'. Nas demais alternativas, ocorre a fusão da preposição 'a' com o artigo feminino 'a' ou com o pronome demonstrativo 'aquela'."
  }

],

"aa_cn_ob_pj":[
  {
    "question": "Na frase: O menino <b>inteligente</b> resolveu tudo, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 0,
    "explanation": "A) Correta: 'inteligente' caracteriza o substantivo 'menino'.<br/>B) Incorreta: não completa nome abstrato.<br/>C) Incorreta: não é complemento verbal.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: Tenho medo <b>de altura</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 1,
    "explanation": "A) Incorreta: não expressa característica.<br/>B) Correta: 'de altura' completa o sentido de 'medo'.<br/>C) Incorreta: não é complemento do verbo.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: Ele comprou <b>um carro</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 2,
    "explanation": "A) Incorreta: não caracteriza nome.<br/>B) Incorreta: não completa nome.<br/>C) Correta: 'um carro' completa o verbo 'comprou'.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: O aluno está <b>nervoso</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 3,
    "explanation": "A) Incorreta: não caracteriza diretamente um substantivo.<br/>B) Incorreta: não completa nome.<br/>C) Incorreta: não é objeto.<br/>D) Correta: 'nervoso' caracteriza o sujeito com verbo de ligação."
  },
  {
    "question": "Na frase: Entreguei o presente <b>ao amigo</b>, o termo destacado é:",
    "options": [
      "Objeto indireto",
      "Adjunto adnominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 0,
    "explanation": "A) Correta: 'ao amigo' completa o verbo com preposição.<br/>B) Incorreta: não caracteriza substantivo.<br/>C) Incorreta: objeto direto não tem preposição obrigatória.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: A casa <b>grande</b> foi vendida, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Objeto indireto",
      "Complemento nominal",
      "Objeto direto"
    ],
    "correct": 0,
    "explanation": "A) Correta: 'grande' caracteriza 'casa'.<br/>B) Incorreta: não completa verbo com preposição.<br/>C) Incorreta: não completa nome abstrato.<br/>D) Incorreta: não é objeto verbal."
  },
  {
    "question": "Na frase: Ele gosta <b>de música</b>, o termo destacado é:",
    "options": [
      "Objeto direto",
      "Objeto indireto",
      "Adjunto adnominal",
      "Predicativo do sujeito"
    ],
    "correct": 1,
    "explanation": "A) Incorreta: há preposição obrigatória.<br/>B) Correta: 'de música' é objeto indireto.<br/>C) Incorreta: não caracteriza substantivo.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: Tenho orgulho <b>de você</b>, o termo destacado é:",
    "options": [
      "Objeto indireto",
      "Complemento nominal",
      "Adjunto adnominal",
      "Objeto direto"
    ],
    "correct": 1,
    "explanation": "A) Incorreta: não completa verbo.<br/>B) Correta: 'de você' completa o nome 'orgulho'.<br/>C) Incorreta: não expressa característica.<br/>D) Incorreta: não é objeto direto."
  },
  {
    "question": "Na frase: O professor elogiou <b>os alunos</b>, o termo destacado é:",
    "options": [
      "Predicativo do sujeito",
      "Objeto indireto",
      "Objeto direto",
      "Adjunto adnominal"
    ],
    "correct": 2,
    "explanation": "A) Incorreta: não caracteriza sujeito com verbo de ligação.<br/>B) Incorreta: não há preposição.<br/>C) Correta: 'os alunos' é objeto direto.<br/>D) Incorreta: não caracteriza substantivo."
  },
  {
    "question": "Na frase: O céu permanece <b>claro</b>, o termo destacado é:",
    "options": [
      "Objeto direto",
      "Adjunto adnominal",
      "Predicativo do sujeito",
      "Complemento nominal"
    ],
    "correct": 2,
    "explanation": "A) Incorreta: não é complemento verbal.<br/>B) Incorreta: não está ligado diretamente ao substantivo.<br/>C) Correta: 'claro' caracteriza o sujeito com verbo de ligação.<br/>D) Incorreta: não completa nome."
  },
  {
    "question": "Na frase: Dei flores <b>à professora</b>, o termo destacado é:",
    "options": [
      "Objeto direto",
      "Predicativo do sujeito",
      "Objeto indireto",
      "Adjunto adnominal"
    ],
    "correct": 2,
    "explanation": "A) Incorreta: não é objeto direto.<br/>B) Incorreta: não há verbo de ligação.<br/>C) Correta: 'à professora' é objeto indireto.<br/>D) Incorreta: não caracteriza substantivo."
  },
  {
    "question": "Na frase: Ele chamou o colega <b>de irresponsável</b>, o termo destacado é:",
    "options": [
      "Objeto indireto",
      "Predicativo do sujeito",
      "Adjunto adnominal",
      "Complemento nominal"
    ],
    "correct": 1,
    "explanation": "A) Incorreta: não completa verbo com preposição apenas.<br/>B) Correta: caracteriza o sujeito/objeto por atribuição.<br/>C) Incorreta: não caracteriza diretamente substantivo.<br/>D) Incorreta: não completa nome."
  },
  {
    "question": "Na frase: O aluno <b>dedicado</b> resolveu o exercício, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 0,
    "explanation": "A) Correta: 'dedicado' caracteriza o substantivo 'aluno', sendo adjunto adnominal.<br/>B) Incorreta: complemento nominal completa sentido de nome abstrato.<br/>C) Incorreta: objeto direto completa verbo transitivo direto.<br/>D) Incorreta: predicativo do sujeito atribui característica por meio de verbo de ligação."
  },
  {
    "question": "Na frase: Tenho necessidade <b>de apoio</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 1,
    "explanation": "A) Incorreta: adjunto adnominal indica característica ou posse.<br/>B) Correta: 'de apoio' completa o sentido do nome 'necessidade'.<br/>C) Incorreta: não completa verbo.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: O professor corrigiu <b>as provas</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 2,
    "explanation": "A) Incorreta: não caracteriza nome.<br/>B) Incorreta: não completa nome.<br/>C) Correta: 'as provas' é objeto direto do verbo 'corrigiu'.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: O aluno está <b>cansado</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 3,
    "explanation": "A) Incorreta: não caracteriza diretamente um substantivo.<br/>B) Incorreta: não completa nome.<br/>C) Incorreta: não é complemento verbal.<br/>D) Correta: 'cansado' atribui característica ao sujeito por meio de verbo de ligação."
  },
  {
    "question": "Na frase: A casa <b>antiga</b> foi reformada, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 0,
    "explanation": "A) Correta: 'antiga' caracteriza o substantivo 'casa'.<br/>B) Incorreta: não completa nome abstrato.<br/>C) Incorreta: não é objeto de verbo.<br/>D) Incorreta: não depende de verbo de ligação."
  },
  {
    "question": "Na frase: Ele tem amor <b>à música</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 1,
    "explanation": "A) Incorreta: não indica posse ou característica direta.<br/>B) Correta: 'à música' completa o sentido do nome 'amor'.<br/>C) Incorreta: não completa verbo.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: Comprei <b>um livro</b> ontem, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 2,
    "explanation": "A) Incorreta: não caracteriza substantivo.<br/>B) Incorreta: não completa nome.<br/>C) Correta: 'um livro' é objeto direto do verbo 'comprei'.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: O céu está <b>azul</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 3,
    "explanation": "A) Incorreta: não caracteriza diretamente um substantivo.<br/>B) Incorreta: não completa nome.<br/>C) Incorreta: não é objeto verbal.<br/>D) Correta: 'azul' caracteriza o sujeito por meio de verbo de ligação."
  },
  {
    "question": "Na frase: O carro <b>vermelho</b> passou rápido, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 0,
    "explanation": "A) Correta: 'vermelho' caracteriza o substantivo 'carro'.<br/>B) Incorreta: não completa nome abstrato.<br/>C) Incorreta: não é complemento verbal.<br/>D) Incorreta: não há verbo de ligação."
  },
  {
    "question": "Na frase: Ele demonstrou interesse <b>pelos estudos</b>, o termo destacado é:",
    "options": [
      "Adjunto adnominal",
      "Complemento nominal",
      "Objeto direto",
      "Predicativo do sujeito"
    ],
    "correct": 1,
    "explanation": "A) Incorreta: não indica característica direta.<br/>B) Correta: 'pelos estudos' completa o sentido do nome 'interesse'.<br/>C) Incorreta: não completa verbo.<br/>D) Incorreta: não há verbo de ligação."
  }
],

"pronomes":[
  {
    "question": "1. (IBGE) Assinale a opção que apresenta o emprego correto do pronome, de acordo com a norma culta:",
    "options": [
      "O diretor mandou eu entrar na sala.",
      "Preciso falar consigo o mais rápido possível.",
      "Cumprimentei-lhe assim que cheguei.",
      "Ele só sabe elogiar a si mesmo.",
      "Após a prova, os candidatos conversaram entre eles."
    ],
    "correct": 3,
    "explanation": "a) Errado. Em construções com verbos causativos (mandar, fazer, deixar) seguidos de infinitivo, a norma culta prefere o uso do pronome oblíquo átono como objeto: 'mandou-me entrar'. <br/>b) Errado. O pronome 'consigo' é estritamente reflexivo. Para se dirigir à 2ª pessoa, deve-se usar 'com você' ou 'com o senhor'. <br/>c) Errado. O verbo 'cumprimentar' é transitivo direto (VTD), portanto exige o pronome 'o/a' e não o 'lhe' (usado para objetos indiretos). <br/>d) Correto. O pronome 'si' é reflexivo e refere-se corretamente ao sujeito 'Ele', reforçado por 'mesmo'. <br/>e) Errado. Para indicar reciprocidade em relação ao sujeito da própria oração, a norma culta exige o uso de 'entre si'."
  },
  {
    "question": "2. (IBGE) Assinale a opção em que houve erro no emprego do pronome pessoal em relação ao uso culto da língua:",
    "options": [
      "Ele entregou um texto para mim corrigir.",
      "Para mim, a leitura está fácil.",
      "Isto é para eu fazer agora.",
      "Não saia sem mim.",
      "Entre mim e ele há uma grande diferença."
    ],
    "correct": 0,
    "explanation": "a) Errado. O pronome 'mim' é oblíquo tônico e não pode exercer a função de sujeito. Antes de um verbo no infinitivo que indique uma ação do sujeito, deve-se usar o pronome reto 'eu' ('para eu corrigir'). <br/>b) Correto. Aqui 'para mim' não é sujeito de verbo, mas sim um complemento com valor de opinião ou alvo da percepção. <br/>c) Correto. O pronome 'eu' exerce corretamente a função de sujeito do verbo 'fazer'. <br/>d) Correto. Após preposição, quando não há verbo subsequente do qual o pronome seja sujeito, utiliza-se a forma oblíqua tônica 'mim'. <br/>e) Correto. A regência da preposição 'entre' exige o uso de pronomes oblíquos tônicos ('entre mim e ti/ele'), nunca a forma reta 'eu'."
  },
  {
    "question": "3. (U-UBERLÂNDIA) Assinale o tratamento dado ao reitor de uma Universidade:",
    "options": [
      "Vossa Senhoria",
      "Vossa Santidade",
      "Vossa Excelência",
      "Vossa Magnificência",
      "Vossa Paternidade"
    ],
    "correct": 3,
    "explanation": "a) Errado. <b>Vossa Senhoria</b> é empregado para autoridades de menor escalão, diretores de empresas ou correspondências comerciais. <br/>b) Errado. <b>Vossa Santidade</b> é de uso exclusivo do Papa. <br/>c) Errado. <b>Vossa Excelência</b> é utilizado para altas autoridades do Estado, como ministros, governadores, juízes e oficiais-generais. <br/>d) Correto. <b>Vossa Magnificência</b> é o pronome de tratamento protocolar exclusivo para reitores de universidades. <br/>e) Errado. <b>Vossa Paternidade</b> é um tratamento utilizado para superiores de ordens religiosas."
  },
  {
    "question": "4. (BB) Colocação incorreta:",
    "options": [
      "Preciso que venhas ver-me.",
      "Procure não desapontá-lo.",
      "O certo é fazê-los sair.",
      "Sempre negaram-me tudo.",
      "As espécies se atraem."
    ],
    "correct": 3,
    "explanation": "a) Correto. Com verbos no infinitivo, a ênclise é sempre permitida, mesmo com a presença da conjunção integrante 'que'. <br/>b) Correto. Em locuções verbais com infinitivo precedido de negação, a ênclise ao verbo principal é aceitável. <br/>c) Correto. A ênclise é o padrão culto para verbos no infinitivo ('fazer' + 'os' vira 'fazê-los'). <br/>d) Errado. O advérbio 'Sempre' é uma palavra atrativa que exige a próclise obrigatória. O correto seria: <b>'Sempre me negaram tudo'</b>. <br/>e) Correto. Quando o sujeito está explícito e não há palavras atrativas, a colocação é facultativa, sendo a próclise muito comum no Brasil."
  },
  {
    "question": "5. (EPCAR) Imagine o pronome entre parênteses no lugar devido e aponte onde não deve haver próclise:",
    "options": [
      "Não entristeças. (te)",
      "Deus favoreça. (o)",
      "Espero que faças justiça. (se)",
      "Meus amigos, apresentem em posição de sentido. (se)",
      "Ninguém faça de rogado. (se)"
    ],
    "correct": 3,
    "explanation": "a) Errado. O advérbio 'Não' atrai o pronome: 'Não <b>te</b> entristeças'. <br/>b) Errado. Em frases optativas (que exprimem desejo), a próclise é obrigatória: 'Deus <b>o</b> favoreça'. <br/>c) Errado. A conjunção 'que' é palavra atrativa: 'Espero que <b>se</b> faça justiça'. <br/>d) Correto. Não se inicia oração ou período com pronome oblíquo. Após a vírgula (pausa), deve-se usar a ênclise: 'apresentem-<b>se</b>'. <br/>e) Errado. O pronome indefinido 'Ninguém' é palavra atrativa, exigindo próclise: 'Ninguém <b>se</b> faça'."
  },
  {
    "question": "(CFS/18) Leia: Ernesto não estava bem. Um sentimento de profunda angústia <b>torturava-lhe</b> naquele turbilhão de pensamentos incessantes. Um adeus definitivo não <b>o</b> tornaria menos sofredor, mas ele precisava resolver o seu drama intenso, que <b>o</b> consumia no cotidiano e <b>lhe</b> deixava o sabor amargo do desprezo. Um dos pronomes oblíquos destacados no texto está incorretamente empregado. Qual?",
    "options": [
      "O primeiro.",
      "O segundo.",
      "O terceiro.",
      "O quarto."
    ],
    "correct": 0,
    "explanation": "a) Correto (é o erro). O verbo 'torturar' é transitivo direto (quem tortura, tortura alguém). Por isso, exige o pronome 'o' (torturava-o) e não o 'lhe', que é usado para objetos indiretos. <br/>b) Errado. O verbo 'tornar' (tornar alguém algo) exige objeto direto, logo o uso de 'o' está correto. <br/>c) Errado. O verbo 'consumir' é transitivo direto (consumia o homem), portanto o pronome 'o' está adequadamente empregado. <br/>d) Errado. O verbo 'deixar', neste contexto, é transitivo direto e indireto (deixar algo a alguém). 'Lhe' funciona como objeto indireto (a ele), estando correto."
  },
  {
    "question": "(CFS/17) Leia: <br/>I – Se você precisar, vou <b>te</b> ajudar financeiramente. <br/>II – Trouxeram <b>eu</b> aqui para justificar as falhas cometidas. <br/>III – Não foi comprovada nenhuma relação de parentesco entre <b>mim</b> e <b>ti</b>. <br/>IV – Fui ao shopping e vi sua mãe. Encontrei-<b>a</b> na praça de alimentação. <br/>O emprego dos pronomes pessoais em destaque está correto em:",
    "options": [
      "I – II",
      "III – IV",
      "II – III",
      "I – IV"
    ],
    "correct": 1,
    "explanation": "I - Errado. Há uma mistura de pessoas gramaticais: 'você' (3ª pessoa) não combina com o pronome 'te' (2ª pessoa). O correto seria 'ajudá-lo'. <br/>II - Errado. Pronomes retos (eu, tu) não exercem função de objeto. O correto seria 'Trouxeram-me'. <br/>III - Correto. Após a preposição 'entre', devem-se usar pronomes oblíquos tônicos (mim, ti, si). <br/>IV - Correto. O verbo 'encontrar' é transitivo direto e o pronome 'a' substitui corretamente o substantivo feminino 'mãe'."
  },
  {
    "question": "(CFS/15) Assinale a alternativa que completa, correta e respectivamente, as lacunas: <br/>I – Entre ____ e ____, não há qualquer possibilidade de reconciliação. <br/>II – O aluno ____ redação continha muitas incoerências foi desclassificado. <br/>III – ____ livro que trago nas mãos é o romance A mulher que escreveu a Bíblia. <br/>IV – No sobrado ______ morava, havia duas janelas ovaladas. <br/>V – Ao circular pela obra, o pedreiro constatou que havia ferramentas ____ dono ele desconhecia.",
    "options": [
      "eu, tu, cuja, Este, onde, cujo o",
      "mim, ti, cuja, Este, onde, cujo",
      "eu, ti, que a, Esse, aonde, que o",
      "mim, tu, que a, Esse, aonde, que o"
    ],
    "correct": 1,
    "explanation": "a) Errado. Não se usa pronome reto (eu, tu) após preposição 'entre' sem verbo no infinitivo, e nunca se usa artigo após o pronome cujo (cujo o). <br/>b) Correto. I: 'mim' e 'ti' (oblíquos após preposição); II: 'cuja' (posse: redação do aluno); III: 'Este' (proximidade com quem fala); IV: 'onde' (lugar fixo); V: 'cujo' (posse: dono das ferramentas). <br/>c) Errado. 'Eu' está incorreto no item I; 'Esse' indica proximidade com o ouvinte, não com quem fala; 'Aonde' exige ideia de movimento. <br/>d) Errado. 'Tu' no item I está incorreto; 'Esse' e 'Aonde' não se aplicam aos contextos de posse e lugar fixo apresentados."
  }
],

"col_pronomes_ob":[
  {
    "question": "Assinale a alternativa que apresenta a colocação correta conforme a norma padrão:",
    "options": [
      "<b>Me</b> empresta o seu caderno?",
      "Empresta-<b>me</b> o seu caderno?",
      "Nunca <b>empresta-me</b> nada.",
      "Sempre <b>vi-o</b> no parque."
    ],
    "correct": 1,
    "explanation": "A) Errado. Não se inicia frase com pronome oblíquo átono na linguagem formal. <br/>B) Correto. Como a frase inicia o período e não há palavra atrativa, utiliza-se a <b>ênclise</b>. <br/>C) Errado. 'Nunca' é palavra negativa e atrai o pronome (próclise obrigatória): 'Nunca <b>me</b> empresta'. <br/>D) Errado. 'Sempre' é advérbio e atrai o pronome: 'Sempre <b>o</b> vi'."
  },
  {
    "question": "Em qual das frases a <b>próclise</b> é obrigatória devido a uma palavra negativa?",
    "options": [
      "Não <b>se</b> esqueça do compromisso.",
      "Espero que <b>se</b> lembre de tudo.",
      "Lembraram-<b>me</b> da data.",
      "Daria-<b>lhe</b> um presente hoje."
    ],
    "correct": 0,
    "explanation": "A) Correto. A palavra 'Não' é um advérbio de negação que exige a <b>próclise</b> (pronome antes do verbo). <br/>B) Errado. Aqui a próclise ocorre por causa da conjunção 'que', não por negação. <br/>C) Errado. Frase iniciada por verbo exige <b>ênclise</b>. <br/>D) Errado. Verbo no futuro do pretérito sem palavra atrativa exige <b>mesóclise</b>: 'Dar-lhe-ia'."
  },
  {
    "question": "Assinale a opção em que o pronome relativo exige a <b>próclise</b>:",
    "options": [
      "Viu-<b>nos</b> o homem que saía.",
      "Este é o livro que <b>me</b> recomendaram.",
      "Entregue-<b>o</b> ao rapaz que chegar.",
      "Falaram-<b>lhe</b> sobre o que aconteceu."
    ],
    "correct": 1,
    "explanation": "A) Errado. 'Viu-nos' está correto por ser início de frase; 'que' não afeta o pronome anterior. <br/>B) Correto. O pronome relativo 'que' é palavra atrativa, puxando o pronome 'me' para antes do verbo. <br/>C) Errado. 'Entregue-o' é ênclise correta em início de oração imperativa. <br/>D) Errado. Início de período sem atração exige <b>ênclise</b>."
  },
  {
    "question": "No futuro do presente, sem palavras atrativas, a forma correta é:",
    "options": [
      "<b>Lhe</b> direi a verdade.",
      "Direi-<b>lhe</b> a verdade.",
      "Dir-<b>lhe</b>-ei a verdade.",
      "<b>Te</b> direi tudo amanhã."
    ],
    "correct": 2,
    "explanation": "A) Errado. Não se inicia frase com oblíquo. <br/>B) Errado. É proibido o uso de ênclise com verbos no futuro do presente ou futuro do pretérito. <br/>C) Correto. Na ausência de palavra atrativa, verbos no futuro exigem a <b>mesóclise</b>. <br/>D) Errado. Início de frase com pronome de 2ª pessoa fere a norma culta."
  },
  {
    "question": "Identifique a alternativa onde o advérbio <b>não</b> seguido de vírgula atrai o pronome:",
    "options": [
      "Ontem, <b>me</b> entregaram o prêmio.",
      "Ontem <b>me</b> entregaram o prêmio.",
      "Ontem entregaram-<b>me</b> o prêmio.",
      "Ontem, entregaram-<b>me</b> o prêmio."
    ],
    "correct": 1,
    "explanation": "A) Errado. A vírgula isola o advérbio; nesse caso, o pronome não pode vir após a pausa (início de oração). <br/>B) Correto. Advérbios sem pausa (vírgula) são palavras atrativas, exigindo <b>próclise</b>. <br/>C) Errado. Pela regra de atração do advérbio, a ênclise é evitada. <br/>D) Correto em outro contexto, mas a questão pede o caso de atração pelo advérbio (que ocorre sem a vírgula)."
  },
  {
    "question": "A oração 'Quem <b>te</b> contou isso?' está correta porque:",
    "options": [
      "Frases interrogativas exigem próclise.",
      "O pronome 'quem' é facultativo.",
      "O verbo está no passado.",
      "Trata-se de uma mesóclise oculta."
    ],
    "correct": 0,
    "explanation": "A) Correto. Pronomes interrogativos (Quem, Qual, Que) iniciam orações que exigem obrigatoriamente a <b>próclise</b>. <br/>B) Errado. O pronome 'quem' é atrativo e não facultativo. <br/>C) Errado. O tempo verbal não é o fator determinante aqui, mas sim o tipo de frase. <br/>D) Errado. Não existe o conceito de mesóclise oculta na gramática."
  },
  {
    "question": "Assinale a alternativa correta quanto ao uso com pronomes indefinidos:",
    "options": [
      "Tudo <b>se</b> resolve com o tempo.",
      "Tudo resolve-<b>se</b> com o tempo.",
      "Alguém viu-<b>me</b> ontem.",
      "Ninguém ajudará-<b>me</b>."
    ],
    "correct": 0,
    "explanation": "A) Correto. Pronomes indefinidos (Tudo, Nada, Alguém, Ninguém) são <b>palavras atrativas</b> que exigem próclise. <br/>B) Errado. Contraria a regra de atração do pronome indefinido 'Tudo'. <br/>C) Errado. 'Alguém' é indefinido e exige próclise: 'Alguém <b>me</b> viu'. <br/>D) Errado. Além de 'Ninguém' ser atrativo, não se usa ênclise em verbos no futuro."
  },
  {
    "question": "Em 'Em <b>se</b> tratando de negócios...', a colocação é:",
    "options": [
      "Ênclise obrigatória.",
      "Próclise obrigatória.",
      "Mesóclise necessária.",
      "Totalmente facultativa."
    ],
    "correct": 1,
    "explanation": "A) Errado. A ênclise não se aplica nessa estrutura fixa. <br/>B) Correto. A estrutura <b>'Em + se + Gerúndio'</b> exige obrigatoriamente a próclise. <br/>C) Errado. Não há futuro para justificar mesóclise. <br/>D) Errado. É uma regra específica e obrigatória da norma culta."
  },
  {
    "question": "Quanto ao uso do infinitivo preposicionado (Ex: 'Para <b>me</b> ver'), a regra diz que:",
    "options": [
      "A próclise é obrigatória.",
      "A ênclise é proibida.",
      "A colocação é facultativa (<b>me</b> ver ou ver-<b>me</b>).",
      "Deve-se usar mesóclise."
    ],
    "correct": 2,
    "explanation": "A) Errado. Não é a única opção. <br/>B) Errado. A ênclise também é permitida com infinitivos. <br/>C) Correto. Com verbos no <b>infinitivo impessoal</b> precedidos de preposição, o uso da próclise ou da ênclise é facultativo. <br/>D) Errado. Mesóclise só ocorre com futuro."
  },
  {
    "question": "Assinale a alternativa que apresenta um erro de colocação pronominal:",
    "options": [
      "Espero que <b>nos</b> ajudem.",
      "Tenho <b>comunicado-lhe</b> os fatos.",
      "Deus <b>o</b> acompanhe!",
      "Nada <b>me</b> foi dito."
    ],
    "correct": 1,
    "explanation": "A) Correto. 'Que' é conjunção subordinativa e atrai o pronome. <br/>B) Errado (Alternativa com erro). <b>Nunca</b> se utiliza ênclise com verbos no <b>particípio</b>. O correto seria 'Tenho-lhe comunicado'. <br/>C) Correto. Em frases optativas (que exprimem desejo), usa-se a próclise. <br/>D) Correto. 'Nada' é pronome indefinido e atrai o oblíquo."
  },
  {
    "question": "Na frase 'Aquilo <b>me</b> deixou triste', a próclise ocorre por:",
    "options": [
      "Presença de pronome demonstrativo.",
      "Início de frase.",
      "Presença de verbo de ligação.",
      "Ser uma frase exclamativa."
    ],
    "correct": 0,
    "explanation": "A) Correto. Pronomes demonstrativos (Aquilo, Isso, Isto) são fatores de <b>próclise</b>. <br/>B) Errado. Se fosse apenas início de frase sem o 'Aquilo', seria ênclise. <br/>C) Errado. 'Deixar' não é verbo de ligação aqui e isso não afetaria a regra. <br/>D) Errado. O fator principal é o pronome demonstrativo no sujeito."
  },
  {
    "question": "Assinale a frase em que a <b>mesóclise</b> é obrigatória:",
    "options": [
      "Não <b>lhe</b> direi nada.",
      "Se pudesse, <b>dir-lhe-ia</b> a verdade.",
      "Alguém <b>me</b> dirá o caminho.",
      "<b>Me</b> dirão o que fazer."
    ],
    "correct": 1,
    "explanation": "A) Errado. A palavra negativa 'Não' tem prioridade sobre a mesóclise, exigindo próclise. <br/>B) Correto. Verbo no futuro do pretérito em início de oração (após a pausa da vírgula) exige <b>mesóclise</b>. <br/>C) Errado. 'Alguém' é palavra atrativa e exige próclise. <br/>D) Errado. Não se inicia frase com pronome oblíquo; o correto seria mesóclise 'Dir-me-ão'."
  }
],
"regras_pronomes":[
{
    "question": "Assinale a alternativa que preenche corretamente a lacuna: 'Esta tarefa é para <b>___</b> terminar ainda hoje.'",
    "options": [
      "mim",
      "<b>eu</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Mim' não pode ser sujeito do verbo 'terminar'.<br/><b>B:</b> <b>Correta.</b> O pronome reto <b>eu</b> deve ser usado quando exerce a função de sujeito de um verbo no infinitivo.<br/><b>C:</b> Incorreta. 'Me' é um pronome oblíquo átono e não funciona como sujeito de infinitivo nesta estrutura.<br/><b>D:</b> Incorreta. 'Mim mesmo' é usado para ênfase, mas não substitui o sujeito 'eu' antes de verbo."
  },
  {
    "question": "Escolha a opção correta: 'Não há mais nenhum segredo entre <b>___</b> e você.'",
    "options": [
      "eu",
      "<b>mim</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Após preposições como 'entre', não se usa o pronome reto 'eu'.<br/><b>B:</b> <b>Correta.</b> Com a preposição 'entre', deve-se utilizar o pronome oblíquo tônico <b>mim</b>.<br/><b>C:</b> Incorreta. 'Me' é átono e não pode ser usado após preposição.<br/><b>D:</b> Incorreta. Embora gramaticalmente possível em contextos reflexivos, a regra básica exige apenas o pronome oblíquo tônico <b>mim</b>."
  },
  {
    "question": "Complete a frase: 'Eles trouxeram esses documentos para <b>___</b>.'",
    "options": [
      "eu",
      "me",
      "<b>mim</b>",
      "ti"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O pronome reto 'eu' não pode aparecer no final da frase após preposição sem um verbo para conjugar.<br/><b>B:</b> Incorreta. 'Me' não pode ser precedido por preposição no final da frase.<br/><b>C:</b> <b>Correta.</b> O pronome oblíquo tônico <b>mim</b> é o termo correto para finalizar a oração após a preposição 'para'.<br/><b>D:</b> Incorreta. 'Ti' refere-se à segunda pessoa, mudando o sentido solicitado implicitamente pela regra de primeira pessoa."
  },
  {
    "question": "Qual das alternativas está correta? 'Emprestou o carro para <b>___</b> viajar no final de semana.'",
    "options": [
      "<b>eu</b>",
      "mim",
      "me",
      "mim mesmo"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O pronome <b>eu</b> é o sujeito do verbo 'viajar'.<br/><b>B:</b> Incorreta. 'Mim' não conjuga verbo, logo não pode ser sujeito de 'viajar'.<br/><b>C:</b> Incorreta. 'Me' não exerce função de sujeito de verbo no infinitivo nesta construção.<br/><b>D:</b> Incorreta. 'Mim mesmo' não é adequado para exercer a função de sujeito simples antes do infinitivo."
  },
  {
    "question": "Assinale a opção que apresenta erro: 'Para <b>___</b>, estudar português é um prazer.'",
    "options": [
      "eu",
      "<b>mim</b>",
      "mim mesmo",
      "minha pessoa"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Incorreta (apresenta erro).</b> Na função de complemento com valor de opinião ('na minha opinião'), deve-se usar <b>mim</b> e não o pronome reto 'eu'.<br/><b>B:</b> Correta. O uso de <b>mim</b> após a preposição em frases intercaladas ou de opinião é o padrão da norma culta.<br/><b>C:</b> Correta. Pode ser usado para dar ênfase à opinião pessoal.<br/><b>D:</b> Correta. Embora menos comum, é gramaticalmente possível, ao contrário do 'eu' isolado como complemento."
  },
  {
    "question": "Indique a forma correta: 'Pediram para <b>___</b> ficar em silêncio durante a palestra.'",
    "options": [
      "mim",
      "<b>eu</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Mim' não pode realizar a ação de 'ficar'.<br/><b>B:</b> <b>Correta.</b> O pronome <b>eu</b> atua como sujeito do verbo 'ficar'.<br/><b>C:</b> Incorreta. O pronome átono 'me' não substitui o sujeito reto antes de infinitivo.<br/><b>D:</b> Incorreta. O uso de 'mim mesmo' é desnecessário e incorreto como sujeito simples neste caso."
  },
  {
    "question": "Complete: 'Sem <b>___</b>, o projeto dificilmente será aprovado pela diretoria.'",
    "options": [
      "eu",
      "<b>mim</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Após a preposição 'sem', deve-se usar a forma oblíqua tônica.<br/><b>B:</b> <b>Correta.</b> <b>Mim</b> é o pronome oblíquo tônico exigido após a preposição 'sem'.<br/><b>C:</b> Incorreta. 'Me' é átono e não admite preposição.<br/><b>D:</b> Incorreta. 'Mim mesmo' seria redundante sem uma necessidade de reflexividade ou ênfase específica."
  },
  {
    "question": "Marque a alternativa correta: 'Entregaram o livro para <b>___</b> ler durante as férias.'",
    "options": [
      "<b>eu</b>",
      "mim",
      "me",
      "mim mesmo"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O pronome <b>eu</b> é o sujeito do verbo 'ler'.<br/><b>B:</b> Incorreta. Regra fundamental: 'mim' não lê, não escreve e não faz nada, pois não conjuga verbo.<br/><b>C:</b> Incorreta. 'Me' não exerce função de sujeito de infinitivo nesta regência.<br/><b>D:</b> Incorreta. 'Mim mesmo' não é o sujeito adequado para o verbo 'ler' nesta estrutura."
  },
  {
    "question": "Preencha corretamente: 'Isto é um problema apenas para <b>___</b> resolver.'",
    "options": [
      "mim",
      "<b>eu</b>",
      "me",
      "mim mesmo"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Mim' não pode ser o agente da ação de 'resolver'.<br/><b>B:</b> <b>Correta.</b> Usa-se <b>eu</b> pois existe um verbo no infinitivo ('resolver') do qual o pronome é o sujeito.<br/><b>C:</b> Incorreta. 'Me' não funciona como sujeito de verbos no infinitivo.<br/><b>D:</b> Incorreta. 'Mim mesmo' não deve ser usado como sujeito simples antes do verbo."
  },
  {
    "question": "Assinale a frase gramaticalmente correta:",
    "options": [
      "Não vá sem <b>eu</b>.",
      "Ele é mais alto do que <b>mim</b>.",
      "Comprei este presente para <b>mim</b>.",
      "Deixe <b>mim</b> ver o resultado."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O correto é 'sem <b>mim</b>', pois não há verbo após o pronome.<br/><b>B:</b> Incorreta. Em comparações, subentende-se um verbo: 'mais alto do que <b>eu</b> (sou)'.<br/><b>C:</b> <b>Correta.</b> <b>Mim</b> é usado corretamente como objeto indireto após a preposição 'para'.<br/><b>D:</b> Incorreta. Com verbos causativos (deixar, fazer, mandar), usa-se o pronome oblíquo átono 'me': 'Deixe-<b>me</b> ver'."
  },
  {
    "question": "Analise as lacunas: 'Para <b>___</b>, viajar é bom; mas, para <b>___</b> viajar, preciso de dinheiro.'",
    "options": [
      "eu - mim",
      "<b>mim - eu</b>",
      "mim - mim",
      "eu - eu"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Inverte a lógica: o primeiro é opinião, o segundo é sujeito.<br/><b>B:</b> <b>Correta.</b> No primeiro caso, <b>mim</b> indica opinião. No segundo, <b>eu</b> é sujeito do verbo 'viajar'.<br/><b>C:</b> Incorreta. O segundo 'mim' não pode conjugar o verbo 'viajar'.<br/><b>D:</b> Incorreta. O primeiro 'eu' não pode ser usado isoladamente após preposição para indicar opinião."
  },
  {
    "question": "Marque a alternativa em que o uso do pronome está <b>incorreto</b>:",
    "options": [
      "Para <b>mim</b>, o café está frio.",
      "Trouxeram a comida para <b>eu</b> comer.",
      "<b>Mim</b> não sabe o que dizer.",
      "Fale tudo para <b>mim</b>."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Correta. <b>Mim</b> indica opinião pessoal perfeitamente.<br/><b>B:</b> Correta. <b>Eu</b> é o sujeito do verbo 'comer'.<br/><b>C:</b> <b>Incorreta.</b> 'Mim' nunca pode ser sujeito de um verbo (neste caso, o verbo 'saber'). O correto é '<b>Eu</b> não sei'.<br/><b>D:</b> Correta. <b>Mim</b> é o objeto indireto após a preposição 'para'."
  }
  ,{
    "question": "Assinale a alternativa que apresenta o uso <b>correto</b> do pronome de acordo com a norma culta:",
    "options": [
      "Eu encontrei <b>ele</b> no shopping ontem à tarde.",
      "O diretor chamou <b>nós</b> para uma reunião de emergência.",
      "Os documentos, o estagiário <b>os</b> entregou ao gerente.",
      "Vi <b>ela</b> atravessando a rua apressadamente."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O pronome <b>ele</b> é reto e não deve ser objeto direto (vi ele); o correto seria <b>encontrei-o</b>.<br/><b>B:</b> Incorreta. <b>Nós</b> é reto e não deve ser objeto direto após o verbo; o correto seria <b>chamou-nos</b>.<br/><b>C:</b> <b>Correta.</b> O pronome <b>os</b> é oblíquo átono e exerce corretamente a função de objeto direto.<br/><b>D:</b> Incorreta. <b>Ela</b> é pronome reto e não deve ocupar posição de objeto; o correto seria <b>vi-a</b>."
  },
  {
    "question": "Complete a frase corretamente: 'Isto é para ___ fazer, não para ___.'",
    "options": [
      "mim - eu",
      "eu - mim",
      "mim - mim",
      "eu - eu"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Mim' não pode ser sujeito do verbo 'fazer'.<br/><b>B:</b> <b>Correta.</b> O pronome reto <b>eu</b> é sujeito do infinitivo 'fazer'. No segundo espaço, o pronome oblíquo <b>mim</b> é usado após a preposição sem verbo seguinte.<br/><b>C:</b> Incorreta. 'Mim' não conjuga verbo.<br/><b>D:</b> Incorreta. O segundo 'eu' ficaria sem função de sujeito, exigindo-se o oblíquo tônico 'mim'."
  },
  {
    "question": "Na frase 'O guarda deteve <b>os suspeitos</b>', ao substituir o termo em destaque, a forma correta é:",
    "options": [
      "O guarda deteve <b>eles</b>.",
      "O guarda deteve-<b>nos</b>.",
      "O guarda deteve-<b>los</b>.",
      "O guarda deteve-<b>os</b>."
    ],
    "correct": 3,
    "explanation": "<b>A:</b> Incorreta. <b>Eles</b> é pronome reto e não pode ser objeto direto na norma culta.<br/><b>B:</b> Incorreta. 'Nos' refere-se à primeira pessoa (nós), alterando o sentido da frase.<br/><b>C:</b> Incorreta. A terminação <b>-los</b> só ocorre se o verbo terminar em R, S ou Z.<br/><b>D:</b> <b>Correta.</b> Como o verbo termina em vogal, utiliza-se o pronome oblíquo <b>-os</b> para substituir o objeto direto."
  },
  {
    "question": "Indique o erro gramatical na seguinte frase: 'Não houve nada entre <b>eu</b> e <b>você</b>.'",
    "options": [
      "O uso de 'nada' está incorreto.",
      "Deveria ser usado 'mim' em vez de 'eu'.",
      "O pronome 'você' deveria ser 'ti'.",
      "A frase está perfeitamente correta."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. O termo 'nada' está bem empregado.<br/><b>B:</b> <b>Correta.</b> Após preposições (como 'entre'), deve-se usar pronomes oblíquos tônicos (<b>mim, ti</b>). O correto é 'entre <b>mim</b> e você'.<br/><b>C:</b> Incorreta. Embora 'ti' seja possível, o erro principal reside no uso do pronome reto 'eu'.<br/><b>D:</b> Incorreta. A norma culta proíbe pronomes retos após a preposição 'entre' quando não há verbo."
  },
  {
    "question": "Em qual das frases o pronome <b>reto</b> exerce corretamente a função de sujeito?",
    "options": [
      "Deixaram <b>eu</b> falar durante a assembleia.",
      "Pediram para <b>mim</b> trazer os relatórios.",
      "É necessário que <b>vós</b> saibais a verdade.",
      "Mandaram <b>ele</b> sair da sala imediatamente."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. Em 'Deixaram-me falar', o pronome deveria ser oblíquo (me) ou o reto 'eu' só se fosse sujeito de 'falar' em estrutura específica, mas soa coloquial.<br/><b>B:</b> Incorreta. 'Para mim trazer' é erro clássico; deve ser 'para <b>eu</b> trazer'.<br/><b>C:</b> <b>Correta.</b> O pronome reto <b>vós</b> é o sujeito da forma verbal 'saibais'.<br/><b>D:</b> Incorreta. 'Ele' está como objeto direto de mandaram; o correto é <b>mandaram-no</b>."
  },
  {
    "question": "Substituindo o objeto direto em 'Eles amam <b>a pátria</b>', obtemos:",
    "options": [
      "Eles amam-<b>na</b>.",
      "Eles amam <b>ela</b>.",
      "Eles amam-<b>la</b>.",
      "Eles <b>lhe</b> amam."
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> Verbos terminados em sons nasais (M) exigem as variações <b>-na, -no</b> do pronome oblíquo.<br/><b>B:</b> Incorreta. <b>Ela</b> é reto e não pode ser objeto direto.<br/><b>C:</b> Incorreta. A forma '-la' é para verbos terminados em R, S ou Z.<br/><b>D:</b> Incorreta. 'Lhe' é objeto indireto, e o verbo amar é transitivo direto."
  },
  {
    "question": "Marque a alternativa onde o pronome <b>não</b> deveria ser reto:",
    "options": [
      "<b>Nós</b> fomos ao cinema.",
      "Diga para <b>eles</b> que o prazo acabou.",
      "O professor trouxe as provas para <b>eu</b> corrigir.",
      "Esperamos <b>tu</b> na saída da escola."
    ],
    "correct": 3,
    "explanation": "<b>A:</b> Correta. <b>Nós</b> é sujeito de 'fomos'.<br/><b>B:</b> Correta. Após a preposição 'para', quando indica direção ou destinatário, 'eles' (que pode ser reto ou oblíquo) é aceito.<br/><b>C:</b> Correta. <b>Eu</b> é sujeito do verbo 'corrigir'.<br/><b>D:</b> <b>Incorreta.</b> O verbo esperar exige objeto direto; o correto seria 'Esperamos-<b>te</b>' ou 'Esperamos <b>você</b>'."
  },
  {
    "question": "Qual opção preenche as lacunas: 'Sempre ___ vi dedicados, por isso ___ confiei a tarefa.'",
    "options": [
      "os - os",
      "lhes - lhes",
      "os - lhes",
      "eles - lhes"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O segundo verbo (confiar) exige objeto indireto (confiar algo A alguém).<br/><b>B:</b> Incorreta. O primeiro verbo (ver) é transitivo direto e não aceita 'lhes'.<br/><b>C:</b> <b>Correta.</b> 'Ver' é VTD (ver <b>os</b> alunos) e 'confiar' é VTDI (confiar a tarefa <b>lhes</b>).<br/><b>D:</b> Incorreta. <b>Eles</b> não deve ser usado como objeto direto do verbo ver."
  },
  {
    "question": "Na oração 'Quero <b>te</b> ver feliz', o pronome <b>te</b> é:",
    "options": [
      "Um pronome reto em função de sujeito.",
      "Um pronome oblíquo em função de objeto direto.",
      "Um pronome de tratamento.",
      "Um pronome reto em função de objeto."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Pronomes retos são eu, tu, ele, etc.<br/><b>B:</b> <b>Correta.</b> <b>Te</b> é a forma oblíqua de 'tu', exercendo função de complemento (objeto direto) de ver.<br/><b>C:</b> Incorreta. Pronomes de tratamento são 'Você', 'Vossa Excelência', etc.<br/><b>D:</b> Incorreta. Não existe pronome reto em função de objeto na norma culta."
  },
  {
    "question": "A frase 'Chamaram <b>eu</b> para depor' apresenta qual desvio?",
    "options": [
      "Uso de pronome reto em vez de oblíquo no sujeito.",
      "Uso de pronome oblíquo em função de sujeito.",
      "Uso de pronome reto em função de objeto direto.",
      "Uso indevido de preposição antes do pronome."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O termo 'eu' não é o sujeito de 'chamaram'.<br/><b>B:</b> Incorreta. 'Eu' não é pronome oblíquo.<br/><b>C:</b> <b>Correta.</b> <b>Eu</b> é reto e está sendo usado como complemento do verbo chamar, o que é um erro. O correto é 'Chamaram-<b>me</b>'.<br/><b>D:</b> Incorreta. Não há preposição na frase original."
  },
  {
    "question": "Substitua o termo em destaque: 'O professor <b>ajudou os alunos</b> na revisão.'",
    "options": [
      "O professor ajudou-<b>lhes</b> na revisão.",
      "O professor <b>os</b> ajudou na revisão.",
      "O professor ajudou <b>eles</b> na revisão.",
      "O professor ajudou-<b>nos</b> na revisão."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. O verbo 'ajudar' é transitivo direto (VTD), logo não aceita o pronome 'lhes'.<br/><b>B:</b> <b>Correta.</b> Como 'ajudar' é VTD, o pronome oblíquo <b>os</b> substitui corretamente o objeto direto 'os alunos'.<br/><b>C:</b> Incorreta. O pronome reto 'eles' não deve ser usado como objeto direto na norma culta.<br/><b>D:</b> Incorreta. 'Nos' refere-se à primeira pessoa (nós), alterando o sentido da frase original."
  },
  {
    "question": "Assinale a frase que utiliza corretamente o pronome <b>lhe</b>:",
    "options": [
      "Eu <b>lhe</b> amo com todas as minhas forças.",
      "Nunca <b>lhe</b> vi tão feliz como hoje.",
      "O filho sempre <b>lhe</b> obedeceu sem questionar.",
      "A empresa <b>lhe</b> contratou na semana passada."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Amar' é VTD; o correto seria 'Eu <b>a/o</b> amo'.<br/><b>B:</b> Incorreta. 'Ver' é VTD; o correto seria 'Nunca <b>o/a</b> vi'.<br/><b>C:</b> <b>Correta.</b> O verbo 'obedecer' é transitivo indireto (VTI) e rege a preposição 'a', permitindo o uso do <b>lhe</b>.<br/><b>D:</b> Incorreta. 'Contratar' é VTD; o correto seria 'A empresa <b>o/a</b> contratou'."
  },
  {
    "question": "Complete a lacuna: 'Os diretores não ___ convocaram para a assembleia.'",
    "options": [
      "<b>os</b>",
      "lhes",
      "a eles",
      "lo"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O verbo 'convocar' é VTD (quem convoca, convoca alguém), exigindo o pronome <b>os</b>.<br/><b>B:</b> Incorreta. 'Lhes' é para objetos indiretos e o verbo em questão não rege preposição para o complemento.<br/><b>C:</b> Incorreta. 'A eles' é uma forma tônica que exigiria preposição e, geralmente, ênfase, não sendo a substituição padrão aqui.<br/><b>D:</b> Incorreta. A forma 'lo' só ocorre após verbos terminados em R, S ou Z."
  },
  {
    "question": "Na oração 'Entreguei <b>o relatório ao chefe</b>', substituindo apenas o termo 'ao chefe', temos:",
    "options": [
      "Entreguei-<b>o</b> o relatório.",
      "Entreguei <b>ele</b> o relatório.",
      "Entreguei-<b>lhe</b> o relatório.",
      "Entreguei-<b>lo</b> o relatório."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'O' substituiria 'o relatório', e não 'ao chefe'.<br/><b>B:</b> Incorreta. 'Ele' é pronome reto e não deve exercer função de objeto indireto.<br/><b>C:</b> <b>Correta.</b> 'Ao chefe' é um objeto indireto; o pronome <b>lhe</b> é o substituto gramatical adequado.<br/><b>D:</b> Incorreta. A forma 'lo' é variação de objeto direto, não indireto."
  },
  {
    "question": "Qual alternativa apresenta erro de regência no uso de <b>o/a</b>?",
    "options": [
      "Ninguém <b>a</b> convidou para a festa.",
      "O médico <b>o</b> assistiu durante a cirurgia.",
      "Eu <b>a</b> perdoei pelo erro cometido.",
      "O público <b>o</b> assistiu no estádio."
    ],
    "correct": 3,
    "explanation": "<b>A:</b> Correta. 'Convidar' é VTD.<br/><b>B:</b> Correta. 'Assistir' no sentido de dar assistência/ajudar é VTD.<br/><b>C:</b> Correta. 'Perdoar' é VTD quando o objeto é uma coisa ('o erro'), mas quando se refere à pessoa ('a ela'), a norma culta prefere VTI (lhe), embora o uso de 'a' seja aceito em certas bancas. Contudo, a D é um erro crasso.<br/><b>D:</b> <b>Incorreta.</b> 'Assistir' no sentido de ver/presenciar é VTI; o correto seria 'O público assistiu <b>a ele</b>' (o pronome 'lhe' é evitado por alguns gramáticos para este verbo, mas 'o' é erro absoluto)."
  },
  {
    "question": "Substitua o termo: 'O palestrante <b>cumprimentou os ouvintes</b>.'",
    "options": [
      "O palestrante cumprimentou-<b>lhes</b>.",
      "O palestrante <b>lhes</b> cumprimentou.",
      "O palestrante cumprimentou-<b>os</b>.",
      "O palestrante cumprimentou <b>eles</b>."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Cumprimentar' é VTD, não aceita 'lhes'.<br/><b>B:</b> Incorreta. Além do erro de 'lhes', a próclise não é obrigatória sem palavra atrativa.<br/><b>C:</b> <b>Correta.</b> <b>Os</b> substitui corretamente o objeto direto 'os ouvintes' em posição de ênclise.<br/><b>D:</b> Incorreta. Uso de pronome reto 'eles' como objeto direto."
  },
  {
    "question": "Escolha a opção que preenche corretamente: 'Desejo-___ muito sucesso, pois ___ admiro muito.'",
    "options": [
      "o - o",
      "lhe - lhe",
      "<b>lhe - o</b>",
      "o - lhe"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Desejar' (algo A alguém) exige objeto indireto (lhe).<br/><b>B:</b> Incorreta. 'Admirar' é VTD (quem admira, admira alguém), não aceita 'lhe'.<br/><b>C:</b> <b>Correta.</b> 'Desejar' é VTDI (lhe = a você) e 'Admirar' é VTD (o = você).<br/><b>D:</b> Incorreta. Inverte as funções sintáticas dos pronomes."
  },
  {
    "question": "Em 'Paguei <b>ao fornecedor</b>', a substituição correta pelo pronome é:",
    "options": [
      "Paguei-<b>o</b>.",
      "Paguei-<b>lhe</b>.",
      "Paguei <b>ele</b>.",
      "Paguei-<b>lo</b>."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. 'Pagar' é VTD para coisas (paguei o boleto) e VTI para pessoas (paguei ao fornecedor).<br/><b>B:</b> <b>Correta.</b> Como o objeto é uma pessoa precedida de preposição (indireto), usa-se <b>lhe</b>.<br/><b>C:</b> Incorreta. 'Ele' é pronome reto.<br/><b>D:</b> Incorreta. 'Lo' é variação de objeto direto."
  },
  {
    "question": "Substituindo o objeto em 'Visitei <b>minha tia</b> no hospital':",
    "options": [
      "Visitei-<b>lhe</b> no hospital.",
      "<b>Lhe</b> visitei no hospital.",
      "Visitei-<b>a</b> no hospital.",
      "Visitei <b>ela</b> no hospital."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Visitar' é VTD, não aceita 'lhe'.<br/><b>B:</b> Incorreta. 'Lhe' é incorreto para o verbo e não se inicia frase com pronome átono.<br/><b>C:</b> <b>Correta.</b> O pronome <b>a</b> exerce a função de objeto direto de 'visitar'.<br/><b>D:</b> Incorreta. Uso coloquial de 'ela' como objeto."
  },
  {
    "question": "Assinale a alternativa onde o pronome <b>o</b> foi usado de forma <b>incorreta</b>:",
    "options": [
      "Espero-<b>o</b> na saída do metrô.",
      "Agradeci-<b>o</b> pelo presente recebido.",
      "Não <b>o</b> conheço muito bem.",
      "Quero-<b>o</b> sempre por perto."
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Correta. 'Esperar' é VTD.<br/><b>B:</b> <b>Incorreta.</b> 'Agradecer' é VTI para pessoas (agradecer A alguém); o correto seria 'Agradeci-<b>lhe</b>'.<br/><b>C:</b> Correta. 'Conhecer' é VTD.<br/><b>D:</b> Correta. 'Querer' (no sentido de desejar/estimar) é VTD."
  },
  {
    "question": "No trecho 'O juiz <b>lhe</b> deu a palavra', o pronome em destaque é:",
    "options": [
      "Objeto direto.",
      "Sujeito da oração.",
      "Objeto indireto.",
      "Adjunto adnominal."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O objeto direto é 'a palavra'.<br/><b>B:</b> Incorreta. O sujeito é 'O juiz'.<br/><b>C:</b> <b>Correta.</b> Quem dá, dá algo ('a palavra') A alguém (<b>lhe</b>). O 'lhe' é o objeto indireto.<br/><b>D:</b> Incorreta. Embora o 'lhe' possa ter valor possessivo (adjunto), aqui ele é o destinatário da ação verbal."
  },
  {
    "question": "Complete corretamente: 'Se você ___ encontrar, diga-___ que estou esperando.'",
    "options": [
      "<b>o - lhe</b>",
      "lhe - o",
      "o - o",
      "lhe - lhe"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> 'Encontrar' é VTD (encontrar alguém = <b>o</b>) e 'Dizer' é VTDI (dizer algo A alguém = <b>lhe</b>).<br/><b>B:</b> Incorreta. Inverte as regências verbais.<br/><b>C:</b> Incorreta. 'Dizer' exige objeto indireto para a pessoa a quem se fala.<br/><b>D:</b> Incorreta. 'Encontrar' não rege preposição 'a' para seu objeto."
  },
  {
    "question": "Ao unir o verbo <b>analisar</b> com o pronome <b>o</b>, a forma correta resultante é:",
    "options": [
      "analisar-o",
      "analisá-lo",
      "analisar-no",
      "analisá-no"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. Na norma culta, o 'r' final deve ser suprimido antes dos pronomes o/a.<br/><b>B:</b> <b>Correta.</b> Verbos terminados em <b>R, S ou Z</b> perdem a terminação e o pronome vira <b>lo/la</b>. O acento agudo marca a tonicidade da vogal 'a'.<br/><b>C:</b> Incorreta. A terminação 'no' é usada apenas para verbos terminados em sons nasais.<br/><b>D:</b> Incorreta. Mistura a regra do corte da letra 'r' com a terminação nasal inexistente neste verbo."
  },
  {
    "question": "Assinale a alternativa que apresenta a substituição correta para 'Eles <b>fizeram o</b> trabalho':",
    "options": [
      "Eles fizero-lo trabalho.",
      "Eles fizeram-lo.",
      "Eles fizeram-no.",
      "Eles fizê-lo."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Fizeram' termina em som nasal, não em R, S ou Z.<br/><b>B:</b> Incorreta. A forma '-lo' não se aplica após terminações nasais (M, ÃO, ÕE).<br/><b>C:</b> <b>Correta.</b> Verbos terminados em <b>sons nasais (M, ÃO, ÕE)</b> mantêm a terminação e o pronome assume a forma <b>no/na</b>.<br/><b>D:</b> Incorreta. Forma inexistente para a terceira pessoa do plural do pretérito perfeito."
  },
  {
    "question": "Na frase 'Eu <b>fiz a</b> lição', ao substituir o objeto pelo pronome, temos:",
    "options": [
      "Eu fi-la.",
      "Eu fiz-la.",
      "Eu fiz-na.",
      "Eu fi-na."
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O verbo 'fiz' termina em <b>Z</b>. Suprime-se o 'z' e adiciona-se <b>-la</b> (fi-la).<br/><b>B:</b> Incorreta. O 'z' não deve ser mantido na grafia com o pronome oblíquo.<br/><b>C:</b> Incorreta. A terminação em 'z' exige a variação 'la', não 'na'.<br/><b>D:</b> Incorreta. Erro na escolha da variação pronominal (na)."
  },
  {
    "question": "Qual a forma correta da união '<b>propomos</b> + <b>os</b>'?",
    "options": [
      "propomos-nos",
      "propomo-nos",
      "propomo-los",
      "propomos-los"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. 'Propomos-nos' seria o uso do pronome reflexivo (nós a nós mesmos).<br/><b>B:</b> Incorreta. Refere-se à primeira pessoa do plural reflexiva, não à substituição de 'os'.<br/><b>C:</b> <b>Correta.</b> O verbo termina em <b>S</b>. Retira-se o 's' e acrescenta-se <b>-los</b> (propomo-los).<br/><b>D:</b> Incorreta. O 's' final deve ser obrigatoriamente removido."
  },
  {
    "question": "Assinale a alternativa que apresenta erro na variação do pronome:",
    "options": [
      "Vê-lo é um prazer.",
      "Eles dão-no por encerrado.",
      "Quero dizê-lo a verdade.",
      "Puseram-nas sobre a mesa."
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Correta. Ver + o = Vê-lo (terminação em R).<br/><b>B:</b> Correta. Dão + o = Dão-no (terminação nasal ÃO).<br/><b>C:</b> <b>Incorreta.</b> O verbo 'dizer' é transitivo indireto para pessoas (dizer <b>lhe</b>). Se fosse objeto direto, seria 'dizê-lo', mas o contexto de 'verdade' exige o indireto.<br/><b>D:</b> Correta. Puseram + as = Puseram-nas (terminação nasal M)."
  },
  {
    "question": "A união do verbo <b>seduzir</b> com o pronome <b>a</b> resulta em:",
    "options": [
      "seduiz-la",
      "seduiz-a",
      "sedu-la",
      "sedu-na"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. O 'z' deve ser removido totalmente.<br/><b>B:</b> Incorreta. Após 'z', o pronome deve sofrer a variação para 'la'.<br/><b>C:</b> <b>Correta.</b> Terminação em <b>Z</b>: retira-se a letra e adiciona-se <b>-la</b>.<br/><b>D:</b> Incorreta. 'Na' é exclusivo para terminações nasais."
  },
  {
    "question": "Escolha a opção que completa: 'Se os documentos chegarem, <b>põe-___</b> na pasta.'",
    "options": [
      "los",
      "nos",
      "nas",
      "as"
    ],
    "correct": 1,
    "explanation": "<b>A:</b> Incorreta. O verbo 'põe' termina em ditongo nasal (õe), não em R, S ou Z.<br/><b>B:</b> <b>Correta.</b> Verbos terminados em <b>ÕE</b> (nasal) exigem a variação <b>no/nos/na/nas</b>.<br/><b>C:</b> Incorreta. O objeto 'os documentos' é masculino.<br/><b>D:</b> Incorreta. Após sons nasais, o pronome 'os' deve obrigatoriamente tornar-se 'nos'."
  },
  {
    "question": "Como fica a combinação '<b>querer</b> + <b>as</b>'?",
    "options": [
      "querê-las",
      "querer-as",
      "querê-nas",
      "quere-las"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> Verbo em <b>R</b>: cai o 'r', o 'e' recebe acento circunflexo por ser oxítona terminada em 'e', e o pronome vira <b>-las</b>.<br/><b>B:</b> Incorreta. Não houve a supressão do 'r' nem a modificação do pronome.<br/><b>C:</b> Incorreta. 'Nas' não se aplica a infinitivos.<br/><b>D:</b> Incorreta. Falta o acento tônico obrigatório no 'e' após a queda do 'r'."
  },
  {
    "question": "Na frase 'As meninas <b>compram as</b> flores', a substituição correta é:",
    "options": [
      "compram-las",
      "compram-as",
      "compram-nas",
      "comprá-las"
    ],
    "correct": 2,
    "explanation": "<b>A:</b> Incorreta. '-las' não segue terminações em 'm'.<br/><b>B:</b> Incorreta. É obrigatória a variação para 'n' após som nasal.<br/><b>C:</b> <b>Correta.</b> 'Compram' termina em <b>M</b>, o que atrai a forma <b>-nas</b> do pronome.<br/><b>D:</b> Incorreta. Esta forma seria para o infinitivo 'comprar'."
  },
  {
    "question": "Assinale a alternativa que completa corretamente: 'Vou <b>refazer o</b> teste' $\rightarrow$ 'Vou <b>___</b>.'",
    "options": [
      "refazê-lo",
      "refazer-no",
      "refaze-lo",
      "refa-lo"
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> Refazer + o = <b>Refazê-lo</b>. O 'r' cai e a vogal 'e' é acentuada.<br/><b>B:</b> Incorreta. Uso indevido da forma nasal.<br/><b>C:</b> Incorreta. Falta o acento circunflexo para marcar a vogal tônica 'e'.<br/><b>D:</b> Incorreta. Redução excessiva do radical do verbo."
  },
  {
    "question": "A forma '<b>dispõe-no</b>' pode ser a substituição de:",
    "options": [
      "Dispõe o livro.",
      "Dispões o livro.",
      "Dispor o livro.",
      "Dispõe os livros."
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> O verbo 'dispõe' termina em ditongo nasal, exigindo <b>-no</b> para o objeto direto singular masculino.<br/><b>B:</b> Incorreta. 'Dispões' termina em S, resultando em 'dispõe-lo'.<br/><b>C:</b> Incorreta. 'Dispor' termina em R, resultando em 'dispô-lo'.<br/><b>D:</b> Incorreta. 'Os livros' exigiria a forma plural 'dispõe-nos'."
  },
  {
    "question": "Qual destas frases apresenta a norma culta de forma <b>impecável</b>?",
    "options": [
      "Quisemos os livros e <b>quisemo-los</b> prontamente.",
      "Disseram a verdade e <b>disseram-la</b> bem.",
      "Vou compor a música e <b>compô-a</b> agora.",
      "Eles dão a notícia e <b>dão-la</b> com alegria."
    ],
    "correct": 0,
    "explanation": "<b>A:</b> <b>Correta.</b> Quisemos termina em <b>S</b>; retira-se o 's' e usa-se <b>-los</b>.<br/><b>B:</b> Incorreta. Disseram termina em M; o correto é 'disseram-na'.<br/><b>C:</b> Incorreta. Compor termina em R; o correto é 'compô-la'.<br/><b>D:</b> Incorreta. Dão termina em som nasal (ÃO); o correto é 'dão-na'."
  },
  {
    "question": "Assinale a alternativa que substitui corretamente o termo destacado: 'Vou vender <b>o carro</b> amanhã'.",
    "options": [
      "Vou vender-o",
      "Vou vendê-lo",
      "Vou vender-no",
      "Vou vender-lhe"
    ],
    "correct": 1,
    "explanation": "A) <b>Vou vender-o</b>: Errado. Quando o verbo termina em -r, -s ou -z, essas letras caem e o pronome assume a forma lo/la. <br/>B) <b>Vou vendê-lo</b>: Correto. O -r de 'vender' cai e acrescenta-se o 'lo' com acento tônico. <br/>C) <b>Vou vender-no</b>: Errado. A forma 'no/na' só ocorre após sons nasais (-am, -em, -ão). <br/>D) <b>Vou vender-lhe</b>: Errado. O verbo 'vender' é transitivo direto (VTD) e 'lhe' é usado para objetos indiretos."
  },
  {
    "question": "Na frase 'Eles <b>fizeram o dever</b> com atenção', a substituição correta do objeto é:",
    "options": [
      "Fizeram-lo",
      "Fizeram-o",
      "Fizeram-no",
      "Fizeram-lhe"
    ],
    "correct": 2,
    "explanation": "A) <b>Fizeram-lo</b>: Errado. 'Lo' não se usa após terminação nasal. <br/>B) <b>Fizeram-o</b>: Errado. A pronúncia exigiria a forma nasal para manter a sonoridade. <br/>C) <b>Fizeram-no</b>: Correto. Verbos terminados em sons nasais (-am, -em, -ão, -õe) exigem as formas 'no, na, nos, nas'. <br/>D) <b>Fizeram-lhe</b>: Errado. 'O dever' é objeto direto; 'lhe' substituiria um objeto indireto preposicionado."
  },
  {
    "question": "Qual a forma correta para 'Nós <b>fizemos as tarefas</b>'?",
    "options": [
      "Fizemos-las",
      "Fizemo-las",
      "Fizemos-nas",
      "Fizemos-as"
    ],
    "correct": 1,
    "explanation": "A) <b>Fizemos-las</b>: Errado. Deve-se retirar o -s final do verbo antes de anexar o 'las'. <br/>B) <b>Fizemo-las</b>: Correto. Verbos terminados em -s perdem essa letra ao se unirem aos pronomes o/a (que viram lo/la). <br/>C) <b>Fizemos-nas</b>: Errado. A forma nasal 'nas' não se aplica a verbos terminados em -s. <br/>D) <b>Fizemos-as</b>: Errado. Gramaticalmente incorreto conforme a norma culta de colocação pronominal."
  },
  {
    "question": "Assinale a frase em que o pronome <b>lhe</b> está empregado incorretamente:",
    "options": [
      "Entreguei-<b>lhe</b> os documentos.",
      "Eu <b>lhe</b> vi no shopping ontem.",
      "Desejamos-<b>lhe</b> muita sorte.",
      "Perdoei-<b>lhe</b> a dívida."
    ],
    "correct": 1,
    "explanation": "A) <b>Entreguei-lhe</b>: Correto. Entregar algo 'a alguém' (Objeto Indireto). <br/>B) <b>Eu lhe vi</b>: Errado. O verbo 'ver' é transitivo direto (VTD). O correto seria 'Eu <b>o</b> vi' ou 'Vi-<b>o</b>'. <br/>C) <b>Desejamos-lhe</b>: Correto. Desejar algo 'a alguém'. <br/>D) <b>Perdoei-lhe</b>: Correto. Perdoar algo 'a alguém' exige objeto indireto de pessoa."
  },
  {
    "question": "Em 'Não <b>os</b> encontramos na sala', a próclise ocorre porque:",
    "options": [
      "O verbo está no plural.",
      "Existe uma palavra negativa.",
      "O pronome termina em -s.",
      "É início de frase."
    ],
    "correct": 1,
    "explanation": "A) <b>Verbo no plural</b>: Errado. O número do verbo não influencia a posição do pronome. <br/>B) <b>Palavra negativa</b>: Correto. O advérbio 'Não' é uma palavra atrativa que exige a próclise (pronome antes do verbo). <br/>C) <b>Pronome em -s</b>: Errado. A terminação do pronome não determina a atração. <br/>D) <b>Início de frase</b>: Errado. A frase começa com o advérbio, não com o pronome."
  },
  {
    "question": "Substituindo o termo '<b>a decisão</b>' em 'Precisamos tomar a decisão', temos:",
    "options": [
      "Tomar-a",
      "Tomar-na",
      "Tomá-la",
      "Tomar-lhe"
    ],
    "correct": 2,
    "explanation": "A) <b>Tomar-a</b>: Errado. O -r final deve cair. <br/>B) <b>Tomar-na</b>: Errado. O verbo não termina em som nasal. <br/>C) <b>Tomá-la</b>: Correto. Verbo em -r perde o -r, ganha acento (se oxítona) e o pronome vira 'la'. <br/>D) <b>Tomar-lhe</b>: Errado. 'A decisão' é objeto direto."
  },
  {
    "question": "Na frase '<b>Puseram as flores</b> no vaso', a substituição do objeto resulta em:",
    "options": [
      "Puseram-nas",
      "Puseram-las",
      "Puseram-as",
      "Pusê-las"
    ],
    "correct": 0,
    "explanation": "A) <b>Puseram-nas</b>: Correto. O verbo termina em som nasal (-am), logo o pronome 'as' vira 'nas'. <br/>B) <b>Puseram-las</b>: Errado. 'Las' só ocorre após -r, -s ou -z. <br/>C) <b>Puseram-as</b>: Errado. A norma culta exige a forma nasal para eufonia. <br/>D) <b>Pusê-las</b>: Errado. Essa forma ocorreria se o verbo fosse 'Puser' (infinitivo), não 'Puseram'."
  },
  {
    "question": "Assinale a alternativa que completa corretamente: 'Nunca ____ visto antes'.",
    "options": [
      "tinha-o",
      "o tinha",
      "tinha-lo",
      "tinha-no"
    ],
    "correct": 1,
    "explanation": "A) <b>tinha-o</b>: Errado. O advérbio 'Nunca' atrai o pronome para antes do verbo. <br/>B) <b>o tinha</b>: Correto. Próclise obrigatória devido à palavra negativa 'Nunca'. <br/>C) <b>tinha-lo</b>: Errado. Não há -r, -s ou -z no verbo para justificar 'lo'. <br/>D) <b>tinha-no</b>: Errado. O verbo não termina em som nasal."
  },
  {
    "question": "Qual a forma correta para 'Eles <b>compram os livros</b>'?",
    "options": [
      "Compram-nos",
      "Compram-los",
      "Compram-os",
      "Comprá-los"
    ],
    "correct": 0,
    "explanation": "A) <b>Compram-nos</b>: Correto. Verbo termina em -am (nasal), o pronome 'os' vira 'nos'. <br/>B) <b>Compram-los</b>: Errado. Forma 'los' é exclusiva para terminações em -r, -s, -z. <br/>C) <b>Compram-os</b>: Errado. Falta a variação nasal exigida pela gramática. <br/>D) <b>Comprá-los</b>: Errado. Esta é a forma do infinitivo 'Comprar'."
  },
  {
    "question": "Em 'Dar-<b>lhe</b>-emos uma resposta', o uso da mesóclise ocorre porque:",
    "options": [
      "O verbo está no futuro do presente e não há atração.",
      "O pronome 'lhe' só pode ser usado no meio do verbo.",
      "Há uma palavra negativa oculta.",
      "O verbo está no passado."
    ],
    "correct": 0,
    "explanation": "A) <b>Futuro do presente</b>: Correto. Sem palavra atrativa, verbos no futuro exigem mesóclise se iniciarem a frase. <br/>B) <b>Uso do 'lhe'</b>: Errado. 'Lhe' pode ser usado em próclise ou ênclise também. <br/>C) <b>Palavra negativa</b>: Errado. Se houvesse negação, seria próclise ('Não lhe daremos'). <br/>D) <b>Verbo no passado</b>: Errado. O verbo 'Daremos' está no futuro."
  },
  {
    "question": "Substitua o termo: 'Encontramos <b>os documentos</b>'.",
    "options": [
      "Encontramo-los",
      "Encontramos-os",
      "Encontramos-nos",
      "Encontramo-nos"
    ],
    "correct": 0,
    "explanation": "A) <b>Encontramo-los</b>: Correto. Retira-se o -s de 'Encontramos' e adiciona-se 'los'. <br/>B) <b>Encontramos-os</b>: Errado. Incorreto segundo as regras de eufonia e gramática. <br/>C) <b>Encontramos-nos</b>: Errado. 'Nos' indicaria a 1ª pessoa do plural (nós), alterando o sentido para 'Encontramos a nós mesmos'. <br/>D) <b>Encontramo-nos</b>: Errado. Novamente, 'nos' é pronome reflexivo/pessoal de 1ª pessoa, não substituto de 'os documentos'."
  },
  {
    "question": "Na frase 'Alguém <b>o</b> chamou na porta', a próclise é:",
    "options": [
      "Facultativa.",
      "Obrigatória, pois 'Alguém' é pronome indefinido.",
      "Errada, deveria ser 'chamou-o'.",
      "Justificada pelo som nasal do verbo."
    ],
    "correct": 1,
    "explanation": "A) <b>Facultativa</b>: Errado. Pronomes indefinidos são atratores fortes. <br/>B) <b>Obrigatória</b>: Correto. Pronomes indefinidos como 'Alguém', 'Tudo', 'Ninguém' exigem próclise. <br/>C) <b>Errada</b>: Errado. A ênclise seria incorreta devido à atração do pronome indefinido. <br/>D) <b>Som nasal</b>: Errado. 'Chamou' não termina em som nasal."
  },
  {
    "question": "Como fica a frase 'Vou <b>pôr o livro</b> na estante' com a substituição do objeto?",
    "options": [
      "Vou pôr-lo",
      "Vou pô-lo",
      "Vou pôr-no",
      "Vou po-lo"
    ],
    "correct": 1,
    "explanation": "A) <b>Vou pôr-lo</b>: Errado. O -r deve ser removido. <br/>B) <b>Vou pô-lo</b>: Correto. O verbo 'pôr' termina em -r, que cai, e o pronome 'o' vira 'lo'. O acento circunflexo se mantém. <br/>C) <b>Vou pôr-no</b>: Errado. Não há terminação nasal. <br/>D) <b>Vou po-lo</b>: Errado. Falta o acento obrigatório do monossílabo tônico 'pô'."
  },
  {
    "question": "Assinale o erro de colocação pronominal:",
    "options": [
      "Me empresta a caneta.",
      "Empreste-me a caneta.",
      "Não me empreste a caneta.",
      "Quero que me empreste a caneta."
    ],
    "correct": 0,
    "explanation": "A) <b>Me empresta</b>: Errado. Pela norma culta, não se inicia frase com pronome oblíquo átono. <br/>B) <b>Empreste-me</b>: Correto. Início de frase exige ênclise. <br/>C) <b>Não me empreste</b>: Correto. 'Não' atrai o pronome (próclise). <br/>D) <b>Que me empreste</b>: Correto. A conjunção 'que' atrai o pronome (próclise)."
  },
  {
    "question": "Substituindo '<b>o resultado</b>' em 'Eles <b>querem saber o resultado</b>', temos:",
    "options": [
      "querem saber-o",
      "querem sabê-lo",
      "querem saber-lhe",
      "querem saber-no"
    ],
    "correct": 1,
    "explanation": "A) <b>saber-o</b>: Errado. O -r deve cair. <br/>B) <b>sabê-lo</b>: Correto. Verbo em -r cai a letra final e o pronome vira 'lo'. <br/>C) <b>saber-lhe</b>: Errado. 'O resultado' é objeto direto. <br/>D) <b>saber-no</b>: Errado. Sem terminação nasal no verbo 'saber'."
  }
],

"vozes_verbais":[
  {
    "question": "Identifique a voz verbal em: '<b>Conservaram-se</b> as provas.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 2,
    "explanation": "<b>Ativa</b>: Incorreta. Na voz ativa, o sujeito realiza a ação, o que não ocorre aqui.<br/><b>Passiva Analítica</b>: Incorreta. Esta voz exigiria o verbo auxiliar 'ser' (As provas foram conservadas).<br/><b>Passiva Sintética</b>: Correta. Formada pelo verbo na 3ª pessoa + partícula apassivadora 'se'.<br/><b>Reflexiva</b>: Incorreta. O sujeito não pratica e recebe a ação simultaneamente."
  },
  {
    "question": "Identifique a voz verbal em: 'As provas <b>foram conservadas</b>.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 1,
    "explanation": "<b>Ativa</b>: Incorreta. O sujeito 'as provas' sofre a ação, não a pratica.<br/><b>Passiva Analítica</b>: Correta. Apresenta a estrutura: verbo auxiliar (ser) + particípio do verbo principal.<br/><b>Passiva Sintética</b>: Incorreta. Não utiliza a partícula 'se'.<br/><b>Reflexiva</b>: Incorreta. Não há ideia de ação voltada para o próprio sujeito."
  },
  {
    "question": "Identifique a voz verbal em: 'Não <b>se discutiram</b> as reformas.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 2,
    "explanation": "<b>Ativa</b>: Incorreta. O sujeito 'as reformas' é paciente.<br/><b>Passiva Analítica</b>: Incorreta. Não há locução verbal com o verbo 'ser'.<br/><b>Passiva Sintética</b>: Correta. O 'se' atua como partícula apassivadora junto ao verbo transitivo direto.<br/><b>Reflexiva</b>: Incorreta. As reformas não discutem a si mesmas."
  },
  {
    "question": "Identifique a voz verbal em: 'As reformas não <b>foram discutidas</b>.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 1,
    "explanation": "<b>Ativa</b>: Incorreta. O sujeito sofre a ação de não ser discutido.<br/><b>Passiva Analítica</b>: Correta. Estrutura clássica de voz passiva com o verbo auxiliar 'foram' + particípio 'discutidas'.<br/><b>Passiva Sintética</b>: Incorreta. A passiva sintética exigiria o pronome 'se'.<br/><b>Reflexiva</b>: Incorreta. Não indica ação reflexiva."
  },
  {
    "question": "Identifique a voz verbal em: '<b>Roubaram</b> meu carro.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 0,
    "explanation": "<b>Ativa</b>: Correta. Embora o sujeito seja indeterminado, o verbo está na 3ª pessoa do plural executando a ação.<br/><b>Passiva Analítica</b>: Incorreta. Não há verbo auxiliar + particípio.<br/><b>Passiva Sintética</b>: Incorreta. Não há presença da partícula apassivadora 'se'.<br/><b>Reflexiva</b>: Incorreta. O sujeito não sofre a ação que ele mesmo praticou."
  },
  {
    "question": "Identifique a voz verbal em: 'O professor <b>leu</b> o livro.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 0,
    "explanation": "<b>Ativa</b>: Correta. O sujeito 'O professor' é o agente que pratica a ação de ler.<br/><b>Passiva Analítica</b>: Incorreta. O foco está no agente, não no objeto sofrido.<br/><b>Passiva Sintética</b>: Incorreta. Não há partícula 'se'.<br/><b>Reflexiva</b>: Incorreta. A ação não recai sobre o próprio professor."
  },
  {
    "question": "Identifique a voz verbal em: 'O livro <b>foi lido</b> pelo professor.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 1,
    "explanation": "<b>Ativa</b>: Incorreta. Na ativa seria 'O professor leu o livro'.<br/><b>Passiva Analítica</b>: Correta. O sujeito 'O livro' recebe a ação, com presença de verbo auxiliar e agente da passiva.<br/><b>Passiva Sintética</b>: Incorreta. Não utiliza a estrutura verbo + 'se'.<br/><b>Reflexiva</b>: Incorreta. Não há reflexividade na ação."
  },
  {
    "question": "Identifique a voz verbal em: '<b>Entregaram-se</b> os prêmios aos alunos.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 2,
    "explanation": "<b>Ativa</b>: Incorreta. O sujeito 'os prêmios' não entrega nada.<br/><b>Passiva Analítica</b>: Incorreta. Seria 'Os prêmios foram entregues'.<br/><b>Passiva Sintética</b>: Correta. Verbo + pronome apassivador 'se' com sujeito paciente 'os prêmios'.<br/><b>Reflexiva</b>: Incorreta. Os prêmios não praticam ação sobre si mesmos."
  },
  {
    "question": "Identifique a voz verbal em: 'Aquela triste notícia <b>foi dada</b> pelo pai.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 1,
    "explanation": "<b>Ativa</b>: Incorreta. Na ativa seria 'O pai deu aquela triste notícia'.<br/><b>Passiva Analítica</b>: Correta. O sujeito sofre a ação expressa pela locução verbal (verbo ser + particípio).<br/><b>Passiva Sintética</b>: Incorreta. Não apresenta o pronome 'se'.<br/><b>Reflexiva</b>: Incorreta. Não se trata de uma ação que retorna ao sujeito."
  },
  {
    "question": "Identifique a voz verbal em: 'O estudante <b>cortou-se</b> durante o exercício.'",
    "options": [
      "Ativa",
      "Passiva Analítica",
      "Passiva Sintética",
      "Reflexiva"
    ],
    "correct": 3,
    "explanation": "<b>Ativa</b>: Incorreta. O sujeito não apenas pratica, mas também sofre a ação.<br/><b>Passiva Analítica</b>: Incorreta. Não há a locução verbal característica (ser + particípio).<br/><b>Passiva Sintética</b>: Incorreta. O 'se' aqui não é apassivador, mas reflexivo.<br/><b>Reflexiva</b>: Correta. O sujeito 'O estudante' pratica a ação de cortar e ele mesmo sofre a consequência."
  }
],

"concordancia_nominal":[
  {
    "question": "1. Em relação à concordância nominal, a ordem que preenche corretamente as lacunas é :\nI. Justiça entre os homens é ...................\nII. É ......................... a entrada de pessoas estranhas.\nIII. A água gelada sempre é .....................",
    "options": [
      "a) necessário, proibida, gostosa.",
      "b) necessária, proibida, gostoso.",
      "c) necessário, proibida, gostoso.",
      "d) necessária, proibido, gostoso.",
      "e) necessário, proibido, gostosa."
    ],
    "correct": 0,
    "explanation": "a) Correta. I: 'Justiça' sem artigo exige o masculino (necessário); II: 'a entrada' com artigo exige concordância (proibida); III: 'A água' com artigo exige concordância (gostosa).<br/>b) Incorreta. I deveria ser 'necessário' (sem artigo) e III deveria ser 'gostosa'.<br/>c) Incorreta. III deveria ser 'gostosa' para concordar com 'A água'.<br/>d) Incorreta. I deveria ser 'necessário' e II deveria ser 'proibida' (devido ao artigo 'a').<br/>e) Incorreta. II deveria ser 'proibida' por causa do artigo que determina o sujeito."
  },
  {
    "question": "2. Assinale a opção em que a concordância nominal está incorreta:",
    "options": [
      "a) As matas foram bastante danificadas pelo fogo.",
      "b) Ele trazia muito bem tratados a barba e os cabelos.",
      "c) O carro tinha um dos faróis queimados.",
      "d) Há muitos anos que coleciono selos e moedas raros.",
      "e) Nesta circunstância, Vossa Excelência está enganado, Doutor Juiz!"
    ],
    "correct": 2,
    "explanation": "a) Correta. 'Bastante' é advérbio (muito) e 'danificadas' concorda com 'matas'.<br/>b) Correta. O adjetivo anteposto 'tratados' concorda com o conjunto ou o mais próximo (masculino plural predomina).<br/>c) Incorreta (Gabarito). Na expressão 'um dos... que', o adjetivo/particípio deve concordar com o numeral: 'um dos faróis queimado'.<br/>d) Correta. 'Raros' concorda com 'selos e moedas'.<br/>e) Correta. A concordância de Vossa Excelência (silepse de gênero) faz-se com o sexo da pessoa a quem se refere (Doutor Juiz)."
  },
  {
    "question": "3. Em relação à concordância nominal, a ordem que preenche corretamente as lacunas é:\n\"Vai ............... à carta minha fotografia. Essas pessoas cometeram um crime de ............\npatriotismo. Elas .............. não quiseram colaborar com a campanha.\"",
    "options": [
      "a) incluso, leso, mesmo.",
      "b) inclusa, leso, mesmas.",
      "c) inclusa, lesa, mesmas.",
      "d) incluso, lesa, mesmas.",
      "e) incluso, lesa, mesmo."
    ],
    "correct": 1,
    "explanation": "a) Incorreta. 'Inclusa' deve concordar com 'fotografia' e 'mesmas' com 'elas'.<br/>b) Correta. 'Inclusa' (concortda com fotografia), 'leso' (concorda com patriotismo), 'mesmas' (concorda com elas).<br/>c) Incorreta. 'Leso' concorda com o substantivo masculino 'patriotismo'.<br/>d) Incorreta. 'Inclusa' deve ser feminino e 'leso' deve ser masculino.<br/>e) Incorreta. 'Inclusa' concorda com fotografia e 'mesmas' concorda com elas."
  },
  {
    "question": "4. Em relação à concordância nominal, a ordem que preenche corretamente as lacunas é: \n\" Vão ................... aos processos várias fotografias. Paisagens as mais belas ................ .\n Ela estava .......................... narcotizada.\"",
    "options": [
      "a) anexas, possíveis, meio.",
      "b) anexas, possível, meio.",
      "c) anexo, possíveis, meia.",
      "d) anexo, possível, meio.",
      "e) anexo, possível, meia."
    ],
    "correct": 0,
    "explanation": "a) Correta. 'Anexas' (com fotografias), 'possíveis' (concorda com 'as mais'), 'meio' (advérbio = um pouco).<br/>b) Incorreta. 'Possíveis' deve estar no plural acompanhando 'as belas'.<br/>c) Incorreta. 'Anexo' deve ser 'anexas' e 'meia' não existe como advérbio de intensidade.<br/>d) Incorreta. 'Anexas' e 'possíveis' deveriam estar no plural.<br/>e) Incorreta. Erro em todos os termos: deveria ser anexas, possíveis e meio."
  },
  {
    "question": "5. Uma das frases abaixo possui erro de concordância. Indique-a.",
    "options": [
      "a) Havia menos flores no jardim.",
      "b) Recebeu bastante elogios.",
      "c) Permanecemos alerta.",
      "d) Comprou caro os papéis.",
      "e) As casas custam barato."
    ],
    "correct": 1,
    "explanation": "a) Correta. 'Menos' é palavra invariável.<br/>b) Incorreta (Gabarito). 'Bastante' aqui é adjetivo (muitos) e deve concordar com o substantivo: 'bastantes elogios'.<br/>c) Correta. 'Alerta' é advérbio, portanto invariável.<br/>d) Correta. 'Caro' funciona como advérbio (pelo preço de).<br/>e) Correta. 'Barato' funciona como advérbio."
  },
  {
    "question": "6. Assinale o erro de concordância nominal.",
    "options": [
      "a) – Muito obrigada, disse ela.",
      "b) Só as mulheres foram interrogadas.",
      "c) Eles estavam só.",
      "d) Já era meio-dia e meia.",
      "e) Sós, ficaram tristes."
    ],
    "correct": 2,
    "explanation": "a) Correta. Mulher diz 'obrigada'.<br/>b) Correta. 'Só' como 'apenas' é invariável.<br/>c) Incorreta (Gabarito). 'Só' com sentido de 'sozinho' é adjetivo e deve variar: 'Eles estavam sós'.<br/>d) Correta. 'Meia' concorda com 'hora' (implícito).<br/>e) Correta. 'Sós' (sozinhos) concorda com o sujeito plural."
  },
  {
    "question": "7. Em qual frase abaixo não se cometeu erro de concordância nominal?",
    "options": [
      "a) Seriam verdades o mais duras possíveis.",
      "b) As crianças estavam bastantes cansadas.",
      "c) Não me venha com meias palavras.",
      "d) Carlos está quites com o colégio.",
      "e) havia bastante montanhas naquela região."
    ],
    "correct": 2,
    "explanation": "a) Incorreta. O correto seria 'as mais duras possíveis' ou 'o mais duras possível'.<br/>b) Incorreta. 'Bastante' é advérbio de intensidade (muito), logo, invariável.<br/>c) Correta (Gabarito). 'Meias' concorda com o substantivo 'palavras' (numeral fracionário).<br/>d) Incorreta. 'Quite' deve concordar com o sujeito: 'Carlos está quite'.<br/>e) Incorreta. 'Bastantes' deveria concordar com 'montanhas' (muitas montanhas)."
  },
  {
    "question": "8. Aponte o erro de concordância.",
    "options": [
      "a) Péssimo lugar e ocasião escolheste.",
      "b) Escolheste lugar e ocasião péssimos.",
      "c) Precisamos de rapaz e moça altos.",
      "d) Anexo ao processo, encaminhamos duas fotos.",
      "e) Seguem em anexo alguns documentos."
    ],
    "correct": 3,
    "explanation": "a) Correta. O adjetivo anteposto pode concordar com o mais próximo.<br/>b) Correta. O adjetivo posposto concorda com o conjunto (masculino plural).<br/>c) Correta. O adjetivo concorda com o conjunto.<br/>d) Incorreta (Gabarito). O adjetivo 'anexo' deve concordar com o substantivo 'fotos': 'Anexas ao processo...'.<br/>e) Correta. A expressão 'em anexo' é considerada invariável por muitos gramáticos."
  },
  {
    "question": "9. Só não há erro de concordância nominal em:",
    "options": [
      "a) Motocicleta é perigosa.",
      "b) Haverá bastantes oportunidades.",
      "c) Cometeu crime de lesa-patriotismo.",
      "d) Nós mesmo faremos o requerimento.",
      "e) Obrigada, respondeu ele."
    ],
    "correct": 1,
    "explanation": "a) Incorreta. Sem artigo, o predicativo fica no masculino: 'Motocicleta é perigoso'.<br/>b) Correta (Gabarito). 'Bastantes' concorda com 'oportunidades' (muitas oportunidades).<br/>c) Incorreta. O termo é 'leso-patriotismo' (leso concorda com patriotismo).<br/>d) Incorreta. Deveria ser 'Nós mesmos' (plural).<br/>e) Incorreta. Homem diz 'obrigado'."
  },
  {
    "question": "10. Está errada a concordância em:",
    "options": [
      "a) Não será permitida a permanência de estranhos.",
      "b) Todos permaneceram sós.",
      "c) Um e outro funcionário se apresentaram.",
      "d) Por nenhuns motivos eu irei.",
      "e) Cebola é ótima no combate à gripe"
    ],
    "correct": 4,
    "explanation": "a) Correta. 'Permitida' concorda com 'a permanência'.<br/>b) Correta. 'Sós' concorda com 'Todos'.<br/>c) Correta. Com 'um e outro', o verbo pode ir ao plural e o substantivo fica no singular.<br/>d) Correta. 'Nenhum' pode variar em casos de ênfase acompanhando substantivo plural.<br/>e) Incorreta (Gabarito). Sem o artigo 'a' antes de 'cebola', o adjetivo deve ser masculino: 'Cebola é ótimo'."
  },
  {
    "question": "11. Aponte o erro de concordância nominal.\na) Andei por longes terras.\nb) Ela chegou toda machucada.\nc) Carla anda meio aborrecida.\nd) Elas não progredirão por si mesmo.\ne) Ela própria nos procurou.",
    "options": [
      "a) Andei por longes terras.",
      "b) Ela chegou toda machucada.",
      "c) Carla anda meio aborrecida.",
      "d) Elas não progredirão por si mesmo.",
      "e) Ela própria nos procurou."
    ],
    "correct": 3,
    "explanation": "a) Correta. 'Longes' funciona como adjetivo concordando com 'terras'.<br/>b) Correta. 'Toda' concorda com o sujeito 'Ela'.<br/>c) Correta. 'Meio' é advérbio de intensidade (um pouco), portanto invariável.<br/>d) Incorreta (Gabarito). O pronome reflexivo 'mesmo' deve concordar com o sujeito plural: 'por si mesmas'.<br/>e) Correta. 'Própria' concorda corretamente com 'Ela'."
  },
  {
    "question": "12. Aponte o erro de concordância.\n\na) Ficou calada a natureza, a terra e os homens.\nb) Vi bastantes pessoas lá.\nc) Só eles não falaram nada.\nd) Sós, eles não falaram nada.\ne) Parou e olhou para um e outro lados.",
    "options": [
      "a) Ficou calada a natureza, a terra e os homens.",
      "b) Vi bastantes pessoas lá.",
      "c) Só eles não falaram nada.",
      "d) Sós, eles não falaram nada.",
      "e) Parou e olhou para um e outro lados."
    ],
    "correct": 4,
    "explanation": "a) Correta. O adjetivo anteposto pode concordar com o núcleo mais próximo ('a natureza').<br/>b) Correta. 'Bastantes' é adjetivo (muitas) e concorda com 'pessoas'.<br/>c) Correta. 'Só' com sentido de 'apenas' é invariável.<br/>d) Correta. 'Sós' com sentido de 'sozinhos' concorda com 'eles'.<br/>e) Incorreta (Gabarito). Na expressão 'um e outro', o substantivo deve obrigatoriamente ficar no singular: 'um e outro lado'."
  },
  {
    "question": "13. O item em que ocorre concordância nominal inaceitável é:\na) Era uma árvore cujas folhas e frutos bem diziam de sua utilidade.\nb) Vinha com bolsos e mãos cheios de dinheiro.\nc) Ela sempre anda meia assustada.\nd) Envio-lhe anexas as declarações de bens.\ne) Elas próprias assim o queriam. ",
    "options": [
      "a) Era uma árvore cujas folhas e frutos bem diziam de sua utilidade.",
      "b) Vinha com bolsos e mãos cheios de dinheiro.",
      "c) Ela sempre anda meia assustada.",
      "d) Envio-lhe anexas as declarações de bens.",
      "e) Elas próprias assim o queriam."
    ],
    "correct": 2,
    "explanation": "a) Correta. O pronome relativo 'cujas' concorda com o substantivo posterior 'folhas'.<br/>b) Correta. O adjetivo 'cheios' concorda com o conjunto (masculino plural prevalece).<br/>c) Incorreta (Gabarito). 'Meio' é advérbio (um pouco) e deve ser invariável: 'meio assustada'.<br/>d) Correta. 'Anexas' concorda com 'as declarações'.<br/>e) Correta. 'Próprias' concorda com 'Elas'."
  },
  {
    "question": "14. Aponte a frase cuja concordância não está de\nacordo com a norma culta da língua.\n\na) Não gosto de meias medidas.\nb) Voltou a todo-poderosa.\nc) Ela emagrecia a olhos vistos.\nd) Ela ficou meio perturbada.\ne) É proibida entrada de pessoas estranhas ao serviço.",
    "options": [
      "a) Não gosto de meias medidas.",
      "b) Voltou a todo-poderosa.\nc) Ela emagrecia a olhos vistos.",
      "d) Ela ficou meio perturbada.",
      "e) É proibida entrada de pessoas estranhas ao serviço."
    ],
    "correct": 4,
    "explanation": "a) Correta. 'Meias' é adjetivo concordando com 'medidas'.<br/>b) Correta. 'Todo' em 'todo-poderosa' é advérbio e fica invariável.<br/>c) Correta. A expressão 'a olhos vistos' é fixa e invariável.<br/>d) Correta. 'Meio' (um pouco) é advérbio invariável.<br/>e) Incorreta (Gabarito). Sem o artigo definido 'a' antes de entrada, a expressão deve ser masculina: 'É proibido entrada'."
  },
  {
    "question": "15. Assinale a frase com erro de concordância.\na) Trazia pintados o cabelo e as sobrancelhas.\nb) Estava nervosa a menina e seu pai.\nc) Chegou a pseudassábia.\nd) Desenvolvemos uma atividade monstro.\ne) Anexo segue um bom glossário.",
    "options": [
      "a) Trazia pintados o cabelo e as sobrancelhas.",
      "b) Estava nervosa a menina e seu pai.",
      "c) Chegou a pseudassábia.\n",
      "d) Desenvolvemos uma atividade monstro.",
      "e) Anexo segue um bom glossário."
    ],
    "correct": 2,
    "explanation": "a) Correta. 'Pintados' concorda com o conjunto no masculino plural.<br/>b) Correta. O adjetivo anteposto concorda com o núcleo mais próximo ('a menina').<br/>c) Incorreta (Gabarito). O prefixo 'pseudo' é invariável, não deve haver variação de gênero para 'pseuda'.<br/>d) Correta. Substantivos usados como adjetivos para indicar qualidade/tipo (como monstro) podem ficar invariáveis.<br/>e) Correta. 'Anexo' concorda com 'glossário'."
  },
  {
    "question": "16. Há erro na concordância de um item.\na) Todos estávamos alerta, no quartel.\nb) Eu já estou quites com as mensalidades.\nc) Há menos pessoas aqui, nesta noite.\nd) Um e outro advogado são hábeis.\ne) Uma e outra resposta está correta.",
    "options": [
      "a) Todos estávamos alerta, no quartel.",
      "b) Eu já estou quites com as mensalidades.",
      "c) Há menos pessoas aqui, nesta noite.",
      "d) Um e outro advogado são hábeis.",
      "e) Uma e outra resposta está correta."
    ],
    "correct": 1,
    "explanation": "a) Correta. 'Alerta' é advérbio e não varia.<br/>b) Incorreta (Gabarito). O adjetivo 'quite' concorda com o sujeito: 'Eu estou quite'.<br/>c) Correta. 'Menos' é invariável.<br/>d) Correta. Com 'um e outro', o adjetivo/predicativo deve ir para o plural.<br/>e) Correta. O substantivo fica no singular, mas o verbo pode ficar no singular ou plural."
  },
  {
    "question": "17. “Torna-se ...................., para o povo brasileiro, a percepção de que um estudo\nprofundo se faz preciso, haja .................... os índices altos da criminalidade no país.\nAssinale a opção que completa corretamente as lacunas.",
    "options": [
      "a) necessário - vistos",
      "b) necessário - visto",
      "c) necessária - vista",
      "d) necessário - vista",
      "e) necessária - vistos"
    ],
    "correct": 2,
    "explanation": "a) Incorreta. 'Necessária' deve concordar com 'a percepção'.<br/>b) Incorreta. O primeiro termo deve ser feminino e o segundo faz parte da expressão 'haja vista'.<br/>c) Correta (Gabarito). 'Necessária' (concorda com 'a percepção') e 'haja vista' (expressão invariável ou concordando com o termo seguinte).<br/>d) Incorreta. O termo 'necessário' deve variar para o feminino.<br/>e) Incorreta. Embora 'necessária' esteja correto, 'vistos' não se aplica na expressão fixa 'haja vista'."
  },
  {
    "question": "18. Assinale a alternativa que completa corretamente as lacunas da frase abaixo:\n“É ________ discussão entre homens e mulheres ________ ao mesmo ideal, pois já se\ndisse ________ vezes que da discussão, ainda que ________ acalorada, nasce a luz”.",
    "options": [
      "a) bom ‑ voltados ‑ bastantes ‑ meio.",
      "b) bom ‑ voltadas ‑ bastante ‑ meia.",
      "c) boa - voltadas ‑ bastantes ‑ meio.",
      "d) boa - voltados ‑ bastante ‑ meia.",
      "e) bom ‑ voltadas ‑ bastantes ‑ meia."
    ],
    "correct": 0,
    "explanation": "a) Correta (Gabarito). 'bom' (expressão 'é bom' sem artigo é invariável), 'voltados' (homens e mulheres), 'bastantes' (muitas vezes), 'meio' (um pouco).<br/>b) Incorreta. 'Meia' não é advérbio e 'bastante' deveria estar no plural.<br/>c) Incorreta. 'Boa' exigiria o artigo 'a' antes de discussão; 'voltadas' ignora o elemento masculino.<br/>d) Incorreta. 'Bastante' deveria ser plural e 'meia' não pode ser advérbio.<br/>e) Incorreta. 'Meia' está incorreto como advérbio de intensidade."
  },
  {
    "question": "19. Considerando a concordância nominal, assinale a frase correta:",
    "options": [
      "a) Ela mesmo confirmou a realização do encontro.",
      "b) Foi muito criticado pelos jornais a reedição da obra.",
      "c) Ela ficou meia preocupada com a notícia.",
      "d) Muito obrigada, querido, falou‑me emocionada.",
      "e) Anexo, remeto‑lhes nossas últimas fotografias."
    ],
    "correct": 3,
    "explanation": "a) Incorreta. Deveria ser 'Ela mesma'.<br/>b) Incorreta. Deveria ser 'criticada' para concordar com 'a reedição'.<br/>c) Incorreta. 'Meia' é metade; como advérbio deve ser 'meio'.<br/>d) Correta (Gabarito). 'Obrigada' concorda com a pessoa do sexo feminino que fala.<br/>e) Incorreta. 'Anexas' deveria concordar com 'fotografias'."
  },
  {
    "question": "20. Preencha as lacunas das frases abaixo.\nVocês estão ______________ com a tesouraria.\nAs janelas ___________ abertas deixavam entrar a leve brisa.\nVai ___________ à presente a relação dos livros solicitados.\nAs matas foram ______________ danificadas pelo fogo.\nÉ ________________ a entrada de animais.\nA alternativa contendo a sequência verdadeira, de cima para baixo, é:",
    "options": [
      "a) quite – meia – anexa – bastantes – proibida.",
      "b) quites – meia – anexa – bastantes – proibida.",
      "c) quite – meio – anexo – bastante – proibido.",
      "d) quites – meio – anexa – bastante – proibida.",
      "e) quites – meio – anexo – bastante – proibido."
    ],
    "correct": 3,
    "explanation": "a) Incorreta. 'Quites' deve estar no plural e 'meio' deve ser invariável.<br/>b) Incorreta. 'Meio' é advérbio e não deve ser 'meia'.<br/>c) Incorreta. 'Quites' deve ser plural e 'anexa' deve ser feminino para concordar com 'relação'.<br/>d) Correta (Gabarito). 'Quites' (plural), 'meio' (advérbio), 'anexa' (relação), 'bastante' (advérbio), 'proibida' (devido ao artigo 'a').<br/>e) Incorreta. 'Anexo' deve ser 'anexa' e 'proibido' deve ser 'proibida' devido ao artigo definido."
  }
],
"art_prep_pron":[
 {
    "question": "Analise a morfologia dos termos destacados: \"<b>A</b> diretora <b>a</b> chamou para <b>a</b> reunião.\"",
    "options": [
      "A) Artigo definido, Pronome oblíquo, Preposição.",
      "B) Artigo definido, Pronome oblíquo, Artigo definido.",
      "C) Preposição, Pronome oblíquo, Artigo definido.",
      "D) Artigo definido, Artigo definido, Artigo definido."
    ],
    "correct": 1,
    "explanation": "A) Incorreta. O último 'a' acompanha o substantivo 'reunião', sendo artigo, não preposição.<br/>B) Correta. O primeiro 'a' acompanha 'diretora' (artigo); o segundo substitui uma pessoa (pronome oblíquo); o terceiro acompanha 'reunião' (artigo).<br/>C) Incorreta. O primeiro 'a' não é preposição, pois não liga termos com regência, apenas determina o substantivo.<br/>D) Incorreta. O segundo 'a' não determina um substantivo, ele substitui um objeto direto (ela), sendo pronome."
  },
  {
    "question": "Identifique a classe gramatical do termo destacado em: \"Não ouvi <b>o</b> que você disse.\"",
    "options": [
      "A) Artigo definido.",
      "B) Pronome oblíquo átono.",
      "C) Pronome demonstrativo.",
      "D) Preposição."
    ],
    "correct": 2,
    "explanation": "A) Incorreta. Para ser artigo, deveria anteceder um substantivo claro, o que não ocorre antes de 'que'.<br/>B) Incorreta. Embora pareça um pronome de objeto, ele equivale a 'aquilo', exercendo função demonstrativa.<br/>C) Correta. O 'o' antes do 'que' equivale a 'aquilo' (Não ouvi aquilo que você disse), classificando-se como pronome demonstrativo.<br/>D) Incorreta. 'O' nunca exerce função de preposição na língua portuguesa."
  },
  {
    "question": "Qual a classificação dos termos em: \"Ele se recusa <b>a</b> aceitar <b>a</b> decisão.\"",
    "options": [
      "A) Preposição e Artigo definido.",
      "B) Artigo definido e Preposição.",
      "C) Pronome oblíquo e Artigo definido.",
      "D) Preposição e Pronome demonstrativo."
    ],
    "correct": 0,
    "explanation": "A) Correta. O primeiro 'a' é preposição exigida pelo verbo 'recusar-se' (quem se recusa, se recusa a algo); o segundo acompanha o substantivo 'decisão' (artigo).<br/>B) Incorreta. A ordem está invertida: a preposição vem antes do verbo no infinitivo.<br/>C) Incorreta. O primeiro 'a' não substitui ninguém, ele liga o verbo ao seu complemento.<br/>D) Incorreta. O segundo 'a' é um artigo, pois apenas determina o gênero e o número do substantivo seguinte."
  },
  {
    "question": "Na frase \"Eu <b>o</b> vi n<b>o</b> shopping\", os termos destacados são:",
    "options": [
      "A) Artigo definido e Artigo definido.",
      "B) Pronome oblíquo e Pronome demonstrativo.",
      "C) Pronome demonstrativo e Artigo definido.",
      "D) Pronome oblíquo e Artigo definido."
    ],
    "correct": 3,
    "explanation": "A) Incorreta. O primeiro 'o' substitui uma pessoa (ele), logo é pronome, não artigo.<br/>B) Incorreta. O 'o' dentro da contração 'no' (em + o) tem valor de artigo definido.<br/>C) Incorreta. O primeiro 'o' funciona como objeto direto do verbo ver, não aponta para algo como demonstrativo.<br/>D) Correta. O primeiro 'o' é pronome pessoal oblíquo (substitui 'ele'); o segundo 'o' (em 'no') é artigo definido que acompanha 'shopping'."
  },
  {
    "question": "Em \"Sua voz é igual <b>a</b> de um anjo\", o termo em destaque é:",
    "options": [
      "A) Artigo definido.",
      "B) Pronome demonstrativo.",
      "C) Preposição.",
      "D) Pronome oblíquo."
    ],
    "correct": 1,
    "explanation": "A) Incorreta. Não há substantivo feminino imediatamente depois para ser determinado por ele.<br/>B) Correta. O 'a' equivale a 'aquela' (Sua voz é igual àquela de um anjo). Quando o 'a' antecede o 'de' com esse sentido, é pronome demonstrativo.<br/>C) Incorreta. Embora a frase pudesse ter crase (igual à), o 'a' destacado isoladamente nesta estrutura assume papel pronominal.<br/>D) Incorreta. Não substitui um termo mencionado anteriormente como objeto direto/indireto."
  },
  {
    "question": "Classifique o \"o\" na frase: \"<b>O</b> rapaz não <b>o</b> ajudou.\"",
    "options": [
      "A) Artigo definido e Pronome demonstrativo.",
      "B) Pronome oblíquo e Artigo definido.",
      "C) Artigo definido e Pronome oblíquo.",
      "D) Pronome demonstrativo e Pronome oblíquo."
    ],
    "correct": 2,
    "explanation": "A) Incorreta. O segundo 'o' não equivale a 'aquilo', mas sim a 'ele'.<br/>B) Incorreta. A ordem está invertida: o artigo vem primeiro acompanhando o substantivo.<br/>C) Correta. O primeiro 'o' define o substantivo 'rapaz' (artigo); o segundo substitui a pessoa que receberia ajuda (pronome oblíquo).<br/>D) Incorreta. O primeiro 'o' é um simples determinante, não indica posição ou retoma ideia complexa."
  },
  {
    "question": "Na frase \"Refiro-me <b>a</b> <b>o</b> que você ignorou\", os termos são:",
    "options": [
      "A) Preposição e Artigo definido.",
      "B) Preposição e Pronome demonstrativo.",
      "C) Artigo definido e Pronome demonstrativo.",
      "D) Pronome oblíquo e Pronome demonstrativo."
    ],
    "correct": 1,
    "explanation": "A) Incorreta. O 'o' não acompanha um substantivo, portanto não é artigo.<br/>B) Correta. O 'a' é preposição exigida pelo verbo 'referir-se'; o 'o' é pronome demonstrativo pois equivale a 'aquilo'.<br/>C) Incorreta. O verbo 'referir-se' exige preposição, impossibilitando que o primeiro 'a' seja apenas artigo.<br/>D) Incorreta. O 'a' é uma exigência de regência nominal/verbal, não um pronome de substituição."
  },
  {
    "question": "Analise: \"<b>A</b> verdade, eu não <b>a</b> sei.\"",
    "options": [
      "A) Artigo definido e Pronome oblíquo.",
      "B) Preposição e Pronome oblíquo.",
      "C) Artigo definido e Pronome demonstrativo.",
      "D) Pronome oblíquo e Pronome oblíquo."
    ],
    "correct": 0,
    "explanation": "A) Correta. O primeiro 'a' acompanha o substantivo 'verdade' (artigo); o segundo 'a' retoma o substantivo 'verdade' como objeto do verbo saber (pronome oblíquo).<br/>B) Incorreta. Não há regência que exija preposição no início da frase.<br/>C) Incorreta. O segundo 'a' não significa 'aquela', ele retoma um termo literal anterior.<br/>D) Incorreta. O primeiro 'a' não substitui nada, ele inicia a sentença determinando o nome."
  },
  {
    "question": "Em \"Tudo <b>o</b> que brilha é ouro\", o termo destacado é:",
    "options": [
      "A) Artigo definido.",
      "B) Pronome demonstrativo.",
      "C) Pronome pessoal oblíquo.",
      "D) Preposição."
    ],
    "correct": 1,
    "explanation": "A) Incorreta. 'Que' não é substantivo para ser definido por artigo.<br/>B) Correta. Faz parte da estrutura clássica 'o que', onde o 'o' equivale a 'aquilo'.<br/>C) Incorreta. Não está substituindo uma pessoa na função de objeto.<br/>D) Incorreta. Não possui função conectiva de subordinação."
  },
  {
    "question": "Na frase \"Assisti <b>a</b> <b>o</b> filme\", os termos são respectivamente:",
    "options": [
      "A) Artigo e Artigo.",
      "B) Preposição e Pronome.",
      "C) Preposição e Artigo.",
      "D) Artigo e Preposição."
    ],
    "correct": 2,
    "explanation": "A) Incorreta. O primeiro termo é uma exigência do verbo assistir (no sentido de ver).<br/>B) Incorreta. 'Filme' é substantivo, logo exige um artigo, não um pronome.<br/>C) Correta. No sentido de 'ver', o verbo assistir rege a preposição 'a'; 'filme' é precedido pelo artigo 'o'. (Comumente fundidos em 'ao').<br/>D) Incorreta. A ordem gramatical coloca a preposição antes do artigo que acompanha o substantivo."
  }
  ,{
    "question": "Identifique a classificação dos termos destacados na frase: '<b>O</b> diretor <b>me</b> chamou para <b>esta</b> reunião.'",
    "options": [
      "a) Artigo definido, Pronome oblíquo átono, Pronome demonstrativo.",
      "b) Artigo indefinido, Pronome reto, Pronome demonstrativo.",
      "c) Artigo definido, Pronome relativo, Preposição.",
      "d) Preposição, Pronome oblíquo átono, Artigo definido."
    ],
    "correct": 0,
    "explanation": "a) Correta. 'O' define o substantivo diretor; 'me' é pronome pessoal oblíquo átono; 'esta' indica proximidade do falante (demonstrativo).<br/>b) Incorreta. 'O' não é indefinido e 'me' não é pronome reto.<br/>c) Incorreta. 'me' não é relativo e 'esta' não é preposição.<br/>d) Incorreta. 'O' é artigo, não preposição."
  },
  {
    "question": "Na frase 'Entreguei-<b>lhe</b> <b>as</b> chaves <b>do</b> carro', os termos em negrito são, respectivamente:",
    "options": [
      "a) Pronome demonstrativo, Preposição, Artigo definido.",
      "b) Pronome oblíquo átono, Artigo definido, Preposição (contraída).",
      "c) Artigo definido, Pronome oblíquo átono, Preposição.",
      "d) Pronome reto, Artigo definido, Pronome demonstrativo."
    ],
    "correct": 1,
    "explanation": "a) Incorreta. 'Lhe' não é demonstrativo e 'as' não é preposição.<br/>b) Correta. 'Lhe' é oblíquo átono (objeto indireto); 'as' é artigo definido; 'do' é a contração da preposição 'de' com o artigo 'o'.<br/>c) Incorreta. A ordem dos termos está trocada.<br/>d) Incorreta. 'Lhe' é oblíquo, não reto; 'do' não é pronome."
  },
  {
    "question": "Em '<b>A</b> decisão <b>de</b> Pedro surpreendeu <b>aquele</b> grupo', as classes gramaticais são:",
    "options": [
      "a) Preposição, Artigo definido, Pronome demonstrativo.",
      "b) Pronome oblíquo átono, Preposição, Artigo definido.",
      "c) Artigo definido, Preposição, Pronome demonstrativo.",
      "d) Artigo definido, Artigo definido, Pronome oblíquo átono."
    ],
    "correct": 2,
    "explanation": "a) Incorreta. 'A' é artigo, não preposição.<br/>b) Incorreta. 'A' acompanha o substantivo, logo é artigo, não pronome oblíquo.<br/>c) Correta. 'A' é artigo definido; 'de' liga os substantivos (preposição); 'aquele' aponta o grupo (demonstrativo).<br/>d) Incorreta. 'De' não é artigo e 'aquele' não é pronome oblíquo."
  },
  {
    "question": "Analise os termos: 'Ninguém <b>se</b> lembrou <b>daquelas</b> fotos <b>no</b> armário.'",
    "options": [
      "a) Pronome oblíquo átono, Pronome demonstrativo, Preposição (contraída).",
      "b) Pronome reto, Pronome demonstrativo, Artigo definido.",
      "c) Pronome oblíquo átono, Preposição, Pronome relativo.",
      "d) Artigo definido, Pronome demonstrativo, Preposição."
    ],
    "correct": 0,
    "explanation": "a) Correta. 'Se' é pronome oblíquo átono; 'daquelas' é contração de preposição + demonstrativo (de + aquelas); 'no' é contração de preposição + artigo (em + o).<br/>b) Incorreta. 'Se' não é pronome reto.<br/>c) Incorreta. 'No' não é pronome relativo.<br/>d) Incorreta. 'Se' não é artigo definido."
  },
  {
    "question": "Qual opção classifica corretamente os termos de: '<b>Isso</b> <b>o</b> incomoda <b>desde</b> ontem?'",
    "options": [
      "a) Pronome oblíquo átono, Artigo definido, Preposição.",
      "b) Pronome demonstrativo, Pronome oblíquo átono, Preposição.",
      "c) Pronome demonstrativo, Artigo definido, Pronome oblíquo átono.",
      "d) Artigo definido, Pronome demonstrativo, Preposição."
    ],
    "correct": 1,
    "explanation": "a) Incorreta. 'Isso' é demonstrativo, não oblíquo.<br/>b) Correta. 'Isso' aponta um fato (demonstrativo); 'o' substitui um substantivo antes do verbo (pronome oblíquo átono); 'desde' indica tempo (preposição).<br/>c) Incorreta. 'O' não é artigo aqui porque não acompanha substantivo, mas substitui uma pessoa.<br/>d) Incorreta. 'Isso' não é artigo."
  },
  {
    "question": "Na sentença '<b>A</b> menina <b>nos</b> viu <b>na</b> escola', temos:",
    "options": [
      "a) Artigo definido, Pronome oblíquo átono, Preposição (contraída).",
      "b) Preposição, Pronome reto, Artigo definido.",
      "c) Artigo definido, Pronome demonstrativo, Preposição.",
      "d) Pronome oblíquo átono, Artigo definido, Preposição."
    ],
    "correct": 0,
    "explanation": "a) Correta. 'A' é artigo definido; 'nos' é pronome oblíquo átono; 'na' é a preposição 'em' + artigo 'a'.<br/>b) Incorreta. 'A' não é preposição e 'nos' não é pronome reto.<br/>c) Incorreta. 'Nos' não é pronome demonstrativo.<br/>d) Incorreta. 'A' é artigo, não pronome oblíquo."
  },
  {
    "question": "Identifique os termos: '<b>Este</b> é <b>o</b> presente <b>para</b> você.'",
    "options": [
      "a) Pronome demonstrativo, Preposição, Artigo definido.",
      "b) Artigo definido, Pronome demonstrativo, Preposição.",
      "c) Pronome demonstrativo, Artigo definido, Preposição.",
      "d) Pronome oblíquo átono, Artigo definido, Preposição."
    ],
    "correct": 2,
    "explanation": "a) Incorreta. A ordem de 'o' e 'para' está invertida.<br/>b) Incorreta. 'Este' é demonstrativo, não artigo.<br/>c) Correta. 'Este' mostra o objeto (demonstrativo); 'o' define presente (artigo); 'para' indica destino (preposição).<br/>d) Incorreta. 'Este' não é pronome oblíquo átono."
  },
  {
    "question": "Em '<b>Os</b> alunos <b>se</b> esforçaram <b>pelo</b> prêmio', os termos são:",
    "options": [
      "a) Artigo definido, Pronome oblíquo átono, Preposição (contraída).",
      "b) Pronome demonstrativo, Pronome oblíquo átono, Artigo definido.",
      "c) Artigo definido, Pronome reto, Preposição.",
      "d) Preposição, Pronome demonstrativo, Artigo definido."
    ],
    "correct": 0,
    "explanation": "a) Correta. 'Os' é artigo definido; 'se' é pronome oblíquo átono; 'pelo' é a contração da preposição 'per' (por) + artigo 'o'.<br/>b) Incorreta. 'Os' não é demonstrativo.<br/>c) Incorreta. 'Se' não é pronome reto.<br/>d) Incorreta. 'Os' não é preposição."
  },
  {
    "question": "Na frase 'Pedro <b>te</b> entregou <b>aquela</b> carta <b>com</b> alegria', as classes são:",
    "options": [
      "a) Artigo definido, Pronome demonstrativo, Preposição.",
      "b) Pronome oblíquo átono, Pronome demonstrativo, Preposição.",
      "c) Pronome oblíquo átono, Artigo definido, Pronome demonstrativo.",
      "d) Pronome demonstrativo, Pronome oblíquo átono, Preposição."
    ],
    "correct": 1,
    "explanation": "a) Incorreta. 'Te' é pronome, não artigo.<br/>b) Correta. 'Te' é pronome oblíquo átono; 'aquela' é pronome demonstrativo; 'com' é preposição.<br/>c) Incorreta. 'Aquela' não é artigo e 'com' não é demonstrativo.<br/>d) Incorreta. 'Te' não é demonstrativo."
  },
  {
    "question": "Analise: '<b>As</b> ruas <b>desta</b> cidade <b>me</b> encantam.'",
    "options": [
      "a) Artigo definido, Pronome demonstrativo (contraído), Pronome oblíquo átono.",
      "b) Preposição, Artigo definido, Pronome demonstrativo.",
      "c) Artigo definido, Pronome oblíquo átono, Preposição.",
      "d) Pronome demonstrativo, Preposição, Pronome oblíquo átono."
    ],
    "correct": 0,
    "explanation": "a) Correta. 'As' é artigo definido; 'desta' é de + esta (preposição + demonstrativo); 'me' é pronome oblíquo átono.<br/>b) Incorreta. 'As' é artigo, não preposição.<br/>c) Incorreta. 'Desta' contém um demonstrativo, não é apenas oblíquo.<br/>d) Incorreta. 'As' não é demonstrativo."
  }
],


  "concordanciaverbal": [
    {
      "question": "Em qual das opções a concordância verbal com o sujeito composto anteposto está INCORRETA de acordo com a norma-padrão?",
      "options": [
        "A - O aluno e o professor conversaram sobre o projeto.",
        "B - Chegou o livro e a caneta que pedi.",
        "C - O diretor e a secretária saíram mais cedo.",
        "D - O cão e o gato dormiam tranquilamente na sala."
      ],
      "correct": 1,
      "explanation": "Na frase B, o verbo 'chegou' está no singular. Para um sujeito composto anteposto (se fosse 'O livro e a caneta...'), o verbo deveria estar obrigatoriamente no plural ('chegaram'). Na frase B, o sujeito está posposto e concorda com o primeiro elemento, mas antepondo-se o sujeito, a regra exige o plural."
    },
    {
      "question": "Considere a frase: 'O entusiasmo e a dedicação ________ o sucesso do projeto.' Qual das alternativas preenche corretamente a lacuna segundo a regra geral do sujeito composto anteposto?",
      "options": [
        "A - garantiu",
        "B - garantiram",
        "C - garantirá",
        "D - garante"
      ],
      "correct": 1,
      "explanation": "Quando o sujeito composto está anteposto (antes do verbo), a regra geral determina que o verbo deve ir para o plural ('eles' -> garantiram)."
    },
    {
      "question": "Analise os núcleos do sujeito composto anteposto na frase: 'Eu, tu e ele ________ ao evento ontem.' Assinale a opção que preenche a lacuna corretamente:",
      "options": [
        "A - foram",
        "B - fostes",
        "C - fomos",
        "D - foi"
      ],
      "correct": 2,
      "explanation": "Quando o sujeito composto anteposto possui pessoas gramaticais diferentes e inclui a 1ª pessoa ('Eu'), o verbo deve concordar na 1ª pessoa do plural ('nós' -> fomos)."
    },
    {
      "question": "Na frase 'Tu e teu irmão ________ o relatório até o final do dia.', de acordo com a norma-padrão para sujeitos compostos antepostos com 2ª e 3ª pessoas, qual forma verbal é aceita?",
      "options": [
        "A - entregará",
        "B - entregamos",
        "C - entregarão",
        "D - entregou"
      ],
      "correct": 2,
      "explanation": "Quando o sujeito composto anteposto é formado pela 2ª pessoa ('Tu') e 3ª pessoa ('teu irmão'), o verbo pode ir para a 2ª pessoa do plural ('entregareis') ou para a 3ª pessoa do plural ('entregarão')."
    },
    {
      "question": "Quando os núcleos do sujeito composto anteposto são sinônimos ou quase sinônimos (ex.: 'A paz e a tranquilidade ________ no lugar'), qual é a regra de concordância verbal?",
      "options": [
        "A - O verbo deve ficar obrigatoriamente no singular.",
        "B - O verbo deve ir obrigatoriamente para o plural.",
        "C - O verbo pode ir para o plural ou concordar no singular com o núcleo mais próximo.",
        "D - O verbo concorda sempre com o segundo núcleo apenas."
      ],
      "correct": 2,
      "explanation": "Quando os núcleos do sujeito composto anteposto são palavras sinônimas ou expressam ideias afins, o verbo pode ir para o plural ou concordar no singular com o núcleo mais próximo."
    },
    {
      "question": "Observe a frase: 'O café, o leite, o pão, nada o ________ satisfazer.' A concordância do verbo no singular ocorre porque:",
      "options": [
        "A - Há um erro gramatical na construção da frase.",
        "B - Os núcleos do sujeito composto anteposto são resumidos pelo pronome indefinido 'nada'.",
        "C - O verbo concorda apenas com o primeiro núcleo ('o café').",
        "D - O sujeito é simples e não composto."
      ],
      "correct": 1,
      "explanation": "Quando os elementos de um sujeito composto anteposto são resumidos por um pronome indefinido (tudo, nada, ninguém, etc.), o verbo concorda no singular com esse pronome resumitivo."
    },
    {
      "question": "Assinale a alternativa que apresenta a concordância verbal CORRETA para o sujeito composto anteposto cujos núcleos estão em gradação: 'Um olhar, um gesto, um sorriso ________ a plateia.'",
      "options": [
        "A - encantou (ou encantaram)",
        "B - encantarão apenas",
        "C - tinha encantado apenas",
        "D - encantar apenas"
      ],
      "correct": 0,
      "explanation": "Quando os núcleos do sujeito composto anteposto formam uma gradação, o verbo pode ir para o plural ('encantaram') ou concordar no singular com o último núcleo ('encantou')."
    },
    {
      "question": "Assinale a alternativa em que a concordância verbal com o sujeito composto anteposto apresenta uma incorreção gramatical:",
      "options": [
        "A - O sol e a lua ilumina a noite e o dia.",
        "B - O professor e os alunos organizaram a feira de ciências.",
        "C - A honestidade e a dedicação garantem o sucesso de um profissional.",
        "D - O cão e o gato dormiam tranquilamente na varanda."
      ],
      "correct": 0,
      "explanation": "Na regra geral, quando o sujeito composto está anteposto (antes do verbo), a concordância deve ser feita obrigatoriamente no plural ('iluminam'). A forma 'ilumina' no singular torna a frase incorreta."
    },
    {
      "question": "Marque a alternativa INCORRETA quanto à concordância do verbo com o sujeito composto anteposto formado por pessoas gramaticais diferentes:",
      "options": [
        "A - Eu e tu faremos o trabalho juntos.",
        "B - Tu e teu irmão ireis ao evento hoje à noite.",
        "C - Eu, tu e ele fomos ao cinema ontem.",
        "D - Eu e meus amigos compareceu à reunião ontem."
      ],
      "correct": 3,
      "explanation": "Quando o sujeito composto anteposto possui a 1ª pessoa ('Eu'), a concordância deve ser obrigatoriamente feita na 1ª pessoa do plural ('nós' -> comparecemos). A forma no singular 'compareceu' está incorreta."
    },
    {
      "question": "Considerando os núcleos do sujeito composto anteposto ligados pela conjuntiva 'e', assinale a opção que traz a concordância INCORRETA:",
      "options": [
        "A - A paz e a tranquilidade reinavam naquele pequeno vilarejo.",
        "B - A paz e a tranquilidade reinava naquele pequeno vilarejo.",
        "C - Amor e ódio caminha lado a lado no coração do personagem.",
        "D - O medo e a ansiedade tomaram conta de todos durante a tempestade."
      ],
      "correct": 2,
      "explanation": "Com o sujeito composto anteposto 'Amor e ódio', o verbo deve ir obrigatoriamente para o plural ('caminham'). Apenas quando os núcleos são sinônimos ou quase sinônimos admite-se o singular, o que não é o caso de 'amor' e 'ódio' (que são antônimos)."
    },
    {
      "question": "Identifique a alternativa em que a concordância verbal com sujeito composto anteposto desobedece às regras da norma-padrão:",
      "options": [
        "A - Um suspiro, um olhar, um gesto bastou para convencê-la.",
        "B - Um suspiro, um olhar, um gesto bastaram para convencê-la.",
        "C - Carros, motos, bicicletas, nada o assustavam na grande cidade.",
        "D - A paciência e a persistência trouxeram ótimos resultados."
      ],
      "correct": 2,
      "explanation": "Quando o sujeito composto anteposto é resumido por um pronome indefinido resumitivo (como 'nada', 'tudo', 'ninguém'), o verbo deve concordar no singular com esse pronome ('nada o assustava'). Usar o verbo no plural ('assustavam') é uma incorreção."
    },
    {
      "question": "Assinale a alternativa em que a concordância verbal com sujeito composto anteposto em gradação apresenta ERRO de construção:",
      "options": [
        "A - Um dia, um mês, um ano passou rápido demais.",
        "B - Um dia, um mês, um ano passaram rápido demais.",
        "C - Uma palavra, um grito, um clamor ecoavam na multidão.",
        "D - Uma palavra, um grito, um clamor ecoava na multidão apenas se no plural."
      ],
      "correct": 3,
      "explanation": "Em sujeitos compostos antepostos em gradação, tanto o plural quanto o singular (concordando com o último núcleo) são permitidos. A afirmação na opção D contradiz a regra da norma-padrão ao limitar a concordância incorretamente."
    },
    {
      "question": "De acordo com a norma-padrão da língua portuguesa, assinale a alternativa em que a concordância verbal com sujeito coletivo simples está CORRETA:",
      "options": [
        "A - A multidão aplaudiram o espetáculo efusivamente.",
        "B - O grupo de alunos saíram da sala de aula.",
        "C - A matilha correu em direção à floresta.",
        "D - O bando de pássaros voavam baixo ao entardecer."
      ],
      "correct": 2,
      "explanation": "Quando o sujeito é um substantivo coletivo simples (não especificado), o verbo deve ficar obrigatoriamente no singular, concordando com o núcleo do sujeito ('A matilha correu')."
    },
    {
      "question": "Na frase 'A maioria dos estudantes ________ na prova de seleção.', qual alternativa preenche a lacuna de forma a manter a concordância correta segundo a regra do coletivo partitivo especificado?",
      "options": [
        "A - passou apenas",
        "B - passaram apenas",
        "C - passou ou passaram",
        "D - passaremos"
      ],
      "correct": 2,
      "explanation": "Quando o sujeito é formado por uma expressão partitiva ou coletivo especificado ('A maioria dos estudantes'), o verbo pode concordar no singular com o coletivo ('passou') ou no plural com o especificador ('passaram')."
    },
    {
      "question": "Assinale a opção que apresenta ERRO de concordância verbal em relação ao sujeito coletivo:",
      "options": [
        "A - O enxame destruiu as flores do jardim.",
        "B - A equipe de atletas venceram o campeonato nacional.",
        "C - O elenco da novela reuniu-se no estúdio.",
        "D - A multidão de torcedores invadiu o campo."
      ],
      "correct": 1,
      "explanation": "No caso do coletivo simples não especificado, o verbo deve permanecer no singular. Na opção B, o verbo concorda erroneamente no plural com o complemento especificador sem a devida flexão que justificaria apenas essa forma isolada, mas mantendo a concordância gramatical com 'A equipe', a frase exige singular ou aceita plural apenas se especificado ('A equipe de atletas venceu / venceram'). Contudo, mantendo o foco na norma-padrão de coletivo não especificado, quando não há especificação no plural, deve-se manter no singular."
    },
    {
      "question": "Considere a frase: 'Uma multidão de fãs ________ o cantor no aeroporto.' Assinale a alternativa que apresenta a concordância verbal aceita pela norma-padrão:",
      "options": [
        "A - aguardavam apenas",
        "B - aguardava apenas",
        "C - aguardava ou aguardavam",
        "D - aguardavam-nos apenas"
      ],
      "correct": 2,
      "explanation": "Com coletivos especificados por substantivo no plural ('Uma multidão de fãs'), admite-se tanto a concordância no singular com o coletivo ('aguardava') quanto no plural com o especificador ('aguardavam')."
    },
    {
      "question": "Em 'A matilha de cães selvagens ________ pela mata durante a noite.', qual das alternativas apresenta a regência/concordância INCORRETA?",
      "options": [
        "A - correu",
        "B - correram",
        "C - correriam",
        "D - correm todos no singular obrigatoriamente"
      ],
      "correct": 3,
      "explanation": "Por se tratar de um coletivo especificado no plural ('matilha de cães'), a regra permite tanto o singular (concordando com 'matilha') quanto o plural (concordando com 'cães'). Dizer que deve ser obrigatoriamente no singular está incorreto."
    },
    {
      "question": "Assinale a alternativa em que a concordância verbal com o coletivo distante do verbo está CORRETA:",
      "options": [
        "A - O bando de assaltantes, após render os seguranças do banco, fugiram sem deixar pistas.",
        "B - A turma de formandos, entusiasmada com a festa, comemoraram até o amanhecer.",
        "C - O exército de soldados avançou sobre o território inimigo.",
        "D - A frota de navios ancoraram no porto ao entardecer."
      ],
      "correct": 2,
      "explanation": "Na frase C, o verbo 'avançou' concorda perfeitamente no singular com o núcleo do sujeito coletivo 'exército' (ou no plural com 'soldados' -> avançaram). Todas as formas apresentadas estão corretas, sendo a C um exemplo perfeito de concordância com o núcleo coletivo no singular."
    },
    {
      "question": "Na oração 'Metade do grupo de candidatos ________ a primeira etapa do processo seletivo.', qual das opções preenche a lacuna de forma aceita pela norma gramatical?",
      "options": [
        "A - concluiu apenas",
        "B - concluíram apenas",
        "C - concluiu ou concluíram",
        "D - concluía apenas"
      ],
      "correct": 2,
      "explanation": "Expressões fracionárias ou partitivas acompanhadas de especificação no plural ('Metade do grupo de candidatos') admitem dupla concordância: no singular concordando com a expressão partitiva ('concluiu') ou no plural concordando com o especificador ('concluíram')."
    },
    {
      "question": "Marque a frase em que o verbo NÃO concorda adequadamente com o sujeito coletivo simples (sem especificador):",
      "options": [
        "A - A juri decidiu pela absolvição do réu.",
        "B - A constelação brilhava intensamente no céu limpo.",
        "C - A boiada estouraram e causou pânico nos fazendeiros.",
        "D - O bando dispersou-se com a chegada da polícia."
      ],
      "correct": 2,
      "explanation": "O coletivo simples 'A boiada' não está acompanhado de adjunto no plural. Por isso, o verbo deve ficar obrigatoriamente no singular ('A boiada estourou e causou...'). A forma 'estouraram' está incorreta."
    },
    {
      "question": "Na frase 'Um bando de aves migratórias ________ para o sul a cada inverno.', qual forma verbal é adequada segundo a concordância atrativa?",
      "options": [
        "A - voam",
        "B - voava",
        "C - voaria",
        "D - voara"
      ],
      "correct": 0,
      "explanation": "A concordância atrativa ocorre quando o verbo se flexiona no plural para concordar com o termo especificador no plural ('aves migratórias' -> 'voam'). A concordância gramatical seria com o núcleo no singular ('bando' -> 'voa')."
    },
    {
      "question": "Assinale a alternativa gramaticalmente INCORRETA quanto à concordância verbal com sujeito coletivo:",
      "options": [
        "A - Grande parte dos alunos aprovou o novo sistema de avaliações.",
        "B - Grande parte dos alunos aprovaram o novo sistema de avaliações.",
        "C - A matilha de lobos uivavam durante a noite de lua cheia.",
        "D - A matilha uivavam durante a noite de lua cheia."
      ],
      "correct": 3,
      "explanation": "Quando o substantivo coletivo está no singular e NÃO vem especificado por um termo no plural, a concordância no plural é um erro grave. 'A matilha' exige verbo no singular ('uivava')."
    },
    {
      "question": "De acordo com a norma-padrão da língua portuguesa, qual é a regra geral de concordância verbal quando o sujeito é um pronome de tratamento (como 'Vossa Excelência' ou 'Sua Alteza')?",
      "options": [
        "A - O verbo deve concordar obrigatoriamente na 2ª pessoa do singular (tu).",
        "B - O verbo deve concordar obrigatoriamente na 3ª pessoa (do singular ou do plural).",
        "C - O verbo deve concordar obrigatoriamente na 2ª pessoa do plural (vós).",
        "D - O verbo pode concordar livremente na 1ª ou na 3ª pessoa."
      ],
      "correct": 1,
      "explanation": "Apesar de os pronomes de tratamento se referirem à segunda pessoa (com quem se fala), a concordância gramatical (tanto verbal quanto nominal) exige obrigatoriamente a 3ª pessoa."
    },
    {
      "question": "Na frase 'Vossa Excelência ________ os documentos necessários para a reunião?', qual das alternativas preenche a lacuna corretamente segundo a norma-padrão?",
      "options": [
        "A - trouxestes",
        "B - trouxe",
        "C - trouxeste",
        "D - trazeis"
      ],
      "correct": 1,
      "explanation": "Como o pronome de tratamento 'Vossa Excelência' está no singular, o verbo deve ser flexionado na 3ª pessoa do singular ('trouxe'). As formas 'trouxeste' e 'trouxestes/trazeis' pertencem à 2ª pessoa."
    },
    {
      "question": "Assinale a alternativa que apresenta ERRO de concordância verbal no uso do pronome de tratamento:",
      "options": [
        "A - Vossas Santidades pediram paz para o mundo inteiro.",
        "B - Vossa Senhoria aprovou a nova proposta comercial.",
        "C - Vossa Majestade deveis tomar uma decisão imediatamente.",
        "D - Sua Eminência discursou durante o evento beneficente."
      ],
      "correct": 2,
      "explanation": "Na opção C, o verbo 'deveis' está flexionado na 2ª pessoa do plural ('vós'), o que é incorreto. Com o pronome 'Vossa Majestade' no singular, o verbo deve ficar na 3ª pessoa do singular ('deve')."
    },
    {
      "question": "Considere a frase no plural: 'Vossas Excelências ________ a decisão final sobre o julgamento amanhã.' A forma verbal correta para preencher a lacuna é:",
      "options": [
        "A - tomareis",
        "B - tomarão",
        "C - tomarás",
        "D - tomardes"
      ],
      "correct": 1,
      "explanation": "Quando o pronome de tratamento está no plural ('Vossas Excelências'), o verbo concorda na 3ª pessoa do plural ('tomarão' / 'eles')."
    },
    {
      "question": "Assinale a opção em que a concordância verbal com o pronome de tratamento está CORRETA:",
      "options": [
        "A - Vossa Magnificência saberes que os alunos protestaram.",
        "B - Vossa Magnificência sabeis que os alunos protestaram.",
        "C - Vossa Magnificência sabe que os alunos protestaram.",
        "D - Vossa Magnificência sabem que os alunos protestaram."
      ],
      "correct": 2,
      "explanation": "O pronome 'Vossa Magnificência' é usado no singular, portanto o verbo deve concordar na 3ª pessoa do singular ('sabe')."
    },
    {
      "question": "Em relação à concordância verbal e ao uso dos pronomes de tratamento, analise as afirmativas e assinale a INCORRETA:",
      "options": [
        "A - Os pronomes de tratamento exigem verbo em 3ª pessoa, mesmo sendo iniciados por 'Vossa'.",
        "B - A forma 'Vossa' é usada quando se fala diretamente com a autoridade.",
        "C - A forma 'Sua' é usada quando se fala sobre a autoridade (3ª pessoa do discurso).",
        "D - Os pronomes iniciados por 'Vossa' exigem obrigatoriamente o verbo na 2ª pessoa do plural (vós)."
      ],
      "correct": 3,
      "explanation": "A afirmativa D é incorreta. A presença do possessivo 'Vossa' no pronome de tratamento não altera a regra: a concordância verbal continua sendo feita estritamente na 3ª pessoa."
    },
    {
      "question": "Na oração 'Sua Alteza ________ os convidados para o jantar no palácio real.', assinale a alternativa que preenche a lacuna de acordo com a regra de concordância:",
      "options": [
        "A - receberá",
        "B - receberás",
        "C - recebereis",
        "D - receberdes"
      ],
      "correct": 0,
      "explanation": "O pronome 'Sua Alteza' está no singular e refere-se a uma autoridade da qual se fala. A concordância verbal deve ser feita na 3ª pessoa do singular ('receberá')."
    },
    {
      "question": "De acordo com a norma-padrão da língua portuguesa, qual é a regra de concordância verbal aplicável quando o sujeito é formado por um coletivo partitivo seguido de adjunto adnominal no plural (ex.: 'A maioria dos alunos')?",
      "options": [
        "A - O verbo deve ficar obrigatoriamente no singular, concordando apenas com o núcleo coletivo.",
        "B - O verbo deve ir obrigatoriamente para o plural, concordando com o termo no plural.",
        "C - O verbo pode concordar no singular (com o núcleo coletivo) ou no plural (com o adjunto especificador).",
        "D - O verbo deve ficar no plural apenas se a frase estiver na voz passiva."
      ],
      "correct": 2,
      "explanation": "Com expressões ou coletivos partitivos (a maioria de, a grande parte de, a metade de, a maioria dos) seguidos de substantivo ou pronome no plural, admite-se a dupla concordância: no singular (concordância gramatical com o núcleo 'maioria', 'parte') ou no plural (concordância atrativa com o elemento no plural)."
    },
    {
      "question": "Na frase 'A maioria dos candidatos ________ o resultado do concurso ontem.', qual das opções preenche a lacuna corretamente segundo a regra de concordância com coletivos partitivos?",
      "options": [
        "A - aprovou apenas",
        "B - aprovaram apenas",
        "C - aprovou ou aprovaram",
        "D - aprovara apenas"
      ],
      "correct": 2,
      "explanation": "Por se tratar de um coletivo partitivo ('A maioria') seguido de especificador no plural ('dos candidatos'), são aceitas ambas as formas verbais: 'aprovou' (singular, concordando com 'A maioria') e 'aprovaram' (plural, concordando com 'candidatos')."
    },
    {
      "question": "Assinale a alternativa em que a concordância verbal com o coletivo partitivo apresenta ERRO de acordo com a gramática normativa:",
      "options": [
        "A - Grande parte dos funcionários aceitou o novo plano de trabalho.",
        "B - Grande parte dos funcionários aceitaram o novo plano de trabalho.",
        "C - A maioria das pessoas preferem opções mais saudáveis.",
        "D - A maioria das pessoas preferes opções mais saudáveis."
      ],
      "correct": 3,
      "explanation": "A concordância deve ser feita na 3ª pessoa do singular ('prefere') ou na 3ª pessoa do plural ('preferem'). A forma 'preferes' pertence à 2ª pessoa do singular ('tu'), o que constitui um erro gramatical na construção."
    },
    {
      "question": "Assinale a opção em que a frase apresenta apenas UMA possibilidade de concordância (obrigatoriamente no singular) por se tratar de um coletivo partitivo não especificado:",
      "options": [
        "A - A maioria dos estudantes faltou à aula.",
        "B - A maior parte dos clientes reclamou do atendimento.",
        "C - A maioria concordou com a decisão do diretor.",
        "D - Metade dos participantes responderam ao questionário."
      ],
      "correct": 2,
      "explanation": "Na frase C, o coletivo partitivo 'A maioria' não vem acompanhado de um termo especificador no plural. Quando não há especificação no plural, o verbo deve ficar obrigatoriamente no singular ('concordou'). Nas outras opções, por haver especificação no plural, a dupla concordância é permitida."
    },
    {
      "question": "Considere a oração: 'Uma parcela dos torcedores ________ contra a diretoria do clube.' Marque a alternativa que preenche a lacuna de modo INCORRETO:",
      "options": [
        "A - protestou",
        "B - protestaram",
        "C - haviam protestado",
        "D - protestamos"
      ],
      "correct": 3,
      "explanation": "A concordância com 'Uma parcela dos torcedores' deve ser em 3ª pessoa, seja no singular ('protestou') ou no plural ('protestaram' / 'haviam protestado'). A forma 'protestamos' (1ª pessoa do plural) está incorreta porque o sujeito não inclui o falante ('nós')."
    },
    {
      "question": "Em 'A metade dos livros doados ________ para a biblioteca comunitária.', assinale a alternativa com a concordância verbal recomendada pela norma-padrão:",
      "options": [
        "A - foi encaminhada ou foram encaminhados",
        "B - foi encaminhado apenas",
        "C - foram encaminhada apenas",
        "D - fossem encaminhados apenas"
      ],
      "correct": 0,
      "explanation": "Como o coletivo partitivo 'A metade' (feminino singular) está especificado por 'dos livros doados' (masculino plural), a concordância aceita tanto o singular/feminino concordando com a expressão partitiva ('foi encaminhada') quanto o plural/masculino atraído pelo complemento ('foram encaminhados')."
    },
    {
      "question": "Assinale a alternativa que traz uma afirmativa INCORRETA sobre a regra dos coletivos e expressões partitivas:",
      "options": [
        "A - Expressões como 'a maior parte de', 'a maioria de' e 'boa parte de' são consideradas estruturas partitivas.",
        "B - A concordância no plural com o adjunto especificador é chamada de concordância atrativa.",
        "C - Se o coletivo partitivo estiver no plural (ex.: 'As maiorias'), o verbo deve ficar obrigatoriamente no plural.",
        "D - A concordância com coletivo partitivo especificado obriga o verbo a concordar sempre e exclusivamente no singular."
      ],
      "correct": 3,
      "explanation": "A afirmativa D é falsa, pois a regra gramatical para coletivos partitivos especificados no plural não exige o uso exclusivo do singular, facultando a concordância também no plural."
    },
    {
      "question": "De acordo com a norma-padrão da língua portuguesa, qual é a regra geral de concordância verbal para os verbos impessoais (como 'haver' no sentido de existir e 'fazer' indicando tempo decorrido)?",
      "options": [
        "A - Concordam no plural com o elemento seguinte.",
        "B - Permanecem obrigatoriamente na 3ª pessoa do singular.",
        "C - Flexionam-se na 3ª pessoa do plural.",
        "D - Concordam obrigatoriamente com o sujeito da oração."
      ],
      "correct": 1,
      "explanation": "Verbos impessoais não possuem sujeito. Por essa razão, devem permanecer obrigatoriamente na 3ª pessoa do singular, independentemente de o complemento estar no singular ou no plural."
    },
    {
      "question": "Assinale a alternativa em que a concordância do verbo 'haver' está INCORRETA segundo a norma-padrão:",
      "options": [
        "A - Houve muitos problemas na organização do evento.",
        "B - Haverá reuniões importantes na próxima semana.",
        "C - Houveram dúvidas sobre a nova decisão da diretoria.",
        "D - Há anos não nos encontramos para conversar."
      ],
      "correct": 2,
      "explanation": "O verbo 'haver', no sentido de existir ou ocorrer, é impessoal e deve ficar na 3ª pessoa do singular. A forma 'Houveram' está incorreta; o correto é 'Houve dúvidas'."
    },
    {
      "question": "Na frase '________ meses que não vejo meus amigos da faculdade.', qual alternativa preenche corretamente a lacuna segundo as regras de impessoalidade do verbo 'fazer'?",
      "options": [
        "A - Fazem",
        "B - Faz",
        "C - Irão fazer",
        "D - Faziam-se"
      ],
      "correct": 1,
      "explanation": "O verbo 'fazer', quando indica tempo decorrido, é impessoal e deve ser empregado na 3ª pessoa do singular ('Faz meses')."
    },
    {
      "question": "Quando um verbo impessoal faz parte de uma locução verbal (como 'deve haver' ou 'vai fazer'), o que acontece com a concordância do verbo auxiliar?",
      "options": [
        "A - O verbo auxiliar vai para o plural se o complemento estiver no plural.",
        "B - O verbo auxiliar transmite a impessoalidade e permanece na 3ª pessoa do singular.",
        "C - O verbo auxiliar deve obrigatoriamente ir para o particípio.",
        "D - O verbo principal flexiona no plural e o auxiliar no singular."
      ],
      "correct": 1,
      "explanation": "Em locuções verbais em que o verbo principal é impessoal, a impessoalidade se transmite ao verbo auxiliar, fazendo com que toda a locução permaneça na 3ª pessoa do singular (ex.: 'Deve haver soluções', 'Vai fazer dois anos')."
    },
    {
      "question": "Assinale a opção em que a locução verbal com verbo impessoal apresenta ERRO de concordância:",
      "options": [
        "A - Deve haver muitos candidatos inscritos no concurso.",
        "B - Podem haver falhas no sistema durante a atualização.",
        "C - Vai fazer três anos que moro nesta cidade.",
        "D - Pode haver novas oportunidades em breve."
      ],
      "correct": 1,
      "explanation": "Na locução 'Podem haver', o verbo 'haver' (sentido de existir) transmite sua impessoalidade ao auxiliar 'poder'. Portanto, o correto é 'Pode haver falhas'."
    },
    {
      "question": "Em relação aos verbos que indicam fenômenos da natureza (chover, trovejar, nevar), assinale a frase em que o verbo é impessoal e sua concordância está CORRETA:",
      "options": [
        "A - Choveram elogios após a apresentação do projeto.",
        "B - Choveu forte durante toda a noite de ontem.",
        "C - Trovejaram bastante durante a tempestade no interior.",
        "D - Nevaram intensamente nas montanhas na semana passada."
      ],
      "correct": 1,
      "explanation": "Verbos que expressam fenômenos meteorológicos em sentido literal são impessoais e ficam na 3ª pessoa do singular ('Choveu forte'). Na opção A, o verbo 'chover' foi usado em sentido figurado (conotativo), tendo sujeito ('elogios') e indo para o plural."
    },
    {
      "question": "Considere a oração: 'Hoje ________ 15 de novembro e ________ muito calor na cidade.' As lacunas devem ser preenchidas, respectivamente, por:",
      "options": [
        "A - é / faz",
        "B - são / fazem",
        "C - é / fazem",
        "D - são / faz"
      ],
      "correct": 3,
      "explanation": "O verbo 'ser' na indicação de datas/horas concorda com o numeral ('Hoje são 15 de novembro'). Já o verbo 'fazer' indicando clima/temperatura é impessoal e fica na 3ª pessoa do singular ('faz muito calor')."
    },
    {
      "question": "Marque a alternativa em que o verbo 'existir' foi empregado corretamente quanto à concordância verbal, diferindo da regra do verbo 'haver':",
      "options": [
        "A - Existia muitos motivos para comemorar.",
        "B - Existem muitos motivos para comemorar.",
        "C - Existe muitos motivos para comemorar.",
        "D - Existiam apenas um motivo para a mudança."
      ],
      "correct": 1,
      "explanation": "Diferente de 'haver' (que é impessoal), o verbo 'existir' é pessoal e possui sujeito ('muitos motivos'). Portanto, deve concordar com o seu sujeito no plural ('Existem muitos motivos')."
    },
    {
      "question": "Assinale a opção em que o uso do verbo 'haver' está INCORRETO por desrespeitar as regras de impessoalidade:",
      "options": [
        "A - Há anos que não viajo para a praia.",
        "B - Haviam muitas pessoas aguardando o início do show.",
        "C - Houve um grande imprevisto durante o percurso.",
        "D - Não haverá aulas no feriado prolongado."
      ],
      "correct": 1,
      "explanation": "O verbo 'haver' no sentido de existir ou presença de pessoas é impessoal. O correto é 'Havia muitas pessoas' e não 'Haviam'."
    },
    {
      "question": "Analise as duas frases a seguir:\nI. Faz dez anos que concluí a faculdade.\nII. Irá haver novas vagas no setor de compras.\nSobre a concordância verbal das frases, é correto afirmar que:",
      "options": [
        "A - Ambas estão incorretas, pois os verbos deveriam estar no plural.",
        "B - Apenas a frase I está correta.",
        "C - Apenas a frase II está correta.",
        "D - Ambas estão corretas, pois respeitam a impessoalidade dos verbos 'fazer' e 'haver'."
      ],
      "correct": 3,
      "explanation": "Ambas estão corretas. Na frase I, 'faz' expressa tempo decorrido e fica no singular. Na frase II, a locução 'irá haver' (sentido de existir) mantém o verbo auxiliar no singular devido à impessoalidade de 'haver'."
    }
  ],

  
  "sintaxe_1": [
    {
      "question": "1. Questão - Marque a alternativa que contenha uma frase nominal.",
      "options": [
        "A - Esse caminho é perigoso.",
        "B - Bolsas despencam, e dólar sobe.",
        "C - Não há problemas.",
        "D - Tragédia completa um ano.",
        "E - A volta de doenças perigosas."
      ],
      "correct": 4,
      "explanation": "a) INCORRETA | Frase verbal, pois contém verbo (“é”). <br/>b) INCORRETA | Frase verbal, pois contém verbos (“despencam” e “sobe”). <br/>c) INCORRETA | Frase verbal, pois contém verbo (“há”). <br/>d) INCORRETA | Frase verbal, pois contém verbo (“completa”). <br/>e) CORRETA | Frase nominal, ou seja, sem a presença de verbos."
    },
    {
      "question": "2. (Português com Letícia) Leia as seguintes sentenças e, em seguida, marque a alternativa correta.<br/>I. As crianças continuam ingerindo uma grande quantidade de açúcar.<br/>II. Nem sempre o doce é o vilão das dietas.<br/>III. Aumenta o número de crianças obesas, e pais devem estar atentos.",
      "options": [
        "A - A frase I é um período composto por possuir duas orações.",
        "B - A frase II é um período simples, uma vez que possui apenas uma oração.",
        "C - A frase III é um período composto por três orações.",
        "D - A sentença II traz uma frase nominal.",
        "E - A sentença III traz um período simples."
      ],
      "correct": 1,
      "explanation": "I. Período simples (possui uma oração): há apenas uma locução verbal (“continuam ingerindo”). <br/>II. Período simples (possui por uma oração): há apenas um verbo (“é”). <br/>III. Período composto (possui duas orações): há um verbo na primeira oração (“aumenta”), e uma locução verbal na segunda oração (“devem estar”)."
    },
    {
      "question": "3. Questão - (FUNDATEC - 2019 - Nível Médio) Quantas orações compõem o período a seguir? “Declaramos clara e inequivocamente que o planeta Terra está enfrentando uma emergência climática”, afirmou uma declaração chamada “Emergência Climática” feita por mais de 11 mil cientistas do mundo.”",
      "options": [
        "A - 2.",
        "B - 3.",
        "C - 4.",
        "D - 5.",
        "E - 6."
      ],
      "correct": 3,
      "explanation": "O trecho apresenta cinco orações. Separamos as orações e destacamos os verbos. Lembrando que cada oração possui um verbo ou locução verbal: 1ª: Declaramos clara e inequivocamente; 2ª: que o planeta está enfrentando uma emergência climática; 3ª: afirmou uma declaração; 4ª: chamada “Emergência Climática”; 5ª: feita por mais de 11 mil cientistas do mundo."
    },
    {
      "question": "4. Questão - Leia a seguinte manchete: “Peixe-agulha salta da água e fica cravado no pescoço de menino que viajava em barco.” Sobre a manchete, pode-se afirmar que:",
      "options": [
        "A - trata-se de uma frase nominal.",
        "B - transmite ao leitor a informação por meio de uma única oração.",
        "C - é um período composto por três orações.",
        "D - é um período simples.",
        "E - é um período composto por duas orações."
      ],
      "correct": 2,
      "explanation": "A manchete em questão apresenta três orações: 1ª: Peixe-agulha salta da água; 2ª: e fica cravado no pescoço de menino; 3ª: que viajava em barco"
    },
    {
      "question": "5. Questão -Julgue as afirmações a seguir, colocando V para as verdadeiras e F para as falsas. Em seguida, assinale a alternativa que apresenta a sequência correta.<br/>( ) A frase é um enunciado de sentido completo.<br/>( ) A frase pode ou não conter verbo.<br/>( ) A oração pode ou não conter verbo.<br/>( ) O período simples é formado por apenas uma oração.",
      "options": [
        "A - V - V - F - V",
        "B - V - V - V – F",
        "C - F - V - F – V",
        "D - V - F - F – V",
        "E - F - F - V - V"
      ],
      "correct": 0,
      "explanation": "( v ) | A frase é um enunciado de sentido completo. <br/>( v ) | A frase pode ou não conter verbo. <br/>( f ) | É falsa a afirmativa “A oração pode ou não conter verbo”, uma vez que a oração possui necessariamente um verbo ou locução verbal. <br/>( v ) | O período simples é formado por apenas uma oração"
    },
    {
      "question": "6. Questão -  (Instituto Excelência - 2019 – Nível Médio – adaptada) Levando-se em consideração os conceitos de frase, oração e período, assinale o período classificado como simples:",
      "options": [
        "A - “A corrupção que assolou o Brasil, especialmente o Estado do Rio, nos últimos anos provocou imenso prejuízo aos cofres públicos.”",
        "B - “Uma das consequências mais perversas deste assalto aos contribuintes é o sucateamento de serviços básicos à população.”",
        "C - “Uma das competências do Conselho Estadual de Defesa dos Direitos Humanos (CEDDH) previstas em lei é apurar as denúncias de violações ocorridas no Rio de Janeiro.”",
        "D - “Muita gente acredita que esta definição limita-se a casos de agressões por parte de bandidos ou autoridades policiais."
      ],
      "correct": 1,
      "explanation": "O período é uma unidade textual composta por uma ou mais orações. Quando um período possui apenas uma oração, é considerado um período simples. Por outro lado, um período composto é aquele que possui mais de uma oração. O modo mais simples de identificar quantas orações o período apresenta é identificar o número de verbos (ou locuções verbais). Observe que apenas a alternativa B apresenta um único verbo: <br/>a) INCORRETA |“A corrupção que assolou o Brasil, especialmente o Estado do Rio, nos últimos anos provocou imenso prejuízo aos cofres públicos.” <br/>b) CORRETA | “Uma das consequências mais perversas deste assalto aos contribuintes é o sucateamento de serviços básicos à população.” <br/>c) INCORRETA | “Uma das competências do Conselho Estadual de Defesa dos Direitos Humanos (CEDDH) previstas em lei é apurar as denúncias de violações ocorridas no Rio de Janeiro.” <br/>d) INCORRETA | “Muita gente acredita que esta definição limita-se a casos de agressões por parte de bandidos ou autoridades policiais.”"
    },
    {
      "question": "7. Questão -  (IBFC - 2022 – Nível Fundamental) Analise as afirmativas abaixo e dê valores Verdadeiro (V) ou Falso (F).<br/>( ) FRASE é todo enunciado linguístico capaz de estabelecer um processo de comunicação, ou seja, é todo enunciado que possui sentido completo.<br/>( ) ORAÇÃO é toda estrutura linguística centrada em um verbo ou uma locução verbal.<br/>( ) PERÍODO é a frase formada por apenas uma oração. Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
      "options": [
        "A - F - V - V.",
        "B - V - V - V.",
        "C - F - F - F.",
        "D - V - V - F."
      ],
      "correct": 3,
      "explanation": "( v ) A afirmativa é verdadeira. Em termos mais simples, uma frase pode ser definida como uma declaração completa e compreensível, capaz de expressar ideias, emoções, ordens ou qualquer outro significado que seja plenamente comunicado e entendido. <br/>( v ) A afirmativa é verdadeira. A oração é caracterizada como uma frase que contém um verbo. É justamente essa presença do verbo que a distingue das demais frases. Por isso, dizemos que nem toda frase pode ser considerada uma oração. Além disso, a frase que não tem verbo é denominada frase nominal. <br/>( f ) A afirmativa é falsa. O período é uma unidade textual composta por uma ou mais orações. Quando um período possui apenas uma oração, é considerado um período simples. Por outro lado, um período composto é aquele que possui mais de uma oração, podendo essas orações estarem conectadas por meio de coordenação ou subordinação."
    },
    {
      "question": "8. Questão - (FGV - 2014 – Nível Superior) “Um meio de fazer justiça social e favorecer esse tipo de imposto” Assinale a opção que indica a forma correta de reescrever-se a segunda oração desse período, transformando-a em frase nominal.",
      "options": [
        "A - Que se favoreça esse tipo de imposto.",
        "B - O favorecimento desse tipo de imposto.",
        "C - O favor desse tipo de imposto.",
        "D - Que se favorecesse esse tipo de imposto.",
        "E - Que favoreçam esse tipo de imposto."
      ],
      "correct": 1,
      "explanation": "Uma oração é caracterizada como uma frase que contém um verbo, podendo ser chamada, também, de frase verbal. Então, a frase que não tem verbo será denominada frase nominal. Sendo assim, a questão pede que uma frase verbal seja transformada em frase nominal. Para reescrever a frase verbal “favorecer esse tipo de imposto” como uma frase nominal é necessário transformar o verbo “favorecer” em substantivo (favorecimento). Por isso, temos a alternativa B como correta. As alternativas A, D e E estão incorretas justamente por apresentarem verbos em suas composições. Confira: <br/>a) INCORRETA | “Que se favoreça esse tipo de imposto.” <br/>b) CORRETA. “O favorecimento desse tipo de imposto.” <br/>c) INCORRETA | A alternativa C (“O favor desse tipo de imposto”) não apresenta uma reescrita adequada para o excerto sinalizado no enunciado. <br/>d) INCORRETA | “Que se favorecesse esse tipo de imposto.” <br/>e) INCORRETA | “Que favoreçam esse tipo de imposto.”"
    },
    {
      "question": "9. Questão - (CPCON - 2023 – Nível Médio) Selecione a proposição com uma análise correta das relações sintáticas, semânticas e pragmáticas de: “O cenário bem diferente do atual existiu antes (e até após) da separação dos continentes da América do Sul e África.”<br/>I- A estrutura linguística exposta é uma frase, por ter significação e função de ato comunicativo.<br/>II - A estrutura linguística exposta corresponde a um período do tipo composto, dado seu arranjo sintático.<br/>III - A estrutura linguística exposta corresponde a um período composto, porque é uma frase e apresenta três orações.<br/>IV - A estrutura linguística exposta corresponde a um período do tipo simples, porque é uma frase e apresenta uma oração.<br/>É CORRETO o que se afirma apenas em:",
      "options": [
        "A - I.",
        "B - II e III.",
        "C - I e IV.",
        "D - I, II e IV.",
        "E - I, III e IV."
      ],
      "correct": 2,
      "explanation": "I. CORRETA | Nem toda frase é uma oração, mas toda oração é uma frase. Além disso, lembremos que uma frase pode ser definida como uma expressão linguística que transmite uma mensagem completa, englobando pensamentos, sentimentos, instruções, solicitações ou qualquer outro sentido que seja claramente transmitido e compreendido. <br/>II. INCORRETA | Note que temos apenas um verbo (“existiu”), então temos apenas uma oração. Isso significa que o período é simples, não composto. <br/>III. INCORRETA | O período possui apenas um verbo, ou seja, uma oração (não três orações), o que corresponde a um período simples, não composto. <br/>IV. CORRETA | O item IV resume o que já vimos nos itens anteriores."
    },
    {
      "question": "10. Questão - Marque a alternativa que contenha uma frase nominal.",
      "options": [
        "A - Preço do combustível sobe.",
        "B - Nova queda do dólar.",
        "C - Ações da empresa despencam.",
        "D - Cai a cotação do trigo.",
        "E - Petróleo registra nova alta."
      ],
      "correct": 1,
      "explanation": "a) INCORRETA | Frase verbal, pois contém verbo (“sobe”). <br/>b) CORRETA | Frase nominal, ou seja, sem a presença de verbos. <br/>c) INCORRETA | Frase verbal, pois contém verbo (“despencam”). <br/>d) INCORRETA | Frase verbal, pois contém verbo (“cai”). <br/>e) INCORRETA | Frase verbal, pois contém verbo (“registra”)."
    },
    {
      "question": "1. questão -  (BIG ADVICE – 2017 – Nível Superior) “Havia dinheiro nos baús.” Temos:",
      "options": [
        "A - Sujeito simples.",
        "B - Sujeito composto.",
        "C - Sujeito Oculto.",
        "D - Sujeito indeterminado.",
        "E - Oração sem sujeito."
      ],
      "correct": 4,
      "explanation": "O verbo “haver”, com sentido de “existir”, é impessoal (não apresenta sujeito)."
    },
    {
      "question": "2. questão -  (BIG ADVICE – 2017 – Nível Superior) “Vive-se bem no interior”. Temos:",
      "options": [
        "A - Sujeito simples.",
        "B - Sujeito composto.",
        "C - Sujeito Oculto.",
        "D - Sujeito indeterminado.",
        "E - Oração sem sujeito."
      ],
      "correct": 3,
      "explanation": "Verbo (intransitivo) na terceira pessoa do singular + “se” é uma estrutura de sujeito indeterminado: alguém vive, mas não se sabe ou não se quer determinar quem vive."
    },
    {
      "question": "3. questão -  (DIRECTA - 2019 - Nível Superior) “Os meninos ganharam o jogo e são os atuais campeões da rua”, o sujeito é:",
      "options": [
        "A - Composto.",
        "B - Simples.",
        "C - Inexistente.",
        "D - Oculto.",
        "E - Indeterminado."
      ],
      "correct": 1,
      "explanation": "Para encontrar o sujeito, basta perguntar para o verbo: quem ganhou o jogo? Os meninos. Como o sujeito (os meninos) está explícito na oração e possui apenas um núcleo (meninos), é denominado sujeito simples."
    },
    {
      "question": "4.  questão -  (BIG ADVICE – 2017 – Nível Superior) Em: “Interromperam o trânsito naquela região”, temos:",
      "options": [
        "A - Sujeito Simples.",
        "B - Sujeito composto.",
        "C - Sujeito desinencial.",
        "D - Sujeito indeterminado.",
        "E - Oração sem sujeito."
      ],
      "correct": 3,
      "explanation": "Verbo na terceira pessoa do plural (desde que o contexto não evidencie quem é o sujeito) é uma estrutura de sujeito indeterminado: alguém interrompeu o trânsito, mas não se sabe ou não se quer determinar quem o interrompeu."
    },
    {
      "question": "5. questão -  (Crescer Consultoria em Gestão de Pessoas – 2019 – Nível Médio) Há sujeito indeterminado na frase da alternativa:",
      "options": [
        "A - Havia vários livros na estante.",
        "B - Estava o professor sozinho na sala de aula.",
        "C - Perto da ponte desceram do ônibus alguns moradores.",
        "D - Precisa-se de um ajudante de cozinha com experiência."
      ],
      "correct": 3,
      "explanation": "a) INCORRETA | Sujeito inexistente (verbo “haver” no sentido de “existir” é impessoal e sem sujeito). <br/>b) INCORRETA | Sujeito simples (o professor). <br/>c) INCORRETA | Sujeito simples (alguns moradores). <br/>d) CORRETA | Verbo (transitivo indireto) na terceira pessoa do singular + “se” + preposição é uma estrutura de sujeito indeterminado: alguém precisa de um ajudante de cozinha, mas não sabemos quem"
    },
    {
      "question": "6.  questão - (CEBRASPE - 2019 - Nível Superior) “Imaginemos que Alice compre um automóvel com um crédito bancário, mas deixe de pagar suas prestações. Uma manhã, introduz sua chave digital no veículo, e a porta não 19 abre. Foi bloqueada por falta de cumprimento do contrato. Minutos depois, chega o funcionário do banco com outra chave digital. Abre a porta, liga o motor e parte com o veículo.” No trecho “Abre a porta, liga o motor e parte com o veículo”, o termo “o veículo” é sujeito das formas verbais “Abre”, “liga” e “parte”.",
      "options": [
        "A - CERTO",
        "B - ERRADO"
      ],
      "correct": 1,
      "explanation": "Veja o trecho em que as formas verbais estão inseridas: “[...] Minutos depois, chega o funcionário do banco com outra chave digital. Abre a porta, liga o motor e parte com o veículo.” Perguntamos aos verbos: quem abre a porta? Quem liga o motor? Quem parte com o veículo? Voltando ao contexto, a resposta é “o funcionário do banco”. Então, o sujeito dessas formas verbais é o mesmo e pode ser entendido a partir da leitura do trecho anterior, ou seja, trata-se de um sujeito oculto, que também pode ser chamado de elíptico ou desinencial, e pode ser identificado a partir da análise do contexto."
    },
    {
      "question": "7.  questão -  (COMPERVE - 2019 - Nível Superior) “As mulheres têm, sim, exercido sua voz, mas mergulham, por vezes, em um conformismo de cultura social que não deverá[1] mais ser aceito e precisa[2] urgentemente ser resolvido com políticas públicas adequadas e conscientização .” As formas verbais [1] e [2]",
      "options": [
        "A - apresentam o mesmo sujeito: “cultura social”.",
        "B - apresentam o mesmo sujeito: “que”.",
        "C - apresentam sujeitos distintos: “que” e “cultura social”, respectivamente.",
        "D - apresentam sujeitos distintos: “cultura social” e “que”, respectivamente."
      ],
      "correct": 1,
      "explanation": "O pronome relativo “que” é o sujeito das formas verbais “deverá” e “precisa”, porque retoma o termo “um conformismo de cultura social”. Verifiquemos o segmento em questão: “As mulheres têm, sim, exercido sua voz, mas mergulham, por vezes, em um conformismo de cultura social que não deverá[1] mais ser aceito e precisa[2] urgentemente ser resolvido com políticas públicas adequadas e conscientização.” Uma forma de se certificar que o “que” é pronome relativo é trocar por outro pronome relativo de igual valor, como “o qual”: “... um conformismo de cultura social que não deverá mais ser aceito e precisa…” “... um conformismo de cultura social o qual não deverá mais ser aceito e precisa…” Façamos a pergunta ao verbo: quem não deverá mais ser aceito e precisa urgentemente ser resolvido com políticas públicas adequadas e conscientização? Conformismo de cultura social. Então, é o pronome relativo “que” quem exerce a função de sujeito das formas verbais “deverá” e “precisa”, porque retoma o segmento “um conformismo de cultura social”: um conformismo de cultura social não deverá ser mais aceito e precisa urgentemente [...]."
    },
    {
      "question": "8.  questão - (FUNDATEC - 2019 - Nível Médio) O sujeito da primeira oração do período a seguir, “Não há relatos de que ela tenha chutado uma bola na juventude dos seus 21 anos” pode ser classificado como:",
      "options": [
        "A - Simples.",
        "B - Composto.",
        "C - Oculto.",
        "D - Inexistente.",
        "E - Desinencial."
      ],
      "correct": 3,
      "explanation": "Para resolver esta questão, é necessário compreender que se trata de um período composto por duas orações: 1ª “Não há relatos”; 2ª “de que ela tenha chutado uma bola na juventude dos seus 21 anos”. O verbo da primeira oração (“há” – verbo “haver”, com sentido de “existir”) é impessoal, ou seja, não tem sujeito. Dessa forma, o sujeito da primeira oração é classificado como inexistente (ou oração sem sujeito). Já o sujeito da segunda oração é simples (“ela”)."
    },
    {
      "question": "9.  questão - (AOPC - 2016 - Nível Médio) Assinale a alternativa correta.",
      "options": [
        "A - Em “[...] gestores indicaram marcadores de estresse em várias outras atividades.”, há um sujeito simples.",
        "B - Em “O primeiro grupo não teve tempo de espera”, o sujeito é inexistente.",
        "C - Em “Você anda estressado?”, não há um sujeito.",
        "D - Em “O nível de estresse registrado foi de 13 pontos”, há um sujeito oculto.",
        "E - Em “A cada dia, estamos mais conectados à internet [...]”, o sujeito é indeterminado."
      ],
      "correct": 0,
      "explanation": "a) CORRETA | O termo “gestores” é o sujeito da oração. Trata-se de sujeito simples por estar explícito na oração e apresentar um único núcleo. <br/>b) INCORRETA | O sujeito é simples, não inexistente (“O primeiro grupo”). <br/>c) INCORRETA | O sujeito é simples (“Você”). <br/>d) INCORRETA | O sujeito é simples, não oculto (“O nível de estresse registrado”) <br/>e) INCORRETA | O sujeito é oculto, não indeterminado (“nós”)."
    },
    {
      "question": "10.  questão -  (Dédalus - 2019 - Nível Médio) Na frase “Normalmente falam pelas costas por ser mais conveniente”, pode-se afirmar que o sujeito do verbo existente é:",
      "options": [
        "A - Elíptico.",
        "B - Indeterminado.",
        "C - Inexistente.",
        "D - Simples.",
        "E - Oracional."
      ],
      "correct": 1,
      "explanation": "Verbo na terceira pessoa do plural (desde que o contexto não evidencie quem é o sujeito) é uma estrutura de sujeito indeterminado: não se quer determinar quem pratica a ação de falar pelas costas."
    },
    {
      "question": "1. QUESTÃO-(Crescer Consultoria em Gestão de Pessoas – 2019 – Nível Médio) Leia as seguintes frases:<br/>I. A enchente deixou a população apavorada.<br/>II. A leitura de um bom livro amplia nosso conhecimento.<br/>III. O trânsito permanece caótico nas grandes cidades.<br/>IV. Os turistas voltaram satisfeitos com a viagem para o Chile.<br/>Assinale a alternativa em que, na sequência, a classificação do predicado está correta:",
      "options": [
        "A - verbal, verbo-nominal, verbal, nominal.",
        "B - verbo-nominal, verbal, nominal, verbo-nominal.",
        "C - verbal, verbo-nominal, nominal, verbal.",
        "D - nominal, verbal, verbo-nominal, verbal."
      ],
      "correct": 1,
      "explanation": "I. O predicado é verbo-nominal porque possui dois núcleos: um verbo de ação (“deixou”) e um predicativo (“apavorada”). <br/>II. O predicado é verbal porque possui como núcleo um verbo de ação (“amplia”). <br/>III. O predicado é nominal porque o verbo contido nele é de ligação (“permanece”), e possui como núcleo um predicativo (“caótico”). <br/>IV. O predicado é verbo-nominal porque possui dois núcleos: um verbo de ação (“voltaram”) e um predicativo (“satisfeitos”)."
    },
    {
      "question": "2. QUESTÃO-(IBADE - 2018- Nível Médio) Observe os predicados das orações abaixo e marque a opção que apresenta, correta e respectivamente, a classificação de cada um.<br/>I. “ela escreve capítulos surpreendentes da sua biografia.”<br/>II. “Uma vez, eu estava na National Portrait Gallery\"<br/>III. “hoje ela reside na bancada do banheiro, intocada”",
      "options": [
        "A - Verbal, nominal, verbo-nominal",
        "B - Verbo-nominal, nominal, verbo-nominal",
        "C - Verbal, verbal, verbal",
        "D - Verbal, verbal, verbo-nominal",
        "E - Verbal, nominal, verbal"
      ],
      "correct": 3,
      "explanation": "I. O predicado é verbal porque possui como núcleo um verbo de ação (“escreve”). A palavra “surpreendentes” é adjunto adnominal e faz parte do objeto direto. <br/>II. O predicado é verbal porque, nesse contexto, o verbo “estar” é de ação. <br/>III. O predicado é verbo-nominal porque possui dois núcleos: um verbo de ação (“reside”) e um predicativo (“intocada”)."
    },
    {
      "question": "3. QUESTÃO-(COSEAC - 2018 - Nível Médio) Os predicados sublinhados em: “Ele foi juiz de direito em Maricá e depois foi para o Rio.” são:",
      "options": [
        "A - ambos nominais, com caráter descritivo.",
        "B - respectivamente, verbal, com caráter descritivo, e nominal, com caráter narrativo.",
        "C - ambos verbais, com caráter narrativo.",
        "D - respectivamente, nominal, com caráter descritivo, e verbal, com caráter narrativo.",
        "E - ambos verbais, com caráter descritivo."
      ],
      "correct": 3,
      "explanation": "Na oração “Ele foi juiz de direito em Maricá”, temos um verbo de ligação (“foi” é a terceira pessoa do singular no pretérito perfeito do verbo “ser”) e um predicativo do sujeito (“juiz de direito”), responsável por caracterizar, descrever o sujeito. O predicado é, portanto, classificado como nominal. Já na oração “depois foi para o Rio”, temos um verbo de ação (“foi” é a terceira pessoa do singular no pretérito perfeito do verbo “ir”). Por isso, o predicado é verbal e narra um fato. Perceba como a forma verbal “foi” coincide como flexão dos verbos “ser” e “ir”. É preciso sempre analisar o contexto!"
    },
    {
      "question": "4. QUESTÃO-(FUNDATEC - 2019 - Nível Superior) Assinale a alternativa na qual há a ocorrência de predicado nominal:",
      "options": [
        "A - “deve investir em técnicas”.",
        "B - “Uma pessoa bem-humorada passa segurança”.",
        "C - “Não existe um manual com regras”.",
        "D - “trata-se muito mais de ter habilidade de analisar o contexto”.",
        "E - “O humor é muito mais que humor entretenimento”."
      ],
      "correct": 4,
      "explanation": "a) INCORRETA | Apresenta verbo de ação e têm, portanto, predicado verbal (“deve investir em técnicas”). <br/>b) INCORRETA | Apresenta verbo de ação e têm, portanto, predicado verbal (“Uma pessoa bem-humorada passa segurança”). <br/>c) INCORRETA | Apresenta verbo de ação e têm, portanto, predicado verbal (“Não existe um manual com regras”). <br/>d) INCORRETA | Apresenta verbo de ação e têm, portanto, predicado verbal (“trata-se muito mais de ter habilidade de analisar o contexto”). <br/>e) CORRETA | A alternativa E traz a oração cujo predicado é nominal, pois possui como núcleo um predicativo (“muito mais que humor e entretenimento”), responsável por caracterizar o sujeito (“O humor”) por meio de um verbo de ligação (“é”)."
    },
    {
      "question": "5. QUESTÃO-(CETAP - 2016 - Nível Superior) Assinale a alternativa em que o sujeito está posposto ao predicado.",
      "options": [
        "A - Ele não terá que decidir.",
        "B - Está configurada uma situação crítica.",
        "C - A lealdade a um princípio o livra.",
        "D - As pesquisas com célula-tronco contribuem.",
        "E - A eutanásia pode ser o único caminho."
      ],
      "correct": 1,
      "explanation": "A ordem padrão na organização de uma sentença na língua portuguesa é sujeito + verbo + complemento (+ adjuntos). A questão pede a alternativa que foge dessa estrutura.<br/>a) INCORRETA | “Ele não terá que decidir”. O sujeito “ele” aparece antes do predicado “não terá que decidir”. <br/>b) CORRETA | “Está configurada uma situação crítica.” O sujeito “uma situação crítica” foi apresentado após o predicado “Está configurada”. Na ordem natural, a oração ficaria da seguinte maneira: “Uma situação crítica está configurada” (sujeito + predicado). <br/>c) INCORRETA | “A lealdade a um princípio o livra”. O sujeito “A lealdade” aparece antes do predicado “a um princípio o livra”. <br/>d) INCORRETA | “As pesquisas com célula-tronco contribuem”. O sujeito “As pesquisas com célula-tronco” aparece antes do predicado “contribuem”. <br/>e) INCORRETA | “A eutanásia pode ser o único caminho”. O sujeito “A eutanásia” aparece antes do predicado “pode ser o único caminho”."
    },
    {
      "question": "6.QUESTÃO- (FUNDATEC - 2019 - Nível Superior) Marque a opção cuja oração tem predicado verbo-nominal.",
      "options": [
        "A - Elisabete é linda!",
        "B - A casa de Jussara sofreu reforma geral.",
        "C - As crianças chegaram cansadas.",
        "D - Os chuchus parecem murchos.",
        "E - A borboleta morreu."
      ],
      "correct": 2,
      "explanation": "a) INCORRETA | Predicado nominal. “Elisabete é linda!”. “É” funciona como verbo de ligação, enquanto “linda” é predicativo do sujeito. <br/>b) INCORRETA | Predicado verbal. “A casa de Jussara sofreu reforma geral.” O (verbo “sofrer” é transitivo direto. <br/>c) CORRETA | Predicado verbo-nominal. A oração da alternativa C traz uma oração cujo predicado é verbo-nominal porque possui dois núcleos: um verbo de ação (“chegaram”) e um predicativo (“cansadas”). <br/>d) INCORRETA | Predicado nominal. “Os chuchus parecem murchos.” = nesse caso, “murchos” é predicativo do sujeito = a estrutura é: verbo de ligação + predicativo do sujeito; <br/>e) INCORRETA | Predicado verbal. “A borboleta morreu.”. O verbo “morrer” é intransitivo"
    },
    {
      "question": "7. QUESTÃO-(Colégio Pedro II - 2017 - Nível Médio) Sobre a classificação do predicado da oração “No Facebook, a mãe Brandi se mostrou orgulhosa da atitude da filha.”, trata-se de predicado",
      "options": [
        "A - verbal, cujo núcleo é mostrou.",
        "B - nominal, cujo núcleo é orgulhosa.",
        "C - verbo-nominal, cujos núcleos são “mostrou” e “atitude”.",
        "D - verbo-nominal, cujos núcleos são “mostrou” e “orgulhosa”."
      ],
      "correct": 1,
      "explanation": "O predicado da oração em questão é nominal porque possui como núcleo o predicativo “orgulhosa”, que caracteriza o sujeito por meio de um verbo de ligação (“se mostrou”)."
    },
    {
      "question": "8. QUESTÃO-(Crescer Consultorias - 2019 - Nível Médio) Ocorre predicado verbal em",
      "options": [
        "A - “o Brasil é um dos piores países”.",
        "B - “Alguns avanços já foram conquistados nas últimas décadas”.",
        "C - “a nossa taxa é de aproximadamente 10 pontos percentuais a menos”.",
        "D - “o número de mulheres na política é baixo no Brasil.”"
      ],
      "correct": 1,
      "explanation": "a) INCORRETA | Predicado nominal, já que a oração segue a estrutura: sujeito + verbo de ligação + predicativo do sujeito: “o Brasil é um dos piores países”. <br/>b) CORRETA | A oração da alternativa B possui predicado verbal porque a locução verbal (“foram conquistados”) expressa ação. Cuidado para não confundir essa locução verbal (ser + particípio) presente em orações que estão na voz passiva (e que expressa ação) com verbo de ligação + predicativo do sujeito. <br/>c) INCORRETA | Predicado nominal, já que a oração segue a estrutura: sujeito + verbo de ligação + predicativo do sujeito: “a nossa taxa é de aproximadamente 10 pontos percentuais a menos”. <br/>d) INCORRETA | Predicado nominal, já que a oração segue a estrutura: sujeito + verbo de ligação + predicativo do sujeito: “o número de mulheres na política é baixo no Brasil.”"
    },
    {
      "question": "9. QUESTÃO-(Unesc - 2023 - Nível Superior) “O surto do vírus de Marburg, na Guiné Equatorial, já provocou a morte de nove pessoas.” O predicado da frase é composto pela expressão:",
      "options": [
        "A - provocou a morte de nove pessoas",
        "B - já provocou a morte de nove pessoas",
        "C - na Guiné Equatorial, já provocou a morte de nove pessoas",
        "D - já provocou a morte",
        "E - na Guiné Equatorial, provocou a morte de nove pessoas"
      ],
      "correct": 2,
      "explanation": "“O surto do vírus de Marburg, na Guiné Equatorial, já provocou a morte de nove pessoas”. O trecho “O surto do vírus de Marburg” é o sujeito da oração e o restante é o predicado. A dica para resolver esse tipo de questão é simples: tudo aquilo que não é sujeito é predicado. A banca até tentou fazer uma “pegadinha” na alternativa E (com a retirada apenas da palavra “já”), mas todo o trecho, exceto o sujeito, é predicado."
    },
    {
      "question": "10.QUESTÃO- (Unesc - 2023 - Nível Superior) “O vírus de Marburg causa febre hemorrágica e é transmitido por morcegos.” Em relação à oração destacada, afirma-se que possui:",
      "options": [
        "A - Predicação verbal.",
        "B - Predicação nominal.",
        "C - Predicação verbo-nominal.",
        "D - Toda a oração como predicado.",
        "E - A expressão 'causa' como predicado."
      ],
      "correct": 0,
      "explanation": "Em “O vírus de Marburg causa febre hemorrágica e é transmitido por morcegos”, o trecho destacado possui predicação verbal, uma vez que o predicado verbal é constituído por um verbo de ação. Nesse sentido, o verbo “causar” é transitivo direto."
    },
    {
      "question": "1.questão-  (BIG ADVICE – 2017 – Nível Superior) Em: “Fizemos um excelente trabalho”, a expressão em destaque, sintaticamente é:",
      "options": [
        "A - Sujeito simples.",
        "B - Predicativo do Sujeito.",
        "C - Objeto direto.",
        "D - Objeto indireto.",
        "E - Complemento Nominal."
      ],
      "correct": 2,
      "explanation": "O verbo “fazer” é, nesse contexto, transitivo direto. O termo “um excelente trabalho” completa o sentido do verbo e é, portanto, objeto direto."
    },
    {
      "question": "2.questão-  (VUNESP – 2019 – Nível Médio) Considere as frases elaboradas a partir das ideias do texto.<br/>• A empresa tem um ambicioso programa de robótica e decidiu reformular esse ambicioso programa.<br/>• Alguns robôs lidam com objetos não familiares, e os pesquisadores analisam como organizam esses objetos.<br/>De acordo com o emprego e a colocação dos pronomes estabelecidos pela norma-padrão, os trechos em destaque podem ser substituídos por:",
      "options": [
        "A - reformulá-lo; os organizam",
        "B - reformulá-lo; lhes organizam",
        "C - o reformular; organizam-lhes",
        "D - reformular-lhe; os organizam",
        "E - lhe reformular; organizam-nos"
      ],
      "correct": 0,
      "explanation": "Os verbos “reformular” (1ª frase) e “organizam” (2ª frase) são transitivos diretos, tendo como complementos os termos “esse ambicioso programa” e “esses projetos”, respectivamente. Ao substituir esses objetos por pronomes oblíquos átonos, devemos empregar o pronome “o”. No caso da primeira frase, como o verbo “reformular” termina em “-r”, deve-se retirar essa letra e acrescentar “-l” ao pronome, o que resulta em “reformulá-lo”. Já na segunda frase, a palavra “como” atrai o pronome para antes do verbo, resultando em “os organizam”. Além disso, é importante lembrar que, em um texto, o pronome “lhe” pode apresentar função de objeto indireto, complemento nominal ou adjunto adnominal, a depender do contexto, ou seja, ele não faz papel de objeto direto. Por isso, as alternativas B, C, D e E estão incorretas, já que ambos os verbos (“reformular” e “organizar”) são verbos transitivos diretos (isto é, são verbos que exigem um complemento sem preposição, um objeto direto), então o “lhe” não serviria para completar nenhum dos dois verbos."
    },
    {
      "question": "3.questão-  (VUNESP – 2019 – Nível Médio) Considere as seguintes passagens:<br/>• O ser humano revelou-se capaz de dividir o átomo…<br/>• … descobriram em duas ilhas gregas um micróbio marinho…<br/>• … as salamandras aprendem a gerir o mundo melhor do que nós.<br/>As expressões em destaque estão corretamente substituídas por pronomes em:",
      "options": [
        "A - … dividi-lo… / … descobriram-no em duas ilhas… / … aprendem a geri-lo…",
        "B - … dividi-lo… / … descobriram-lhe em duas ilhas… / … aprendem a geri-lo…",
        "C - … dividi-lo… / … descobriram-no em duas ilhas… / … aprendem a gerir-lhe…",
        "D - … dividir-lhe… / … descobriram-lhe em duas ilhas… / … aprendem a geri-lo…",
        "E - … dividi-lhe… / … descobriram-no em duas ilhas… / … aprendem a geri-lhe…"
      ],
      "correct": 0,
      "explanation": "Os verbos “dividir”, “descobrir” e “gerir”, das frases 1, 2 e 3, respectivamente, são transitivos diretos. Possuem como complementos, portanto, termos que são classificados sintaticamente como objetos diretos. Para esse tipo de questão, vale uma dica: descarte as alternativas que tenham o pronome oblíquo “lhe”, uma vez que exerce apenas função de objeto indireto. De acordo com as regras do emprego dos pronomes oblíquos, quando o verbo termina em “-r”, como é o caso de “dividir” e “gerir”, retira-se essa letra e acrescenta-se “-l” ao pronome. O resultado é “dividi-lo” e “geri-lo”. Já no caso da segunda frase, o acréscimo da letra “-n” ao pronome deve-se ao fato de que o verbo termina em som nasal."
    },
    {
      "question": "4.questão-  (UFRJ - 2017 - Nível Médio) No trecho “A ideia é que a contemplação desses lugares permite uma resposta intuitiva à questão (...)”, o verbo em destaque, quanto à sua regência, é:",
      "options": [
        "A - transitivo direto.",
        "B - intransitivo.",
        "C - transitivo indireto.",
        "D - intransitivo direto.",
        "E - transitivo direto e indireto."
      ],
      "correct": 4,
      "explanation": "No contexto apresentado, o verbo “permitir” é transitivo direto e indireto por possuir dois complementos, um sem preposição (“uma resposta intuitiva” - objeto direto) e outro com preposição (“à questão” - objeto indireto)."
    },
    {
      "question": "5. (IBFC - 2019 - Nível Médio) Analise o enunciado: “Todo esforço tem a sua recompensa”. Assinale a alternativa que preencha correta e respectivamente as lacunas abaixo.<br/>A expressão “todo esforço” funciona como _____ da oração; o termo “tem” é um _____ que é complementado com um _____ representado pela expressão “a sua recompensa”.",
      "options": [
        "A - predicado / verbo intransitivo / complemento nominal.",
        "B - substantivo / verbo de ligação / complemento verbal.",
        "C - predicativo / verbo transitivo indireto / objeto indireto.",
        "D - sujeito / verbo transitivo direto / objeto direto."
      ],
      "correct": 3,
      "explanation": "A expressão “Todo esforço” funciona como sujeito da oração, porque é o termo sobre o qual se afirma algo. O verbo “ter”, nesse contexto, é transitivo direto e seu complemento (“a sua recompensa”) é objeto direto."
    },
    {
      "question": "6.questão-  (FUNDATEC - 2019 - Nível Superior) Em “Ela (1) lhes (2) dirá bem devagarinho (3), para que (4) não esqueçam (5)”, assinale a alternativa que apresenta o número correspondente ao termo que exerce a função de objeto indireto na oração.",
      "options": [
        "A - 1.",
        "B - 2.",
        "C - 3.",
        "D - 4.",
        "E - 5."
      ],
      "correct": 1,
      "explanation": "O verbo “dizer” é transitivo direto e indireto (exige dois complementos). Quem diz, diz algo (objeto direto) a alguém (objeto indireto). O pronome oblíquo “lhes” exerce, nesse contexto, função de objeto indireto, uma vez que representa a quem o sujeito dirá."
    },
    {
      "question": "7. (Instituto Excelência - 2019 - Nível Superior) Assinale a alternativa CORRETA para os termos integrantes da oração.<br/>I - Marília vendia roupas<br/>II - Juliana gosta de livros.<br/>III - Gosto de flores.<br/>IV - Paulo mora perto de um grande supermercado.",
      "options": [
        "A - I - Objeto direto, II - objeto indireto, III - objeto indireto, IV - complemento nominal.",
        "B - I - Objeto indireto, II - objeto indireto, III - objeto direto, IV - adjunto adnominal.",
        "C - I - Objeto indireto, II - objeto direto, III - objeto direto, IV - adjunto adverbial.",
        "D - Nenhuma das alternativas"
      ],
      "correct": 0,
      "explanation": "Lembremos que são termos integrantes da oração: complementos verbais (objeto direto e objeto indireto), complemento nominal, agente da passiva e predicativos (do sujeito e do objeto). Agora observe a análise sintática de cada uma das orações: <br/>I. Marília (sujeito) - vendia (verbo transitivo direto) roupas (objeto direto); <br/>II. Juliana (sujeito) gosta (verbo transitivo indireto) de livros (objeto indireto); <br/>III. Gosto (verbo transitivo indireto) de flores (objeto indireto); <br/>IV. Paulo (sujeito) mora (verbo intransitivo) perto (adjunto adverbial de lugar) de um grande supermercado (complemento nominal)."
    },
    {
      "question": "8.questão-  (CCV/UFC - 2019 - Nível Superior) Assinale a alternativa em que o termo grifado funciona como objeto direto.",
      "options": [
        "A - “que foi transmitida naturalmente às novas gerações”.",
        "B - “Assim nasceu a linguagem de sinais da Nicarágua”.",
        "C - “onde já existe uma linguagem de sinais reconhecida”.",
        "D - “a língua é uma verdadeira Babilônia”.",
        "E - “há alguma relação entre a linguagem de sinais e a língua falada?”."
      ],
      "correct": 4,
      "explanation": "a) INCORRETA | O pronome relativo em destaque funciona sintaticamente como sujeito da oração. <br/>b) INCORRETA | A expressão destacada tem função sintática de sujeito. <br/>c) INCORRETA | A expressão destacada exerce função de sujeito da oração. <br/>d) INCORRETA | O termo em destaque é predicativo do sujeito. <br/>e) CORRETA | O verbo “haver”, com sentido de existir, é impessoal, isto é, não possui sujeito. Em relação à sua transitividade, trata-se de um verbo transitivo direto. O termo destacado é, portanto, objeto direto."
    },
    {
      "question": "9.questão-  (UERR/IPERON - 2018 - Nível Superior) O termo destacado em: “elas acreditam EM NOSSA MISSÃO.” exerce função sintática de:",
      "options": [
        "A - complemento nominal.",
        "B - objeto direto.",
        "C - adjunto adnominal.",
        "D - predicativo do sujeito",
        "E - objeto indireto."
      ],
      "correct": 4,
      "explanation": "O verbo “acreditar” é, nesse contexto, transitivo indireto, pois exige um complemento com preposição (“em nossa missão”), denominado sintaticamente como objeto indireto."
    },
    {
      "question": "10.questão- (CPCON - 2019 - Nível Superior) Considere os destaques nos enunciados a seguir:<br/>I - Depois que a chuva passou, um sol forte iluminou a cidade.<br/>II - Nas eleições de 2018, o candidato X estava em primeiro lugar nas pesquisas eleitorais, mas o candidato Y, nas últimas pesquisas, passou o seu adversário e conquistou o primeiro lugar.<br/>III - Por mais de duas décadas, um agente secreto americano passou informações militares para os russos.<br/>IV - Com a reestruturação administrativa da empresa, o competente funcionário passou a diretor comercial.<br/>Considerando-se as questões relacionadas à regência verbal, julgue cada uma das afirmações acerca dos enunciados e, em seguida, marque V para Verdadeiro e F para Falso.<br/>( ) Em todas as orações, o verbo passar tem o mesmo significado.<br/>( ) Em I, passar significa “chegar ao fim” e é um verbo intransitivo.<br/>( ) Em II, passar significa “superar” e é um verbo transitivo direto.<br/>( ) Em III, passar significa “transmitir”, “transferir” e tem dois objetos: “segredos militares” (objeto direto) e “para os russos” (objeto indireto).<br/>( ) Em II e IV, passar tem significados diferentes, mas têm a mesma transitividade.<br/>( ) Em IV, passar significa “tornar-se, transformar-se em” e funciona como verbo de ligação, tendo como predicativo o termo “diretor comercial”.<br/>O preenchimento CORRETO dos parênteses está na alternativa:",
      "options": [
        "A - V, V, V, F, F e V.",
        "B - F, V, V, V, F e F.",
        "C - V, V, F, F, V e V.",
        "D - F, F, F, V, V e V.",
        "E - F, V, V, V, F e V"
      ],
      "correct": 4,
      "explanation": "( f ) | O verbo “passar” não possui o mesmo significado em todas as orações. Na primeira frase, por exemplo, tem o sentido de “cessar”, já na segunda, o sentido é de “superar”. <br/>( v ) | Em I, passar significa “chegar ao fim” e é um verbo intransitivo. <br/>( v ) | Em II, passar significa “superar” e é um verbo transitivo direto. <br/>( v ) | Em III, passar significa “transmitir”, “transferir” e tem dois objetos: “segredos militares” (objeto direto) e “para os russos” (objeto indireto). <br/>( f ) | Em II e IV, o verbo “passar” tem significados diferentes e também são diferentes em relação à transitividade. Em II o verbo comporta-se como transitivo direto e possui como complemento o termo “o seu adversário”. Já em IV, o verbo “passar” significa “transformar-se em” e funciona como verbo de ligação. <br/>( v ) | Em IV, passar significa “tornar-se, transformar-se em” e funciona como verbo de ligação, tendo como predicativo o termo “diretor comercial”"
    },
    {
      "question": "1. questão-(Instituto Excelência - 2019 - Nível Superior) Na frase: “Tenho uma vaga lembrança dos três meninos correndo pelo pátio da escola.” O trecho destacado refere- se ao:",
      "options": [
        "A - Objeto indireto.",
        "B - Adjunto adnominal.",
        "C - Complemento nominal.",
        "D - Nenhuma das alternativas."
      ],
      "correct": 2,
      "explanation": "O termo “dos três meninos” completa o sentido do substantivo abstrato “lembrança”. É possível confirmar que se trata de um complemento nominal por ser de natureza passiva (os três meninos recebem a ação de serem lembrados)."
    },
    {
      "question": "2.questão- (CETREDE - 2019 - Nível Médio) Marque a opção em que o termo destacado tem função de complemento nominal.",
      "options": [
        "A - Pedro e João viajaram.",
        "B - Não vi Maria.",
        "C - Fui traído por Maria.",
        "D - Ele parece ter ódio de João.",
        "E - Gosto muito de João."
      ],
      "correct": 3,
      "explanation": "a) INCORRETA | O termo destacado possui a função de sujeito. <br/>b) INCORRETA | O termo destacado possui a função de objeto direto. <br/>c) INCORRETA | O termo destacado possui a função de agente da passiva. <br/>d) CORRETA | O termo “de João” completa o sentido do substantivo abstrato “ódio” por meio de uma preposição (de) e é paciente (João sofre a ação de ser odiado). Trata-se, portanto, de um complemento nominal. <br/>e) INCORRETA | O termo destacado possui a função de objeto indireto."
    },
    {
      "question": "3.questão- (COMPERVE - 2019 - Nível Médio) “Muitas pessoas estão, voluntariamente, abandonando as redes sociais e procurando novas formas de agrupamento e de convivência. Isso inclui a retomada[1] da leitura, do silêncio e da solidão, atualmente abandonados pela necessidade[2] de responder a estímulos digitais incessantes.” Sobre os elementos linguísticos [1] e [2], é correto afirmar:",
      "options": [
        "A - [1] exige um complemento nominal e [2] exige um complemento verbal.",
        "B - [1] exige um complemento verbal.",
        "C - [1] exige um complemento nominal.",
        "D - [1] exige um complemento verbal e [2] exige um complemento nominal."
      ],
      "correct": 2,
      "explanation": "Ambos os termos destacados exigem complemento nominal. A expressão “da leitura, do silêncio e da solidão” é complemento nominal do substantivo abstrato “retomada”. Já a oração “de responder a estímulos digitais incessantes” também tem função de completar o sentido de “necessidade”."
    },
    {
      "question": "4. questão- Marque a alternativa em que o termo destacado tenha função sintática de complemento nominal.",
      "options": [
        "A - As crianças necessitam de atenção o tempo todo.",
        "B - A bagagem do passageiro foi extraviada.",
        "C - Estamos aguardando a devolução da mercadoria.",
        "D - A casa foi comprada por um empresário.",
        "E - A palestra da professora foi demorada."
      ],
      "correct": 2,
      "explanation": "a) INCORRETA | O termo destacado possui a função de objeto indireto. <br/>b) INCORRETA | O termo destacado possui a função de adjunto adnominal. <br/>c) CORRETA | O termo destacado possui a função de complemento nominal. <br/>d) INCORRETA | O termo destacado possui a função de agente da passiva. <br/>e) INCORRETA | O termo destacado possui a função de adjunto adnominal."
    },
    {
      "question": "5.questão- (Português com Letícia) Analise as afirmações e coloque V para as verdadeiras e F para as falsas. Em seguida, marque a alternativa que apresenta a sequência correta.<br/>( ) O complemento nominal completa o sentido de um substantivo concreto ou abstrato.<br/>( ) O complemento nominal é um termo de natureza paciente.<br/>( ) O complemento nominal sempre vem antecedido por preposição.",
      "options": [
        "A - V - V – V",
        "B - V - V – F",
        "C - F - F – V",
        "D - F - V – V",
        "E - F - V – F"
      ],
      "correct": 3,
      "explanation": "A primeira afirmação está errada porque o complemento nominal completa o sentido de substantivos abstratos, adjetivos e advérbios. As outras duas são verdadeiras."
    },
    {
      "question": "6.questão- (COPEVE - 2018 - Nível Superior) O termo destacado no período “Os funcionários manifestaram interesse em discutir com o proprietário da fábrica sobre o aumento salarial, já que o diretor financeiro mostrou-se insensível à situação.” exerce a função de",
      "options": [
        "A - objeto direto.",
        "B - objeto indireto.",
        "C - objeto pleonástico.",
        "D - adjunto adnominal.",
        "E - complemento nominal."
      ],
      "correct": 4,
      "explanation": "O termo “à situação” exerce função de complemento nominal por completar o sentido de um adjetivo, por meio de uma preposição (a)."
    },
    {
      "question": "7.questão- (FGR - 2018 - Nível Médio) \"O Papa Francisco demonstra a todo tempo seu amor aos mais pobres.\" Analise a frase acima e marque a opção cujo trecho grifado exerce a mesma função sintática.",
      "options": [
        "A - Nos dias atuais os cristãos estão perto da verdade.",
        "B - A voz segura do sacerdote ecoou nas alturas.",
        "C - Os solados da Líbia foram recebidos pelo padre.",
        "D - A fé conduz toda e qualquer pessoa à esperança."
      ],
      "correct": 0,
      "explanation": "A expressão “aos mais pobres” é complemento nominal por estar relacionado ao substantivo abstrato “amor” e por ter caráter paciente. A única alternativa cujo termo destacado também é um complemento nominal é a A. O termo “da verdade” completa o sentido do advérbio perto."
    },
    {
      "question": "8.questão- (UFMG - 2019 - Nível Médio) “O caminho para o combate à mudança climática também passa pela alteração de nossa base energética, fundamentada em uso de hidrocarbonetos como o petróleo.” Nesse fragmento, são classificados como complementos nominais os seguintes termos, EXCETO:",
      "options": [
        "A - “para o combate”.",
        "B - “pela alteração de nossa base energética”.",
        "C - “à mudança climática”.",
        "D - “em uso de hidrocarbonetos”."
      ],
      "correct": 1,
      "explanation": "A única alternativa cujo termo apresentado não se classifica sintaticamente como complemento nominal é a B. A expressão “pela alteração de nossa base energética” é um adjunto adverbial."
    },
    {
      "question": "9.questão- (UFMG - 2019 - Nível Superior) Nas alternativas a seguir, os termos e/ou orações destacados exercem a função sintática de complemento nominal, EXCETO em:",
      "options": [
        "A - Aqueles com renda familiar mais baixa têm menos suporte social, previdenciário e acesso limitado à assistência médica.",
        "B - [...] os mais pobres têm dificuldade de acesso a serviços sociais, à assistência médica, à prevenção e ao tratamento de transtornos psiquiátricos e dependência química.",
        "C - [...] habituados a enfrentar desvantagens econômicas, discriminação, preconceito social e mortalidade geral mais elevada.",
        "D - [...] à consciência dos trabalhadores de que perderam o padrão de vida que os pais um dia tiveram."
      ],
      "correct": 3,
      "explanation": "O termo “dos trabalhadores” é um adjunto adnominal e está acompanhando o substantivo abstrato “consciência”. Trata-se de um adjunto adnominal por ser um termo agente (os trabalhadores têm consciência)."
    },
    {
      "question": "10.questão- (LEGALLE CONCURSOS - 2016 - Nível Médio) Qual das alternativas apresenta complemento nominal?",
      "options": [
        "A - A criança resistiu ao machucado.",
        "B - Gosto de boas músicas.",
        "C - O rapaz desculpou-se pelo ocorrido.",
        "D - A lembrança da mãe fê-lo sofrer.",
        "E - Alguém deve me obedecer nesse lugar!"
      ],
      "correct": 3,
      "explanation": "O termo “da mãe” é classificado sintaticamente como complemento nominal por estar relacionado a um substantivo abstrato (lembrança) e por ter natureza paciente (a mãe recebeu a ação de ter sido lembrada)."
    },
    {
      "question": "1.questão-  (FUNDATEC - 2019 - Nível Médio) Analise o trecho a seguir: “um levantamento (1) feito pelo dicionário inglês (2) mostrou um aumento (3) exponencial (4) nas pesquisas da expressão (5)”. O termo que exerce a função de agente da passiva é dado por:",
      "options": [
        "A - 1.",
        "B - 2.",
        "C - 3.",
        "D - 4.",
        "E - 5."
      ],
      "correct": 1,
      "explanation": "A oração em questão está na voz passiva. A expressão “pelo dicionário inglês” é classificada sintaticamente como agente da passiva, por ser o termo que pratica a ação expressa pelo verbo. Se a oração estivesse na voz ativa, esse termo seria o sujeito. Observe: “O dicionário inglês fez um levantamento”."
    },
    {
      "question": "2.questão-  (NUCEPE - 2019 - Nível Superior) Em “A raiva é transmitida por animais contaminados e comentários e postagens nas redes sociais...”, o termo destacado tem a função sintática de",
      "options": [
        "A - adjunto adverbial, indica circunstância à ação verbal.",
        "B - agente da passiva, pratica a ação verbal na voz passiva.",
        "C - complemento nominal, pois completa o adjetivo “transmitida”.",
        "D - objeto indireto, completa do sentido do verbo com o auxílio da preposição.",
        "E - sujeito, pratica a ação de “transmitir” expressa na oração de ordem inversa."
      ],
      "correct": 1,
      "explanation": "O termo destacado tem função sintática de agente da passiva, uma vez que pratica a ação expressa pelo verbo. Se a oração estivesse na voz ativa, o termo em destaque seria o sujeito agente. Observe: “Animais contaminados e comentários e postagens nas redes sociais transmitem a raiva”."
    },
    {
      "question": "3.questão-  (CETREDE - 2019 - Nível Médio) Em qual das opções há agente da passiva?",
      "options": [
        "A - A crença em Deus é necessária.",
        "B - As frutas ficaram bichadas com o tempo.",
        "C - O ator estava cercado de fãs.",
        "D - De repente, fiquei ansioso por sua volta.",
        "E - O rapaz estava apaixonado pela colega."
      ],
      "correct": 2,
      "explanation": "A única alternativa que traz uma oração na voz passiva é a C. O termo “de fãs” é o agente da passiva. Se a oração estivesse na voz ativa, “fãs” seria o sujeito agente. Observe: “Fãs cercavam o ator”."
    },
    {
      "question": "4.questão-  (IDECAN - 2018 - Nível Médio) Analise a frase a seguir: “A Igreja acusou a ciência de prejudicar a moral”. Acerca da frase, marque V para as afirmativas verdadeiras e F para as falsas.<br/>( ) “A ciência foi acusada de prejudicar a moral.” é uma de suas versões em voz passiva.<br/>( ) “Acusou-se a ciência de prejudicar a moral.” é uma de suas versões em voz passiva.<br/>( ) Na passagem da voz ativa para passiva, o objeto direto na versão ativa se tornou sujeito na versão passiva.<br/>( ) Na passagem da voz ativa para passiva, o sujeito na versão ativa se tornou objeto direto na versão passiva.<br/>A sequência está correta em",
      "options": [
        "A - V, V, F, F.",
        "B - V, V, V, F.",
        "C - V, F, V, V.",
        "D - F, F, F, V."
      ],
      "correct": 1,
      "explanation": "( v ) | “A ciência foi acusada de prejudicar a moral.” é a voz passiva analítica da oração em questão. <br/>( v ) | “Acusou-se a ciência de prejudicar a moral.” é a voz passiva sintética da oração em questão. <br/>( v ) | O objeto direto da voz ativa transforma-se em sujeito na voz passiva. O termo “a ciência” na frase trazida pela questão é objeto direto que, na transposição para a voz passiva, torna-se sujeito paciente. <br/>( f ) | O sujeito da voz ativa torna-se agente da passiva na voz passiva analítica, entretanto, no caso da oração “A ciência foi acusada de prejudicar a moral.”, o termo que pratica a ação expressa pelo verbo (“a igreja”) foi omitido."
    },
    {
      "question": "5.questão-  (CCV-UFC - 2018 - Nível Superior) Assinale a alternativa cujo termo sublinhado exerce a função de agente da passiva.",
      "options": [
        "A - “Ali foi encontrado alto teor de partículas de microplástico”.",
        "B - “foram constatadas ‘concentrações extremamente altas’ de PCB...”.",
        "C - “Não há um único canto da Terra livre da poluição”.",
        "D - “Foram publicados pela Organização Mundial da Saúde”",
        "E - “Se multiplicarmos 7 (milhões de pessoas) por 6 (anos)...”."
      ],
      "correct": 3,
      "explanation": "A expressão “pela Organização Mundial da Saúde” exerce função sintática de agente da passiva, uma vez que é o termo que pratica a ação expressa pelo verbo da oração na voz passiva. Note que se passamos a oração para a voz ativa, esse termo passa a ser o sujeito: “A Organização Mundial da Saúde publicou...”."
    },
    {
      "question": "6. questão- (COPEVE-UFAL - 2016 - Nível Superior) “Meu filho quebrou a janela do vizinho”. Na reescrita dessa oração para a voz passiva, evidencia-se que:",
      "options": [
        "A - O objeto direto passa a sujeito e o sujeito passa a objeto direto.",
        "B - O sujeito passa a agente da passiva e o objeto direto passa a sujeito.",
        "C - O sujeito passa a agente da passiva e o objeto indireto passa a sujeito.",
        "D - O objeto direto passa a agente da passiva e o sujeito passa a objeto direto.",
        "E - O sujeito passa a agente da passiva e o objeto direto passa a objeto indireto."
      ],
      "correct": 1,
      "explanation": "Ao passarmos a oração em questão para a voz passiva analítica, temos: “A janela do vizinho foi quebrada pelo meu filho”. Portanto, o sujeito passa a agente da passiva (“pelo meu filho”), e o objeto direto passa a sujeito (“A janela do vizinho”)."
    },
    {
      "question": "7.questão-  (LEGALLE - 2016 - Nível Superior) Na frase “Quando acariciado por mim foi espichar-se na varanda”, qual a função sintática do termo destacado?",
      "options": [
        "A - Sujeito.",
        "B - Agente da passiva.",
        "C - Objeto direto.",
        "D - Objeto indireto.",
        "E - Complemento nominal."
      ],
      "correct": 1,
      "explanation": "A oração “Quando acariciado por mim” está na voz passiva. O termo “por mim” tem função sintática de agente da passiva, já que é o termo que pratica a ação expressa pelo verbo. Ao realizarmos a transposição para a voz ativa, temos: “Quando eu o acariciei…”."
    },
    {
      "question": "8..questão-  (Quadrix - 2016 - Nível Médio) Em “Um estudo que foi assinado por Eduardo Bodnariuc Fontes, ligado ao Departamento de Neurologia da Unicamp, avançou nessa área do conhecimento”, o termo grifado é classificado sintaticamente como:",
      "options": [
        "A - sujeito simples.",
        "B - sujeito desinencial.",
        "C - agente da passiva.",
        "D - adjunto adnominal.",
        "E - complemento nominal."
      ],
      "correct": 2,
      "explanation": "A expressão “por Eduardo Bodnariuc Fontes” classifica-se sintaticamente como agente da passiva por ser o termo que pratica a ação verbal na voz passiva. Se a oração estivesse na voz ativa, esse termo passaria a ser o sujeito. Observe: “Eduardo Bodnariuc Fontes assinou um estudo”."
    },
    {
      "question": "9..questão-  (CONSULPAM - 2022 - Nível Fundamental) “Doença celíaca é uma doença autoimune causada pela intolerância ao glúten.” O trecho sublinhado acima constitui:",
      "options": [
        "A - O complemento agente da voz passiva.",
        "B - O complemento paciente da voz passiva.",
        "C - O complemento objeto direto da voz passiva.",
        "D - O complemento nominal da voz passiva."
      ],
      "correct": 0,
      "explanation": "Em “Doença celíaca é uma doença autoimune causada pela intolerância ao glúten”, temos voz passiva, já que o sujeito da oração (“doença celíaca”) é paciente, ou seja, recebe a ação expressa pelo verbo. O termo que pratica a ação na voz passiva é chamado de agente da passiva. No trecho em questão, o agente da passiva é “pela intolerância ao glúten”, uma vez que a intolerância ao glúten causa a doença celíaca. Veja: Doença celíaca é causada pela intolerância ao glúten. (voz passiva analítica) Intolerância ao glúten causa doença celíaca. (voz ativa)"
    },

    {
      "question": "1.questão- (COSEAC - 2019 - Nível Superior) No trecho “Só o cachorro já velhíssimo (era jovem quando o jovem partiu) continuou a esperá-lo na sua esquina”, as duas ocorrências do termo “jovem” exercem, respectivamente, as funções sintáticas de",
      "options": [
        "A - predicativo e sujeito.",
        "B - sujeito e objeto direto.",
        "C - objeto direto e predicativo.",
        "D - sujeito e adjunto adnominal.",
        "E - adjunto adnominal e objeto direto."
      ],
      "correct": 0,
      "explanation": "A primeira ocorrência da palavra “jovem” é classificada sintaticamente como predicativo do sujeito, pois caracteriza o sujeito por meio de um verbo de ligação (“o cachorro era jovem”). A segunda ocorrência do termo jovem é classificada sintaticamente como sujeito, sendo o termo sobre o qual se faz uma afirmação (“o jovem partiu”)."
    },
    {
      "question": "2.questão- (MS CONCURSOS - 2019 - Nível Médio) Em “Estudiosos britânicos já consideram o sedentarismo uma epidemia”, os termos grifados são:",
      "options": [
        "A - Sujeito – objeto direto – predicativo do objeto.",
        "B - Sujeito – objeto direto – objeto indireto.",
        "C - Sujeito – objeto direto – predicativo do sujeito.",
        "D - Objeto direto – sujeito – objeto indireto."
      ],
      "correct": 0,
      "explanation": "“Estudiosos britânicos” - sujeito (termo sobre o qual se afirma algo) “o sedentarismo” - objeto direto (completa o sentido do verbo transitivo direto) “uma epidemia” - predicativo do objeto (atribui uma característica ao objeto)."
    },
    {
      "question": "3.questão- (MS CONCURSOS - 2019 - Nível Médio) Em “Ainda ficam intrigados com os mistérios do cérebro os neurologistas modernos”, o termo grifado é:",
      "options": [
        "A - Predicativo do objeto.",
        "B - Objeto direto.",
        "C - Predicativo do sujeito.",
        "D - Objeto indireto."
      ],
      "correct": 2,
      "explanation": "O termo destacado classifica-se sintaticamente como predicativo do sujeito, uma vez que atribui ao sujeito uma característica. Fica mais fácil a identificação dos termos quando colocamos a oração na ordem direta: “Os neurologistas modernos ainda ficam intrigados com os mistérios do cérebro”."
    },
    {
      "question": "4.questão- (Itame - 2019 - Nível Médio) Na oração: Os colegas consideram Pedro inteligente. O termo “inteligente” é um:",
      "options": [
        "A - Predicativo do sujeito.",
        "B - Predicativo do objeto.",
        "C - Complemento nominal.",
        "D - Adjunto adnominal do objeto."
      ],
      "correct": 1,
      "explanation": "O termo “inteligente” é um predicativo do objeto por atribuir ao objeto direto (“Pedro”) uma característica."
    },
    {
      "question": "5.questão- (FUNDATEC - 2019 - Nível Médio) Analise a estrutura da fala do pai: “Rede social (1) aqui (2) em casa (3) é (4) outra coisa(5)”. Assinale a alternativa que indica o termo que se classifica como predicativo do sujeito nesta oração:",
      "options": [
        "A - 1.",
        "B - 2.",
        "C - 3.",
        "D - 4.",
        "E - 5."
      ],
      "correct": 4,
      "explanation": "O termo “outra coisa” é classificado sintaticamente como predicativo do sujeito, pois é uma característica que se liga ao sujeito (“rede social”) por meio de um verbo de ligação (“é”)."
    },
    {
      "question": "6.questão- (FUNDATEC - 2019 - Nível Superior) Analise o trecho a seguir retirado do texto: ‘“O uso (1) da tecnologia para aliviar os congestionamentos (2) e buscar fontes de energia renováveis é benéfico (3), mas precisamos tomar cuidado com ideias corporativas de monetizar tudo (4) na cidade (5) e introduzir regimes de vigilância”. Considerando os termos sublinhados e numerados, assinale a alternativa que apresenta o número correspondente ao termo que pode ser classificado sintaticamente como predicativo do sujeito.",
      "options": [
        "A - 1.",
        "B - 2.",
        "C - 3.",
        "D - 4.",
        "E - 5."
      ],
      "correct": 2,
      "explanation": "O termo “benéfico” é um predicativo do sujeito, pois caracteriza o sujeito (“o uso da tecnologia”). Observe: “O uso da tecnologia é benéfico”."
    },
    {
      "question": "7.questão- (Colégio Pedro II - 2017 - Nível Médio) Analise as alternativas a seguir e assinale aquela em que o adjetivo sublinhado exerce a função sintática de predicativo do sujeito.",
      "options": [
        "A - “Algumas vezes, reagira à escassa delicadeza de alguns balconistas [...]”.",
        "B - “Com os seus 33 anos, estava em plena forma física.”.",
        "C - “Radiante, a balconista empunhava-a como um troféu.”.",
        "D - “Contemplou o lindo embrulho de motivações natalinas[...]”."
      ],
      "correct": 2,
      "explanation": "O termo “radiante” é um predicativo do sujeito, por atribuir ao sujeito uma característica. Observe: “A balconista empunhava-a como um troféu” / “A balconista estava radiante”."
    },
    {
      "question": "8.questão- (LEGALLE - 2017 - Nível Médio) Em “Dentro de um abraço nenhuma situação é incerta.” O termo em destaque exerce função sintática de:",
      "options": [
        "A - Objeto direto.",
        "B - Objeto indireto.",
        "C - Adjunto adnominal.",
        "D - Predicativo do sujeito.",
        "E - Predicativo do objeto."
      ],
      "correct": 3,
      "explanation": "A palavra “incerta” é um predicativo do sujeito, pois caracteriza o sujeito (“nenhuma situação”)."
    },
    {
      "question": "9.questão-  Assinale a alternativa cujo termo destacado tenha função sintática de predicativo.",
      "options": [
        "A - Os pensamentos ruins não a deixavam em paz.",
        "B - A menina precisava do apoio da mãe.",
        "C - As frutas estão na geladeira.",
        "D - Chegaram adiantados os convidados.",
        "E - Os candidatos atrasados não farão a prova."
      ],
      "correct": 3,
      "explanation": "O termo “adiantados” tem função de predicativo do sujeito, uma vez que atribui ao sujeito (“os convidados”) uma característica. Nesse caso, o verbo é significativo (de ação), mas pode-se afirmar que há um verbo de ligação implícito. Note: “Os convidados chegaram (e estavam) adiantados” Não confunda: o termo destacado na alternativa E é classificado sintaticamente como adjunto adnominal. Observe que “atrasados” acompanha o núcleo do sujeito (candidatos) e faz parte do sujeito. Já o predicativo nunca estará dentro do sujeito."
    },
    {
      "question": "10.questão- (Big Advice - 2017 - Nível Superior) “Os professores saíram da reunião arrasados.” Sintaticamente, temos:",
      "options": [
        "A - Sujeito simples, predicado verbal, adjunto adverbial.",
        "B - Sujeito simples, predicado verbo-nominal, predicativo do sujeito.",
        "C - Sujeito composto, predicado verbal, predicativo do sujeito.",
        "D - Sujeito composto, predicado nominal, predicativo do sujeito.",
        "E - Sujeito composto, predicado verbal, objeto indireto."
      ],
      "correct": 1,
      "explanation": "O sujeito é simples (“Os professores”); o predicado é verbo-nominal por possuir dois núcleos: um verbo de ação (“saíram”) e um predicativo do sujeito (“arrasados”)."
    },
    {
      "question": "1.questão- (CETAP - 2015 - Nível Superior - adaptada) “O jornal de domingo trouxe uma matéria (...)”. Na frase, a locução “de domingo”, por admitir sua substituição pelo adjetivo dominical, funciona como:",
      "options": [
        "A - adjunto adnominal.",
        "B - adjunto adverbial.",
        "C - predicativo.",
        "D - vocativo.",
        "E - aposto."
      ],
      "correct": 0,
      "explanation": "A expressão “de domingo” é um adjunto adnominal por acompanhar o substantivo concreto “jornal” e por admitir sua substituição pelo adjetivo “dominical”."
    },
    {
      "question": "2.  questão-  Leia a seguinte frase e, em seguida, assinale a alternativa incorreta: “Compramos duas grandes panelas de aço.”",
      "options": [
        "A - Os termos “duas”, “grandes” e “de aço” são adjuntos adnominais e estão acompanhando a palavra “panelas”.",
        "B - A palavra “panelas” é núcleo do objeto direto.",
        "C - A expressão “de aço” é complemento nominal, já que se liga a um nome por meio de preposição.",
        "D - Na frase, há três adjuntos adnominais representados por numeral, adjetivo e locução adjetiva, respectivamente."
      ],
      "correct": 2,
      "explanation": "A alternativa C está incorreta. A expressão “de aço” é adjunto adnominal, não complemento nominal, já que acompanha o substantivo concreto “panelas”. Complemento nominal nunca se relaciona a um substantivo concreto."
    },
    {
      "question": "3.questão- (Português com Letícia) Leia as seguintes frases e, em seguida, marque a alternativa incorreta.<br/>I. Os alunos indisciplinados ficaram na sala.<br/>II. Os alunos ficaram na sala indisciplinados.",
      "options": [
        "A - Na oração I, o termo “indisciplinados” é responsável por atribuir uma característica ao núcleo do sujeito “alunos”.",
        "B - Na oração II, o termo “indisciplinados” atribui ao sujeito “os alunos” uma característica momentânea.",
        "C - O termo “indisciplinados” é classificado sintaticamente como adjunto adnominal e predicativo do sujeito nas orações I e II, respectivamente.",
        "D - A troca de ordem das palavras que ocorreu entre as duas frases altera o sentido dos enunciados, mas não muda a classificação sintática da palavra “indisciplinados”.",
        "E - O predicado da oração II é classificado como verbo-nominal por possuir dois núcleos: um verbo de ação e um predicativo."
      ],
      "correct": 3,
      "explanation": "a) CORRETA | Na oração I, o termo “indisciplinados” é um adjetivo que, de fato, atribui uma característica a “alunos”, que é o núcleo do sujeito <br/>b) CORRETA | Na oração II, o termo “indisciplinados”, de fato, atribui uma característica momentânea a “os alunos”, que é o sujeito da oração. No contexto apresentado, o verbo “ficar” foi empregado como verbo de ação, ou seja, trata-se de um verbo transitivo direto. Como já vimos, quando isso ocorre, estamos diante de um predicado verbo-nominal. <br/>c) CORRETA | De fato, o termo “indisciplinados” exerce função sintática de adjunto adnominal na primeira oração (característica inerente) e de predicativo do sujeito na segunda oração (característica momentânea). <br/>d) INCORRETA | A alteração do lugar ocupado pela palavra “indisciplinados” altera o sentido da frase e também sua classificação sintática. Na frase I, “indisciplinados” é adjunto adnominal (traz uma característica inerente e fica dentro da função sintática do termo a que se relaciona). Já na frase II, o termo “indisciplinados” é predicativo do sujeito (traz uma característica momentânea e fica de fora da função sintática do termo a que se relaciona). <br/>e) CORRETA | A oração II, de fato, possui um predicado verbo-nominal. No contexto apresentado, o verbo “ficar” foi empregado como verbo de ação, ou seja, trata-se de um verbo transitivo direto. Já o termo “indisciplinados” é o predicativo."
    },
    {
      "question": "4. questão-(Quadrix - 2018 - Nível Superior) “Nos dias de hoje, essa resistência à prática de atividade física pode ser atribuída ao estilo de vida marcado pela turbulência do day a dia nos grandes centros urbanos.” A expressão “à prática de atividade física” atua como adjunto adnominal de “resistência”, já que se trata de termo preposicionado que completa o sentido de um nome.<br/>( ) CERTO <br/>(   ) ERRADO",
      "options": [
        "A - CERTO",
        "B - ERRADO"
      ],
      "correct": 1,
      "explanation": "ERRADO O termo “à prática de atividade física” é preposicionado e está relacionado a um nome (nesse caso, um substantivo abstrato). Ocorre que, partindo dessas características, o termo pode ser tanto adjunto adnominal quanto complemento nominal. O que vai diferenciar as duas classificações nesse contexto é se o termo possui natureza agente (que pratica a ação) ou paciente (que recebe a ação). Nesse caso, a expressão “à prática de atividade física” é paciente, pois sofre a resistência. Portanto, trata-se de um complemento nominal."
    },
    {
      "question": "5.questão- (IADES - 2019 - Nível Médio) Assinale a alternativa cujo termo sublinhado representa adjunto adnominal da respectiva oração.",
      "options": [
        "A - “A responsabilidade é inseparável do comprometimento”",
        "B - “dificilmente será comprometida com os respectivos afazeres”",
        "C - “são requisitados pelas empresas”",
        "D - “Ser comprometido no trabalho é muito mais que cumprir”",
        "E - “atitudes favoráveis para o crescimento da empresa”"
      ],
      "correct": 4,
      "explanation": "a) INCORRETA | O termo sublinhado é classificado como complemento nominal. <br/>b) INCORRETA | O termo sublinhado é classificado como complemento nominal. <br/>c) INCORRETA | O termo sublinhado é classificado como agente da passiva. <br/>d) INCORRETA | O termo sublinhado é classificado como adjunto adverbial. <br/>e) CORRETA | O termo “da empresa” é um adjunto adnominal por acompanhar o substantivo abstrato “crescimento” e ter caráter ativo (a empresa cresce)."
    },
    {
      "question": "6.questão- (COPEVE-UFAL - 2016 - Nível Superior) Nas orações “A nota da imprensa esclareceu pontos obscuros do edital” e “A invenção da imprensa é creditada a Johannes Gutenberg”, os trechos destacados constituem, respectivamente,",
      "options": [
        "A - objeto direto e agente da passiva.",
        "B - complemento nominal e objeto direto.",
        "C - adjunto adnominal e adjunto adverbial.",
        "D - adjunto adnominal e complemento nominal.",
        "E - complemento nominal e predicativo do sujeito."
      ],
      "correct": 3,
      "explanation": "Nesse tipo de contexto, em que precisamos diferenciar adjunto adnominal e complemento nominal, a dica é observar se o termo é agente (pratica a ação) ou paciente (recebe a ação). Em “A nota da imprensa”, a imprensa pratica a ação de fazer uma nota; o termo “da imprensa” é, portanto, adjunto adnominal. Já em “A invenção da imprensa”, o termo “da imprensa” recebe a ação de ter sido inventada; é, dessa forma, complemento nominal."
    },
    {
      "question": "7.questão- (Português com Letícia) Leia o seguinte verso do poema de Drummond: “Teus ombros suportam o mundo.” Nele, cada palavra é classificada respectivamente como:",
      "options": [
        "A - Núcleo do sujeito - adjunto adnominal - verbo transitivo direto - núcleo do objeto direto - adjunto adnominal.",
        "B - Adjunto adnominal - adjunto adnominal - verbo transitivo direto - adjunto adnominal - núcleo do objeto direto.",
        "C - Adjunto adnominal - núcleo do sujeito - verbo intransitivo - adjunto adnominal - adjunto adverbial.",
        "D - Adjunto adnominal - núcleo do sujeito - verbo transitivo direto - adjunto adnominal - núcleo do objeto direto.",
        "E - Adjunto adnominal - núcleo do sujeito - verbo transitivo indireto - complemento nominal - núcleo do objeto indireto."
      ],
      "correct": 3,
      "explanation": "O sujeito “Teus ombros” é formado por adjunto adnominal (“Teus”) e núcleo do sujeito (“ombros”). Há, em seguida, o verbo transitivo direto (“suportam”), que exige um complemento. O objeto direto “o mundo” é formado por adjunto adnominal (“o”) e núcleo do objeto direto (“mundo”)."
    },
    {
      "question": "8.questão- (UFRRJ - 2015 - Nível Médio) “Assim, formam-se experts em articulações do joelho esquerdo que não sabem quem foi Hipócrates.” A palavra sublinhada assume, respectivamente, classe gramatical e função sintática de",
      "options": [
        "A - adjetivo e predicativo do sujeito.",
        "B - substantivo e núcleo do sujeito.",
        "C - adjetivo e adjunto adnominal.",
        "D - advérbio e adjunto adverbial.",
        "E - substantivo e predicativo do objeto."
      ],
      "correct": 2,
      "explanation": "A palavra “esquerdo”, na frase em questão, é classificada morfologicamente (classe gramatical) como adjetivo e, sintaticamente, como adjunto adnominal, delimitando o sentido do substantivo concreto “joelho”."
    },
    {
      "question": "9.questão- (IBFC - 2023 - Nível Superior) Na oração “O espírito humano não cria elementos do nada”:<br/>I. Há um sujeito composto: “espírito humano”.<br/>II. Não há uma ação, verbo: “não cria”.<br/>III. O sujeito da oração é simples: “humano”.<br/>IV. O objeto da oração é direto: “elementos”.<br/>V. Há um núcleo e um adjunto adnominal: “espírito humano”.<br/>Assinale a alternativa correta.",
      "options": [
        "A - Apenas as afirmativas I, II e III estão corretas.",
        "B - Apenas as afirmativas II, IV e V estão corretas.",
        "C - Apenas as afirmativas IV e V estão corretas.",
        "D - Apenas as afirmativas II e IV estão corretas.",
        "E - Apenas as afirmativas I e V estão corretas."
      ],
      "correct": 2,
      "explanation": "Na oração “O espírito humano não cria elementos do nada”, “espírito humano” é o sujeito simples da oração, pois há apenas um núcleo (espírito + adjunto adnominal“humano”). O verbo “cria” é transitivo direto e, portanto, seu complemento também é direto (“elementos”)."
    },
    {
      "question": "10.questão- (IBFC - 2023 - Nível Superior) Em “Milhares de turistas brasileiros e estrangeiros visitam o Pantanal”, os vocábulos destacados exercem, sintaticamente, a função de:",
      "options": [
        "A - núcleo do sujeito composto.",
        "B - adjunto adnominal.",
        "C - complemento nominal.",
        "D - adjunto adverbial."
      ],
      "correct": 1,
      "explanation": "a) INCORRETA | O sujeito é formado pela expressão “Milhares de turistas brasileiros e estrangeiros” e tem como núcleo a palavra “turistas”, que é o termo mais importante do sujeito. Como o sujeito possui apenas um núcleo, trata-se de sujeito simples. Os termos “brasileiros” e “estrangeiros” são adjuntos adnominais, que estão acompanhando o termo “turistas”, núcleo do sujeito. <br/>b) CORRETA | Os adjuntos adnominais especificam o significado de um substantivo. Os termos “brasileiros” e “estrangeiros” são adjuntos adnominais que estão acompanhando e especificando o termo “turistas” (núcleo do sujeito). Vale mencionar que, neste caso, os adjuntos adnominais integram o sujeito, ou seja, estão dentro do sujeito. <br/>c) INCORRETA | O complemento nominal completa o sentido de um substantivo abstrato, de um adjetivo ou de um advérbio. Em “turistas brasileiros e estrangeiros”, os termos “brasileiros e estrangeiros” acompanham a palavra “turistas”, que é um substantivo concreto. Além disso, o complemento nominal vem precedido de preposição, e os termos destacados não estão preposicionados. <br/>d) INCORRETA | Os adjuntos adverbiais expressam circunstâncias do processo verbal e, geralmente, acompanham verbos (mas também podem acompanhar adjetivos ou advérbios). Os termos destacados estão acompanhando o substantivo “turistas."
    }
  ]

};

// Elementos do DOM
const subjectSelect = document.getElementById('subject-select');
const quizContent = document.getElementById('quiz-content');
const questionContainer = document.getElementById('question-container');
const answerBtn = document.getElementById('answer-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const correctCountSpan = document.getElementById('correct-count');
const wrongCountSpan = document.getElementById('wrong-count');
const nQuestoes = document.getElementById('nquestoes');


// Estado do quiz
let currentQuestions = [];
let userAnswers = [];
let answeredQuestions = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

// Função para embaralhar array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para obter todas as questões
function getAllQuestions() {
    return Object.values(questions).flat();
}

// Função para carregar questões
function loadQuestions(subject) {
    if (subject) {
        currentQuestions = shuffleArray([...questions[subject]]);
    } else {
        currentQuestions = shuffleArray([...getAllQuestions()]);
    }
    userAnswers = new Array(currentQuestions.length).fill(null);
    answeredQuestions = new Array(currentQuestions.length).fill(false);
    currentQuestionIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    updateScoreCounter();
    questionContainer.innerHTML = '';
    submitBtn.style.display = 'none';
    prevBtn.style.display = currentQuestions.length > 0 ? 'block' : 'none';
    nextBtn.style.display = currentQuestions.length > 0 ? 'block' : 'none';
    answerBtn.style.display = currentQuestions.length > 0 ? 'block' : 'none';

    if (currentQuestions.length === 0) {
        questionContainer.innerHTML = '<p>Nenhuma questão disponível.</p>';
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        answerBtn.style.display = 'none';
        return;
    }

    showQuestion(currentQuestionIndex);

    updateNavigation();
    nQuestoes.innerHTML = `Número de Questoes: ${currentQuestions.length}`;
}

// Função para exibir uma questão
function showQuestion(index) {
    questionContainer.innerHTML = '';
    const q = currentQuestions[index];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<h4>${index + 1}. ${q.question}</h4>`;

    q.options.forEach((option, optIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.classList.add('option');
        const isChecked = userAnswers[index] === option;
        optionDiv.innerHTML = `
            <input type="radio" name="q${index}" id="q${index}o${optIndex}" value="${option}" ${isChecked ? 'checked' : ''} ${answeredQuestions[index] ? 'disabled' : ''}>
            <label for="q${index}o${optIndex}">
		${option} 
	    </label>
	<br/><br/>

	 ${answeredQuestions[index] && optIndex === q.correct ? q.explanation : ''} 	
	 
        `;
        if (answeredQuestions[index] && optIndex === q.correct) {
            optionDiv.classList.add('correct');
        }
        optionDiv.querySelector('input').addEventListener('change', () => {
            userAnswers[index] = option;
        });
        questionDiv.appendChild(optionDiv);
    });

    questionContainer.appendChild(questionDiv);
    answerBtn.disabled = answeredQuestions[index];
}

// Função para atualizar botões de navegação
function updateNavigation() {
    prevBtn.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.innerText = 'Finalizar';
    } else {
        nextBtn.innerText = 'Próxima';
    }
}

// Função para atualizar contador de pontuação
function updateScoreCounter() {
    correctCountSpan.textContent = correctCount;
    wrongCountSpan.textContent = wrongCount;
}

// Função para verificar resposta
function checkAnswer(index) {
    if (answeredQuestions[index]) return; // Evita verificar novamente
    if (userAnswers[index] === null) {
        resultDiv.innerHTML = 'Por favor, selecione uma resposta!';
        return;
    }

    answeredQuestions[index] = true;
    const q = currentQuestions[index];
    const correctOption = q.options[q.correct]; // Obtém a opção correta pelo índice
    if (userAnswers[index] === correctOption) {
        correctCount++;
    } else {
        wrongCount++;
    }
    updateScoreCounter();
    showQuestion(index); // Reexibe a questão com a resposta correta destacada
    answerBtn.disabled = true;
}

// Função para verificar todas as respostas no final
function checkAnswers() {
    let score = 0;
    const allAnswered = userAnswers.every(answer => answer !== null);

    if (!allAnswered) {
        resultDiv.innerHTML = 'Por favor, responda todas as questões!';
        return;
    }

    currentQuestions.forEach((q, index) => {
        const correctOption = q.options[q.correct]; // Obtém a opção correta pelo índice
        if (userAnswers[index] === correctOption) {
            score++;
        }
    });

    resultDiv.innerHTML = `Você acertou ${score} de ${currentQuestions.length} questões!`;
    questionContainer.innerHTML = '';
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    answerBtn.style.display = 'none';
    submitBtn.style.display = 'none';
}

// Evento para mudança de assunto
subjectSelect.addEventListener('change', (e) => {
    resultDiv.innerHTML = '';
    loadQuestions(e.target.value);
});

// Evento para botão Anterior
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateNavigation();
    }
});

// Evento para botão Próxima/Finalizar
nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateNavigation();
    } else {
        checkAnswers();
    }
});

// Evento para botão Responder
answerBtn.addEventListener('click', () => {
    checkAnswer(currentQuestionIndex);
});

// Evento para envio das respostas (opcional)
submitBtn.addEventListener('click', checkAnswers);

// Carregar todas as questões ao iniciar
loadQuestions('');