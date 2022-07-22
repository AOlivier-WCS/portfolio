/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [profil, setProfil] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users`, {
        withCredentials: true,
      })
      .then((res) => res.data)
      .then((data) => {
        setProfil(data);
      });
  }, []);
  console.log(profil);
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
}
