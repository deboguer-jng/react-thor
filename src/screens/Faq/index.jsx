import React, { useState } from "react";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import { Container, Box, Typography, Button } from "@mui/material";

import InputSearch from "../../components/Faq/InputSearch";
import imgPlus from "../../assets/images/plus.png";
import imgMinus from "../../assets/images/minus.png";
import imgLine from "../../assets/images/line.png";

import useWindowDimensions from "../../dimension";
import SearchBar from "../../components/SearchBar";

const data = [
  {
    title: "What is the origin of Thor?",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Blanditiis impedit, repellendus quasi consectetur harum commodi eligendi recusandae tempora aperiam cum iste, aut modi, corrupti ipsum assumenda quam sunt. Ipsum, praesentium?",
  },
  {
    title: "What is the origin of Thor?",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Blanditiis impedit, repellendus quasi consectetur harum commodi eligendi recusandae tempora aperiam cum iste, aut modi, corrupti ipsum assumenda quam sunt. Ipsum, praesentium?",
  },
  {
    title: "What is the origin of Thor?",
    para: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Blanditiis impedit, repellendus quasi consectetur harum commodi eligendi recusandae tempora aperiam cum iste, aut modi, corrupti ipsum assumenda quam sunt. Ipsum, praesentium?",
  },
];

const Faq = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { width } = useWindowDimensions();

  const handleAccordion = (i) => {
    setActiveTab(i);
  };

  return (
    <Layout>
      <Heading title={"faq"} />

      <Container maxWidth="md">
        {/* <InputSearch /> */}
        <SearchBar placeholder={"Enter search term..."} />

        <Box marginTop={6}>
          {data.map((v, i) => (
            <Box marginBottom={"5px"}>
              <Button
                sx={{
                  width: "100%",
                  height: "56px",
                  background:
                    activeTab === i
                      ? "rgba(39, 47, 80, 0.5)"
                      : "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingX: "20px",
                  borderRadius: 0,
                }}
                onClick={() => handleAccordion(i)}
              >
                <Typography
                  sx={{
                    fontSize: width > 700 ? "20px" : "16px",
                    color: "white",
                    fontFamily: "Kanit",
                  }}
                  textTransform="none"
                >
                  What is the origin of Thor?
                </Typography>
                {activeTab === i ? (
                  <img src={imgMinus} />
                ) : (
                  <img src={imgPlus} width={"24px"} height="24px" />
                )}
              </Button>
              {activeTab === i ? (
                <Box
                  sx={{
                    lineHeight: "20px",
                    background: "rgba(39, 47, 80, 0.5)",
                    paddingX: "50px",
                    paddingY: "10px",
                    display: "flex",
                  }}
                >
                  <Box>
                    <img src={imgLine} alt="faq line" height={"100%"} />
                  </Box>
                  <Box marginLeft={2}>
                    <Typography
                      sx={{
                        fontFamily: "Kanit",
                        fontStyle: "italic",
                        fontWeight: "20px",
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: width > 700 ? "20px" : "16px",
                      }}
                    >
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Blanditiis impedit, repellendus quasi consectetur harum
                      commodi eligendi recusandae tempora aperiam cum iste, aut
                      modi, corrupti ipsum assumenda quam sunt. Ipsum,
                      praesentium?
                    </Typography>
                  </Box>
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default Faq;
