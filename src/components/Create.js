import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate(); // Used for navigating from one page to another

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://66a335f644aa637045805e90.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email
      })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("There was an error submitting the data!", error);
      });
  };

  return (
    <>
      <div className="mb-2  mt-3 p-4 text-center">
        <Link to="/">
          <button className="btn btn-primary">Read Data Click Here</button>
        </Link>
      </div>

      {/* <div className="row "> */}
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-md-4 ">
          <div className="bg-primary p-4 text-center">
            <h1>Create Student Data</h1>
          </div>
          <form onSubmit={handleSubmit} className="p-4 border rounded">
            <div className="form-group mb-3 ">
              <label>Student Name</label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Student Age</label>
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Student Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <br />
            <div className="d-grid">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
