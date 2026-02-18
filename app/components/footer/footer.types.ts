export interface SocialMediaItem {
  id: string;
  platform: string; // instagram, facebook, linkedin...
  iconUrl: string;
  link: string;
}

export interface ContactInfo {
  text: string;
  phone?: string;
  email?: string;
}

export interface FooterBrand {
  logoUrl: string;
  title: string;
  copyright: string;
}

export interface FooterData {
  brand: FooterBrand;
  socialMedia: SocialMediaItem[];
  contact: ContactInfo[];
}
