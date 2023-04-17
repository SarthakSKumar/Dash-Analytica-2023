import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie } from "./cookies";

const withAuth = (Component) => {
  const WithAuth = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const username = getCookie("username");
      if (username instanceof Error || !username) {
        navigate("/login");
      }
    }, [navigate]);

    return <Component {...props} />;
  };

  return WithAuth;
};

export default withAuth;
