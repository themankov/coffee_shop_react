import React from 'react';
const LinkItem = ({ item, state, onToggleSelected }) => {
  let onToggle = async (id) => {
    await onToggleSelected(id);
  };
  console.log(state);
  return (
    <div
      id={item.id}
      className={
        state.activeLink === item.id
          ? 'filter-form-item active'
          : 'filter-form-item'
      }
      onClick={() => {
        onToggle(item.id);
      }}
    >
      {item.name}
    </div>
  );
};
export default LinkItem;
