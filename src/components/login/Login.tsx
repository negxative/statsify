import React from "react";
import { globalContext } from "../../utils/Config";
import Button from "antd/es/button";
import { useNavigate } from "react-router-dom";
const CLIENT_ID = "74625cc4437a43a0b38c94a2e3ae8385";
const REDIRECT_URI = "https://statzify.netlify.app/";
const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-library-read",
  "user-top-read",
];

export const Login = () => {
  const { setToken } = React.useContext(globalContext) ?? {
    setToken: () => {},
  };
  const navigate = useNavigate();
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
      if (responseToken) {
        localStorage.setItem("token", responseToken);
        setToken(responseToken);
        navigate("/categories/topArtists");
      }
    }
  }, []);

  const onClickHandler = () => {
    window.open(
      `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes.join(
        "%20"
      )}`
    );
  };

  return (
    <Button
      type={"link"}
      className="text-4xl text-green-500"
      onClick={onClickHandler}
    >
      Login
    </Button>
  );
};

export default Login;
