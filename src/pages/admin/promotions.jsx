import React from 'react';
import {Table, Input, Select, TextArea, Modal} from '../../components/UI';
import searchicon2 from '../../assets/img/searchicon2.svg';

class Promotions extends React.PureComponent {
  state = {
    open: false
  }
  handleModal = () => {
    this.setState(state => ({
      open: !state.open
    }))
  }
  render() {
    const {open} = this.state
    return (
      <div className="admin">
        <div className="container-fluid adminpromotion">
          <div className="cont">
              <h1>Promotions</h1>
          </div>
          <Modal 
            open={open}
            heading="CREATE NEW PROMOTION"
            onClose={this.handleModal}
          >
            <div className="row">
              <div className="col-md-6">
                <p>Internal Name</p>
              </div>
              <div className="col-md-6">
                <Input 
                  placeholder=""
                  name="familyDiscount"
                  value="Founding Family Discount"
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>Valid </p>
              </div>
              <div className="col-md-6">
                <div  className="fromda">
                  
                  <Input 
                    type="date" 
                    name="dateofbirth" 
                    id="dateofbirth"
                    onChange={() => {}}
                  /> 
                </div>
                <div className="toda">
                  <Input 
                    type="date" 
                    name="dateofbirth" 
                    id="dateofbirth"
                    onChange={() => {}}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p>Active Timeframe </p>
              </div>
              <div className="col-md-6">
                <Select
                  name="timeframe"
                  options={[
                    {value: 0, label: "First Week"},
                    {value: "1", label: 1},
                    {value: "2", label: "2"},
                    {value: "3", label: "3"}
                  ]}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>Discount Amount </p>
              </div>
              <div className="col-md-6">
                <div className="input1">
                  <img src="img/unactivepop.svg" className="unactive" alt=""/>
                  <img src="img/activepop.svg" className="activepop" alt=""/>
                  <Input 
                    name="discount"
                    onChange={() => {}}
                  />
                </div>
                <div className="input2 activeinput">
                  <img src="img/unactivepop.svg" className="unactive" alt=""/>
                  <img src="img/activepop.svg" className="activepop" alt=""/>
                  <Input 
                    value="20%" name="discount1"
                    onChange={() => {}}
                  />
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <p>Educators</p>
              </div>
              <div className="col-md-12">
                <TextArea name="educator"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p>Use Limit</p>
              </div>
              <div className="col-md-6">
                <Input 
                  placeholder="" 
                  value="5" 
                  name="limit"
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p>Code</p>
              </div>
              <div className="col-md-6">
                <Input 
                  type="text" 
                  placeholder="" 
                  value="FIRST07A" 
                  name="code"
                  onChange={() => {}}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="buttons">
                  <a href="#/" className="nextbtn">SUBMIT</a>
                </div>
              </div>
            </div>
             
          </Modal>
        
          <div className="cont">
            <div className="row">
              <div className="col-md-6">
                <div className="forbtnwrap">
                  <div className="forbtnapp">
                    <a href="#/" className="newapplications" onClick={this.handleModal}>
                      <img src="img/newapplicationsbtn.svg" alt=""/>New Promotion
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="search">
                  <div className="input">
                    <Input 
                      placeholder="Search by name" 
                      name="search"
                      onChange={() => {}}
                    />
                   
                    <button> <img src={searchicon2} className="searchicon" alt=""/></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tablecont">
              <div className="table-responsive">
                <Table
                  headings={[
                    {id: "internal_name", label: "Internal Name"},
                    {id: "valid_for", label: "Valid For"},
                    {id: "active_timeframe", label: "Active Timeframe"},
                    {id: "discount_amount", label: "Discount Amount"},
                    {id: "educators", label: "Educators"},
                    {id: "code", label: "Code"},
                    {id: "status", label: "Status"}
                  ]}
                  data={[
                    {
                      internal_name: "Founding Family Discount",
                      valid_for: "Jan 1 2019 - Oct 1 2019",
                      active_timeframe: "First day",
                      discount_amount: "$45",
                      educators: "Janice Michelle",
                      code: "CARE07A",
                      status:  "Active"
                    },
                    {
                      internal_name: "Founding Family Discount",
                      valid_for: "Jan 1 2019 - Oct 1 2019",
                      active_timeframe: "First day",
                      discount_amount: "$45",
                      educators: "Janice Michelle",
                      code: "CARE07A",
                      status:  "Active"
                    },
                    {
                      internal_name: "Founding Family Discount",
                      valid_for: "Jan 1 2019 - Oct 1 2019",
                      active_timeframe: "First day",
                      discount_amount: "$45",
                      educators: "Janice Michelle",
                      code: "CARE07A",
                      status:  "Active"
                    }
                  ]}
                />
              
                <div className="numb">
                  <ul>
                    <li className="activeno"><a href="#/">1</a></li>
                    <li><a href="#/">2</a></li>
                    <li><a href="#/">3</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

      </div>
      </div>
  );
  }
    
}
export default Promotions;