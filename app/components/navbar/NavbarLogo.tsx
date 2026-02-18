import Image from "next/image";
import Link from "next/link";

export default function NavbarLogo({ logoUrl }: { logoUrl: string }) {
  return (
    <Link href="/">
      <Image src={logoUrl} alt="logo" width={100} height={60} priority />
    </Link>
  );
}
