// Types para a Landing Page

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export interface Project {
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Differential {
  icon: React.ReactNode;
  title: string;
  description: string;
}

