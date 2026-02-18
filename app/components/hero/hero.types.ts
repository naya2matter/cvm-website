export interface HeroImage {
  id: string | number;
  src: string;  // Image source URL
  alt: string;  // Alt text for image
}

export interface HeroVideo {
  id: string | number;
  src: string;  // Video source URL
}

export interface HeroData {
  title: string;                   // Main hero title
  subtitle: string;                // Subtitle text
  // Background can be a single image, a single video, or an array of images/videos
  background: HeroImage | HeroVideo | (HeroImage | HeroVideo)[];
  contactLabel: string;            // Text for the contact button
  contactLink: string;             // Link to contact page
}
