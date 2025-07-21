// import { API } from "@/hooks/getEnv";
// import { FormatterPrice } from "@/hooks/PriceFormatter";
// import { PoolsType } from "@/types";

// const PoolCard = ({
//   item,
//   onOpen,
// }: {
//   item: PoolsType;
//   onOpen: (item: PoolsType) => void;
// }) => {
//   return (
//     <div className="w-[340px] h-[284px] relative border border-[#ededed] shadow-2xl rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] transition-transform duration-300 hover:scale-102">
//       <img
//         src={item.image ? `${API}/file/${item.image}` : "/hero_img.png"}
//         alt="Pool"
//         className="mx-auto h-[172px] object-cover mt-[31px]"
//       />
//       <div className="flex items-center mt-[17px] justify-center gap-[13px]">
//         <div>
//           <p className="text-[#a5a5a5] text-[12px] !font-thin">
//             {FormatterPrice(item.price)} сум
//           </p>
//           <h2 className="text-black text-[20px] font-semibold">
//             {FormatterPrice(item.discountedPrice)} сум
//           </h2>
//         </div>
//         <button
//           onClick={() => onOpen(item)}
//           className="bg-[#FFE600] !shadow-2xl cursor-pointer rounded-tr-[10px] rounded-bl-[10px] px-[25px] py-[3px] text-[15px] text-black font-semibold"
//         >
//           Заказать
//         </button>
//       </div>
//       {item.quantity ? (
//         <div
//           className={`${
//             item.additional == "sale"
//               ? "bg-[#FFD600]"
//               : item.additional == "recomended"
//               ? "bg-[#139D4B]"
//               : ""
//           } flex items-center absolute top-0 rounded-br-[10px] justify-center px-[22px]`}
//         >
//           <p className="font-bold text-white">
//             {item.additional === "sale"
//               ? "Скидка"
//               : item.additional === "recomend"
//               ? "Рекомендуем"
//               : ""}
//           </p>
//         </div>
//       ) : ( <div className=" bg-[#ED2020] flex items-center absolute top-0 rounded-br-[10px] justify-center px-[22px]"><p className="font-bold text-white">Нет в наличии</p></div> )}
//     </div>
//   );
// };

// export default PoolCard;
