import "./SignInForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../features/users/userApi";

export default function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [logUser] = useLoginUserMutation();
  const [error, setError] = useState(false);

  function submitDataHandler(e) {
    e.preventDefault();

    logUser(formData).then((res) => {
      if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data.body.token));
        navigate("/user", { replace: true });
      } else if (res.error) {
        errorMessageHandler();
      }
    });
  }

  function errorMessageHandler() {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, "5000");
  }

  function inputChangeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={submitDataHandler}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              id="email"
              onChange={inputChangeHandler}
              value={formData.email}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              onChange={inputChangeHandler}
              value={formData.password}
            />
          </div>
          <div className="input-remember">
            <input name="rememberMe" type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
      {error && <div className="toast">Wrong credentials !</div>}
    </main>
  );
}
