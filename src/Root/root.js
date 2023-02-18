import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/index";
import { navbar } from "../utilitis/navbar/navbar";

export const Root = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Navigate to="/home" />} />
          {navbar?.map((navlink) => {
            return navlink?.isPrivate ? (
              <Route
                key={navlink?.id}
                path={navlink?.path}
                element={
                  localStorage.getItem("tokenFood") ? (
                    navlink?.element
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
            ) : (
              <Route
                key={navlink?.id}
                path={navlink?.path}
                element={navlink?.element}
              />
            );
          })}
        </Route>
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </>
  );
};
