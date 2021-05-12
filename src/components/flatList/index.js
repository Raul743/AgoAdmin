import React from "react";
import PropTypes from "prop-types";

export default function FlatList({
  data,
  keyExtractor,
  renderItem: RenderItem,
}) {
  return (
    <>
      {data.map((item, index) => {
        let key = keyExtractor(item);
        return <RenderItem key={key} index={index} item={item} />;
      })}
    </>
  );
}

/**
 * Default Props
 */

/**
 * PropTypes
 */
FlatList.propTypes = {
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};
