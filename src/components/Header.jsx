import React from "react";
import {
  AppBar,
  Container,
  Select,
  MenuItem,
  Typography,
  Toolbar,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography className={classes.title}>Crypto Tracker</Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              height: 40,
              marginLeft: 15,
            }}
          >
            <MenuItem>USD</MenuItem>
            <MenuItem>INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
