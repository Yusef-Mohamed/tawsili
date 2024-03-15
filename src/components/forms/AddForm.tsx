"use client";
import { IInput } from "@/types";
import FormInputs from "../FormInputs";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Switch from "../ui/switch";
import Button from "../ui/button";

const inputs: IInput[] = [
  {
    slug: "campaign_name",
    type: "text",
    name: "campaign_name",
    required: true,
    className: "max-w-[400px] bg-main-gray",
  },
  {
    slug: "campaign_cost",
    type: "number",
    name: "campaign_cost",
    required: true,
    className: "max-w-[400px] bg-main-gray",
  },
  {
    slug: "target_cites",
    type: "text",
    name: "target_cites",
    required: true,
    className: "max-w-[400px] bg-main-gray",
  },
];
const AddForm = () => {
  const [data, setData] = useState({
    campaign_name: "",
    campaign_cost: "",
    target_cites: "",
    campaign_status: true,
  });
  const inputsText = useTranslations("inputs");
  const text = useTranslations("advertisements");
  return (
    <form className="p-6 m-6 border rounded-md">
      <FormInputs inputs={inputs} setData={setData} />
      <div className="mb-4">
        <label className="sm:text-lg font-semibold mb-4 block">
          {inputsText("campaign_status")}
          <span className="text-main-red">*</span>
        </label>
        <Switch
          checked={data.campaign_status}
          onChange={(val) => {
            setData({ ...data, campaign_status: val });
          }}
        />
      </div>
      <Button isRounded>{text("make_new_campaign")}</Button>
    </form>
  );
};

export default AddForm;
