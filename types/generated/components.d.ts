import type { Struct, Schema } from '@strapi/strapi';

export interface LayoutNavigation extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
    link: Schema.Attribute.Component<'elements.link', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    description: '';
  };
  attributes: {
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
    description: Schema.Attribute.Text;
    colOneLinks: Schema.Attribute.Component<'elements.link', true>;
    colTwoLinks: Schema.Attribute.Component<'elements.link', true>;
    socialLinks: Schema.Attribute.Component<'elements.social-links', false>;
  };
}

export interface ElementsSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Links';
    description: '';
  };
  attributes: {
    heading: Schema.Attribute.String;
    socialLink: Schema.Attribute.Component<'elements.link', true>;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    image: Schema.Attribute.Media;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.navigation': LayoutNavigation;
      'layout.footer': LayoutFooter;
      'elements.social-links': ElementsSocialLinks;
      'elements.logo-link': ElementsLogoLink;
      'elements.link': ElementsLink;
    }
  }
}
