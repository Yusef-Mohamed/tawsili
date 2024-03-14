import { IInput, IJoinUsRestaurantForm } from "@/types";
interface ThisInput extends IInput {
  name: keyof IJoinUsRestaurantForm;
}
export const Terms = ["no_hospitals", "no_military", "no_malls"];
export const UserInfoInputs: ThisInput[] = [
  {
    slug: "email",
    type: "email",
    placeholder: "email_placeholder",
    name: "email",
    required: true,
  },
  {
    slug: "name",
    name: "name",
    type: "text",
    required: true,
  },
  {
    name: "country",
    type: "text",
    slug: "country",
    required: true,
  },
  {
    name: "phone",
    type: "text",
    slug: "phone",
    required: true,
  },
];
export const PublicInfoInputs: ThisInput[] = [
  {
    slug: "restaurant_arabic_name",
    name: "restaurant_arabic_name",
    type: "text",
    required: true,
  },
  {
    slug: "restaurant_english_name",
    name: "restaurant_english_name",
    type: "text",
    required: true,
  },
  {
    slug: "restaurant_type",
    name: "restaurant_type",
    type: "select",
    required: true,
    values: [
      {
        label: "fast_food",
        value: "fast_food",
        isTranslated: true,
      },
      {
        label: "restaurant",
        value: "restaurant",
        isTranslated: true,
      },
    ],
  },
  {
    slug: "national_address",
    name: "national_address",
    type: "text",
    required: true,
  },
  {
    slug: "restaurant_logo",
    name: "restaurant_logo",
    placeholder: "restaurant_logo_placeholder",
    type: "file",
    required: true,
  },
  {
    slug: "restaurant_menu",
    name: "restaurant_menu",
    placeholder: "restaurant_menu_placeholder",
    type: "file",
    required: true,
  },
  {
    slug: "trade_file",
    name: "trade_file",
    type: "text",
    required: true,
  },
  {
    slug: "management_contact_number",
    name: "management_contact_number",
    type: "text",
    required: true,
  },
  {
    slug: "management_email",
    name: "management_email",
    type: "email",
    required: true,
  },
  {
    slug: "marketing_contact_number",
    name: "marketing_contact_number",
    type: "text",
    required: true,
  },
  {
    slug: "marketing_email",
    name: "marketing_email",
    type: "email",
    required: true,
  },
];
export const PaymentInfoInputs: ThisInput[] = [
  {
    slug: "bank_name",
    name: "bank_name",
    type: "text",
    required: true,
  },
  {
    slug: "beneficiary_name",
    name: "beneficiary_name",
    type: "text",
    required: true,
  },
  {
    slug: "IBANFile",
    name: "IBANFile",
    placeholder: "upload_pdf",
    type: "file",
    required: true,
  },
  {
    slug: "accounting_email",
    name: "accounting_email",
    placeholder: "email_placeholder",
    type: "email",
    required: true,
  },
];
