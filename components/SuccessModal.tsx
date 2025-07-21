"use client"

import { FormatterPrice } from "@/hooks/PriceFormatter";
import Image from "next/image";
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white/5 backdrop-blur-2xl bg-opacity-70 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-[90%] max-h-[90%] overflow-auto relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black text-2xl">
            &times;
          </button>
          <div className="w-[1100px] h-[484px] flex flex-col justify-center items-center">
            <Image src="/succes.png" alt="Success" width={232} height={232} />
            <h2 className="text-[60px] font-bold text-black mt-6">Спасибо!</h2>
            <p className="text-[25px] text-gray-600 mt-2 text-center">Ваш заказ успешно оформлен. Мь свяжемся с вами в ближайшее время.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SuccessModal;
