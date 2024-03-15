import { cn } from "@/lib/utils";

interface SwitchProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  size?: "sm" | "md" | "lg";
}
const Switch: React.FC<SwitchProps> = ({ checked, onChange, size = "sm" }) => {
  let sizeVal = 0;
  if (size === "sm") {
    sizeVal = 6;
  } else if (size === "md") {
    sizeVal = 8;
  } else if (size === "lg") {
    sizeVal = 10;
  }
  return (
    <button
      onClick={() => onChange(!checked)}
      type="button"
      className={`h-${sizeVal} bg-main-gray flex items-center  w-${
        sizeVal * 2
      } rounded-full`}
    >
      <div
        className={cn(
          `transition-all duration-200 h-${sizeVal} w-${sizeVal} rounded-full`,
          {
            "bg-green-500": checked,
            "bg-main-red ms-auto": !checked,
          }
        )}
      />
    </button>
  );
};

export default Switch;
