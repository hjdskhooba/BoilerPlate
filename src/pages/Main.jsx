import Contacts from "../Sections/Contacts";
import Products from "../Sections/Products";
import Title from "../Sections/Title";
import About from "../Sections/About";
import Show from "../Sections/Show";

const Main = () => {
  return (
    <main>
      <Title />
      <About />
      <Products />
      <Show />
      <Contacts />
    </main>
  );
};

export default Main;
