"use client";

import { API } from "@/hooks/getEnv";
import { FormatterPrice } from "@/hooks/PriceFormatter";
import { PoolsType } from "@/types";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedItem: PoolsType;
    isSuccessOpen: boolean;
    setIsSuccessOpen: any;
    setIsOpen: any;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    selectedItem,
    isSuccessOpen,
    setIsSuccessOpen,
    setIsOpen,
}) => {
    const [isButtonLoading, setIsButtonLoading] = useState(false);

    const [lang, setLang] = useState<any>(localStorage.getItem("lang") || null )


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsButtonLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name")?.toString().trim();
        const phone = formData.get("phone")?.toString().trim();
        const adress = formData.get("adress")?.toString().trim();

        if (!name || !phone || !adress) {
            alert("Iltimos, barcha maydonlarni to‘ldiring.");
            setIsButtonLoading(false);
            return;
        }

        const phoneRegex = /^\+998\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Telefon raqam noto‘g‘ri formatda. To‘g‘ri format: +998901234567");
        setIsButtonLoading(false);
        return;
    }

        const postData = {
            name: name,
            phone: phone,
            adress: adress,
            productsId: selectedItem.id,
            check: false,
        };
        console.log("Post data", postData);

        axios
            .post(`${API}/api/orders`, postData)
            .then((res) => {
                console.log("Yuborildi:", res.data);
                setIsButtonLoading(false);
                setIsOpen(false);
                setIsSuccessOpen(true);
            })
            .catch((err) => {
                console.error("Xatolik:", err);
                alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
                setIsButtonLoading(false);
            });
    }

    if (!isOpen) return null;

    return (
  <div className="fixed inset-0 z-50 bg-white/5 backdrop-blur-2xl bg-opacity-70 flex items-center justify-center px-4">
    <div className="relative w-full max-w-[1100px] max-h-[95vh] overflow-auto bg-white rounded-2xl p-6 shadow-lg">
  <button
    onClick={onClose}
    className="absolute top-3 right-3 text-gray-600 hover:text-black text-3xl font-bold"
  >
    &times;
  </button>

  <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
    <div className="w-full md:w-[60%] border border-[#ededed] shadow-xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] px-4 py-6 relative">
      <h2 className="text-center text-[20px] sm:text-[25px] font-medium text-[#009398] mb-4">
        Metall karkas
      </h2>
      <img
        src={`${API}/uploads/${selectedItem.image}`}
        alt="Pool"
        className="mx-auto h-[200px] sm:h-[280px] md:h-[320px] object-contain"
      />
      <div className="text-center mt-5">
        <h2 className="text-black text-[24px] sm:text-[30px] font-semibold">
          {FormatterPrice(selectedItem.discountedPrice)} so'm
        </h2>
      </div>
      {selectedItem.status && (
        <div
          className={`${
            selectedItem.status === "Sale"
              ? "bg-[#FFD600]"
              : selectedItem.status === "Recommend"
              ? "bg-[#139D4B]"
              : "bg-[#ED2020]"
          } absolute top-0 left-0 rounded-br-[10px] px-4 py-1`}
        >
          <p className="font-bold text-white text-sm">
            {selectedItem.status === "Sale"
              ? "Chegirma"
              : selectedItem.status === "Recommend"
              ? "Tavsiya qilamiz"
              : "Mavjud emas"}
          </p>
        </div>
      )}
    </div>

    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="w-full md:w-[40%] flex flex-col gap-4 items-center"
    >
      <input
        className="w-full h-[50px] border border-[#c9c9c9] shadow text-[18px] text-[#A3A3A3] pl-[20px] rounded-[12px]"
        name="name"
        type="text"
        placeholder="Ismingiz"
      />
      <input
        className="w-full h-[50px] border border-[#c9c9c9] shadow text-[18px] text-[#A3A3A3] pl-[20px] rounded-[12px]"
        name="phone"
        type="text"
        placeholder="Telefon raqamingiz"
      />
      <div className="flex w-full items-center gap-3">
        <input
          className="flex-grow h-[50px] border border-[#c9c9c9] shadow text-[18px] text-[#A3A3A3] pl-[20px] rounded-[12px]"
          name="adress"
          type="text"
          placeholder="Manzilingiz"
        />
        <Image
          className="bg-white p-2 rounded-[12px] border shadow-md"
          src={"/adressIcon2.png"}
          alt="Adress Icon"
          width={50}
          height={50}
          priority
        />
      </div>
      <button
        type="submit"
        disabled={isButtonLoading}
        className="bg-[#FFE600] w-full h-[45px] rounded-[10px] text-[16px] font-semibold text-black shadow-xl transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isButtonLoading ? "Yuklanmoqda..." : "Buyurtma berish"}
      </button>
    </form>
  </div>
</div>

  </div>
);

};

export default Modal;
