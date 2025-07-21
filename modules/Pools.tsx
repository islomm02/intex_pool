"use client";

// Pools.tsx
// import PoolCard from "@/components/PoolCard";
import { API } from "@/hooks/getEnv";
import { MetaType, PoolsType } from "@/types";
import { log } from "console";
import { useEffect, useState } from "react";

interface PoolsProps {
    onOpen: (item: any) => void;
}

interface PoolsDataType{
    data: PoolsType[],
    meta: MetaType
}

const Pools: React.FC<PoolsProps> = ({ onOpen }) => {
    const [poolsData, setPoolsData] = useState<PoolsDataType | null>(null);

    useEffect(() => {
        fetch(`${API}/products`)
            .then((res) => res.json())
            .then((data) => {
                setPoolsData(data);
            });
    }, []);
    console.log(poolsData);

    const fakePoolsData = [
        {
            id: 1,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "sale",
        },
        {
            id: 2,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: null,
        },
        {
            id: 3,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "recomend",
        },
        {
            id: 4,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "recomend",
        },
        {
            id: 5,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: null,
        },
        {
            id: 6,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: null,
        },
        {
            id: 7,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: null,
        },
        {
            id: 8,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "not",
        },
        {
            id: 9,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "sale",
        },
        {
            id: 10,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "sale",
        },
        {
            id: 11,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "recomend",
        },
        {
            id: 12,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "recomend",
        },
    ];

    return (
        <div className="px-[166px] py-[97px] flex gap-[41px] flex-wrap">
            {/* {poolsData?.data.map((item: PoolsType) => (
                <PoolCard key={item.id} item={item} onOpen={onOpen} />
            ))} */}
        </div>
    );
};

export default Pools;
