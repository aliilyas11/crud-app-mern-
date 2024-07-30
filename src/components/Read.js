import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("https://66a335f644aa637045805e90.mockapi.io/crud")

      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://66a335f644aa637045805e90.mockapi.io/crud/${id}`)

      .then(() => {
        getData();
      });
  }

  function setDataToStorage(id, name, age, email) {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="mb-2  mt-3">
            <Link to="/create">
              <button className="btn btn-primary">Add New Student Data</button>
            </Link>
          </div>

          <table className="table table-hover table-dark table-bordered table-striped table-responsive">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>

            <tbody>
              {apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td>
                        <Link to="/edit">
                          <button
                            className="btn btn-primary"
                            onClick={() =>
                              setDataToStorage(
                                item.id,
                                item.e_name,
                                item.e_age,
                                item.e_email
                              )
                            }
                          >
                            EDIT
                          </button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to DELETE this data?"
                              )
                            ) {
                              handleDelete(item.id);
                            }
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Read;
