"use client";
import { useState } from "react";
import { UserInfoStep } from "./UserInfoStep";
import { PublicInfoStep } from "./PublicInfoStep";
import { PaymentInfoStep } from "./PaymentInfoStep";
import { IJoinUsRestaurantForm } from "@/types";
import { BranchesInfoStep } from "./BranchesInfoStep";

interface JoinUsRestaurantFormProps {
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const JoinUsRestaurantForm: React.FC<JoinUsRestaurantFormProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  const [data, setData] = useState<IJoinUsRestaurantForm>({
    branches: [],
    email: "",
    name: "",
    country: "",
    phone: "",
    restaurant_arabic_name: "",
    restaurant_english_name: "",
    restaurant_type: "",
    national_address: "",
    restaurant_logo: null,
    restaurant_menu: null,
    marketing_email: "",
    marketing_contact_number: "",
    management_email: "",
    management_contact_number: "",
    trade_file: "",
    accounting_email: "",
    bank_name: "",
    beneficiary_name: "",
    IBANFile: null,
  });
  return (
    <>
      {currentStep === 0 && (
        <UserInfoStep
          setData={setData}
          currentStep={currentStep}
          data={data}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 1 && (
        <PublicInfoStep
          setData={setData}
          currentStep={currentStep}
          data={data}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 2 && (
        <BranchesInfoStep
          setData={setData}
          currentStep={currentStep}
          data={data}
          setCurrentStep={setCurrentStep}
        />
      )}
      {currentStep === 3 && (
        <PaymentInfoStep
          setData={setData}
          currentStep={currentStep}
          data={data}
          setCurrentStep={setCurrentStep}
        />
      )}
    </>
  );
};

export default JoinUsRestaurantForm;
