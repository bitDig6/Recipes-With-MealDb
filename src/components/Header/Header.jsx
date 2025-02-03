import { NavLink } from "react-router";
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold m-10 text-center">Recipes With Meal Db</h2>
            <nav className="m-auto flex items-center justify-center gap-10 font-bold">
                <NavLink to="">Home</NavLink>
                <NavLink to="categories">Categories</NavLink>
                <NavLink to="area">Area</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
        </div>
    );
};

export default Header;