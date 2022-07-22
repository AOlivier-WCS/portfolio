import React from "react";
import { Outlet } from "react-router-dom";
import MenuBurger from "../menuBurger/MenuBurger";
import Logo from "../Logo/Logo";

export default function LayoutWebsite() {
  return (
    <div className>
      <div>
        <MenuBurger />
        <div className="logo">
          <Logo />
        </div>
        <Outlet />
      </div>
    </div>
  );
}
