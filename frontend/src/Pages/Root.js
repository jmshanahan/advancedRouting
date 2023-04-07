import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigtion from "../components/MainNavigation";
import classes from "./Root.module.css";
const RootLayout = () => {
  // const navigation = useNavigation();
  return (
    <Fragment>
      <MainNavigtion />
      <main className={classes.content}>
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
