import Title from "../shared/Title.jsx";
import Menu from "../Menu/Menu.jsx";

export default function Restaurant({ restaurant }) {
  return (
    <>
      <Title level={3}>{restaurant.name}</Title>
      <Title level={4}>Меню</Title>
      <Menu menu={restaurant.menu} />
      <hr />
    </>
  );
}
