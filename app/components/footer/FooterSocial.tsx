
import Image from "next/image";
import { SocialMediaItem } from "./footer.types";

interface Props {
  socialMedia: SocialMediaItem[];
}

export default function FooterSocial({ socialMedia }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className=" font-bold text-[20px] text-center">Social media</p>
      <div className="flex items-center gap-6 justify-center">
        {socialMedia.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={item.iconUrl}
            alt={item.platform}
            width={27.805557250976562}
            height={27.805557250976562}
            className="hover:opacity-80 transition"
          />
        </a>
      ))}
      </div>
    </div>
  );
}
