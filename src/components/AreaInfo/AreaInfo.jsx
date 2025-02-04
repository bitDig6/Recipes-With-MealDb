import PropTypes from "prop-types";

const AreaInfo = ({area}) => {
    const {strArea} = area;
    return (
        <div className="border rounded-2xl px-20 py-5 bg-sky-400">
            <h4 className="text-xl font-bold text-white">{strArea}</h4>
        </div>
    );
};

AreaInfo.propTypes = {
    area: PropTypes.object.isRequired,
}

export default AreaInfo;