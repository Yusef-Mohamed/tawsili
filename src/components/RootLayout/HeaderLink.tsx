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
    <Link
      href={"/"}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (fn) fn();
        const element = document.getElementById(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }}
    >
      {children}
    </Link>
  );
};

export default HeaderLink;
