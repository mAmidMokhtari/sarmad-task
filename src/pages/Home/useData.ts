import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { LOG_IN } from "../../constants/routes";

export const useData = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(LOG_IN);
    }
  }, [token, navigate]);

  const loggingOut = () => {
    localStorage.removeItem("token");
    navigate(LOG_IN);
  };
  return { loggingOut };
};
