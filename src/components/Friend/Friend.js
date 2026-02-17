import React from "react";
import PropTypes from "prop-types";

const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p>Status: {isOnline ? "Online" : "Offline"}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
