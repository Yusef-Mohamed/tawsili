"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { RiTimer2Line } from "react-icons/ri";
const allTimes = [
  {
    slug: "main_times",
    value: "main_times",
  },
  {
    slug: "ramadan_times",
    value: "ramadan_times",
  },
  {
    slug: "eid_elfitr_times",
    value: "eid_elfitr_times",
  },
  {
    slug: "eid_eladha_times",
    value: "eid_eladha_times",
  },
];
const BranchesTimeBody = () => {
  const text = useTranslations("branchesTime");
  const [selected, setSelected] = useState(allTimes[0].value);
  const [isAddingShift, setIsAddingShift] = useState(false);
  const [shifts, setShifts] = useState([
    {
      open: "12:00",
      close: "5:00",
    },
  ]);
  const [open, setOpen] = useState("12:00");
  const [close, setClose] = useState("05:00");
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold">{text("title")}</h2>

      <div className="mt-8 flex flex-wrap gap-4">
        <div className="lg:w-[300px] w-full py-4 px-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-4">{text("all_branches")}</h3>
          <ul className="space-y-2">
            {allTimes.map((time) => (
              <li key={time.slug}>
                <button
                  onClick={() => setSelected(time.value)}
                  className="w-full flex items-center justify-between gap-4 text-start px-4 py-3 rounded-md bg-main-gray font-semibold"
                >
                  <div className="flex items-center gap-4">
                    <RiTimer2Line className="text-2xl" />
                    {text(time.slug)}
                  </div>
                  <div
                    className={cn("w-3 h-3 rounded-full", {
                      "bg-sky-300": selected === time.value,
                      "border border-sky-300": selected !== time.value,
                    })}
                  />
                </button>
              </li>
            ))}
          </ul>
          <Button className="mt-4" isRounded>
            {text("add_time")}
          </Button>
        </div>
        <div className="lg:w-[400px] flex flex-col w-full py-4 px-6 rounded-xl border">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-4">
              {text("add_time_title")}
            </h3>
            <input
              type="text"
              className="rounded-md px-4 py-2 text-center w-full bg-main-gray"
              placeholder={text("time_name_placeholder")}
            />
            <div className="grid sm:grid-cols-2">
              <div className="my-4">
                <span className="text-lg pe-4">{text("days")}</span>
                <input
                  className="px-4 py-2 rounded-md text-gray-600 bg-main-gray"
                  type="date"
                  value={new Date().toISOString().split("T")[0]}
                  name=""
                  id=""
                />
              </div>
              <div className="my-4">
                <span className="text-lg pe-4">{text("time")}</span>
                <input
                  className="px-4 py-2 rounded-md text-gray-600 bg-main-gray"
                  type="time"
                  value="12:00"
                  name=""
                  id=""
                />
              </div>
            </div>

            {shifts.map((shift, index) => (
              <div key={index}>
                <h4 className="px-4 py-2 rounded-md bg-main-gray w-fit text-main-red">
                  {text("shift")} {index + 1}
                </h4>
                <div className="grid sm:grid-cols-2 sm:gap-2">
                  <div className="flex my-4 gap-4 items-center">
                    <span className="text-main-red">{text("open")}</span>
                    <span className="px-4 py-1 rounded-md bg-main-gray w-full text-center">
                      {shift.open}{" "}
                    </span>
                  </div>
                  <div className="flex my-4 gap-4 items-center">
                    <span className="text-main-red">{text("close")}</span>
                    <span className="px-4 py-1 rounded-md bg-main-gray w-full text-center">
                      {shift.close}{" "}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => setIsAddingShift(true)}
              className="px-4 flex items-center gap-4 w-full py-2 rounded-md bg-main-gray justify-center  text-main-red"
            >
              <span>+</span> {text("add_shift")}
            </button>
            {isAddingShift && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShifts([...shifts, { open, close }]);
                  setIsAddingShift(false);
                }}
              >
                <div className="grid sm:grid-cols-2 sm:gap-2">
                  <div className="flex my-4 gap-4 items-center">
                    <span className="text-main-red">{text("open")}</span>
                    <input
                      className="px-4 py-2 rounded-md text-gray-600 bg-main-gray"
                      type="time"
                      value={open}
                      onChange={(e) => setOpen(e.target.value)}
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex my-4 gap-4 items-center">
                    <span className="text-main-red">{text("close")}</span>
                    <input
                      className="px-4 py-2 rounded-md text-gray-600 bg-main-gray"
                      type="time"
                      value={close}
                      onChange={(e) => setClose(e.target.value)}
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <Button className="mt-4 py-1" isRounded>
                  {text("save_shift")}
                </Button>
              </form>
            )}
          </div>
          <Button className="mt-4 py-1" isRounded>
            {text("save")}
          </Button>
        </div>
      </div>
    </>
  );
};

export default BranchesTimeBody;
