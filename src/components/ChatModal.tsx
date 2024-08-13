import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Overlay = styled(motion.div)`
  position: fixed;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  height: min-content;
  // background: rgba(0, 0, 0, 0.8);
`;
const ModalContainer = styled(motion.div)`
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%);
  // border: 1px solid rgba(255, 255, 255, 1);
`;
const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  // position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
  z-index: 10;
  margin-bottom: 1em;
  margin-left: auto;
  background-color: white;
  padding: 0.2em;
  border-radius: 50px;
`;

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
const containerVariant = {
  // initial: { bottom: "-50%", transition: { type: "spring" } },
  // isOpen: { bottom: "160px", right: "40px", top: "40px" },
  // exit: { bottom: "-50%" },
};

interface Props {
  handleClose: () => void;
  children: React.ReactNode;
  isOpen: boolean;
}

const ChatModal: React.FC<Props> = ({ handleClose, children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={"initial"}
          animate={"isOpen"}
          exit={"exit"}
          variants={modalVariant}
          className="z-50 bottom-40 right-10 top-10"
        >
          <ModalContainer variants={containerVariant}>
            {/* <CloseButton
              onClick={handleClose}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.39 20.39"
            >
              <title>close</title>
              <line
                x1="19.39"
                y1="19.39"
                x2="1"
                y2="1"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <line
                x1="1"
                y1="19.39"
                x2="19.39"
                y2="1"
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </CloseButton> */}
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default ChatModal;
