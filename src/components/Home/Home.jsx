import { Nav, Header, Feed, Cards, News, Footer } from "../../components";
import { useState } from "react";
import LeftMenu from "../Nav/LeftMenu";

const Home = () => {
  const [showLeftMenu, setShowLeftMenu] = useState(false);
  return (
    <div style={{ backgroundColor: "rgb(250, 252, 255)" }}>
      <Nav setShowLeftMenu={setShowLeftMenu} />
      {showLeftMenu && <LeftMenu setShowLeftMenu={setShowLeftMenu} />}
      <Header />
      <Feed />
      <Cards />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
