import React from "react";
import ViewPreviousPlans from "../../assets/img/ViewPreviousPlans.svg"
import addnew from "../../assets/img/addnew.svg"
import PricingPlanModal from "../../components/modals/PricingPlanModal"

const PricingPlans = () => {
  return (
    <div className="admin">
      <div className="container-fluid pricingplan">
        <div className="row cont">
          <div className="col-md-6">
            <h1>Pricing Plans</h1>
          </div>
          <div className="col-md-6">
            <div className="forbtnwrap justify-end">
              <div className="forbtnapp">
                <a href="#/" className="newapplications">
                  <img src={ViewPreviousPlans} alt="" />
                  View Previous Plans
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="cont">
          <div className="boxes">

            <PricingPlanModal />
            
            <a href="#/" className="addnew">
              <img src={addnew} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
