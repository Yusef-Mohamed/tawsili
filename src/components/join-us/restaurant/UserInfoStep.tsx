import FormInputs from "@/components/FormInputs";
import { IInput, StepProps } from "@/types";
import { useTranslations } from "next-intl";
import { Terms, UserInfoInputs } from "./constants";
import Button from "@/components/ui/button";
import { useMemo } from "react";

export const UserInfoStep: React.FC<StepProps> = ({
  setData,
  currentStep,
  data,
  setCurrentStep,
}) => {
  const text = useTranslations("joinUsPage");
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentStep(currentStep + 1);
  };
  const myInputs = useMemo(() => {
    return UserInfoInputs.map((input) => {
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
        {" "}
        <FormInputs inputs={myInputs as IInput[]} setData={setData} />
        <div className="text-xs sm:text-base">
          <p className="font-semibold">{text("our_terms")}</p>
          {Terms.map((term, index) => {
            return (
              <div key={index} className="flex items-center gap-2 my-2">
                <input
                  type="checkbox"
                  id={term}
                  name={term}
                  required
                  className="border-none"
                />
                <label htmlFor={term} className="font-semibold">
                  {text(term)}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <Button isRounded className="block mt-6 w-3/4 mx-auto">
        {text("next")}
      </Button>
    </form>
  );
};
