
const BorderDiv = ({title, extraClass, id}: {title: string, extraClass?: string, id?:string  }) => {
  return (
 <div id={id} className={`w-full h-[100px] flex items-center justify-center bg-[#009398] ${extraClass} `} >
        <h1 className=" text-[24px] sm:text-[50px] font-bold " >{title}</h1>
      </div>
  )
}

export default BorderDiv