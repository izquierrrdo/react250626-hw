import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { useState } from "react";
import { restaurants as restaurantsData } from "../../../materials/mock.js";
import { TabsSelector } from "../shared/Tabs/TabsSelector/TabsSelector.jsx";

const getActiveRestaurant = (restaurants, activeId) =>
  restaurants.find(({ id }) => id === activeId);

export function RestaurantsList() {
  const [restaurantId, setRestaurantId] = useState(restaurantsData[0].id);

  const restaurantsTabs = restaurantsData.map(({ id, name }) => {
    return { tabKey: id, tabValue: name };
  });

  return (
    <>
      <TabsSelector
        tabs={restaurantsTabs}
        activeTab={restaurantId}
        onTabChange={(tabKey) => setRestaurantId(tabKey)}
      />
      <Restaurant
        restaurant={getActiveRestaurant(restaurantsData, restaurantId)}
      />
    </>
  );
}
