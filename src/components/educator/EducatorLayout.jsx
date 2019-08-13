import React from "react";
import EducatorRoute from "../../routes/educatorRoute";
import Sidebar from "../common/Sidebar";
import TopBar from "../common/TopBar"
import Home from "../../pages/educators/home";
import Enrolled from "../../pages/educators/enrolled"
import Milestones from "../../pages/educators/milestones";
import MyApplication from "../../pages/educators/myApplications";
import PricingPlans from "../../pages/educators/pricingPlans";
import TourRequests from "../../pages/educators/tourRequests";
import Attendance from "../../pages/educators/attendance";
import MyEarnings from "../../pages/educators/myEarnings";
import WeeklySlots from "../../pages/educators/weeklySlots";
import Messaging from "../../pages/shared/messaging";
import Calendar from '../../pages/shared/calendar';
import SideMenu from './SideMenu';
import MyApplicationHome from "../../pages/educators/myApplicationsHome";
import MyApplicationCredentials from "../../pages/educators/myApplicationsCredentials";
import ProgramSetup from "../../pages/educators/programSetup";
import ProgramSetupNew from "../../pages/educators/programSetupNew";

const EducatorLayout = props => {
	const {path} = props.match;

  return (
    <>
		
		<Sidebar path={path} Menu={SideMenu}/>
      	<div id="content-wrapper" className="d-flex flex-column">
        	<div id="content">
				<TopBar ConsoleRoute="/educators" />
				<EducatorRoute
					educator={true}
					exact
					path="/educators/messages"
					component={Messaging}
				/>
				<EducatorRoute
					educator={true}
					exact
					path="/educators/calendar"
					component={Calendar}
				/>
          		<EducatorRoute
					educator={true}
					exact
					path="/educators"
					component={Home}
				/>
				<EducatorRoute
				  educator={true}
				  exact
				  path="/educators/enrolled"
				  component={Enrolled}
			  />
			  <EducatorRoute
				  educator={true}
				  exact
				  path="/educators/milestones"
				  component={Milestones}
			  />
			  <EducatorRoute
				  educator={true}
				  exact
				  path="/educators/my-applications"
				  component={MyApplication}
			  />
			  <EducatorRoute
				  educator={true}
				  exact
				  path="/educators/my-applications/home"
				  component={MyApplicationHome}
			  />
			  <EducatorRoute
				  educator={true}
				  exact
				  path="/educators/my-applications/credentials"
				  component={MyApplicationCredentials}
			  />
			  <EducatorRoute
				  educator={true}
				  exact
				  path="/educators/pricing-plans"
				  component={PricingPlans}
			  />
			  <EducatorRoute
				  educator={true}
				  exact
				  path="/educators/tour-requests"
				  component={TourRequests}
			  />
			
				<EducatorRoute
					educator={true}
					exact
					path="/educators/attendance"
					component={Attendance}
				/>
			<EducatorRoute
				educator={true}
				exact
				path="/educators/my-earnings"
				component={MyEarnings}
			/>
			<EducatorRoute
				educator={true}
				exact
				path="/educators/weekly-slots"
				component={WeeklySlots}
			/>
			<EducatorRoute
				educator={true}
				exact
				path="/educators/messaging"
				component={Messaging}
			/>
			<EducatorRoute
				educator={true}
				exact
				path="/educators/program-settings"
				component={ProgramSetup}
			/>
			<EducatorRoute
				educator={true}
				exact
				path="/educators/program-settings/new"
				component={ProgramSetupNew}
			/>
			</div>
		</div>
		<a className="scroll-to-top rounded" href="#page-top">
			<i className="fas fa-angle-up" />
		</a>
    </>
  );
};

export default EducatorLayout;
