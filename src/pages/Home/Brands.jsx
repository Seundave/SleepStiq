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
    <div className=" h-[131px]  w-full flex items-center bg-white shadow-2xl gap-[50px] pl-[72px] pr-[82px]">
      <ImageBox width="w-[146px]" image={google}/>
      <ImageBox width="w-[129px]" image={forbes}/>
      <ImageBox width="w-[226px]" image={bloomberg}/>
      <ImageBox width="w-[201px]" image={sleepReview}/>
      <ImageBox width="w-[220px]" image={influencive}/>
      {/* <Grid container>
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
      </Grid> */}
    </div>
  );
};

export default Brands;

const ImageBox = ({ image, width }) => {
  return (
    <div className={`${width}`}>
      <img
        src={image}
        alt="brand-images"
        className="w-full h-full object-contain"
      />
    </div>
  );
};
