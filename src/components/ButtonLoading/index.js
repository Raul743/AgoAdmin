import React from "react";
import PropTypes from "prop-types";
import Loading from "react-loading";

export default function ButtonLoading(props) {
  let text = props.text;

  // Verifying if the overText was defined
  if (props.isLoading && props.overText) {
    text = props.overText;
  }

  return (
    <button {...props} disabled={props.isLoading}>
      <div className="d-flex">
        {props.isLoading && (
          <Loading
            type={props.iconType}
            width={props.iconWidth}
            height={props.iconHeight}
            className={props.spaceBetweenIconAndText}
          />
        )}
        <span>{text}</span>
      </div>
    </button>
  );
}

/**
 * Default props
 */
ButtonLoading.defaultProps = {
  text: "Lorem ipsum",
  isLoading: false,
  iconWidth: 18,
  iconHeight: 18,
  spaceBetweenIconAndText: "mr-2",
  iconType: "spin",
};

/**
 * Prop Types
 */
ButtonLoading.propTypes = {
  text: PropTypes.string, // The text to show in button.
  isLoading: PropTypes.bool, // If true, show the icon load.
  iconWidth: PropTypes.number, // The width of the icon load.
  iconHeight: PropTypes.number, // The width of the icon load.
  spaceBetweenIconAndText: PropTypes.string, // The space between icon and text.
  iconType: PropTypes.string, // Type the icon that will be shown.
  overText: PropTypes.string, // If defined, replace the text of the button
};
