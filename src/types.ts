import { LatLngExpression } from "leaflet";
import React from "react";

export interface IStep {
  title: string;
  icon: React.ReactNode;
}
export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  slug: string;
  myValue?: string | File;
  values?: {
    value: string;
    label: string;
    isTranslated: boolean;
  }[];
}

export interface IBranch {
  name: string;
  late: number;
  long: number;
  from: string;
  to: string;
  want_device: boolean;
  id: number;
}
export interface IJoinUsRestaurantForm {
  branches: IBranch[];
  email: string;
  name: string;
  country: string;
  phone: string;
  restaurant_arabic_name: string;
  restaurant_english_name: string;
  restaurant_type: string;
  national_address: string;
  restaurant_logo: File | null;
  restaurant_menu: File | null;
  marketing_email: string;
  marketing_contact_number: string;
  management_email: string;
  management_contact_number: string;
  trade_file: string;
  IBANFile: File | null;
  bank_name: string;
  beneficiary_name: string;
  accounting_email: string;
}
export interface StepProps {
  setData: (updateFunction: (prev: any) => any) => void;
  data: IJoinUsRestaurantForm;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}
export interface ISidebarLink {
  slug: string;
  to: string;
  className?: string;
  icon?: React.ReactNode;
}
