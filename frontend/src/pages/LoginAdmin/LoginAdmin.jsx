import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "./LoginAdmin.css";
import "../../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/admin/login`,
          {
            email,
            password,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => res.data)
        .then(() => navigate("/admin/espaceadmin"))
        .catch((err) => {
          swal(err.response.data.error);
        });
    } else {
      swal("Please specify both email and password");
    }
  };

  return (
    <div className="div-login-container">
      <div className="div-welcome">
        <h1>ACCÈS ADMINISTRATEUR</h1>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <p>Email</p>
          <label className="all-labels" htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <p>Password</p>
          <label className="all-labels" htmlFor="password">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div className="div-btn-submit">
          <button className="btn-submit" type="submit">
            Connexion
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
