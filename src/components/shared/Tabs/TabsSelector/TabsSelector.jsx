import { Tab } from "../Tab/Tab.jsx";

export function TabsSelector({ tabs, onTabChange }) {
  function handleTabChange(tabKey) {
    onTabChange(tabKey);
  }

  return (
    <div>
      {tabs.map(({ tabKey, tabValue }) => (
        <Tab
          key={tabKey}
          tabValue={tabValue}
          tabClickHandler={() => handleTabChange(tabKey)}
        />
      ))}
    </div>
  );
}
