import { useEffect } from "react";
import qs from "qs";

export default function Callback({ history, location }) {
  const authUri = `http://localhost:8080/callback`;

  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        console.log(code);
        const response = await fetch(`${authUri}?code=${code}`);
        const data = await response.json();

        localStorage.setItem("token", data.jwt);
        localStorage.setItem("ProfileURL", data.avatar_url);

        history.push("/");
      } catch (error) {}
    };

    getToken();
  }, [location, history, authUri]);
}
