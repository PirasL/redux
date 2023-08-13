import "./SignInForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../features/users/userApi";

export default function SignInForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [logUser] = useLoginUserMutation();

  function submitDataHandler(e) {
    e.preventDefault();
    console.log(formData);
    logUser(formData).then((res) => {
      if (res.data.status === 200) {
        localStorage.setItem("token", JSON.stringify(res.data.body.token));
        navigate("/user", { replace: true });
      } else {
        console.log("Wrong credentials");
      }
    });
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
    </main>
  );
}
