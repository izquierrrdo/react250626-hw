import { Restaurant } from "../Restaurant/Restaurant.jsx";
import { useState } from "react";
import { restaurants as restaurantsData } from "../../../materials/mock.js";
import { TabsSelector } from "../shared/Tabs/TabsSelector/TabsSelector.jsx";

export function RestaurantsList() {
  const [restaurantId, setRestaurantId] = useState(restaurantsData[0].id);

  function handleRestaurantChange(id) {
    setRestaurantId(id);
  }

  const restaurantsTabs = restaurantsData.map(({ id, name }) => {
    return { tabKey: id, tabValue: name };
  });

  return (
    <>
      <TabsSelector
        tabs={restaurantsTabs}
        onTabChange={(tabKey) => handleRestaurantChange(tabKey)}
      />
      <Restaurant
        restaurant={restaurantsData.find(({ id }) => {
          return id === restaurantId;
        })}
      />
    </>
  );
}
