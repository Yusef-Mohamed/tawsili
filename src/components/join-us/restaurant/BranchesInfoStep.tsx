"use client";
import Button from "@/components/ui/button";
import { IBranch, StepProps } from "@/types";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
const BranchModal = dynamic(
  () => import("./BranchModal").then((res) => res.default),
  {
    ssr: false,
  }
);
export const BranchesInfoStep: React.FC<StepProps> = ({
  setData,
  data,
  currentStep,
  setCurrentStep,
}) => {
  const text = useTranslations("joinUsPage");
  const [error, setError] = useState("");
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.branches.length === 0) {
      setError(text("must_add_one_branch_at_least"));
      return;
    } else setCurrentStep(currentStep + 1);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<IBranch | null>(null);
  return (
    <>
      {selectedBranch && isModalOpen && (
        <BranchModal
          setData={setData}
          branch={selectedBranch}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}

      <form
        onSubmit={handelSubmit}
        className="bg-main-gray p-8 flex flex-col rounded-xl min-h-[50vh]"
      >
        <div className="flex-grow">
          <Button
            type="button"
            onClick={() => {
              const newBranch: IBranch = {
                name: "",
                late: 0,
                long: 0,
                from: "",
                to: "",
                want_device: false,
                id: +new Date(),
              };
              setData((prev) => {
                return {
                  ...prev,
                  branches: [...prev.branches, newBranch],
                };
              });
              setIsModalOpen(true);
              setSelectedBranch(newBranch);
            }}
            isRounded
          >
            + {text("add")}
          </Button>
          <div className="max-w-full overflow-auto">
            <table className="w-full mt-6">
              <thead>
                <tr className="bg-white hover:bg-gray-50 border-b-main-gray border-b transition-all">
                  <th className="py-2">{text("branch_name")}</th>
                  <th className="py-2">{text("branch_work_time")}</th>
                  <th className="py-2">{text("actions")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-main-gray">
                {data?.branches.map((branch, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white text-center hover:bg-gray-50 transition-all"
                    >
                      <td className="py-2">{branch.name}</td>
                      <td className="py-2">
                        {branch.from} - {branch.to}
                      </td>
                      <td className="py-2 flex items-center justify-center gap-1">
                        <button
                          className="text-main-red"
                          type="button"
                          onClick={() => {
                            setData((prev) => {
                              return {
                                ...prev,
                                branches: prev.branches.filter(
                                  (item: IBranch) => item.id !== branch.id
                                ),
                              };
                            });
                          }}
                        >
                          <FaRegTrashAlt />
                        </button>
                        <button
                          className="text-green-600"
                          type="button"
                          onClick={() => {
                            setIsModalOpen(true);
                            setSelectedBranch(branch);
                          }}
                        >
                          <FaEdit />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        {error && <p className="text-main-red text-center mt-4">{error}</p>}

        <Button isRounded className="block mt-6 w-3/4 mx-auto">
          {text("next")}
        </Button>
      </form>
    </>
  );
};
