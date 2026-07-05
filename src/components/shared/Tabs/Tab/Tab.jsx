export function Tab({ tabValue, tabClickHandler }) {
  return <button onClick={tabClickHandler}>{tabValue}</button>;
}
