import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React, { useCallback, useEffect, useState } from "react";
import useStyles from "../pages-styles/index.styles";
import { Header } from "./header";

const Home: NextPage = () => {
  const styles = useStyles();
  const router = useRouter();

  const goHome = useCallback(() => {
    router.push("/");
  }, []);

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
