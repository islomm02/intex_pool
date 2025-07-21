"use client";

import { useState } from "react";
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

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const handleOpenModal = (item: any) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  


  return (
    <div>
      <Image
        src="/hero_img.png"
        alt="Hero Img"
        width={1200}
        height={500}
        priority
        className="w-full h-[1000px] object-cover"
      />

      <BorderDiv title="Сезонная распродажа!" extraClass="!shadow-2xl" />

      <BorderDiv title="Каркасные бассейны" extraClass="!shadow-2xl" />
      <Pools onOpen={handleOpenModal} />

      <BorderDiv title="Надувные бассейны" extraClass="!shadow-2xl" />
      <ThreePools onOpen={handleOpenModal} />

      <DeliveryDiv isOpen={setIsConsultationOpen}  />
      <Clients />

      <Modal isSuccessOpen={isSuccessOpen} setIsSuccessOpen={setIsSuccessOpen} setIsOpen={setIsOpen} isOpen={isOpen} onClose={() => setIsOpen(false)}  selectedItem={selectedItem}/>
      <SuccessModal isOpen={isSuccessOpen} onClose={() => setIsSuccessOpen(false)}/>
      <ConsultationModal setIsSuccessOpen={setIsSuccessOpen} setIsOpen={setIsConsultationOpen} isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </div>
  );
}
