import React from 'react';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputSearch from '../../components/Faq/InputSearch';
import { useMainContext } from '../../Foundation/Main.context';

const Faq = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { filteredFAQ, initialFAQ, query } = useMainContext();
  const faqArray = query?.length > 0 ? filteredFAQ : initialFAQ;

  if (faqArray?.length <= 0) {
    return (
      <Layout>
        <Heading title={'faq'} />

        <Container maxWidth="md">
          <InputSearch />

          <Box marginTop={6}>
            <Typography sx={{ color: 'white', fontFamily: 'Kanit' }}>
              No Matches
            </Typography>
          </Box>
        </Container>
      </Layout>
    );
  }
  return (
    <Layout>
      <Heading title={'faq'} />
      <Container maxWidth="md">
        <InputSearch />
        <Box marginTop={6}>
          {faqArray?.map((faq, index) => (
            <Accordion
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{ backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                  background:
                    'linear-gradient(92.91deg, rgba(19, 22, 30, 0.76) 1.78%, rgba(19, 22, 30, 0.62) 99.64%)',
                  marginBottom: 2,
                }}
              >
                <Typography sx={{ color: 'white', fontFamily: 'Kanit' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ background: 'rgba(39, 47, 80, 0.5)' }}>
                <Typography sx={{ color: 'white', fontFamily: 'Kanit' }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default Faq;
