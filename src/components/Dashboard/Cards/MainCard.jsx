import React, { useState } from "react";

import { Box, Grid, Button, Typography } from "@mui/material";

import imgCard1 from "../../../assets/images/cards/box-card1.png";
import imgCard2 from "../../../assets/images/cards/box-card2.png";
import imgCard3 from "../../../assets/images/cards/box-card3.png";
import imgCard4 from "../../../assets/images/cards/box-card4.png";

import styles from "../style.module.css";
import styledEngine from "@mui/styled-engine";

const MainCard = ({ onClick }) => {
  const [mainCard, setMainCard] = useState(true);
  const [collapse, setCollapse] = useState(false);
  const [frontCard, setFrontCard] = useState("");

  const handleClick = () => {
    onClick(true);
  };

  const handleCard = (i) => {
    // alert(i);
    console.log(i);
  };

  return (
    <Box className={styles.parentMainContainer}>
      {/* <Box
        className={collapse ? styles.cardBoxCollapse : styles.cardBoxExpend}
        sx={{ marginBottom: 40 }}
        onClick={() => setCollapse(!collapse)}
      >
        <Box className={styles.card1} onClick={() => handleCard(0)}></Box>
        <Box className={styles.card2} onClick={() => handleCard(1)}></Box>
        <Box className={styles.card3} onClick={() => handleCard(2)}></Box>
        <Box className={styles.card4} onClick={() => handleCard(3)}></Box>
      </Box> */}
      <Box className={styles.child1} width={mainCard ? "100%" : "20%"}>
        <Grid container spacing={2}>
          <Grid
            item
            xl={3}
            lg={3}
            md={6}
            sm={6}
            xs={12}
            className={styles.pmBoxes}
          >
            <Box
              padding={4}
              className={
                mainCard ? styles.boxContainer : styles.boxContainerCollapse
              }
            >
              <Button
                sx={{ padding: 0 }}
                onClick={handleClick}
                className={styles.btnContainer}
              >
                <img src={imgCard1} alt="card" width={"176px"} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <Box
              padding={4}
              className={
                mainCard ? styles.boxContainer : styles.boxContainerCollapse
              }
            >
              <Button
                sx={{ padding: 0 }}
                onClick={handleClick}
                className={styles.btnContainer}
              >
                <img src={imgCard2} alt="card" width={"176px"} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <Box
              padding={4}
              className={
                mainCard ? styles.boxContainer : styles.boxContainerCollapse
              }
            >
              <Button
                sx={{ padding: 0 }}
                onClick={handleClick}
                className={styles.btnContainer}
              >
                <img src={imgCard3} alt="card" width={"176px"} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    12.5
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
            <Box
              padding={4}
              className={
                mainCard ? styles.boxContainer : styles.boxContainerCollapse
              }
            >
              <Button
                sx={{ padding: 0 }}
                onClick={handleClick}
                className={styles.btnContainer}
              >
                <img src={imgCard4} alt="card" width={"176px"} height="248px" />
              </Button>
              <Box className={styles.childContainer}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    COST
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    12.5S
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "white", fontFamily: "Kanit" }}
                  >
                    REWARDS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      background:
                        "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
                      fontFamily: "Kanit",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      textFillColor: "transparent",
                      fontStyle: "normal",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 600,
                      marginTop: "-10px",
                    }}
                  >
                    .144
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* <Box
        className={
          mainCard
            ? `${styles.child2Inactive} ${styles.mainChild}`
            : `${styles.child2Active} ${styles.mainChild}`
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ratione
        ea ad necessitatibus nam nulla ab totam tenmporibus incidunt modi ex
      </Box> */}
    </Box>

    // <Box>
    //   <Grid container spacing={2} sx={{ maxWidth: "1200px" }}>
    //     <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
    //       <Box padding={4} className={styles.boxContainer}>
    //         <Button
    //           sx={{ padding: 0 }}
    //           onClick={handleClick}
    //           className={styles.btnContainer}
    //         >
    //           <img src={imgCard1} alt="card" width={"176px"} height="248px" />
    //         </Button>
    //         <Box className={styles.childContainer}>
    //           <Box sx={{ textAlign: "center" }}>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{ color: "white", fontFamily: "Kanit" }}
    //             >
    //               COST
    //             </Typography>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{
    //                 background:
    //                   "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
    //                 fontFamily: "Kanit",
    //                 backgroundClip: "text",
    //                 WebkitBackgroundClip: "text",
    //                 textFillColor: "transparent",
    //                 fontStyle: "normal",
    //                 WebkitTextFillColor: "transparent",
    //                 fontWeight: 600,
    //                 marginTop: "-10px",
    //               }}
    //             >
    //               12.5
    //             </Typography>
    //           </Box>
    //           <Box sx={{ textAlign: "center" }}>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{ color: "white", fontFamily: "Kanit" }}
    //             >
    //               REWARDS
    //             </Typography>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{
    //                 background:
    //                   "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
    //                 fontFamily: "Kanit",
    //                 backgroundClip: "text",
    //                 WebkitBackgroundClip: "text",
    //                 textFillColor: "transparent",
    //                 fontStyle: "normal",
    //                 WebkitTextFillColor: "transparent",
    //                 fontWeight: 600,
    //                 marginTop: "-10px",
    //               }}
    //             >
    //               .144
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
    //       <Box padding={4} className={styles.boxContainer}>
    //         <Button
    //           sx={{ padding: 0 }}
    //           onClick={handleClick}
    //           className={styles.btnContainer}
    //         >
    //           <img src={imgCard2} alt="card" width={"176px"} height="248px" />
    //         </Button>
    //         <Box className={styles.childContainer}>
    //           <Box sx={{ textAlign: "center" }}>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{ color: "white", fontFamily: "Kanit" }}
    //             >
    //               COST
    //             </Typography>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{
    //                 background:
    //                   "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
    //                 fontFamily: "Kanit",
    //                 backgroundClip: "text",
    //                 WebkitBackgroundClip: "text",
    //                 textFillColor: "transparent",
    //                 fontStyle: "normal",
    //                 WebkitTextFillColor: "transparent",
    //                 fontWeight: 600,
    //                 marginTop: "-10px",
    //               }}
    //             >
    //               12.5
    //             </Typography>
    //           </Box>
    //           <Box sx={{ textAlign: "center" }}>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{ color: "white", fontFamily: "Kanit" }}
    //             >
    //               REWARDS
    //             </Typography>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{
    //                 background:
    //                   "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
    //                 fontFamily: "Kanit",
    //                 backgroundClip: "text",
    //                 WebkitBackgroundClip: "text",
    //                 textFillColor: "transparent",
    //                 fontStyle: "normal",
    //                 WebkitTextFillColor: "transparent",
    //                 fontWeight: 600,
    //                 marginTop: "-10px",
    //               }}
    //             >
    //               .144
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
    //       <Box padding={4} className={styles.boxContainer}>
    //         <Button
    //           sx={{ padding: 0 }}
    //           onClick={handleClick}
    //           className={styles.btnContainer}
    //         >
    //           <img src={imgCard3} alt="card" width={"176px"} height="248px" />
    //         </Button>
    //         <Box className={styles.childContainer}>
    //           <Box sx={{ textAlign: "center" }}>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{ color: "white", fontFamily: "Kanit" }}
    //             >
    //               COST
    //             </Typography>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{
    //                 background:
    //                   "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
    //                 fontFamily: "Kanit",
    //                 backgroundClip: "text",
    //                 WebkitBackgroundClip: "text",
    //                 textFillColor: "transparent",
    //                 fontStyle: "normal",
    //                 WebkitTextFillColor: "transparent",
    //                 fontWeight: 600,
    //                 marginTop: "-10px",
    //               }}
    //             >
    //               12.5
    //             </Typography>
    //           </Box>
    //           <Box sx={{ textAlign: "center" }}>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{ color: "white", fontFamily: "Kanit" }}
    //             >
    //               REWARDS
    //             </Typography>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{
    //                 background:
    //                   "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
    //                 fontFamily: "Kanit",
    //                 backgroundClip: "text",
    //                 WebkitBackgroundClip: "text",
    //                 textFillColor: "transparent",
    //                 fontStyle: "normal",
    //                 WebkitTextFillColor: "transparent",
    //                 fontWeight: 600,
    //                 marginTop: "-10px",
    //               }}
    //             >
    //               .144
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
    //       <Box padding={4} className={styles.boxContainer}>
    //         <Button
    //           sx={{ padding: 0 }}
    //           onClick={handleClick}
    //           className={styles.btnContainer}
    //         >
    //           <img src={imgCard4} alt="card" width={"176px"} height="248px" />
    //         </Button>
    //         <Box className={styles.childContainer}>
    //           <Box sx={{ textAlign: "center" }}>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{ color: "white", fontFamily: "Kanit" }}
    //             >
    //               COST
    //             </Typography>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{
    //                 background:
    //                   "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
    //                 fontFamily: "Kanit",
    //                 backgroundClip: "text",
    //                 WebkitBackgroundClip: "text",
    //                 textFillColor: "transparent",
    //                 fontStyle: "normal",
    //                 WebkitTextFillColor: "transparent",
    //                 fontWeight: 600,
    //                 marginTop: "-10px",
    //               }}
    //             >
    //               12.5S
    //             </Typography>
    //           </Box>
    //           <Box sx={{ textAlign: "center" }}>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{ color: "white", fontFamily: "Kanit" }}
    //             >
    //               REWARDS
    //             </Typography>
    //             <Typography
    //               variant="subtitle1"
    //               sx={{
    //                 background:
    //                   "linear-gradient(112.98deg, #FFF4D1 8.47%, #F5D28F 23.3%, #675537 91.31%);",
    //                 fontFamily: "Kanit",
    //                 backgroundClip: "text",
    //                 WebkitBackgroundClip: "text",
    //                 textFillColor: "transparent",
    //                 fontStyle: "normal",
    //                 WebkitTextFillColor: "transparent",
    //                 fontWeight: 600,
    //                 marginTop: "-10px",
    //               }}
    //             >
    //               .144
    //             </Typography>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </Grid>
    //   {/* <Box sx={{ maxWidth: "0px" }}>
    //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
    //     ullam ratione dolorem adipisci aliquid doloribus, at, itaque, impedit
    //     totam fugiat nam! Iste alias perspiciatis ea quia laboriosam dolore
    //     maiores reiciendis. Lorem ipsum dolor sit amet, consectetur adipisicing
    //     elit. Distinctio ullam ratione dolorem adipisci aliquid doloribus, at,
    //     itaque, impedit totam fugiat nam! Iste alias perspiciatis ea quia
    //     laboriosam dolore maiores reiciendis.
    //   </Box> */}
    // </Box>
  );
};

export default MainCard;
