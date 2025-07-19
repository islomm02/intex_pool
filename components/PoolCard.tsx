import { FormatterPrice } from "@/hooks/PriceFormatter"
import Image from "next/image"

const PoolCard = ({item}: {item: any}) => {
  return (
<div className="w-[340px] h-[284px] relative border border-[#ededed] shadow-2xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] transition-transform duration-300 hover:scale-102">
        <Image alt="Pool Image" src={`${item.img}`} width={306} height={172} priority className="mx-auto h-[172px] object-cover mt-[31px] "   />
        <div className="flex items-center mt-[17px] justify-center gap-[13px] " >
            <div>
                <p   className=" text-[#a5a5a5] text-[12px]  !font-thin ">{FormatterPrice(item.oldPrice)}</p>
              <h2 id="spartan" className="text-black text-[20px] font-[var(--font-spartan)] font-semibold">{FormatterPrice(item.price)} сум</h2>
            </div>  
            <button className="bg-[#FFE600] !shadow-2xl rounded-tr-[10px] rounded-bl-[10px] px-[25px] py-[3px] text-[15px] text-black font-semibold  " >Заказать</button>
        </div>
        <div className={`${item.additional == "sale" ? "bg-[#FFD600]" : item.additional == "recomend" ? "bg-[#139D4B]" : item.additional == "not" ? "bg-[#ED2020]" : "" } flex items-center absolute top-0 rounded-br-[10px] justify-center px-[22px] `}> <p className="font-bold text-white">{item.additional == "sale" ? "Cкидка" : item.additional == "recomend" ? "Рекомендуем" : item.additional == "not" ? "Нет в наличии" : "" }</p> </div>
    </div>
  )
}

export default PoolCard 