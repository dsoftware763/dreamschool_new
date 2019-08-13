import React from "react";
import searchicon2 from "../../assets/img/searchicon2.svg";
import imgactivea from "../../assets/img/imgactivea.png";
import { Input, Table } from "../../components/UI";
import Pagination from "../../components/pagination/pagination";

const TourRequestTable = () => {
  return (
    <div className="cont">
      <div className="row">
        <div className="search">
          <div className="input">
            <Input type="text" placeholder="Search by name" />
            <button>
              {" "}
              <img src={searchicon2} className="searchicon" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="tablecont">
        <div className="table-responsive">
          <ul>
            <li className="active">
              <a href="#/">
                <img src={imgactivea} className="foractive" alt="" />
                MY PREFERENCE
              </a>
            </li>
            <li>
              <a href="#/">
                <img src={imgactivea} className="foractive" alt="" />
                VISITOR PREFERENCE
              </a>
            </li>
          </ul>
          <Table
            headings={[
              { id: "visitor", label: "Visitor" },
              { id: "date", label: "Date" },
              { id: "time", label: "Time" },
              { id: "phone", label: "Phone" },
              { id: "email", label: "Email" },
              { id: "action", label: "Action" }
            ]}
            data={[
              {
                visitor: "Logan Michaels",
                date: "Jan 3 2019",
                time: "10:00 AM",
                phone: "905 637 3727",
                email: "emailaddress@gmail.com",
                action: (
                  <>
                    <a href="#/">ACCEPT</a>
                    <a href="#/">DENY</a>
                  </>
                )
              },
              {
                visitor: "Logan Michaels",
                date: "Jan 3 2019",
                time: "10:00 AM",
                phone: "905 637 3727",
                email: "emailaddress@gmail.com",
                action: (
                  <>
                    <a href="#/">ACCEPT</a>
                    <a href="#/">DENY</a>
                  </>
                )
              }
            ]}
          />

     
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default TourRequestTable;
