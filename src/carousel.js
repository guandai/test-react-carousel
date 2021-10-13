// ---------------------start test--------------------------

// import React from "react";

// const Carousel = ({ delay, children }) => {
//   return <div />;
// };

// or

// class Carousel extends React.Component {
//   render() {
//     return (
//       <div />
//     );
//   }
// }

// import React from "react";

// const Carousel = ({ delay, children }) => {
//   return <div>Carousel</div>;
// };

// export default Carousel;

//-------------------------my solution---------------------------

import React, { useEffect, useState } from "react";

const Carousel = ({ delay, children }) => {
  const [current, setCurrent] = useState(0);
  const [reset, setReset] = useState(false);
  // const [pause, setPause] = useState(false); //for stop autoplay

  useEffect(() => {
    const next = (current + 1) % children?.length;
    const interval = setInterval(() => {
      setCurrent(next);
    }, delay);
    return () => clearInterval(interval);
  }, [current]);

  //stop autoplay
  // useEffect(() => {
  //   // const next = (current + 1) % children.length;
  //   const next = current === children.length - 1 ? 0 : current + 1;
  //   const interval = setInterval(() => {
  //     setCurrent(next);
  //   }, delay);
  //   if (pause) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  //   }, [current, pause]);

  const onNextBtnClick = () => {
    if (!reset) {
      setCurrent(0);
      setReset(true);
      setTimeout(() => {
        setReset(false);
      }, 10000);
    }
    if (reset) {
      const next = current === children.length - 1 ? 0 : current + 1;
      setCurrent(next);
    }

    // setPause(true); //to stop autoplay
  };

  const onPreviousBtnClick = () => {
    if (!reset) {
      setCurrent(0);
      setReset(true);
      setTimeout(() => {
        setReset(false);
      }, 10000);
    }
    if (reset) {
      const prev = current === 0 ? children.length - 1 : current - 1;
      setCurrent(prev);
    }

    // setPause(true); //to stop autoplay
  };

  return children ? (
    <div className="carousel">
      <div className="current">{children[current]}</div>
      {children?.length < 2 ? null : (
        <div className="buttons">
          <button className="button-previous" onClick={onPreviousBtnClick}>
            Previous
          </button>
          <button className="button-next" onClick={onNextBtnClick}>
            Next
          </button>
        </div>
      )}
    </div>
  ) : null;
};
export default Carousel;
