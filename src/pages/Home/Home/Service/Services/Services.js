import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data.service));
  }, []);
  return (
    <div style={{ marginTop: 50 }} id="service">
      <h1 style={{ marginBottom: 50 }}>Our Services</h1>
      <Grid
        container
        spacing={{ xs: 2, md: 3, lg: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </Grid>
    </div>
  );
};

export default Services;
