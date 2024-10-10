import { NextPage } from "next";
import { useRouter } from "next/router";
import { Header, pages } from "./header";
import { useCallback } from "react";

const FilterPage: NextPage = () => {
  const router = useRouter();
  const getPageName = useCallback(() => {
    const key = String(router.query.filter);
    return pages.get(key);
  }, [router]);

  return (
    <div>
      <Header />
      <h1>{getPageName()}</h1>
    </div>
  );
};

export default FilterPage;
