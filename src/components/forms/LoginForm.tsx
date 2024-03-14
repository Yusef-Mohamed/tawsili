"use client";

import { Link, useRouter } from "@/navigation";
import { IInput } from "@/types";
import Image from "next/image";
import FormInputs from "../FormInputs";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Button from "../ui/button";
const inputs: IInput[] = [
  {
    slug: "email",
    type: "email",
    name: "email",
    required: true,
  },
  {
    slug: "password",
    type: "password",
    placeholder: "enter_password",
    name: "password",
    required: true,
  },
  {
    slug: "login_to",
    type: "select",
    name: "login_to",
    required: true,
    values: [
      {
        label: "restaurant",
        value: "restaurant",
        isTranslated: true,
      },
      {
        label: "client",
        value: "client",
        isTranslated: true,
      },
    ],
  },
];
const LoginForm = () => {
  const text = useTranslations("loginPage");
  const router = useRouter();
  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard/analysis");
  };
  const [data, setData] = useState({
    email: "",
    password: "",
    login_to: "restaurant",
  });
  return (
    <>
      <Link href="/" className="block w-fit mx-auto">
        <Image
          src="/logo.png"
          alt="logo"
          className="transition-all"
          width={300}
          height={210}
        />
      </Link>
      <form className="px-4" onSubmit={handelSubmit}>
        <FormInputs inputs={inputs} setData={setData} />
        <div className="flex items-center gap-2 mt-4 my-4">
          <input
            type="checkbox"
            id={"remember_me"}
            name={"remember_me"}
            className="border-none"
          />
          <label htmlFor={"remember_me"}>{text("remember_me")}</label>
        </div>
        <Button className="w-3/4 block mx-auto" isRounded>
          {text("login")}
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
