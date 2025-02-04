import { useLoaderData } from "react-router";
import AreaInfo from "../AreaInfo/AreaInfo";

const Area = () => {
    const areaList = useLoaderData().meals;
    console.log(areaList);

    return (
        <div className="my-10">
            <h2 className="text-xl text-center font-bold">Recipes from different Countries</h2>
            <p className="mt-2 mb-14 font-semibold text-center">Discover Different Recipes All Around The World!</p>
            <div className="grid grid-cols-3 gap-20 justify-items-center">
                {
                    areaList.map((area, idx) => <AreaInfo key={idx} area={area}></AreaInfo>)
                }
            </div>
        </div>
    );
};

export default Area;