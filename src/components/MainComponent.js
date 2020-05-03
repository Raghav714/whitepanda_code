import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Contact from "./ContactComponent";
import About from "./AboutComponent";
import DishDetail from "./DishDetailComponent";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

class Main extends Component {
  onDishSelect(dishId) {
    this.setState({ selectedDishId: dishId });
  }

  render() {
    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.leaders.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <div>
          <Switch>
            <Route
              exact
              path="/menu"
              component={() => <About leaders={this.props.leaders} />}
            />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
	    <Redirect to="/menu" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
