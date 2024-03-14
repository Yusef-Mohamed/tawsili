import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isRounded?: boolean;
  asChild?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  isRounded,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "bg-main-red font-semibold text-white px-6 py-3",
        className,
        {
          "rounded-full": isRounded,
        }
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
