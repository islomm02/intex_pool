"use client";

import { useState } from "react";

const SalePage = () => {
  const [lang, setLang] = useState<any>(localStorage.getItem("lang") || null )
  

  return (
    <>
      <div className="hidden py-[97px] px-[166px] sm:flex items-center justify-around">
        <div className="flex shadow-2xl gap-[19px] rounded-tr-[40px] rounded-bl-[40px] bg-[#009398] h-[115px] items-center w-[340px]">
          <h1 className="text-[65px] font-bold pl-[10px]">1</h1>
          <div>
            <span className="text-[24px] font-bold mb-[10px]">
              {lang === "ru" ? "Бесплатная доставка бассейна" : "Hovuzni bepul yetkazib berish"}
            </span>
            <p className="text-[13px] pb-[10px]">
              {lang === "ru"
                ? "Мы ценим наших клиентов, можете быть уверены в качестве нашего сервиса!"
                : "Biz mijozlarimizni qadrlaymiz, xizmatimiz sifati kafolatlangan!"}
            </p>
          </div>
        </div>

        <div className="flex shadow-2xl gap-[19px] rounded-tr-[40px] rounded-bl-[40px] bg-[#009398] h-[115px] items-center w-[340px]">
          <h1 className="text-[65px] font-bold pl-[10px]">2</h1>
          <div>
            <span className="text-[24px] font-bold mb-[10px]">
              {lang === "ru" ? "Специальная химия в подарок" : "Maxsus kimyo sovg‘a sifatida"}
            </span>
            <p className="text-[13px] pb-[10px]">
              {lang === "ru"
                ? "Специальная очищающая химия для бассейна - бесплатно"
                : "Hovuz uchun maxsus tozalovchi kimyo — bepul"}
            </p>
          </div>
        </div>

        <div className="flex shadow-2xl gap-[19px] rounded-tr-[40px] rounded-bl-[40px] bg-[#009398] h-[115px] items-center w-[340px]">
          <h1 className="text-[65px] font-bold pl-[10px]">3</h1>
          <div className="flex flex-col justify-between">
            <span className="text-[24px] font-bold mb-[10px]">
              {lang === "ru" ? "Гарантия качества" : "Sifat kafolati"}
            </span>
            <p className="text-[13px] pb-[10px]">
              {lang === "ru"
                ? "Вся продукция INTEX является оригинальной"
                : "Barcha INTEX mahsulotlari original hisoblanadi"}
            </p>
          </div>
        </div>
      </div>

      <div className="sm:hidden py-[31px] w-[370px] mx-auto text-center">
        <h2 className="text-[15px] text-[#009398] font-bold">
          {lang === "ru" ? "Бесплатная доставка бассейна" : "Hovuzni bepul yetkazib berish"}
        </h2>
        <p className="text-[#009398] text-[15px]">
          {lang === "ru"
            ? "Мы ценим наших клиентов, можете быть уверены в качестве нашего сервиса!"
            : "Biz mijozlarimizni qadrlaymiz, xizmatimiz sifati kafolatlangan!"}
        </p>
      </div>
    </>
  );
};

export default SalePage;
