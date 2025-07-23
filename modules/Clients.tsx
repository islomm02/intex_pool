"use client";

import { CarIconCli, ManIconCli, TickIconCli, TickIconSmall } from "@/assets/icons";
import BorderDiv from "@/components/BorderDiv";
import { useLanguage } from "@/context/Context";
import Image from "next/image";
import { useEffect, useState } from "react";

const Clients = () => {

    const [lang, setLang] = useState<'uz' | 'ru'>("ru");
    
      useEffect(() => {
        const existingLang = document.cookie
          .split("; ")
          .find((row) => row.startsWith("language="))
          ?.split("=")[1] as 'uz' | 'ru' | undefined;
    
        if (existingLang === 'uz' || existingLang === 'ru') {
          setLang(existingLang);
          console.log(existingLang);
          
        }
      }, [lang]);
  

  return (
    <>
      <div className="pl-[14px] pr-[47px] sm:px-[165px] py-[85px]">
        <div className="flex flex-col sm:flex-row gap-[60px]">
          <div className="flex gap-2">
            {/* <Image alt="ManImg" src={"/manImg.png"} width={108} height={105} priority /> */}
            <ManIconCli/>
            <ul className="w-[242px] text-black">
              <li className="font-bold text-[40px]">
                {lang === "ru" ? "Опыт" : "Tajriba"}
              </li>
              <li>
                {lang === "ru"
                  ? "Профессионализм наших сотрудников"
                  : "Xodimlarimizning professionalligi"}
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            {/* <Image alt="CarImg" src={"/carImg.png"} width={108} height={105} priority /> */}
            <CarIconCli/>
            <ul className="w-[242px] text-black">
              <li className="font-bold text-[40px]">
                {lang === "ru" ? "Доставка" : "Yetkazib berish"}
              </li>
              <li>
                {lang === "ru"
                  ? "Бесплатная доставка по городу"
                  : "Shahar ichida bepul yetkazib berish"}
              </li>
            </ul>
          </div>
          <div className="flex">
            {/* <Image alt="TickImg" src={"/tickImg.png"} width={108} height={105} priority /> */}
            <TickIconCli/>
            <ul className="w-[190px] text-black">
              <li className="font-bold text-[40px]">
                {lang === "ru" ? "Качество" : "Sifat"}
              </li>
              <li>
                {lang === "ru"
                  ? "Прочные, качественные бассейны"
                  : "Mustahkam va sifatli hovuzlar"}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <BorderDiv
        title={
          lang === "ru"
            ? "Бассейны от intex в Ташкенте"
            : "Toshkentda Intex hovuzlari"
        }
        extraClass="!text-[#009398] !mb-[90px] bg-[#00939810]"
      />

      <div className="text-black flex flex-col sm:flex-row justify-between px-[32px] sm:px-[155px] mb-[300px]">
        <p className="sm:w-[48%] text-[25px]">
          {lang === "ru"
            ? "Бассейны от intex - доступная по цене, качественная, надежная и экологически чистая продукция, которая предназначена для приятного отдыха всей семьи. Бассейн можно установить совершенно на любом участке и активно пользоваться им в летний период. Бассейн подарит вам яркие эмоции и спасет от жары в знойные летние дни."
            : "Intex hovuzlari - narxi qulay, sifatli, ishonchli va ekologik toza mahsulot bo‘lib, butun oila uchun maroqli dam olishni ta’minlaydi. Hovuzni istalgan joyga o‘rnatish mumkin va yozda faol foydalanish mumkin. Hovuz sizga quvonchli lahzalarni taqdim etadi va jazirama kunlarda salqinlik bag‘ishlaydi."}
        </p>
        <div className="sm:w-[48%] text-[25px]">
          <p className="mt-[20px] sm:mt-0">
            {lang === "ru"
              ? "Бассейны от intex отличаются обширным перечнем преимуществ, из которых можно выделить самые важные:"
              : "Intex hovuzlarining asosiy afzalliklari quyidagilardir:"}
          </p>
          <ul className="mt-[25px]">
            <li className="flex gap-2 items-center">
              {/* <Image alt="img" src={"/tickIcon.png"} width={25} height={25} priority /> */}
              <TickIconSmall/>
              {lang === "ru" ? "Прочность" : "Mustahkamlik"}
            </li>
            <li className="flex gap-2 items-center">
              {/* <Image alt="img" src={"/tickIcon.png"} width={25} height={25} priority /> */}
              <TickIconSmall/>

              {lang === "ru" ? "Простота установки" : "O‘rnatish qulayligi"}
            </li>
            <li className="flex gap-2 items-center">
              {/* <Image alt="img" src={"/tickIcon.png"} width={25} height={25} priority /> */}
              <TickIconSmall/>

              {lang === "ru" ? "Красивые и ярки цвета" : "Chiroyli va yorqin ranglar"}
            </li>
            <li className="flex gap-2 items-center">
              {/* <Image alt="img" src={"/tickIcon.png"} width={25} height={25} priority />  */}
              <TickIconSmall/>

              {lang === "ru" ? "Стильный дизайн" : "Zamonaviy dizayn"}
            </li>
            <li className="flex gap-2 items-center">
              {/* <Image alt="img" src={"/tickIcon.png"} width={25} height={25} priority /> */}
              <TickIconSmall/>

              {lang === "ru" ? "Высокое качество" : "Yuqori sifat"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Clients;
