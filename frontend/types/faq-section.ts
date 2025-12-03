export interface FAQSectionType {
  id: number;
  title: string;
  description: string;
  whatsapp: {
    id: number;
    message: string;
    phone: number;
  };
}
