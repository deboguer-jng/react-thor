import Cards from "../../components/Card";
import Box from "@mui/material/Box";
import number from "../../assets/no.png";
import numbers from "../../assets/no1.png";
import no from "../../assets/no2.png";
import CardDouble from "../../components/Cards";
import path from "../../assets/Path.png";
import CreateNode from "../../components/Node";
import { Grid } from "@mui/material";
import "./style.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Box
        sx={{
          display: "flex",
          "& > :not(style)": {
            m: 1,
          },
        }}
      >
        <Cards
          title="Rewards"
          number={"32.111"}
          buttonText={"COLLECT ALL"}
          src={number}
        />
        <Cards
          title="Thor Price"
          src={path}
          image={path}
          noboxes={true}
          number={"21.462"}
          buttonText={"View Chart"}
        />
        <Cards
          title="My Nodes"
          src={no}
          number={"8"}
          buttonText={"View Nodes"}
        />
      </Box>
      <Grid xs={12}>
        <CreateNode />
      </Grid>
    </div>
  );
}

export default Dashboard;
