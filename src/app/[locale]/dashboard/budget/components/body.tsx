"use client";

import Button from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaDownload, FaEdit, FaRegTrashAlt } from "react-icons/fa";

const data = [
  {
    date: "2022-01-01",
    country: "المملكة العربية السعودية",
    city: "الرياض",
    neighborhood: "الملز",
    branches: "الفرع 1",
    id: "123",
    currency: "ريال",
    sales: "1000",
    compensation: "200",
    delivery_cost: "50",
    delivery_cost_tax: "5",
    net_sales: "745",
  },
  {
    date: "2022-01-02",
    country: "المملكة العربية السعودية",
    city: "جدة",
    neighborhood: "البلد",
    branches: "الفرع 2",
    id: "456",
    currency: "ريال",
    sales: "2000",
    compensation: "400",
    delivery_cost: "100",
    delivery_cost_tax: "10",
    net_sales: "1490",
  },
];

const BudgetBody = () => {
  const text = useTranslations("budget");
  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold">{text("title")}</h2>
      <div className="p-6 rounded-md border flex items-end flex-wrap gap-4 mb-4">
        <div className="flex flex-col items-center justify-center">
          <label className="block font-semibold text-gray-600 text-lg">D</label>
          <select className="px-4 py-3 bg-main-gray w-20 rounded-xl">
            <option value="">{text("all")}</option>
            {[...Array(31)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block font-semibold text-gray-600 text-lg">M</label>
          <select className="px-4 py-3 bg-main-gray w-20 rounded-xl">
            <option value="">{text("all")}</option>
            {[...Array(12)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block font-semibold text-gray-600 text-lg">Y</label>
          <select className="px-4 py-3 bg-main-gray w-20 rounded-xl">
            <option value="">{text("all")}</option>
            {[...Array(40)].map((_, index) => (
              <option key={index} value={index + 1 + 2000}>
                {index + 1 + 2000}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block font-semibold text-gray-600 text-lg">
            {text("country")}
          </label>
          <select className="px-4 py-4 bg-main-gray w-24 rounded-xl">
            <option value="">{text("all")}</option>
          </select>
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block font-semibold text-gray-600 text-lg">
            {text("city")}
          </label>
          <select className="px-4 py-4 bg-main-gray w-24 rounded-xl">
            <option value="">{text("all")}</option>
          </select>
        </div>
        <div className="flex flex-col items-center justify-center">
          <label className="block font-semibold text-gray-600 text-lg">
            {text("branche")}
          </label>
          <select className="px-4 py-4 bg-main-gray w-24 rounded-xl">
            <option value="">{text("all")}</option>
          </select>
        </div>
        <Button isRounded className="py-1">
          {text("search")}
        </Button>
      </div>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th className="py-2">{text("date")}</th>
              <th className="py-2">{text("country")}</th>
              <th className="py-2">{text("city")}</th>
              <th className="py-2">{text("neighborhood")}</th>
              <th className="py-2">{text("branches")}</th>
              <th className="py-2">ID</th>
              <th className="py-2">{text("currency")}</th>
              <th className="py-2">{text("sales")}</th>
              <th className="py-2">{text("compensation")}</th>
              <th className="py-2">{text("delivery_cost")}</th>
              <th className="py-2">{text("delivery_cost_tax")}</th>
              <th className="py-2">{text("net_sales")}</th>
              <th className="py-2 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((budget, index) => (
              <tr key={index}>
                <td>{budget.date}</td>
                <td>{budget.country}</td>
                <td>{budget.city}</td>
                <td>{budget.neighborhood}</td>
                <td>{budget.branches}</td>
                <td>{budget.id}</td>
                <td>{budget.currency}</td>
                <td>{budget.sales}</td>
                <td>{budget.compensation}</td>
                <td>{budget.delivery_cost}</td>
                <td>{budget.delivery_cost_tax}</td>
                <td>{budget.net_sales}</td>
                <td>
                  <button>
                    <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BudgetBody;
