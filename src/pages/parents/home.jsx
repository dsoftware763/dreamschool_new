import React from 'react';
import ddicon from '../../assets/img/ddicon.svg';
import arrowdownselect from '../../assets/img/arrowdownselect.svg';
import checkimg from '../../assets/img/checkimg.svg';
import child1 from '../../assets/img/child1.png';
import { Helmet } from 'react-helmet';
import BoxOrange from '../../components/common/BoxOrange';
import BoxBlue from '../../components/common/BoxBlue';
import {Select} from '../../components/UI'

const Parent = () => {
    return (
      // <!-- Begin Page Content -->
      <div className="container-fluid hero">
        <div className="cont">
        <Helmet>
          <title>Dreamschools - Dashboard</title>
          <link rel="canonical" href="https://www.dreamschools.com/parents" />
        </Helmet>

        {/* <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="">Welcome, Keisha!</h1>
        </div>
    
     <div className="row">
       <div className="col-md-12">
         <div className="orange section">
           <div className="boxforh4">
            <h4>PROGRAM</h4>
           </div>
           <a href="#/">
             <BoxOrange boxName="Interested Programs" boxCount={9} boxNew={3} />
           </a>
           <a href="#/">
           <BoxOrange boxName="Open Applications" boxCount={3} boxNew={0} />
           </a>
           <a href="#/">
           <BoxOrange boxName="Program Updates" boxCount={7} boxNew={2} />
           </a>
         </div>
         <div className="blue section">
           <div className="boxforh4">
            <h4>FINANCE</h4>
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
         <div className="col-xl-6 col-xl-6-new">
           <div className="tablebox">
             <div className="tableheader">
               <div className="row">
                 <div className="col-md-7">
                   <h2>RECENT PAYMENTS <img src={ddicon} alt=""/></h2>
                 </div>
                 <div className="col-md-5">
                   <div className="select">
                     <Select 
                      options={[
                        {label: "This Month:", value: 0},
                        {label: "1", value: 1},
                        {label: "2", value: 2},
                      ]}
                     />
                       <img src={arrowdownselect} className="arrowdownselect" alt=""/>

                   </div>
                 </div>
               </div>
             </div>
             <div className="tablebody">
               <a href="#/">
                 <div className="row">
                   <div className="col-lg-7">
                     <div className="row">
                       <div className="col-lg-4">
                         <h2 className="price">$2,700</h2> 
                       </div>
                       <div className="col-lg-7">
                         <h3>Upcoming Tuition</h3>
                         <p>(Jun 10, 2019 - Jun 14, 2019)</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-5 rightside">
                     <div className="row">
                       <div className="col-lg-6">
                         <p>Due Jun 21, 2019</p>
                       </div>
                       <div className="col-lg-6">
                         <p className="status">Unpaid</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </a>
               <a href="#/" className="overdue">
                 <div className="row">
                   <div className="col-lg-7">
                     <div className="row">
                       <div className="col-lg-4">
                         <h2 className="price">$2,700</h2> 
                       </div>
                       <div className="col-lg-7">
                         <h3>Past Tuition</h3>
                         <p>(Jun 10, 2019 - Jun 14, 2019)</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-lg-5 rightside">
                     <div className="row">
                       <div className="col-lg-6">
                         <p>Due Jun 21, 2019</p>
                       </div>
                       <div className="col-lg-6">
                         <p className="status">Overdue</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </a>
               <a href="#/" className="paid">
                 <div className="row">
                   <div className="col-lg-7">
                     <div className="row">
                       <div className="col-lg-4">
                         <h2 className="price">$2,700</h2> 
                       </div>
                       <div className="col-lg-7">
                         <h3>Past Tuition</h3>
                         <p>(Jun 10, 2019 - Jun 14, 2019)</p>
                       </div>
                     </div>
                   </div>
                   <div className="col-md-5 rightside">
                     <div className="row">
                       <div className="col-lg-6">
                         <p>Due Jun 21, 2019</p>
                       </div>
                       <div className="col-lg-6 paidbox">
                         <div className="paidbox-inner">
                           <p className="status">Paid </p>
                           <img src={checkimg} className="check" alt=""/>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </a>
             </div>
           </div>
         </div>
         <div className="col-xl-6 col-xl-6-new">
           <div className="tablebox">
             <div className="tableheader pb-0">
               <div className="row">
                 <div className="col-md-6">
                   <h2>MY ENROLLMENTS <img src={ddicon} alt=""/></h2>
                 </div>
                 <div className="col-md-6">
                   <ul className="leftlist">
                     <li><a href="#/" className="active">Child 1</a></li>
                     <li><a href="#/">Child 2</a></li>
                   </ul>
                 </div>
               </div>
             </div>
             <div className="tablebody padded">
               <div className="row">
                 <div className="col-md-12">
                   <div className="name">
                     <img src={child1} alt=""/>
                     <h2 className="parent-child">Maxwell Thompson</h2>
                   </div>
                 </div>
               </div>
               <div className="row">
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Program:</p>
                   </div>
                   <div className="boxright">
                     <p>Emily’s Dreamschool</p>
                   </div>
                 </div>
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Duration:</p>
                   </div>
                   <div className="boxright">
                     <p>January 1 2019 - December 1 2019 </p>
                   </div>
                 </div>
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Times:</p>
                   </div>
                   <div className="boxright">
                     <p>Monday - Friday</p>
                     <p><span>(1pm - 9pm)</span></p>
                   </div>
                 </div>
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Tuition:</p>
                   </div>
                   <div className="boxright">
                     <p>$5000 / month</p>
                   </div>
                 </div>
                 <div className="col-md-12">
                   <div className="boxleft">
                     <p>Status:</p>
                   </div>
                   <div className="boxright">
                     <p>Enrolled, Active attendance</p>
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
}

export default Parent;