const disciplines = {
  portugues: {
    label: 'Português', icon: '✎', color: 'violet',
    topics: {
  
     "colocacao_pronominal": {
       title:"Colocação Pronominal", questions:[
            {
      "question": "1 - Assinale a alternativa em que o termo entre parênteses substitui corretamente a expressão.",
      "options": [
        "A - cruzaram os mares (cruzaram-los)",
        "B - largasse as ruas (largasse-as)",
        "C - levar um saveiro (leva-o)",
        "D - ajudava as viúvas (ajudava-nas)",
        "E - fumava um cachimbo (fumava-no)"
      ],
      "correct": 1,
      "explanation": "I. A - Incorreta. O verbo 'cruzar' termina em -r. Na substituição pelo pronome, o -r é eliminado e o pronome assume a forma -los: 'cruzaram-nos' é a forma adequada para 'cruzaram os mares', pois o verbo está no pretérito perfeito e a forma resultante é 'cruzaram-nos'.<br/>II. B - Correta. O verbo 'largasse' termina em vogal, portanto o pronome 'as' é ligado diretamente ao verbo por hífen: 'largasse-as'.<br/>III. C - Incorreta. O infinitivo 'levar' perde o -r antes do pronome, que assume a forma -lo. O correto é 'levá-lo'.<br/>IV. D - Incorreta. A forma 'ajudava-nas' não é a substituição adequada, pois o verbo termina em vogal e o pronome deve ser ligado diretamente: 'ajudava-as'.<br/>V. E - Incorreta. Como 'fumava' termina em vogal, a forma adequada é 'fumava-o', e não 'fumava-no'."
    },
    {
      "question": "2 - Atente para as frases abaixo. <br/>I. Todos queremos defender nossa liberdade, tornar-lhe imune a qualquer restrição, proclamar-lhe aos quatro ventos. <br/> II. Sim, o egoísmo é uma inclinação natural, mas acatar-lhe é curvar-se a um instinto primitivo; cumpre, a todo custo, restringi-lo a violência.<br/> III. As palavras daquela frase ressoaram fortemente em nossa consciência arrogante, abalaram-na, retiraram-lhe o falso triunfalismo. Está plenamente adequado o emprego de pronomes em:",
      "options": [
        "A - I, II e III.",
        "B - I e II, apenas.",
        "C - II e III, apenas.",
        "D - I e III, apenas.",
        "E - III, apenas."
      ],
      "correct": 4,
      "explanation": "• Frase I (Incorreta): O termo retoma 'nossa liberdade' (objeto direto, sem preposição). O correto seria usar o pronome oblíquo átono a (torná-la imune, proclamá-la) e não o pronome lhe. <br />• Frase II (Incorreta): O verbo 'acatar' é transitivo direto (acatar o egoísmo), exigindo o pronome o (acatá-lo), e não lhe. Além disso, há erro na crase de 'restringi-lo à violência'. <br />• Frase III (Correta): O pronome na em 'abalaram-na' retoma corretamente 'nossa consciência arrogante' (com a terminação verbal em -am, o pronome a vira -na). Já o lhe em 'retiraram-lhe' exerce valor possessivo, equivalente a 'retiraram dela o falso triunfalismo'."
    },
    {
      "question": "3 - Assinale a frase em que há correção no emprego do pronome 'lhe' / 'lhes'.",
      "options": [
        "A - A pessoas com disposição alegre, tudo de bom lhes acontece.",
        "B - A polícia demorou mais de um dia para prender-lhes.",
        "C - Viram-lhes chegar antes dos demais convidados.",
        "D - Informaram-lhes do ocorrido logo que chegaram.",
        "E - Nomearam-lhes chefes das portarias do prédio."
      ],
      "correct": 0,
      "explanation": "I. A - Correta. O pronome 'lhes' retoma 'a pessoas com disposição alegre' e funciona como complemento indireto, indicando a quem acontecem coisas boas. A construção é aceita na norma-padrão.<br/>II. B - Incorreta. O verbo 'prender' é transitivo direto e exige os pronomes 'os' ou 'as', conforme o referente. O correto seria 'prendê-los' ou 'prendê-las'.<br/>III. C - Incorreta. Na construção 'viram-lhes chegar', o verbo 'ver' exige um complemento direto. O correto seria 'viram-nos chegar' ou 'viram-nas chegar', conforme o referente.<br/>IV. D - Incorreta. Na norma-padrão tradicional, 'informar' pode ser construído como 'informar alguém de algo'. Assim, a forma mais adequada é 'Informaram-nos do ocorrido', usando o pronome de objeto direto para a pessoa informada.<br/>V. E - Incorreta. O verbo 'nomear', nesse contexto, é transitivo direto e predicativo do objeto. O correto seria 'Nomearam-nos chefes das portarias do prédio', caso o referente seja masculino plural."
    },
    {
      "question": "(BB) Colocação incorreta:",
      "options": [
        "A - Preciso que venhas ver-me.",
        "B - O certo é fazê-los sair.",
        "C - Sempre negaram-me tudo.",
        "D - As espécies se atraem."
      ],
      "correct": 2,
      "explanation": "A - Correta. O verbo no infinitivo admite a ênclise do pronome: ver-me.<br/>B - Correta. O infinitivo permite a ênclise: fazê-los.<br/>C - Incorreta. O advérbio 'sempre', em posição anterior ao verbo, favorece a próclise. A forma adequada é 'Sempre me negaram tudo'.<br/>D - Correta. A próclise é admitida e usual nessa construção: 'As espécies se atraem'."
    },
    {
      "question": "(EPCAR) Imagine o pronome entre parênteses no lugar devido e aponte onde não deve haver próclise:",
      "options": [
        "A - Não entristeças. (te)",
        "B - Deus favoreça. (o)",
        "C - Espero que faças justiça. (se)",
        "D - Meus amigos, apresentem em posição de sentido. (se)",
        "E - Ninguém faça de rogado. (se)"
      ],
      "correct": 3,
      "explanation": "A - A forma correta é 'Não te entristeças'. A palavra negativa 'não' exige próclise.<br/>B - A forma correta é 'Deus o favoreça'. O pronome pode aparecer antes do verbo, embora não haja fator obrigatório de próclise.<br/>C - A forma correta é 'Espero que se faça justiça'. A conjunção subordinativa 'que' atrai o pronome, exigindo próclise.<br/>D - A forma correta é 'Meus amigos, apresentem-se em posição de sentido'. No início de uma oração imperativa afirmativa, sem palavra atrativa, emprega-se a ênclise, e não a próclise.<br/>E - A forma adequada é 'Ninguém se faça de rogado'. O pronome indefinido 'ninguém' atrai o pronome oblíquo, exigindo próclise."
    },
    {
      "question": "(TTN) Assinale a frase em que a colocação do pronome pessoal oblíquo não obedece às normas do português padrão:",
      "options": [
        "A - Essas vitórias pouco importam; alcançaram-nas os que tinham mais dinheiro.",
        "B - Entregaram-me a encomenda ontem, resta agora a vocês oferecerem-na ao chefe.",
        "C - Ele me evitava constantemente!... Ter-lhe-iam falado a meu respeito?",
        "D - Estamos nos sentido desolados: temos prevenido-o várias vezes e ele não nos escuta.",
        "E - O Presidente cumprimentou o Vice dizendo: - Fostes incumbido de difícil missão, mas cumpriste-la com denodo e eficiência."
      ],
      "correct": 3,
      "explanation": "A - Correta. A ênclise em 'alcançaram-nas' é adequada, pois o verbo inicia a oração após o ponto e vírgula, sem palavra atrativa.<br/>B - Correta. A ênclise em 'entregaram-me' e em 'oferecerem-na' está de acordo com a norma-padrão.<br/>C - Correta. A próclise em 'me evitava' é admitida no português brasileiro, e a mesóclise em 'ter-lhe-iam' é adequada ao futuro do pretérito quando não há fator de próclise.<br/>D - Incorreta. A construção 'temos prevenido-o' desrespeita a colocação pronominal, pois o particípio não admite pronome átono posposto. A forma adequada é 'temos-no prevenido' ou, de maneira mais natural, 'temos prevenido ele' no uso coloquial brasileiro, embora a forma recomendada pela norma-padrão seja 'temo-lo prevenido'.<br/>E - Correta quanto à colocação pronominal pretendida pelo exercício: 'cumpriste-la' apresenta o pronome em ênclise. Observação: a forma verbal e a combinação pronominal podem suscitar discussão normativa; a alternativa D é a resposta tradicionalmente indicada."
    },
        {
      "question": "(FTU) A frase em que a colocação do pronome átono está em desacordo com as normas vigentes no português padrão do Brasil é:",
      "options": [
        "A - A ferrovia integrar-se-á nos demais sistemas viários.",
        "B - A ferrovia deveria-se integrar nos demais sistemas viários.",
        "C - A ferrovia não tem se integrado nos demais sistemas viários.",
        "D - A ferrovia estaria integrando-se nos demais sistemas viários.",
        "E - A ferrovia não consegue integrar-se nos demais sistemas viários."
      ],
      "correct": 1,
      "explanation": "A - Correta. A mesóclise em 'integrar-se-á' é adequada ao futuro do presente quando não há palavra atrativa.<br/>B - Incorreta. Na locução verbal 'deveria integrar', a colocação do pronome entre o verbo auxiliar e o infinitivo, sem hífen, não segue a forma prescrita pela norma tradicional. A forma recomendada é 'A ferrovia deveria integrar-se nos demais sistemas viários'.<br/>C - Correta. A palavra negativa 'não' favorece a próclise. Na locução verbal com particípio, a colocação pode variar conforme a construção; a forma mais recomendada é 'A ferrovia não se tem integrado nos demais sistemas viários'.<br/>D - Correta. A ênclise ao gerúndio em 'integrando-se' é aceita na locução verbal.<br/>E - Correta. O infinitivo admite a ênclise em 'integrar-se', e a construção 'consegue integrar-se' está de acordo com a norma-padrão."
    },
    {
      "question": "(FFCL-SANTO ANDRÉ) Assinale a alternativa correta:",
      "options": [
        "A - A solução agradou-lhe.",
        "B - Eles diriam-se injuriados.",
        "C - Ninguém conhece-me bem.",
        "D - Darei-te o que quiseres.",
        "E - Quem contou-te isso?"
      ],
      "correct": 0,
      "explanation": "A - Correta. A ênclise em 'agradou-lhe' é adequada, pois o verbo inicia a oração e não há palavra atrativa.<br/>B - Incorreta. O futuro do pretérito favorece a mesóclise na ausência de palavra atrativa. A forma tradicional é 'Eles dir-se-iam injuriados'.<br/>C - Incorreta. O pronome indefinido 'ninguém' exige próclise. O correto é 'Ninguém me conhece bem'.<br/>D - Incorreta. O futuro do presente, sem palavra atrativa, recomenda a mesóclise na norma tradicional. A forma é 'Dar-te-ei o que quiseres'.<br/>E - Incorreta. O pronome interrogativo 'quem' atrai o pronome oblíquo. O correto é 'Quem te contou isso?'."
    },
    {
      "question": "(CESGRANRIO) Indique a estrutura verbal que contraria a norma culta:",
      "options": [
        "A - Ter-me-ão elogiado.",
        "B - Tinha-se lembrado.",
        "C - Teria-me lembrado.",
        "D - Temo-nos esquecido.",
        "E - Tenho-me alegrado."
      ],
      "correct": 2,
      "explanation": "A - Correta. A mesóclise em 'ter-me-ão' é adequada ao futuro do presente, na ausência de palavra atrativa.<br/>B - Correta. A colocação do pronome após o verbo auxiliar em 'tinha-se lembrado' é admitida pela norma tradicional.<br/>C - Incorreta. Na locução verbal no futuro do pretérito, sem palavra atrativa, a norma tradicional recomenda a mesóclise: 'Ter-me-ia lembrado'. Também se admite, em construções com locução verbal, a colocação do pronome junto ao infinitivo: 'Teria me lembrado'. A forma 'Teria-me lembrado' é a que o exercício considera inadequada.<br/>D - Correta. A ênclise ao verbo auxiliar em 'temo-nos esquecido' é aceita na norma-padrão.<br/>E - Correta. A colocação do pronome após o auxiliar em 'tenho-me alegrado' é adequada à norma tradicional."
    },
  ]
  },


      sintaxe_curso:{    
 title:"Sintaxe curso", questions:[
    {
    "question": "1. (BIG ADVICE – 2017 – Nível Superior)<br/>“Havia dinheiro nos baús.” Temos:",
    "options": [
      "A - Sujeito simples.",
      "B - Sujeito composto.",
      "C - Sujeito Oculto.",
      "D - Sujeito indeterminado.",
      "E - Oração sem sujeito."
    ],
    "correct": 4,
    "explanation": "GABARITO 1 E<br/>O verbo “haver”, com sentido de “existir”, é impessoal (não apresenta sujeito)."
  },
  {
    "question": "2. (BIG ADVICE – 2017 – Nível Superior)<br/>“Vive-se bem no interior”. Temos:",
    "options": [
      "A - Sujeito simples.",
      "B - Sujeito composto.",
      "C - Sujeito Oculto.",
      "D - Sujeito indeterminado.",
      "E - Oração sem sujeito."
    ],
    "correct": 3,
    "explanation": "GABARITO 2 D<br/>Verbo (intransitivo) na terceira pessoa do singular + “se” é uma estrutura de sujeito indeterminado: alguém vive, mas não se sabe ou não se quer determinar quem vive."
  },
  {
    "question": "3. (DIRECTA - 2019 - Nível Superior)<br/>“Os meninos ganharam o jogo e são os atuais campeões da rua”, o sujeito é:",
    "options": [
      "A - Composto.",
      "B - Simples.",
      "C - Inexistente.",
      "D - Oculto.",
      "E - Indeterminado."
    ],
    "correct": 1,
    "explanation": "GABARITO 3 B<br/>Para encontrar o sujeito, basta perguntar para o verbo: quem ganhou o jogo? Os meninos.<br/>Como o sujeito (os meninos) está explícito na oração e possui apenas um núcleo (meninos), é denominado sujeito simples."
  },
  {
    "question": "4. (BIG ADVICE – 2017 – Nível Superior)<br/>Em: “Interromperam o trânsito naquela região”, temos:",
    "options": [
      "A - Sujeito Simples.",
      "B - Sujeito composto.",
      "C - Sujeito desinencial.",
      "D - Sujeito indeterminado.",
      "E - Oração sem sujeito."
    ],
    "correct": 3,
    "explanation": "GABARITO 4 D<br/>Verbo na terceira pessoa do plural (desde que o contexto não evidencie quem é o sujeito) é uma estrutura de sujeito indeterminado: alguém interrompeu o trânsito, mas não se sabe ou não se quer determinar quem o interrompeu."
  },
  {
    "question": "5. (Crescer Consultoria em Gestão de Pessoas – 2019 – Nível Médio)<br/>Há sujeito indeterminado na frase da alternativa:",
    "options": [
      "A - Havia vários livros na estante.",
      "B - Estava o professor sozinho na sala de aula.",
      "C - Perto da ponte desceram do ônibus alguns moradores.",
      "D - Precisa-se de um ajudante de cozinha com experiência."
    ],
    "correct": 3,
    "explanation": "GABARITO 5 D<br/>a) INCORRETA | Sujeito inexistente (verbo “haver” no sentido de “existir” é impessoal e sem sujeito).<br/>b) INCORRETA | Sujeito simples (o professor).<br/>c) INCORRETA | Sujeito simples (alguns moradores).<br/>d) CORRETA | Verbo (transitivo indireto) na terceira pessoa do singular + “se” + preposição é uma estrutura de sujeito indeterminado: alguém precisa de um ajudante de cozinha, mas não sabemos quem."
  },
  {
    "question": "6. (CEBRASPE - 2019 - Nível Superior)<br/>“Imaginemos que Alice compre um automóvel com um crédito bancário, mas deixe de pagar suas prestações. Uma manhã, introduz sua chave digital no veículo, e a porta não 19 abre. Foi bloqueada por falta de cumprimento do contrato. Minutos depois, chega o funcionário do banco com outra chave digital. Abre a porta, liga o motor e parte com o veículo.”<br/>No trecho “Abre a porta, liga o motor e parte com o veículo”, o termo “o veículo” é sujeito das formas verbais “Abre”, “liga” e “parte”.<br/>( ) CERTO ( ) ERRADO",
    "options": [
      "A - CERTO",
      "B - ERRADO"
    ],
    "correct": 1,
    "explanation": "GABARITO 6 ERRADO<br/>Veja o trecho em que as formas verbais estão inseridas:<br/>“[...] Minutos depois, chega o funcionário do banco com outra chave digital. Abre a porta, liga o motor e parte com o veículo.”<br/>Perguntamos aos verbos: quem abre a porta? Quem liga o motor? Quem parte com o veículo?<br/>Voltando ao contexto, a resposta é “o funcionário do banco”. Então, o sujeito dessas formas verbais é o mesmo e pode ser entendido a partir da leitura do trecho anterior, ou seja, trata-se de um sujeito oculto, que também pode ser chamado de elíptico ou desinencial, e pode ser identificado a partir da análise do contexto."
  },
  {
    "question": "7. (COMPERVE - 2019 - Nível Superior)<br/>“As mulheres têm, sim, exercido sua voz, mas mergulham, por vezes, em um conformismo de cultura social que não deverá[1] mais ser aceito e precisa[2] urgentemente ser resolvido com políticas públicas adequadas e conscientização .”<br/>As formas verbais [1] e [2]",
    "options": [
      "A - apresentam o mesmo sujeito: “cultura social”.",
      "B - apresentam o mesmo sujeito: “que”.",
      "C - apresentam sujeitos distintos: “que” e “cultura social”, respectivamente.",
      "D - apresentam sujeitos distintos: “cultura social” e “que”, respectivamente."
    ],
    "correct": 1,
    "explanation": "GABARITO 7 B<br/>O pronome relativo \"que” é o sujeito das formas verbais \"deverá\" e \"precisa\", porque retoma o termo \"um conformismo de cultura social\".<br/>Verifiquemos o segmento em questão:<br/>\"As mulheres têm, sim, exercido sua voz, mas mergulham, por vezes, em um conformismo de cultura social que não deverá [1] mais ser aceito e precisa[2] urgentemente ser resolvido com políticas públicas adequadas e conscientização.\"<br/>Uma forma de se certificar que o \"que\" é pronome relativo é trocar por outro pronome relativo de igual valor, como \"o qual\":<br/>\"... um conformismo de cultura social que não deverá mais ser aceito e precisa...\"<br/>\"... um conformismo de cultura social o qual não deverá mais ser aceito e precisa...\"<br/>Façamos a pergunta ao verbo: quem não deverá mais ser aceito e precisa urgentemente ser resolvido com políticas públicas adequadas e conscientização? Conformismo de cultura social.<br/>Então, é o pronome relativo \"que\" quem exerce a função de sujeito das formas verbais \"deverá\" e \"precisa\", porque retoma o segmento \"um conformismo de cultura social\": um conformismo de cultura social não deverá ser mais aceito e precisa urgentemente [...]."
  },
  {
    "question": "8. (FUNDATEC - 2019 - Nível Médio)<br/>O sujeito da primeira oração do período a seguir, “Não há relatos de que ela tenha chutado uma bola na juventude dos seus 21 anos” pode ser classificado como:",
    "options": [
      "A - Simples.",
      "B - Composto.",
      "C - Oculto.",
      "D - Inexistente.",
      "E - Desinencial."
    ],
    "correct": 3,
    "explanation": "GABARITO 8 D<br/>Para resolver esta questão, é necessário compreender que se trata de um período composto por duas orações:<br/>1ª \"Não há relatos\";<br/>2ª \"de que ela tenha chutado uma bola na juventude dos seus 21 anos\".<br/>O verbo da primeira oração (\"há\" - verbo \"haver\", com sentido de \"existir\") é impessoal, ou seja, não tem sujeito. Dessa forma, o sujeito da primeira oração é classificado como inexistente (ou oração sem sujeito). Já o sujeito da segunda oração é simples (\"ela\")."
  },
  {
    "question": "9. (AOPC - 2016 - Nível Médio)<br/>Assinale a alternativa correta.",
    "options": [
      "A - Em \"[...] gestores indicaram marcadores de estresse em várias outras atividades.\", há um sujeito simples.",
      "B - Em \"O primeiro grupo não teve tempo de espera\", o sujeito é inexistente.",
      "C - Em \"Você anda estressado?\", não há um sujeito.",
      "D - Em \"O nível de estresse registrado foi de 13 pontos\", há um sujeito oculto.",
      "E - Em \"A cada dia, estamos mais conectados à internet [...]\", o sujeito é indeterminado."
    ],
    "correct": 0,
    "explanation": "GABARITO 9 A<br/>a) CORRETA | O termo \"gestores\" é o sujeito da oração. Trata-se de sujeito simples por estar explícito na oração e apresentar um único núcleo.<br/>b) INCORRETA | O sujeito é simples, não inexistente (\"O primeiro grupo\").<br/>c) INCORRETA | O sujeito é simples (\"Você\").<br/>d) INCORRETA | O sujeito é simples, não oculto (\"O nível de estresse registrado\")<br/>e) INCORRETA | O sujeito é oculto, não indeterminado (\"nós\")."
  },
  {
    "question": "10. (Dédalus - 2019 - Nível Médio)<br/>Na frase \"Normalmente falam pelas costas por ser mais conveniente\", pode-se afirmar que o sujeito do verbo existente é:",
    "options": [
      "A - Elíptico.",
      "B - Indeterminado.",
      "C - Inexistente.",
      "D - Simples.",
      "E - Oracional."
    ],
    "correct": 1,
    "explanation": "GABARITO 10 B<br/>Verbo na terceira pessoa do plural (desde que o contexto não evidencie quem é o sujeito) é uma estrutura de sujeito indeterminado: não se quer determinar quem pratica a ação de falar pelas costas."
  },
  {
    "question": "1. (Crescer Consultoria em Gestão de Pessoas – 2019 – Nível Médio)<br/>Leia as seguintes frases:<br/>I. A enchente deixou a população apavorada.<br/>II. A leitura de um bom livro amplia nosso conhecimento.<br/>III. O trânsito permanece caótico nas grandes cidades.<br/>IV. Os turistas voltaram satisfeitos com a viagem para o Chile.<br/>Assinale a alternativa em que, na sequência, a classificação do predicado está correta:",
    "options": [
      "A - verbal, verbo-nominal, verbal, nominal.",
      "B - verbo-nominal, verbal, nominal, verbo-nominal.",
      "C - verbal, verbo-nominal, nominal, verbal.",
      "D - nominal, verbal, verbo-nominal, verbal."
    ],
    "correct": 1,
    "explanation": "GABARITO 1 B<br/>I. O predicado é verbo-nominal porque possui dois núcleos: um verbo de ação (“deixou”) e um predicativo (“apavorada”).<br/>II. O predicado é verbal porque possui como núcleo um verbo de ação (“amplia”).<br/>III. O predicado é nominal porque o verbo contido nele é de ligação (“permanece”), e possui como núcleo um predicativo (“caótico”).<br/>IV. O predicado é verbo-nominal porque possui dois núcleos: um verbo de ação (“voltaram”) e um predicativo (“satisfeitos”)."
  },
  {
    "question": "2. (IBADE - 2018- Nível Médio)<br/>Observe os predicados das orações abaixo e marque a opção que apresenta, correta e respectivamente, a classificação de cada um.<br/>I. “ela escreve capítulos surpreendentes da sua biografia.”<br/>II. “Uma vez, eu estava na National Portrait Gallery\"<br/>III. “hoje ela reside na bancada do banheiro, intocada”",
    "options": [
      "A - Verbal, nominal, verbo-nominal",
      "B - Verbo-nominal, nominal, verbo-nominal",
      "C - Verbal, verbal, verbal",
      "D - Verbal, verbal, verbo-nominal",
      "E - Verbal, nominal, verbal"
    ],
    "correct": 3,
    "explanation": "GABARITO 2 D<br/>I. O predicado é verbal porque possui como núcleo um verbo de ação (“escreve”). A palavra “surpreendentes” é adjunto adnominal e faz parte do objeto direto.<br/>II. O predicado é verbal porque, nesse contexto, o verbo “estar” é de ação.<br/>III. O predicado é verbo-nominal porque possui dois núcleos: um verbo de ação (“reside”) e um predicativo (“intocada”)."
  },
  {
    "question": "3. (COSEAC - 2018 - Nível Médio)<br/>Os predicados sublinhados em: “<u>Ele foi juiz de direito em Maricá</u> e <u>depois foi para o Rio.</u>” são:",
    "options": [
      "A - ambos nominais, com caráter descritivo.",
      "B - respectivamente, verbal, com caráter descritivo, e nominal, com caráter narrativo.",
      "C - ambos verbais, com caráter narrativo.",
      "D - respectivamente, nominal, com caráter descritivo, e verbal, com caráter narrativo.",
      "E - ambos verbais, com caráter descritivo."
    ],
    "correct": 3,
    "explanation": "GABARITO 3 D<br/>Na oração “Ele foi juiz de direito em Maricá”, temos um verbo de ligação (“foi” é a terceira pessoa do singular no pretérito perfeito do verbo “ser”) e um predicativo do sujeito (“juiz de direito”), responsável por caracterizar, descrever o sujeito. O predicado é, portanto, classificado como nominal.<br/>Já na oração “depois foi para o Rio”, temos um verbo de ação (“foi” é a terceira pessoa do singular no pretérito perfeito do verbo “ir”). Por isso, o predicado é verbal e narra um fato.<br/>Perceba como a forma verbal “foi” coincide como flexão dos verbos “ser” e “ir”. É preciso sempre analisar o contexto!"
  },
  {
    "question": "4. (FUNDATEC - 2019 - Nível Superior)<br/>Assinale a alternativa na qual há a ocorrência de predicado nominal:",
    "options": [
      "A - “deve investir em técnicas”.",
      "B - “Uma pessoa bem-humorada passa segurança”.",
      "C - “Não existe um manual com regras”.",
      "D - “trata-se muito mais de ter habilidade de analisar o contexto”.",
      "E - “O humor é muito mais que humor entretenimento”."
    ],
    "correct": 4,
    "explanation": "GABARITO 4 E<br/>a) INCORRETA | Apresenta verbo de ação e têm, portanto, predicado verbal (“deve investir em técnicas”).<br/>b) INCORRETA | Apresenta verbo de ação e têm, portanto, predicado verbal (“Uma pessoa bem-humorada passa segurança”).<br/>c) INCORRETA | Apresenta verbo de ação e têm, portanto, predicado verbal (“Não existe um manual com regras”).<br/>d) INCORRETA | Apresenta verbo de ação e têm, portanto, predicado verbal (“trata-se muito mais de ter habilidade de analisar o contexto”).<br/>e) CORRETA | A alternativa E traz a oração cujo predicado é nominal, pois possui como núcleo um predicativo (“muito mais que humor e entretenimento”), responsável por caracterizar o sujeito (“O humor”) por meio de um verbo de ligação (“é”)."
  },
  {
    "question": "5. (CETAP - 2016 - Nível Superior)<br/>Assinale a alternativa em que o sujeito está posposto ao predicado.",
    "options": [
      "A - Ele não terá que decidir.",
      "B - Está configurada uma situação crítica.",
      "C - A lealdade a um princípio o livra.",
      "D - As pesquisas com célula-tronco contribuem.",
      "E - A eutanásia pode ser o único caminho."
    ],
    "correct": 1,
    "explanation": "GABARITO 5 B<br/>A ordem padrão na organização de uma sentença na língua portuguesa é sujeito + verbo + complemento (+ adjuntos). A questão pede a alternativa que foge dessa estrutura.<br/>a) INCORRETA | “Ele não terá que decidir”. O sujeito “ele” aparece antes do predicado “não terá que decidir”.<br/>b) CORRETA | “Está configurada uma situação crítica.” O sujeito “uma situação crítica” foi apresentado após o predicado “Está configurada”. Na ordem natural, a oração ficaria da seguinte maneira: “Uma situação crítica está configurada” (sujeito + predicado).<br/>c) INCORRETA | “A lealdade a um princípio o livra”. O sujeito “A lealdade” aparece antes do predicado “a um princípio o livra”.<br/>d) INCORRETA | “As pesquisas com célula-tronco contribuem”. O sujeito “As pesquisas com célula-tronco” aparece antes do predicado “contribuem”.<br/>e) INCORRETA | “A eutanásia pode ser o único caminho”. O sujeito “A eutanásia” aparece antes do predicado “pode ser o único caminho”."
  },
  {
    "question": "6. (FUNDATEC - 2019 - Nível Superior)<br/>Marque a opção cuja oração tem predicado verbo-nominal.",
    "options": [
      "A - Elisabete é linda!",
      "B - A casa de Jussara sofreu reforma geral.",
      "C - As crianças chegaram cansadas.",
      "D - Os chuchus parecem murchos.",
      "E - A borboleta morreu."
    ],
    "correct": 2,
    "explanation": "GABARITO 6 C<br/>a) INCORRETA | Predicado nominal. “Elisabete é linda!”. “É” funciona como verbo de ligação, enquanto “linda” é predicativo do sujeito.<br/>b) INCORRETA | Predicado verbal. “A casa de Jussara sofreu reforma geral.” O (verbo “sofrer” é transitivo direto.<br/>c) CORRETA | Predicado verbo-nominal. A oração da alternativa C traz uma oração cujo predicado é verbo-nominal porque possui dois núcleos: um verbo de ação (“chegaram”) e um predicativo (“cansadas”).<br/>d) INCORRETA | Predicado nominal. “Os chuchus parecem murchos.” = nesse caso, “murchos” é predicativo do sujeito = a estrutura é: verbo de ligação + predicativo do sujeito;<br/>e) INCORRETA | Predicado verbal. “A borboleta morreu.”. O verbo “morrer” é intransitivo."
  },
  {
    "question": "7. (Colégio Pedro II - 2017 - Nível Médio)<br/>Sobre a classificação do predicado da oração “No Facebook, a mãe Brandi se mostrou orgulhosa da atitude da filha.”, trata-se de predicado",
    "options": [
      "A - verbal, cujo núcleo é mostrou.",
      "B - nominal, cujo núcleo é orgulhosa.",
      "C - verbo-nominal, cujos núcleos são “mostrou” e “atitude”.",
      "D - verbo-nominal, cujos núcleos são “mostrou” e “orgulhosa”."
    ],
    "correct": 1,
    "explanation": "GABARITO 7 B<br/>O predicado da oração em questão é nominal porque possui como núcleo o predicativo “orgulhosa”, que caracteriza o sujeito por meio de um verbo de ligação (“se mostrou”)."
  },
  {
    "question": "8. (Crescer Consultorias - 2019 - Nível Médio)<br/>Ocorre predicado verbal em",
    "options": [
      "A - “o Brasil é um dos piores países”.",
      "B - “Alguns avanços já foram conquistados nas últimas décadas”.",
      "C - “a nossa taxa é de aproximadamente 10 pontos percentuais a menos”.",
      "D - “o número de mulheres na política é baixo no Brasil.”"
    ],
    "correct": 1,
    "explanation": "GABARITO 8 B<br/>a) INCORRETA | Predicado nominal, já que a oração segue a estrutura: sujeito + verbo de ligação + predicativo do sujeito: “o Brasil é um dos piores países”.<br/>b) CORRETA | A oração da alternativa B possui predicado verbal porque a locução verbal (“foram conquistados”) expressa ação. Cuidado para não confundir essa locução verbal (ser + particípio) presente em orações que estão na voz passiva (e que expressa ação) com verbo de ligação + predicativo do sujeito.<br/>c) INCORRETA | Predicado nominal, já que a oração segue a estrutura: sujeito + verbo de ligação + predicativo do sujeito: “a nossa taxa é de aproximadamente 10 pontos percentuais a menos”.<br/>d) INCORRETA | Predicado nominal, já que a oração segue a estrutura: sujeito + verbo de ligação + predicativo do sujeito: “o número de mulheres na política é baixo no Brasil.”"
  },
  {
    "question": "9. (Unesc - 2023 - Nível Superior)<br/>“O surto do vírus de Marburg, na Guiné Equatorial, já provocou a morte de nove pessoas.”<br/>O predicado da frase é composto pela expressão:",
    "options": [
      "A - provocou a morte de nove pessoas",
      "B - já provocou a morte de nove pessoas",
      "C - na Guiné Equatorial, já provocou a morte de nove pessoas",
      "D - já provocou a morte",
      "E - na Guiné Equatorial, provocou a morte de nove pessoas"
    ],
    "correct": 2,
    "explanation": "GABARITO 9 C<br/>“O surto do vírus de Marburg, na Guiné Equatorial, já provocou a morte de nove pessoas”.<br/>O trecho “O surto do vírus de Marburg” é o sujeito da oração e o restante é o predicado.<br/>A dica para resolver esse tipo de questão é simples: tudo aquilo que não é sujeito é predicado.<br/>A banca até tentou fazer uma “pegadinha” na alternativa E (com a retirada apenas da palavra “já”), mas todo o trecho, exceto o sujeito, é predicado."
  },
  {
    "question": "10. (Unesc - 2023 - Nível Superior)<br/>“O vírus de Marburg causa febre hemorrágica e é transmitido por morcegos.”<br/>Em relação à oração destacada, afirma-se que possui:",
    "options": [
      "A - Predicação verbal.",
      "B - Predicação nominal.",
      "C - Predicação verbo-nominal.",
      "D - Toda a oração como predicado.",
      "E - A expressão 'causa' como predicado."
    ],
    "correct": 0,
    "explanation": "GABARITO 10 A<br/>Em “O vírus de Marburg causa febre hemorrágica e é transmitido por morcegos”, o trecho destacado possui predicação verbal, uma vez que o predicado verbal é constituído por um verbo de ação. Nesse sentido, o verbo “causar” é transitivo direto."
  },
  {
    "question": "1. (BIG ADVICE – 2017 – Nível Superior)<br/>Em: “Fizemos <u>um excelente trabalho</u>”, a expressão em destaque, sintaticamente é:",
    "options": [
      "A - Sujeito simples.",
      "B - Predicativo do Sujeito.",
      "C - Objeto direto.",
      "D - Objeto indireto.",
      "E - Complemento Nominal."
    ],
    "correct": 2,
    "explanation": "GABARITO 1 C<br/>O verbo “fazer” é, nesse contexto, transitivo direto. O termo “um excelente trabalho” completa o sentido do verbo e é, portanto, objeto direto."
  },
  {
    "question": "2. (VUNESP – 2019 – Nível Médio)<br/>Considere as frases elaboradas a partir das ideias do texto.<br/>• A empresa tem um ambicioso programa de robótica e decidiu reformular <u>esse ambicioso programa</u>.<br/>• Alguns robôs lidam com objetos não familiares, e os pesquisadores analisam como organizam <u>esses objetos</u>.<br/>De acordo com o emprego e a colocação dos pronomes estabelecidos pela norma-padrão, os trechos em destaque podem ser substituídos por:",
    "options": [
      "A - reformulá-lo; os organizam",
      "B - reformulá-lo; lhes organizam",
      "C - o reformular; organizam-lhes",
      "D - reformular-lhe; os organizam",
      "E - lhe reformular; organizam-nos"
    ],
    "correct": 0,
    "explanation": "GABARITO 2 A<br/>Os verbos “reformular” (1ª frase) e “organizam” (2ª frase) são transitivos diretos, tendo como complementos os termos “esse ambicioso programa” e “esses projetos”, respectivamente.<br/>Ao substituir esses objetos por pronomes oblíquos átonos, devemos empregar o pronome “o”. No caso da primeira frase, como o verbo “reformular” termina em “-r”, deve-se retirar essa letra e acrescentar “-l” ao pronome, o que resulta em “reformulá-lo”. Já na segunda frase, a palavra “como” atrai o pronome para antes do verbo, resultando em “os organizam”.<br/>Além disso, é importante lembrar que, em um texto, o pronome “lhe” pode apresentar função de objeto indireto, complemento nominal ou adjunto adnominal, a depender do contexto, ou seja, ele não faz papel de objeto direto. Por isso, as alternativas B, C, D e E estão incorretas, já que ambos os verbos (“reformular” e “organizar”) são verbos transitivos diretos (isto é, são verbos que exigem um complemento sem preposição, um objeto direto), então o “lhe” não serviria para completar nenhum dos dois verbos."
  },
  {
    "question": "3. (VUNESP – 2019 – Nível Médio)<br/>Considere as seguintes passagens:<br/>• O ser humano revelou-se capaz de dividir <u>o átomo</u>…<br/>• … descobriram em duas ilhas gregas <u>um micróbio marinho</u>…<br/>• … as salamandras aprendem a gerir <u>o mundo</u> melhor do que nós.<br/>As expressões em destaque estão corretamente substituídas por pronomes em:",
    "options": [
      "A - … dividi-lo… / … descobriram-no em duas ilhas… / … aprendem a geri-lo…",
      "B - … dividi-lo… / … descobriram-lhe em duas ilhas… / … aprendem a geri-lo…",
      "C - … dividi-lo… / … descobriram-no em duas ilhas… / … aprendem a gerir-lhe…",
      "D - … dividir-lhe… / … descobriram-lhe em duas ilhas… / … aprendem a geri-lo…",
      "E - … dividi-lhe… / … descobriram-no em duas ilhas… / … aprendem a geri-lhe…"
    ],
    "correct": 0,
    "explanation": "GABARITO 3 A<br/>Os verbos “dividir”, “descobrir” e “gerir”, das frases 1, 2 e 3, respectivamente, são transitivos diretos. Possuem como complementos, portanto, termos que são classificados sintaticamente como objetos diretos. Para esse tipo de questão, vale uma dica: descarte as alternativas que tenham o pronome oblíquo “lhe”, uma vez que exerce apenas função de objeto indireto.<br/>De acordo com as regras do emprego dos pronomes oblíquos, quando o verbo termina em “-r”, como é o caso de “dividir” e “gerir”, retira-se essa letra e acrescenta-se “-l” ao pronome. O resultado é “dividi-lo” e “geri-lo”. Já no caso da segunda frase, o acréscimo da letra “-n” ao pronome deve-se ao fato de que o verbo termina em som nasal."
  },
  {
    "question": "4. (UFRJ - 2017 - Nível Médio)<br/>No trecho “A ideia é que a contemplação desses lugares <u>permite</u> uma resposta intuitiva à questão (...)”, o verbo em destaque, quanto à sua regência, é:",
    "options": [
      "A - transitivo direto.",
      "B - intransitivo.",
      "C - transitivo indireto.",
      "D - intransitivo direto.",
      "E - transitivo direto e indireto."
    ],
    "correct": 4,
    "explanation": "GABARITO 4 E<br/>No contexto apresentado, o verbo “permitir” é transitivo direto e indireto por possuir dois complementos, um sem preposição (“uma resposta intuitiva” - objeto direto) e outro com preposição (“à questão” - objeto indireto)."
  },
  {
    "question": "5. (IBFC - 2019 - Nível Médio)<br/>Analise o enunciado: “Todo esforço tem a sua recompensa”. Assinale a alternativa que preencha correta e respectivamente as lacunas abaixo.<br/>A expressão “todo esforço” funciona como _____ da oração; o termo “tem” é um _____ que é complementado com um _____ representado pela expressão “a sua recompensa”.",
    "options": [
      "A - predicado / verbo intransitivo / complemento nominal.",
      "B - substantivo / verbo de ligação / complemento verbal.",
      "C - predicativo / verbo transitivo indireto / objeto indireto.",
      "D - sujeito / verbo transitivo direto / objeto direto."
    ],
    "correct": 3,
    "explanation": "GABARITO 5 D<br/>A expressão “Todo esforço” funciona como sujeito da oração, porque é o termo sobre o qual se afirma algo. O verbo “ter”, nesse contexto, é transitivo direto e seu complemento (“a sua recompensa”) é objeto direto."
  },
  {
    "question": "6. (FUNDATEC - 2019 - Nível Superior)<br/>Em “Ela (1) lhes (2) dirá bem devagarinho (3), para que (4) não esqueçam (5)”, assinale a alternativa que apresenta o número correspondente ao termo que exerce a função de objeto indireto na oração.",
    "options": [
      "A - 1.",
      "B - 2.",
      "C - 3.",
      "D - 4.",
      "E - 5."
    ],
    "correct": 1,
    "explanation": "GABARITO 6 B<br/>O verbo “dizer” é transitivo direto e indireto (exige dois complementos). Quem diz, diz algo (objeto direto) a alguém (objeto indireto). O pronome oblíquo “lhes” exerce, nesse contexto, função de objeto indireto, uma vez que representa a quem o sujeito dirá."
  },
  {
    "question": "7. (Instituto Excelência - 2019 - Nível Superior)<br/>Assinale a alternativa CORRETA para os termos integrantes da oração.<br/>I - Marília vendia roupas<br/>II - Juliana gosta de livros.<br/>III - Gosto de flores.<br/>IV - Paulo mora perto de um grande supermercado.",
    "options": [
      "A - I - Objeto direto, II - objeto indireto, III - objeto indireto, IV - complemento nominal.",
      "B - I - Objeto indireto, II - objeto indireto, III - objeto direto, IV - adjunto adnominal.",
      "C - I - Objeto indireto, II - objeto direto, III - objeto direto, IV - adjunto adverbial.",
      "D - Nenhuma das alternativas"
    ],
    "correct": 0,
    "explanation": "GABARITO 7 A<br/>Lembremos que são termos integrantes da oração: complementos verbais (objeto direto e objeto indireto), complemento nominal, agente da passiva e predicativos (do sujeito e do objeto). Agora observe a análise sintática de cada uma das orações:<br/>I. Marília (sujeito) - vendia (verbo transitivo direto) roupas (objeto direto);<br/>II. Juliana (sujeito) gosta (verbo transitivo indireto) de livros (objeto indireto);<br/>III. Gosto (verbo transitivo indireto) de flores (objeto indireto);<br/>IV. Paulo (sujeito) mora (verbo intransitivo) perto (adjunto adverbial de lugar) de um grande supermercado (complemento nominal)."
  },
  {
    "question": "8. (CCV/UFC - 2019 - Nível Superior)<br/>Assinale a alternativa em que o termo grifado funciona como objeto direto.",
    "options": [
      "A - “<u>que</u> foi transmitida naturally às novas gerações”.",
      "B - “Assim nasceu <u>a linguagem de sinais da Nicarágua</u>”.",
      "C - “onde já existe <u>uma linguagem de sinais reconhecida</u>”.",
      "D - “a língua é <u>uma verdadeira Babilônia</u>”.",
      "E - “há <u>alguma relação entre a linguagem de sinais e a língua falada?</u>”."
    ],
    "correct": 4,
    "explanation": "GABARITO 8 E<br/>a) INCORRETA | O pronome relativo em destaque funciona sintaticamente como sujeito da oração.<br/>b) INCORRETA | A expressão destacada tem função sintática de sujeito.<br/>c) INCORRETA | A expressão destacada exerce função de sujeito da oração.<br/>d) INCORRETA | O termo em destaque é predicativo do sujeito.<br/>e) CORRETA | O verbo “haver”, com sentido de existir, é impessoal, isto é, não possui sujeito. Em relação à sua transitividade, trata-se de um verbo transitivo direto. O termo destacado é, portanto, objeto direto."
  },
  {
    "question": "9. (UERR/IPERON - 2018 - Nível Superior)<br/>O termo destacado em: “elas acreditam <u>EM NOSSA MISSÃO.</u>” exerce função sintática de:",
    "options": [
      "A - complemento nominal.",
      "B - objeto direto.",
      "C - adjunto adnominal.",
      "D - predicativo do sujeito",
      "E - objeto indireto."
    ],
    "correct": 4,
    "explanation": "GABARITO 9 E<br/>O verbo “acreditar” é, nesse contexto, transitivo indireto, pois exige um complemento com preposição (“em nossa missão”), denominado sintaticamente como objeto indireto."
  },
  {
    "question": "10. (CPCON - 2019 - Nível Superior)<br/>Considere os destaques nos enunciados a seguir:<br/>I - Depois que a chuva passou, um sol forte iluminou a cidade.<br/>II - Nas eleições de 2018, o candidato X estava em primeiro lugar nas pesquisas eleitorais, mas o candidato Y, nas últimas pesquisas, passou o seu adversário e conquistou o primeiro lugar.<br/>III - Por mais de duas décadas, um agente secreto americano passou informações militares para os russos.<br/>IV - Com a reestruturação administrativa da empresa, o competente funcionário passou a diretor comercial.<br/>Considerando-se as questões relacionadas à regência verbal, julgue cada uma das afirmações acerca dos enunciados e, em seguida, marque V para Verdadeiro e F para Falso.<br/>( ) Em todas as orações, o verbo passar tem o mesmo significado.<br/>( ) Em I, passar significa “chegar ao fim” e é um verbo intransitivo.<br/>( ) Em II, passar significa “superar” e é um verbo transitivo direto.<br/>( ) Em III, passar significa “transmitir”, “transferir” e tem dois objetos: “segredos militares” (objeto direto) e “para os russos” (objeto indireto).<br/>( ) Em II e IV, passar tem significados diferentes, mas têm a mesma transitividade.<br/>( ) Em IV, passar significa “tornar-se, transformar-se em” e funciona como verbo de ligação, tendo como predicativo o termo “diretor comercial”.<br/>O preenchimento CORRETO dos parênteses está na alternativa:",
    "options": [
      "A - V, V, V, F, F e V.",
      "B - F, V, V, V, F e F.",
      "C - V, V, F, F, V e V.",
      "D - F, F, F, V, V e V.",
      "E - F, V, V, V, F e V."
    ],
    "correct": 4,
    "explanation": "GABARITO 10 E<br/>( f ) | O verbo \"passar não possui o mesmo significado em todas as orações. Na primeira frase, por exemplo, tem o sentido de \"cessar\", já na segunda, o sentido é de \"superar\".<br/>( v ) | Em I, passar significa \"chegar ao fim\" e é um verbo intransitivo.<br/>( v ) | Em II, passar significa \"superar\" e é um verbo transitivo direto.<br/>( v ) | Em III, passar significa \"transmitir\", \"transferir\" e tem dois objetos: \"segredos militares\" (objeto direto) e \"para os russos\" (objeto indireto).<br/>( f ) | Em II e IV, o verbo \"passar\" tem significados diferentes e também são diferentes em relação à transitividade. Em II o verbo comporta-se como transitivo direto e possui como complemento o termo \"o seu adversário\". Já em IV, o verbo \"passar\" significa \"transformar-se em\" e funciona como verbo de ligação.<br/>( v ) | Em IV, passar significa \"tornar-se, transformar-se em\" e funciona como verbo de ligação, tendo como predicativo o termo \"diretor comercial\"."
  },
  {
    "question": "1. (Instituto Excelência - 2019 - Nível Superior)<br/>Na frase: “Tenho uma vaga lembrança <u>dos três meninos correndo pelo pátio da escola.</u>” <br/>O trecho destacado refere- se ao:",
    "options": [
      "A - Objeto indireto.",
      "B - Adjunto adnominal.",
      "C - Complemento nominal.",
      "D - Nenhuma das alternativas."
    ],
    "correct": 2,
    "explanation": "GABARITO 1 C<br/>O termo “dos três meninos” completa o sentido do substantivo abstrato “lembrança”. É possível confirmar que se trata de um complemento nominal por ser de natureza passiva (os três meninos recebem a ação de serem lembrados)."
  },
  {
    "question": "2. (CETREDE - 2019 - Nível Médio)<br/>Marque a opção em que o termo destacado tem função de complemento nominal.",
    "options": [
      "A - Pedro e João viajaram.",
      "B - Não vi Maria.",
      "C - Fui traído por Maria.",
      "D - Ele parece ter ódio <u>de João</u>.",
      "E - Gosto muito de João."
    ],
    "correct": 3,
    "explanation": "GABARITO 2 D<br/>a) INCORRETA | O termo destacado possui a função de sujeito.<br/>b) INCORRETA | O termo destacado possui a função de objeto direto.<br/>c) INCORRETA | O termo destacado possui a função de agente da passiva.<br/>d) CORRETA | O termo “de João” completa o sentido do substantivo abstrato “ódio” por meio de uma preposição (de) e é paciente (João sofre a ação de ser odiado). Trata-se, portanto, de um complemento nominal.<br/>e) INCORRETA | O termo destacado possui a função de objeto indireto."
  },
  {
    "question": "3. (COMPERVE - 2019 - Nível Médio)<br/>“Muitas pessoas estão, voluntariamente, abandonando as redes sociais e procurando novas formas de agrupamento e de convivência. Isso inclui a retomada[1] <u>da leitura, do silêncio e da solidão</u>, atualmente abandonados pela necessidade[2] <u>de responder a estímulos digitais incessantes.</u>”<br/>Sobre os elementos linguísticos [1] e [2], é correto afirmar:",
    "options": [
      "A - [1] exige um complemento nominal e [2] exige um complemento verbal.",
      "B - [1] exige um complemento verbal.",
      "C - [1] exige um complemento nominal.",
      "D - [1] exige um complemento verbal e [2] exige um complemento nominal."
    ],
    "correct": 2,
    "explanation": "GABARITO 3 C<br/>Ambos os termos destacados exigem complemento nominal. A expressão “da leitura, do silêncio e da solidão” é complemento nominal do substantivo abstrato “retomada”. Já a oração “de responder a estímulos digitais incessantes” também tem função de completar o sentido de “necessidade”."
  },
  {
    "question": "4. <br/>Marque a alternativa em que o termo destacado tenha função sintática de complemento nominal.",
    "options": [
      "A - As crianças necessitam <u>de atenção</u> o tempo todo.",
      "B - A bagagem <u>do passageiro</u> foi extraviada.",
      "C - Estamos aguardando a devolução <u>da mercadoria</u>.",
      "D - A casa foi comprada <u>por um empresário</u>.",
      "E - A palestra <u>da professora</u> foi demorada."
    ],
    "correct": 2,
    "explanation": "GABARITO 4 C<br/>a) INCORRETA | O termo destacado possui a função de objeto indireto.<br/>b) INCORRETA | O termo destacado possui a função de adjunto adnominal.<br/>c) CORRETA | O termo destacado possui a função de complemento nominal.<br/>d) INCORRETA | O termo destacado possui a função de agente da passiva.<br/>e) INCORRETA | O termo destacado possui a função de adjunto adnominal."
  },
  {
    "question": "5. <br/>Analise as afirmações e coloque V para as verdadeiras e F para as falsas. Em seguida, marque a alternativa que apresenta a sequência correta.<br/>( ) O complemento nominal completa o sentido de um substantivo concreto ou abstrato.<br/>( ) O complemento nominal é um termo de natureza paciente.<br/>( ) O complemento nominal sempre vem antecedido por preposição.",
    "options": [
      "A - V - V – V",
      "B - V - V – F",
      "C - F - F – V",
      "D - F - V – V",
      "E - F - V – F"
    ],
    "correct": 3,
    "explanation": "GABARITO 5 D<br/>A primeira afirmação está errada porque o complemento nominal completa o sentido de substantivos abstratos, adjetivos e advérbios. As outras duas são verdadeiras."
  },
  {
    "question": "6. (COPEVE - 2018 - Nível Superior)<br/>O termo destacado no período “Os funcionários manifestaram interesse em discutir com o proprietário da fábrica sobre o aumento salarial, já que o diretor financeiro mostrou-se insensível <u>à situação.</u>” exerce a função de",
    "options": [
      "A - objeto direto.",
      "B - objeto indireto.",
      "C - objeto pleonástico.",
      "D - adjunto adnominal.",
      "E - complemento nominal."
    ],
    "correct": 4,
    "explanation": "GABARITO 6 E<br/>O termo “à situação” exerce função de complemento nominal por completar o sentido de um adjetivo, por meio de uma preposição (a)."
  },
  {
    "question": "7. (FGR - 2018 - Nível Médio)<br/>\"O Papa Francisco demonstra a todo tempo seu amor <u>aos mais pobres.</u>\" Analise a frase acima e marque a opção cujo trecho grifado exerce a mesma função sintática.",
    "options": [
      "A - Nos dias atuais os cristãos estão perto <u>da verdade.</u>",
      "B - A voz segura <u>do sacerdote</u> ecoou nas alturas.",
      "C - Os solados da Líbia foram recebidos <u>pelo padre.</u>",
      "D - A fé conduz toda e qualquer pessoa <u>à esperança.</u>"
    ],
    "correct": 0,
    "explanation": "GABARITO 7 A<br/>A expressão “aos mais pobres” é complemento nominal por estar relacionado ao substantivo abstrato “amor” e por ter caráter paciente. A única alternativa cujo termo destacado também é um complemento nominal é a A. O termo “da verdade” completa o sentido do advérbio perto."
  },
  {
    "question": "8. (UFMG - 2019 - Nível Médio)<br/>“O caminho para o combate à mudança climática também passa pela alteração de nossa base energética, fundamentada em uso de hidrocarbonetos como o petróleo.”<br/>Nesse fragmento, são classificados como complementos nominais os seguintes termos, EXCETO:",
    "options": [
      "A - “para o combate”.",
      "B - “pela alteração de nossa base energética”.",
      "C - “à mudança climática”.",
      "D - “em uso de hidrocarbonetos”."
    ],
    "correct": 1,
    "explanation": "GABARITO 8 B<br/>A única alternativa cujo termo apresentado não se classifica sintaticamente como complemento nominal é a B. A expressão “pela alteração de nossa base energética” é um adjunto adverbial."
  },
  {
    "question": "9. (UFMG - 2019 - Nível Superior)<br/>Nas alternativas a seguir, os termos e/ou orações destacados exercem a função sintática de complemento nominal, EXCETO em:",
    "options": [
      "A - Aqueles com renda familiar mais baixa têm menos suporte social, previdenciário e acesso limitado <u>à assistência médica.</u>",
      "B - [...] os mais pobres têm dificuldade de acesso <u>a serviços sociais, à assistência médica, à prevenção e ao tratamento de transtornos psiquiátricos e dependência química.</u>",
      "C - [...] habituados <u>a enfrentar desvantagens econômicas, discriminação, preconceito social e mortalidade geral mais elevada.</u>",
      "D - [...] à consciência <u>dos trabalhadores</u> de que perderam o padrão de vida que os pais um dia tiveram."
    ],
    "correct": 3,
    "explanation": "GABARITO 9 D<br/>O termo “dos trabalhadores” é um adjunto adnominal e está acompanhando o substantivo abstrato “consciência”. Trata-se de um adjunto adnominal por ser um termo agente (os trabalhadores têm consciência)."
  },
  {
    "question": "10. (LEGALLE CONCURSOS - 2016 - Nível Médio)<br/>Qual das alternativas apresenta complemento nominal?",
    "options": [
      "A - A criança resistiu ao machucado.",
      "B - Gosto de boas músicas.",
      "C - O rapaz desculpou-se pelo ocorrido.",
      "D - A lembrança da mãe fê-lo sofrer.",
      "E - Alguém deve me obedecer nesse lugar!"
    ],
    "correct": 3,
    "explanation": "GABARITO 10 D<br/>O termo “da mãe” é classificado sintaticamente como complemento nominal por estar relacionado a um substantivo abstrato (lembrança) e por ter natureza paciente (a mãe recebeu a ação de ter sido lembrada)."
  },
  {
    "question": "1. (CETAP - 2015 - Nível Superior - adaptada)<br/>“O jornal <u>de domingo</u> trouxe uma matéria (...)”. Na frase, a locução “de domingo”, por admitir sua substituição pelo adjetivo dominical, funciona como:",
    "options": [
      "A - adjunto adnominal.",
      "B - adjunto adverbial.",
      "C - predicativo.",
      "D - vocativo.",
      "E - aposto."
    ],
    "correct": 0,
    "explanation": "GABARITO 1 A<br/>A expressão “de domingo” é um adjunto adnominal por acompanhar o substantivo concreto “jornal” e por admitir sua substituição pelo adjetivo “dominical”."
  },
  {
    "question": "2. <br/>Leia a seguinte frase e, em seguida, assinale a alternativa incorreta: “Compramos duas grandes panelas de aço.”",
    "options": [
      "A - Os termos “duas”, “grandes” e “de aço” são adjuntos adnominais e estão acompanhando a palavra “panelas”.",
      "B - A palavra “panelas” é núcleo do objeto direto.",
      "C - A expressão “de aço” é complemento nominal, já que se liga a um nome por meio de preposição.",
      "D - Na frase, há três adjuntos adnominais representados por numeral, adjetivo e locução adjetiva, respectivamente."
    ],
    "correct": 2,
    "explanation": "GABARITO 2 C<br/>A alternativa C está incorreta. A expressão “de aço” é adjunto adnominal, não complemento nominal, já que acompanha o substantivo concreto “panelas”. Complemento nominal nunca se relaciona a um substantivo concreto."
  },
  {
    "question": "3. <br/>Leia as seguintes frases e, em seguida, marque a alternativa incorreta.<br/>I. Os alunos indisciplinados ficaram na sala.<br/>II. Os alunos ficaram na sala indisciplinados.",
    "options": [
      "A - Na oração I, o termo “indisciplinados” é responsável por atribuir uma característica ao núcleo do sujeito “alunos”.",
      "B - Na oração II, o termo “indisciplinados” atribui ao sujeito “os alunos” uma característica momentânea.",
      "C - O termo “indisciplinados” é classificado sintaticamente como adjunto adnominal e predicativo do sujeito nas orações I e II, respectivamente.",
      "D - A troca de ordem das palavras que ocorreu entre as duas frases altera o sentido dos enunciados, mas não muda a classificação sintática da palavra “indisciplinados”.",
      "E - O predicado da oração II é classificado como verbo-nominal por possuir dois núcleos: um verbo de ação e um predicativo."
    ],
    "correct": 3,
    "explanation": "GABARITO 3 D<br/>a) CORRETA | Na oração I, o termo \"indisciplinados\" é um adjetivo que, de fato, atribui uma característica a \"alunos\", que é o núcleo do sujeito<br/>b) CORRETA | Na oração II, o termo \"indisciplinados\", de fato, atribui uma característica momentânea a \"os alunos\", que é o sujeito da oração. No contexto apresentado, o verbo \"ficar\" foi empregado como verbo de ação, ou seja, trata-se de um verbo transitivo direto. Como já vimos, quando isso ocorre, estamos diante de um predicado verbo-nominal.<br/>c) CORRETA | De fato, o termo \"indisciplinados\" exerce função sintática de adjunto adnominal na primeira oração (característica inerente) e de predicativo do sujeito na segunda oração (característica momentânea).<br/>d) INCORRETA | A alteração do lugar ocupado pela palavra \"indisciplinados\" altera o sentido da frase e também sua classificação sintática. Na frase I, \"indisciplinados\" é adjunto adnominal (traz uma característica inerente e fica dentro da função sintática do termo a que se relaciona). Já na frase II, o termo \"indisciplinados\" é predicativo do sujeito (traz uma característica momentânea e fica de fora da função sintática do termo a que se relaciona).<br/>e) CORRETA | A oração II, de fato, possui um predicado verbo-nominal. No contexto apresentado, o verbo \"ficar\" foi empregado como verbo de ação, ou seja, trata-se de um verbo transitivo direto. Já o termo \"indisciplinados\" é o predicativo."
  },
  {
    "question": "4. (Quadrix - 2018 - Nível Superior)<br/>“Nos dias de hoje, essa resistência <u>à prática de atividade física</u> pode ser atribuída ao estilo de vida marcado pela turbulência do dia a dia nos grandes centros urbanos.”<br/>A expressão “à prática de atividade física” atua como adjunto adnominal de “resistência”, já que se trata de termo preposicionado que completa o sentido de um nome.<br/>( ) CERTO ( ) ERRADO",
    "options": [
      "A - CERTO",
      "B - ERRADO"
    ],
    "correct": 1,
    "explanation": "GABARITO 4 ERRADO<br/>O termo “à prática de atividade física” é preposicionado e está relacionado a um nome (nesse caso, um substantivo abstrato). Ocorre que, partindo dessas características, o termo pode ser tanto adjunto adnominal quanto complemento nominal. O que vai diferenciar as duas classificações nesse contexto é se o termo possui natureza agente (que pratica a ação) ou paciente (que recebe a ação). Nesse caso, a expressão “à prática de atividade física” é paciente, pois sofre a resistência. Portanto, trata-se de um complemento nominal."
  },
  {
    "question": "5. (IADES - 2019 - Nível Médio)<br/>Assinale a alternativa cujo termo sublinhado representa adjunto adnominal da respectiva oração.",
    "options": [
      "A - “A responsabilidade é inseparável <u>do comprometimento</u>”",
      "B - “dificilmente será comprometida <u>com os respectivos afazeres</u>”",
      "C - “são requisitados <u>pelas empresas</u>”",
      "D - “Ser comprometido <u>no trabalho</u> é muito mais que cumprir”",
      "E - “atitudes favoráveis para o crescimento <u>da empresa</u>”"
    ],
    "correct": 4,
    "explanation": "GABARITO 5 E<br/>a) INCORRETA | O termo sublinhado é classificado como complemento nominal.<br/>b) INCORRETA | O termo sublinhado é classificado como complemento nominal.<br/>c) INCORRETA | O termo sublinhado é classificado como agente da passiva.<br/>d) INCORRETA | O termo sublinhado é classificado como adjunto adverbial.<br/>e) CORRETA | O termo “da empresa” é um adjunto adnominal por acompanhar o substantivo abstrato “crescimento” e ter caráter ativo (a empresa cresce)."
  },
  {
    "question": "6. (COPEVE-UFAL - 2016 - Nível Superior)<br/>Nas orações “A nota <u>da imprensa</u> esclareceu pontos obscuros do edital” e “A invenção <u>da imprensa</u> é creditada a Johannes Gutenberg”, os trechos destacados constituem, respectivamente,",
    "options": [
      "A - objeto direto e agente da passiva.",
      "B - complemento nominal e objeto direto.",
      "C - adjunto adnominal e adjunto adverbial.",
      "D - adjunto adnominal e complemento nominal.",
      "E - complemento nominal e predicativo do sujeito."
    ],
    "correct": 3,
    "explanation": "GABARITO 6 D<br/>Nesse tipo de contexto, em que precisamos diferenciar adjunto adnominal e complemento nominal, a dica é observar se o termo é agente (pratica a ação) ou paciente (recebe a ação). Em \"A nota da imprensa\", a imprensa pratica a ação de fazer uma nota; o termo \"da imprensa\" é, portanto, adjunto adnominal. Já em \"A invenção da imprensa\", o termo \"da imprensa\" recebe a ação de ter sido inventada; é, dessa forma, complemento nominal."
  },
  {
    "question": "7. <br/>Leia o seguinte verso do poema de Drummond:<br/>“Teus ombros suportam o mundo.”<br/>Nele, cada palavra é classificada respectivamente como:",
    "options": [
      "A - Núcleo do sujeito - adjunto adnominal - verbo transitivo direto - núcleo do objeto direto - adjunto adnominal.",
      "B - Adjunto adnominal - adjunto adnominal - verbo transitivo direto - adjunto adnominal - núcleo do objeto direto.",
      "C - Adjunto adnominal - núcleo do sujeito - verbo intransitivo - adjunto adnominal - adjunto adverbial.",
      "D - Adjunto adnominal - núcleo do sujeito - verbo transitivo direto - adjunto adnominal - núcleo do objeto direto.",
      "E - Adjunto adnominal - núcleo do sujeito - verbo transitivo indireto - complemento nominal - núcleo do objeto indireto."
    ],
    "correct": 3,
    "explanation": "GABARITO 7 D<br/>O sujeito “Teus ombros” é formado por adjunto adnominal (“Teus”) e núcleo do sujeito (“ombros”). Há, em seguida, o verbo transitivo direto (“suportam”), que exige um complemento. O objeto direto “o mundo” é formado por adjunto adnominal (“o”) e núcleo do objeto direto (“mundo”)."
  },
  {
    "question": "8. (UFRRJ - 2015 - Nível Médio)<br/>“Assim, formam-se experts em articulações do joelho <u>esquerdo</u> que não sabem quem foi Hipócrates.”<br/>A palavra sublinhada assume, respectivamente, classe gramatical e função sintática de",
    "options": [
      "A - adjetivo e predicativo do sujeito.",
      "B - substantivo e núcleo do sujeito.",
      "C - adjetivo e adjunto adnominal.",
      "D - advérbio e adjunto adverbial.",
      "E - substantivo e predicativo do objeto."
    ],
    "correct": 2,
    "explanation": "GABARITO 8 C<br/>A palavra “esquerdo”, na frase em questão, é classificada morfologicamente (classe gramatical) como adjetivo e, sintaticamente, como adjunto adnominal, delimitando o sentido do substantivo concreto “joelho”."
  },
  {
    "question": "9. (IBFC- 2023 - Nível Superior)<br/>Na oração “O espírito humano não cria elementos do nada”: <br/>I. Há um sujeito composto: “espírito humano”. <br/>II. Não há uma ação, verbo: “não cria”. <br/>III. O sujeito da oração é simples: “humano”. <br/>IV. O objeto da oração é direto: “elementos”. <br/>V. Há um núcleo e um adjunto adnominal: “espírito humano”. <br/>Assinale a alternativa correta.",
    "options": [
      "A - Apenas as afirmativas I, II e III estão corretas.",
      "B - Apenas as afirmativas II, IV e V estão corretas.",
      "C - Apenas as afirmativas IV e V estão corretas.",
      "D - Apenas as afirmativas II e IV estão corretas.",
      "E - Apenas as afirmativas I e V estão corretas."
    ],
    "correct": 2,
    "explanation": "GABARITO 9 C<br/>Na oração \"O espírito humano não cria elementos do nada\", \"espírito humano\" é o sujeito simples da oração, pois há apenas um núcleo (espírito + adjunto adnominal \"humano\"). O verbo \"cria\" é transitivo direto e, portanto, seu complemento também é direto (\"elementos\")."
  },
  {
    "question": "10. (IBFC- 2023 - Nível Superior)<br/>Em “Milhares de turistas <u>brasileiros e estrangeiros</u> visitam o Pantanal”, os vocábulos destacados exercem, sintaticamente, a função de:",
    "options": [
      "A - núcleo do sujeito composto.",
      "B - adjunto adnominal.",
      "C - complemento nominal.",
      "D - adjunto adverbial."
    ],
    "correct": 1,
    "explanation": "GABARITO 10 B<br/>a) INCORRETA | O sujeito é formado pela expressão \"Milhares de turistas brasileiros e estrangeiros\" e tem como núcleo a palavra \"turistas\", que é o termo mais importante do sujeito. Como o sujeito possui apenas um núcleo, trata-se de sujeito simples. Os termos \"brasileiros\" e \"estrangeiros\" são adjuntos adnominais, que estão acompanhando o termo \"turistas\", núcleo do sujeito.<br/>b) CORRETA | Os adjuntos adnominais especificam o significado de um substantivo. Os termos \"brasileiros\" e \"estrangeiros\" são adjuntos adnominais que estão acompanhando e especificando o termo \"turistas\" (núcleo do sujeito). Vale mencionar que, neste caso, os adjuntos adnominais integram o sujeito, ou seja, estão dentro do sujeito.<br/>c) INCORRETA | O complemento nominal completa o sentido de um substantivo abstrato, de um adjetivo ou de um advérbio. Em \"turistas brasileiros e estrangeiros\", os termos \"brasileiros e estrangeiros\" acompanham a palavra \"turistas\", que é um substantivo concreto. Além disso, o complemento nominal vem precedido de preposição, e os termos destacados não estão preposicionados.<br/>d) INCORRETA | Os adjuntos adverbiais expressam circunstâncias do processo verbal e, geralmente, acompanham verbos (mas também podem acompanhar adjetivos ou advérbios). Os termos destacados estão acompanhando o substantivo \"turistas."
  },
  {
    "question": "1. (COSEAC - 2019 - Nível Superior)<br/>No trecho “Só o cachorro já velhíssimo (era jovem quando o jovem partiu) continuou a esperá-lo na sua esquina”, as duas ocorrências do termo “jovem” exercem, respectivamente, as funções sintáticas de",
    "options": [
      "A - predicativo e sujeito.",
      "B - sujeito e objeto direto.",
      "C - objeto direto e predicativo.",
      "D - sujeito e adjunto adnominal.",
      "E - adjunto adnominal e objeto direto."
    ],
    "correct": 0,
    "explanation": "GABARITO 1 A<br/>A primeira ocorrência da palavra “jovem” é classificada sintaticamente como predicativo do sujeito, pois caracteriza o sujeito por meio de um verbo de ligação (“o cachorro era jovem”). <br/>A segunda ocorrência do termo jovem é classificada sintaticamente como sujeito, sendo o termo sobre o qual se faz uma afirmação (“o jovem partiu”)."
  },
  {
    "question": "2. (MS CONCURSOS - 2019 - Nível Médio)<br/>Em “Estudiosos britânicos já consideram o sedentarismo uma epidemia”, os termos grifados são:",
    "options": [
      "A - Sujeito – objeto direto – predicativo do objeto.",
      "B - Sujeito – objeto direto – objeto indireto.",
      "C - Sujeito – objeto direto – predicativo do sujeito.",
      "D - Objeto direto – sujeito – objeto indireto."
    ],
    "correct": 0,
    "explanation": "GABARITO 2 A<br/>“Estudiosos britânicos” - sujeito (termo sobre o qual se afirma algo) <br/>“o sedentarismo” - objeto direto (completa o sentido do verbo transitivo direto) <br/>“uma epidemia” - predicativo do objeto (atribui uma característica ao objeto)."
  },
  {
    "question": "3. (MS CONCURSOS - 2019 - Nível Médio)<br/>Em “Ainda ficam intrigados com os mistérios do cérebro os neurologistas modernos”, o termo grifado é:",
    "options": [
      "A - Predicativo do objeto.",
      "B - Objeto direto.",
      "C - Predicativo do sujeito.",
      "D - Objeto indireto."
    ],
    "correct": 2,
    "explanation": "GABARITO 3 C<br/>O termo destacado classifica-se sintaticamente como predicativo do sujeito, uma vez que atribui ao sujeito uma característica. Fica mais fácil a identificação dos termos quando colocamos a oração na ordem direta: “Os neurologistas modernos ainda ficam intrigados com os mistérios do cérebro”."
  },
  {
    "question": "4. (Itame - 2019 - Nível Médio)<br/>Na oração: Os colegas consideram Pedro inteligente. O termo “inteligente” é um:",
    "options": [
      "A - Predicativo do sujeito.",
      "B - Predicativo do objeto.",
      "C - Complemento nominal.",
      "D - Adjunto adnominal do objeto."
    ],
    "correct": 1,
    "explanation": "GABARITO 4 B<br/>O termo “inteligente” é um predicativo do objeto por atribuir ao objeto direto (“Pedro”) uma característica."
  },
  {
    "question": "5. (FUNDATEC - 2019 - Nível Médio)<br/>Analise a estrutura da fala do pai: “Rede social (1) aqui (2) em casa (3) é (4) outra coisa(5)”.<br/>Assinale a alternativa que indica o termo que se classifica como predicativo do sujeito nesta oração:",
    "options": [
      "A - 1.",
      "B - 2.",
      "C - 3.",
      "D - 4.",
      "E - 5."
    ],
    "correct": 4,
    "explanation": "GABARITO 5 E<br/>O termo “outra coisa” é classificado sintaticamente como predicativo do sujeito, pois é uma característica que se liga ao sujeito (“rede social”) por meio de um verbo de ligação (“é”)."
  },
  {
    "question": "6. (FUNDATEC - 2019 - Nível Superior)<br/>Analise o trecho a seguir retirado do texto: ‘“O uso (1) da tecnologia para aliviar os congestionamentos (2) e buscar fontes de energia renováveis é benéfico (3), mas precisamos tomar cuidado com ideias corporativas de monetizar tudo (4) na cidade (5) e introduzir regimes de vigilância”.<br/>Considerando os termos sublinhados e numerados, assinale a alternativa que apresenta o número correspondente ao termo que pode ser classificado sintaticamente como predicativo do sujeito.",
    "options": [
      "A - 1.",
      "B - 2.",
      "C - 3.",
      "D - 4.",
      "E - 5."
    ],
    "correct": 2,
    "explanation": "GABARITO 6 C<br/>O termo “benéfico” é um predicativo do sujeito, pois caracteriza o sujeito (“o uso da tecnologia”). Observe: “O uso da tecnologia é benéfico”."
  },
  {
    "question": "7. (Colégio Pedro II - 2017 - Nível Médio)<br/>Analise as alternativas a seguir e assinale aquela em que o adjetivo sublinhado exerce a função sintática de predicativo do sujeito.",
    "options": [
      "A - “Algumas vezes, reagira à escassa delicadeza de alguns balconistas [...]”.",
      "B - “Com os seus 33 anos, estava em plena forma física.”. ",
      "C - “Radiante, a balconista empunhava-a como um troféu.”. ",
      "D - “Contemplou o lindo embrulho de motivações natalinas[...]”."
    ],
    "correct": 2,
    "explanation": "GABARITO 7 C<br/>O termo “radiante” é um predicativo do sujeito, por atribuir ao sujeito uma característica. Observe: “A balconista empunhava-a como um troféu” / “A balconista estava radiante”."
  },
  {
    "question": "8. (LEGALLE - 2017 - Nível Médio)<br/>Em “Dentro de um abraço nenhuma situação é incerta.” O termo em destaque exerce função sintática de:",
    "options": [
      "A - Objeto direto.",
      "B - Objeto indireto.",
      "C - Adjunto adnominal.",
      "D - Predicativo do sujeito.",
      "E - Predicativo do objeto."
    ],
    "correct": 3,
    "explanation": "GABARITO 8 D<br/>A palavra \"incerta\" é um predicativo do sujeito, pois caracteriza o sujeito (\"nenhuma situação\")."
  },
  {
    "question": "9. <br/>Assinale a alternativa cujo termo destacado tenha função sintática de predicativo.",
    "options": [
      "A - Os pensamentos ruins não a deixavam em paz.",
      "B - A menina precisava do apoio da mãe.",
      "C - As frutas estão na geladeira.",
      "D - Chegaram adiantados os convidados.",
      "E - Os candidatos atrasados não farão a prova."
    ],
    "correct": 3,
    "explanation": "GABARITO 9 D<br/>O termo \"adiantados\" tem função de predicativo do sujeito, uma vez que atribui ao sujeito (\"os convidados\") uma característica. Nesse caso, o verbo é significativo (de ação), mas pode-se afirmar que há um verbo de ligação implícito. Note: \"Os convidados chegaram (e estavam) adiantados\"<br/>Não confunda: o termo destacado na alternativa E é classificado sintaticamente como adjunto adnominal. Observe que \"atrasados\" acompanha o núcleo do sujeito (candidatos) e faz parte do sujeito. Já o predicativo nunca estará dentro do sujeito."
  },
  {
    "question": "10. (Big Advice - 2017 - Nível Superior)<br/>“Os professores saíram da reunião arrasados.” Sintaticamente, temos:",
    "options": [
      "A - Sujeito simples, predicado verbal, adjunto adverbial.",
      "B - Sujeito simples, predicado verbo-nominal, predicativo do sujeito.",
      "C - Sujeito composto, predicado verbal, predicativo do sujeito.",
      "D - Sujeito composto, predicado nominal, predicativo do sujeito.",
      "E - Sujeito composto, predicado verbal, objeto indireto."
    ],
    "correct": 1,
    "explanation": "GABARITO 10 B<br/>O sujeito é simples (\"Os professores\"); o predicado é verbo-nominal por possuir dois núcleos: um verbo de ação (\"saíram\") e um predicativo do sujeito (\"arrasados\")."
  },
  {
    "question": "1. (FUNDATEC - 2019 - Nível Médio)<br/>Analise o trecho a seguir: <br/>“um levantamento (1) feito pelo dicionário inglês (2) mostrou um aumento (3) exponencial (4) nas pesquisas da expressão (5)”.<br/>O termo que exerce a função de agente da passiva é dado por:",
    "options": [
      "A - 1.",
      "B - 2.",
      "C - 3.",
      "D - 4.",
      "E - 5."
    ],
    "correct": 1,
    "explanation": "GABARITO 1 B<br/>A oração em questão está na voz passiva. A expressão “pelo dicionário inglês” é classificada sintaticamente como agente da passiva, por ser o termo que pratica a ação expressa pelo verbo. Se a oração estivesse na voz ativa, esse termo seria o sujeito. Observe: “O dicionário inglês fez um levantamento”."
  },
  {
    "question": "2. (NUCEPE - 2019 - Nível Superior)<br/>Em “A raiva é transmitida <u>por animais contaminados e comentários e postagens nas redes sociais...</u>”, o termo destacado tem a função sintática de",
    "options": [
      "A - adjunto adverbial, indica circunstância à ação verbal.",
      "B - agente da passiva, pratica a ação verbal na voz passiva.",
      "C - complemento nominal, pois completa o adjetivo “transmitida”.",
      "D - objeto indireto, completa do sentido do verbo com o auxílio da preposição.",
      "E - sujeito, pratica a ação de “transmitir” expressa na oração de ordem inversa."
    ],
    "correct": 1,
    "explanation": "GABARITO 2 B<br/>O termo destacado tem função sintática de agente da passiva, uma vez que pratica a ação expressa pelo verbo. Se a oração estivesse na voz ativa, o termo em destaque seria o sujeito agente. Observe: “Animais contaminados e comentários e postagens nas redes sociais transmitem a raiva”."
  },
  {
    "question": "3. (CETREDE - 2019 - Nível Médio)<br/>Em qual das opções há agente da passiva?",
    "options": [
      "A - A crença em Deus é necessária.",
      "B - As frutas ficaram bichadas com o tempo.",
      "C - O ator estava cercado de fãs.",
      "D - De repente, fiquei ansioso por sua volta.",
      "E - O rapaz estava apaixonado pela colega."
    ],
    "correct": 2,
    "explanation": "GABARITO 3 C<br/>A única alternativa que traz uma oração na voz passiva é a C. O termo “de fãs” é o agente da passiva. Se a oração estivesse na voz ativa, “fãs” seria o sujeito agente. Observe: “Fãs cercavam o ator”."
  },
  {
    "question": "4. (IDECAN - 2018 - Nível Médio)<br/>Analise a frase a seguir: “A Igreja acusou a ciência de prejudicar a moral”. Acerca da frase, marque V para as afirmativas verdadeiras e F para as falsas.<br/>( ) “A ciência foi acusada de prejudicar a moral.” é uma de suas versões em voz passiva.<br/>( ) “Acusou-se a ciência de prejudicar a moral.” é uma de suas versões em voz passiva.<br/>( ) Na passagem da voz ativa para passiva, o objeto direto na versão ativa se tornou sujeito na versão passiva.<br/>( ) Na passagem da voz ativa para passiva, o sujeito na versão ativa se tornou objeto direto na versão passiva.<br/>A sequência está correta em",
    "options": [
      "A - V, V, F, F.",
      "B - V, V, V, F.",
      "C - V, F, V, V.",
      "D - F, F, F, V."
    ],
    "correct": 1,
    "explanation": "GABARITO 4 B<br/>( v ) | “A ciência foi acusada de prejudicar a moral.” é a voz passiva analítica da oração em questão.<br/>( v ) | “Acusou-se a ciência de prejudicar a moral.” é a voz passiva sintética da oração em questão.<br/>( v ) | O objeto direto da voz ativa transforma-se em sujeito na voz passiva. O termo “a ciência” na frase trazida pela questão é objeto direto que, na transposição para a voz passiva, torna-se sujeito paciente.<br/>( f ) | O sujeito da voz ativa torna-se agente da passiva na voz passiva analítica, entretanto, no caso da oração “A ciência foi acusada de prejudicar a moral.”, o termo que pratica a ação expressa pelo verbo (“a igreja”) foi omitido."
  },
  {
    "question": "5. (CCV-UFC - 2018 - Nível Superior)<br/>Assinale a alternativa cujo termo sublinhado exerce a função de agente da passiva.",
    "options": [
      "A - “Ali foi encontrado <u>alto teor de partículas de microplástico</u>”.",
      "B - “foram constatadas <u>‘concentrações extremamente altas’ de PCB...</u>”.",
      "C - “Não há <u>um único canto da Terra livre da poluição</u>”.",
      "D - “Foram publicados <u>pela Organização Mundial da Saúde</u>”",
      "E - “Se multiplicarmos <u>7 (milhões de pessoas)</u> por 6 (anos)...”."
    ],
    "correct": 3,
    "explanation": "GABARITO 5 D<br/>A expressão “pela Organização Mundial da Saúde” exerce função sintática de agente da passiva, uma vez que é o termo que pratica a ação expressa pelo verbo da oração na voz passiva. Note que se passamos a oração para a voz ativa, esse termo passa a ser o sujeito: “A Organização Mundial da Saúde publicou...”."
  },
  {
    "question": "6. (COPEVE-UFAL - 2016 - Nível Superior)<br/>“Meu filho quebrou a janela do vizinho”.<br/>Na reescrita dessa oração para a voz passiva, evidencia-se que:",
    "options": [
      "A - O objeto direto passa a sujeito e o sujeito passa a objeto direto.",
      "B - O sujeito passa a agente da passiva e o objeto direto passa a sujeito.",
      "C - O sujeito passa a agente da passiva e o objeto indireto passa a sujeito.",
      "D - O objeto direto passa a agente da passiva e o sujeito passa a objeto direto.",
      "E - O sujeito passa a agente da passiva e o objeto direto passa a objeto indireto."
    ],
    "correct": 1,
    "explanation": "GABARITO 6 B<br/>Ao passarmos a oração em questão para a voz passiva analítica, temos: “A janela do vizinho foi quebrada pelo meu filho”. Portanto, o sujeito passa a agente da passiva (“pelo meu filho”), e o objeto direto passa a sujeito (“A janela do vizinho”)."
  },
  {
    "question": "7. (LEGALLE - 2016 - Nível Superior)<br/>Na frase “Quando acariciado <u>por mim</u> foi espichar-se na varanda”, qual a função sintática do termo destacado?",
    "options": [
      "A - Sujeito.",
      "B - Agente da passiva.",
      "C - Objeto direto.",
      "D - Objeto indireto.",
      "E - Complemento nominal."
    ],
    "correct": 1,
    "explanation": "GABARITO 7 B<br/>A oração “Quando acariciado por mim” está na voz passiva. O termo “por mim” tem função sintática de agente da passiva, já que é o termo que pratica a ação expressa pelo verbo. Ao realizarmos a transposição para a voz ativa, temos: “Quando eu o acariciei…”."
  },
  {
    "question": "8. (Quadrix - 2016 - Nível Médio)<br/>Em “Um estudo que foi assinado <u>por Eduardo Bodnariuc Fontes</u>, ligado ao Departamento de Neurologia da Unicamp, avançou nessa área do conhecimento”, o termo grifado é classificado sintaticamente como:",
    "options": [
      "A - sujeito simples.",
      "B - sujeito desinencial.",
      "C - agente da passiva.",
      "D - adjunto adnominal.",
      "E - complemento nominal."
    ],
    "correct": 2,
    "explanation": "GABARITO 8 C<br/>A expressão \"por Eduardo Bodnariuc Fontes\" classifica-se sintaticamente como agente da passiva por ser o termo que pratica a ação verbal na voz passiva. Se a oração estivesse na voz ativa, esse termo passaria a ser o sujeito. Observe: \"Eduardo Bodnariuc Fontes assinou um estudo\"."
  },
  {
    "question": "9. (CONSULPAM - 2022 - Nível Fundamental)<br/>“Doença celíaca é uma doença autoimune causada <u>pela intolerância ao glúten.</u>” <br/>O trecho sublinhado acima constitui:",
    "options": [
      "A - O complemento agente da voz passiva.",
      "B - O complemento paciente da voz passiva.",
      "C - O complemento objeto direto da voz passiva.",
      "D - O complemento nominal da voz passiva."
    ],
    "correct": 0,
    "explanation": "GABARITO 9 A<br/>Em \"Doença celíaca é uma doença autoimune causada pela intolerância ao glúten\", temos voz passiva, já que o sujeito da oração (\"doença celíaca\") é paciente, ou seja, recebe a ação expressa pelo verbo. O termo que pratica a ação na voz passiva é chamado de agente da passiva. No trecho em questão, o agente da passiva é \"pela intolerância ao glúten\", uma vez que a intolerância ao glúten causa a doença celíaca. Veja:<br/>Doença celíaca é causada pela intolerância ao glúten. (voz passiva analítica)<br/>Intolerância ao glúten causa doença celíaca. (voz ativa)"
  },
  {
    "question": "10. (Quadrix - 2016 - Nível Superior)<br/>Assinale a alternativa que contenha a correta classificação sintática do termo \"pelos pais\", presente no segundo quadrinho.",
    "options": [
      "A - Sujeito paciente.",
      "B - Objeto indireto.",
      "C - Agente da passiva.",
      "D - Adjunto adverbial.",
      "E - Complemento nominal."
    ],
    "correct": 2,
    "explanation": "GABARITO 10 C<br/>Em “Pode ser transmitido pelos pais.”, temos voz passiva analítica marcada pela locução verbal “Pode ser transmitido”. O termo que pratica a ação expressa pelo verbo na voz passiva é chamado de agente da passiva. Observe que o termo “pelos pais” é responsável por praticar a ação.<br/>[Preconceito] pode ser transmitido pelos pais. (voz passiva analítica)<br/>Os pais podem transmitir preconceito. (voz ativa)."
  },
  {
    "question": "1. (IBFC - 2019 - Nível Superior)<br/>Leia com atenção o trecho \"O Brasil envelhece demograficamente e nós poderíamos ser chamados de vanguarda do novo processo\" e, de acordo com a Gramática Normativa da Língua Portuguesa, assinale a alternativa que preencha correta e respectivamente as lacunas do excerto abaixo. De acordo com a sintaxe a palavra \"demograficamente\" é classificada como ______, esse termo modifica o verbo \"envelhece\" que é um verbo ______.",
    "options": [
      "A - Adjunto Adnominal / Transitivo.",
      "B - Advérbio de modo / de ligação.",
      "C - Adjunto Adverbial / Intransitivo.",
      "D - Advérbio de modo / Transitivo."
    ],
    "correct": 2,
    "explanation": "GABARITO 1 C<br/>A palavra \"demograficamente\" é classificada, na análise sintática, como adjunto adverbial que expressa modo, isto é, o Brasil envelhece de modo demográfico. Dessa forma, esse termo está relacionado ao verbo (já que é o modo como o Brasil envelhece), que é intransitivo, ou seja, não possui complemento."
  },
  {
    "question": "2. (VUNESP - 2019 - Nível Fundamental)<br/>Na frase \"...estou <u>com um doente</u> em casa\", o trecho destacado estabelece sentido de",
    "options": [
      "A - finalidade.",
      "B - ausência.",
      "C - companhia.",
      "D - assunto.",
      "E - modo."
    ],
    "correct": 2,
    "explanation": "GABARITO 2 C<br/>A expressão \"com um doente\" é um adjunto adverbial que expressa companhia, já que o sujeito está na companhia de um doente."
  },
  {
    "question": "3. (VUNESP - 2019 - Nível Fundamental)<br/>Na oração “Ela o observava <u>com interesse</u>...”, a expressão em destaque estabelece sentido de",
    "options": [
      "A - lugar.",
      "B - companhia.",
      "C - assunto.",
      "D - finalidade.",
      "E - modo."
    ],
    "correct": 4,
    "explanation": "GABARITO 3 E<br/>A expressão “com interesse” expressa o modo como ela o observava, por isso é classificada sintaticamente como adjunto adverbial de modo."
  },
  {
    "question": "4. (IBADE - 2018 - Nível Médio)<br/>Pela interpretação, pode-se afirmar que o trecho “Vive com a filha num apartamento de frente para um parque” foi construído relacionando ao verbo, respectivamente, as circunstâncias de:",
    "options": [
      "A - tempo e lugar.",
      "B - afirmação e modo.",
      "C - companhia e lugar.",
      "D - modo e finalidade.",
      "E - modo e intensidade."
    ],
    "correct": 2,
    "explanation": "GABARITO 4 C<br/>A expressão “com a filha” classifica-se sintaticamente como adjunto adverbial de companhia, já que indica com quem o sujeito vive. A expressão “num apartamento de frente para um parque” exprime o lugar onde o sujeito vive, portanto, é classificada como adjunto adverbial de lugar."
  },
  {
    "question": "5. (IBADE - 2018 - Nível Médio)<br/>Estabeleça a relação entre as colunas, considerando os termos destacados:<br/>1 – A minha coleção será a mais “maneira” da sala.<br/>2 – A gente não precisa perder “tempo” com isso.<br/>3 – Você trocará a Terra por folhas “alienígenas”.<br/>4 – A gente pode ficar de bobeira “o resto do dia”.<br/>( ) Adjunto adnominal<br/>( ) Núcleo do predicativo<br/>( ) Objeto direto<br/>( ) Adjunto adverbial<br/>A sequência correta é:",
    "options": [
      "A - 1 - 3 - 4 - 2.",
      "B - 3 - 1 - 4 - 2.",
      "C - 1 - 4 - 2 -3.",
      "D - 2 - 3 - 1 - 4.",
      "E - 3 - 1 - 2 - 4."
    ],
    "correct": 4,
    "explanation": "GABARITO 5 E<br/>1 – O termo “maneira” é um predicativo do sujeito, por atribuir ao sujeito (“A minha coleção”) uma característica; <br/>2 – O termo “tempo” é classificado sintaticamente como objeto direto, por completar o sentido do verbo transitivo direto “perder”; <br/>3 – O termo “alienígenas” é um adjunto adnominal, já que acompanha o substantivo concreto “folhas”; <br/>4 – A expressão “o resto do dia” é um adjunto adverbial, que expressa tempo."
  },
  {
    "question": "6. (Unesc - 2023 - Nível Superior)<br/>[...] 90% das duzentos e cinquenta e duas pessoas infectadas morreram em 2004 em Angola. <br/>Na expressão destacada, tem-se:",
    "options": [
      "A - Adjunto adverbial enumerativo e de circunstância.",
      "B - Aposto enumerativo e aposto geográfico.",
      "C - Adjunto adnominal e complemento nominal.",
      "D - Adjunto adverbial de tempo e de lugar.",
      "E - Complemento nominal e adjunto adnominal."
    ],
    "correct": 3,
    "explanation": "GABARITO 6 D<br/>Diferentemente do adjunto adnominal, que se liga ao nome, o adjunto adverbial, como o próprio nome já sugere, está relacionado ao verbo. Em “[...] 90% das duzentos e cinquenta e duas pessoas infectadas morreram em 2004 em Angola.”, temos dois adjuntos adverbiais: um de tempo (em 2004) e um de lugar (em Angola), que estão relacionados ao verbo “morreram”."
  },
  {
    "question": "7. <br/>Há um adjunto adverbial que expressa concessão na alternativa:",
    "options": [
      "A - Depois dessa chuva, com certeza as ruas estão alagadas.",
      "B - Apesar da vitória, o time continua mal no campeonato.",
      "C - Os estudos foram realizados em universidades brasileiras.",
      "D - Em meados de fevereiro, o vírus começou a se espalhar."
    ],
    "correct": 1,
    "explanation": "GABARITO 7 B<br/>O termo “apesar da vitória” é um adjunto adverbial que expressa concessão, já que há uma ideia de quebra de expectativa. Espera-se que o time tenha melhorado no campeonato depois da vitória, mas não foi o que aconteceu."
  },
  {
    "question": "8. (IBADE - 2019 - Nível Superior)<br/>“Conversou com ela <u>por horas</u>”.<br/>O termo destacado é um:",
    "options": [
      "A - objeto indireto.",
      "B - vocativo.",
      "C - aposto.",
      "D - adjunto adnominal.",
      "E - adjunto adverbial."
    ],
    "correct": 4,
    "explanation": "GABARITO 8 E<br/>O termo “por horas” é um adjunto adverbial de tempo. O adjunto adverbial fornece uma informação a mais sobre o verbo “conversou”."
  },
  {
    "question": "9. <br/>Marque a alternativa cujo termo destacado não seja um adjunto adverbial.",
    "options": [
      "A - Os turistas chegaram <u>cedo</u> ao museu.",
      "B - Normalmente não há trânsito <u>nesta avenida</u>.",
      "C - <u>Talvez</u> eles não tenham tempo.",
      "D - O candidato fez a prova <u>rápido</u>.",
      "E - Era <u>rápido</u> o jovem atleta."
    ],
    "correct": 4,
    "explanation": "GABARITO 9 E<br/>a) CORRETA | A palavra “cedo” classifica-se como adjunto adverbial de tempo.<br/>b) CORRETA | As palavras “nesta avenida” classificam-se como adjunto adverbial de lugar.<br/>c) CORRETA | A palavra “talvez” classifica-se como adjunto adverbial de dúvida.<br/>d) CORRETA | Aqui palavra “rápido” classifica-se como adjunto adverbial, já que expressa o modo como o candidato fez a prova.<br/>e) INCORRETA | A palavra “rápido” classifica-se sintaticamente como predicativo do sujeito, uma vez que caracteriza o sujeito (o jovem atleta) por meio de um verbo de ligação (era)."
  },
  {
    "question": "10. <br/>“Mesmo doente, o governador esteve com seus assessores pela manhã no local do desabamento.”<br/>Quantos adjuntos adverbiais há no trecho acima?",
    "options": [
      "A - 4",
      "B - 3",
      "C - 2",
      "D - 1"
    ],
    "correct": 0,
    "explanation": "GABARITO 10 A<br/>No trecho há quatro adjuntos adverbiais: 1 - “Mesmo doente” (concessão); 2 - “com seus assessores” (companhia); 3 - “pela manhã” (tempo); 4 - “no local do desabamento” (lugar)."
  },
  {
    "question": "1. (CETAP - 2015 - Nível Superior - adaptada)<br/>“O jornal <u>de domingo</u> trouxe uma matéria (...)”. Na frase, a locução “de domingo”, por admitir sua substituição pelo adjetivo dominical, funciona como:",
    "options": [
      "A - adjunto adnominal.",
      "B - adjunto adverbial.",
      "C - predicativo.",
      "D - vocativo.",
      "E - aposto."
    ],
    "correct": 0,
    "explanation": "GABARITO 1 A<br/>A expressão “de domingo” é um adjunto adnominal por acompanhar o substantivo concreto “jornal” e por admitir sua substituição pelo adjetivo “dominical”."
  },
  {
    "question": "2. <br/>Leia a seguinte frase e, em seguida, assinale a alternativa incorreta: “Compramos duas grandes panelas de aço.”",
    "options": [
      "A - Os termos “duas”, “grandes” e “de aço” são adjuntos adnominais e estão acompanhando a palavra “panelas”.",
      "B - A palavra “panelas” é núcleo do objeto direto.",
      "C - A expressão “de aço” é complemento nominal, já que se liga a um nome por meio de preposição.",
      "D - Na frase, há três adjuntos adnominais representados por numeral, adjetivo e locução adjetiva, respectivamente."
    ],
    "correct": 2,
    "explanation": "GABARITO 2 C<br/>A alternativa C está incorreta. A expressão “de aço” é adjunto adnominal, não complemento nominal, já que acompanha o substantivo concreto “panelas”. Complemento nominal nunca se relaciona a um substantivo concreto."
  },
  {
    "question": "3. <br/>Leia as seguintes frases e, em seguida, marque a alternativa incorreta.<br/>I. Os alunos indisciplinados ficaram na sala.<br/>II. Os alunos ficaram na sala indisciplinados.",
    "options": [
      "A - Na oração I, o termo “indisciplinados” é responsável por atribuir uma característica ao núcleo do sujeito “alunos”.",
      "B - Na oração II, o termo “indisciplinados” atribui ao sujeito “os alunos” uma característica momentânea.",
      "C - O termo “indisciplinados” é classificado sintaticamente como adjunto adnominal e predicativo do sujeito nas orações I e II, respectivamente.",
      "D - A troca de ordem das palavras que ocorreu entre as duas frases altera o sentido dos enunciados, mas não muda a classificação sintática da palavra “indisciplinados”.",
      "E - O predicado da oração II é classificado como verbo-nominal por possuir dois núcleos: um verbo de ação e um predicativo."
    ],
    "correct": 3,
    "explanation": "GABARITO 3 D<br/>a) CORRETA | Na oração I, o termo \"indisciplinados\" é um adjetivo que, de fato, atribui uma característica a \"alunos\", que é o núcleo do sujeito<br/>b) CORRETA | Na oração II, o termo \"indisciplinados\", de fato, atribui uma característica momentânea a \"os alunos\", que é o sujeito da oração. No contexto apresentado, o verbo \"ficar\" foi empregado como verbo de ação, ou seja, trata-se de um verbo transitivo direto. Como já vimos, quando isso ocorre, estamos diante de um predicado verbo-nominal.<br/>c) CORRETA | De fato, o termo \"indisciplinados\" exerce função sintática de adjunto adnominal na primeira oração (característica inerente) e de predicativo do sujeito na segunda oração (característica momentânea).<br/>d) INCORRETA | A alteração do lugar ocupado pela palavra \"indisciplinados\" altera o sentido da frase e também sua classificação sintática. Na frase I, \"indisciplinados\" é adjunto adnominal (traz uma característica inerente e fica dentro da função sintática do termo a que se relaciona). Já na frase II, o termo \"indisciplinados\" é predicativo do sujeito (traz uma característica momentânea e fica de fora da função sintática do termo a que se relaciona).<br/>e) CORRETA | A oração II, de fato, possui um predicado verbo-nominal. No contexto apresentado, o verbo \"ficar\" foi empregado como verbo de ação, ou seja, trata-se de um verbo transitivo direto. Já o termo \"indisciplinados\" é o predicativo."
  },
  {
    "question": "4. (Quadrix - 2018 - Nível Superior)<br/>“Nos dias de hoje, essa resistência <u>à prática de atividade física</u> pode ser atribuída ao estilo de vida marcado pela turbulência do dia a dia nos grandes centros urbanos.”<br/>A expressão “à prática de atividade física” atua como adjunto adnominal de “resistência”, já que se trata de termo preposicionado que completa o sentido de um nome.<br/>( ) CERTO ( ) ERRADO",
    "options": [
      "A - CERTO",
      "B - ERRADO"
    ],
    "correct": 1,
    "explanation": "GABARITO 4 ERRADO<br/>O termo “à prática de atividade física” é preposicionado e está relacionado a um nome (nesse caso, um substantivo abstrato). Ocorre que, partindo dessas características, o termo pode ser tanto adjunto adnominal quanto complemento nominal. O que vai diferenciar as duas classificações nesse contexto é se o termo possui natureza agente (que pratica a ação) ou paciente (que recebe a ação). Nesse caso, a expressão “à prática de atividade física” é paciente, pois sofre a resistência. Portanto, trata-se de um complemento nominal."
  },
  {
    "question": "5. (IADES - 2019 - Nível Médio)<br/>Assinale a alternativa cujo termo sublinhado representa adjunto adnominal da respectiva oração.",
    "options": [
      "A - “A responsabilidade é inseparável <u>do comprometimento</u>”",
      "B - “dificilmente será comprometida <u>com os respectivos afazeres</u>”",
      "C - “são requisitados <u>pelas empresas</u>”",
      "D - “Ser comprometido <u>no trabalho</u> é muito mais que cumprir”",
      "E - “atitudes favoráveis para o crescimento <u>da empresa</u>”"
    ],
    "correct": 4,
    "explanation": "GABARITO 5 E<br/>a) INCORRETA | O termo sublinhado é classificado como complemento nominal.<br/>b) INCORRETA | O termo sublinhado é classificado como complemento nominal.<br/>c) INCORRETA | O termo sublinhado é classificado como agente da passiva.<br/>d) INCORRETA | O termo sublinhado é classificado como adjunto adverbial.<br/>e) CORRETA | O termo “da empresa” é um adjunto adnominal por acompanhar o substantivo abstrato “crescimento” e ter caráter ativo (a empresa cresce)."
  },
  {
    "question": "6. (COPEVE-UFAL - 2016 - Nível Superior)<br/>Nas orações “A nota <u>da imprensa</u> esclareceu pontos obscuros do edital” e “A invenção <u>da imprensa</u> é creditada a Johannes Gutenberg”, os trechos destacados constituem, respectivamente,",
    "options": [
      "A - objeto direto e agente da passiva.",
      "B - complemento nominal e objeto direto.",
      "C - adjunto adnominal e adjunto adverbial.",
      "D - adjunto adnominal e complemento nominal.",
      "E - complemento nominal e predicativo do sujeito."
    ],
    "correct": 3,
    "explanation": "GABARITO 6 D<br/>Nesse tipo de contexto, em que precisamos diferenciar adjunto adnominal e complemento nominal, a dica é observar se o termo é agente (pratica a ação) ou paciente (recebe a ação). Em \"A nota da imprensa\", a imprensa pratica a ação de fazer uma nota; o termo \"da imprensa\" é, portanto, adjunto adnominal. Já em \"A invenção da imprensa\", o termo \"da imprensa\" recebe a ação de ter sido inventada; é, dessa forma, complemento nominal."
  },
  {
    "question": "7. <br/>Leia o seguinte verso do poema de Drummond:<br/>“Teus ombros suportam o mundo.”<br/>Nele, cada palavra é classificada respectivamente como:",
    "options": [
      "A - Núcleo do sujeito - adjunto adnominal - verbo transitivo direto - núcleo do objeto direto - adjunto adnominal.",
      "B - Adjunto adnominal - adjunto adnominal - verbo transitivo direto - adjunto adnominal - núcleo do objeto direto.",
      "C - Adjunto adnominal - núcleo do sujeito - verbo intransitivo - adjunto adnominal - adjunto adverbial.",
      "D - Adjunto adnominal - núcleo do sujeito - verbo transitivo direto - adjunto adnominal - núcleo do objeto direto.",
      "E - Adjunto adnominal - núcleo do sujeito - verbo transitivo indireto - complemento nominal - núcleo do objeto indireto."
    ],
    "correct": 3,
    "explanation": "GABARITO 7 D<br/>O sujeito “Teus ombros” é formado por adjunto adnominal (“Teus”) e núcleo do sujeito (“ombros”). Há, em seguida, o verbo transitivo direto (“suportam”), que exige um complemento. O objeto direto “o mundo” é formado por adjunto adnominal (“o”) e núcleo do objeto direto (“mundo”)."
  },
  {
    "question": "8. (UFRRJ - 2015 - Nível Médio)<br/>“Assim, formam-se experts em articulações do joelho <u>esquerdo</u> que não sabem quem foi Hipócrates.”<br/>A palavra sublinhada assume, respectivamente, classe gramatical e função sintática de",
    "options": [
      "A - adjetivo e predicativo do sujeito.",
      "B - substantivo e núcleo do sujeito.",
      "C - adjetivo e adjunto adnominal.",
      "D - advérbio e adjunto adverbial.",
      "E - substantivo e predicativo do objeto."
    ],
    "correct": 2,
    "explanation": "GABARITO 8 C<br/>A palavra “esquerdo”, na frase em questão, é classificada morfologicamente (classe gramatical) como adjetivo e, sintaticamente, como adjunto adnominal, delimitando o sentido do substantivo concreto “joelho”."
  },
  {
    "question": "9. (IBFC- 2023 - Nível Superior)<br/>Na oração “O espírito humano não cria elementos do nada”: <br/>I. Há um sujeito composto: “espírito humano”. <br/>II. Não há uma ação, verbo: “não cria”. <br/>III. O sujeito da oração é simples: “humano”. <br/>IV. O objeto da oração é direto: “elementos”. <br/>V. Há um núcleo e um adjunto adnominal: “espírito humano”. <br/>Assinale a alternativa correta.",
    "options": [
      "A - Apenas as afirmativas I, II e III estão corretas.",
      "B - Apenas as afirmativas II, IV e V estão corretas.",
      "C - Apenas as afirmativas IV e V estão corretas.",
      "D - Apenas as afirmativas II e IV estão corretas.",
      "E - Apenas as afirmativas I e V estão corretas."
    ],
    "correct": 2,
    "explanation": "GABARITO 9 C<br/>Na oração \"O espírito humano não cria elementos do nada\", \"espírito humano\" é o sujeito simples da oração, pois há apenas um núcleo (espírito + adjunto adnominal \"humano\"). O verbo \"cria\" é transitivo direto e, portanto, seu complemento também é direto (\"elementos\")."
  },
  {
    "question": "10. (IBFC- 2023 - Nível Superior)<br/>Em “Milhares de turistas <u>brasileiros e estrangeiros</u> visitam o Pantanal”, os vocábulos destacados exercem, sintaticamente, a função de:",
    "options": [
      "A - núcleo do sujeito composto.",
      "B - adjunto adnominal.",
      "C - complemento nominal.",
      "D - adjunto adverbial."
    ],
    "correct": 1,
    "explanation": "GABARITO 10 B<br/>a) INCORRETA | O sujeito é formado pela expressão \"Milhares de turistas brasileiros e estrangeiros\" e tem como núcleo a palavra \"turistas\", que é o termo mais importante do sujeito. Como o sujeito possui apenas um núcleo, trata-se de sujeito simples. Os termos \"brasileiros\" e \"estrangeiros\" são adjuntos adnominais, que estão acompanhando o termo \"turistas\", núcleo do sujeito.<br/>b) CORRETA | Os adjuntos adnominais especificam o significado de um substantivo. Os termos \"brasileiros\" e \"estrangeiros\" são adjuntos adnominais que estão acompanhando e especificando o termo \"turistas\" (núcleo do sujeito). Vale mencionar que, neste caso, os adjuntos adnominais integram o sujeito, ou seja, estão dentro do sujeito.<br/>c) INCORRETA | O complemento nominal completa o sentido de um substantivo abstrato, de um adjetivo ou de um advérbio. Em \"turistas brasileiros e estrangeiros\", os termos \"brasileiros e estrangeiros\" acompanham a palavra \"turistas\", que é um substantivo concreto. Além disso, o complemento nominal vem precedido de preposição, e os termos destacados não estão preposicionados.<br/>d) INCORRETA | Os adjuntos adverbiais expressam circunstâncias do processo verbal e, geralmente, acompanham verbos (mas também podem acompanhar adjetivos ou advérbios). Os termos destacados estão acompanhando o substantivo \"turistas."
  },
  {
      "question": "1. (Português com Leticia)<br/>Marque a alternativa que contenha uma frase nominal.",
      "options": [
        "A - Esse caminho é perigoso.",
        "B - Bolsas despencam, e dólar sobe.",
        "C - Não há problemas.",
        "D - Tragédia completa um ano.",
        "E - A volta de doenças perigosas."
      ],
      "correct": 4,
      "explanation": "GABARITO 1 E<br/>a) INCORRETA | Frase verbal, pois contém verbo (“é”).<br/>b) INCORRETA | Frase verbal, pois contém verbos (“despencam” e “sobe”).<br/>c) INCORRETA | Frase verbal, pois contém verbo (“há”).<br/>d) INCORRETA | Frase verbal, pois contém verbo (“completa”).<br/>e) CORRETA | Frase nominal, ou seja, sem a presença de verbos."
    },
    {
      "question": "2. (Português com Leticia)<br/>Leia as seguintes sentenças e, em seguida, marque a alternativa correta.<br/>I. As crianças continuam ingerindo uma grande quantidade de açúcar.<br/>II. Nem sempre o doce é o vilão das dietas.<br/>III. Aumenta o número de crianças obesas, e pais devem estar atentos.",
      "options": [
        "A - A frase I é um período composto por possuir duas orações.",
        "B - A frase II é um período simples, uma vez que possui apenas uma oração.",
        "C - A frase III é um período composto por três orações.",
        "D - A sentença II traz uma frase nominal.",
        "E - A sentença III traz um período simples."
      ],
      "correct": 1,
      "explanation": "GABARITO 2 B<br/>I. Período simples (possui uma oração): há apenas uma locução verbal (\"continuam ingerindo\").<br/>II. Período simples (possui por uma oração): há apenas um verbo (\"é\").<br/>III. Período composto (possui duas orações): há um verbo na primeira oração (\"aumenta\"), e uma locução verbal na segunda oração (\"devem estar\")."
    },
    {
      "question": "3. (FUNDATEC-2019 - Nível Médio)<br/>Quantas orações compõem o período a seguir?<br/>\"Declaramos clara e inequivocamente que o planeta Terra está enfrentando uma emergência climática\", afirmou uma declaração chamada \"Emergência Climática\" feita por mais de 11 mil cientistas do mundo.\"",
      "options": [
        "A - 2.",
        "B - 3.",
        "C - 4.",
        "D - 5.",
        "E - 6."
      ],
      "correct": 3,
      "explanation": "GABARITO 3 D<br/>O trecho apresenta cinco orações. Separamos as orações e destacamos os verbos. Lembrando que cada oração possui um verbo ou locução verbal:<br/>1ª: Declaramos clara e inequivocamente;<br/>2ª: que o planeta está enfrentando uma emergência climática;<br/>3ª: afirmou uma declaração;<br/>4ª: chamada \"Emergência Climática\";<br/>5ª: feita por mais de 11 mil cientistas do mundo."
    },
    {
      "question": "4. (Português com Leticia)<br/>Leia a seguinte manchete: \"Peixe-agulha salta da água e fica cravado no pescoço de menino que viajava em barco.\"<br/>Sobre a manchete, pode-se afirmar que:",
      "options": [
        "A - trata-se de uma frase nominal.",
        "B - transmite ao leitor a informação por meio de uma única oração.",
        "C - é um período composto por três orações.",
        "D - é um período simples.",
        "E - é um período composto por duas orações."
      ],
      "correct": 2,
      "explanation": "GABARITO 4 C<br/>A manchete em questão apresenta três orações:<br/>1ª: Peixe-agulha salta da água;<br/>2ª: e fica cravado no pescoço de menino;<br/>3ª: que viajava em barco."
    },
    {
      "question": "5. (Português com Leticia)<br/>Julgue as afirmações a seguir, colocando V para as verdadeiras e F para as falsas. Em seguida, assinale a alternativa que apresenta a sequência correta.<br/>( ) A frase é um enunciado de sentido completo.<br/>( ) A frase pode ou não conter verbo.<br/>( ) A oração pode ou não conter verbo.<br/>( ) O período simples é formado por apenas uma oração.",
      "options": [
        "A - V-V-F-V",
        "B - V-V-V-F",
        "C - F-V-F-V",
        "D - V-F-F-V",
        "E - F-F-V-V"
      ],
      "correct": 0,
      "explanation": "GABARITO 5 A<br/>(V) | A frase é um enunciado de sentido completo.<br/>(V) | A frase pode ou não conter verbo.<br/>(F) | É falsa a afirmativa \"A oração pode ou não conter verbo\", uma vez que a oração possui necessariamente um verbo ou locução verbal.<br/>(V) | O período simples é formado por apenas uma oração."
    },
    {
      "question": "6. (Instituto Excelência - 2019 - Nível Médio - adaptada)<br/>Levando-se em consideração os conceitos de frase, oração e período, assinale o período classificado como simples:",
      "options": [
        "A - \"A corrupção que assolou o Brasil, especialmente o Estado do Rio, nos últimos anos provocou imenso prejuízo aos cofres públicos.\"",
        "B - \"Uma das consequências mais perversas deste assalto aos contribuintes é o sucateamento de serviços básicos à população.\"",
        "C - \"Uma das competências do Conselho Estadual de Defesa dos Direitos Humanos (CEDDH) previstas em lei é apurar as denúncias de violações ocorridas no Rio de Janeiro.\"",
        "D - \"Muita gente acredita que esta definição limita-se a casos de agressões por parte de bandidos ou autoridades policiais.\""
      ],
      "correct": 1,
      "explanation": "GABARITO 6 B<br/>O período é uma unidade textual composta por uma ou mais orações. Quando um período possui apenas uma oração, é considerado um período simples. Por outro lado, um período composto é aquele que possui mais de uma oração.<br/>O modo mais simples de identificar quantas orações o período apresenta é identificar o número de verbos (ou locuções verbais).<br/>Observe que apenas a alternativa B apresenta um único verbo:<br/>a) INCORRETA | \"A corrupção que assolou o Brasil, especialmente o Estado do Rio, nos últimos anos provocou imenso prejuízo aos cofres públicos.\"<br/>b) CORRETA | \"Uma das consequências mais perversas deste assalto aos contribuintes é o sucateamento de serviços básicos à população.\"<br/>c) INCORRETA | \"Uma das competências do Conselho Estadual de Defesa dos Direitos Humanos (CEDDH) previstas em lei é apurar as denúncias de violações ocorridas no Rio de Janeiro.\"<br/>d) INCORRETA | \"Muita gente acredita que esta definição limita-se a casos de agressões por parte de bandidos ou autoridades policiais.\""
    },
    {
      "question": "7. (IBFC-2022 - Nível Fundamental)<br/>Analise as afirmativas abaixo e dê valores Verdadeiro (V) ou Falso (F).<br/>( ) FRASE é todo enunciado linguístico capaz de estabelecer um processo de comunicação, ou seja, é todo enunciado que possui sentido completo.<br/>( ) ORAÇÃO é toda estrutura linguística centrada em um verbo ou uma locução verbal.<br/>( ) PERÍODO é a frase formada por apenas uma oração.<br/>Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
      "options": [
        "A - F - V - V.",
        "B - V - V - V.",
        "C - F - F - F.",
        "D - V - V - F."
      ],
      "correct": 3,
      "explanation": "GABARITO 7 D<br/>( V ) A afirmativa é verdadeira. Em termos mais simples, uma frase pode ser definida como uma declaração completa e compreensível, capaz de expressar ideias, emoções, ordens ou qualquer outro significado que seja plenamente comunicado e entendido.<br/>( V ) A afirmativa é verdadeira. A oração é caracterizada como uma frase que contém um verbo. É justamente essa presença do verbo que a distingue das demais frases. Por isso, dizemos que nem toda frase pode ser considerada uma oração. Além disso, a frase que não tem verbo é denominada frase nominal.<br/>( F ) A afirmativa é falsa. O período é uma unidade textual composta por uma ou mais orações. Quando um período possui apenas uma oração, é considerado um período simples. Por outro lado, um período composto é aquele que possui mais de uma oração, podendo essas orações estarem conectadas por meio de coordenação ou subordinação."
    },
    {
      "question": "8. (FGV-2014 - Nível Superior)<br/>\"Um meio de fazer justiça social e favorecer esse tipo de imposto\"<br/>Assinale a opção que indica a forma correta de reescrever-se a segunda oração desse período, transformando-a em frase nominal.",
      "options": [
        "A - Que se favoreça esse tipo de imposto.",
        "B - O favorecimento desse tipo de imposto.",
        "C - O favor desse tipo de imposto.",
        "D - Que se favorecesse esse tipo de imposto.",
        "E - Que favoreçam esse tipo de imposto."
      ],
      "correct": 1,
      "explanation": "GABARITO 8 B<br/>Uma oração é caracterizada como uma frase que contém um verbo, podendo ser chamada, também, de frase verbal. Então, a frase que não tem verbo será denominada frase nominal.<br/>Sendo assim, a questão pede que uma frase verbal seja transformada em frase nominal.<br/>Para reescrever a frase verbal \"favorecer esse tipo de imposto\" como uma frase nominal é necessário transformar o verbo \"favorecer\" em substantivo (favorecimento).<br/>Por isso, temos a alternativa B como correta. As alternativas A, D e E estão incorretas justamente por apresentarem verbos em suas composições. Confira:<br/>a) INCORRETA | \"Que se favoreça esse tipo de imposto.\"<br/>b) CORRETA | \"O favorecimento desse tipo de imposto.\"<br/>c) INCORRETA | A alternativa C (\"O favor desse tipo de imposto\") não apresenta uma reescrita adequada para o excerto sinalizado no enunciado.<br/>d) INCORRETA | \"Que se favorecesse esse tipo de imposto.\"<br/>e) INCORRETA | \"Que favoreçam esse tipo de imposto.\""
    },
    {
      "question": "9. (CPCON-2023- Nível Médio)<br/>Selecione a proposição com uma análise correta das relações sintáticas, semânticas e pragmáticas de: \"O cenário bem diferente do atual existiu antes (e até após) da separação dos continentes da América do Sul e África.\"<br/>I - A estrutura linguística exposta é uma frase, por ter significação e função de ato comunicativo.<br/>II - A estrutura linguística exposta corresponde a um período do tipo composto, dado seu arranjo sintático.<br/>III - A estrutura linguística exposta corresponde a um período composto, porque é uma frase e apresenta três orações.<br/>IV - A estrutura linguística exposta corresponde a um período do tipo simples, porque é uma frase e apresenta uma oração.<br/>É CORRETO o que se afirma apenas em:",
      "options": [
        "A - I.",
        "B - II e III.",
        "C - I e IV.",
        "D - I, II e IV.",
        "E - I, III e IV."
      ],
      "correct": 2,
      "explanation": "GABARITO 9 C<br/>I. CORRETA | Nem toda frase é uma oração, mas toda oração é uma frase. Além disso, lembremos que uma frase pode ser definida como uma expressão linguística que transmite uma mensagem completa, englobando pensamentos, sentimentos, instruções, solicitações ou qualquer outro sentido que seja claramente transmitido e compreendido.<br/>II. INCORRETA | Note que temos apenas um verbo (\"existiu\"), então temos apenas uma oração. Isso significa que o período é simples, não composto.<br/>III. INCORRETA | O período possui apenas um verbo, ou seja, uma oração (não três orações), o que corresponde a um período simples, não composto.<br/>IV. CORRETA | O item IV resume o que já vimos nos itens anteriores."
    },
    {
      "question": "10. (Português com Leticia)<br/>Marque a alternativa que contenha uma frase nominal.",
      "options": [
        "A - Preço do combustível sobe.",
        "B - Nova queda do dólar.",
        "C - Ações da empresa despencam.",
        "D - Cai a cotação do trigo.",
        "E - Petróleo registra nova alta."
      ],
      "correct": 1,
      "explanation": "GABARITO 10 B<br/>a) INCORRETA | Frase verbal, pois contém verbo (\"sobe\").<br/>b) CORRETA | Frase nominal, ou seja, sem a presença de verbos.<br/>c) INCORRETA | Frase verbal, pois contém verbo (\"despencam\").<br/>d) INCORRETA | Frase verbal, pois contém verbo (\"cai\").<br/>e) INCORRETA | Frase verbal, pois contém verbo (\"registra\")."
    },
    {
      "question": "1. (Português com Leticia)<br/>Marque a alternativa que contenha uma frase nominal.",
      "options": [
        "A - Esse caminho é perigoso.",
        "B - Bolsas despencam, e dólar sobe.",
        "C - Não há problemas.",
        "D - Tragédia completa um ano.",
        "E - A volta de doenças perigosas."
      ],
      "correct": 4,
      "explanation": "GABARITO 1 E<br/>a) INCORRETA | Frase verbal, pois contém verbo (“é”).<br/>b) INCORRETA | Frase verbal, pois contém verbos (“despencam” e “sobe”).<br/>c) INCORRETA | Frase verbal, pois contém verbo (“há”).<br/>d) INCORRETA | Frase verbal, pois contém verbo (“completa”).<br/>e) CORRETA | Frase nominal, ou seja, sem a presença de verbos."
    },
    {
      "question": "2. (Português com Leticia)<br/>Leia as seguintes sentenças e, em seguida, marque a alternativa correta.<br/>I. As crianças continuam ingerindo uma grande quantidade de açúcar.<br/>II. Nem sempre o doce é o vilão das dietas.<br/>III. Aumenta o número de crianças obesas, e pais devem estar atentos.",
      "options": [
        "A - A frase I é um período composto por possuir duas orações.",
        "B - A frase II é um período simples, uma vez que possui apenas uma oração.",
        "C - A frase III é um período composto por três orações.",
        "D - A sentença II traz uma frase nominal.",
        "E - A sentença III traz um período simples."
      ],
      "correct": 1,
      "explanation": "GABARITO 2 B<br/>I. Período simples (possui uma oração): há apenas uma locução verbal (\"continuam ingerindo\").<br/>II. Período simples (possui por uma oração): há apenas um verbo (\"é\").<br/>III. Período composto (possui duas orações): há um verbo na primeira oração (\"aumenta\"), e uma locução verbal na segunda oração (\"devem estar\")."
    },
    {
      "question": "3. (FUNDATEC-2019 - Nível Médio)<br/>Quantas orações compõem o período a seguir?<br/>\"Declaramos clara e inequivocamente que o planeta Terra está enfrentando uma emergência climática\", afirmou uma declaração chamada \"Emergência Climática\" feita por mais de 11 mil cientistas do mundo.\"",
      "options": [
        "A - 2.",
        "B - 3.",
        "C - 4.",
        "D - 5.",
        "E - 6."
      ],
      "correct": 3,
      "explanation": "GABARITO 3 D<br/>O trecho apresenta cinco orações. Separamos as orações e destacamos os verbos. Lembrando que cada oração possui um verbo ou locução verbal:<br/>1ª: Declaramos clara e inequivocamente;<br/>2ª: que o planeta está enfrentando uma emergência climática;<br/>3ª: afirmou uma declaração;<br/>4ª: chamada \"Emergência Climática\";<br/>5ª: feita por mais de 11 mil cientistas do mundo."
    },
    {
      "question": "4. (Português com Leticia)<br/>Leia a seguinte manchete: \"Peixe-agulha salta da água e fica cravado no pescoço de menino que viajava em barco.\"<br/>Sobre a manchete, pode-se afirmar que:",
      "options": [
        "A - trata-se de uma frase nominal.",
        "B - transmite ao leitor a informação por meio de uma única oração.",
        "C - é um período composto por três orações.",
        "D - é um período simples.",
        "E - é um período composto por duas orações."
      ],
      "correct": 2,
      "explanation": "GABARITO 4 C<br/>A manchete em questão apresenta três orações:<br/>1ª: Peixe-agulha salta da água;<br/>2ª: e fica cravado no pescoço de menino;<br/>3ª: que viajava em barco."
    },
    {
      "question": "5. (Português com Leticia)<br/>Julgue as afirmações a seguir, colocando V para as verdadeiras e F para as falsas. Em seguida, assinale a alternativa que apresenta a sequência correta.<br/>( ) A frase é um enunciado de sentido completo.<br/>( ) A frase pode ou não conter verbo.<br/>( ) A oração pode ou não conter verbo.<br/>( ) O período simples é formado por apenas uma oração.",
      "options": [
        "A - V-V-F-V",
        "B - V-V-V-F",
        "C - F-V-F-V",
        "D - V-F-F-V",
        "E - F-F-V-V"
      ],
      "correct": 0,
      "explanation": "GABARITO 5 A<br/>(V) | A frase é um enunciado de sentido completo.<br/>(V) | A frase pode ou não conter verbo.<br/>(F) | É falsa a afirmativa \"A oração pode ou não conter verbo\", uma vez que a oração possui necessariamente um verbo ou locução verbal.<br/>(V) | O período simples é formado por apenas uma oração."
    },
    {
      "question": "6. (Instituto Excelência - 2019 - Nível Médio - adaptada)<br/>Levando-se em consideração os conceitos de frase, oração e período, assinale o período classificado como simples:",
      "options": [
        "A - \"A corrupção que assolou o Brasil, especialmente o Estado do Rio, nos últimos anos provocou imenso prejuízo aos cofres públicos.\"",
        "B - \"Uma das consequências mais perversas deste assalto aos contribuintes é o sucateamento de serviços básicos à população.\"",
        "C - \"Uma das competências do Conselho Estadual de Defesa dos Direitos Humanos (CEDDH) previstas em lei é apurar as denúncias de violações ocorridas no Rio de Janeiro.\"",
        "D - \"Muita gente acredita que esta definição limita-se a casos de agressões por parte de bandidos ou autoridades policiais.\""
      ],
      "correct": 1,
      "explanation": "GABARITO 6 B<br/>O período é uma unidade textual composta por uma ou mais orações. Quando um período possui apenas uma oração, é considerado um período simples. Por outro lado, um período composto é aquele que possui mais de uma oração.<br/>O modo mais simples de identificar quantas orações o período apresenta é identificar o número de verbos (ou locuções verbais).<br/>Observe que apenas a alternativa B apresenta um único verbo:<br/>a) INCORRETA | \"A corrupção que assolou o Brasil, especialmente o Estado do Rio, nos últimos anos provocou imenso prejuízo aos cofres públicos.\"<br/>b) CORRETA | \"Uma das consequências mais perversas deste assalto aos contribuintes é o sucateamento de serviços básicos à população.\"<br/>c) INCORRETA | \"Uma das competências do Conselho Estadual de Defesa dos Direitos Humanos (CEDDH) previstas em lei é apurar as denúncias de violações ocorridas no Rio de Janeiro.\"<br/>d) INCORRETA | \"Muita gente acredita que esta definição limita-se a casos de agressões por parte de bandidos ou autoridades policiais.\""
    },
    {
      "question": "7. (IBFC-2022 - Nível Fundamental)<br/>Analise as afirmativas abaixo e dê valores Verdadeiro (V) ou Falso (F).<br/>( ) FRASE é todo enunciado linguístico capaz de estabelecer um processo de comunicação, ou seja, é todo enunciado que possui sentido completo.<br/>( ) ORAÇÃO é toda estrutura linguística centrada em um verbo ou uma locução verbal.<br/>( ) PERÍODO é a frase formada por apenas uma oração.<br/>Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
      "options": [
        "A - F - V - V.",
        "B - V - V - V.",
        "C - F - F - F.",
        "D - V - V - F."
      ],
      "correct": 3,
      "explanation": "GABARITO 7 D<br/>( V ) A afirmativa é verdadeira. Em termos mais simples, uma frase pode ser definida como uma declaração completa e compreensível, capaz de expressar ideias, emoções, ordens ou qualquer outro significado que seja plenamente comunicado e entendido.<br/>( V ) A afirmativa é verdadeira. A oração é caracterizada como uma frase que contém um verbo. É justamente essa presença do verbo que a distingue das demais frases. Por isso, dizemos que nem toda frase pode ser considerada uma oração. Além disso, a frase que não tem verbo é denominada frase nominal.<br/>( F ) A afirmativa é falsa. O período é uma unidade textual composta por uma ou mais orações. Quando um período possui apenas uma oração, é considerado um período simples. Por outro lado, um período composto é aquele que possui mais de uma oração, podendo essas orações estarem conectadas por meio de coordenação ou subordinação."
    },
    {
      "question": "8. (FGV-2014 - Nível Superior)<br/>\"Um meio de fazer justiça social e favorecer esse tipo de imposto\"<br/>Assinale a opção que indica a forma correta de reescrever-se a segunda oração desse período, transformando-a em frase nominal.",
      "options": [
        "A - Que se favoreça esse tipo de imposto.",
        "B - O favorecimento desse tipo de imposto.",
        "C - O favor desse tipo de imposto.",
        "D - Que se favorecesse esse tipo de imposto.",
        "E - Que favoreçam esse tipo de imposto."
      ],
      "correct": 1,
      "explanation": "GABARITO 8 B<br/>Uma oração é caracterizada como uma frase que contém um verbo, podendo ser chamada, também, de frase verbal. Então, a frase que não tem verbo será denominada frase nominal.<br/>Sendo assim, a questão pede que uma frase verbal seja transformada em frase nominal.<br/>Para reescrever a frase verbal \"favorecer esse tipo de imposto\" como uma frase nominal é necessário transformar o verbo \"favorecer\" em substantivo (favorecimento).<br/>Por isso, temos a alternativa B como correta. As alternativas A, D e E estão incorretas justamente por apresentarem verbos em suas composições. Confira:<br/>a) INCORRETA | \"Que se favoreça esse tipo de imposto.\"<br/>b) CORRETA | \"O favorecimento desse tipo de imposto.\"<br/>c) INCORRETA | A alternativa C (\"O favor desse tipo de imposto\") não apresenta uma reescrita adequada para o excerto sinalizado no enunciado.<br/>d) INCORRETA | \"Que se favorecesse esse tipo de imposto.\"<br/>e) INCORRETA | \"Que favoreçam esse tipo de imposto.\""
    },
    {
      "question": "9. (CPCON-2023- Nível Médio)<br/>Selecione a proposição com uma análise correta das relações sintáticas, semânticas e pragmáticas de: \"O cenário bem diferente do atual existiu antes (e até após) da separação dos continentes da América do Sul e África.\"<br/>I - A estrutura linguística exposta é uma frase, por ter significação e função de ato comunicativo.<br/>II - A estrutura linguística exposta corresponde a um período do tipo composto, dado seu arranjo sintático.<br/>III - A estrutura linguística exposta corresponde a um período composto, porque é uma frase e apresenta três orações.<br/>IV - A estrutura linguística exposta corresponde a um período do tipo simples, porque é uma frase e apresenta uma oração.<br/>É CORRETO o que se afirma apenas em:",
      "options": [
        "A - I.",
        "B - II e III.",
        "C - I e IV.",
        "D - I, II e IV.",
        "E - I, III e IV."
      ],
      "correct": 2,
      "explanation": "GABARITO 9 C<br/>I. CORRETA | Nem toda frase é uma oração, mas toda oração é uma frase. Além disso, lembremos que uma frase pode ser definida como uma expressão linguística que transmite uma mensagem completa, englobando pensamentos, sentimentos, instruções, solicitações ou qualquer outro sentido que seja claramente transmitido e compreendido.<br/>II. INCORRETA | Note que temos apenas um verbo (\"existiu\"), então temos apenas uma oração. Isso significa que o período é simples, não composto.<br/>III. INCORRETA | O período possui apenas um verbo, ou seja, uma oração (não três orações), o que corresponde a um período simples, não composto.<br/>IV. CORRETA | O item IV resume o que já vimos nos itens anteriores."
    },
    {
      "question": "10. (Português com Leticia)<br/>Marque a alternativa que contenha uma frase nominal.",
      "options": [
        "A - Preço do combustível sobe.",
        "B - Nova queda do dólar.",
        "C - Ações da empresa despencam.",
        "D - Cai a cotação do trigo.",
        "E - Petróleo registra nova alta."
      ],
      "correct": 1,
      "explanation": "GABARITO 10 B<br/>a) INCORRETA | Frase verbal, pois contém verbo (\"sobe\").<br/>b) CORRETA | Frase nominal, ou seja, sem a presença de verbos.<br/>c) INCORRETA | Frase verbal, pois contém verbo (\"despencam\").<br/>d) INCORRETA | Frase verbal, pois contém verbo (\"cai\").<br/>e) INCORRETA | Frase verbal, pois contém verbo (\"registra\")."
    },
  ,{
    "question": "1. <br/>Marque a alternativa que contenha uma frase nominal.",
    "options": [
      "A - Esse caminho é perigoso.",
      "B - Bolsas despencam, e dólar sobe.",
      "C - Não há problemas.",
      "D - Tragédia completa um ano.",
      "E - A volta de doenças perigosas."
    ],
    "correct": 4,
    "explanation": "GABARITO 1 E<br/>a) INCORRETA | Frase verbal, pois contém verbo (“é”).<br/>b) INCORRETA | Frase verbal, pois contém verbos (“despencam” e “sobe”).<br/>c) INCORRETA | Frase verbal, pois contém verbo (“há”).<br/>d) INCORRETA | Frase verbal, pois contém verbo (“completa”).<br/>e) CORRETA | Frase nominal, ou seja, sem a presença de verbos."
  },
  {
    "question": "2. <br/>Leia as seguintes sentenças e, em seguida, marque a alternativa correta.<br/>I. As crianças continuam ingerindo uma grande quantidade de açúcar.<br/>II. Nem sempre o doce é o vilão das dietas.<br/>III. Aumenta o número de crianças obesas, e pais devem estar atentos.",
    "options": [
      "A - A frase I é um período composto por possuir duas orações.",
      "B - A frase II é um período simples, uma vez que possui apenas uma oração.",
      "C - A frase III é um período composto por três orações.",
      "D - A sentença II traz uma frase nominal.",
      "E - A sentença III traz um período simples."
    ],
    "correct": 1,
    "explanation": "GABARITO 2 B<br/>I. Período simples (possui uma oração): há apenas uma locução verbal (“continuam ingerindo”).<br/>II. Período simples (possui por uma oração): há apenas um verbo (“é”).<br/>III. Período composto (possui duas orações): há um verbo na primeira oração (“aumenta”), e uma locução verbal na segunda oração (“devem estar”)."
  },
  {
    "question": "3. (FUNDATEC - 2019 - Nível Médio)<br/>Quantas orações compõem o período a seguir?<br/>“Declaramos clara e inequivocamente que o planeta Terra está enfrentando uma emergência climática”, afirmou uma declaração chamada “Emergência Climática” feita por mais de 11 mil cientistas do mundo.”",
    "options": [
      "A - 2.",
      "B - 3.",
      "C - 4.",
      "D - 5.",
      "E - 6."
    ],
    "correct": 3,
    "explanation": "GABARITO 3 D<br/>O trecho apresenta cinco orações. Separamos as orações e destacamos os verbos. Lembrando que cada oração possui um verbo ou locução verbal:<br/>1ª: Declaramos clara e inequivocamente;<br/>2ª: que o planeta está enfrentando uma emergência climática;<br/>3ª: afirmou uma declaração;<br/>4ª: chamada “Emergência Climática”;<br/>5ª: feita por mais de 11 mil cientistas do mundo."
  },
  {
    "question": "4. <br/>Leia a seguinte manchete: “Peixe-agulha salta da água e fica cravado no pescoço de menino que viajava em barco.”<br/>Sobre a manchete, pode-se afirmar que:",
    "options": [
      "A - trata-se de uma frase nominal.",
      "B - transmite ao leitor a informação por meio de uma única oração.",
      "C - é um período composto por três orações.",
      "D - é um período simples.",
      "E - é um período composto por duas orações."
    ],
    "correct": 2,
    "explanation": "GABARITO 4 C<br/>A manchete em questão apresenta três orações:<br/>1ª: Peixe-agulha salta da água;<br/>2ª: e fica cravado no pescoço de menino;<br/>3ª: que viajava em barco."
  },
  {
    "question": "5. <br/>Julgue as afirmações a seguir, colocando V para as verdadeiras e F para as falsas. Em seguida, assinale a alternativa que apresenta a sequência correta.<br/>( ) A frase é um enunciado de sentido completo.<br/>( ) A frase pode ou não conter verbo.<br/>( ) A oração pode ou não conter verbo.<br/>( ) O período simples é formado por apenas uma oração.",
    "options": [
      "A - V - V - F - V",
      "B - V - V - V – F",
      "C - F - V - F – V",
      "D - V - F - F – V",
      "E - F - F - V - V"
    ],
    "correct": 0,
    "explanation": "GABARITO 5 A<br/>( v ) | A frase é um enunciado de sentido completo.<br/>( v ) | A frase pode ou não conter verbo.<br/>( f ) | É falsa a afirmativa “A oração pode ou não conter verbo”, uma vez que a oração possui necessariamente um verbo ou locução verbal.<br/>( v ) | O período simples é formado por apenas uma oração."
  },
  {
    "question": "6. (Instituto Excelência - 2019 – Nível Médio – adaptada)<br/>Levando-se em consideração os conceitos de frase, oração e período, assinale o período classificado como simples:",
    "options": [
      "A - “A corrupção que assolou o Brasil, especialmente o Estado do Rio, nos últimos anos provocou imenso prejuízo aos cofres públicos.”",
      "B - “Uma das consequências mais perversas deste assalto aos contribuintes é o sucateamento de serviços básicos à população.”",
      "C - “Uma das competências do Conselho Estadual de Defesa dos Direitos Humanos (CEDDH) previstas em lei é apurar as denúncias de violações ocorridas no Rio de Janeiro.”",
      "D - “Muita gente acredita que esta definição limita-se a casos de agressões por parte de bandidos ou autoridades policiais.”"
    ],
    "correct": 1,
    "explanation": "GABARITO 6 B<br/>O período é uma unidade textual composta por uma ou mais orações. Quando um período possui apenas uma oração, é considerado um período simples. Por outro lado, um período composto é aquele que possui mais de uma oração.<br/>O modo mais simples de identificar quantas orações o período apresenta é identificar o número de verbos (ou locuções verbais).<br/>Observe que apenas a alternativa B apresenta um único verbo:<br/>a) INCORRETA |“A corrupção que assolou o Brasil, especialmente o Estado do Rio, nos últimos anos provocou imenso prejuízo aos cofres públicos.”<br/>b) CORRETA | “Uma das consequências mais perversas deste assalto aos contribuintes é o sucateamento de serviços básicos à população.”<br/>c) INCORRETA | “Uma das competências do Conselho Estadual de Defesa dos Direitos Humanos (CEDDH) previstas em lei é apurar as denúncias de violações ocorridas no Rio de Janeiro.”<br/>d) INCORRETA | “Muita gente acredita que esta definição limita-se a casos de agressões por parte de bandidos ou autoridades policiais.”"
  },
  {
    "question": "7. (IBFC - 2022 – Nível Fundamental)<br/>Analise as afirmativas abaixo e dê valores Verdadeiro (V) ou Falso (F).<br/>( ) FRASE é todo enunciado linguístico capaz de estabelecer um processo de comunicação, ou seja, é todo enunciado que possui sentido completo.<br/>( ) ORAÇÃO é toda estrutura linguística centrada em um verbo ou uma locução verbal.<br/>( ) PERÍODO é a frase formada por apenas uma oração.<br/>Assinale a alternativa que apresenta a sequência correta de cima para baixo.",
    "options": [
      "A - F - V - V.",
      "B - V - V - V.",
      "C - F - F - F.",
      "D - V - V - F."
    ],
    "correct": 3,
    "explanation": "GABARITO 7 D<br/>( v ) A afirmativa é verdadeira. Em termos mais simples, uma frase pode ser definida como uma declaração completa e compreensível, capaz de expressar ideias, emoções, ordens ou qualquer outro significado que seja plenamente comunicado e entendido.<br/>( v ) A afirmativa é verdadeira. A oração é caracterizada como uma frase que contém um verbo. É justamente essa presença do verbo que a distingue das demais frases. Por isso, dizemos que nem toda frase pode ser considerada uma oração. Além disso, a frase que não tem verbo é denominada frase nominal.<br/>( f ) A afirmativa é falsa. O período é uma unidade textual composta por uma ou mais orações. Quando um período possui apenas uma oração, é considerado um período simples. Por outro lado, um período composto é aquele que possui mais de uma oração, podendo essas orações estarem conectadas por meio de coordenação ou subordinação."
  },
  {
    "question": "8. (FGV - 2014 – Nível Superior)<br/>“Um meio de fazer justiça social e favorecer esse tipo de imposto”<br/>Assinale a opção que indica a forma correta de reescrever-se a segunda oração desse período, transformando-a em frase nominal.",
    "options": [
      "A - Que se favoreça esse tipo de imposto.",
      "B - O favorecimento desse tipo de imposto.",
      "C - O favor desse tipo de imposto.",
      "D - Que se favorecesse esse tipo de imposto.",
      "E - Que favoreçam esse tipo de imposto."
    ],
    "correct": 1,
    "explanation": "GABARITO 8 B<br/>Uma oração é caracterizada como uma frase que contém um verbo, podendo ser chamada, também, de frase verbal. Então, a frase que não tem verbo será denominada frase nominal.<br/>Sendo assim, a questão pede que uma frase verbal seja transformada em frase nominal.<br/>Para reescrever a frase verbal “favorecer esse tipo de imposto” como uma frase nominal é necessário transformar o verbo “favorecer” em substantivo (favorecimento).<br/>Por isso, temos a alternativa B como correta. As alternativas A, D e E estão incorretas justamente por apresentarem verbos em suas composições. Confira:<br/>a) INCORRETA | “Que se favoreça esse tipo de imposto.”<br/>b) CORRETA. “O favorecimento desse tipo de imposto.”<br/>c) INCORRETA | A alternativa C (“O favor desse tipo de imposto”) não apresenta uma reescrita adequada para o excerto sinalizado no enunciado.<br/>d) INCORRETA | “Que se favorecesse esse tipo de imposto.”<br/>e) INCORRETA | “Que favoreçam esse tipo de imposto.”"
  },
  {
    "question": "9. (CPCON - 2023 – Nível Médio)<br/>Selecione a proposição com uma análise correta das relações sintáticas, semânticas e pragmáticas de: “O cenário bem diferente do atual existiu antes (e até após) da separação dos continentes da América do Sul e África.”<br/>I- A estrutura linguística exposta é uma frase, por ter significação e função de ato comunicativo.<br/>II - A estrutura linguística exposta corresponde a um período do tipo composto, dado seu arranjo sintático.<br/>III - A estrutura linguística exposta corresponde a um período composto, porque é uma frase e apresenta três orações.<br/>IV - A estrutura linguística exposta corresponde a um período do tipo simples, porque é uma frase e apresenta uma oração.<br/>É CORRETO o que se afirma apenas em:",
    "options": [
      "A - I.",
      "B - II e III.",
      "C - I e IV.",
      "D - I, II e IV.",
      "E - I, III e IV."
    ],
    "correct": 2,
    "explanation": "GABARITO 9 C<br/>I. CORRETA | Nem toda frase é uma oração, mas toda oração é uma frase. Além disso, lembremos que uma frase pode ser definida como uma expressão linguística que transmite uma mensagem completa, englobando pensamentos, sentimentos, instruções, solicitações ou qualquer outro sentido que seja claramente transmitido e compreendido.<br/>II. INCORRETA | Note que temos apenas um verbo (“existiu”), então temos apenas uma oração. Isso significa que o período é simples, não composto.<br/>III. INCORRETA | O período possui apenas um verbo, ou seja, uma oração (não três orações), o que corresponde a um período simples, não composto.<br/>IV. CORRETA | O item IV resume o que já vimos nos itens anteriores."
  },
  {
    "question": "10. <br/>Marque a alternativa que contenha uma frase nominal.",
    "options": [
      "A - Preço do combustível sobe.",
      "B - Nova queda do dólar.",
      "C - Ações da empresa despencam.",
      "D - Cai a cotação do trigo.",
      "E - Petróleo registra nova alta."
    ],
    "correct": 1,
    "explanation": "GABARITO 10 B<br/>a) INCORRETA | Frase verbal, pois contém verbo (“sobe”).<br/>b) CORRETA | Frase nominal, ou seja, sem a presença de verbos.<br/>c) INCORRETA | Frase verbal, pois contém verbo (“despencam”).<br/>d) INCORRETA | Frase verbal, pois contém verbo (“cai”).<br/>e) INCORRETA | Frase verbal, pois contém verbo (“registra”)."
  }
],
  },


    }
  },
  matematica: {
    label: 'Matemática', icon: '＋', color: 'blue',
    topics: {
      operacoes: { title: 'Operações básicas', icon: '＋', questions: [
        { question: 'Qual é o resultado de 24 ÷ 6 + 3 × 2?', options: ['A - 14', 'B - 10', 'C - 11', 'D - 18'], correct: 1, explanation: 'Multiplicação e divisão são feitas antes da adição: 24 ÷ 6 = 4 e 3 × 2 = 6. Então, 4 + 6 = 10.' },
        { question: 'Uma turma tem 28 alunos. Se 7 faltaram, quantos compareceram?', options: ['A - 19', 'B - 20', 'C - 21', 'D - 22'], correct: 2, explanation: 'Subtraindo os ausentes do total: 28 − 7 = 21 alunos.' }
      ]},
      fracoes: { title: 'Frações', icon: '½', questions: [
        { question: 'Quanto é 1/2 + 1/4?', options: ['A - 2/6', 'B - 3/4', 'C - 1/6', 'D - 2/4'], correct: 1, explanation: 'Transforme 1/2 em 2/4. Assim, 2/4 + 1/4 = 3/4.' },
        { question: 'Qual fração representa a metade de 18?', options: ['A - 1/2 de 18 = 9', 'B - 1/3 de 18 = 9', 'C - 1/2 de 18 = 8', 'D - 1/4 de 18 = 9'], correct: 0, explanation: 'Metade corresponde a dividir por 2: 18 ÷ 2 = 9.' }
      ]},
      porcentagem: { title: 'Porcentagem', icon: '%', questions: [
        { question: 'Quanto é 20% de 150?', options: ['A - 20', 'B - 25', 'C - 30', 'D - 35'], correct: 2, explanation: '20% = 0,20. Então 0,20 × 150 = 30.' },
        { question: 'Um produto de R$ 80 teve desconto de 25%. Qual o valor do desconto?', options: ['A - R$ 15', 'B - R$ 20', 'C - R$ 25', 'D - R$ 60'], correct: 1, explanation: '25% é um quarto. Um quarto de R$ 80 é R$ 20.' }
      ]}
    }
  },

};

