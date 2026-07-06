import { MenuItem } from "../MenuItem/MenuItem.jsx";

export function Menu({ menu }) {
  return (
    <ul>
      {menu.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </ul>
  );
}
