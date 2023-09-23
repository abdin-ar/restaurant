import { useRef } from "react";
import Button from "../../buttons/Button";
import "./side-scroller-2.css";

const SideScroller2 = ({ items, card }) => {
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
    <div className="side-scroller-2">
      <Button className="prev" onClick={scrollPrev}>
        <i className="fas fa-arrow-left"></i>
      </Button>
      <div className="media-scroller-2 snaps-inline" ref={containerRef}>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <Button className="next" onClick={scrollNext}>
        <i className="fas fa-arrow-right"></i>
      </Button>
    </div>
  );
};
export default SideScroller2;