const codigo_posturas = {
  disposicoes_preliminares: {
    title: 'Disposições Preliminares',
    questions: [
      {
        question: 'Qual é o objetivo principal do Código de Posturas de Contagem, conforme o art. 1º?',
        options: [
          'A - Regulamentar exclusivamente o trânsito de veículos no Município.',
          'B - Definir regras para atividades que possam causar repercussões urbanísticas no espaço público, em compatibilidade com o Plano Diretor.',
          'C - Substituir todas as normas municipais sobre obras e meio ambiente.',
          'D - Disciplinar somente atividades exercidas em propriedades privadas.'
        ],
        correct: 1,
        explanation: 'O art. 1º institui o Código para definir regras aplicáveis a atividades com possíveis repercussões urbanísticas no espaço público, em compatibilidade com o Plano Diretor (Lei Complementar nº 362/2023).'
      },
      {
        question: 'Qual alternativa descreve corretamente o espaço público e os conceitos definidos nos §§ 1º e 4º do art. 1º?',
        options: [
          'A - O espaço público inclui logradouros e espaços aéreo, visual e sonoro; espaço visual reúne elementos visíveis a partir do logradouro.',
          'B - O espaço visual é formado por emissões sonoras, e o espaço sonoro por elementos visíveis.',
          'C - O espaço aéreo fica abaixo do solo e não possui limites definidos pela legislação urbanística.',
          'D - Somente os logradouros são considerados espaço público para os fins do Código.'
        ],
        correct: 0,
        explanation: 'O § 1º inclui no espaço público os logradouros e os espaços aéreo, visual e sonoro. Pelo § 4º, espaço aéreo é a faixa acima do logradouro até os limites da legislação urbanística; espaço visual reúne elementos visíveis a partir dele; e espaço sonoro reúne emissões sonoras perceptíveis a partir dele.'
      },
      {
        question: 'Segundo o art. 1º, § 3º, qual alternativa reúne apenas elementos que compõem um logradouro público?',
        options: [
          'A - Calçada, canteiro central e pista de rolamento; passagens exclusivas para pedestres e ciclistas; praças.',
          'B - Calçadas, estacionamentos privados restritos e pátios de empresas.',
          'C - Apenas pistas de rolamento e estacionamentos de uso exclusivo.',
          'D - Espaços aéreos, fachadas privadas e áreas internas de edifícios.'
        ],
        correct: 0,
        explanation: 'O § 3º define logradouro público como o conjunto da calçada, do canteiro central e da pista de rolamento nas vias públicas, além das passagens de uso exclusivo de pedestres e ciclistas e das praças.'
      },
      {
        question: 'Qual afirmação está de acordo com o alcance e as exceções previstos no art. 1º?',
        options: [
          'A - O Código também se aplica à zona rural, no que couber, e não abrange matérias como trânsito, vigilância sanitária, meio ambiente, limpeza urbana e competência tributária, tratadas em legislação específica.',
          'B - O Código aplica-se integralmente à zona rural e substitui a legislação ambiental e sanitária.',
          'C - O Código regula o trânsito de veículos, mas não se aplica a atividades em espaço público.',
          'D - A execução de qualquer obra em logradouro público está excluída, inclusive obras de infraestrutura.'
        ],
        correct: 0,
        explanation: 'O § 2º exclui matérias sujeitas a legislação específica, incluindo trânsito, vigilância sanitária, matéria ambiental, limpeza urbana, obras (com ressalva para infraestrutura em logradouro público) e competência tributária. O § 5º estende a aplicação à zona rural no que couber.'
      },
      {
        question: 'Qual afirmação descreve corretamente os espaços equiparados a logradouros públicos pelo art. 2º?',
        options: [
          'A - Apenas parques e jardins públicos, sem qualquer outra hipótese.',
          'B - Espaços livres de uso público, parques e jardins públicos, certos estacionamentos e áreas de recuo, e monumentos municipais de livre acesso, observadas as condições legais.',
          'C - Todos os estacionamentos privados, inclusive os de uso exclusivo de funcionários ou condôminos.',
          'D - Qualquer propriedade privada, mesmo sem acesso livre à comunidade.'
        ],
        correct: 1,
        explanation: 'O art. 2º equipara, para os fins do Código, espaços livres de uso público, parques e jardins públicos, hipóteses especificadas de estacionamentos e áreas de recuo, e monumentos municipais com entorno de livre acesso à comunidade. Estacionamentos de uso restrito ou exclusivo não são abrangidos. A autoridade competente pode atribuir destinação temporária diversa por ato motivado, inclusive para eventos ou atividades econômicas móveis devidamente licenciadas.'
      },
      {
        question: 'Qual alternativa apresenta um princípio norteador previsto no art. 3º?',
        options: [
          'A - Prioridade permanente para atividades comerciais, ainda que impeçam a circulação.',
          'B - Destinação prioritária dos logradouros à circulação de pessoas e veículos e convivência equilibrada entre usuários do espaço público.',
          'C - Proibição de ações preventivas e de orientação aos cidadãos.',
          'D - Exclusão da função social da cidade e da propriedade.'
        ],
        correct: 1,
        explanation: 'O art. 3º prevê, entre outros princípios, a prioridade da circulação de pessoas e veículos, a convivência equilibrada, o controle proporcional de atividades prejudiciais, ações preventivas e de orientação, a função social da cidade e da propriedade e a proteção integral de crianças e adolescentes.'
      },
      {
        question: 'Ao analisar autorização, permissão, concessão ou licença para uso do espaço público, quais critérios territoriais devem ser observados, conforme o art. 4º?',
        options: [
          'A - Somente a conveniência do interessado.',
          'B - A compatibilidade com a zona de uso, as diretrizes territoriais do Plano Diretor e as demais normas urbanísticas municipais.',
          'C - Apenas a disponibilidade de vagas para estacionamento.',
          'D - Exclusivamente a legislação tributária federal.'
        ],
        correct: 1,
        explanation: 'O art. 4º exige compatibilidade com a zona de uso, com as diretrizes territoriais do Plano Diretor e com as demais normas urbanísticas. Regulamentos só podem admitir usos compatíveis com as características urbanísticas, ambientais, históricas e funcionais da área. Sem previsão expressa de compatibilidade, a verificação e a decisão cabem ao COMPUR.'
      },
      {
        question: 'Quando a utilização do espaço público restringe seu uso regular e livre, qual regra geral estabelece o art. 5º?',
        options: [
          'A - A utilização pode ocorrer sem qualquer ato da Administração Municipal.',
          'B - É necessária licença, concessão, permissão ou autorização da Administração Municipal, conforme a Lei Complementar.',
          'C - O silêncio da Administração sempre equivale à aprovação tácita.',
          'D - A circulação de pedestres pode ser restringida sem justificativa.'
        ],
        correct: 1,
        explanation: 'O art. 5º condiciona o uso que restrinja a utilização regular e livre do espaço público a licença, concessão, permissão ou autorização. Uso regular e livre inclui a circulação de pedestres e veículos nos logradouros e espaços equiparados, bem como as finalidades para as quais esses espaços foram concebidos.'
      },
      {
        question: 'Sobre o indeferimento de um pedido e a renovação de licença ou permissão, assinale a alternativa correta.',
        options: [
          'A - O recurso contra qualquer indeferimento tem prazo de 30 dias e sempre efeito suspensivo.',
          'B - O indeferimento deve ser claro e fundamentado; em regra, cabe recurso administrativo em 15 dias, sem efeito suspensivo.',
          'C - A falta de resposta no prazo legal aprova automaticamente o pedido.',
          'D - Em renovação, o recurso nunca pode ter efeito suspensivo, mesmo após atividade regular e ininterrupta por 24 meses.'
        ],
        correct: 1,
        explanation: 'O § 2º do art. 5º prevê justificativa clara e fundamentada e recurso administrativo em 15 dias da ciência, em regra sem efeito suspensivo. O silêncio não configura aprovação tácita (§ 3º). Na renovação de licença ou permissão de atividade regular e ininterrupta por pelo menos 24 meses, o recurso contra decisão denegatória tem efeito suspensivo até a decisão final, salvo as exceções legais de impossibilidade fática, violação à saúde pública ou risco de dano ambiental (§ 4º).'
      },
      {
        question: 'Qual alternativa distingue corretamente os atos de admissão de uso do espaço público definidos no art. 6º?',
        options: [
          'A - Concessão é sempre breve e precária; autorização exige licitação; licença depende de escolha discricionária.',
          'B - Permissão é definitiva e exclusiva; concessão dispensa licitação; autorização é ato vinculado.',
          'C - Concessão é precedida de licitação e pode conferir uso exclusivo ou preferencial por prazo determinado; permissão é discricionária e precária; autorização é unilateral, precária e de curta duração; licença é vinculada ao cumprimento de requisitos normativos.',
          'D - Os quatro atos têm a mesma natureza e podem ser usados indistintamente.'
        ],
        correct: 2,
        explanation: 'O art. 6º diferencia concessão, permissão, autorização e licença por natureza, finalidade e procedimento. A concessão é precedida de licitação; a permissão é discricionária e precária; a autorização é unilateral, precária e de curta duração; e a licença é ato vinculado ao cumprimento de requisitos normativos. Os parágrafos ainda preveem autorização legislativa para concessão que envolva bem imóvel, formalização e chamamento público nos casos aplicáveis, revogação motivada de permissões e autorizações e tratamento simplificado para atividades de baixo risco, MEIs, economia solidária e comércio popular.'
      }
    ]
  }
};
const contagemSections = {
  ocupacao_solo: {
    label: 'Ocupação do Solo',
    icon: '⌂',
    disciplines: [
      { title: 'Uso e ocupação do solo', description: 'Regras e parâmetros para o uso dos terrenos e das áreas urbanas.' },
      { title: 'Zoneamento urbano', description: 'Organização dos usos e atividades no território.' },
      { title: 'Parcelamento do solo', description: 'Loteamentos, desmembramentos e organização de lotes.' },
      { title: 'Plano Diretor', description: 'Diretrizes gerais para o desenvolvimento e ordenamento municipal.' }
    ]
  },
  codigo_posturas: {
    label: 'Código de Posturas',
    icon: '§',
    disciplines: [{
      key: 'disposicoes_preliminares',
      title: codigo_posturas.disposicoes_preliminares.title,
      description: 'Capítulo I · 10 questões',
      questions: codigo_posturas.disposicoes_preliminares.questions
    }]
  }
};

