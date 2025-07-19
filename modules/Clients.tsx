import BorderDiv from "@/components/BorderDiv"
import Image from "next/image"

const Clients = () => {
  return (
    <>
    <div className="px-[165px] py-[85px] ">
        <div className="flex gap-[60px]">
            <div className="flex gap-2">
                <Image alt="ManImg" src={"/manImg.png"} width={108} height={105} priority />
                <ul className="w-[242px] text-black ">
                    <li className="font-bold text-[40px]">Опыт</li>
                    <li>Профессионализм наших сотрудников</li>
                </ul>
            </div>
            <div className="flex gap-4">
                <Image alt="ManImg" src={"/carImg.png"} width={108} height={105} priority />
                <ul className="w-[242px] text-black ">
                    <li className="font-bold text-[40px]">Доставка</li>
                    <li>Бесплатная доставка по городу</li>
                </ul>
            </div>
            <div className="flex ">
                <Image alt="ManImg" src={"/tickImg.png"} width={108} height={105} priority />
                <ul className="w-[190px] text-black ">
                    <li className="font-bold text-[40px]">Качество</li>
                    <li>Прочные, качественные бассейны</li>
                </ul>
            </div>
        </div>
    </div>
    <BorderDiv title="Бассейны от intex в Ташкенте" extraClass="!text-[#009398] !mb-[90px] bg-[#00939810] " />
    <div className="text-black flex justify-between px-[155px] mb-[300px] ">
        <p className="w-[48%] text-[25px] ">Бассейны от intex - доступная по цене, качественная, надежная и экологически чистая продукция, которая предназначена для приятного отдыха всей семьи. Бассейн можно установить совершенно на любом участке и активно пользоваться им в летний период. Бассейн подарит вам яркие эмоции и спасет от жары в знойные летние дни.</p>
        <div className="w-[48%] text-[25px]">
            <p>Бассейны от intex отличаются обширным перечнем преимуществ, из которых можно выделить самые важные:</p>
            <ul className="mt-[15px]">
                <li className="flex"> <Image alt="img"  src={"/tickIcon.png"} width={25} height={25} priority  />Прочность</li>
                <li className="flex"> <Image alt="img"  src={"/tickIcon.png"} width={25} height={25} priority  />Простота установки</li>
                <li className="flex"> <Image alt="img"  src={"/tickIcon.png"} width={25} height={25} priority  />Красивые и ярки цвета</li>
                <li className="flex"> <Image alt="img"  src={"/tickIcon.png"} width={25} height={25} priority  />Стильный дизайн</li>
                <li className="flex"> <Image alt="img"  src={"/tickIcon.png"} width={25} height={25} priority  />Высокое качество</li>
            </ul>
        </div>
    </div>
    </>

  )
}

export default Clients