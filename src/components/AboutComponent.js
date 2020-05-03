import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from "reactstrap";
import { Link } from "react-router-dom";
import Seater from "./seater.png";
import Picker from "./picker.png";
import Rs from "./rs.jpg";


function RenderLeader(props) {
  return (
    <Card className="row card-columns mt-5" border="secondary" key={props.leader.id}>
	<div className="media">
	   <div className="col-2">
	   <CardImg className="pos align-self-center rounded" src={props.leader.image} alt={props.leader.name} />
	   </div>
	   <div className="col"> 
            <CardBody>
	   <div className="row">
	   <div className="col-5">
	   <CardTitle>{props.leader.name}</CardTitle>
	   <div className="row">
		<div className="col-1">
	 	        <img height="35" width="30" src={Picker} alt="picker logo"/>	   
		</div>
		<div className="col-6">
			<CardText className="colorfade">{props.leader.Color} Color</CardText>           		   
		</div>
		<div className="col-1">
	 	        <img height="35" width="30" src={Seater} alt="seater logo"/>
		</div>
		<div className="col">
	   		<CardText className="colorfade">{props.leader.seater} Seater</CardText>
	   </div>
		</div></div>
	  <div className="col-1  align-self-center">
	 	        <img height="30" width="30" src={Rs} alt="Rs logo"/>
	  </div>
	   <div className="col-1 align-self-center">		
          <CardText>{props.leader.price}</CardText>
	   </div>
		<div className="col-3 align-self-center">		
          <Link to="/contactus" className="btn btn-secondary btn-lg">Book Now</Link>
	   </div>
		<div className="col align-self-center">		
          <Link to={`/menu/${props.leader.id}`} className="btn btn-light btn-lg">Details</Link>
	   </div>
</div>
            </CardBody>
	</div>
	</div>
          </Card>
  );
}

function About(props) {
  const leaders = props.leaders.map((leader, i) => {
    return <RenderLeader key={i} leader={leader}></RenderLeader>;
  });

  return (
    <div className="container">
      <div className="row row-content">
        <div className="col-12">
          <h2 className="text-left">Booking Portal</h2>
        </div>
        <div className="col-12">
          {leaders}
        </div>
      </div>
    </div>
  );
}

export default About;
