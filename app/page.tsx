"use client";

import { useEffect, useState } from "react";
import Pools from "@/modules/Pools";
import Modal from "@/components/OrderModal";
import BorderDiv from "@/components/BorderDiv";
import DeliveryDiv from "@/components/DeliveryDiv";
import Clients from "@/modules/Clients";
import Image from "next/image";
import ThreePools from "@/modules/ThreePools";
// import PoolCard from "@/components/PoolCard";
import { FormatterPrice } from "@/hooks/PriceFormatter";
import SuccessModal from "@/components/SuccessModal";
import ConsultationModal from "@/components/ConsultationModal";
import SalePage from "@/modules/SalePage";
import { PoolsType } from "@/types";
import Footer from "@/modules/Footer";
import SidebarMenu from "@/components/SideBar";
import Navbar from "@/modules/Navbar";
import { useLanguage } from "@/hooks/SetLanguage";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenModal = (item: PoolsType) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const [lang, setLang] = useState<any>(localStorage.getItem("lang") || null )
    

  console.log(lang);
  

  return (
    <div>
        <Navbar  />

      <Image
        src="/hero_img.png"
        alt="Hero Img"
        width={1200}
        height={500}
        priority
        className="w-full h-[280px] sm:h-[1000px] object-cover"
      />
      <SidebarMenu  isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} />
      <BorderDiv  title={lang == "ru" ? "Сезонная распродажа!" : "Mavsumiy sotuv!"} extraClass="!shadow-2xl " />


      <SalePage/>


      <BorderDiv id="karkasniy"   title={lang == "ru" ? "Каркасные бассейны" : "Ramkali Hovuzlar"} extraClass="!shadow-2xl" />
      <Pools onOpen={handleOpenModal} />

      <BorderDiv id="naduvniy"  title={lang == "ru" ?  "Надувные бассейны" : "Puflanadigan hovuzlar"} extraClass="!shadow-2xl" />
      <ThreePools onOpen={handleOpenModal} />

      <DeliveryDiv isOpen={setIsConsultationOpen}  />
      <Clients />

      <Modal isSuccessOpen={isSuccessOpen} setIsSuccessOpen={setIsSuccessOpen} setIsOpen={setIsOpen} isOpen={isOpen} onClose={() => setIsOpen(false)}  selectedItem={selectedItem}/>
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)}/>
      <ConsultationModal setIsSuccessOpen={setIsSuccessOpen} setIsOpen={setIsConsultationOpen} isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      <Footer setIsSuccesOpen={setIsSuccessOpen}  />
    </div>
  );
}