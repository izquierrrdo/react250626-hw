export function Tab({ tabValue, isActive, tabClickHandler }) {
  return (
    <button
      style={{ border: isActive ? "2px solid red" : "2px solid blue" }}
      onClick={tabClickHandler}
    >
      {tabValue}
    </button>
  );
}
