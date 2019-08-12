import React from "react";
import EnrolledTable from "../../components/table/EnrolledTable"


const Enrolled = () => {
  return (
    <div className="admin">
      <div className="container-fluid enrolled">
        <div className="cont">
            <h1>Enrolled</h1>
        </div>
            <EnrolledTable />
       </div>
    </div>
  );
};

export default Enrolled;
