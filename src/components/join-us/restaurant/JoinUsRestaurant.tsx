"use client";
import { FaRegUserCircle } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { LuStore } from "react-icons/lu";
import { FaCreditCard } from "react-icons/fa6";
import { JoinUsProgress } from "@/components/join-us/restaurant/JoinUsProgress";
import { IStep } from "@/types";
import JoinUsRestaurantForm from "@/components/join-us/restaurant/JoinUsRestaurantForm";
import JoinUsHeader from "@/components/join-us/restaurant/JoinUsHeader";
import { useState } from "react";
const steps: IStep[] = [
  {
    title: "user_info",
    icon: <FaRegUserCircle />,
  },
  {
    title: "public_info",
    icon: <GiMeal />,
  },
  {
    title: "branches_info",
    icon: <LuStore />,
  },
  {
    title: "payment_info",
    icon: <FaCreditCard />,
  },
];
export const JoinUsRestaurant = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <section className="mini-container max-w-[900px]">
      <JoinUsHeader />
      <JoinUsProgress
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        steps={steps}
      />
      <JoinUsRestaurantForm
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </section>
  );
};
