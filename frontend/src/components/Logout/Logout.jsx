/* eslint-disable no-alert */
import axios from "axios";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Logout.css";

function Logout({ redirect, logout, idLogout, classLogout }) {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/logout`, {
        withCredentials: true,
      })
      .then(() => {
        swal("Déconnexion effectuée").then(() => navigate(redirect));
      })
      .catch((err) => {
        if (err.response.status === 401) {
          swal("Vous n'êtes pas authentifié.e");
        }
      });
  };

  return (
    <Link
      target="_blank"
      to={logout}
      onClick={(event) => handleClick(event)}
      className={classLogout}
      id={idLogout}
      type="submit"
      value="Déconnexion"
    >
      Déconnexion
    </Link>
  );
}

export default Logout;

Logout.propTypes = {
  idLogout: PropTypes.string,
  classLogout: PropTypes.string,
  logout: PropTypes.string,
  redirect: PropTypes.string,
};
Logout.defaultProps = {
  idLogout: "",
  classLogout: "",
  logout: "",
  redirect: "",
};
