import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "./firebase";
import "./App.scss";
import tech from "./tech.png";

function App() {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    branch: "",
    phonenumber: "",
  });

  const { firstname, lastname, email, branch, phonenumber } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !branch || !phonenumber ) {
      toast.error("Please provide value in each input field");
    } else {
      firebaseDB.child(firstname+branch).push(state);
      setState({ firstname: "", lastname: "", email: "", branch: "", phonenumber: "" });
      toast.success("Form Submitted Successfully");
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <section className="contact-section">
      <div className="container">
        <ToastContainer position="top-center" />
        <div className="row justify-content-center col-6">
                  <div className="contact-wrap1 w-100 p-lg-5 p-4">
                    <div className="top"><p>Tech Team Expansion</p></div>
                    <div className="middle"><h3>ENTREPRENEURSHIP CELL</h3>
                    <h3>IIT (BHU) VARANASI</h3></div>
                    <img src={tech} alt="tech"></img>
                  </div>
                  <div className="contact-wrap w-100 p-lg-5 p-4">
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <h6>First Name</h6>
                            <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              placeholder="  First Name"
                              onChange={handleInputChange}
                              value={firstname}
                            />
                          </div>
                          <div className="form-group">
                          <h6>Last Name</h6>
                            <input
                              type="text"
                              className="form-control"
                              name="lastname"
                              placeholder="  Last Name"
                              onChange={handleInputChange}
                              value={lastname}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group" id="email">
                          <h6>E-Mail</h6>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="  Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                          <h6>Branch</h6>
                            <input
                              type="text"
                              className="form-control"
                              name="branch"
                              placeholder="  Branch"
                              onChange={handleInputChange}
                              value={branch}
                            />
                          </div>
                          <div className="form-group">
                          <h6>Phone Number</h6>
                            <input
                              type="text"
                              className="form-control"
                              name="phonenumber"
                              placeholder="  Phone Number"
                              onChange={handleInputChange}
                              value={phonenumber}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group" id="submission">
                            <input
                              type="submit"
                              value="Send Message"
                              className="btn btn-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
        </div>
      </div>
    </section>
  );
}

export default App;
