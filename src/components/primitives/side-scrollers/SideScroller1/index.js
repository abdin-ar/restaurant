import { useRef } from "react";
import Button from "../../buttons/Button";
import ArrowLeftCircle from "../../svgs/ArrowLeftCircle";
import ArrowRightCircle from "../../svgs/ArrowRightCircle";
import "./side-scroller-1.css";

const SideScroller1 = ({ items, card }) => {
  const Card = card;
  const containerRef = useRef();
  const getScrollWidth = () => {
    const cardWidth = containerRef.current.scrollWidth / items.length;
    const scrollWidth =
      containerRef.current.getBoundingClientRect().width -
      (containerRef.current.getBoundingClientRect().width % cardWidth);
    return scrollWidth;
  };

  const scrollPrev = (e) => {
    containerRef.current.style.scrollBehavior = "smooth";
    containerRef.current.scrollLeft -= getScrollWidth();
  };

  const scrollNext = (e) => {
    containerRef.current.style.scrollBehavior = "smooth";
    containerRef.current.scrollLeft += getScrollWidth();
  };

  return (
    <div className="side-scroller-1">
      <Button className="prev-next" onClick={scrollPrev}>
        <ArrowLeftCircle className="svg" />
      </Button>
      <div className="media-scroller snaps-inline" ref={containerRef}>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Button className="prev-next" onClick={scrollNext}>
        <ArrowRightCircle className="svg" />
      </Button>
    </div>
  );
};
export default SideScroller1;
