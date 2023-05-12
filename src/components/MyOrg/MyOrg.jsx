import React, { useState } from 'react';
import './MyOrg.css';

const MyOrg = (props) => {
  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <img
        className="addBotton"
        src="/img/add.png"
        alt="add"
        onClick={props.handleShowForm}
      />
    </section>
  );
};

export default MyOrg;
