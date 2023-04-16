import axios from "axios";
import qs from "query-string";
import { useState } from "react";

export default function redirectToGitHub() {
  // const [code, setCode] = useState(null)

  console.log(process.env.CLIENT_ID);
  console.log(process.env.REDIRECT_URL);
  const GITHUB_URL = "https://github.com/login/oauth/authorize";
  const params = {
    response_type: "code",
    scope: "user",
    client_id: "a42047fc0aa499dbd0f0",
    redirect_uri: "http://localhost:3000/community",
  };
  const queryStrings = qs.stringify(params);
  const authURL = `${GITHUB_URL}?${queryStrings}`;
  window.location.href = authURL;
}

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".login") as HTMLElement;
    loginButton.addEventListener("click", redirectToGitHub);

    const { code } = qs.parseUrl(window.location.href).query;
    console.log(code);
    if (code) {
      console.log(code);
      // getToken({code})
      // .then((res) => setCode(res))
      // .catch((err) => console.log(err))
    }
  });
}
