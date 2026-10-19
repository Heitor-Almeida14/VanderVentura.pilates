import { Apparatus, PlanItem, ReviewItem, FaqItem, ScheduleOption } from '../types';

export const STUDIO_INFO = {
  name: "VanderVentura Pilates & Fisioterapia",
  shortName: "VanderVentura",
  tagline: "Movimento com Consciência, Precisão e Alta Performance",
  address: "Av. Cupecê, 2875 – Salas 4 e 6",
  neighborhood: "Jardim Prudência / Cidade Ademar",
  city: "São Paulo - SP",
  cep: "04365-001",
  phone: "(11) 91235-9659",
  whatsappNumber: "5511912359659",
  instagram: "@vanderventura.pilates",
  instagramUrl: "https://www.instagram.com/vanderventura.pilates/",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Cupec%C3%AA+2875+Sao+Paulo",
  wazeUrl: "https://waze.com/ul?q=Av.%20Cupec%C3%AA%202875%20S%C3%A3o%20Paulo",
  hours: {
    weekdays: "07:00 às 13:00 e 15:00 às 21:00",
    saturday: "07:00 às 12:00",
    sunday: "Fechado",
  },
  metrics: [
    { label: "Alunos por Turma", value: "3 máx", detail: "Atenção clínica individual" },
    { label: "Fisioterapeutas", value: "100%", detail: "Corpo docente especializado" },
    { label: "Avaliação Google", value: "4.9★", detail: "Mais de 150 vidas transformadas" },
    { label: "Aceitação", value: "Wellhub & Totalpass", detail: "Sem taxas ocultas no estúdio" },
  ]
};

export const APPARATUS_LIST: Apparatus[] = [
  {
    id: "reformer",
    name: "Reformer com Torre",
    tagline: "Alinhamento Cinemático & Resistência Elástica",
    category: "Equipamento Clássico Fundamental",
    description: "O Reformer utiliza uma plataforma deslizante acoplada a molas de calibração progressiva. Permite trabalhar o fortalecimento muscular com descompressão articular, permitindo que a coluna se movimente sem o impacto da gravidade.",
    focusMuscles: ["Powerhouse (Core)", "Isquiotibiais", "Estabilizadores escapulares", "Glúteo médio"],
    clinicalBenefit: "Reeducação do padrão de marcha, alívio de lombalgia e aumento da potência neuromuscular sem impacto nas articulações.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    specs: {
      resistanceType: "5 molas de tensão graduada",
      level: "Iniciante ao Atleta de Elite",
      capacity: "Sessões 1 a 1 ou em trios"
    }
  },
  {
    id: "cadillac",
    name: "Cadillac (Trapézio)",
    tagline: "Descompressão Axial em 3 Dimensões",
    category: "Aparelho Hospitalar & Terapêutico Clássico",
    description: "Criado originalmente por Joseph Pilates para reabilitação hospitalar, o Cadillac é uma estrutura robusta com barras fixas, trapézio móvel e molas superiores e inferiores. Proporciona tração vertebral e exercícios em suspensão total.",
    focusMuscles: ["Cadeia posterior profunda", "Multífidos", "Mobilizadores torácicos", "Dorsais"],
    clinicalBenefit: "Tração suave das vértebras, alívio imediato da pressão discal em hérnias de disco e desbloqueio de ombros rígidos.",
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1200&q=80",
    specs: {
      resistanceType: "Molas de suspensão e tração",
      level: "Terapêutico ao Avançado",
      capacity: "Exercícios guiados individualmente"
    }
  },
  {
    id: "chair",
    name: "Wunda Chair (Cadeira)",
    tagline: "Desafio de Equilíbrio & Força Funcional",
    category: "Potência e Estabilidade",
    description: "Compacta e extremamente desafiadora, a Wunda Chair utiliza pedais articulados por molas pesadas. Exige controle absoluto do centro de gravidade contra a gravidade, simulando movimentos cotidianos de sentar, subir escadas e saltar.",
    focusMuscles: ["Quadríceps", "Gastrocnêmio", "Pélvis e assoalho pélvico", "Oblíquos"],
    clinicalBenefit: "Aumento do equilíbrio dinâmico, prevenção de quedas e fortalecimento vigoroso de joelhos e quadris pós-lesão.",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80",
    specs: {
      resistanceType: "4 molas de resistência compacta",
      level: "Intermediário ao Avançado",
      capacity: "Treinamento funcional integrado"
    }
  },
  {
    id: "barrel",
    name: "Ladder Barrel (Barril com Escada)",
    tagline: "Extensão Torácica & Flexibilidade Extrema",
    category: "Postura e Descompressão",
    description: "Projetado com um arco curvo estofado conectado a uma escada de madeira maciça. O Barrel é o aparelho ideal para reverter a postura curvada do trabalho em computadores e celulares, expandindo a caixa torácica e abrindo os flexores do quadril.",
    focusMuscles: ["Reto abdominal", "Iliopsoas", "Peitorais", "Eretores da espinha"],
    clinicalBenefit: "Correção de hipercifose e retificação lombar, expandindo a capacidade pulmonar e devolvendo a jovialidade da coluna.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    specs: {
      resistanceType: "Arco anatômico de precisão",
      level: "Todos os níveis",
      capacity: "Alongamento e reforço postural"
    }
  },
  {
    id: "spinecorrector",
    name: "Spine Corrector & Biomecânica",
    tagline: "Liberação Miofascial & Consciência Corporal",
    category: "Reabilitação Ergonômica",
    description: "Módulos de correção espinhal combinados com rolos miofasciais, Overball e Magic Circle. Cada aluno recebe o estímulo exato para soltar nódulos de tensão muscular antes ou após os exercícios nos aparelhos principais.",
    focusMuscles: ["Cervical", "Trapézio", "Fáscia toracolombar", "Adutores"],
    clinicalBenefit: "Alívio de dores de cabeça tensionais, relaxamento do pescoço e alinhamento biomecânico imediato.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    specs: {
      resistanceType: "Anatômico e proprioceptivo",
      level: "Clínico e Preventivo",
      capacity: "Individualizado por fisioterapeuta"
    }
  }
];

