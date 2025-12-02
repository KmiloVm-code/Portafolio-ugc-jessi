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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.social-links': ComponentSocialLinks;
      'layout.hero-section': LayoutHeroSection;
    }
  }
}
