import Image from "next/image";
import Link from "next/link";
import { ASSETS } from "@/config/assets";
import { SITE_CONFIG } from "@/config/site";

type BrandLogoProps = {
  onClick?: () => void;
};

export default function BrandLogo({ onClick }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="relative block h-8 w-28 shrink-0 sm:h-9 sm:w-32 md:h-10 md:w-36"
      onClick={onClick}
    >
      <Image
        src={ASSETS.logo}
        alt={SITE_CONFIG.name}
        fill
        sizes="(max-width: 768px) 112px, 144px"
        className="object-contain object-left"
        priority
      />
    </Link>
  );
}
