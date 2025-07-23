
const BorderDiv = ({title, extraClass}: {title: string, extraClass?: string  }) => {
  return (
 <div className={`w-full h-[100px] flex items-center justify-center bg-[#009398] ${extraClass} `} >
        <h1 className=" text-[24px] sm:text-[50px] font-bold " >{title}</h1>
      </div>
  )
}

export default BorderDiv