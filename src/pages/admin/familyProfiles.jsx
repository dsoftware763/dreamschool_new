import React from 'react';
import {Table, Input} from '../../components/UI';
import searchicon2 from '../../assets/img/searchicon2.svg';
import Pagination from '../../components/pagination/pagination'

const FamilyProfiles = () => {
    return (
        <div className="admin">
            <div className="container-fluid adminprofiles">
                <div className="cont">
                        <h1>Family Profiles</h1>
                </div>
			
                <div className="cont">
              <div className="row">
                <div className="search">
                  <div className="input">
                    <Input name="search" placeholder="Search by educator name"/>                   
                    <button> <img src={searchicon2} className="searchicon" alt=""/></button>
                  </div>
                </div>
              </div>
      				<div className="tablecont">
                <div className="table-responsive">
                  <Table
                    headings={[
                      {id: 'parent', label: "Parent"},
                      {id: 'children', label: 'Children'},
                      {id: 'enrolled_children', label: 'Enrolled Children'},
                      {id: 'program_name', label: 'Program Name'},
                      {id: 'in_system', label: 'In System Since'},
                      {id: 'actions'}
                    ]}
                    data={[
                      {
                        parent: 'Jane Michaels', 
                        children: 5, 
                        enrolled_children: <span className="orange">3/5</span>,
                        program_name: 'Janice’s Dreamschool for…',
                        in_system: 'Jan 5 2019',
                        actions: <a href="#/">View More</a>
                      },
                      {
                        parent: 'Jane Michaels', 
                        children: 5, 
                        enrolled_children: <span className="orange">3/5</span>,
                        program_name: 'Janice’s Dreamschool for…',
                        in_system: 'Jan 5 2019',
                        actions: <a href="#/">View More</a>
                      },
                      {
                        parent: 'Jane Michaels', 
                        children: 5, 
                        enrolled_children: <span className="orange">3/5</span>,
                        program_name: 'Janice’s Dreamschool for…',
                        in_system: 'Jan 5 2019',
                        actions: <a href="#/">View More</a>
                      }
                    ]}
                  />
                   
                  <Pagination />
                </div>
              </div>
      			</div>

        </div>
    </div>
    );
}

export default FamilyProfiles;