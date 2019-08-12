import React from 'react';
import searchicon2 from '../../assets/img/searchicon2.svg';
import psicon from '../../assets/img/psicon.svg';
import {Table} from '../../components/UI';
import {Input} from '../../components/UI';
import Pagination from '../../components/pagination/pagination'

const ProgramSettings = () => {
    return (
        <div className="admin">
            <div className="container-fluid programsettings">
                <div className="cont">
                        <h1>Program Settings</h1>
                </div>
			
      			<div className="cont">
                    <div className="row">
                        <div className="search">
                            <div className="input">
                            <Input type="text" placeholder="Search by name"/> 
                                <button> <img src={searchicon2} className="searchicon" alt=""/></button>
                            </div>
                        </div>
                    </div>
      				<div className="tablecont">
                        <div className="table-responsive">
 <Table
headings={[
    {id: 'educator',label:<>EDUCATOR <img src={psicon} alt="" /></>},
    {id: 'program',label:<>PROGRAM <img src={psicon} alt="" /></>},
    {id: 'set_up_status',label:`SET-UP STATUS`},
    {id: 'incomplete_sections',label:<>INCOMPLETE SECTIONS <img src={psicon} alt="" /></>},
    {id: 'pricing_plan'}
]}
data={[
    {
        educator:  'Sarah Lin',
        program: 'Ladybug Dreamschool',
        set_up_status: 'Complete',
        incomplete_sections: '-',
        pricing_plan: <div><a href="#/">PRICING PLAN</a>
        <a href="#/">PROGRAM SETUP</a>
        <a href="#/">MILESTONES</a></div>
    },
    {
        educator:  'Sarah Lin',
        program: 'Ladybug Dreamschool',
        set_up_status: 'Complete',
        incomplete_sections: '-',
        pricing_plan: <div><a href="#/">PRICING PLAN</a>
        <a href="#/">PROGRAM SETUP</a>
        <a href="#/">MILESTONES</a></div>
    },
    {
        educator:  'Sarah Lin',
        program: 'Ladybug Dreamschool',
        set_up_status: 'Complete',
        incomplete_sections: '-',
        pricing_plan: <div><a href="#/">PRICING PLAN</a>
        <a href="#/">PROGRAM SETUP</a>
        <a href="#/">MILESTONES</a></div>
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

export default ProgramSettings;