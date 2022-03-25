import React from "react";

import { Box } from "@mui/system";
import Layout from "../../components/Layout";
import { Container } from "@mui/material";
import Heading from "../../components/Heading";
import HeadCard from "../../components/Investments/HeadCard";
import InvestTable from "../../components/Investments/Table";

const Investments = () => {
  return (
    <Layout>
      <Heading title={"investments"} />
      <HeadCard />
      <InvestTable />
    </Layout>
  );
};

export default Investments;
