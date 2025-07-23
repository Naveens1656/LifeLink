import React, { useState, useEffect } from "react";
import API from "../api";
import DonorCard from "../components/DonorCard";

function Home() {
const [donors, setDonors] = useState([]);

useEffect(() => {
API.get("/donors").then(res => setDonors(res.data));
}, []);

return (
<div className="container mt-4">
<h3>Available Donors</h3>
{donors.map(d => <DonorCard key={d._id} donor={d} />)}
</div>
);
}

export default Home;
