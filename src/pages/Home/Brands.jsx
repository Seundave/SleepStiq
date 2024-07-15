import { Grid } from "@mui/material";
import React from "react";
import {
  bloomberg,
  forbes,
  google,
  influencive,
  sleepReview,
} from "../../assets/Home";

const Brands = () => {
  return (
    <div className="ml-[162px] h-[131px] flex items-center">
      <Grid container>
        <Grid item sm={12 / 5}>
          <img src={google} alt="google" />
        </Grid>
        <Grid item sm={12 / 5}>
          <img src={forbes} alt="forbes" />
        </Grid>
        <Grid item sm={12 / 5}>
          <img src={bloomberg} alt="bloomberg" />
        </Grid>
        <Grid item sm={12 / 5}>
          <img src={sleepReview} alt="sleepReview" />
        </Grid>
        <Grid item sm={12 / 5}>
          <img src={influencive} alt="influencive" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Brands;
