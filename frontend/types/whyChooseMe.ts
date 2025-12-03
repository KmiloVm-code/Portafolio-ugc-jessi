export interface WhyChooseMe {
  id: string;
  title: string;
  description: string;
  items: WhyChooseMeItem[];
}

export interface WhyChooseMeItem {
  id: string;
  text: string;
}