export const WELLHUB_PLANS: PlanItem[] = [
  {
    id: "wellhub-basic",
    title: "Wellhub (Gympass) Silver / Gold",
    subtitle: "Acesse nosso Studio através do seu benefício corporativo",
    badge: "BENEFÍCIO DA SUA EMPRESA",
    features: [
      "Check-in simplificado direto no aplicativo Wellhub",
      "Turmas com no máximo 3 alunos por fisioterapeuta",
      "Acesso completo aos aparelhos (Reformer, Cadillac, Chair, Barrel)",
      "Reserva de horários fixa na semana para você nunca perder sua vaga",
      "Sem taxa de matrícula ou cobranças adicionais no estúdio",
      "Horários flexíveis de manhã, tarde e noite"
    ],
    ctaText: "Reservar Horário via Wellhub",
    ctaType: "whatsapp",
    prefilledMessage: "Olá! Sou usuário do Wellhub (Gympass) e gostaria de agendar uma aula no VanderVentura Pilates da Av. Cupecê!"
  },
  {
    id: "totalpass",
    title: "Totalpass (TP2 ou superior)",
    subtitle: "Treine no VanderVentura com o convênio Totalpass",
    badge: "TOTALPASS OFICIAL",
    features: [
      "Validação ágil de token no aplicativo Totalpass",
      "Atendimento por Fisioterapeutas graduados e especialistas",
      "Avaliação inicial de alinhamento e histórico de saúde",
      "Aulas de 50 a 55 minutos com foco em biomecânica individual",
      "Troca e reposição facilitada de horários via WhatsApp",
      "Ambiente 100% climatizado com estacionamento e fácil acesso"
    ],
    ctaText: "Agendar com Totalpass",
    ctaType: "whatsapp",
    prefilledMessage: "Olá! Tenho Totalpass e quero agendar minhas aulas de Pilates no estúdio VanderVentura da Cupecê."
  }
];

