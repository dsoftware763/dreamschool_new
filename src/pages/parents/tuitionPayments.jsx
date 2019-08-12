import React from "react";
import TuitionPaymentTable from "../../components/table/TuitionPaymentTable"
import TuitionPaymentOverview from "../../components/table/TuitionPaymentOverview"

const TuitionPayments = () => {
  return (
    <div className="container-fluid">
      <div className="cont">
        <h1>Tuition Payments</h1>
      </div>

      <div className="cont">
        <div className="row">
          <div className="col-lg-3">
            <TuitionPaymentOverview />
          </div>
          <div className="col-lg-9">
            <TuitionPaymentTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionPayments;
