import React, { useEffect, useState } from "react";
import { useTransition, animated, config } from "react-spring";

// import PropTypes from "prop-types";

import "../../css/slide.css";

// images
const slides = [
  {
    id: 0,
    url: "g1Kr4Ozfoac",
    content: "같은 흥미, 같은 취미",
  },
  {
    id: 1,
    url: "KrfID_ZQxWs",
    content: "공부 혹은 놀이",
  },
  {
    id: 2,
    url: "hCb3lIB8L8E",
    content: "함께 만드는 시간",
  },
  {
    id: 3,
    url: "1K8pIbIrhkQ",
    content: "어서오세요. 그룹 활동 플랫폼 '하비스트'입니다.",
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
    () => void setInterval(() => setIndex((state) => (state + 1) % 4), 5000),
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
      <h3>{item.content}</h3>
    </animated.div>
  ));
};

export default MainSlider;
