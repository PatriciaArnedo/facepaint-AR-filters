import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, updateUser } from "../redux/actions";
import EditAccountForm from "./EditAccountForm";
import ImageUpload from "./ImageUpload";
import { Button, Divider } from "@mui/material";

const EditAccount = ({ userId, userObj, getUser }) => {
  const [beenClicked, setBeenClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Fetch user data on component mount
  useEffect(() => {
    getUser(userId);
  }, [userId, getUser]);

  // Toggle state handlers
  const clickHandler = () => {
    setBeenClicked(!beenClicked);
  };

  const modalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="edit-account">
      <div style={{ textAlign: "center" }}>
        <img
          src={
            userObj.avatar ? userObj.avatar : "https://i.imgur.com/igyvLpE.jpg"
          }
          className="account-avatar"
          alt="profile avatar"
        />
        <br />
        <Button variant="contained" onClick={modalHandler}>
          Upload Picture
        </Button>
        <br />
        <br />
        <NavLink to={`/my-profile`}>
          <h3>View My Profile</h3>
        </NavLink>
      </div>
      <Divider
        orientation="vertical"
        flexItem
        style={{ marginRight: "70px" }}
      />
      <div className="account-details">
        <h2>My Account</h2>
        {userObj.username ? (
          beenClicked ? (
            <>
              <p>
                <strong className="editable">Username:</strong> @
                {userObj.username}
              </p>
              <br />
              <EditAccountForm clickHandler={clickHandler} />
              <br />
              <Button
                variant="contained"
                color="warning"
                onClick={clickHandler}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <p>
                <strong className="editable">Username:</strong> @
                {userObj.username}
              </p>
              <br />
              <p>
                <strong className="editable">Name: </strong>
                {userObj.name}
              </p>
              <br />
              <p>
                <strong className="editable">Instagram:</strong>{" "}
                {userObj.instagram}
              </p>
              <br />
              <p>
                <strong className="editable">Bio:</strong>{" "}
                <span className="account-bio">{userObj.bio}</span>
              </p>
              <br />
              <Button variant="contained" onClick={clickHandler}>
                Edit
              </Button>
            </>
          )
        ) : (
          <h3>Loading...</h3>
        )}
        <br />
        {showModal ? <ImageUpload cancelHandler={modalHandler} /> : null}
      </div>
    </div>
  );
};

function msp(state) {
  return {
    user: state.user,
    userId: state.userId,
    userObj: state.userObj,
  };
}

function mdp(dispatch) {
  return {
    updateUser: (userObj, userId) => dispatch(updateUser(userObj, userId)),
    getUser: (userId) => dispatch(getUser(userId)),
  };
}

export default connect(msp, mdp)(EditAccount);
