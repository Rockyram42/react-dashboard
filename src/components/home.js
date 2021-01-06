import React, { useEffect, useState } from "react";
import * as action from "../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductModal from "./modal";
import { Redirect } from "react-router-dom";

function Home(props) {
  const [count, setCount] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [id, setId] = useState();

  console.log(id);

  const handelOpen = (task) => {
    setModalShow(true);
    setId(task.id);
  };
  const result = props.productres;
  const userTask = props.taskRes;
  // console.log(result);
  let perPage, start, end, total;
  perPage = 100;
  start = (count - 1) * perPage;
  end = count * perPage;
  total = Math.ceil(result.length / perPage);
  // console.log(total);

  const sliced = result.slice(start, end);

  const handelViewClick = () => {
    setCount(count + 1);
  };
  const handelBack = () => {};
  useEffect(() => {
    props.fetchApiProductData();
    props.fetchUserTaskData();
  }, []);

  const productData =
    sliced.length !== 0 ? (
      sliced.map((data) => {
        return (
          <li className="tm-list-group-item" key={data.id}>
            <span className="text-primary">{data.id}</span>{" "}
            <Link to={"/" + data.id}>{data.name}</Link>
          </li>
        );
      })
    ) : (
      <div className="tm-list-group-item">Fetching List ...</div>
    );

  const userTaskBoard =
    userTask.length !== 0 ? (
      userTask.map((task) => {
        return (
          <li className="tm-list-group-item" key={task.id}>
            <span className="text-primary mr-2">{task.id}</span>
            <span onClick={() => handelOpen(task)}>{task.title}</span>
          </li>
        );
      })
    ) : (
      <div className="tm-list-group-item">Fetching List ...</div>
    );
  if (!props.isLoggedIn) return <Redirect to="/login" />;
  return (
    <>
      <div className="conatiner mt-5">
        <div className="row align-items-center justify-content-center">
          <div className="tm-col tm-col-big">
            <div className="bg-white tm-block product-box">
              <div className="row">
                <div className="col-8">
                  <h2 className="tm-block-title d-inline-block">
                    Top Product List
                  </h2>
                </div>
                <div className="col-4 text-right">
                  {count < total ? (
                    <button
                      className="tm-link-black btn btn-small"
                      onClick={handelViewClick}
                    >
                      ViewMore
                    </button>
                  ) : (
                    <button
                      className="tm-link-black btn btn-small"
                      onClick={handelBack}
                    >
                      Back
                    </button>
                  )}
                </div>
              </div>
              <ul className="tm-list-group tm-list-group-alternate-color tm-list-group-pad-big">
                {productData}
              </ul>
            </div>
          </div>
          <div className="tm-col tm-col-small">
            <div className="bg-white tm-block product-box">
              <h2 className="tm-block-title">Upcoming Tasks</h2>
              <ol className="tm-list-group">{userTaskBoard}</ol>
            </div>
          </div>
        </div>
      </div>
      <ProductModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalId={id}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    productres: state.productdata,
    taskRes: state.userTaskData,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, action)(Home);
