import Title from "../shared/Title/Title.jsx";
import Menu from "../Menu/Menu.jsx";

export default function Restaurant({ restaurant }) {
  return (
    <>
      <Title level={3}>{restaurant.name}</Title>
      {restaurant.menu && <Title level={4}>Меню</Title>}
      {restaurant.menu && <Menu menu={restaurant.menu} />}
    </>
  );
}
