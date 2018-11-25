import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import * as tabActions from "../actions/tabActions";
import Tab from "./Tab";

class Tabs extends Component {
  render() {
    const { activeTab, onClickTabItem, children } = this.props;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map(child => {
            const { label } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired
};

const mapStateToProps = state => {
  return {
    activeTab: state.activeTab_id
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      onClickTabItem: tabActions.setActive
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
