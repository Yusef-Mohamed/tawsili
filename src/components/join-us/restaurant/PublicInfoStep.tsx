import FormInputs from "@/components/FormInputs";
import { IInput, StepProps } from "@/types";
import { PublicInfoInputs } from "./constants";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";
import { useMemo } from "react";

export const PublicInfoStep: React.FC<StepProps> = ({
  setData,
  currentStep,
  setCurrentStep,
  data,
}) => {
  const text = useTranslations("joinUsPage");
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };

  const myInputs = useMemo(() => {
    return PublicInfoInputs.map((input) => {
      return {
        ...input,
        value: data[input.name],
      };
    });
  }, [data]);
  return (
    <form
      onSubmit={handelSubmit}
      className="bg-main-gray p-8 flex flex-col rounded-xl min-h-[50vh]"
    >
      <div className="flex-grow">
        <FormInputs
          inputs={myInputs.slice(0, myInputs.length - 4) as IInput[]}
          setData={setData}
        />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
          <FormInputs
            inputs={myInputs.slice(myInputs.length - 4) as IInput[]}
            setData={setData}
          />
        </div>
      </div>
      <Button isRounded className="block mt-6 w-3/4 mx-auto">
        {text("next")}
      </Button>
    </form>
  );
};
