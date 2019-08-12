import React from "react";
import TourRequestTable from "../../components/table/TourRequestTable";

const TourRequests = () => {
  return (
    <div className="admin">
      <div className="container-fluid tourrequests">
        <div className="cont">
          <div className="row">
            <div className="col-md-6">
              <h1>Tour Requests</h1>
            </div>
            <div className="col-md-6">
              <div className="forbtnwrap justify-end">
                <div className="forbtnapp">
                  <a href="#/" className="newapplications">
                    <img src="img/MyTourAvailability.svg" alt="" />
                    My Tour Availability
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TourRequestTable />
      </div>
    </div>
  );
};

export default TourRequests;
