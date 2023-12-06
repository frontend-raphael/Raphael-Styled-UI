import { CommonLayoutAttributes } from "@/types";
import { FC, createContext, useContext, useState } from "react";
import styled from "styled-components";

interface ModalTriggerAttributes extends CommonLayoutAttributes {}

interface ModalContentAttributes extends CommonLayoutAttributes {
  $zIndex?: number;
  isCancelable?: boolean;
}

interface ModalCloseAttributes extends CommonLayoutAttributes {}

interface ModalComponent extends FC<CommonLayoutAttributes> {
  Trigger: FC<ModalTriggerAttributes>;
  Content: FC<ModalContentAttributes>;
  Close: FC<ModalCloseAttributes>;
}

interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextProps | null>(null);

const Modal: ModalComponent = (props: CommonLayoutAttributes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{ isModalOpen: isModalOpen, setIsModalOpen: setIsModalOpen }}
    >
      <StyledModalWrapper>{props.children}</StyledModalWrapper>
    </ModalContext.Provider>
  );
};

// todo Portal용 추가

const ModalTrigger = (props: ModalTriggerAttributes) => {
  const { setIsModalOpen } = useContext(ModalContext)!;

  return (
    <StyledModalTrigger
      onClick={() => {
        setIsModalOpen(true);
      }}
      className={props.className}
    >
      {props.children}
    </StyledModalTrigger>
  );
};

const ModalContent = (props: ModalContentAttributes) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)!;

  return (
    <>
      {isModalOpen && (
        <StyledModalBackground
          onClick={() => {
            if (props.isCancelable) {
              setIsModalOpen(false);
            }
          }}
          $zIndex={props.$zIndex}
          className={props.className}
        >
          <StyledModalContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {props.children}
          </StyledModalContent>
        </StyledModalBackground>
      )}
    </>
  );
};

const ModalClose = (props: ModalCloseAttributes) => {
  const { setIsModalOpen } = useContext(ModalContext)!;

  return (
    <StyledModalClose
      onClick={() => {
        setIsModalOpen(false);
      }}
      className={props.className}
    >
      {props.children}
    </StyledModalClose>
  );
};

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Close = ModalClose;

export type {
  ModalTriggerAttributes,
  ModalContentAttributes,
  ModalCloseAttributes,
};

export { Modal, ModalTrigger, ModalContent, ModalClose };

const StyledModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`;

const StyledModalBackground = styled.div<ModalContentAttributes>`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${({ $zIndex }) => $zIndex ?? 20};
  width: 100vw;
  height: 100vh;
`;

const StyledModalTrigger = styled.div`
  width: fit-content;
  height: fit-content;
`;

const StyledModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
`;

const StyledModalClose = styled.div`
  width: fit-content;
  height: fit-content;
`;

export {
  StyledModalWrapper,
  StyledModalBackground,
  StyledModalTrigger,
  StyledModalContent,
  StyledModalClose,
};
