export interface Service {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface HeroCardProps {
  service: Service;
}


