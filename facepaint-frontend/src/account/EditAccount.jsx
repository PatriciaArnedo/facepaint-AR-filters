import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, updateUser } from "../redux/actions";
import EditAccountForm from "./EditAccountForm";
import ImageUpload from "./ImageUpload";
import { Button, Divider } from "@mui/material";

class EditAccount extends React.Component {
  //state to toggle the edit account form
  state = {
    beenClicked: false,
    showModal: false,
  };

  //action that gets user id when component mounts to make sure the user can edit their account
  componentDidMount() {
    this.props.getUser(this.props.userId);
  }

  //toggles state
  clickHandler = () => {
    this.setState({ beenClicked: !this.state.beenClicked });
  };

  //toggles state
  modalHandler = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <div className="edit-account">
        <div style={{ textAlign: "center" }}>
          {/* checks for user avatar and if not found uses stock avatar */}
          <img
            src={
              this.props.userObj.avatar
                ? this.props.userObj.avatar
                : "https://i.imgur.com/igyvLpE.jpg"
            }
            className="account-avatar"
            alt="profile avatar"
          />
          <br />
          <Button variant="contained" onClick={this.modalHandler}>
            Upload Picture
          </Button>
          <br />
          <br />
          <NavLink to={`/my-profile`}>
            <h3>View My Profile</h3>
          </NavLink>
        </div>
        <Divider orientation="vertical" flexItem sx={{ marginRight: "70px" }} />{" "}
        <div className="account-details">
          <h2>My Account</h2>
          {/* ternaries to display user information or edit form dependind on whether the edit form button was clicked and if user data has loaded */}
          {this.props.userObj.username ? (
            this.state.beenClicked ? (
              <>
                {/* If the edit button has been clicked the edit form will display */}
                <p>
                  <strong className="editable">Username:</strong> @
                  {this.props.userObj.username}
                </p>
                <br />
                <EditAccountForm clickHandler={this.clickHandler} />
                <br />
                <Button
                  variant="contained"
                  color="warning"
                  onClick={this.clickHandler}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                {/* If the edit button has not been clicked user information will display */}

                <p>
                  <strong className="editable">Username:</strong> @
                  {this.props.userObj.username}
                </p>
                <br />
                <p>
                  <strong className="editable">Name: </strong>
                  {this.props.userObj.name}
                </p>
                <br />
                <p>
                  <strong className="editable">Instagram:</strong>{" "}
                  {this.props.userObj.instagram}
                </p>
                <br />
                <p>
                  <strong className="editable">Bio:</strong>{" "}
                  <span className="account-bio">{this.props.userObj.bio}</span>
                </p>
                <br />
                <Button variant="contained" onClick={this.clickHandler}>
                  Edit
                </Button>
              </>
            )
          ) : (
            <h3>Loading...</h3>
          )}
          {/* <ToggleButton checked={this.state.beenClicked} onChange={this.clickHandler} onLabel="Cancel" offLabel="Edit" /> */}
          <br />
          {this.state.showModal ? (
            <ImageUpload cancelHandler={this.modalHandler} />
          ) : null}
        </div>
      </div>
    );
  }
}

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
