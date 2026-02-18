export interface NavItem {
  id: string | number;
  label: string;
  link: string;
}

export interface NavContact {
  label: string;
  link: string;
}

export interface NavbarData {
  logoUrl: string;
  items: NavItem[];
  contact?: NavContact;
}
