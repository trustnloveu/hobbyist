import React, { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";

import "../../css/slide.css";

// images
const slides = [
  {
    id: 0,
    url: "aaa",
    content: "친구",
  },
  {
    id: 1,
    url: "aaa",
    content: "모임",
  },
  {
    id: 2,
    url: "ccc",
    content: "배움",
  },
  {
    id: 3,
    url: "ddd",
    content: "나눔",
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
        backgroundImage: `url(https://images.unsplash.com/${item.url}&auto=format&fit=crop)`,
        backgroundColor: "pink",
      }}
    >
      <div>{item.content}</div>
    </animated.div>
  ));
};

export default CategorySlider;
