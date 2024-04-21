"use client";

import { phoneNumberSchema } from "@/lib/types";
import { log } from "console";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiEnvelope } from "react-icons/bi";

function ContactForm() {
  const [phone, setPhone] = useState("");

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = phoneNumberSchema.safeParse(phone);
    setPhone(""); // => { success: false; error: ZodError }
    if (!error.success) {
      toast.error("Моля въведете валиден телефонен номер!");
    } else {
      toast.success(
        "Успешно изпратен номер, наш служител ще се свърже с вас в рамките на работния ден!"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 flex w-full items-center justify-center md:mt-[48px]"
    >
      <div className="rounded-l-md bg-white px-4 py-4 md:px-[20px] md:py-[21px] md:pe-3">
        <BiEnvelope className="h-[16px] w-[20px] text-2xl text-dark-blue-400 md:h-[30px] md:w-[27px]" />
      </div>
      <label
        htmlFor="phone"
        className="relative w-[50%] text-dark-blue-400 md:w-[35%]"
      >
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="0888888888"
          className="w-full px-1 py-3 outline-none -outline-offset-2 placeholder:text-xs placeholder:text-dark-blue-400 focus:outline-2 focus:outline-cta-green md:px-[20px] md:py-[24px] md:ps-1 md:placeholder:ml-10 md:placeholder:text-base md:placeholder:leading-6 md:placeholder:-tracking-[0.3px]"
          onChange={onPhoneChange}
          value={phone}
        />
      </label>
      <input
        type="submit"
        value="Изпрати"
        className="rounded-r-md bg-[#e7f874] px-4 py-3 text-[16px] font-semibold leading-[24px] -tracking-[0.3px] text-[#394649] hover:cursor-pointer md:px-[36px] md:py-[24px]"
      />
    </form>
  );
}

export default ContactForm;
