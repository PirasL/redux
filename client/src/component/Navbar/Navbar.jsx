import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.png";
import "./Navbar.css";
import { userApi } from "../../features/users/userApi";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const isAuth = localStorage.getItem("token") ? true : false;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logOut(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(userApi.util.resetApiState());
    navigate("/");
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!isAuth && (
          <Link className="main-nav-item" to="/login">
            Sign in
          </Link>
        )}

        {isAuth && (
          <>
            <Link className="main-nav-item" to="/user">
              Profil
            </Link>
            <Link onClick={logOut} className="main-nav-item">
              Log out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