const subjectNav = document.querySelector('#subjectNav');
const topicList = document.querySelector('#topicList');
const quizCard = document.querySelector('#quizCard');
let activeDiscipline = 'portugues';
let activeContagemSection = null;
let activeContagemTopicKey = null;
let currentQuestionSubject = '';
let currentListHeading = 'Escolha um assunto';
let activeTopic = null;
let questionIndex = 0;
let answered = false;
let randomMode = false;
let currentQuestions = [];

function renderNavigation() {
  subjectNav.innerHTML = '';
  for (const [key, discipline] of Object.entries(disciplines)) {
    const button = document.createElement('button');
    button.className = `nav-item${!activeContagemSection && key === activeDiscipline ? ' active' : ''}`;
    button.innerHTML = `<span class="nav-icon">${discipline.icon}</span><span>${discipline.label}</span>`;
    button.addEventListener('click', () => selectDiscipline(key));
    subjectNav.append(button);
  }

  const contagemGroup = document.createElement('div');
  contagemGroup.className = 'nav-group';
  const groupButton = document.createElement('button');
  groupButton.className = `nav-item nav-group-toggle${activeContagemSection ? ' active' : ''}`;
  groupButton.type = 'button';
  groupButton.setAttribute('aria-expanded', String(Boolean(activeContagemSection)));
  groupButton.innerHTML = '<span class="nav-icon">⌖</span><span>Contagem</span><span class="nav-chevron">⌄</span>';
  const submenu = document.createElement('div');
  submenu.className = 'nav-submenu';
  submenu.hidden = !activeContagemSection;
  for (const [key, section] of Object.entries(contagemSections)) {
    const item = document.createElement('button');
    item.className = `nav-subitem${key === activeContagemSection ? ' active' : ''}`;
    item.type = 'button';
    item.textContent = section.label;
    item.addEventListener('click', () => selectContagemSection(key));
    submenu.append(item);
  }
  groupButton.addEventListener('click', () => {
    const isExpanded = groupButton.getAttribute('aria-expanded') === 'true';
    groupButton.setAttribute('aria-expanded', String(!isExpanded));
    submenu.hidden = isExpanded;
  });
  contagemGroup.append(groupButton, submenu);
  subjectNav.append(contagemGroup);
}

