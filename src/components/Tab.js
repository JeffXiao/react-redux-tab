import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  render() {
    const { activeTab, label, onClick } = this.props;
    return (
      <li
        className={`tab-list-item ${
          activeTab === label ? "tab-list-active" : ""
        }`}
        onClick={() => onClick(label)}
      >
        {label}
      </li>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Tab;
