import PropTypes from "prop-types";

const Category = ({category}) => {
    const {strCategory, strCategoryThumb, strCategoryDescription	} = category;

    return (
        <div>
            <figure>
                <img src={strCategoryThumb} alt="" />
            </figure>
            <h3>{strCategory}</h3>
            <p>{strCategoryDescription}</p>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired,
}

export default Category;