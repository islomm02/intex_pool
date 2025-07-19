import BorderDiv from "./BorderDiv"

const DeliveryDiv = ({ extraClass}: { extraClass?: string  }) => {
  return (
<>
     <div className={` mb-[89px] w-full pt-[22px] pb-[39px] flex flex-col items-center justify-center bg-[#009398] ${extraClass}`} >
        <h1 className="text-[50px] font-bold " >Бесплатная доставка</h1>
        <p className="mb-[25px] text-[23px] px-[280px] text-center ">Бесплатная доставка осуществляется в пределах города Ташкент (за пределами города доставка оплачивается отдельно)</p>
        <button className="bg-[#FFE600] !shadow-2xl rounded-[10px]  px-[25px] py-[3px] text-[15px] text-black font-semibold  " >Оформить заказ</button>
      </div>
    <BorderDiv title="Ценности наших клиентов" extraClass="!text-[#009398] bg-[#00939810] " />
</>
  )
}

export default DeliveryDiv