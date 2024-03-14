import { IStep } from "@/types";
import { useTranslations } from "next-intl";
import { CiCircleCheck } from "react-icons/ci";

interface JoinUsProgressProps {
  steps: IStep[];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}
export const JoinUsProgress: React.FC<JoinUsProgressProps> = ({
  currentStep,
  setCurrentStep,
  steps,
}) => {
  const text = useTranslations("joinUsPage");
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 my-4">
      {steps.map((step, index) => (
        <button
          onClick={() => setCurrentStep(index)}
          className="flex flex-col text-main-red justify-center items-center gap-2"
          key={index}
        >
          <div className="w-fit text-4xl">
            {currentStep > index ? <CiCircleCheck /> : step.icon}
          </div>
          <span className="font-semibold">{text(step.title)}</span>
        </button>
      ))}
    </div>
  );
};
