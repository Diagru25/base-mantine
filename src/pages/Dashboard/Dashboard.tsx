import { authApi } from "apis/authApi";
import { FC } from "react";

const Dashboard: FC = () => {
  const handleTest = async () => {
    try {
    //   const res = await authApi.login("hopbocau@gmail.com", "abcd12344");
    //   console.log(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return <button onClick={handleTest}>Dashboard</button>;
};

export default Dashboard;
