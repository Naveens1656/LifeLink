import React, { useState } from "react";
import API from "../api";

function Register() {
const [form, setForm] = useState({
name: "", email: "", password: "", role: "donor", city: "", bloodGroup: "", contact: ""
});

const handleSubmit = async (e) => {
e.preventDefault();
try {
await API.post("/auth/register", form);
alert("Registered successfully!");
} catch (err) {
alert(err.response?.data?.msg || "Registration failed.");
}
};

return (
<div className="container mt-4">
<h3>Register</h3>
<form onSubmit={handleSubmit}>
{["name", "email", "contact", "city", "bloodGroup", "password"].map((f) => (
<div className="mb-2" key={f}>
<input
type={f === "password" ? "password" : "text"}
className="form-control"
placeholder={f.charAt(0).toUpperCase() + f.slice(1)}
onChange={e => setForm({ ...form, [f]: e.target.value })}
required
/>
</div>
))}
<select className="form-control mb-2" onChange={e => setForm({...form, role: e.target.value})}>
<option value="donor">Donor</option>
<option value="requester">Requester</option>
</select>
<button className="btn btn-danger">Register</button>
</form>
</div>
);
}

export default Register;
