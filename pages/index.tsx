import type { NextPage } from "next";
import React, { useEffect } from "react";
import useStyles from "../pages-styles/index.styles";
import Header from "./header";

const Home: NextPage = () => {
  const styles = useStyles();

  useEffect(() => {
    if (window) {
    }
  }, []);

  return (
    <div className={styles.root}>
      {/* <ThemeToggle /> */}
      <Header />
    </div>
  );
};

export default Home;
