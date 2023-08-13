import React from "react";
import { useState } from "react";
import { useGetUserDataQuery } from "../features/users/userApi";
import EditUserInfoForm from "./EditUserInfoForm/EditUserInfoForm";

export default function UserContent() {
  const { data } = useGetUserDataQuery();
  const [editFormToggler, setEditFormToggler] = useState(false);

  function editUserFormToggler(e) {
    e.preventDefault();
    setEditFormToggler((prevState) => !prevState);
  }
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {data?.userName}
        </h1>
        {!editFormToggler && (
          <button className="edit-button" onClick={editUserFormToggler}>
            Edit Name
          </button>
        )}
        {editFormToggler && (
          <EditUserInfoForm
            toggler={editUserFormToggler}
            userName={data.userName}
            lastName={data.lastName}
            firstName={data.firstName}
          />
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}