function showQuestionView() {
  topicList.hidden = true;
  document.querySelector('#topicHeading').hidden = true;
  document.querySelector('#backToTopicsLabel').textContent = currentListHeading;
  document.querySelector('#backToTopics').hidden = false;
}

function showTopicList() {
  randomMode = false;
  document.querySelector('#randomToggle').checked = false;
  quizCard.hidden = true;
  topicList.hidden = false;
  document.querySelector('#topicHeading').hidden = false;
  document.querySelector('#backToTopics').hidden = true;
  document.querySelector('#topicHeading').textContent = currentListHeading;
  document.querySelector('.subjects-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function selectContagemSection(key) {
  const section = contagemSections[key];
  activeContagemSection = key;
  activeContagemTopicKey = null;
  activeDiscipline = null;
  activeTopic = null;
  randomMode = false;
  currentQuestions = [];
  quizCard.hidden = true;
  document.querySelector('#randomToggle').checked = false;
  document.querySelector('.random-switch-label').hidden = true;
  document.querySelector('#topicList').hidden = false;
  document.querySelector('#topicHeading').hidden = false;
  document.querySelector('#backToTopics').hidden = true;
  document.querySelector('#breadcrumb').innerHTML = `Estudo <span>/</span> Contagem <span>/</span> ${section.label}`;
  document.querySelector('#pageTitle').textContent = section.label;
  document.querySelector('#pageIntro').textContent = key === 'codigo_posturas'
    ? 'Selecione o capítulo para praticar as questões.'
    : 'Disciplinas relacionadas para organizar e adicionar suas questões.';
  currentListHeading = key === 'codigo_posturas' ? 'Capítulos disponíveis' : 'Disciplinas relacionadas';
  document.querySelector('#topicHeading').textContent = currentListHeading;
  topicList.innerHTML = section.disciplines.map((discipline, index) => {
    if (discipline.questions) {
      return `<button class="topic-card contagem-question-card" type="button" data-contagem-topic="${discipline.key}">
        <span class="topic-icon">${section.icon}</span>
        <div class="topic-name">${discipline.title}</div>
        <div class="topic-count">${discipline.description}</div>
        <span class="area-index">→</span>
      </button>`;
    }
    return `<article class="topic-card informational-card">
      <span class="topic-icon">${section.icon}</span>
      <div class="topic-name">${discipline.title}</div>
      <div class="topic-count">${discipline.description}</div>
      <span class="area-index">0${index + 1}</span>
    </article>`;
  }).join('');
  topicList.querySelectorAll('[data-contagem-topic]').forEach(button => {
    button.addEventListener('click', () => startContagemTopic(button.dataset.contagemTopic));
  });
  renderNavigation();
  closeMenu();
}

function startContagemTopic(key) {
  const topic = codigo_posturas[key];
  activeContagemTopicKey = key;
  activeTopic = null;
  randomMode = false;
  currentQuestions = topic.questions;
  currentQuestionSubject = topic.title;
  questionIndex = 0;
  answered = false;
  quizCard.hidden = false;
  showQuestionView();
  renderQuestion();
  quizCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function selectDiscipline(key) {
  activeContagemSection = null;
  activeContagemTopicKey = null;
  activeDiscipline = key;
  activeTopic = null;
  quizCard.hidden = true;
  document.querySelector('.random-switch-label').hidden = false;
  document.querySelector('#topicList').hidden = false;
  document.querySelector('#topicHeading').hidden = false;
  document.querySelector('#backToTopics').hidden = true;
  currentListHeading = 'Escolha um assunto';
  document.querySelector('#topicHeading').textContent = currentListHeading;
  document.querySelector('#breadcrumb').innerHTML = `Estudo <span>/</span> ${disciplines[key].label}`;
  document.querySelector('#pageTitle').innerHTML = `Vamos estudar ${disciplines[key].label.toLowerCase()}<span class="title-dot">.</span>`;
  document.querySelector('#pageIntro').textContent = 'Escolha um assunto e pratique com questões rápidas e explicações.';
  renderNavigation();
  renderTopics();
  closeMenu();
  if (randomMode) startRandomQuiz();
}
function renderTopics() {
  topicList.innerHTML = '';
  const topics = disciplines[activeDiscipline].topics;
  for (const [key, topic] of Object.entries(topics)) {
    const button = document.createElement('button');
    button.className = `topic-card${activeTopic === key ? ' selected' : ''}`;
    button.setAttribute('aria-label', `${topic.title}, ${topic.questions.length} questões`);
    button.innerHTML = `<span class="topic-arrow">→</span><span class="topic-icon"></span><div class="topic-name">${topic.title}</div><div class="topic-count">${topic.questions.length} questões para praticar</div>`;
    button.addEventListener('click', () => startTopic(key));
    topicList.append(button);
  }
}

function startTopic(key) {
  randomMode = false;
  document.querySelector('#randomToggle').checked = false;
  activeTopic = key;
  currentQuestions = disciplines[activeDiscipline].topics[key].questions;
  currentQuestionSubject = disciplines[activeDiscipline].topics[key].title;
  questionIndex = 0;
  answered = false;
  renderTopics();
  quizCard.hidden = false;
  showQuestionView();
  renderQuestion();
  quizCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function startRandomQuiz() {
  randomMode = true;
  document.querySelector('#randomToggle').checked = true;
  activeTopic = null;
  currentQuestionSubject = disciplines[activeDiscipline].label;
  currentQuestions = Object.values(disciplines[activeDiscipline].topics).flatMap(topic =>
    topic.questions.map(question => ({ ...question, topicTitle: topic.title }))
  );
  for (let i = currentQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentQuestions[i], currentQuestions[j]] = [currentQuestions[j], currentQuestions[i]];
  }
  questionIndex = 0;
  answered = false;
  quizCard.hidden = false;
  showQuestionView();
  document.querySelector('#questionText').scrollIntoView({ behavior: 'smooth', block: 'center' });
  renderQuestion();
}

function renderQuestion() {
  const question = currentQuestions[questionIndex];
  answered = false;
  document.querySelector('#questionTag').textContent = `QUESTÃO ${String(questionIndex + 1).padStart(2, '0')}`;
  document.querySelector('#subjectTag').textContent = randomMode ? `${question.topicTitle} · ${disciplines[activeDiscipline].label}` : (activeContagemTopicKey ? currentQuestionSubject : disciplines[activeDiscipline].topics[activeTopic].title);
  document.querySelector('#progressLabel').textContent = `${questionIndex + 1} de ${currentQuestions.length}`;
  document.querySelector('#progressFill').style.width = `${((questionIndex + 1) / currentQuestions.length) * 100}%`;
  document.querySelector('#questionText').innerHTML = question.question;
  const options = document.querySelector('#options');
  options.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option';
    button.innerHTML = option;
    button.addEventListener('click', () => chooseAnswer(index));
    options.append(button);
  });
  document.querySelector('#feedback').hidden = true;
  document.querySelector('#previousQuestion').disabled = questionIndex === 0;
  document.querySelector('#nextQuestion').hidden = false;
  document.querySelector('#nextQuestion').textContent = questionIndex === currentQuestions.length - 1 ? 'Concluir →' : 'Avançar →';
}