export const STUDIO_PRIVATE_PLANS: PlanItem[] = [
  {
    id: "experimental",
    title: "Aula Experimental com Avaliação",
    subtitle: "Conheça o estúdio, os aparelhos e nossa metodologia clínica",
    pricePerSession: "R$ 49",
    priceTotal: "Valor único promocional",
    badge: "PORTA DE ENTRADA",
    features: [
      "50 minutos com Fisioterapeuta exclusivo para você",
      "Avaliação postural 3D estática e dinâmica",
      "Mapeamento de queixas de dor, hérnias ou desvios",
      "Degustação nos aparelhos Reformer e Cadillac",
      "Valor 100% abatido na contratação de qualquer plano"
    ],
    ctaText: "Agendar Minha Experimental",
    ctaType: "whatsapp",
    prefilledMessage: "Olá! Gostaria de agendar uma Aula Experimental com Avaliação Postural no VanderVentura Pilates."
  },
  {
    id: "semestral",
    title: "Plano Semestral (Mais Escolhido)",
    subtitle: "Consistência postural com o melhor custo-benefício por sessão",
    pricePerSession: "A partir de R$ 58",
    priceTotal: "Planos de 2x ou 3x na semana",
    period: "/mês",
    badge: "MAIS RECOMENDADO ★",
    isPopular: true,
    features: [
      "Máximo 3 alunos por fisioterapeuta",
      "Garantia de reposição de aulas com aviso prévio",
      "Acompanhamento e reavaliações posturais trimestrais",
      "Horários fixos reservados exclusivamente para você",
      "Desconto especial em pagamentos semestrais",
      "Parcelamento facilitado sem burocracia"
    ],
    ctaText: "Simular Valores Semestral",
    ctaType: "whatsapp",
    prefilledMessage: "Olá! Tenho interesse no Plano Semestral do VanderVentura Pilates. Pode me passar os valores para 2x ou 3x por semana?"
  },
  {
    id: "trimestral",
    title: "Plano Trimestral",
    subtitle: "Ideal para reabilitação focada de crises agudas e alívio de dor",
    pricePerSession: "A partir de R$ 69",
    priceTotal: "Ciclo de 3 meses de tratamento",
    period: "/mês",
    features: [
      "3 meses de transformação postural supervisionada",
      "Turmas reduzidas de alto padrão clínico",
      "Direito a reposições dentro do ciclo trimestral",
      "Treinamento nos 4 aparelhos clássicos completos",
      "Atendimento individualizado para cada queixa"
    ],
    ctaText: "Consultar Plano Trimestral",
    ctaType: "whatsapp",
    prefilledMessage: "Olá! Gostaria de detalhes e valores do Plano Trimestral de Pilates no VanderVentura."
  }
];

export const SCHEDULE_OPTIONS: ScheduleOption[] = [
  {
    shift: "manha",
    label: "Turno da Manhã",
    hours: "07:00 às 13:00 (Segunda a Sexta)",
    availableDays: ["Seg", "Ter", "Qua", "Qui", "Sex"],
    status: "Vagas Disponíveis"
  },
  {
    shift: "tarde",
    label: "Turno da Tarde",
    hours: "15:00 às 18:00 (Segunda a Sexta)",
    availableDays: ["Seg", "Ter", "Qua", "Qui", "Sex"],
    status: "Últimas Vagas"
  },
  {
    shift: "noite",
    label: "Turno da Noite (Horário Nobre)",
    hours: "18:00 às 21:00 (Segunda a Sexta)",
    availableDays: ["Seg", "Ter", "Qua", "Qui", "Sex"],
    status: "Últimas Vagas"
  },
  {
    shift: "sabado",
    label: "Turno de Sábado",
    hours: "07:00 às 12:00 (Sábado)",
    availableDays: ["Sáb"],
    status: "Vagas Disponíveis"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Dra. Camila Vasconcelos",
    role: "Médica Cardiologista",
    rating: 5,
    badge: "ALÍVIO DE HÉRNIA DE DISCO",
    comment: "Eu sofria com crises constantes de dor lombar por ficar muitas horas em pé e sentada no consultório. O VanderVentura foi um divisor de águas: pelo fato de serem fisioterapeutas com no máximo 3 alunos, o cuidado postural é cirúrgico. Uso meu Wellhub toda semana!",
    verified: true,
    achievement: "Sem crises há 14 meses"
  },
  {
    id: "rev-2",
    name: "Rodrigo Mendonça",
    role: "Corredor Amador & Gestor de TI",
    rating: 5,
    badge: "PERFORMANCE DE CORRIDA",
    comment: "Comecei para soltar a fáscia e melhorar o quadril para a meia maratona. O estúdio é impecável, climatizado e os aparelhos de primeira linha. O ambiente transmite uma energia muito boa. Recomendo de olhos fechados!",
    verified: true,
    achievement: "Melhorou pace e mobilidade de quadril"
  },
  {
    id: "rev-3",
    name: "Beatriz Nogueira",
    role: "Professora Universitária",
    rating: 5,
    badge: "TOTALPASS OFICIAL",
    comment: "Fácil acesso aqui na Cupecê perto do Jardim Prudência. O atendimento pelo WhatsApp para marcar reposições ou check-in do Totalpass é super rápido e cordial. Minha postura melhorou 100%.",
    verified: true,
    achievement: "Frequência contínua de 1 ano"
  },
  {
    id: "rev-4",
    name: "Marcos Aurelio Silveira",
    role: "Empresário",
    rating: 5,
    badge: "QUALIDADE DE VIDA 50+",
    comment: "Nunca tinha feito pilates na vida, achava que era só alongamento. Me surpreendi com a força e controle que o Reformer exige! Os profissionais explicam cada respiração e corrigem cada milímetro.",
    verified: true,
    achievement: "Ganho de força central e equilíbrio"
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    id: "faq-1",
    category: "passes",
    question: "Como funciona para quem usa Wellhub (Gympass) ou Totalpass?",
    answer: "É extremamente simples e sem burocracia! Você entra em contato conosco pelo WhatsApp para escolher o dia e horário que melhor se encaixam na sua rotina. Após reservado, basta realizar o check-in normalmente no aplicativo Wellhub ou validar o token do Totalpass na recepção do estúdio. Não cobramos taxas adicionais de uso dos aparelhos."
  },
  {
    id: "faq-2",
    category: "classes",
    question: "Quantos alunos treinam por horário com o fisioterapeuta?",
    answer: "No VanderVentura mantemos um padrão de excelência clínica inegociável: no máximo 3 alunos por instrutor/fisioterapeuta. Isso assegura que cada aluno realize os exercícios no seu próprio ritmo, com correções posturais imediatas e acompanhamento individualizado para sua patologia ou objetivo."
  },
  {
    id: "faq-3",
    category: "health",
    question: "Nunca fiz Pilates e tenho dores na coluna ou hérnia de disco. Posso fazer?",
    answer: "Com certeza! Essa é a nossa principal especialidade. O método Joseph Pilates com base em Fisioterapia foi concebido justamente para reabilitação e descompressão axial. Na sua primeira aula, nossos fisioterapeutas avaliam suas limitações e adaptam as molas e os ângulos para que você fortaleça sua musculatura sem nenhum risco de lesão."
  },
  {
    id: "faq-4",
    category: "studio",
    question: "Como funciona a reposição de aulas em caso de imprevisto?",
    answer: "Entendemos que a rotina em São Paulo pode ser imprevisível. Avisando com até 2 horas de antecedência pelo WhatsApp, você não perde sua aula e pode reagendar a reposição dentro dos horários disponíveis no mesmo mês vigente."
  },
  {
    id: "faq-5",
    category: "passes",
    question: "O estúdio possui estacionamento ou facilidade de acesso?",
    answer: "Sim! Estamos estrategicamente localizados na Av. Cupecê, 2875 (Salas 4 e 6), entre o Jardim Prudência e Cidade Ademar, com facilidade para estacionar nas proximidades, pontos de ônibus próximos e ambiente térreo seguro e climatizado."
  }
];

