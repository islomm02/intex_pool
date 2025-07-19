import PoolCard from "@/components/PoolCard"
import { idText } from "typescript"

const ThreePools = () => {
    const fakePoolsData = [
        {
            id: 1,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "recomend"
        },
        {
            id: 2,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "recomend"
        },
        {
            id: 3,
            title: "Металлический каркас",
            img: "https://rizesport.uz/thumb/2/TDJpfWeUX5aJMzAfBxuQOw/400r400/d/intex_28202.jpg",
            oldPrice: 1090000,
            price: 1090000,
            additional: "recomend"
        }
    ]
  return (
    <div className="px-[166px] py-[97px] flex gap-[41px] flex-wrap ">
        {fakePoolsData.map((item) =>  (<PoolCard item={item} key={item.id} />) )}
    </div>
  )
}

export default ThreePools