function chooseAnswer(index) {
  if (answered) return;
  answered = true;
  const question = currentQuestions[questionIndex];
  const buttons = [...document.querySelectorAll('.option')];
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === question.correct) button.classList.add('correct');
    else if (i === index) button.classList.add('incorrect');
  });
  const isCorrect = index === question.correct;
  const feedback = document.querySelector('#feedback');
  feedback.innerHTML = `<strong>${isCorrect ? 'Muito bem! Resposta correta.' : 'Quase! Vamos aprender com essa.'}</strong>${question.explanation}`;
  feedback.hidden = false;
}

document.querySelector('#nextQuestion').addEventListener('click', () => {
  if (questionIndex < currentQuestions.length - 1) {
    questionIndex++;
    renderQuestion();
  } else {
    document.querySelector('#questionText').textContent = 'Assunto concluído. Bom trabalho!';
    document.querySelector('#options').innerHTML = '';
    document.querySelector('#feedback').innerHTML = '<strong>Você chegou ao fim deste assunto.</strong>Continue praticando para fixar o que aprendeu.';
    document.querySelector('#feedback').hidden = false;
    document.querySelector('#nextQuestion').hidden = true;
    document.querySelector('#progressFill').style.width = '100%';
  }
});

document.querySelector('#previousQuestion').addEventListener('click', () => {
  if (questionIndex > 0) {
    questionIndex--;
    renderQuestion();
  }
});

