"use client"
import { useLanguage } from "@/hooks/SetLanguage"
import BorderDiv from "./BorderDiv"

const DeliveryDiv = ({ extraClass, isOpen}: { extraClass?: string, isOpen:any  }) => {

  const [lang, setLang] = useLanguage()

  return (
<>
      <div
        className={`mb-[89px] w-full pt-[22px] pb-[39px] flex flex-col items-center justify-center bg-[#009398] ${extraClass}`}
      >
        <h1 className="text-[25px] sm:text-[50px] font-bold">
          {lang === "ru" ? "Бесплатная доставка" : "Bepul yetkazib berish"}
        </h1>
        <p className="mb-[25px] text-[13px] sm:text-[23px] px-[15px] sm:px-[280px] text-center">
          {lang === "ru"
            ? "Бесплатная доставка осуществляется в пределах города Ташкент (за пределами города доставка оплачивается отдельно)"
            : "Bepul yetkazib berish faqat Toshkent shahri hududida amalga oshiriladi (shahar tashqarisiga yetkazib berish alohida to'lanadi)"}
        </p>
        <button
          onClick={() => isOpen(true)}
          className="bg-[#FFE600] cursor-pointer !shadow-2xl rounded-[10px] px-[25px] py-[3px] text-[15px] text-black font-semibold"
        >
          {lang === "ru" ? "Оформить заказ" : "Buyurtma berish"}
        </button>
      </div>
      <BorderDiv
        title={lang === "ru" ? "Ценности наших клиентов" : "Mijozlarimiz qadriyatlari"}
        extraClass="!text-[#009398] bg-[#00939810]"
      />
    </>
  )
}

export default DeliveryDiv