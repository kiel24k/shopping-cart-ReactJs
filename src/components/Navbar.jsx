import React from "react";
import cartStore from "../store/cartStore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  const { orders } = cartStore();

  return (
    <nav>
      <div className="bg-gray-50 shadow-md h-20 grid content-center">
        <ul className="flex gap-10 justify-end">
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>About</li>
          <li>Context</li>
          <li>

            <NavLink to="/cart">
              <ShoppingCartOutlinedIcon
              fontSize="large"
              titleAccess="View cart"
              
            />
            <div className="absolute grid justify-center content-center top-4 right-0 bg-red-500 text-white rounded-4xl w-5 h-5">
              <span style={{ fontSize: "10px" }}>{orders.length}</span>
            </div>
            </NavLink>

          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