document.querySelector('#backToTopics').addEventListener('click', showTopicList);

document.querySelector('#restartQuiz').addEventListener('click', () => {
  if (randomMode) startRandomQuiz();
  else if (activeContagemTopicKey) startContagemTopic(activeContagemTopicKey);
  else if (activeTopic) startTopic(activeTopic);
});

const sidebar = document.querySelector('#sidebar');
const scrim = document.querySelector('#scrim');
const menuToggle = document.querySelector('#menuToggle');
function closeMenu() { sidebar.classList.remove('open'); scrim.classList.remove('show'); menuToggle.setAttribute('aria-expanded', 'false'); }
menuToggle.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  scrim.classList.toggle('show', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});
scrim.addEventListener('click', closeMenu);

renderNavigation();
renderTopics();

const themeToggle = document.querySelector('#themeToggle');
const savedTheme = localStorage.getItem('estudai-theme');
if (savedTheme === 'dark') document.body.classList.add('dark-mode');
function updateThemeButton() {
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.setAttribute('aria-label', isDark ? 'Ativar tema claro' : 'Ativar tema escuro');
  themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀' : '☾';
  themeToggle.querySelector('.theme-label').textContent = isDark ? 'Modo claro' : 'Modo escuro';
  document.querySelector('meta[name="theme-color"]').content = isDark ? '#171923' : '#f7f8fc';
}
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('estudai-theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  updateThemeButton();
});
updateThemeButton();

document.querySelector('#randomToggle').addEventListener('change', event => {
  if (event.target.checked) {
    startRandomQuiz();
  } else {
    activeTopic = null;
    currentQuestions = [];
    showTopicList();

  }
});














