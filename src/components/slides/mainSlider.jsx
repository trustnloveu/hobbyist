import React, { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";

// import PropTypes from "prop-types";

import "../../css/slide.css";

// images
const slides = [
  {
    id: 0,
    url: "g1Kr4Ozfoac",
    content: "Slide 1",
    className: "firstMain",
  },
  {
    id: 1,
    url: "KrfID_ZQxWs",
    content: "Slide 2",
    className: "secondMain",
  },
  {
    id: 2,
    url: "hCb3lIB8L8E",
    content: "Slide 3",
    className: "thirdMain",
  },
  {
    id: 3,
    url: "1K8pIbIrhkQ",
    content: "Slide 4",
    className: "forthMain",
  },
];

// export component
const MainSlider = () => {
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
      className="main_slide"
      style={{
        ...props,
        backgroundImage: `url(https://source.unsplash.com/${item.url})`,
      }}
    >
      <h1>{item.content}</h1>
    </animated.div>
  ));
};

export default MainSlider;
