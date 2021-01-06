import React, { Component } from "react";
import * as action from "../redux/action";
import { connect } from "react-redux";

class Detail extends Component {
  componentDidMount() {
    let iD = this.props.match.params.id;
    this.props.fetchSingleProductList(iD);
  }
  render() {
    let res = this.props.singleProduct;
    return (
      <div className="text-center text-primary mt-5">
        <div className="jumbotron">
          <h5 className="text-muted">
            <span className="mr-5">{res.name}</span>
            <span>{res.email}</span>
          </h5>
          <h2>{res.body}</h2>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    singleProduct: state.singleProductData,
  };
};
export default connect(mapStateToProps, action)(Detail);
