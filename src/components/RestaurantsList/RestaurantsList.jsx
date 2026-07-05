import Restaurant from "../Restaurant/Restaurant.jsx";

import { restaurants as restaurantsData } from "../../../materials/mock.js";
import Title from "../shared/Title.jsx";

export default function RestaurantsList() {
  return (
    <>
      <Title level={2}>Restaurants list</Title>
      {restaurantsData.map((item) => (
        <Restaurant key={item.id} restaurant={item} />
      ))}
    </>
  );
}
