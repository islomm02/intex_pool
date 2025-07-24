"use client"
import PoolCard from "@/components/PoolCard"
import { FC, useEffect, useState } from "react";
import { PoolsDataType } from "./Pools";
import { API } from "@/hooks/getEnv";

interface ThreePoolsProps {
  onOpen: (item: any) => void;
}

const ThreePools:FC<ThreePoolsProps> = ({onOpen}) => {
  
  const [poolsData, setPoolsData] = useState<PoolsDataType | null>(null);
  
      useEffect(() => {
          fetch(`${API}/api/products?categoryId=1ed90e97-b42f-4c46-97e1-4fafb7b2c6f4`)
              .then((res) => res.json())
              .then((data) => {
                  setPoolsData(data);
              });
      }, []);

    const [lang, setLang] = useState<any>(localStorage.getItem("lang") || null )



  return (
    <div className=" px-[58px] sm:px-[166px] py-[97px] flex gap-[41px] flex-wrap ">
        {poolsData?.data.map((item) =>  (<PoolCard onOpen={onOpen} item={item} key={item.id} />) )}
    </div>
  )
}

export default ThreePools