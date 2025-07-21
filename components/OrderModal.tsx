"use client";

import { API } from "@/hooks/getEnv";
import { FormatterPrice } from "@/hooks/PriceFormatter";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedItem: any;
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

        const postData = {
            name: name,
            phone: phone,
            adress: adress,
            productsId: "39cc6dd1-912d-4e4f-84f2-17c3daba74b7",
            check: false,
        };
        console.log("Post data", postData);

        setIsOpen(false);
        setIsSuccessOpen(true);

        axios
            .post(`${API}/orders`, postData)
            .then((res) => {
                console.log("Yuborildi:", res.data);
                setIsButtonLoading(false);
            })
            .catch((err) => {
                console.error("Xatolik:", err);
                alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
                setIsButtonLoading(false);
            });
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
                    <div className=" w-[1100px] h-[484px]  ">
                        <div className="flex justify-between">
                            <div className="w-[633px] h-[450px] relative border border-[#ededed] shadow-2xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] transition-transform duration-300 ">
                                <h2 className="absolute top-8 left-40 font-semibold text-[25px] text-[#009398] ">
                                    Металлический каркас
                                </h2>
                                <img
                                    src={selectedItem.img}
                                    alt="Pool"
                                    className="mx-auto h-[350px] object-cover mt-[31px]"
                                />
                                <div className="flex items-center mt-[17px] justify-center gap-[13px]">
                                    <div>
                                        <h2 className="text-black text-[30px] font-semibold">
                                            {FormatterPrice(selectedItem.price)}{" "}
                                            сум
                                        </h2>
                                    </div>
                                </div>
                                {selectedItem.additional && (
                                    <div
                                        className={`${
                                            selectedItem.additional === "sale"
                                                ? "bg-[#FFD600]"
                                                : selectedItem.additional ===
                                                  "recomend"
                                                ? "bg-[#139D4B]"
                                                : selectedItem.additional ===
                                                  "not"
                                                ? "bg-[#ED2020]"
                                                : ""
                                        } flex items-center absolute top-0 rounded-br-[10px] justify-center px-[22px]`}
                                    >
                                        <p className="font-bold text-white">
                                            {selectedItem.additional === "sale"
                                                ? "Скидка"
                                                : selectedItem.additional ===
                                                  "recomend"
                                                ? "Рекомендуем"
                                                : "Нет в наличии"}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <form
                                onSubmit={(e) => handleSubmit(e)}
                                autoComplete="off"
                                className="w-[400px] flex flex-col gap-[17px] justify-center items-center  mr-[20px] "
                            >
                                <input
                                    className="w-[359px] h-[61px] border-[1px] border-[#c9c9c9] shadow-xl text-[25px] text-[#A3A3A3] pl-[20px] rounded-[17px] "
                                    name="name"
                                    type="text"
                                    placeholder="Ваше имя"
                                />
                                <input
                                    className="w-[359px] h-[61px] border-[1px] border-[#c9c9c9] shadow-xl text-[25px] text-[#A3A3A3] pl-[20px] rounded-[17px] "
                                    name="phone"
                                    type="text"
                                    placeholder="Ваш номер"
                                />
                                <div className="flex justify-between">
                                    <input
                                        className="w-[270px] h-[61px] border-[1px] border-[#c9c9c9] shadow-xl text-[25px] text-[#A3A3A3] pl-[20px] rounded-[17px] "
                                        name="adress"
                                        type="text"
                                        placeholder="Ваш адрес"
                                    />
                                    <Image
                                        className="bg-white ml-[25px] p-[10px] rounded-[17px] border-[1px] border-[#dadada] shadow-md "
                                        src={"/adressIcon2.png"}
                                        alt="Adress Icon"
                                        width={61}
                                        height={62}
                                        priority
                                    />
                                </div>
                                <button
                                    onClick={() => setIsButtonLoading(true)}
                                    type="submit"
                                    // onClick={}
                                    className="bg-[#FFE600] mt-[14px] !shadow-2xl cursor-pointer w-[237px] h-[46px] rounded-[10px] px-[25px] py-[3px] text-[15px] text-black font-semibold"
                                >
                                    {isButtonLoading
                                        ? "Loading..."
                                        : "Заказать"}
                                </button>
                            </form>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
