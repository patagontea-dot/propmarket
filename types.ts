
export enum PropertyType {
  BODEGA = 'Bodega',
  ESTACIONAMIENTO = 'Estacionamiento',
  PARCELA = 'Parcela',
  ESTUDIO = 'Estudio'
}

export interface PropertyListing {
  id: string;
  title: string;
  location: string;
  type: PropertyType;
  totalValueUF: number;
  downPaymentUF: number;
  monthlyInstallmentCLP: number;
  size: string;
  availability: string;
  image: string;
  tag?: string;
  roi?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
  color: string;
}
