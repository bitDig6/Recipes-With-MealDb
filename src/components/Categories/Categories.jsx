import { useLoaderData } from "react-router";
import Category from "../Category/Category";

const Categories = () => {
    const mealCategories = useLoaderData().categories;
    console.log(mealCategories);

    return (
        <div className="my-10 space-y-5">
            <h2 className="text-center text-2xl font-bold text-amber-800">List of Meal Categories</h2>
            <p className="font-bold text-xl text-center">Find your favorite recipe by category</p>
            {
                mealCategories.map( category => <Category key={category.idCategory} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;