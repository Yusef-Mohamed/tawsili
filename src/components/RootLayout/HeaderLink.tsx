"use client";
import { Link } from "@/navigation";

interface HeaderLinkProps {
  href: string;
  fn?: () => void;
  children: React.ReactNode;
  className?: string;
}
const HeaderLink: React.FC<HeaderLinkProps> = ({
  className,
  children,
  href,
  fn,
}) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default HeaderLink;
