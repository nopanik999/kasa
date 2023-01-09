import { useState } from 'react';

import { Container, Navigation, Next, Position, Prev } from './style';

const Slider = ({ item }) => {
  const lastIndex = item.pictures.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload images
  item.pictures.forEach(pictureSrc => {
    const img = new Image();
    img.src = pictureSrc;
  });

  const handleClick = (positive = true) => {
    setCurrentIndex(prevValue => {
      if (positive === true) {
        if (prevValue === lastIndex) {
          return 0;
        }

        return prevValue + 1;
      }

      if (prevValue === 0) {
        return lastIndex;
      }

      return prevValue - 1;
    });
  };

  return (
    <Container image={item.pictures[currentIndex]}>
      <Navigation>
        <Prev onClick={() => handleClick(false)}></Prev>
        <Next onClick={() => handleClick()}></Next>
      </Navigation>
      <Position>
        {currentIndex + 1}/{lastIndex + 1}
      </Position>
    </Container>
  );
};

export default Slider;
