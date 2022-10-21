import { authApi } from "apis/authApi";
import instance from "apis/baseRequest";
import { ACCESS_TOKEN } from "constants/types/localStorage";
import React, { FC, useEffect } from "react";

const Profile: FC = () => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await authApi.test();
        console.log(res);
      } catch (error) {
        console.log("test: ", error);
      }
    };

    fetch();
  }, []);
  console.log("abc");
  return <div>Prodile</div>;
};

export default Profile;
