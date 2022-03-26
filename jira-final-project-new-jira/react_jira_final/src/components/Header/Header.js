import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/jira-logobrand-name.png";
// import { openFormCreateIssueModal } from "../redux/actions/ModaljiraActions";
// import {
//   getAllProject,
//   getProjectPriority,
//   getProjectStatus,
//   getProjectTask,
// } from "../redux/actions/ProjectPageActions";

export default function Header(headerProps) {
  //Get data from reducer
  // const { userSignin } = useSelector(
  //   (rootReducer) => rootReducer.UserManagementReducer
  // );

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // Get all Project
  //   dispatch(getAllProject());
  //   dispatch(getProjectStatus());
  //   dispatch(getProjectPriority());
  //   dispatch(getProjectTask());
  // }, []);

  // let { avatar } = userSignin;

  // const enableSelection = (id) => {
  //   let projectsBtn = document.getElementById(id);
  //   if (projectsBtn.style.display === "flex") {
  //     projectsBtn.style.display = "none";
  //   } else {
  //     projectsBtn.style.display = "flex";
  //   }
  // };

  // const disableSelection = (id) => {
  //   document.addEventListener("mouseup", function (e) {
  //     let selection = document.getElementById(id);
  //     if (!selection.contains(e.target)) {
  //       selection.style.display = "none";
  //     }
  //   });
  // };

  //Render header menufuntion on all pages except usermanagement page1=
  const handleMenuFunction = () => {
    // if (headerProps.location.pathname == "/usermanagement") {
    //   return (
    //     <div className="custom-navbar-menu custom-function">
    //       <div className="ic custom-function-help custom-navbar-menu-item-btn">
    //         <i className="fa-solid fa-circle-question" />
    //       </div>
    //       <div
    //         className="ic custom-function-userInfo custom-navbar-menu-item-btn"
    //         // onClick={() => {
    //         //   enableSelection("user-selection");
    //         //   disableSelection("user-selection");
    //         // }}
    //       >
    //         <img src="{avatar}" alt="user-avar" />
    //       </div>
    //       <div id="user-selection" className="selection user-selection">
    //         <button className="custom-btn-secondary-hover">
    //           Create project
    //         </button>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="custom-navbar-menu custom-function">
    //       <div className="custom-search-bar">
    //         <input
    //           id="input-search"
    //           className="custom-search-bar-input"
    //           type="text"
    //           placeholder="Search"
    //         />
    //         <i className="fa-solid fa-magnifying-glass" />
    //       </div>
    //       <div className="ic custom-function-noti custom-navbar-menu-item-btn">
    //         <i className="fa-solid fa-bell" />
    //       </div>
    //       <div className="ic custom-function-help custom-navbar-menu-item-btn">
    //         <i className="fa-solid fa-circle-question" />
    //       </div>
    //       <div
    //         className="ic custom-function-settings custom-navbar-menu-item-btn"
    //         // onClick={() => {
    //         //   enableSelection("settings-selection");
    //         //   disableSelection("settings-selection");
    //         // }}
    //       >
    //         <i className="fa-solid fa-gear" />
    //       </div>
    //       <div id="settings-selection" className="selection settings-selection">
    //         <p className="h2-title primary-text-color ">ATLASSIAN ADMIN</p>
    //         <hr />
    //         <button className="settings-selection-item custom-btn-secondary-hover mt-2">
    //           <i className="fa-solid fa-users mr-2"></i>
    //           <NavLink
    //             className="primary-text-color font-weight-normal"
    //             to="/usermanagement"
    //           >
    //             User Management
    //           </NavLink>
    //         </button>
    //       </div>
    //       <div
    //         className="ic custom-function-userInfo custom-navbar-menu-item-btn"
    //         // onClick={() => {
    //         //   enableSelection("user-selection");
    //         //   disableSelection("user-selection");
    //         // }}
    //       >
    //         <img src="{avatar}" alt="user-avar" />
    //       </div>
    //       <div id="user-selection" className="selection user-selection">
    //         <hr />
    //         <button className="custom-btn-secondary-hover">Sign out</button>
    //       </div>
    //     </div>
    //   );
    // }
    return (
      <div className="custom-navbar-menu custom-function">
        <div className="custom-search-bar">
          <input
            id="input-search"
            className="custom-search-bar-input"
            type="text"
            placeholder="Search"
          />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="ic custom-function-noti custom-navbar-menu-item-btn">
          <i className="fa-solid fa-bell" />
        </div>
        <div className="ic custom-function-help custom-navbar-menu-item-btn">
          <i className="fa-solid fa-circle-question" />
        </div>
        <div
          className="ic custom-function-settings custom-navbar-menu-item-btn"
          // onClick={() => {
          //   enableSelection("settings-selection");
          //   disableSelection("settings-selection");
          // }}
        >
          <i className="fa-solid fa-gear" />
        </div>
        <div id="settings-selection" className="selection settings-selection">
          <p className="h2-title primary-text-color ">ATLASSIAN ADMIN</p>
          <hr />
          <button className="settings-selection-item custom-btn-secondary-hover mt-2">
            <i className="fa-solid fa-users mr-2"></i>
            <NavLink
              className="primary-text-color font-weight-normal"
              to="/usermanagement"
            >
              User Management
            </NavLink>
          </button>
        </div>
        <div
          className="ic custom-function-userInfo custom-navbar-menu-item-btn"
          // onClick={() => {
          //   enableSelection("user-selection");
          //   disableSelection("user-selection");
          // }}
        >
          <img src="{avatar}" alt="user-avar" />
        </div>
        <div id="user-selection" className="selection user-selection">
          <hr />
          <button className="custom-btn-secondary-hover">Sign out</button>
        </div>
      </div>
    );
  };

  //
  return (
    // Header section
    <header id="header" className="custom-header">
      {/* Navbar portion */}
      <nav className="custom-navbar-menu">
        <div
          style={{ marginRight: 16 }}
          className="custom-logon-brand custom-navbar-menu-item"
        >
          <a
            className="custom-navbar-menu-item-btn brand-name"
            href=""
            target="blank"
          >
            <img
              style={{ width: 160, padding: "4px 0px" }}
              src={logo}
              alt="Logo brand"
            />
          </a>
        </div>
        <div className="custom-navbar-menu-item">
          <button className="custom-navbar-menu-item-btn">
            <span className="custom-navbar-menu-item-text">
              Your work <i className="fa-solid fa-angle-down"> </i>
            </span>
          </button>
        </div>
        <div className="custom-navbar-menu-item">
          <button
            id="projects"
            className="custom-navbar-menu-item-btn"
            // onClick={() => {
            //   enableSelection("project-selection");
            //   disableSelection("project-selection");
            // }}
          >
            <span className="custom-navbar-menu-item-text">
              Projects <i className="fa-solid fa-angle-down"> </i>
            </span>
          </button>
          <div id="project-selection" className="selection project-selection">
            <button className="project-selection-item custom-btn-secondary-hover">
              <NavLink
                className="text-default primary-text-color"
                to="/allprojects"
              >
                View all projects
              </NavLink>
            </button>
            <NavLink
              className="project-selection-item custom-btn-secondary-hover"
              to="/project/get-all-project"
            >
              Create project
            </NavLink>
          </div>
        </div>
        <div className="custom-navbar-menu-item">
          <button className="custom-navbar-menu-item-btn">
            <span className="custom-navbar-menu-item-text">
              Filters <i className="fa-solid fa-angle-down"> </i>
            </span>
          </button>
        </div>
        <div className="custom-navbar-menu-item">
          <button className="custom-navbar-menu-item-btn">
            <span className="custom-navbar-menu-item-text">
              Dashboards <i className="fa-solid fa-angle-down"> </i>
            </span>
          </button>
        </div>
        <div className="custom-navbar-menu-item">
          <button className="custom-navbar-menu-item-btn">
            <span className="custom-navbar-menu-item-text">
              People <i className="fa-solid fa-angle-down"> </i>
            </span>
          </button>
        </div>
        <div className="custom-navbar-menu-item">
          <button className="custom-navbar-menu-item-btn">
            <span className="custom-navbar-menu-item-text">
              Apps <i className="fa-solid fa-angle-down"> </i>
            </span>
          </button>
        </div>
        <div className="custom-navbar-menu-item ml-3">
          <button className="custom-btn-primary">
            <p
              className="custom-navbar-menu-item-text default-color"
              // onClick={() => {
              //   dispatch(openFormCreateIssueModal());
              // }}
            >
              Create issue
            </p>
          </button>
        </div>
      </nav>
      {/* End navbar portion */}
      {/* Midle portion */}
      <div className="midle-portion" />
      {/* End Midle portion */}
      {/* Function portion */}
      {handleMenuFunction()}
      {/* End Function portion */}
    </header>
    // End Header section
  );
}
