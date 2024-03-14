"use client";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
const options = [
  {
    name: "meals_adds",
    value: "meals_adds",
    selectedParagraph: "meals_adds_paragraph",
  },
  {
    name: "restaurant_adds",
    value: "restaurant_adds",
    selectedParagraph: "restaurant_adds_paragraph",
  },
];
const campaigns = [
  { cost: 100, name: "تجربة اولي", cites: "القاهرة" },
  { cost: 200, name: "تجربة ثانية", cites: "الجيزة" },
  { cost: 300, name: "تجربة ثالثة", cites: "الاسكندرية" },
  { cost: 400, name: "تجربة رابعة", cites: "المنصورة" },
  { cost: 500, name: "تجربة خامسة", cites: "المنيا" },
];

const AddsBody = () => {
  const text = useTranslations("advertisements");
  const [selected, setSelected] = useState(options[0]);
  return (
    <>
      <h2 className="text-2xl font-semibold">{text("restaurant_adds")}</h2>
      <div className="flex my-8 gap-8">
        {options.map((option, index) => (
          <button
            key={index}
            className={cn(
              "border px-8 py-4 rounded-md hover:text-main-red hover:bg-transparent hover:border-main-red transition-all",
              {
                "text-main-red font-semibold": selected.value === option.value,
                "bg-gray-100 text-gray-600": selected.value !== option.value,
              }
            )}
            onClick={() => setSelected(option)}
          >
            {text(option.name)}
          </button>
        ))}
      </div>
      <h2 className="mt-4 text-2xl font-semibold">{text(selected.name)}</h2>
      <p className="my-4">{text(selected.selectedParagraph)}</p>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th className="py-2">{text("campaign_name")}</th>
              <th className="py-2">{text("campaign_cost")}</th>
              <th className="py-2">{text("target_cites")}</th>
              <th className="py-2">{text("campaign_status")}</th>
              <th className="py-2">{text("actions")}</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={index}>
                <td>{campaign.name}</td>
                <td>{campaign.cost}</td>
                <td>{campaign.cites}</td>
                <td>
                  <button className="h-6 bg-main-gray flex items-center mx-auto w-12 rounded-full">
                    <div className="h-6 w-6 bg-green-400 rounded-full" />
                  </button>
                </td>
                <td>
                  <div>
                    <button className="text-main-red" type="button">
                      <FaRegTrashAlt />
                    </button>
                    <button className="text-green-600" type="button">
                      <FaEdit />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AddsBody;