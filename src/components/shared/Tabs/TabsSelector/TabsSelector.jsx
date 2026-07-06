import { Tab } from "../Tab/Tab.jsx";

export function TabsSelector({ tabs, activeTab, onTabChange }) {
  return (
    <div>
      {tabs.map(({ tabKey, tabValue }) => (
        <Tab
          key={tabKey}
          tabValue={tabValue}
          isActive={activeTab === tabKey}
          tabClickHandler={() => onTabChange(tabKey)}
        />
      ))}
    </div>
  );
}
