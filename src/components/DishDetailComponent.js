import React from "react";
import {
  Card,
  CardImg, Alert,Table
} from "reactstrap";
import { Link } from "react-router-dom";
import Seater from "./seater.png";
import Picker from "./picker.png";

function RenderDish(dishDetail) {
  return (
	<Card className="row" border="secondary" key={dishDetail.id}>
		<div className="media">
	        <div className="col-6">
	        <CardImg height="350" width="1000" className="rounded" src={dishDetail.image} alt={dishDetail.name} />
	        </div>
		<div className="col"> 
	        <div className="row">
		<h2>{dishDetail.name}</h2>
		</div>
		<br />
		<div className="row">
		<div className="col-1">
	 	        <img height="35" width="30" src={Picker} alt="picker logo"/>
		</div>
		<div className="col-6 colorfade">
		<h3>{dishDetail.Color} Color</h3>           		   
		</div>
		<div className="col-1">
	 	        <img height="35" width="30" src={Seater} alt = "seater logo"/>
		</div>
		<div className="col colorfade">
	   	<h3>{dishDetail.seater} Seater</h3>
	        </div>
		</div>
		<br />
		<div className="row">			
                <h3>Price: {dishDetail.price} per day</h3>
		</div>
		<br />
		<div className="row">	
		<Link to="/contactus" className="btn btn-secondary btn-lg" >Book Now</Link>
		</div></div>
	        </div> 
         </Card>
  );
}

function RenderDish1(dishDetail) {
  return (
	<div>
	<div className="row">
        <Alert color="danger">
        Not Available !
        </Alert>
	</div>
	<div className="row">
	<h2 className="colorfade">Car Deatils</h2>
	</div>
	<div className="row">
		<p>{dishDetail.description}</p>
	</div>
	<br />
	<h2 className="colorfade"> Current Booking</h2>
	<hr />
	<Table>
        <thead>
        <tr>
          <th className="colorfade">Name</th>
          <th className="colorfade">Phone Number</th>
          <th className="colorfade">Issue Date</th>
          <th className="colorfade">Return Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th >Jacob</th>
          <td>8545786225</td>
          <td>22/05/2020</td>
          <td>26/05/2020</td>
        </tr>
      </tbody>
    </Table>

	</div>
  );
}

const DishDetail = props => {
  return (
    <div className="container">
	  <br />
          <RenderDish {...props.dish} />
	  <hr />
	  <RenderDish1 {...props.dish} />
    </div>
  );
};

export default DishDetail;
