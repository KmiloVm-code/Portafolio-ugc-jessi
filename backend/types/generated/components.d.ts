import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_component_image_galleries';
  info: {
    displayName: 'Image Gallery';
    icon: 'picture';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_component_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'twitter';
  };
  attributes: {
    href: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
  };
}

export interface ComponentTextList extends Struct.ComponentSchema {
  collectionName: 'components_component_text_lists';
  info: {
    displayName: 'Text List';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface ComponentVideoAbout extends Struct.ComponentSchema {
  collectionName: 'components_component_video_abouts';
  info: {
    displayName: 'Video About';
    icon: 'play';
  };
  attributes: {
    poster: Schema.Attribute.Media<'images'>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface ComponentVideoTikTok extends Struct.ComponentSchema {
  collectionName: 'components_component_video_tik_toks';
  info: {
    displayName: 'Video TikTok';
    icon: 'play';
  };
  attributes: {
    category: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video_id: Schema.Attribute.String;
    views: Schema.Attribute.Integer;
  };
}

export interface ComponentWhatsapp extends Struct.ComponentSchema {
  collectionName: 'components_component_whatsapps';
  info: {
    displayName: 'Whatsapp';
    icon: 'user';
  };
  attributes: {
    message: Schema.Attribute.Text;
    phone: Schema.Attribute.BigInteger;
  };
}

export interface LayoutAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'component.text-list', true>;
    title: Schema.Attribute.String;
    video_about: Schema.Attribute.Component<'component.video-about', false>;
  };
}

export interface LayoutFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_faq_sections';
  info: {
    displayName: 'Faq Section';
    icon: 'lightbulb';
  };
  attributes: {
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
    whatsapp: Schema.Attribute.Component<'component.whatsapp', false>;
  };
}

export interface LayoutHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'stack';
  };
  attributes: {
    description: Schema.Attribute.Text;
    portada: Schema.Attribute.Media<'images'>;
    social: Schema.Attribute.Component<'component.social-links', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutImagesSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_images_sections';
  info: {
    displayName: 'Images Section';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Component<'component.image-gallery', true>;
    instagram_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutPortfolioSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_portfolio_sections';
  info: {
    displayName: 'Portfolio Section';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tiktok_url: Schema.Attribute.String;
    tiktok_videos: Schema.Attribute.Component<'component.video-tik-tok', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutWhyChooseMeSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_why_choose_me_sections';
  info: {
    displayName: 'whyChooseMe Section';
    icon: 'crown';
  };
  attributes: {
    description: Schema.Attribute.String;
    items: Schema.Attribute.Component<'component.text-list', true>;
    title: Schema.Attribute.String;
    whatsapp: Schema.Attribute.Component<'component.whatsapp', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.image-gallery': ComponentImageGallery;
      'component.social-links': ComponentSocialLinks;
      'component.text-list': ComponentTextList;
      'component.video-about': ComponentVideoAbout;
      'component.video-tik-tok': ComponentVideoTikTok;
      'component.whatsapp': ComponentWhatsapp;
      'layout.about-section': LayoutAboutSection;
      'layout.faq-section': LayoutFaqSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.images-section': LayoutImagesSection;
      'layout.portfolio-section': LayoutPortfolioSection;
      'layout.why-choose-me-section': LayoutWhyChooseMeSection;
    }
  }
}
