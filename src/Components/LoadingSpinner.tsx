import styled from "styled-components";
import { motion } from "framer-motion";

const Loader = styled(motion.svg)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  z-index: 2;

  .path {
    stroke: rgba(228, 192, 246, 0.8);
    stroke-linecap: round;
  }
`;

function LoadingSpinner() {
  return (
    <Loader
      viewBox="0 0 50 50"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 2,
        type: "linear",
        times: [0, 1],
        repeat: Infinity,
      }}
    >
      <motion.circle
        animate={{
          strokeDasharray: ["1, 150", "90, 150", "90, 150"],
          strokeDashoffset: [0, -35, -124],
        }}
        transition={{
          duration: 1.5,
          type: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
        }}
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      ></motion.circle>
    </Loader>
  );
}

export default LoadingSpinner;
