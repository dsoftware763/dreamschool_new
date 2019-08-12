import React from 'react';
import Sidebar from '../common/Sidebar';
import TopBar from '../common/TopBar';
import SideMenu from './SideMenu';
import AdminRoute from '../../routes/adminRoute';
import Promotions from '../../pages/admin/promotions';
import FamilyProfiles from '../../pages/admin/familyProfiles';
import ProgramSettings from '../../pages/admin/programSettings';
import Calendar from '../../pages/shared/calendar';
import Messaging from "../../pages/shared/messaging";

const AdminLayout = (props) => {
    const {path} = props.match
    return (<>

        <Sidebar path={path} Menu={SideMenu}/>
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
           {/* Main Content */}
            <div id="content">
                <TopBar ConsoleRoute="/admin" />
                <AdminRoute
					admin={true}
					exact
					path="/admin/calendar"
                    component={Calendar}
                    isAuthenticated={true}
				/>
                <AdminRoute
					admin={true}
					exact
					path="/admin/messages"
                    component={Messaging}
                    isAuthenticated={true}
				/>
                <AdminRoute
                    admin={true}
                    exact
                    path="/admin/promotions"
                    component={Promotions}
                    isAuthenticated={true}
                />
                <AdminRoute
					admin={true}
					exact
					path="/admin/family-profiles"
                    component={FamilyProfiles}
                    isAuthenticated={true}
				/>
                <AdminRoute
					admin={true}
					exact
					path="/admin/program-settings"
                    component={ProgramSettings}
                    isAuthenticated={true}
				/>
            </div>
        </div>
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>
    </>);
}

export default AdminLayout;