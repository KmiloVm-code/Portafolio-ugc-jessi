export interface FAQSectionType {
  __component: "layout.faq-section";
  id: number;
  title: string;
  description: string;
  whatsapp: {
    id: number;
    message: string;
    phone: number;
  };
}
