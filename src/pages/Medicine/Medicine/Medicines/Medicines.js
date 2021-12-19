import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Medicine from "../Medicine/Medicine";

const Medicines = () => {
  const [medicines, setMedicibes] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setMedicibes(data.medicine));
  }, []);
  return (
    <div>
      <div style={{ marginTop: 50 }}>
        <h1 style={{ marginBottom: 50 }}>Medicines we Offer</h1>
        <Grid
          container
          spacing={{ xs: 2, md: 3, lg: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {medicines.map((medicine) => (
            <Medicine key={medicine.id} medicine={medicine}></Medicine>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Medicines;
