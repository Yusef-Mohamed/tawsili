"use client";

import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
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
const daysNames = [
  {
    slug: "saturday",
    value: "saturday",
  },
  {
    slug: "sunday",
    value: "sunday",
  },
  {
    slug: "monday",
    value: "monday",
  },
  {
    slug: "tuesday",
    value: "tuesday",
  },
  {
    slug: "wednesday",
    value: "wednesday",
  },
  {
    slug: "thursday",
    value: "thursday",
  },
  {
    slug: "friday",
    value: "friday",
  },
];

const BranchesTimeBody = () => {
  const text = useTranslations("branchesTime");
  const [selected, setSelected] = useState(allTimes[0].value);
  const [isAddingShift, setIsAddingShift] = useState(false);
  const [days, setDays] = useState([
    {
      date: "saturday",
      shifts: [
        {
          open: "12:00",
          close: "05:00",
        },
      ],
    },
  ]);
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
        <div className="lg:w-[450px] flex flex-col w-full py-4 px-6 rounded-xl border">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold mb-4">
              {text("add_time_title")}
            </h3>
            <input
              type="text"
              className="rounded-md px-4 py-2 text-center w-full bg-main-gray"
              placeholder={text("time_name_placeholder")}
            />
            {days.map((day, index) => (
              <div key={index} className="border my-2 p-2 rounded-md">
                <div className="my-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl mb-2 mx-2">{text("day")}</h4>
                    <button
                      onClick={() => {
                        const newDays = [...days];
                        newDays.splice(index, 1);
                        setDays(newDays);
                      }}
                      className="text-xl text-main-red"
                    >
                      <FaDeleteLeft />
                    </button>
                  </div>
                  <select
                    value={day.date}
                    onChange={(e) => {
                      const newDays = [...days];
                      newDays[index].date = e.target.value;
                      setDays(newDays);
                    }}
                    className="px-4 py-2 rounded-md mt-2 font-semibold text-gray-600 bg-main-gray"
                  >
                    {daysNames.map((day) => (
                      <option key={day.slug} value={day.value}>
                        {text(day.slug)}
                      </option>
                    ))}
                  </select>
                </div>

                {day.shifts.map((shift, shiftIndex) => (
                  <div key={shiftIndex} className="mb-2 pb-2  border-b">
                    <div className="flex items-center justify-between">
                      <h4 className="px-4 py-2 rounded-md bg-main-gray w-fit text-main-red">
                        {text("shift")} {shiftIndex + 1}
                      </h4>
                      <button
                        onClick={() => {
                          const newDays = [...days];
                          newDays[index].shifts.splice(shiftIndex, 1);
                          setDays(newDays);
                        }}
                        className="text-xl text-main-red"
                      >
                        <MdDeleteForever />{" "}
                      </button>
                    </div>
                    <div className="grid sm:grid-cols-2 sm:gap-2">
                      <div className="flex my-4 gap-4 items-center">
                        <span className="text-main-red">{text("open")}</span>
                        <input
                          type="time"
                          value={shift.open}
                          onChange={(e) => {
                            const newDays = [...days];
                            newDays[index].shifts[shiftIndex].open =
                              e.target.value;
                            setDays(newDays);
                          }}
                          className="px-4 py-1 rounded-md bg-main-gray w-full text-center"
                        />
                      </div>
                      <div className="flex my-4 gap-4 items-center">
                        <span className="text-main-red">{text("close")}</span>
                        <input
                          type="time"
                          value={shift.close}
                          onChange={(e) => {
                            const newDays = [...days];
                            newDays[index].shifts[shiftIndex].close =
                              e.target.value;
                            setDays(newDays);
                          }}
                          className="px-4 py-1 rounded-md bg-main-gray w-full text-center"
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => {
                    const newDays = [...days];
                    newDays[index].shifts.push({
                      open: "12:00",
                      close: "05:00",
                    });
                    setDays(newDays);
                  }}
                  className="px-4 flex items-center gap-4 w-full py-2 rounded-md bg-main-gray justify-center  text-main-red"
                >
                  <span>+</span> {text("add_shift")}
                </button>
              </div>
            ))}

            <button
              onClick={() => {
                setDays([
                  ...days,
                  {
                    date: "saturday",
                    shifts: [
                      {
                        open: "12:00",
                        close: "05:00",
                      },
                    ],
                  },
                ]);
              }}
              className="px-4 mt-4 flex items-center gap-4 w-full py-2 rounded-md bg-main-gray justify-center  text-main-red"
            >
              <span>+</span> {text("add_day")}
            </button>
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
