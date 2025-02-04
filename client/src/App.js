import React from "react";
import memories from "./images/banaras.jpg";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

//import custom components here
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            {/* it means xs will take full widh in extra small devices and 7 grids in small and medium devices.*/}
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
