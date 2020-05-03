import React, { Component} from "react";
import {
  Row,
  Col,
  Label
} from "reactstrap";
import DatePicker from 'react-datepicker';
import ModalExample from "./HomeComponent"
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Control, LocalForm, Errors } from "react-redux-form";

import { Link } from "react-router-dom";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));



class Contact extends Component {
    constructor (props) {
    super(props)
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(dateName,date) {
    let { startDate, endDate } = this.state;
    if (dateName === 'startDateTime') {
      startDate = date;
    } else {
      endDate = date;
    }
    this.setState({
      startDate,
      endDate,
    });

  }



  render() {
    return (
	<div className="container">
		<div className="row row-content">
			<div className="col-12">
				<h3>Booking Details</h3>
			</div>
		</div>
		<div className="row">
			<LocalForm className="formpos" onSubmit={values => this.handleSubmit(values)}>
				<div className="row">
					<div className="col-6">
						<Row className="form-group">
                					<Label htmlFor="name" md={2}>
                	  					Name
                					</Label>
							<Col md={10}>
								<Control.text
									model=".Name"
									id="Name"
									name="Name"
									placeholder="Name"
									className="form-control"
									validators={{
										required,
										minLength: minLength(3),
										maxLength: maxLength(15)
									}}
								/>
								<Errors
									className="text-danger"
									model=".Name"
									show="touched"
									messages={{
										required: "Required",
										minLength: "Must be greater than 2 characters",
										maxLength: "Must be 15 characters or less"
									}}
                	  					/>
                					</Col>
              					</Row>
					</div>
					<div className="col">
						<Row className="form-group">
							<Label htmlFor="telnum" md={2}>
								Contact Tel.
							</Label>
                					<Col md={10}>
                						  <Control.text
                							    model=".telnum"
                							    id="telnum"
                    								name="telnum"
                    								placeholder="Phone Number"
                    								className="form-control"
                    								validators={{
                      									required,
                      									minLength: minLength(10),
                      									maxLength: maxLength(10),
                      									isNumber
                    								}}
                  						/>
                  						<Errors
                    							className="text-danger"
                    							model=".telnum"
                    							show="touched"
                    							messages={{
                      								required: "Required",
                      								minLength: "Must be 10 numbers",
                      								maxLength: "Must be 10 numbers",
                      								isNumber: "Must be a number"
                    							}}
                  						/>
                					</Col>
              					</Row>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<Row className="form-group">
							<Label htmlFor="startdate" md={2}>
                  						Start Date
                					</Label>
							<Col md={10}>
	                					<DatePicker
	              							selected={ this.state.startDate }
              							onChange={date => this.handleChange('startDateTime', date) }
              							name="startDate"
              							dateFormat="MM/dd/yyyy"
								minDate={new Date()}
	              						/>
							</Col>
				              </Row>
					</div>
					<div className="col">
						<Row className="form-group">
							<Label htmlFor="enddate" md={2}>
                  						End Date
                					</Label>
							<Col md={10}>
                						<DatePicker
              								selected={ this.state.endDate }
              								onChange={ date => this.handleChange('endDateTime', date) }
              								name="endDate"
              								dateFormat="MM/dd/yyyy"
									minDate={ this.state.startDate }
              							/>
							</Col>
				              </Row>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
                  				<Row className="form-group">
                					<Col md={{ size: 10, offset: 2 }}>
               	 	  					<Link to="/menu"className="btn btn-light btn-lg">
                 	   						Back
                 	 					</Link>
                					</Col>
             		 			</Row>
					</div>
		 			<div className="col">
						<Row className="form-group">
                					<Col md={{ size: 10, offset: 2 }}>
								<ModalExample />
                					</Col>
              					</Row>
					</div>
				</div>
            		</LocalForm>
	  	</div>
	</div>
    );
  }
}

export default Contact;
