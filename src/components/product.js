import React, { useEffect, useState } from "react";
import * as action from "../redux/action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProductModal from "../components/productmodal";

function Product(props) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    props.ListOfAccountUsers();
  }, []);
  const userList = props.list;
  console.log(userList);
  const handelDeleteUser = (id) => {
    console.log(id);
    props.DeleteUserFromList(id);
  };
  const handelGetIds = (id) => {
    console.log(id);
  };
  const handelProductModal = () => {
    setOpen(true);
  };
  const MapList = props.fetch ? (
    <div>
      <h2>Loader</h2>
    </div>
  ) : (
    userList.map((user) => {
      return (
        <tr key={user.id}>
          <th scope="row">
            <input
              type="checkbox"
              aria-label="Checkbox"
              onClick={() => handelGetIds(user.id)}
            />
          </th>
          <td className="tm-product-name">{user.name}</td>
          <td className="text-center">{user.username}</td>
          <td className="text-center">{user.email}</td>
          <td>{user.website}</td>
          <td>
            <i
              className="fas fa-trash-alt tm-trash-icon"
              onClick={() => handelDeleteUser(user.id)}
            ></i>
          </td>
        </tr>
      );
    })
  );
  return (
    <div>
      <div className="container">
        <div className="row tm-content-row tm-mt-big">
          <div className="col-xl-8 col-lg-12 tm-md-12 tm-sm-12 tm-col">
            <div className="bg-white tm-block h-100">
              <div className="row">
                <div className="col-md-8 col-sm-12">
                  <h2 className="tm-block-title d-inline-block">Products</h2>
                </div>
                <div className="col-md-4 col-sm-12 text-right">
                  <Link
                    className="btn btn-small btn-primary"
                    onClick={handelProductModal}
                  >
                    Add New Product
                  </Link>
                </div>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-striped tm-table-striped-even mt-3">
                  <thead>
                    <tr className="tm-bg-gray">
                      <th scope="col">&nbsp;</th>
                      <th scope="col"> Name</th>
                      <th scope="col" className="text-center">
                        User Name
                      </th>
                      <th scope="col" className="text-center">
                        Email
                      </th>
                      <th scope="col">Website</th>
                      <th scope="col">&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>{MapList}</tbody>
                </table>
              </div>

              <div className="tm-table-mt tm-table-actions-row">
                <div className="tm-table-actions-col-left">
                  <button className="btn btn-danger">
                    Delete Selected Items
                  </button>
                </div>
                <div className="tm-table-actions-col-right">
                  <span className="tm-pagination-label">Page</span>
                  <nav aria-label="Page navigation" className="d-inline-block">
                    <ul className="pagination tm-pagination">
                      <li className="page-item active">
                        <a className="page-link" href="#javascript">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#javascript">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#javascript">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <span className="tm-dots d-block">...</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#javascript">
                          13
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#javascript">
                          14
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-12 tm-md-12 tm-sm-12 tm-col">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title d-inline-block">
                Product Categories
              </h2>
              <table className="table table-hover table-striped mt-3">
                <tbody>
                  <tr>
                    <td>1. Cras efficitur lacus</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2. Pellentesque molestie</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>3. Sed feugiat nulla</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>4. Vestibulum varius arcu</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>5. Aenean eget urna enim</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>6. Condimentum viverra</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>7. In malesuada</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>8. Placerat</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>9. Donec semper</td>
                    <td className="tm-trash-icon-cell">
                      <i className="fas fa-trash-alt tm-trash-icon"></i>
                    </td>
                  </tr>
                </tbody>
              </table>

              <a href="#javascript" className="btn btn-primary tm-table-mt">
                Add New Category
              </a>
            </div>
          </div>
        </div>
      </div>
      <ProductModal show={open} onHide={() => setOpen(false)} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.accountUserList,
    fetch: state.loader,
  };
};

export default connect(mapStateToProps, action)(Product);
