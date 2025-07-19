import Image from "next/image"

const Navbar = () => {
  return (
    <div className="bg-[#009398] py-[20px] w-full  " >
        <div className="flex justify-between px-[65px] items-center ">
            <strong>INTEX-MARKET.UZ</strong>
            <div className="flex gap-[19px] ">
                <strong>Каркасные бассейны</strong>
                <strong>Надувные бассейны</strong>
            </div>
            <div className=" flex gap-[30px] ">
                <p>(99) 911 02 04</p>
                <div className="flex gap-[14px] ">
                    <Image className="cursor-pointer" src="/telegramIcon.png" alt="TelegramIcon" priority width={26} height={26}  />
                    <Image className="cursor-pointer" src="/instagramIcon.png" alt="InstagramIcon" priority width={26} height={26}  />
                    <Image className="cursor-pointer rounded-[5px] " src="/RuIcon.png" alt="RuICon" priority width={26} height={26}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar