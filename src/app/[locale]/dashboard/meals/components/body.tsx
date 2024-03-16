"use client";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
const allTimes = [
  {
    slug: "meals",
  },
  {
    slug: "sandwiches",
  },
  {
    slug: "drinks",
  },
  {
    slug: "add_meal",
  },
];
const MealsTimeBody = () => {
  const text = useTranslations("meals");
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold">{text("title")}</h2>
      <div className="mt-8 flex flex-wrap gap-4">
        <div className="lg:w-[350px] w-full py-4 px-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-4">
            {text("menu_sections")}
          </h3>
          <ul className="space-y-2">
            {allTimes.map((time) => (
              <li key={time.slug}>
                <div className="w-full flex items-center justify-between gap-4 text-start px-4 py-3 rounded-md bg-main-gray font-semibold">
                  <div className="flex items-center gap-4">
                    {text(time.slug)}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-main-red" type="button">
                      <FaRegTrashAlt />
                    </button>
                    <button className="text-green-600" type="button">
                      <FaEdit />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/dashboard/meals/section/new"
            className="mt-4 rounded-full w-fit px-6 py-3 block text-white font-semibold bg-main-red"
          >
            {text("add_section")}
          </Link>
        </div>
        <div className="lg:w-[350px] w-full py-4 px-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-4">{text("meals")}</h3>
          <ul className="space-y-2">
            {allTimes.map((time) => (
              <li key={time.slug}>
                <div className="w-full flex items-center justify-between gap-4 text-start px-4 py-3 rounded-md bg-main-gray font-semibold">
                  <div className="flex items-center gap-4">
                    {text(time.slug)}
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="text-main-red" type="button">
                      <FaRegTrashAlt />
                    </button>
                    <button className="text-green-600" type="button">
                      <FaEdit />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/dashboard/meals/meal/new"
            className="mt-4 rounded-full w-fit px-6 py-3 block text-white font-semibold bg-main-red"
          >
            {text("add_meal")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default MealsTimeBody;
