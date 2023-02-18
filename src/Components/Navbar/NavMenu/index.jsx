import React from "react";
import { Drawer } from "antd";
import { useNavMenuContext } from "../../../context/navMenu";
import { NavLink } from "react-router-dom";
import { navbar } from "../../../utilitis/navbar/navbar";

export const NavMenu = () => {
  const [openNavMenu, setOpenNavMenu] = useNavMenuContext();
  const onClose = () => {
    setOpenNavMenu(false);
  };

  return (
    <div>
      <Drawer
        title="Navigation"
        placement="right"
        onClose={onClose}
        open={openNavMenu}
      >
        {navbar?.map((val) => {
          return (
            !val?.hidden && (
              <NavLink
                key={val?.id}
                to={val?.path}
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                    fontSize: isActive ? "25px" : "22px",
                  };
                }}
              >
                {val?.title}
              </NavLink>
            )
          );
        })}
      </Drawer>
    </div>
  );
};
