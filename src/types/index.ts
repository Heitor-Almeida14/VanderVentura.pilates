export interface Apparatus {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  focusMuscles: string[];
  clinicalBenefit: string;
  image: string;
  specs: {
    resistanceType: string;
    level: string;
    capacity: string;
  };
}

export interface PlanItem {
  id: string;
  title: string;
  subtitle: string;
  pricePerSession?: string;
  priceTotal?: string;
  period?: string;
  badge?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaType: 'whatsapp' | 'modal';
  prefilledMessage: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  badge: string;
  comment: string;
  verified: boolean;
  achievement: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'passes' | 'classes' | 'health' | 'studio';
}

export interface ScheduleOption {
  shift: 'manha' | 'tarde' | 'noite' | 'sabado';
  label: string;
  hours: string;
  availableDays: string[];
  status: 'Vagas Disponíveis' | 'Últimas Vagas' | 'Lista de Espera';
}
