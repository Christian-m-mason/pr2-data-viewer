import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeEmail } from "../actions";

function Home({ email, changeEmail }) {
  return (
    <div className="App">
      <div>{email}</div>
      <input onChange={e => changeEmail(e.target.value)}></input>
    </div>
  );
}

const mapStateToProps = state => {
  const { profile } = state;
  return { email: profile.email };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeEmail }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
