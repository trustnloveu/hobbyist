import React, { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";

import "../../css/slide.css";

// images
const slides = [
  {
    id: 0,
    url: "CwSiAVlXOWQ",
    content: "친구",
    className: "firstSub",
  },
  {
    id: 1,
    url: "eCktzGjC-iU",
    content: "모임",
    className: "secondSub",
  },
  {
    id: 2,
    url: "j3XiFJPF6Js",
    content: "배움",
    className: "thirdSub",
  },
  {
    id: 3,
    url: "h4i9G-de7Po",
    content: "나눔",
    className: "forthSub",
  },
];

const CategorySlider = () => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.default,
  });

  useEffect(
    () => void setInterval(() => setIndex((state) => (state + 1) % 4), 3000),
    []
  );

  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="category_slide"
      style={{
        ...props,
        backgroundImage: `url(https://source.unsplash.com/${item.url})`,
        backgroundColor: "pink",
      }}
    >
      {/* <div className={item.className}>{item.content}</div> */}
    </animated.div>
  ));
};

export default CategorySlider;
