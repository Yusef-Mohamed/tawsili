import { cn } from "@/lib/utils";
import { IInput } from "@/types";
import { useTranslations } from "next-intl";
import React, { useRef } from "react";

interface FormInputsProps {
  setData: (data: any) => void;
  inputs: IInput[];
}

interface FormInputProps {
  setData: (data: any) => void;
  input: IInput;
  className?: string;
}
import { FaDownload } from "react-icons/fa6";

const FormInputs: React.FC<FormInputsProps> = ({ inputs, setData }) => {
  return (
    <>
      {inputs.map((input, index) => {
        return <FormInput key={index} input={input} setData={setData} />;
      })}
    </>
  );
};

export const FormInput: React.FC<FormInputProps> = ({
  input: { values, value, name, slug, placeholder, type, required, ...props },
  setData,
  className,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const text = useTranslations("inputs");
  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const inputClasses = cn(
    "flex items-center gap-4 w-full px-6 py-3 rounded-md bg-white",
    className
  );

  return (
    <div className="mb-4">
      <label htmlFor={name} className="sm:text-lg font-semibold mb-4 block">
        {text(slug)}
        {required && <span className="text-main-red">*</span>}
      </label>
      {type === "file" && (
        <div className="relative">
          <button
            type="button"
            className="flex absolute items-center gap-4 w-full h-full px-6 py-3 rounded-md bg-white"
            onClick={onButtonClick}
          >
            <FaDownload />
            <span className="text-xs text-start sm:text-sm">
              {/*@ts-ignore*/}
              {value ? value?.name : text(placeholder)}
            </span>
          </button>
          <input
            onChange={(e) => {
              setData((prev: any) => ({
                ...prev,
                [name as string]: e.target.files ? e.target.files[0] : null,
              }));
            }}
            ref={inputRef}
            id={name}
            required={required ? (value ? false : true) : false}
            name={name}
            type={type}
            {...props}
            className={inputClasses}
          />
        </div>
      )}
      {type === "select" && (
        <select
          onChange={(e) =>
            setData((prev: any) => ({
              ...prev,
              [name as string]: e.target.value,
            }))
          }
          className={inputClasses}
          value={value}
        >
          <option value="" disabled selected>
            {text("select_one")}
          </option>
          {values?.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.isTranslated ? text(opt.label) : opt.label}
            </option>
          ))}
        </select>
      )}
      {type !== "file" && type !== "select" && (
        <input
          id={name}
          required={required}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder && text(placeholder)}
          {...props}
          onChange={(e) => {
            type === "number"
              ? setData((prev: any) => ({
                  ...prev,
                  [name as string]: +e.target.value,
                }))
              : setData((prev: any) => ({
                  ...prev,
                  [name as string]: e.target.value,
                }));
          }}
          className={inputClasses}
        />
      )}
    </div>
  );
};

export default FormInputs;
