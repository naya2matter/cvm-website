import Image from "next/image";
import { FooterBrand as BrandType } from "./footer.types";

interface Props {
  brand: BrandType;
}

export default function FooterBrand({ brand }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className=" flex flex-col items-center justify-center  gap-2.5 p-2">
        <Image src={brand.logoUrl} alt={brand.title} width={56.77776336669922} height={35.447208404541016} />
        <p className=" font-semibold text-[14px] text-center text-[#1E1E1E]">{brand.title}</p>
      </div>
      <p className="font-semibold text-[21px] text-center text-[#1E1E1E]">{brand.copyright}</p>
    </div>
  );
}
