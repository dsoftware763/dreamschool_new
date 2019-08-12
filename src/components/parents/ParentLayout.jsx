import React from 'react';
import Sidebar from '../common/Sidebar';
import SideMenu from './SideMenu';
import TopBar from '../common/TopBar';
import ParentRoute from '../../routes/parentRoute';
import Home from '../../pages/parents/home';
import Calendar from '../../pages/shared/calendar';
import Messaging from "../../pages/shared/messaging";
import PaymentMethods from '../../pages/parents/paymentMethods';
import AccountSettings from '../../pages/parents/accountSettings';
import Application from '../../pages/parents/applications';
import ApplicationView from '../../pages/parents/application-view';
import InterestedPrograms from '../../pages/parents/interestedPrograms';
import NewApplication from '../../pages/parents/newApplication';
import ChooseChild from '../../pages/parents/chooseChild';
import FileApplication from '../../pages/parents/fileApplication';
import ConfirmApplication from '../../pages/parents/confirmApplication';
import TuitionPayments from '../../pages/parents/tuitionPayments';
import TuitionPaymentsDetails from '../../pages/parents/tuitionPaymentsDetails';
import MyEnrollments from '../../pages/parents/myEnrollments';
import MyEnrollmentDetails from '../../pages/parents/myEnrollmentDetails';
import MyEnrollmentEnd from '../../pages/parents/myEnrollmentEnd';
import ParentFamilyPage from '../../pages/parents/familyProfile';
import ParentGuardiansPage from '../../pages/parents/parentGuardians';
import EmergencyContactsPage from '../../pages/parents/emergencyContacts';
import PhysicianContactsPage from '../../pages/parents/physicianContacts';

const ParentLayout = (props) => {
    const {path} = props.match;
    return (<>

        <Sidebar path={path} Menu={SideMenu}/>
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
           {/* Main Content */}
            <div id="content">
                <TopBar ConsoleRoute="/parents" />

                <ParentRoute
                    parent={true}
                    exact
                    path="/parents"
                    component={Home}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/messages"
                    component={Messaging}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/calendar"
                    component={Calendar}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/family-profile"
                    component={ParentFamilyPage}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/family-profile/guardians"
                    component={ParentGuardiansPage}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/family-profile/contacts"
                    component={EmergencyContactsPage}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/family-profile/physicians"
                    component={PhysicianContactsPage}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/payment-methods"
                    component={PaymentMethods}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/applications"
                    component={Application}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/account-settings"
                    component={AccountSettings}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/interested-programs"
                    component={InterestedPrograms}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/interested-programs/apply"
                    component={NewApplication}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/interested-programs/choose-child"
                    component={ChooseChild}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/interested-programs/application"
                    component={FileApplication}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/interested-programs/confirm"
                    component={ConfirmApplication}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/applications/view"
                    component={ApplicationView}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/tuition-payments"
                    component={TuitionPayments}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/tuition-payments/view"
                    component={TuitionPaymentsDetails}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/my-enrollments"
                    component={MyEnrollments}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/my-enrollments/view"
                    component={MyEnrollmentDetails}
                />
                <ParentRoute
                    parent={true}
                    exact
                    path="/parents/my-enrollments/end"
                    component={MyEnrollmentEnd}
                />
            </div>
           
        </div>
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    </>);
}

export default ParentLayout;