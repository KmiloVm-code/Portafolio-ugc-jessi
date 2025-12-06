export interface WhyChooseMe {
  __component: "layout.why-choose-me-section";
  id: number;
  title: string;
  description: string;
  items: WhyChooseMeItem[];
}

export interface WhyChooseMeItem {
  id: string;
  text: string;
}
