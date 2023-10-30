import React, { useState, useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import { NewsCard } from "../../components";

const HomePage: React.FC = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:5000/top-stories");
      const data = await res.json();
      setState(data.data);
    })();
  }, []);

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {state.map((data) => (
        <NewsCard data={data} />
      ))}
    </Grid>
  );
};

export default HomePage;
