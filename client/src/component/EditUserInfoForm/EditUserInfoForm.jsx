import "./EditUserInfoForm.css";
import React from "react";
import { useState } from "react";
import { useEditUserDataMutation } from "../../features/users/userApi";

export default function EditUserInfoForm({
  userName,
  toggler,
  lastName,
  firstName,
}) {
  const [newUserName, setNewUserName] = useState(userName);
  const [editUserName] = useEditUserDataMutation();

  function formChangeHandler(e) {
    setNewUserName(e.target.value);
  }

  function submitNewUserName(e) {
    editUserName(newUserName);
    toggler(e);
    // console.log("hey");
  }

  return (
    <section className="edit-user-section">
      <div className="edit-user-form-container">
        <h1>Edit user info</h1>
        <form className="edit-user-form">
          <div className="edit-user-input-container">
            <label className="edit-user-form-label">User name</label>
            <input
              className="edit-user-form-input"
              type="text"
              name="username"
              value={newUserName}
              onChange={formChangeHandler}
            />
          </div>

          <div className="edit-user-input-container">
            <label className="edit-user-form-label">First name</label>
            <input
              className="edit-user-form-input"
              type="text"
              value={firstName}
              disabled
            />
          </div>
          <div className="edit-user-input-container">
            <label className="edit-user-form-label">Last name</label>
            <input
              className="edit-user-form-input"
              type="text"
              value={lastName}
              disabled
            />
          </div>
        </form>
        <div className="edit-user-button-container">
          <button className="edit-button" onClick={submitNewUserName}>
            Save
          </button>
          <button className="edit-button" onClick={toggler}>
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
