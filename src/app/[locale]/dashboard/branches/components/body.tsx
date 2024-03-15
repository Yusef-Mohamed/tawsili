"use client";
import dynamic from "next/dynamic";
const BranchModal = dynamic(
  () =>
    import("@/components/join-us/restaurant/BranchModal").then(
      (res) => res.default
    ),
  {
    ssr: false,
  }
);
import Button from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const branches = [
  {
    name: "Branch 1",
    place: "Place 1",
  },
  {
    name: "Branch 2",
    place: "Place 2",
  },
  {
    name: "Branch 3",
    place: "Place 3",
  },
  {
    name: "Branch 4",
    place: "Place 4",
  },
  {
    name: "Branch 5",
    place: "Place 5",
  },
  {
    name: "Branch 6",
    place: "Place 6",
  },
];

const BranchesBody = () => {
  const text = useTranslations("branches");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold">{text("title")}</h2>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th className="py-2">{text("branch_name")}</th>
              <th className="py-2">{text("branch_place")}</th>
              <th className="py-2">{text("actions")}</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((campaign, index) => (
              <tr key={index}>
                <td>{campaign.name}</td>
                <td>{campaign.place}</td>
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
      <Button onClick={() => setIsModalOpen(true)} className="mt-4" isRounded>
        {text("add_branch")}
      </Button>
      <BranchModal
        branch={{
          name: "",
          late: 0,
          long: 0,
          from: "",
          to: "",
          want_device: false,
          id: +new Date(),
        }}
        isModalOpen={isModalOpen}
        onSubmit={() => {}}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default BranchesBody;
