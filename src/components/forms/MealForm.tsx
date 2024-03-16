"use client";
import { IInput } from "@/types";
import FormInputs from "../FormInputs";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Switch from "../ui/switch";
import Button from "../ui/button";
import { FaCamera, FaPlus } from "react-icons/fa";
import Image from "next/image";
import { cn } from "@/lib/utils";
const allergens = [
  { slug: "dairy", value: "dairy" },
  { slug: "egg", value: "egg" },
  { slug: "gluten", value: "gluten" },
  { slug: "peanut", value: "peanut" },
  { slug: "seafood", value: "seafood" },
  { slug: "sesame", value: "sesame" },
  { slug: "soy", value: "soy" },
  { slug: "sulfite", value: "sulfite" },
  { slug: "wheat", value: "wheat" },
];
interface MealFormProps {
  type: string;
}
const MealForm: React.FC<MealFormProps> = ({ type }) => {
  const [data, setData] = useState<{
    image: File | null;
    allergens: string[];
    section: string[];
    rank: string[];
    name: string;
    calories: string;
    price: string;
  }>({
    image: null,
    allergens: [],
    section: [],
    rank: [],
    name: "",
    calories: "",
    price: "",
  });
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setData((prev) => ({ ...prev, image: file }));
  };
  const text = useTranslations("mealForm");
  return (
    <form className="p-6 m-6 border rounded-md space-y-4">
      {type === "section" && (
        <>
          <div className="space-y-3">
            <label className="font-semibold text-lg block">
              {text("section_name")}
            </label>
            <input
              type="text"
              placeholder={text("section_name")}
              className=" w-full md:w-80 py-3 px-6 bg-main-gray rounded-md"
            />
          </div>
          <Button isRounded className=" w-full md:w-80">
            {text("add_section")}
          </Button>
        </>
      )}
      {type === "meal" && (
        <>
          <div className="space-y-3">
            <label className="font-semibold text-lg block">
              {text("meal_name")}
            </label>
            <input
              type="text"
              placeholder={text("meal_name")}
              className=" w-full md:w-80 py-3 px-6 bg-main-gray rounded-md"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="space-y-3">
              <label className="font-semibold text-lg block">
                {text("meal_price")}
              </label>
              <input
                type="text"
                placeholder={"56"}
                className="w-32 py-3 px-6 bg-main-gray rounded-md"
              />
            </div>{" "}
            <div className="space-y-3">
              <label className="font-semibold text-lg block">
                {text("calories")}
              </label>
              <input
                type="text"
                placeholder={"154"}
                className="w-32 py-3 px-6 bg-main-gray rounded-md"
              />
            </div>
          </div>
          <div className=" flex items-center gap-2">
            <label className="font-semibold">
              {text("meal_available_at_time")}
            </label>
            <button className="w-5 text-white font-semibold bg-main-red rounded-xl h-5 flex items-center justify-center text-xs">
              <FaPlus />
            </button>
            <span className="px-4 py-0.5 text-white text-sm bg-main-red rounded-full">
              {text("all_times")}
            </span>
          </div>
          <div className=" flex items-center gap-2">
            <label className="font-semibold">{text("meal_size")}</label>
            <button className="w-5 text-white font-semibold bg-main-red rounded-xl h-5 flex items-center justify-center text-xs">
              <FaPlus />
            </button>
            <span className="px-4 py-0.5 text-white text-sm bg-main-red rounded-full">
              {text("large")}
            </span>
          </div>
          <div className=" flex items-center gap-2">
            <label className="font-semibold">{text("add_to_meal")}</label>
            <button className="w-5 text-white font-semibold bg-main-red rounded-xl h-5 flex items-center justify-center text-xs">
              <FaPlus />
            </button>
          </div>
          <div className=" flex items-center gap-2">
            <label className="font-semibold">{text("remove_from_meal")}</label>
            <button className="w-5 text-white font-semibold bg-main-red rounded-xl h-5 flex items-center justify-center text-xs">
              <FaPlus />
            </button>
          </div>
          <div className=" flex items-center gap-2">
            <label className="font-semibold">{text("add_with_meal")}</label>
            <button className="w-5 text-white font-semibold bg-main-red rounded-xl h-5 flex items-center justify-center text-xs">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3">
            <label className="font-semibold">{text("meal_image")}</label>
            <div
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={handleDrop}
              className="flex flex-col items-center justify-center  w-full md:w-80 p-1 min-h-40 bg-main-gray rounded-md mb-4"
            >
              {data.image ? (
                <Image
                  src={URL.createObjectURL(data.image)}
                  alt="meal"
                  width={320}
                  height={240}
                  className="rounded-md"
                />
              ) : (
                <>
                  <FaCamera className="text-2xl text-gray-400" />
                  <p className="text-gray-400">
                    {text("upload_image_by_dragging")}
                  </p>
                </>
              )}
              <input type="file" style={{ display: "none" }} />
            </div>
          </div>
          <div className="space-y-3">
            <label className="font-semibold text-lg">{text("section")}</label>
            <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm md:text-base">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  type="button"
                  className={cn(
                    "px-4 py-2 font-semibold bg-main-gray rounded-full",
                    {
                      "bg-main-red text-white": data.section.includes(`${i}`),
                    }
                  )}
                  onClick={() => {
                    setData((prev) => {
                      if (prev.section.includes(`${i}`)) {
                        return {
                          ...prev,
                          section: prev.section.filter((s) => s !== `${i}`),
                        };
                      }
                      return { ...prev, section: [...prev.section, `${i}`] };
                    });
                  }}
                  key={i}
                >
                  {text("section")} {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="font-semibold text-lg">{text("meal_rank")}</label>
            <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm md:text-base">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  type="button"
                  className={cn(
                    "px-4 py-2 font-semibold bg-main-gray rounded-full",
                    {
                      "bg-main-red text-white": data.rank.includes(`${i}`),
                    }
                  )}
                  onClick={() => {
                    setData((prev) => {
                      if (prev.rank.includes(`${i}`)) {
                        return {
                          ...prev,
                          rank: prev.rank.filter((s) => s !== `${i}`),
                        };
                      }
                      return { ...prev, rank: [...prev.rank, `${i}`] };
                    });
                  }}
                  key={i}
                >
                  {text("meal_rank")} {i + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <label className="font-semibold text-lg">{text("allergens")}</label>
            <div className="flex items-center gap-4 flex-wrap text-xs sm:text-sm md:text-base">
              {allergens.map((allergen) => (
                <button
                  type="button"
                  className={cn(
                    "px-4 py-2 font-semibold bg-main-gray rounded-full",
                    {
                      "bg-main-red text-white": data.allergens.includes(
                        allergen.value
                      ),
                    }
                  )}
                  onClick={() => {
                    setData((prev) => {
                      if (prev.allergens.includes(allergen.value)) {
                        return {
                          ...prev,
                          allergens: prev.allergens.filter(
                            (s) => s !== allergen.value
                          ),
                        };
                      }
                      return {
                        ...prev,
                        allergens: [...prev.allergens, allergen.value],
                      };
                    });
                  }}
                  key={allergen.slug}
                >
                  {text(allergen.slug)}
                </button>
              ))}
            </div>
          </div>

          <Button isRounded className=" w-full md:w-80">
            {text("add_meal")}
          </Button>
        </>
      )}
    </form>
  );
};

export default MealForm;
