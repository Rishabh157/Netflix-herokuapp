import React, { useState } from "react";
import "./styles/navbar.css";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export const LoadingBar = () => {
 const [count] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
 return (
  <Box className="d-flex justify-content-evenly ps-4">
   {count.map((ele, ind) => {
    return (
     <Skeleton key={ind}
      animation="pulse"
      className="rounded"
      sx={{ backgroundColor: "#2c2c2c" }}
      variant="rectangular"
      height={181}
      width={120}
     />
    )
   })}
  </Box>
 )
}

export const LoadingSearchBar = () => {
 const [count] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
 return (
  <Box className="row">
   {count.map((ele, ind) => {
    return (
     <div key={ind} className="col-2">
      <Skeleton key={ind}
       animation="pulse"
       className="rounded mt-5"
       sx={{ backgroundColor: "#2c2c2c" }}
       variant="rectangular"
       height={250}
       width={180}
      />
     </div>
    )
   })}
  </Box>
 )
}