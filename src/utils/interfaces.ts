export interface BlogBody {
  section: number;
  type: string; //paragraph | header1 | header2 | image | itemize | enumerate | link | code  | iframe
  text?: string;
  url?: string;
  items?: {
    title?: string;
    body: string;
  }[],
  imageCaption?: string;
  language?: string;
  code?: string;
}

export interface Blog {
  id: string;
  title: string;
  body: BlogBody[];
  author: User;
  date: Date;
}

export interface User {
  name: string;
  job: string;
  description: string;
  image: string;
  contact: string;
}

export interface Formation {
  formation_id: string;
  title: string;
  category: string;
  hero: string;
  description: string;
  objectives: string[];
  program: {
    title: string;
    parts: string[];
  }[],
  targets: string[],
  prerequisites: string[],
  price: number;
  duration: number;
  image_url: string;
}

export interface Category{
  category_id: string;
  name: string;
  description: string;
  image: string
}

export interface DevisInputs {
  formation: string;
  entreprise: string;
  fullname: string;
  telephone: string;
  email: string;
  message: string;
}

export interface DevisPayload {
  formation: string;
  price: number;
  duration: number;
  entreprise: string;
  fullname: string;
  telephone: string;
  email: string;
  message: string;
  date: Date;
}

export interface ContactUsPayload {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  message: string;
}