export const POSTURE_POINTS = [
  {
    id: "cervical",
    title: "Alinhamento Cervical e Trapézios",
    beforeText: "Projeção anterior da cabeça ('text neck') causada por telas e estresse, gerando cefaleias tensionais e queimação no pescoço.",
    afterText: "Ativação dos flexores profundos do pescoço e descompressão de C1-C7, devolvendo a leveza e alívio imediato da tensão.",
    benefitPercent: "+42% de descompressão cervical"
  },
  {
    id: "toracica",
    title: "Abertura Escapular & Hipercifose",
    beforeText: "Ombros caídos para frente, encurtamento peitoral severo e perda da capacidade de expansão pulmonar.",
    afterText: "Estabilização do trapézio inferior e serrátil anterior nos aparelhos Reformer e Barrel, abrindo o peito e alinhando a postura naturalmente.",
    benefitPercent: "Postura ereta e elegante sem esforço"
  },
  {
    id: "lombar",
    title: "Powerhouse & Descompressão Lombar",
    beforeText: "Glúteos e abdômen inativos ('amnésia glútea'), sobrecarregando a fáscia lombar e comprimindo os discos L4-L5 e L5-S1.",
    afterText: "Acionamento do transverso do abdômen e assoalho pélvico, criando uma verdadeira cinta muscular natural que blinda a coluna contra hérnias.",
    benefitPercent: "-85% de queixas de dor lombar em 8 semanas"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
    title: "Reformer Precision",
    caption: "Biomecânica e controle de molas em treino de flexibilidade ativa",
    tag: "APARELHOS"
  },
  {
    url: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?auto=format&fit=crop&w=1000&q=80",
    title: "Cadillac Extension",
    caption: "Descompressão axial e mobilidade vertebral em suspensão",
    tag: "REABILITAÇÃO"
  },
  {
    url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    title: "Spine Alignment",
    caption: "Correção postural tridimensional orientada por fisioterapeutas",
    tag: "POSTURA"
  },
  {
    url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
    title: "Core Powerhouse",
    caption: "Estabilidade lombo-pélvica e fortalecimento de estabilizadores",
    tag: "FORÇA"
  },
  {
    url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
    title: "Mobilidade e Fluidez",
    caption: "Ambiente climatizado e acolhedor para transformar seu dia",
    tag: "BEM-ESTAR"
  },
  {
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80",
    title: "Treinamento Funcional",
    caption: "Aulas de até 3 alunos para foco absoluto em você",
    tag: "ATENDIMENTO"
  }
];
