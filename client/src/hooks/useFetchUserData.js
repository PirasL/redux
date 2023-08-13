import axios from "axios";
import { useDispatch } from "react-redux";
import { storeUserInfo } from "../features/userSlice";

export default async function useFetchUserData(token) {
  let data = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "post",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  let json = await data.json();
  return json;
}
// dispatch to redux

// DISPLAY DATA ON USER PAGE USING ID in URL
