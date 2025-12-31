
import { PropertyListing, PropertyType, Testimonial } from './types';

export const PROPERTIES: PropertyListing[] = [
  {
    id: '1',
    title: 'Edificio Plaza Centro',
    location: 'Santiago, RM',
    type: PropertyType.ESTACIONAMIENTO,
    totalValueUF: 380,
    downPaymentUF: 35,
    monthlyInstallmentCLP: 120000,
    size: '12.5 m²',
    availability: 'Entrega Inmediata',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFez6_ZZQerUxYtkiAr297Ewtyj6dDC3U4cT0c10Gzm2PH4GOCU6WHfG81QMIM02DiEHWwLOz6s5wpPNxLptyViZuGGdXap3XTgtyn4PAy5T-TN8FxYccUY0cwt60h-CEqRKvvjmnWsl25ri3z-PPWeHUI1uFSqKB_jNq5zBi1PXLf2v8Uwm1ih9UoLFXAhDKQt_NSxmuBQ-USzBVEpnPvLhCEHcvD3PvcTMWtyEzMkSa81wJCEoizSt3_I4JmBryIkB8rb_ERjzSq',
    tag: 'Entrega Inmediata'
  },
  {
    id: '2',
    title: 'Bodegas Las Condes',
    location: 'Las Condes, RM',
    type: PropertyType.BODEGA,
    totalValueUF: 150,
    downPaymentUF: 15,
    monthlyInstallmentCLP: 65000,
    size: '6 m²',
    availability: '2024',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZEplkH9Xb0rCZXUbYmV2XSQAvHzfH0Da-B3-iqLBJ36bFL7caJItN0eOziLzSYsaomtrhcFjDw3UxmJnJ86jCMAISn8mRn4lMlpHdkFaBM4RdqZs7PJx0S4cm4xeir6rS_BsxbKHnO2MU1mBFPDmpF2-ecMtyydJsVy4xX9FukleoKhDma7SaEgFnvrCS8zjNAmg4U-14_wu1Om1vXMisLeyZsQDen8YyuQaOVzrLpWLZxlhS4_rYWuKDSskDfPySYaiTkmOQNELE',
    roi: '8.5% anual'
  },
  {
    id: '3',
    title: 'Altos del Valle',
    location: 'Limache, Valparaíso',
    type: PropertyType.PARCELA,
    totalValueUF: 980,
    downPaymentUF: 150,
    monthlyInstallmentCLP: 250000,
    size: '5.000 m²',
    availability: 'Factibilidad',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC03Hu22tUb-aK8NrKDU30_KQAAJNtD98HfudGc0OZOqYq91He9DwV2SwvYYq2i1i908o7PBAWh4EFe1dOtKJK6ilNrhLr91YjJ4ozXkabUwnlIpGhdOcDtiyLiympX8_Pun25RXyopkbVF2XwNHRe5z-FRkxVuwI_UZN40abcnLq2HmBiSkJdq1MEhCl9_5KUmloAGsBlY581eAnhRUjbc9rRWlnBeCX1QbVqtfhJao59oUdZms_w7d0kJiHFa5gJw4LZpo7WUG7VB'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Ramírez',
    role: 'Inversionista desde 2022',
    content: '"Compré dos estacionamientos en Santiago Centro. El proceso fue increíblemente rápido, mucho mejor que ir al banco."',
    initials: 'CR',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    name: 'María Vargas',
    role: 'Inversionista desde 2023',
    content: '"Siempre quise una parcela en el sur pero no tenía todo el capital. El crédito directo de PropMarket lo hizo posible."',
    initials: 'MV',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    name: 'Jorge Pizarro',
    role: 'Inversionista desde 2023',
    content: '"La plataforma es muy intuitiva. Pude ver toda la documentación legal de la bodega antes de decidirme."',
    initials: 'JP',
    color: 'bg-green-100 text-green-600'
  }
];
