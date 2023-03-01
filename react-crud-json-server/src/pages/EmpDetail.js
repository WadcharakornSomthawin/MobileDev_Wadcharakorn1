import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
  const [empDetail, setEmpDetail] = useState("");
  const { empId } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/employee/" + empId)
      .then((res) => {
        console.log(res.data);
        setEmpDetail(res.data);
      })
      .catch((err) => {
        //console.log(err);
      });
  }, []);

  return (
    <div className="row col-lg-6" style={{ textAlign: "left", display: "flex",display: "inline-block" }}>
      <div className="card ">
        <div className="card-title">
          <h3>Employee Detail</h3>
        </div>
        <div className="card-body" >
          <h3>The Employee name is : {empDetail.name} ({empDetail.id}) </h3>
          <h5>Content Detail</h5>
          <h6>Email is : {empDetail.email} </h6>
          <h6>Phone is : {empDetail.phone} </h6>
          <Link
            to="/"
            className="btn btn-danger"
            style={{ float: "left" }}
          >
            Back to Listing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmpDetail;
