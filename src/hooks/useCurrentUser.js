import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import * as Api from "../api";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cookies] = useCookies(["authToken"]);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (!cookies.authToken) {
        setLoading(false);
        return;
      }
      try {
        const data = await Api.getMe();
        setCurrentUser(data.data);
      } catch (error) {
        console.error("Failed to fetch current user:", error);
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, [cookies]);

  return { currentUser, loading };
};

export default useCurrentUser;
