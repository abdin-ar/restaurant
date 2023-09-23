import Card1 from "../primitives/cards/Card1";
import Card2 from "../primitives/cards/Card2";
import Card3 from "../primitives/cards/Card3";
import SectionHeading from "../primitives/section-heading/SectionHeading";
import SideScroller1 from "../primitives/side-scrollers/SideScroller1";
import SideScroller2 from "../primitives/side-scrollers/SideScroller2";
import SideScroller3 from "../primitives/side-scrollers/SideScroller3";
import Banner from "../sections/home/Banner";
import LargeCards from "../sections/home/LargeCards";
import useGlobalContext from "../../context/context";

const Home = () => {
  const { state } = useGlobalContext();
  return (
    <>
      <Banner />
      <SectionHeading title="explore menu" icon="explore-menu" link="/menu" />
      <SideScroller1 items={state.explore} card={Card1} />
      <SectionHeading
        title="top deals"
        icon="top-deals"
        link="/menu?category=deals"
      />
      <SideScroller2
        items={[...state.menu].filter((item) =>
          item.categories.includes("deals")
        )}
        card={Card2}
      />
      <SectionHeading title="bestsellers" />
      <SideScroller3 items={state.bestsellers} card={Card3} />
      <LargeCards />
    </>
  );
};
export default Home;
