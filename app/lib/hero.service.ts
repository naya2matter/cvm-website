import { HeroData, HeroVideo } from "../components/hero/hero.types";

export async function getHeroData(): Promise<HeroData> {
  return {
    title: "Commercial Vision Group",
    subtitle: "Built around your vision",
    background: {
      id: 1,
      src: "/videos/herobg.mp4", // Video background
    } as HeroVideo,  // Only video background for now
    contactLabel: "Contact Us",
    contactLink: "/#contact",
  };
}
