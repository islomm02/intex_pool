import BorderDiv from "@/components/BorderDiv";
import DeliveryDiv from "@/components/DeliveryDiv";
import Clients from "@/modules/Clients";
import Pools from "@/modules/Pools";
import ThreePools from "@/modules/ThreePools";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image src="/hero_img.png" alt="Hero Img" width={1200} height={500} priority className="w-full h-[1000px] object-cover "  />
     <BorderDiv title="Сезонная распродажа!" extraClass="!shadow-2xl" />
     <div className="py-[97px] px-[166px] flex items-center justify-around ">
        <div className="flex shadow-2xl gap-[19px] rounded-tr-[40px] rounded-bl-[40px] bg-[#009398] h-[115px] items-center w-[340px]">
          <h1 className="text-[65px] font-bold pl-[10px]">1</h1>
          <div>
            <span className="text-[24px] font-bold mb-[10px] ">Бесплатная доставка бассейна</span>
            <p className="text-[13px] pb-[10px] ">Мы ценим наших клиентов, можете быть уверены в качестве нашего сервиса!</p>
          </div>
        </div>
        <div className="flex shadow-2xl gap-[19px] rounded-tr-[40px] rounded-bl-[40px] bg-[#009398] h-[115px] items-center w-[340px]">
          <h1 className="text-[65px] font-bold pl-[10px]">2</h1>
          <div>
            <span className="text-[24px] font-bold mb-[10px] ">Специальная химия в подарок</span>
            <p className="text-[13px] pb-[10px] ">Специальная очищающая химия для бассейна - бесплатно</p>
          </div>
        </div>
        <div className="flex shadow-2xl gap-[19px] rounded-tr-[40px] rounded-bl-[40px] bg-[#009398] h-[115px] items-center w-[340px]">
          <h1 className="text-[65px] font-bold pl-[10px]">3</h1>
          <div className="flex flex-col justify-between">
            <span className="text-[24px] font-bold mb-[10px] ">Гарантия качества</span>
            <p className="text-[13px] pb-[10px] ">Вся продукция INTEX является оригинальной</p>
          </div>
        </div>
        
     </div>
     <BorderDiv title="Каркасные бассейны" extraClass="!shadow-2xl" />
     <Pools/>
     <BorderDiv title="Надувные бассейны" extraClass="!shadow-2xl" />
     <ThreePools/>
     <DeliveryDiv  />
     <Clients/>
    </div>
  );
}
