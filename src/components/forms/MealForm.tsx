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
import { IoMdRemove } from "react-icons/io";
const allergens = [
  { slug: "dairy", value: "dairy" },
  { slug: "egg", value: "egg" },
  { slug: "gluten", value: "gluten" },
  { slug: "nuts", value: "nuts" },
  { slug: "seafood", value: "seafood" },
  { slug: "sesame", value: "sesame" },
  { slug: "soy", value: "soy" },
  { slug: "sulfite", value: "sulfite" },
  { slug: "wheat", value: "wheat" },
  { slug: "molluscs", value: "molluscs" },
  { slug: "celery", value: "celery" },
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
    meal_type: string[];
    meal_size: string[];
    add_to_meal: string[];
    remove_from_meal: string[];
    add_with_meal: string[];
  }>({
    image: null,
    allergens: [],
    section: [],
    rank: [],
    name: "",
    calories: "",
    price: "",
    meal_type: [],
    meal_size: [],
    add_to_meal: [],
    remove_from_meal: [],
    add_with_meal: [],
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
          <MyInput slug="meal_type" data={data} setData={setData} />
          <MyInput slug="meal_size" data={data} setData={setData} />
          <MyInput slug="add_to_meal" data={data} setData={setData} />
          <MyInput slug="remove_from_meal" data={data} setData={setData} />
          <MyInput slug="add_with_meal" data={data} setData={setData} />

          {/* <div className="space-y-3">
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
          </div> */}

          <Button isRounded className=" w-full md:w-80">
            {text("add_meal")}
          </Button>
        </>
      )}
    </form>
  );
};
interface MyInputProps {
  slug: string;
  data: any;
  setData: React.Dispatch<React.SetStateAction<any>>;
}
const MyInput: React.FC<MyInputProps> = ({ slug, data, setData }) => {
  const text = useTranslations("mealForm");
  const [input, setInput] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div className=" flex items-center gap-2">
      <label className="font-semibold">{text(slug)}</label>
      <button
        type="button"
        onClick={() => setIsAdding((prev) => !prev)}
        className="w-5 text-white font-semibold bg-main-red rounded-xl h-5 flex items-center justify-center text-xs"
      >
        {isAdding ? <IoMdRemove /> : <FaPlus />}
      </button>
      {isAdding && (
        <input
          type="text"
          value={input}
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setData((prev: any) => ({
                ...prev,
                [slug]: [...prev[slug], input],
              }));
              setInput("");
              setIsAdding(false);
            }
          }}
          placeholder={text(slug)}
          className={cn("w-48 py-1 px-6  bg-main-gray rounded-full")}
        />
      )}
      {data[slug].map((item: string, i: number) => (
        <span
          key={i}
          className="px-4 py-0.5 text-white text-sm bg-main-red rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  );
};
export default MealForm;
