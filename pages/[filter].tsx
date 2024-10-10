import { NextPage } from "next";
import { useRouter } from "next/router";
import { Header } from "./header";
import { useCallback, useEffect, useState } from "react";
import { Box, Container, Grid2 as Grid } from "@mui/material";
import useStyles from "../pages-styles/filter.styles";
import { getFilterItems, ItemModel, pages } from "../utils/DataUtils";

const FilterPage: NextPage = () => {
  const router = useRouter();
  const styles = useStyles();
  const [data, setData] = useState<ItemModel[]>([]);
  const [pageName, setPageName] = useState<string>("");

  const getPageName = useCallback(() => {
    const key = String(router.query.filter);
    return pages.get(key);
  }, [router]);

  useEffect(() => {
    const key = String(router.query.filter);
    setData(getFilterItems(key));
    setPageName(getPageName() || "");
  }, [router, getPageName]);

  return (
    <div>
      <Header />
      <Container maxWidth="xl">
        <h1>{pageName}</h1>
        <Grid container spacing={2} columns={12}>
          {data.map((item) => (
            <Grid key={item.id} size={{ xs: 6, sm: 4, md: 3 }}>
              <Box
                sx={{
                  backgroundImage: `url(${item.image})`,
                }}
                className={styles.image}
              />
              <div>{item.name}</div>
              <div>{item.price}</div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default FilterPage;
