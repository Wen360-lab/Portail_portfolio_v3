import Link from "next/link";
import { IconType } from "react-icons";

type LinkProps = {
  link: {
    label: string,
    url: string
  };
  icon?: IconType;
};

export default function Btn({ link, icon: Icon }: LinkProps) {
  return (
    <Link
        href={link.url!}
      className="bg-primary text-white px-4 py-3 rounded-lg cursor-pointer flex items-center gap-2 text-sm font-semibold"
    >
      {link.label}
      {Icon && <Icon />}
    </Link>
  );
}