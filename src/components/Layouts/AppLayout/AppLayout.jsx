import { Header } from "../Header/Header.jsx";
import { Content } from "../Content/Content.jsx";
import { Footer } from "../Footer/Footer.jsx";
import { RestaurantsList } from "../../RestaurantsList/RestaurantsList.jsx";

export function AppLayout() {
  return (
    <>
      <Header />
      <Content>
        <RestaurantsList />
      </Content>
      <Footer />
    </>
  );
}
