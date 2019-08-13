import React from "react";
import { Link } from "react-router-dom";
import ImageActiveA from "../../assets/img/imgactivea.png";
import {Table} from '../UI'
import Pagination from '../pagination/pagination'

const TuitionPaymentTable = () => {
  return (
      <div className="tablecont">
        <div className="table-responsive">
          <ul>
            <li className="active">
              <a href="#/">
                <img src={ImageActiveA} className="foractive" alt="" />
                CURRENT
              </a>
            </li>
            <li>
              <a href="#/">
                <img src={ImageActiveA} className="foractive" alt="" />
                ACCEPTED
              </a>
            </li>
          </ul>

          <Table 
          headings={[
            {id: 'student',label:'Student'},
            {id: 'amount',label:'Amount'},
            {id: 'service_period',label:`Service Period`},
            {id: 'status',label:'Status'},
            {id: 'col'}
        ]}
data={[
  {
    student:  'Logan Michaels',
    amount: '$250.00',
    service_period: 'June 1- June 8 2019',
    status: 'Pending',
    col: <Link to="/parents/tuition-payments/view">VIEW</Link>
},
{
  student:  'Logan Michaels',
  amount: '$250.00',
  service_period: 'June 1- June 8 2019',
  status: 'Pending',
  col: <Link to="/parents/tuition-payments/view">VIEW</Link>
},
{
  student:  'Logan Michaels',
  amount: '$250.00',
  service_period: 'June 1- June 8 2019',
  status: 'Pending',
  col: <Link to="/parents/tuition-payments/view">VIEW</Link>
},
{
  student:  'Logan Michaels',
  amount: '$250.00',
  service_period: 'June 1- June 8 2019',
  status: 'Pending',
  col: <Link to="/parents/tuition-payments/view">VIEW</Link>
},
{
  student:  'Logan Michaels',
  amount: '$250.00',
  service_period: 'June 1- June 8 2019',
  status: 'Pending',
  col: <Link to="/parents/tuition-payments/view">VIEW</Link>
},
{
  student:  'Logan Michaels',
  amount: '$250.00',
  service_period: 'June 1- June 8 2019',
  status: 'Pending',
  col: <Link to="/parents/tuition-payments/view">VIEW</Link>
},
{
  student:  'Logan Michaels',
  amount: '$250.00',
  service_period: 'June 1- June 8 2019',
  status: 'Pending',
  col: <Link to="/parents/tuition-payments/view">VIEW</Link>
},
]}
          />
          <Pagination />
        </div>
      </div>
  );
};

export default TuitionPaymentTable;
