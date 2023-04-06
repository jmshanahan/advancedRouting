import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigtion from "../components/MainNavigation";
import classes from "./Root.module.css";
const RootLayout = () => {
  return (
    <Fragment>
      <MainNavigtion />
      <main className={classes.content}>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
