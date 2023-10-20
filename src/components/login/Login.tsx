import React from "react";
import { globalContext } from "../../App";
import Button from "antd/es/button";
import Link from "antd/es/typography/Link";

const CLIENT_ID = "74625cc4437a43a0b38c94a2e3ae8385";
const REDIRECT_URI = "http://127.0.0.1:5173/";
const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export const Login = () => {
  const { setToken } = React.useContext(globalContext) ?? {
    setToken: () => {},
  };

  React.useEffect(() => {
    const hash = window.location?.hash;
    let responseToken: string | undefined =
      window.localStorage.getItem("token") || undefined;
    if (!responseToken && hash) {
      responseToken = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];
      window.location.hash = "";
      responseToken && localStorage.setItem("token", responseToken);
      responseToken && setToken(responseToken);
      console.log("responseToken",responseToken)
    }
  }, []);

  const onClickHandler = () => {
    window.open(
      `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`
    );
  };

  return <Button type={"link"} className="text-4xl text-green-500" onClick={onClickHandler}>Login</Button>;
};

export default Login;