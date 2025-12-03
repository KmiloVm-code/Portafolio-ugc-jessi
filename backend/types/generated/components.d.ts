import type { Schema, Struct } from '@strapi/strapi';

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
    icon: Schema.Attribute.Media<'images'>;
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
    text: Schema.Attribute.Text;
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

export interface LayoutAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_layout_about_sections';
  info: {
    displayName: 'About Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'component.text-list', true>;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.social-links': ComponentSocialLinks;
      'component.text-list': ComponentTextList;
      'component.video-tik-tok': ComponentVideoTikTok;
      'layout.about-section': LayoutAboutSection;
      'layout.hero-section': LayoutHeroSection;
      'layout.portfolio-section': LayoutPortfolioSection;
    }
  }
}
