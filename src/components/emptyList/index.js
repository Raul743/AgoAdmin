import React from "react";
import PropTypes from "prop-types";

export default function EmptyList({ component: Component, title }) {
  return (
    <div className="text-center pb-4">
      <span className="h1 text-muted">
        <i className="ni ni-app"></i>
      </span>
      <h2 className="text-muted">{title}</h2>
      <h4 className="text-muted">
        <Component />
      </h4>
    </div>
  );
}

/**
 * Default props
 */
EmptyList.defaultProps = {
  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
};

/**
 * Prop Types
 */
EmptyList.propTypes = {
  title: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
