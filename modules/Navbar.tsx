"use client";
import { InstaIcon, RuIcon, TelegramIcon, TelIcon, UzIcon } from "@/assets/icons";
import SidebarMenu from "@/components/SideBar";
import { API } from "@/hooks/getEnv";
import { getSiteData } from "@/hooks/getSite";
import LangToggle from "@/hooks/LangToggle";
import { formatUzbekPhoneNumber } from "@/hooks/PhoneFormatter";
import { useLanguage } from "@/hooks/SetLanguage";
import { SiteType } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [siteData, setSiteData] = useState<SiteType | null>(null);

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
    const [lang, setLang] = useState<any>(localStorage.getItem("lang") || null )

    console.log(lang);
    

    function handleChangeLang() {
        const newLang = lang === "uz" ? "ru" : "uz";
        setLang(newLang);
        localStorage.setItem("lang",newLang)
    }

    useEffect(() => {
      console.log("Hozirgi cookie", document.cookie);
      
    },[lang])

    useEffect(() => {
        getSiteData();
    }, []);

    const handleScroll = (id:string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

    return (
        <>
            <div className="bg-[#009398] py-[20px] w-full pt-[40px] sm:pt-[20px] ">
                <div className="flex justify-between px-[24px] sm:px-[65px] items-center ">
                    <strong className="text-[24px]">INTEX-MARKET.UZ</strong>
                    <div className="hidden sm:flex gap-[19px] ">
                        <strong onClick={() => handleScroll("karkasniy")}>
                            {lang == "ru"
                                ? "Каркасные бассейны"
                                : "Ramkali hovuzlar"}
                        </strong>
                        <strong onClick={() => handleScroll("naduvniy")} >
                            {lang == "ru"
                                ? "Надувные бассейны"
                                : "Puflanadigan basseynlar"}
                        </strong>
                    </div>
                    <div className=" flex gap-[30px] items-center ">
                        <p className="hidden sm:block sm:text-[20px]">
                            {formatUzbekPhoneNumber(siteData?.phone)}
                        </p>
                        <div className="flex  ">
                            <a href={`tel:${siteData?.phone}`}>
                                <TelIcon/>
                            </a>
                            <a
                                target="_blank"
                                href={`${siteData?.telegramLink}`}
                            >
                                <TelegramIcon />
                            </a>
                            <a
                                target="_blank"
                                href={`${siteData?.instagramLink}`}
                            >
                                <InstaIcon />
                            </a>
                            <button onClick={() => handleChangeLang()}>
                                {lang == "uz" ? <UzIcon /> : <RuIcon />}
                            </button>

                            {/* <Image  className="cursor-pointer w-[25px] h-[25px] sm:2-[26px] sm:h-[26px]   rounded-[5px] " src={lang == "uz" ? "/UzIcon.png" : "/RuIcon.png"} alt="RuICon" priority width={26} height={26}/> */}
                            <Image
                                onClick={() => setIsSidebarOpen(true)}
                                className=" sm:hidden cursor-pointer w-[25px] h-[25px] sm:2-[26px] sm:h-[26px]   rounded-[5px] "
                                src="/siteBarIcon.png"
                                alt="RuICon"
                                priority
                                width={26}
                                height={26}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <SidebarMenu
            key={"1"}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
        </>
    );
};

export default Navbar;
