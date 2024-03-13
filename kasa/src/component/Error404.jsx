// Error404.js
import React from "react";
import { Navigate } from "react-router-dom";

function Error404() {
  return <Navigate to="/404" />;
}
export default Error404;
