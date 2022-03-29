import React from "react";

import Layout from "../../components/Layout";
import Heading from "../../components/Heading";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputSearch from "../../components/Faq/InputSearch";

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Layout>
      <Heading title={"faq"} />

      <Container maxWidth="md">
        <InputSearch />

        <Box marginTop={6}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                background:
                  "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
                marginBottom: 2,
              }}
            >
              <Typography sx={{ color: "white", fontFamily: "Kanit" }}>
                What is the origin of Thor?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "rgba(39, 47, 80, 0.5)" }}>
              <Typography sx={{ color: "white", fontFamily: "Kanit" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                quisquam blanditiis cum tenetur earum facere, optio nobis.
                Eligendi nesciunt aliquam reiciendis sit earum tenetur,
                repellendus nemo beatae maiores? Atque, omnis!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                background:
                  "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
                marginBottom: 2,
              }}
            >
              <Typography sx={{ color: "white", fontFamily: "Kanit" }}>
                What is the origin of Thor?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "rgba(39, 47, 80, 0.5)" }}>
              <Typography sx={{ color: "white", fontFamily: "Kanit" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                quisquam blanditiis cum tenetur earum facere, optio nobis.
                Eligendi nesciunt aliquam reiciendis sit earum tenetur,
                repellendus nemo beatae maiores? Atque, omnis!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                background:
                  "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
                marginBottom: 2,
              }}
            >
              <Typography sx={{ color: "white", fontFamily: "Kanit" }}>
                What is the origin of Thor?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "rgba(39, 47, 80, 0.5)" }}>
              <Typography sx={{ color: "white", fontFamily: "Kanit" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                quisquam blanditiis cum tenetur earum facere, optio nobis.
                Eligendi nesciunt aliquam reiciendis sit earum tenetur,
                repellendus nemo beatae maiores? Atque, omnis!
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
            sx={{ backgroundColor: "transparent" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                background:
                  "linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)",
                marginBottom: 2,
              }}
            >
              <Typography sx={{ color: "white", fontFamily: "Kanit" }}>
                What is the origin of Thor?
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ background: "rgba(39, 47, 80, 0.5)" }}>
              <Typography sx={{ color: "white", fontFamily: "Kanit" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                quisquam blanditiis cum tenetur earum facere, optio nobis.
                Eligendi nesciunt aliquam reiciendis sit earum tenetur,
                repellendus nemo beatae maiores? Atque, omnis!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Layout>
  );
};

export default Faq;
