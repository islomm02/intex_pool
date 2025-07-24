"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { API } from "@/hooks/getEnv";
import { SiteType } from "@/types";

interface SidebarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarMenu({ isOpen, onClose }: SidebarMenuProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  const [lang, setLang] = useState<any>(localStorage.getItem("lang") || null )


  useEffect(() => {
    if (isOpen) {
      setShowSidebar(true);
    } else {
      const timer = setTimeout(() => setShowSidebar(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const [siteData, setSiteData] = useState<SiteType | null>(null)
  
      const getSiteData = async () => {
      try {
        const res = await fetch(`${API}/api/site`);
        const data = await res.json();
        setSiteData(data.data[0]);
        console.log("Keldi:", data); 
      } catch (err) {
        console.error("Xatolik:", err);
      }
    };
  
  
      useEffect(()  =>  {
          getSiteData()
      },[])
      

       const handleScroll = (id:string) => {
        onClose()
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {showSidebar && (
        <div className="fixed inset-0 z-50 flex">
          <div
  className={`w-[70%] h-full bg-[#009CA9] shadow-lg p-4 flex flex-col transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <h2 className="text-white text-[25px] text-center mb-[111px] font-semibold">
    INTEX-MARKET.UZ
  </h2>

  <button onClick={() => handleScroll("karkasniy")} className="bg-white mb-[30px] w-[236px] text-[#009CA9] text-[17px] font-semibold px-4 py-[17px] rounded-[10px] shadow">
    {lang === "ru" ? "Каркасные бассейны" : "Ramkali hovuzlar"}
  </button>

  <button onClick={() => handleScroll("naduvniy")} className="bg-white mb-[216px] w-[236px] text-[#009CA9] text-[17px] font-semibold px-4 py-[17px] rounded-[10px] shadow">
    {lang === "ru" ? "Надувные бассейны" : "Shishiriladigan hovuzlar"}
  </button>

  <a href={`tel:${siteData?.phone}`}>
    <button className="bg-[#139D4B] mb-[20px] h-[56px] w-[236px] text-[#fff] text-[21px] font-semibold px-4 py-[17px] rounded-[10px] shadow flex items-center justify-center gap-2">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.9671 18.5029L21.4709 16.0068C21.0191 15.5553 20.4533 15.2348 19.8337 15.0797C19.2141 14.9245 18.564 14.9404 17.9528 15.1257C17.3415 15.3109 16.792 15.6587 16.3629 16.1317C15.9337 16.6048 15.641 17.1854 15.516 17.8118C11.3997 17.0421 7.39619 13.0551 7.147 9.49156C7.84679 9.36283 8.49082 9.02414 8.99345 8.52052C9.65523 7.85867 10.027 6.96105 10.027 6.0251C10.027 5.08915 9.65523 4.19154 8.99345 3.52968L6.49796 1.03354C5.83608 0.371772 4.93844 0 4.00247 0C3.0665 0 2.16886 0.371772 1.50698 1.03354C-5.98019 8.52052 16.4799 30.98 23.9671 23.4931C24.6285 22.8311 25 21.9337 25 20.998C25 20.0623 24.6285 19.1648 23.9671 18.5029Z"
          fill="white"
        />
      </svg>
      {lang === "ru" ? "Позвонить" : "Qo‘ng‘iroq qilish"}
    </button>
  </a>

  <a target="_blank" href={`${siteData?.telegramLink}`}>
    <button className="bg-[#fff] flex justify-center items-center gap-3 h-[56px] mb-[20px] w-[236px] text-[#009CA9] text-[21px] font-semibold px-4 py-[17px] rounded-[10px] shadow">
      <svg
        width="27"
        height="25"
        viewBox="0 0 27 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.7418 3.13253C26.7418 3.13247 26.7417 3.13246 26.7417 3.13252L22.6946 23.2932C22.3891 24.7159 21.5931 25.0701 20.4618 24.4002L17.6422 22.2055C15.734 20.7201 13.0157 20.8998 11.3197 22.6234C10.7814 23.192 10.1244 22.5995 10.1767 21.8183L10.4053 18.3978C10.4814 17.2596 10.9814 16.1912 11.8066 15.4035L21.9523 5.71934C22.4494 5.25186 21.844 4.99181 21.1802 5.4603L11.106 12.1614C8.54653 13.8638 5.34629 14.2946 2.42779 13.3294L0.968658 12.8468C-0.354193 12.4107 -0.378141 11.4495 1.24453 10.7786L25.0357 1.09617C26.1372 0.660102 27.1008 1.35507 26.7419 3.13253C26.7418 3.13259 26.7418 3.13259 26.7418 3.13253Z"
          fill="#009398"
        />
      </svg>
      {lang === "ru" ? "Телеграм" : "Telegram"}
    </button>
  </a>

  <a target="_blank" href={`${siteData?.instagramLink}`}>
    <button className="bg-[#fff] flex justify-center items-center gap-2 h-[56px] w-[236px] text-[#009CA9] text-[21px] font-semibold px-4 py-[17px] rounded-[10px] shadow">
      <Image
        alt="Instagram Icon"
        src="/instagramIcon.png"
        width={40}
        height={40}
      />
      {lang === "ru" ? "Инстаграм" : "Instagram"}
    </button>
  </a>
</div>


          <div
            className={`w-[30%] h-full bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={onClose}
          />
        </div>
      )}
    </>
  );
}
