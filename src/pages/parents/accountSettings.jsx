import React from 'react';
import meimg from '../../assets/img/meimg.png';
import jasmine from '../../assets/img/jasmine.png';
import johnny from '../../assets/img/johnny.png';
import {Input} from '../../components/UI'

class AccountSettings extends React.PureComponent {
	state = {
	  displayName: 'Keisha Thompson',
	  username: 'keishat89',
	  password: '',
	  tourRequest: true,
	  newApplication: true,
	  failedPayment: true,
	  upcomingEvents: false,
	  waitList: true,
	}

	handChange = (e) => {
	  this.setState({
	    [e.target.name]: e.target.value,
	  });
	}

	handleSubmit = (e) => {
	  e.preventDefault();
	}

	render() {
	  const {
	    displayName, username, password, tourRequest, newApplication, failedPayment, upcomingEvents, waitList,
	  } = this.state;
	  return (
	  // <!-- Begin Page Content -->
  <div className="container-fluid">
    <div className="cont">
      <h1>Account Settings</h1>
    </div>
    <div className="cont">
      <div className="row">
        
		<div className="col-lg-3 col-md-6">
			<div className="box">
			<div className="bgofbox">
				<div className="header">
				<div className="row">
					<div className="col-md-12">
					<h2>PROFILE</h2>
					</div>
				</div>
				</div>
				<div className="formbody">

				<form onSubmit={this.handleSubmit}>
					<div className="row">
					<div className="col-md-6 col-5">
						<h3>Display Name</h3>
					</div>
					<div className="col-md-6 col-7">
						<Input name="displayName" type="text" value={displayName} onChange={this.handChange} />
					</div>
					</div>
					<div className="row">
					<div className="col-md-6 col-5">
						<h3>Username</h3>
					</div>
					<div className="col-md-6 col-7">
						<Input name="username" type="text" value={username} onChange={this.handChange} />
					</div>
					</div>
					<div className="row">
					<div className="col-md-6 col-5">
						<h3>Password</h3>
					</div>
					<div className="col-md-6 col-7">
						<Input name="password" type="text" value={password} onChange={this.handChange} />
					</div>
					</div>
				</form>

				</div>
			</div>
			</div>
		</div>

		<div className="col-lg-3 col-md-6">
			<div className="box">
			<div className="bgofbox">
				<div className="header">
				<div className="row">
					<div className="col-md-12">
					<h2>NOTIFICATIONS</h2>
					</div>
				</div>
				</div>
				<div className="formbody">
				<form onSubmit={this.handleSubmit}>
					<div className="row">
					<div className="col-md-6 col-7">
						<h3>New Tour Requests</h3>
					</div>
					<div className="col-md-6 col-5">
						<div className="swipupbtn">
						<span className="status">On</span>
						<Input name="tourRequest" type="checkbox" className="ios8-switch ios8-switch-sm" id="checkbox-2" checked={tourRequest} onChange={this.handChange} />
						<label htmlFor="checkbox-2" />
						</div>
					</div>
					</div>

					<div className="row">
					<div className="col-md-6 col-7">
						<h3>New Application</h3>
					</div>
					<div className="col-md-6 col-5">
						<div className="swipupbtn">
						<span className="status">On</span>
						<Input name="newApplication" type="checkbox" className="ios8-switch ios8-switch-sm" id="checkbox-3" checked={newApplication} onChange={this.handChange} />
						<label htmlFor="checkbox-3" />
						</div>
					</div>
					</div>

					<div className="row">
					<div className="col-md-6 col-7">
						<h3>Failed Payment</h3>
					</div>
					<div className="col-md-6 col-5">
						<div className="swipupbtn">
						<span className="status">On</span>
						<Input name="failedPayment" type="checkbox" className="ios8-switch ios8-switch-sm" id="checkbox-4" checked={failedPayment} onChange={this.handChange} />
						<label htmlFor="checkbox-4" />
						</div>
					</div>
					</div>

					<div className="row">
					<div className="col-md-6 col-7">
						<h3>Upcoming Events</h3>
					</div>
					<div className="col-md-6 col-5">
						<div className="swipupbtn">
						<span className="status">Off</span>
						<Input name="upcomingEvents" type="checkbox" className="ios8-switch ios8-switch-sm" id="checkbox-5" checked={upcomingEvents} onChange={this.handChange} />
						<label htmlFor="checkbox-5" />
						</div>
					</div>
					</div>

					<div className="row">
					<div className="col-md-6 col-7">
						<h3>Waitlist Reconsideration</h3>
					</div>
					<div className="col-md-6 col-5">
						<div className="swipupbtn">
						<span className="status">On</span>
						<Input name="waitList" type="checkbox" className="ios8-switch ios8-switch-sm" id="checkbox-6" checked={waitList} onChange={this.handChange} />
						<label htmlFor="checkbox-6" />
						</div>
					</div>
					</div>
				</form>
				</div>
			</div>
			</div>
		</div>

		<div className="col-lg-6 col-md-12">
			<div className="box">
			<div className="bgofbox">
				<div className="header">
				<div className="row">
					<div className="col-md-12">
					<h2>PROFILE PHOTOS</h2>
					</div>
				</div>
				</div>
				<div className="formbody">
				<div className="boxofprfilephotos">
					<div className="row">
					<div className="col-md-4 col-6">
						<p>Me</p>
						<img src={meimg} alt="" />
						<a href="#/">Upload</a>
					</div>
					<div className="col-md-4 col-6">
						<p>Jasmine</p>
						<img src={jasmine} alt="" />
						<a href="#/">Upload</a>
					</div>
					<div className="col-md-4 col-6">
						<p>Johnny</p>
						<img src={johnny} alt="" />
						<a href="#/">Upload</a>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>

      </div>


      <div className="row">
        <div className="col-md-12">
          <div className="buttons">
            <a href="#/" className="savebtn">UPDATE PLAN</a>
            <a href="#/" className="nextbtn">CANCEL APPLICATION</a>
          </div>
        </div>
      </div>

    </div>
  </div>

		  );
	}
}

export default AccountSettings;
