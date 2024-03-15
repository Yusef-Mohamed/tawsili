"use client";
import FormInputs from "@/components/FormInputs";
import { IInput, StepProps } from "@/types";
import { useTranslations } from "next-intl";
import { PaymentInfoInputs } from "./constants";
import Button from "@/components/ui/button";
import { useMemo, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Link } from "@/navigation";

export const PaymentInfoStep: React.FC<StepProps> = ({
  setData,
  currentStep,
  data,
  setCurrentStep,
}) => {
  const text = useTranslations("joinUsPage");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const myInputs = useMemo(() => {
    return PaymentInfoInputs.map((input) => {
      return {
        ...input,
        value: data[input.name],
      };
    });
  }, [data]);
  return (
    <>
      <form
        onSubmit={handelSubmit}
        className="bg-main-gray p-8 flex flex-col rounded-xl min-h-[50vh]"
      >
        <div className="flex-grow">
          <FormInputs inputs={myInputs as IInput[]} setData={setData} />
        </div>
        <Button isRounded className="block mt-6 w-3/4 mx-auto">
          {text("next")}
        </Button>
      </form>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <h1 className="text-2xl mt-4 font-semibold text-center">
          {text("joining_done")}
        </h1>
        <p className="text-center mt-4 text-gray-500">
          {text("joining_done_desc")}
        </p>

        <Link
          href="/"
          className="block mt-6 w-3/4 mx-auto bg-main-red font-semibold text-white px-6 py-3 rounded-full"
          onClick={() => setCurrentStep(currentStep + 1)}
        >
          {text("done")}
        </Link>
      </Modal>
    </>
  );
};
