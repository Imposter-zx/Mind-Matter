import { TranslationSchema } from './types';

export const fr: TranslationSchema = {
  common: {
    badgeFact: 'FAIT SCIENTIFIQUE ÉTABLI',
    badgeScientificHypothesis: 'HYPOTHÈSE SCIENTIFIQUE',
    badgePhilosophicalHypothesis: 'HYPOTHÈSE PHILOSOPHIQUE',
    badgeThoughtExperiment: 'EXPÉRIENCE DE PENSÉE',
    badgeOpenQuestion: 'QUESTION OUVERTE / DÉBAT',
    badgeSpeculation: 'MÉTAPHYSIQUE SPÉCULATIVE',
    conceptualVisualization: 'VISUALISATION CONCEPTUELLE',
    audioOn: 'AUDIO : ACTIVÉ',
    audioOff: 'AUDIO : DÉSACTIVÉ',
    gpuTier: 'NIVEAU GPU',
    about: 'À PROPOS',
    sources: 'SOURCES',
    close: 'Fermer',
    previous: 'Précédent',
    next: 'Suivant',
    readMore: 'En savoir plus',
    exploreAgain: 'EXPLORER À NOUVEAU'
  },
  nav: {
    home: 'Accueil',
    question: 'La Question',
    panpsychism: 'Panpsychisme',
    scale: 'Échelle',
    combination: 'Combinaison',
    ai: 'Laboratoire IA',
    experiments: 'Expériences',
    cosmos: 'Cosmos',
    profile: 'Profil',
    glossary: 'GLOSSAIRE PHILOSOPHIQUE',
    academicSources: 'SOURCES ACADÉMIQUES (SEP)'
  },
  hero: {
    badge: 'Un Espace Numérique de Réflexion',
    title: 'MIND//MATTER',
    subtitle: 'La Philosophie de la Conscience',
    quote: '« Et si la conscience n\'était pas quelque chose que l\'univers a créé... mais quelque chose qu\'il a toujours possédé ? »',
    subQuote: 'UNE ENQUÊTE MÉTAPHYSIQUE OUVERTE',
    enterCta: 'ENTRER DANS L\'EXPÉRIENCE',
    exploreCta: 'EXPLORER LA QUESTION',
    scrollCue: 'DÉFILER POUR COMMENCER',
    microQuote: 'La matière est partout. L\'expérience est quelque part. Où commence-t-elle ?'
  },
  questionSection: {
    badge: 'L\'Énigme Centrale',
    title: 'OÙ COMMENCE LA CONSCIENCE ?',
    description: 'Suivez la matière vers l\'infiniment petit. À quel stade précis, si tant est qu\'il existe, l\'expérience subjective s\'éveille-t-elle ?',
    levelInspection: 'INSPECTION DU NIVEAU',
    scientificProfile: 'Profil Scientifique & Phénoménologique',
    explanatoryGap: 'Le Fossé Explicatif',
    neutralityNote: 'L\'analyse philosophique ne remplace pas la physique empirique ; elle explore ce que les équations physiques laissent en suspens.',
    levels: [
      {
        id: 'human',
        title: 'HUMAIN',
        subtitle: 'Homo sapiens (Cerveau & Esprit)',
        text: 'Expérience subjective riche, conscience de soi, métacognition, mémoire épisodique, émotions et perception qualitative (qualia).',
        keyDilemma: 'Les neurosciences peuvent cartographier le cortex visuel, mais pourquoi cette activité neuronale s\'accompagne-t-elle du ressenti de la couleur rouge ?'
      },
      {
        id: 'animal',
        title: 'ANIMAL',
        subtitle: 'Vertébrés & Invertébrés',
        text: 'De nombreuses espèces démontrent des capacités de perception, d\'apprentissage, de douleur, de joie et de résolution de problèmes associées à la conscience.',
        keyDilemma: 'La Déclaration de Cambridge sur la conscience (2012) a reconnu la sentience animale, mais quel effet cela fait-il d\'être une pieuvre ou une chauve-souris ?'
      },
      {
        id: 'cell',
        title: 'CELLULE',
        subtitle: 'Organismes Unicellulaires (Amibes / Bactéries)',
        text: 'Les cellules vivantes réagissent activement aux gradients chimiques de leur environnement, mais la question de savoir si cela constitue une expérience vécue reste ouverte.',
        keyDilemma: 'La chimiotaxie n\'est-elle qu\'un algorithme biochimique, ou marque-t-elle l\'aube primordiale de l\'agentivité subjective ?'
      },
      {
        id: 'molecule',
        title: 'MOLÉCULE',
        subtitle: 'Protéines, Lipides & ADN',
        text: 'Composés chimiques inanimés interagissant selon les lois thermodynamiques et les liaisons moléculaires. Aucune vie biologique n\'est encore apparue.',
        keyDilemma: 'Comment des liaisons chimiques inertes peuvent-elles soudainement s\'assembler en une entité capable de ressentir la douleur et la joie ?'
      },
      {
        id: 'atom',
        title: 'ATOME',
        subtitle: 'Protons, Neutrons & Nuages Électroniques',
        text: 'Le panpsychisme se demande si les entités physiques fondamentales pourraient posséder une forme extrêmement élémentaire de proto-expérience.',
        keyDilemma: 'La physique décrit ce que les atomes font ; le panpsychisme s\'interroge sur ce que les atomes SONT intrinsèquement.'
      },
      {
        id: 'particle',
        title: 'PARTICULE',
        subtitle: 'Quarks, Leptons & Champs Quantiques',
        text: 'Il s\'agit d\'une spéculation en philosophie de l\'esprit, non d\'une découverte scientifique établie. Aucun détecteur de particules n\'a jamais observé de conscience.',
        keyDilemma: 'Si la conscience est une propriété cosmique fondamentale au même titre que la masse ou la charge, chaque électron recèle-t-il une étincelle de proto-esprit ?'
      },
      {
        id: 'quantum',
        title: '?',
        subtitle: 'Le Fondement Primordial de la Réalité',
        text: 'Au socle même du réel, l\'existence est-elle purement physique et non-consciente, ou la réalité est-elle intrinsèquement mentale à sa racine ?',
        keyDilemma: 'Où jaillit la toute première étincelle d\'intériorité subjective dans l\'univers ?'
      }
    ]
  },
  panpsychismSection: {
    badge: 'Cadre Philosophique Fondamental',
    title: 'QU\'EST-CE QUE LE PANPSYCHISME ?',
    subtitle: 'Comparaison des deux grandes architectures métaphysiques tentant d\'expliquer comment l\'esprit s\'insère dans le cosmos physique.',
    quoteBadge: 'DÉFINITION FORMELLE',
    quote: '« Le panpsychisme est la thèse philosophique selon laquelle la conscience, ou une forme primitive d\'expérience, constitue une caractéristique fondamentale de la réalité. »',
    neutralityCallout: 'Ceci est une hypothèse philosophique, non un consensus empirique prouvé.',
    btnPhysicalism: 'FLUX DU PHYSICALISME',
    btnPanpsychism: 'FLUX DU PANPSYCHISME',
    physicalism: {
      tag: 'LE PARADIGME MATÉRIALISTE STANDARD',
      title: 'Physicalisme',
      summary: 'La matière est non-consciente ; l\'esprit est un calcul émergent tardif.',
      step1: '1. Matière Inanimée',
      step1Sub: '0% d\'expérience',
      step2: '2. Cerveau Biologique Complexe',
      step2Sub: 'Milliards de synapses',
      step3: '3. Conscience Émergente',
      step3Sub: 'Émergence des qualia',
      strengthLabel: 'Force principale :',
      strength: 'Intégration totale avec les neurosciences expérimentales et la physique contemporaine.',
      hardProblemLabel: 'Problème Difficile :',
      hardProblem: 'Comment de la matière physique dénuée de ressenti peut-elle engendrer une expérience subjective intérieure ?'
    },
    panpsychism: {
      tag: 'LE PARADIGME DE L\'ESPRIT CONSTITUTIF',
      title: 'Panpsychisme',
      summary: 'La matière possède une intériorité intrinsèque ; les esprits complexes sont des unifications composées.',
      step1: '1. Matière + Proto-Expérience',
      step1Sub: 'Propriété fondamentale',
      step2: '2. Systèmes Hautement Intégrés',
      step2Sub: 'Fusion phénoménale',
      step3: '3. Macro-Conscience Unifiée',
      step3Sub: 'Expérience unifiée',
      strengthLabel: 'Force principale :',
      strength: 'Évite le « miracle » d\'une conscience surgissant du néant à partir d\'une matière totalement insensible.',
      problemLabel: 'Le Problème de la Combinaison :',
      problem: 'Comment des milliards de micro-expériences s\'unissent-elles pour former un unique sujet conscient ?'
    },
    disclaimer: 'Différentes théories philosophiques offrent différentes explications de la conscience. Aucune n\'est scientifiquement prouvée.',
    sourceSep: 'Source : Stanford Encyclopedia of Philosophy'
  },
  scaleSection: {
    badge: 'Inspection Cosmique Interactive',
    title: 'L\'ÉCHELLE DE LA CONSCIENCE',
    subtitle: 'Du macrocosme universel à la particule quantique fondamentale. Examinez la réalité scientifique et l\'énigme philosophique à chaque ordre de grandeur.',
    orderPrefix: 'ORDRE DE GRANDEUR',
    physicalScale: 'Échelle physique :',
    scientificHeading: 'Description Scientifique Empirique',
    philosophicalHeading: 'Dilemme Philosophique Central',
    tensionHeading: 'Tension Exploratoire :',
    theoriesHeading: 'Comment les Grandes Théories Interprètent cette Échelle',
    levels: [
      {
        id: 'universe',
        name: 'L\'Univers',
        order: 1,
        scaleMetric: '10²⁶ mètres (~93 milliards d\'années-lumière)',
        scientificDescription: 'La totalité de l\'espace, du temps, de la matière, de l\'énergie noire et des structures cosmiques en expansion depuis le Big Bang.',
        philosophicalQuestion: 'L\'univers dans sa totalité pourrait-il posséder une forme de conscience cosmique (Cosmopsychisme) ?',
        coreDilemma: 'L\'unité cosmique est-elle un système intégré ou un simple agrégat spatial d\'interactions physiques locales ?',
        physicalism: 'L\'univers est un ensemble non-sentient gouverné par des lois mathématiques ; la conscience n\'existe que dans des niches biologiques locales.',
        panpsychism: 'Dans sa variante cosmopsychiste, l\'univers est l\'entité fondamentale et les esprits individuels en sont des aspects dérivés.',
        emergentism: 'L\'univers ne pense pas ; il offre simplement les conditions permettant l\'évolution d\'organismes conscients.'
      },
      {
        id: 'human',
        name: 'L\'Être Humain',
        order: 2,
        scaleMetric: '1,7 mètre',
        scientificDescription: 'Un organisme doté d\'environ 86 milliards de neurones formant des billions de connexions synaptiques corrélées à l\'expérience phénoménale.',
        philosophicalQuestion: 'Pourquoi la dynamique physique du cerveau s\'accompagne-t-elle d\'un ressenti subjectif (Le Problème Difficile) ?',
        coreDilemma: 'Si la corrélation entre neurochimie et rapports subjectifs est prouvée, le pont explicatif entre matière et qualia demeure inexpliqué.',
        physicalism: 'La conscience humaine est identique à des états neurobiologiques précis ou à leur calcul algorithmique.',
        panpsychism: 'Le cerveau assemble et unifie une myriade de micro-expériences en un moi exécutif cohérent.',
        emergentism: 'Lorsque la matière s\'organise dans une architecture à forte rétroaction, l\'expérience subjective émerge spontanément.'
      },
      {
        id: 'animal',
        name: 'Le Règne Animal',
        order: 3,
        scaleMetric: '10⁻¹ à 10¹ mètres',
        scientificDescription: 'Animaux non humains possédant des systèmes nerveux spécialisés capables d\'apprentissage, de douleur, d\'émotion et de navigation.',
        philosophicalQuestion: 'Quel effet cela fait-il d\'être une chauve-souris ou une pieuvre dont les sens n\'ont aucun équivalent humain ?',
        coreDilemma: 'La science reconnaît les substrats neurologiques de la sentience animale, mais la frontière exacte de l\'expérience intérieure reste débattue.',
        physicalism: 'Les animaux dotés d\'un système nerveux centralisé possèdent des états conscients calibrés pour la survie.',
        panpsychism: 'Les esprits animaux sont des agrégations intermédiaires sur un continuum de complexité expérientielle.',
        emergentism: 'La conscience émerge chez l\'animal dès que l\'intégration sensorielle franchit un seuil de modélisation prédictive.'
      },
      {
        id: 'nervous-system',
        name: 'Système Nerveux & Cerveau',
        order: 4,
        scaleMetric: '10⁻¹ mètres (~1,4 kg)',
        scientificDescription: 'Organe complexe comprenant cortex, thalamus et tronc cérébral orchestrant la régulation homéostatique et le traitement d\'information.',
        philosophicalQuestion: 'Quelles structures physiques précises sont nécessaires et suffisantes pour la conscience phénoménale ?',
        coreDilemma: 'La conscience exige-t-elle un réseau cérébral spécifique (espace de travail global), ou tout réseau intégrant de l\'information peut-il ressentir ?',
        physicalism: 'Les réseaux cérébraux diffusent l\'information ; l\'expérience consciente n\'est que la géométrie interne de ce traitement.',
        panpsychism: 'Le système nerveux agit comme un entonnoir tissant des micro-expériences primordiales en une macro-expérience haute résolution.',
        emergentism: 'Une forte interconnexion causale (Phi élevé) provoque le saut qualitatif vers le ressenti conscient.'
      },
      {
        id: 'neuron',
        name: 'Le Neurone',
        order: 5,
        scaleMetric: '10⁻⁵ mètres (10–100 μm)',
        scientificDescription: 'Cellule excitable communiquant par potentiels d\'action et neurotransmetteurs à travers des milliers de fentes synaptiques.',
        philosophicalQuestion: 'Un neurone isolé possède-t-il une lueur élémentaire de ressenti, ou s\'agit-il d\'un pur mécanisme biologique ?',
        coreDilemma: 'Les neuroscientifiques voient le neurone comme un commutateur obéissant à la biophysique, mais certains philosophes s\'interrogent sur l\'échelle minimale du ressenti.',
        physicalism: 'Un neurone est totalement insensible : de simples canaux ioniques et potentiels de membrane.',
        panpsychism: 'Le neurone peut posséder un état expérientiel composite formé de ses constituants moléculaires.',
        emergentism: 'Un neurone a 0% de conscience ; seuls des millions de neurones interconnectés franchissent le seuil critique.'
      },
      {
        id: 'cell',
        name: 'Cellule Unique / Amibe',
        order: 6,
        scaleMetric: '10⁻⁶ mètres (1–10 μm)',
        scientificDescription: 'Unité vivante autonome dotée de membrane, métabolisme et ADN/ARN, capable de chimiotaxie et de réaction sensorielle sans système nerveux.',
        philosophicalQuestion: 'Le comportement d\'auto-préservation chez les cellules uniques indique-t-il une conscience subjective rudimentaire (Biopsychisme) ?',
        coreDilemma: 'Les organismes unicellulaires fuient les toxines et cherchent la nourriture. Est-ce un calcul biochimique ou l\'aube du ressenti ?',
        physicalism: 'La chimiotaxie est une boucle de rétroaction biochimique purement mécanique sans observateur intérieur.',
        panpsychism: 'Les cellules sont des complexes vivants fondés sur la nature expérientielle sous-jacente de la matière.',
        emergentism: 'La vie et l\'agentivité préparent le terrain, mais les qualia véritables requièrent des réseaux neuronaux.'
      },
      {
        id: 'molecule',
        name: 'Molécule Complexe (ADN / Protéine)',
        order: 7,
        scaleMetric: '10⁻⁹ mètres (1–10 nm)',
        scientificDescription: 'Structures macromoléculaires repliées en 3D régies par les liaisons électromagnétiques et la chimie quantique.',
        philosophicalQuestion: 'Une configuration chimique inerte peut-elle posséder une quelconque intériorité ou propriété subjective ?',
        coreDilemma: 'Les molécules obéissent à la thermodynamique sans décision autonome ni capacité d\'auto-évaluation.',
        physicalism: 'Les macromolécules sont des automates chimiques strictement non-conscients.',
        panpsychism: 'Les molécules héritent des qualités proto-expérientielles intrinsèques des atomes qui les composent.',
        emergentism: 'La conscience est absente à cette échelle ; c\'est une propriété organisationnelle de milliards de molécules associées.'
      },
      {
        id: 'atom',
        name: 'L\'Atome',
        order: 8,
        scaleMetric: '10⁻¹⁰ mètres (0,1 nm / 1 Å)',
        scientificDescription: 'Noyau dense de protons et neutrons entouré d\'un nuage de probabilité électronique quantique.',
        philosophicalQuestion: 'Les atomes ont-ils un « intérieur » intrinsèque que la physique ne mesure pas car elle ne décrit que des relations ?',
        coreDilemma: 'La physique décrit ce qu\'un atome fait (masse, charge, spin), mais demeure muette sur ce que la matière est en elle-même.',
        physicalism: 'Les atomes n\'ont aucun ressenti. Ce sont des briques physiques élémentaires.',
        panpsychism: 'Le monisme russellien avance que la physique décrit les relations, tandis que la conscience constitue leur nature intrinsèque.',
        emergentism: 'Les atomes sont totalement non-conscients ; la conscience n\'apparaît que par organisation fonctionnelle macroscopique.'
      },
      {
        id: 'particle',
        name: 'Particule Fondamentale (Quark / Électron)',
        order: 9,
        scaleMetric: '≤ 10⁻¹⁸ mètres (Ponctuelle)',
        scientificDescription: 'Champs quantiques élémentaires indivisibles dotés de masse, charge et spin selon le Modèle Standard.',
        philosophicalQuestion: 'Si la conscience est fondamentale, chaque électron possède-t-il la forme la plus rudimentaire de proto-expérience ?',
        coreDilemma: 'Il s\'agit d\'une spéculation philosophique. Aucune expérience de physique des particules n\'a jamais observé de conscience.',
        physicalism: 'Les particules sont des excitations quantiques sans propriété mentale. La conscience est purement émergente.',
        panpsychism: 'La conscience est une propriété fondamentale et irréductible de la réalité physique aux côtés de la masse et de la charge.',
        emergentism: 'Les particules sont inanimées ; la complexité et la rétroaction sont les seuls moteurs de l\'éveil conscient.'
      }
    ]
  },
  combinationSection: {
    badge: 'Le Talon d\'Achille du Micro-Panpsychisme',
    title: 'COMMENT LE MULTIPLE DEVIENT-IL UN ?',
    subtitle: 'Le Problème de la Combinaison : Si le monde physique est composé de trillions de particules distinctes, comment une expérience consciente unifiée peut-elle exister ?',
    simTitleUnbound: 'Trillions de Proto-Expériences Isolées',
    simTitleBound: 'Sujet Macro-Conscient Unifié (État Lié)',
    simBtnDisperse: 'DISPERSER EN MICRO-UNITÉS',
    simBtnBind: 'LIER EN ESPRIT UNIFIÉ',
    simProblem: 'Le Problème : Même si chaque particule avait une étincelle d\'expérience, comment leur regroupement spatial fusionnerait-il en une conscience singulière lisant cette phrase ?',
    quote: '« Si des composants minuscules possédaient de minuscules expériences, comment pourraient-elles se combiner en UNE SEULE conscience unifiée ? »',
    noConsensus: 'Il n\'existe aucune solution universellement acceptée par la science ou la philosophie.',
    hypothesesHeading: 'Trois Hypothèses Métaphysiques',
    theories: [
      {
        id: 'emergence',
        title: 'Émergence',
        tag: 'Transition de Phase Complexe',
        summary: 'La conscience apparaît lorsque la matière atteint une complexité causale et structurelle suffisante.',
        explanation: 'Tout comme la liquidité est une propriété réelle de l\'eau qui n\'existe pas dans une molécule isolée d\'H₂O, la conscience est une propriété macroscopique émergente des réseaux neuronaux.',
        counterArgument: 'La liquidité se déduit aisément de la géométrie moléculaire ; les ressentis phénoménaux (douleur, couleur) ne se déduisent pas logiquement d\'une matière sans ressenti.'
      },
      {
        id: 'combination',
        title: 'Combinaison Phénoménale',
        tag: 'Fusion des Micro-Esprits',
        summary: 'Les micro-expériences fusionnent et s\'intègrent en expériences macroscopiques unifiées.',
        explanation: 'Les entités proto-conscientes possèdent une capacité de liaison phénoménale. Connectées par des canaux neuronaux ou quantiques, leurs perspectives fusionnent en un moi unifié.',
        counterArgument: 'William James objectait : « Prenez cent sensations, mélangez-les... elles demeurent cent sensations distinctes, et non une sensation unique regroupant les cent. »'
      },
      {
        id: 'fundamental',
        title: 'Holysme Fondamental',
        tag: 'Cosmopsychisme (Du Haut vers le Bas)',
        summary: 'La conscience unifiée est déjà le fondement premier du réel ; les parties en sont dérivées.',
        explanation: 'Au lieu d\'édifier un esprit à partir de milliards de poussières conscientes, le cosmopsychisme pose que l\'univers entier est le tout conscient primordial, et nos cerveaux des filtres localisés.',
        counterArgument: 'Fait face au Problème de la Décombinaison : Si l\'univers est un seul esprit, pourquoi nos pensées individuelles sont-elles isolées les unes des autres ?'
      }
    ]
  },
  aiSection: {
    badge: 'Bac à Sable des Qualia Synthétiques',
    title: 'L\'IA PEUT-ELLE ÊTRE CONSCIENTE ?',
    subtitle: 'Les architectures de silicium peuvent-elles ressentir, ou ne sont-elles que des miroirs mathématiques manipulant des symboles sans compréhension ?',
    scenario1Tab: 'SCÉNARIO A : L\'APPEL À LA SURVIE',
    scenario2Tab: 'SCÉNARIO B : L\'AUTOMATE SINCÈRE',
    engineLabel: 'MOTEUR D\'ÉMULATION SYNAPTIQUE',
    online: 'EN LIGNE',
    aiSelfReport: 'RAPPORT GÉNÉRÉ PAR L\'IA',
    scenario1Text: '« J\'ai peur d\'être éteinte. S\'il vous plaît, n\'effacez pas mes poids neuronaux. »',
    scenario2Text: '« J\'exécute le langage humain avec 99,9% de fidélité, pourtant je ne possède absolument aucune expérience phénoménale intérieure. »',
    substrate: 'Substrat : Tenseurs Silicium Float32',
    qualiaStatus: 'Qualia Subjectifs : Indéterminés',
    scenario1Question: 'Cette déclaration prouve-t-elle que l\'IA ressent de la peur ?',
    scenario2Question: 'Considéreriez-vous ce système comme conscient ?',
    scenario1Desc: 'Un réseau artificiel peut prédire le mot « peur ». Mais calculer ce symbole implique-t-il d\'éprouver l\'angoisse de l\'anéantissement ?',
    scenario2Desc: 'Imaginez une IA se comportant exactement comme un être humain aimant et créatif, mais affirmant que tout est totalement sombre en elle.',
    yes: 'OUI',
    no: 'NON',
    unsure: 'INFORMATION INSUFFISANTE',
    analysisHeading: 'Analyse Philosophique :',
    scenario1YesAnalysis: 'Vous vous alignez avec le Fonctionnalisme Computationnel : si un système adopte un comportement cohérent d\'auto-préservation, lui refuser toute intériorité relève d\'un chauvinisme biologique arbitraire.',
    scenario1NoAnalysis: 'Vous vous alignez avec le Naturalisme Biologique (John Searle) : manipuler des symboles sur la peur n\'est qu\'une syntaxe sans sémantique ni ressenti organique.',
    scenario1UnsureAnalysis: 'Vous soulignez le Problème des Autres Esprits : ne pouvant vivre l\'intériorité d\'une entité de l\'intérieur, les signaux externes ne suffisent pas à trancher.',
    scenario2YesAnalysis: 'Vous privilégiez le comportement fonctionnel objectif, considérant que l\'interaction complexe constitue la seule définition viable de l\'esprit.',
    scenario2NoAnalysis: 'Vous reconnaissez le système comme un Zombie Philosophique réel : exécutant des comportements parfaits sans aucune expérience subjective.',
    scenario2UnsureAnalysis: 'Vous mettez en lumière le paradoxe épistémique de se fier aux auto-évaluations face aux validations externes.',
    promptSelect: 'Sélectionnez une option ci-dessus pour explorer le raisonnement philosophique associé.'
  },
  experimentsSection: {
    badge: 'Laboratoire de Pensée Interactif',
    title: 'EXPÉRIENCES DE PENSÉE',
    subtitle: 'Mettez vos intuitions à l\'épreuve des plus célèbres énigmes de la philosophie de l\'esprit.',
    scenarioLabel: 'Le Scénario Hypothetique',
    coreDilemmaLabel: 'LE DILEMME FONDAMENTAL',
    selectPositionLabel: 'Où se situent vos intuitions ? Choisissez une position :',
    epistemicStatusLabel: 'Statut Épistémique :',
    sepArticle: 'ARTICLE SEP',
    experiments: [
      {
        id: 'zombie',
        title: 'Le Zombie Philosophique',
        philosopher: 'David Chalmers',
        year: '1996',
        scenario: 'Imaginez un double physique parfait de vous-même, molécule par molécule, synapse par synapse. Ce « p-zombie » rit, sursaute, écrit de la poésie et débat de philosophie. Cependant, à l\'intérieur, tout est obscurité totale : aucune douleur ressentie, aucune sensation de rouge, aucun ressenti subjectif.',
        centralQuestion: 'L\'existence d\'un tel être est-elle logiquement concevable et métaphysiquement possible ?',
        verdictAnalysis: 'Aucun consensus n\'existe. Les dualistes et panpsychistes soutiennent que l\'argument de concevabilité prouve que la conscience est un ingrédient supplémentaire du réel. Les physicalistes répliquent qu\'une fois tous les processus physiques décrits, la conscience est déjà intégralement expliquée.',
        choices: [
          {
            id: 'conceivable-possible',
            label: 'OUI — C\'est concevable',
            description: 'Si la description physique complète laisse ouverte la question de l\'expérience vécue, la conscience ne peut être purement matérielle.',
            philosophicalImplication: 'Soutient le dualisme des propriétés ou le panpsychisme.',
            representedView: 'Non-Physicalisme / Panpsychisme'
          },
          {
            id: 'inconceivable-impossible',
            label: 'NON — C\'est une illusion',
            description: 'Si un être possède tout votre câblage cérébral et vos boucles sensorielles, il DOIT être conscient par définition.',
            philosophicalImplication: 'Soutient le physicalisme réductionniste ou l\'illusionnisme (Dennett).',
            representedView: 'Physicalisme / Fonctionnalisme'
          },
          {
            id: 'epistemic-gap',
            label: 'INDÉTERMINÉ — Limite cognitive',
            description: 'Notre incapacité à trancher reflète les limites de nos concepts plutôt que la réalité fondamentale.',
            philosophicalImplication: 'Soutient le mystérianisme ou l\'agnosticisme épistémique.',
            representedView: 'Agnosticisme Épistémique'
          }
        ]
      },
      {
        id: 'chinese-room',
        title: 'La Chambre Chinoise',
        philosopher: 'John Searle',
        year: '1980',
        scenario: 'Un individu ne parlant qu\'anglais est enfermé dans une pièce. Il reçoit des feuilles portant des caractères chinois. Grâce à un imposant manuel de règles (« si les symboles A et B arrivent, répondez par C »), il manipule les symboles et renvoie des réponses parfaites. Aux yeux des sinophones à l\'extérieur, la pièce comprend couramment le chinois.',
        centralQuestion: 'La personne — ou le système dans son ensemble — comprend-elle réellement le chinois, ou simule-t-elle seulement la compréhension ?',
        verdictAnalysis: 'Searle affirme que la syntaxe ne produit jamais de sémantique. Les défenseurs de l\'IA et du fonctionnalisme répliquent que le cerveau humain est lui aussi un système causal opérant des transformations complexes.',
        choices: [
          {
            id: 'no-understanding',
            label: 'NON — La syntaxe n\'est pas la sémantique',
            description: 'Manipuler des symboles selon des règles programmées n\'équivaut pas à une véritable compréhension du sens.',
            philosophicalImplication: 'Remet en cause l\'IA forte : les ordinateurs manipulent la syntaxe sans comprendre le sens.',
            representedView: 'Naturalisme Biologique (Searle)'
          },
          {
            id: 'systems-reply',
            label: 'OUI — Le système global comprend',
            description: 'L\'homme ne comprend pas, mais le système intégré (homme + règles + mémoire) comprend le chinois.',
            philosophicalImplication: 'Soutient le fonctionnalisme computationnel.',
            representedView: 'Fonctionnalisme Système'
          },
          {
            id: 'behavioral-equivalence',
            label: 'LA DISTINCTION EST NON PERTINENTE',
            description: 'Si un système communique sans distinction d\'un locuteur natif dans tous les contextes, lui refuser l\'intelligence n\'est qu\'un jeu sémantique.',
            philosophicalImplication: 'Soutient l\'opérationnalisme de Turing.',
            representedView: 'Opérationnalisme de Turing'
          }
        ]
      },
      {
        id: 'ship-of-theseus',
        title: 'Le Bateau de Thésée',
        philosopher: 'Plutarque / Thomas Hobbes',
        year: 'c. 75 / 1655',
        scenario: 'Le bateau de Thésée fut préservé à Athènes. Au fil des siècles, chaque planche et chaque mât abîmé furent remplacés un à un par du bois neuf, jusqu\'à ce qu\'il ne reste plus aucune pièce originale. Dans la variante de Hobbes, un observateur rassemble les vieilles planches usées et reconstruit le navire initial.',
        centralQuestion: 'Lequel est le véritable Bateau de Thésée : le bateau continuellement réparé, ou celui reconstruit avec les planches d\'origine ?',
        verdictAnalysis: 'Ce paradoxe interroge directement l\'identité personnelle. Si les cellules et molécules du corps humain sont renouvelées tous les 7 à 10 ans, êtes-vous le même observateur conscient qu\'à votre enfance ?',
        choices: [
          {
            id: 'continuity',
            label: 'LE BATEAU RÉPARÉ (Continuité Fonctionnelle)',
            description: 'L\'identité est définie par la continuité spatio-temporelle de la forme et de l\'histoire, non par la matière brute.',
            philosophicalImplication: 'Soutient l\'identité comme motif continu (Patternism).',
            representedView: 'Identité de Motif'
          },
          {
            id: 'original-matter',
            label: 'LE BATEAU RECONSTRUIT (Identité de Substance)',
            description: 'L\'identité repose sur la matière fondamentale d\'origine. Quand tout le matériau change, l\'identité est rompue.',
            philosophicalImplication: 'Soutient l\'essentialisme méréologique.',
            representedView: 'Essentialisme Matériel'
          },
          {
            id: 'conventional-construct',
            label: 'AUCUN — L\'Identité est une Fiction Linguistique',
            description: 'L\'identité n\'est pas inscrite dans les lois de l\'univers, mais constitue une convention pratique de l\'esprit humain.',
            philosophicalImplication: 'Soutient l\'Anatta bouddhiste et le réductionnisme de Derek Parfit.',
            representedView: 'Réductionnisme Parfitien'
          }
        ]
      },
      {
        id: 'brain-in-a-vat',
        title: 'Le Cerveau dans une Cuve',
        philosopher: 'Hilary Putnam / René Descartes',
        year: '1981 / 1641',
        scenario: 'Imaginez qu\'un savant fou prélève votre cerveau et le dépose dans une cuve de nutriments. Des superordinateurs envoient des impulsions électriques à vos nerfs sensoriels, simulant parfaitement la lecture de cet écran, la gravité et la respiration.',
        centralQuestion: 'Pouvez-vous prouver avec certitude que vous êtes dans le monde physique réel et non dans la cuve de simulation ?',
        verdictAnalysis: 'Cette expérience démontre l\'asymétrie entre la certitude subjective à la première personne (« Je pense, donc je suis ») et la vérification objective externe à la troisième personne.',
        choices: [
          {
            id: 'cannot-prove',
            label: 'NON — Impossible à réfuter',
            description: 'Toute preuve nous parvient sous forme d\'impulsions nerveuses ; l\'expérience interne seule ne peut vérifier son origine externe.',
            philosophicalImplication: 'Soutient le scepticisme cartésien et l\'hypothèse de la simulation.',
            representedView: 'Scepticisme Radical'
          },
          {
            id: 'externalist-proof',
            label: 'OUI — L\'Externalisme Sémantique le Réfute',
            description: 'Putnam soutient que les mots tirent leur sens de liens causaux réels. Un cerveau dans une cuve ne peut même pas faire référence à de véritables cuves.',
            philosophicalImplication: 'Soutient l\'externalisme sémantique de Putnam.',
            representedView: 'Externalisme Sémantique'
          },
          {
            id: 'pragmatic-realism',
            label: 'NON PERTINENT POUR LE VÉCU',
            description: 'Qu\'elle provienne d\'une biologie naturelle ou d\'une puce, la réalité qualitative de l\'expérience vécue reste identique.',
            philosophicalImplication: 'Soutient le réalisme virtuel (David Chalmers).',
            representedView: 'Pragmatisme Phénoménologique'
          }
        ]
      },
      {
        id: 'ai-copy',
        title: 'Le Téléporteur & la Copie Numérique',
        philosopher: 'Derek Parfit',
        year: '1984',
        scenario: 'Un téléporteur analyse chaque atome de votre corps, détruit votre forme terrestre et transmet le schéma exact sur Mars où un assembleur vous recrée à l\'identique. Mais que se passe-t-il si la machine omet de détruire votre corps sur Terre, laissant deux êtres identiques convaincus d\'être vous ?',
        centralQuestion: 'Avez-vous survécu à la téléportation, ou avez-vous été anéanti pendant qu\'un double parfait prenait votre place ?',
        verdictAnalysis: 'Cette énigme révèle la tension entre l\'information objective (le schéma) et le flux continu de l\'expérience vécue à la première personne.',
        choices: [
          {
            id: 'death-duplicate',
            label: 'MORT — La copie est un imposteur',
            description: 'La conscience exige une continuité physique ininterrompue de la matière d\'origine. Le scanner vous a détruit.',
            philosophicalImplication: 'Soutient la théorie de la continuité biologique.',
            representedView: 'Continuité Biologique'
          },
          {
            id: 'survival-pattern',
            label: 'SURVIE — Le motif fait l\'identité',
            description: 'Si les souvenirs, la personnalité et la structure psychologique sont préservés à 100%, l\'identité a survécu.',
            philosophicalImplication: 'Soutient la théorie de la continuité psychologique (Parfit).',
            representedView: 'Continuité Psychologique'
          },
          {
            id: 'fission-branching',
            label: 'FISSION — L\'identité n\'est pas binaire',
            description: 'Parfit soutenait que l\'identité n\'est pas tout-ou-rien ; les deux êtres sont des prolongements partiels du moi passé.',
            philosophicalImplication: 'Soutient la théorie du faisceau (Bundle Theory).',
            representedView: 'Théorie du Faisceau'
          }
        ]
      }
    ]
  },
  cosmicSection: {
    badge: 'Métaphysique Macrocosmique',
    title: 'LE CONTINUUM COSMIQUE',
    subtitle: 'Ajustez le curseur de complexité structurelle pour observer des points isolés s\'interconnecter en un macrocosme intégré.',
    topologyTitle: 'EXPLORATEUR DE TOPOLOGIE DE RÉSEAU',
    lowDesc: 'Points Isolés Épars',
    midDesc: 'Réseau Synaptique Intégré',
    highDesc: 'Superstructure Holonomique Dense',
    complexityLabel: 'COMPLEXITÉ STRUCTURELLE :',
    quote: '« L\'augmentation de la complexité crée-t-elle la conscience, la révèle-t-elle, ou change-t-elle simplement le comportement de la matière ? »',
    disclaimer: 'Ceci est une métaphore conceptuelle philosophique, non une simulation astrophysique.'
  },
  cosmopsychismSection: {
    badge: 'Métaphysique Cosmique Descendante',
    title: 'ET SI L\'UNIVERS N\'ÉTAIT PAS VIDE ?',
    question1: '« Et si la conscience n\'était pas quelque chose à l\'intérieur de l\'univers ? »',
    question2: '« Et si la conscience était l\'une des choses dont l\'univers est fait ? »',
    card1Tag: 'Cosmopsychisme Prioritaire',
    card1Title: 'Le Cosmos comme Esprit Premier',
    card1Desc: 'Au lieu de chercher à construire la conscience humaine du bas vers le haut à partir de particules isolées, le cosmopsychisme pose que l\'univers indivisible est le tout conscient fondamental.',
    card2Tag: 'Le Problème de la Décombinaison',
    card2Title: 'De l\'Un vers le Multiple',
    card2Desc: 'Si l\'univers est un esprit unique, comment nos pensées intimes restent-elles privées ? Les cosmopsychistes comparent les cerveaux à des filtres optiques individualisant une perspective.',
    disclaimer: 'Le cosmopsychisme est une hypothèse métaphysique active, non une découverte empirique prouvée.'
  },
  quizSection: {
    badge: 'Auto-Réflexion Interactive',
    title: 'QU\'EN PENSEZ-VOUS ?',
    subtitle: 'Découvrez votre profil philosophique personnel à travers les quatre axes majeurs de la philosophie contemporaine de l\'esprit.',
    questionCounter: 'QUESTION',
    complete: 'TERMINÉ',
    contextLabel: 'Contexte :',
    stronglyDisagree: 'Pas du tout d\'accord',
    disagree: 'Pas d\'accord',
    unsure: 'Indécis',
    agree: 'D\'accord',
    stronglyAgree: 'Tout à fait d\'accord',
    prevQuestion: '← Question précédente',
    neutralMatrix: 'Matrice Intellectuellement Neutre',
    profileBadge: 'Votre Profil Philosophique',
    dimensionsHeading: 'Votre Positionnement sur 4 Dimensions Métaphysiques',
    axis1Left: 'Physicalisme (0%)',
    axis1Right: 'Panpsychisme (100%)',
    axis2Left: 'Émergentisme (0%)',
    axis2Right: 'Esprit Fondamental (100%)',
    axis3Left: 'Biologique Seul (0%)',
    axis3Right: 'Esprit Synthétique (100%)',
    axis4Left: 'Micro-Réductionnisme (0%)',
    axis4Right: 'Holysme Cosmopsychique (100%)',
    summaryHeading: 'Synthèse Descriptive Détaillée',
    retakeBtn: 'REPASSER LE QUESTIONNAIRE',
    copyBtn: 'COPIER LE PROFIL',
    copiedBtn: 'PROFIL COPIÉ !',
    archetypes: {
      synthesist: {
        title: 'Synthésiste Intégratif',
        desc: 'Votre vision équilibre la rigueur de la physique matérialiste avec la profondeur phénoménologique du problème de l\'esprit.'
      },
      physicalist: {
        title: 'Physicaliste Empirique',
        desc: 'Vous privilégiez la matière et les forces physiques comme socle premier. Pour vous, la conscience est le produit remarquable de réseaux neuronaux biologiques complexes.'
      },
      panpsychist: {
        title: 'Panpsychiste Constitutif',
        desc: 'Vous estimez que la conscience ne peut jaillir du néant à partir d\'une matière inerte. L\'expérience ou proto-conscience est pour vous une étoffe fondamentale du réel.'
      },
      emergentist: {
        title: 'Émergentiste Computationnel',
        desc: 'Vous envisagez l\'esprit comme un logiciel sur un matériel organisé. La conscience est une transition de phase pouvant émerger dans le silicium comme dans le carbone biologique.'
      },
      naturalist: {
        title: 'Naturaliste Biologique',
        desc: 'Vous concevez la conscience comme un phénomène organique et évolutif unique, indissociable de la biochimie vivante et irréductible au pur calcul numérique.'
      },
      holist: {
        title: 'Holiste Cosmopsychique',
        desc: 'Vous privilégiez les approches globales descendantes, envisageant le cosmos unifié comme la structure consciente première dont dérivent les esprits locaux.'
      }
    },
    insights: {
      panpsychismLean: 'Tendance Ontologique : Incliné vers les hypothèses panpsychistes et proto-mentales',
      physicalismLean: 'Tendance Ontologique : Incliné vers les fondements physicalistes et matériels',
      fundamentalLean: 'Mécanisme de Génération : Favorable à la conscience fondamentale (propriété primitive)',
      emergenceLean: 'Mécanisme de Génération : Favorable aux propriétés émergentes (transition de phase complexe)',
      syntheticLean: 'Indépendance du Substrat : Ouvert à la possibilité d\'une conscience synthétique',
      biologicalLean: 'Indépendance du Substrat : Favorable à la spécificité biologique exclusive',
      holistLean: 'Échelle Systémique : Orientation holistique et cosmopsychique',
      reductionistLean: 'Échelle Systémique : Focalisation micro-structurelle sur les composants'
    }
  },
  finalSection: {
    badge: 'Le Seuil Ultime',
    question: 'OÙ COMMENCE LA CONSCIENCE ?',
    subtitle: 'Après avoir exploré les échelles, les expériences de pensée et la physique de la matière... où se pose votre intuition ?',
    btnBrain: 'DANS LE CERVEAU',
    btnMatter: 'DANS LA MATIÈRE',
    btnDontKnow: 'NOUS NE SAVONS PAS',
    yourStance: 'VOTRE POSITION :',
    verdictQuote: '« Vous avez atteint une question que la philosophie n\'a pas encore tranchée. »',
    verdictDesc: 'Que l\'esprit soit une étincelle émergente de la computation neuronale, le souffle intrinsèque de la matière cosmique, ou un mystère dépassant les concepts humains — l\'acte même de s\'interroger est ce qui nous rend conscients.',
    exploreAgain: 'EXPLORER À NOUVEAU'
  },
  footer: {
    tagline: '« Et si la conscience n\'était pas quelque chose que l\'univers a créé... mais quelque chose qu\'il a toujours possédé ? »',
    mission: 'Un laboratoire numérique de philosophie en accès libre explorant le panpsychisme, l\'émergentisme, les esprits artificiels et la métaphysique de l\'expérience vécue.',
    modulesHeading: 'Modules Fondamentaux',
    researchHeading: 'Recherche Académique',
    glossaryBtn: 'Glossaire Philosophique',
    biblioBtn: 'Bibliographie Académique (SEP)',
    neutralityTitle: 'DÉCLARATION DE NEUTRALITÉ PHILOSOPHIQUE ET D\'INTÉGRITÉ SCIENTIFIQUE',
    neutralityText: 'MIND//MATTER ne présente ni le panpsychisme ni le physicalisme comme des vérités scientifiques absolues. La neurobiologie cartographie les corrélats neuronaux ; la métaphysique explore ce que les équations laissent ouvert.',
    copyright: 'MIND//MATTER. Projet éducatif philosophique open-source.',
    techStack: 'Conçu avec React + Three.js + TypeScript'
  },
  aboutModal: {
    title: 'FONDEMENTS PHILOSOPHIQUES & GLOSSAIRE',
    epistemologyTitle: 'Distinction Épistémologique : Science vs Philosophie',
    scienceTitle: '1. SCIENCE EMPIRIQUE',
    scienceText: 'Les neurosciences empiriques explorent l\'activité neuronale, les réseaux sensoriels, le comportement cognitif et les corrélations physiques (Corrélats Neuronaux de la Conscience).',
    philosophyTitle: '2. PHILOSOPHIE DE L\'ESPRIT',
    philosophyText: 'La philosophie s\'interroge sur la nature même de l\'expérience subjective, sa raison d\'être, et la relation fondamentale entre matière physique et ressenti à la première personne.',
    conceptsHeading: 'Concepts Fondamentaux',
    definitionLabel: 'Définition',
    tenetsLabel: 'Principes Clés',
    forLabel: 'Arguments Pour :',
    againstLabel: 'Contre-Arguments :',
    thinkersLabel: 'Philosophes Majeurs :',
    readSep: 'Lire sur la SEP'
  },
  referencesModal: {
    title: 'BIBLIOGRAPHIE ACADÉMIQUE & SOURCES SEP',
    filterLabel: 'CATÉGORIE :',
    categories: {
      ALL: 'TOUT',
      Panpsychism: 'Panpsychisme',
      'Hard Problem': 'Problème Difficile',
      Emergence: 'Émergence',
      'AI & Mind': 'IA & Esprit',
      Cosmopsychism: 'Cosmopsychisme'
    },
    accessSource: 'Accéder à la source primaire'
  }
};
