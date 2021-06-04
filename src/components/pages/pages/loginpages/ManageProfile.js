import React from "react";
import "../../../../css/ManageProfile.css";

function ManageProfile() {
  return (
    <section className="m-profile manage-p" style={{color:'white'}} >
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-lg-10" data-select2-id="24">
            <div className="sign-user_card" data-select2-id="20">
              <div className="row" data-select2-id="19">
                <div className="col-lg-2">
                  <div className="upload_profile d-inline-block">
                    <img
                      src="https://embodiedfacilitator.com/wp-content/uploads/2018/05/human-icon-png-1901.png"
                      className="profile-pic rounded-circle img-fluid"
                      alt="user"
                    />
                    <div className="p-image">
                      <i className="ri-pencil-line upload-button"></i>
                      <input className="file-upload" type="file" accept="image/*" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 device-margin" data-select2-id="18">
                  <div className="profile-from" data-select2-id="17">
                    <h4 className="mb-3">Manage Profile</h4>
                    <form className="mt-4" action="index.html" data-select2-id="16">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          id="exampleInputl2"
                          placeholder="Enter Your Name"
                          autocomplete="off"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                          type="text"
                          className="form-control date-input basicFlatpickr mb-0 flatpickr-input"
                          placeholder="Select Date"
                          id="exampleInputPassword2"
                          required=""
                          // readonly="readonly"
                        />
                      </div>
                      <div
                        className="form-group d-flex flex-md-row flex-column"
                        data-select2-id="15"
                      >
                        <div className="iq-custom-select d-inline-block manage-gen">
                          <select
                            name="cars"
                            className="form-control pro-dropdown select2-hidden-accessible"
                            data-select2-id="1"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="female" data-select2-id="3">
                              Female
                            </option>
                            <option value="male" data-select2-id="26">
                              Male
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                            dir="ltr"
                            data-select2-id="2"
                            style={{width:'94px'}}
                            
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-labelledby="select2-cars-ov-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-cars-ov-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Female"
                                >
                                  Female
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                        <div
                          className="iq-custom-select d-inline-block lang-dropdown manage-dd"
                          data-select2-id="14"
                        >
                          <select
                            name="cars"
                            className="form-control pro-dropdown select2-hidden-accessible"
                            id="lang"
                            multiple=""
                            data-select2-id="lang"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="english" data-select2-id="5">
                              English
                            </option>
                            <option value="hindi" data-select2-id="6">
                              Hindi
                            </option>
                            <option value="gujarati" data-select2-id="7">
                              Gujarati
                            </option>
                            <option value="bengali" data-select2-id="8">
                              Bengali
                            </option>
                            <option value="marathi" data-select2-id="9">
                              Marathi
                            </option>
                            <option value="tamil" data-select2-id="10">
                              Tamil
                            </option>
                            <option value="kannada" data-select2-id="11">
                              Kannada
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                            dir="ltr"
                            data-select2-id="12"
                            style={{width:'101.969px'}}
                            
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--multiple"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="-1"
                              >
                                <ul className="select2-selection__rendered">
                                  <li className="select2-search select2-search--inline">
                                    <input
                                      className="select2-search__field"
                                      type="search"
                                      tabindex="0"
                                      autocomplete="off"
                                      autocorrect="off"
                                      autocapitalize="none"
                                      spellcheck="false"
                                      role="textbox"
                                      aria-autocomplete="list"
                                      placeholder="Language Preference"
                                      style={{width:'175px'}}
                                      
                                    />
                                  </li>
                                </ul>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                      </div>
                      <div className="d-flex">
                        <a href="#" className="btn btn-hover">
                          Save
                        </a>
                        <a href="#" className="btn btn-hover">
                          Cancel
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ManageProfile;

/*
<div className="m-profile manage-p" style={{backgroundColor:'#212529'}}>
      <div className="container h-100">
        <div className="row h-100"style={{alignItems:'center',justifyContent:'center'}}>
          <div className="col-lg-10" data-select2-id="20">
            <div className="sign-user_card" data-select2-id="19">
              <div className="row" data-select2-id="18">
                <div className="col-lg-2">
                  <div className="upload_profile d-inline-block">
                    <img
                      src="images/user/user.jpg"
                      className="profile-pic rounded-circle img-fluid"
                      alt="user"
                    />
                    <div className="p-image">
                      <i className="ri-pencil-line upload-button"></i>
                      <input
                        className="file-upload"
                        type="file"
                        accept="image/*"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-10 device-margin " data-select2-id="17">
                  <div className="profile-from" data-select2-id="16" >
                    <h4 className="mb-3">Manage Profile</h4>
                    <div className="row align-items-center justify-content-between mb-3">
                    <form className="mt-4" data-select2-id="15" >
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          id="exampleInput12"
                          placeholder="Enter Your Name"
                           autocomplete="off"
                          // required
                        />
                      </div>
                      <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                          type="text"
                          className="form-control mb-0"
                          id="exampleInputPassword2"
                          placeholder="Select Date"
                          autocomplete="off"
                          // required
                          // readonly="readonly"
                        />
                      </div>
                      <div
                        className="form-group d-flex flex-md-row flex-column"
                        data-select2-id="14"
                      >
                        <div className="iq-custom-select d-inline-blok manage-gen">
                          <select
                            name="cars"
                            className="form-control pro-dropdown select2-hidden-accessible"
                            data-select2-id="1"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="female" data-select2-id="3">
                              Female
                            </option>
                            <option value="male" data-select2-id="22">
                              Male
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap4"
                            dir="ltr"
                            data-select2-id="2" 
                            style={{width:'94px'}}
                            
                          ></span>
                            <span className="selection"></span>
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="0"
                                aria-labelledby="select2-cars-al-container"
                              ></span>
                               
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              
                            
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            >
                          </span>
                        </div>
                        <div className="iq-custom-select d-inline-block lang-dropdown manage-dd" data-select2-id="14">
                          <select
                            name="cars"
                            className="form-control pro-dropdown select2-hidden-accessible"
                            id="lang"
                            multiple data-select2-id="lang"
                            tabindex="-1"
                            aria-hidden="true"
                          >
                            <option value="english" data-select2-id="5">
                              English
                            </option>
                            <option value="hindi" data-select2-id="6">
                              Hindi
                            </option>
                            <option value="gujarati" data-select2-id="7">
                              Gujarati
                            </option>
                            <option value="bengali" data-select2-id="8">
                              Bengali
                            </option>
                            <option value="marathi" data-select2-id="9">
                              Marathi
                            </option>
                            <option value="tamil" data-select2-id="10">
                              Tamil
                            </option>
                            <option value="kannada" data-select2-id="11">
                              Kannada
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap4 select2-container--below select2-container--focus select2-container--open"
                            dir="ltr"
                            data-select2-id="12"
                            style={{width:'101.969px'}}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--multiple"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabindex="-1"
                              >
                                <ul className="select2-selection__rendered">
                                  <li className="select2-search select2-search--inline">
                                    <input
                                      className="select2-search__field"
                                      type="search"
                                      tabindex="0"
                                      autocomplete="off"
                                      autocorrect="off"
                                      autocapitalize="none"
                                      spellcheck="false"
                                      role="textbox"
                                      aria-autocomplete="list"
                                      placeholder="Language Preference"
                                      style={{width:'175px'}}
                                    />
                                  </li>
                                </ul>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                      </div>
                      <div className="d-flex">
                        <a href="#" className="btn btn-link">
                          Save
                        </a>
                        <a href="#" className="btn btn-link">
                          Cancel
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    */


  /* <span
                                  className="select2-selection__rendered"
                                  id="select2-cars-al-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Female"
                                >
                                  Female
                                </span> */

