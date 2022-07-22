import React from "react";
import { Outlet } from "react-router-dom";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";

export default function LayoutAdmin() {
  return (
    <div>
      <div>
        <NavBarAdmin />
        <Outlet />
      </div>
    </div>
  );
}
