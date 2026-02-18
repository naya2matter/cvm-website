"use client";

import dynamic from "next/dynamic";
import { HeroData } from "./hero.types";

const HeroSection = dynamic(() => import("./HeroSection"), { ssr: false });

interface Props {
  heroData: HeroData;
}

export default function HeroClient({ heroData }: Props) {
  return <HeroSection heroData={heroData} />;
}
