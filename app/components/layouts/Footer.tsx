import { FooterData } from "../footer/footer.types";
import FooterBrand from "../footer/FooterBrand";
import FooterContact from "../footer/FooterContact";
import FooterSocial from "../footer/FooterSocial";

interface Props {
  data: FooterData;
}

export default function Footer({ data }: Props) {
  return (
    <footer className="bg-[#F68620] text-[#1E1E1E] p-11.5 min-h-[295px]  ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="lg:w-[651px]">
          <FooterBrand brand={data.brand} />
        </div>
        <div className="flex flex-col items-center justify-center gap-[38px] lg:w-[651px]">
          <FooterSocial socialMedia={data.socialMedia} />
          <FooterContact contact={data.contact} />
        </div>
      </div>
    </footer>
  );
}
