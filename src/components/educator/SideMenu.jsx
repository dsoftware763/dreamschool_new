import React from "react"
import { Link } from "react-router-dom"
import FamilyProfile from "../../assets/img/familyprofile.svg"
import ProgramSetup from "../../assets/img/ProgramSetup.svg"
import PricingPlans from "../../assets/img/PricingPlans.svg"
import Milestones from "../../assets/img/Milestones.svg"
import TourRequests from "../../assets/img/TourRequests.svg"
import Applications from "../../assets/img/Applications.svg"
import Connections from "../../assets/img/Connections.svg"
import Enrolled from "../../assets/img/Enrolled.svg"
import Attendance from "../../assets/img/Attendance.svg"
import WeeklySlots from "../../assets/img/WeeklySlots.svg"
import MyEarnings from "../../assets/img/MyEarnings.svg"
import FamilyPayments from "../../assets/img/FamilyPayments.svg"
import PaymentSettings from "../../assets/img/PaymentSettings.svg"
import ExpenseTracker from "../../assets/img/ExpenseTracker.svg"
import LogoutBg from "../../assets/img/logoutbg.svg"

const SideBar = () => {
    return (
        <>
            <hr className="sidebar-divider my-0" />

            <div className="sidebar-heading">PROFILE</div>

            <li className="nav-item active">
                <Link className="nav-link" to="/educators/my-applications">
                    <img src={FamilyProfile} alt="" />
                    <span>My Application</span>
                </Link>
                <Link className="nav-link" to="/educators/program-settings">
                    <img src={ProgramSetup} alt="" />
                    <span>Program Setup</span>
                </Link>
                <Link className="nav-link" to="/educators/pricing-plans">
                    <img src={PricingPlans} alt="" />
                    <span>Pricing Plans</span>
                </Link>
                <Link className="nav-link" to="/educators/milestones">
                    <img src={Milestones} alt="" />
                    <span>Milestones</span>
                </Link>
            </li>


            <hr className="sidebar-divider my-0" />

            <div className="sidebar-heading">MY LEADS</div>

            <li className="nav-item active">
                <Link className="nav-link" to="/educators/tour-requests">
                    <img src={TourRequests} alt="" />
                    <span>Tour Requests</span>
                </Link>
                <a className="nav-link" href="#/">
                    <img src={Applications} alt="" />
                    <span>Applications</span>
                </a>
                <a className="nav-link" href="#/">
                    <img src={Connections} alt="" />
                    <span>Connections</span>
                </a>
            </li>

            <hr className="sidebar-divider my-0" />
            
            <div className="sidebar-heading">ENROLLMENT</div>

            
            <li className="nav-item active">
                <Link className="nav-link" to="/educators/enrolled">
                    <img src={Enrolled} alt="" />
                    <span>Enrolled</span>
                </Link>
                <Link className="nav-link" to="/educators/attendance">
                    <img src={Attendance} alt="" />
                    <span>Attendance</span>
                </Link>
                <Link className="nav-link" to="/educators/weekly-slots">
                    <img src={WeeklySlots} alt="" />
                    <span>Weekly Slots</span>
                </Link>
            </li>

            <hr className="sidebar-divider my-0" />

            <div className="sidebar-heading">FINANCES</div>

            <li className="nav-item active">
                <Link className="nav-link" to="/educators/my-earnings">
                    <img src={MyEarnings} alt="" />
                    <span>My Earnings</span>
                </Link>
                <a className="nav-link" href="#/">
                    <img src={FamilyPayments} alt="" />
                    <span>Family Payments</span>
                </a>
                <a className="nav-link" href="#/">
                    <img src={ExpenseTracker} alt="" />
                    <span>Expense Tracker</span>
                </a>
                <a className="nav-link" href="#/">
                    <img src={PaymentSettings} alt="" />
                    <span>Payment Settings</span>
                </a>
            </li>

            <div className="logoutbtn">
                <a href="#/">Log Out</a>
                <img src={LogoutBg} alt="" />
            </div>
        </>
    )
}

export default SideBar