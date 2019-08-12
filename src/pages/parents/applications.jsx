import React from "react";
import NewApplicationBtn from "../../assets/img/newapplicationsbtn.svg";
import ApplicationList from "../../components/table/ApplicationList";

const Application = () => {
  return (
    <div className="container-fluid">
      <div className="cont">
        <div className="row">
          <div className="col-md-6">
            <h1>Applications</h1>
          </div>
          <div className="col-md-6">
            <div className="forbtnwrap justify-end">
              <div className="forbtnapp">
                <a href="#/" className="newapplications">
                  <img src={NewApplicationBtn} alt="" />
                  New Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ApplicationList />
    </div>
  );
};

export default Application;
