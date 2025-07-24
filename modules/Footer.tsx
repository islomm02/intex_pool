"use client"
import { API } from "@/hooks/getEnv";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";

const Footer = ({ setIsSuccesOpen}: { setIsSuccesOpen: any}) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [lang, setLang] = useState<any>(localStorage.getItem("lang") || null )


    const [isButtonLoading,setIsButtonLoading] = useState(false)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name")?.toString().trim();
        const phone = formData.get("phone")?.toString().trim();

        if (!name || !phone) {
            alert("Iltimos, barcha maydonlarni to‘ldiring.");
            return;
        }

        const phoneRegex = /^\+998\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Telefon raqam noto‘g‘ri formatda. To‘g‘ri format: +998901234567");
        return;
    }

        const postData = {
            name: name,
            phone: phone,
            check: false,
        };
        console.log("Post data", postData);

        axios
            .post(`${API}/api/consultatsiya`, postData)
            .then((res) => {
                setName("")
                setPhone("")
                setIsButtonLoading(false)
                setIsSuccesOpen(true)
                console.log("Yuborildi:", res.data);
            })
            .catch((err) => {
                console.error("Xatolik:", err);
                alert("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
            });
    }

    


    return (
        <div className="bg-[#009398] sm:hidden  ">
            <div>
  <h1 className="text-[20px] w-[272px] mx-auto text-center mb-[13px] ">
    {lang === "ru" ? "Получить бесплатную консультацию" : "Bepul maslahat olish"}
  </h1>

  <form
    onSubmit={(e) => handleSubmit(e)}
    autoComplete="off"
    className="w-[400px] flex flex-col gap-[17px] justify-center items-center mr-[20px]"
  >
    <input
      className="bg-white w-[272px] h-[61px] border-[1px] border-[#c9c9c9] shadow-xl text-[25px] text-[#A3A3A3] pl-[10px] text-start rounded-[17px]"
      name="name"
      type="text"
      placeholder={lang === "ru" ? "Имя" : "Ism"}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      className="w-[272px] bg-white h-[61px] border-[1px] border-[#c9c9c9] shadow-xl text-[25px] text-[#A3A3A3] pl-[10px] text-start rounded-[17px]"
      name="phone"
      type="text"
      placeholder={lang === "ru" ? "Телефон" : "Telefon"}
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
    <button
      onClick={() => setIsButtonLoading(true)}
      type="submit"
      className="bg-[#FFE600] mt-[14px] !shadow-2xl cursor-pointer w-[239px] h-[46px] rounded-[10px] px-[10px] py-[3px] text-[15px] text-black font-semibold"
    >
      {isButtonLoading
        ? "Loading..."
        : lang === "ru"
        ? "Хочу проконсультироваться"
        : "Maslahat olishni xohlayman"}
    </button>
  </form>

  <div className="pt-[29px] px-[24px] flex pb-[10px] justify-between">
    <div className="w-[48%] flex flex-col">
      <div className="mb-[15px] flex gap-[7px] items-center">
        <Image
          alt="s"
          src={"/watchIcon.png"}
          width={27}
          height={27}
        />
        <h2 className="text-[15px] font-semibold text-white">
          {lang === "ru" ? "Рабочее время" : "Ish vaqti"}
        </h2>
      </div>

      <h3 className="text-[12px] font-semibold text-white">
        {lang === "ru" ? "Будние дни: 10:00 - 22:00" : "Hafta ichida: 10:00 - 22:00"}
      </h3>

      <h3 className="mb-[30px] text-[12px] font-semibold text-white">
        {lang === "ru" ? "Без выходных" : "Dam olish kunlarisiz"}
      </h3>

      <div className="flex gap-[14px]">
        <Image
          className="cursor-pointer w-[29px] h-[29px]"
          src="/telegramIcon.png"
          alt="TelegramIcon"
          priority
          width={29}
          height={29}
        />
        <Image
          className="cursor-pointer w-[29px] h-[29px]"
          src="/instagramIcon.png"
          alt="InstagramIcon"
          priority
          width={29}
          height={29}
        />
        <Image
          className="cursor-pointer w-[29px] h-[29px] rounded-[5px]"
          src="/RuIcon.png"
          alt="RuICon"
          priority
          width={29}
          height={29}
        />
      </div>
    </div>

    <div className="w-[48%] flex flex-col">
      <h2 className="text-[12px] mb-[7px] font-semibold text-white">
        Intex.uz
      </h2>
      <h2 className="text-[12px] mb-[7px] font-semibold text-white">
        +998(99)535-53-33
      </h2>
      <h2 className="text-[13px] mb-[17px] font-semibold text-white">
        {lang === "ru"
          ? "проспект Мустакиллик, 59А 100000 Узбекистан, Ташкент"
          : "Mustaqillik shoh ko'chasi, 59A, 100000, O'zbekiston, Toshkent"}
      </h2>
      <h2 className="text-[11px] text-white text-end leading-[100%]">
        {lang === "ru"
          ? "Разработано в Premium Digital Все права защищены."
          : "Premium Digital tomonidan ishlab chiqilgan. Barcha huquqlar himoyalangan."}
      </h2>
    </div>
  </div>
</div>

        </div>
    );
};

export default Footer;
