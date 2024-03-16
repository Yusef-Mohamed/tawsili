"use client";
import { IInput } from "@/types";
import FormInputs from "../FormInputs";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import Switch from "../ui/switch";
import Button from "../ui/button";
import { cites } from "@/constants";

interface AddFormProps {
  type: string;
}
const AddForm: React.FC<AddFormProps> = ({ type }) => {
  const [data, setData] = useState({
    name: "",
    target_cites: "",
    campaign_status: true,
  });
  const inputsText = useTranslations("inputs");
  const inputs: IInput[] = useMemo(() => {
    return [
      {
        slug: `${type}Name`,
        type: "text",
        name: "name",
        required: true,
        className: "max-w-[400px] bg-main-gray",
      },
    ];
  }, [type]);
  // meal
  // restaurant
  const text = useTranslations(`advertisements`);
  const common = useTranslations(`common`);
  return (
    <form className="p-6 m-6 border rounded-md">
      <FormInputs inputs={inputs} setData={setData} />
      <div className="mb-4">
        <label className="sm:text-lg font-semibold mb-4 block">
          {inputsText("target_cites")}
          <span className="text-main-red">*</span>
        </label>
        <select className="max-w-[400px] w-full px-4 py-3 rounded-md bg-main-gray">
          <option value="" disabled selected>
            {inputsText("select")}
          </option>
          {cites.map((city, index) => (
            <option key={city.city_id} value={city.city_id}>
              {common("locale") === "ar" ? city.name_ar : city.name_en}
            </option>
          ))}
        </select>
      </div>
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
