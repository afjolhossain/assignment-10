import React, { useEffect, useState } from "react";
import Owner from "../Owner/Owner";

const Owners = () => {
  const [owners, setOwners] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setOwners(data.owner));
  }, []);
  return (
    <div id="owner">
      {owners.map((owner) => (
        <Owner key={owner.id} owner={owner}></Owner>
      ))}
    </div>
  );
};

export default Owners;
