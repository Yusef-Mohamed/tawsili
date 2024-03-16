"use client";
import Switch from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
const options = [
  {
    name: "meals_adds",
    value: "meals_adds",
    selectedParagraph: "meals_adds_paragraph",
    create_slug: "new_meal_campaign",
    to: "/dashboard/advertisements/meal",
  },
  {
    name: "restaurant_adds",
    value: "restaurant_adds",
    selectedParagraph: "restaurant_adds_paragraph",
    create_slug: "new_restaurant_campaign",
    to: "/dashboard/advertisements/restaurant",
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
      <div className="flex my-8 gap-4 sm:gap-8">
        {options.map((option, index) => (
          <div key={index} className="flex flex-col gap-2">
            <button
              className={cn(
                "border px-4 sm:px-8 py-2 sm:py-4 sm:w-auto w-1/2 rounded-md hover:text-main-red hover:bg-transparent hover:border-main-red transition-all",
                {
                  "text-main-red font-semibold":
                    selected.value === option.value,
                  "bg-gray-100 text-gray-600": selected.value !== option.value,
                }
              )}
              onClick={() => setSelected(option)}
            >
              {text(option.name)}
            </button>
            <Link
              href={option.to + "/new"}
              className={cn(
                "border  sm:w-auto w-1/2 rounded-md bg-main-red text-white text-center py-1 px-4"
              )}
            >
              {text(option.create_slug)}
            </Link>
          </div>
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
                  <div className="flex items-center justify-center">
                    <Switch checked={true} onChange={() => {}} />
                  </div>
                </td>
                <td>
                  <div>
                    <button className="text-main-red" type="button">
                      <FaRegTrashAlt />
                    </button>
                    <Link
                      href={selected.to + "/edit"}
                      className="text-green-600"
                      type="button"
                    >
                      <FaEdit />
                    </Link>
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
