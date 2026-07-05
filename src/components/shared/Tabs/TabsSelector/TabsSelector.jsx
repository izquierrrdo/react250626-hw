import { Tab } from "../Tab/Tab.jsx";

export function TabsSelector({ tabs, activeTab, onTabChange }) {
  function handleTabChange(tabKey) {
    onTabChange(tabKey);
  }

  return (
    <div>
      {tabs.map(({ tabKey, tabValue }) => (
        <Tab
          key={tabKey}
          tabValue={tabValue}
          isActive={activeTab === tabKey}
          tabClickHandler={() => handleTabChange(tabKey)}
        />
      ))}
    </div>
  );
}
