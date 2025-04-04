'use client';
import React, { useState} from "react";
import classes from "./toggle.module.css";

function ToggleStatus({isActive, onToggle, name}) {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onChange={()=>{onToggle(name)}} checked={isActive } />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  );
}

export default ToggleStatus;
