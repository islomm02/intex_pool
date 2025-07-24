import { API } from "@/hooks/getEnv";
import { FormatterPrice } from "@/hooks/PriceFormatter";
import { PoolsType } from "@/types";
import { useState } from "react";

const PoolCard = ({
    item,
    onOpen,
}: {
    item: PoolsType;
    onOpen: (item: PoolsType) => void;
}) => {
    const [lang, setLang] = useState<any>(localStorage.getItem("lang") || null )
    

    return (
        <div className="w-[340px] h-[284px] relative border border-[#ededed] shadow-2xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] transition-transform duration-300 hover:scale-102">
            <h2 className="absolute top-[21px] left-[40px] sm:left-[113px] text-center text-[20px] font-medium text-[#009398] ">
                { lang == "ru" ? item.Category.name : item.Category.name_uz}
            </h2>
            <img
                src={`${API}/uploads/${item.image}`}
                alt="Pool"
                className="mx-auto h-[172px] object-contain my-auto mt-[51px]"
            />
            <div className="flex items-center  justify-center gap-[13px]">
                <div>
                    <p className="relative inline-block text-[#a5a5a5] text-[12px] font-thin">
                        {FormatterPrice(item.price)}{" "}
                        {lang == "ru" ? "сум" : "so'm"}
                        <span className="absolute left-0 top-1/2 w-full h-[1.5px] bg-red-600 rotate-[-10deg]"></span>
                    </p>

                    <h2 className="text-black text-[20px] font-semibold">
                        {item.discountedPrice ? FormatterPrice(item.discountedPrice) : FormatterPrice(item.price)}{" "}
                        {lang == "ru" ? "сум" : "so'm"}
                    </h2>
                </div>
                <button
                    onClick={() => onOpen(item)}
                    className="bg-[#FFE600] !shadow-2xl cursor-pointer rounded-tr-[10px] rounded-bl-[10px] px-[25px] py-[3px] text-[15px] text-black font-semibold"
                >
                    {lang == "ru" ? "Заказать" : "Buyurtma berish"}
                </button>
            </div>
            {item.status != "OutOfStock" ? (
                <div
                    className={`${
                        item.status == "Sale"
                            ? "bg-[#FFD600]"
                            : item.status == "Recommend"
                            ? "bg-[#139D4B]"
                            : ""
                    } flex items-center absolute top-0 rounded-br-[10px] justify-center px-[22px]`}
                >
                    <p className="font-bold text-white">
                        {item.status === "Sale"
                            ? lang === "ru"
                                ? "Скидка"
                                : "Chegirma"
                            : item.status === "Recommend"
                            ? lang === "ru"
                                ? "Рекомендуем"
                                : "Tavsiya etamiz"
                            : ""}
                    </p>
                </div>
            ) : (
                <div className=" bg-[#ED2020] flex items-center absolute top-0 rounded-br-[10px] justify-center px-[22px]">
                    <p className="font-bold text-white">
                        {lang == "ru" ? "Нет в наличии" : "Sotuvda yoq"}
                    </p>
                </div>
            )}
        </div>
    );
};

export default PoolCard;

