"use client";

import { API } from "@/hooks/getEnv";
import { FormatterPrice } from "@/hooks/PriceFormatter";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

interface ModalProps {
    isOpen: any;
    setIsSuccessOpen: any;
    onClose: () => void;
    setIsOpen: any
}

const ConsultationModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    setIsSuccessOpen,
    setIsOpen
}) => {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name")?.toString().trim();
        const phone = formData.get("phone")?.toString().trim();

        if (!name || !phone) {
            alert("Iltimos, barcha maydonlarni to‘ldiring.");
            return;
        }

        //   const postData = {
        //     "name": name,
        //     "phone": phone,
        //     "adress" : adress,
        //     "productsId": "39cc6dd1-912d-4e4f-84f2-17c3daba74b7",
        //     "check": false
        //   };
        //   console.log("Post data", postData);

        setIsOpen(false);
        setIsSuccessOpen(true);

        //   axios
        //     .post(`${API}/orders`, postData)
        //     .then((res) => {
        //       console.log("Yuborildi:", res.data);

        //     })
        //     .catch((err) => {
        //       console.error("Xatolik:", err);
        //       alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
        //     });
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-white/5 backdrop-blur-2xl bg-opacity-70 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-[90%] max-h-[90%] overflow-auto relative">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl"
                    >
                        &times;
                    </button>
                    <div className="w-[441px] h-[584px] flex flex-col justify-center items-center">
                        <Image
                            src="/CallCenter.png"
                            alt="Success"
                            width={121}
                            height={131}
                        />
                        <h2 className="text-[30px] pb-[30px] font-bold text-black mt-6">
                            Получить консультацию
                        </h2>
                        <form
                            onSubmit={(e) => handleSubmit(e)}
                            autoComplete="off"
                            className="w-[400px] flex flex-col gap-[17px] justify-center items-center  mr-[20px] "
                        >
                            <input
                                className="w-[359px] h-[61px] border-[1px] border-[#c9c9c9] shadow-xl text-[25px] text-[#A3A3A3] text-center rounded-[17px] "
                                name="name"
                                type="text"
                                placeholder="Ваше имя"
                            />
                            <input
                                className="w-[359px] h-[61px] border-[1px] border-[#c9c9c9] shadow-xl text-[25px] text-[#A3A3A3] text-center rounded-[17px] "
                                name="phone"
                                type="text"
                                placeholder="Ваш номер"
                            />
                            <button
                                //   onClick={() => setIsButtonLoading(true)}
                                type="submit"
                                // onClick={}
                                className="bg-[#FFE600] mt-[14px] !shadow-2xl cursor-pointer w-[237px] h-[46px] rounded-[10px] px-[25px] py-[3px] text-[15px] text-black font-semibold"
                            >
                                Заказать
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultationModal;
