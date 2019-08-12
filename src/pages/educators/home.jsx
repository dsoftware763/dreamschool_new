import React from "react";
import ddicon from "../../assets/img/ddicon.svg"
import BoxOrange from '../../components/common/BoxOrange';
import BoxBlue from '../../components/common/BoxBlue';
import EarningsOverview from "../../components/educator/EarningsOverview";

const Home = () => {
  return (
    <div className="container-fluid hero">
      <div className="cont">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="">Welcome, Emily!</h1>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="orange section">
            <div className="boxforh4">
              <h4>LEADS</h4>
            </div>
            <a href="#/">
              <BoxOrange boxName="Interested Programs" boxCount={9} boxNew={3} />
            </a>
            <a href="#/">
              <BoxOrange boxName="New Applications" boxCount={3} boxNew={0} />
            </a>
            <a href="#/">
              <BoxOrange boxName="Open Applications" boxCount={7} boxNew={3} />
            </a>
          </div>
          <div className="blue section">
            <div className="boxforh4">
              <h4>TUTION</h4>
            </div>

            <a href="#/">
              <BoxBlue boxName="Pending Payments" boxCount={10} boxNew={2} />
            </a>
            <a href="#/">
              <BoxBlue boxName="Overdue Payments" boxCount={11} boxNew={2} />
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <EarningsOverview />
        <div className="col-xl-6">
          <div className="tablebox">
            <div className="tableheader pb-0">
              <div className="row">
                <div className="col-md-6">
                  <h2>
                    MY PROGRAM <img src={ddicon} alt="" />
                  </h2>
                </div>
                <div className="col-md-6">
                  <ul className="leftlist">
                    <li>
                      <a href="#/" className="active">
                        Detail
                      </a>
                    </li>
                    <li>
                      <a href="#/">Slots</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tablebody padded">
              <div className="row">
                <div className="col-md-12">
                  <div className="name">
                    <h2>Emily's Dreamschool</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Active Students:</p>
                  </div>
                  <div className="boxright">
                    <p>12</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Pending Students:</p>
                  </div>
                  <div className="boxright">
                    <p>24</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Waitlisted Students:</p>
                  </div>
                  <div className="boxright">
                    <p>5</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Past Students:</p>
                  </div>
                  <div className="boxright">
                    <p>6</p>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="boxleft">
                    <p>Average Income:</p>
                  </div>
                  <div className="boxright">
                    <p>$5000 / month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
