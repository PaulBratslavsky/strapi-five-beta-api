import type { Struct, Schema } from '@strapi/strapi';

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

export interface ElementsItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    icon: Schema.Attribute.Enumeration<['CHECK']>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    text: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.String;
    image: Schema.Attribute.Media;
  };
}

export interface LayoutYtVideo extends Struct.ComponentSchema {
  collectionName: 'components_layout_yt_videos';
  info: {
    displayName: 'YT Video';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    videoId: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface LayoutSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_layout_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    preHeading: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

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

export interface LayoutHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    cta: Schema.Attribute.Component<'elements.link', false>;
    image: Schema.Attribute.Media;
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

export interface LayoutFaQs extends Struct.ComponentSchema {
  collectionName: 'components_layout_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    questions: Schema.Attribute.Relation<'oneToMany', 'api::question.question'>;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
    cta: Schema.Attribute.Component<'elements.link', false>;
  };
}

export interface LayoutContentItems extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_items';
  info: {
    displayName: 'Content Items';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    image: Schema.Attribute.Media;
    item: Schema.Attribute.Component<'elements.item', true>;
    imageRight: Schema.Attribute.Boolean;
  };
}

export interface LayoutContentImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_content_images';
  info: {
    displayName: 'Content Image';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
    image: Schema.Attribute.Media;
    imageRight: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface LayoutCardQuote extends Struct.ComponentSchema {
  collectionName: 'components_layout_card_quotes';
  info: {
    displayName: 'Card Quote';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.social-links': ElementsSocialLinks;
      'elements.logo-link': ElementsLogoLink;
      'elements.link': ElementsLink;
      'elements.item': ElementsItem;
      'elements.card': ElementsCard;
      'layout.yt-video': LayoutYtVideo;
      'layout.section-heading': LayoutSectionHeading;
      'layout.navigation': LayoutNavigation;
      'layout.hero': LayoutHero;
      'layout.footer': LayoutFooter;
      'layout.fa-qs': LayoutFaQs;
      'layout.cta': LayoutCta;
      'layout.content-items': LayoutContentItems;
      'layout.content-image': LayoutContentImage;
      'layout.card-quote': LayoutCardQuote;
    }
  }
}
