import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

function Login() {
const [form, setForm] = useState({ email: "", password: "" });
const navigate = useNavigate();

const handleSubmit = async (e) => {
e.preventDefault();
try {
const res = await API.post("/auth/login", form);
localStorage.setItem("token", res.data.token);
localStorage.setItem("role", res.data.role);
if (res.data.role === "admin") navigate("/admin");
else if (res.data.role === "requester") navigate("/dashboard-requester");
else navigate("/dashboard-donor");
} catch (err) {
alert("Login failed");
}
};

return (
<div className="container mt-4">
<h3>Login</h3>
<form onSubmit={handleSubmit}>
<input className="form-control mb-2" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
<input className="form-control mb-2" type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
<button className="btn btn-danger">Login</button>
</form>
</div>
);
}

export default Login;
