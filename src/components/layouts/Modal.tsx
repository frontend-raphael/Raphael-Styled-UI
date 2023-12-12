import { CommonLayoutAttributes } from "@/types";
import {
  FC,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

interface ModalTriggerAttributes extends CommonLayoutAttributes {}

interface ModalBackgroundAttributes extends CommonLayoutAttributes {
  isCancelable?: boolean;
}
interface ModalContentAttributes extends CommonLayoutAttributes {
  $zIndex?: number;
}

interface ModalCloseAttributes extends CommonLayoutAttributes {}

interface ModalComponent extends FC<CommonLayoutAttributes> {
  Trigger: FC<ModalTriggerAttributes>;
  InsideTrigger: FC<ModalTriggerAttributes>;
  Background: FC<ModalBackgroundAttributes>;
  InsideBackground: FC<ModalBackgroundAttributes>;
  Content: FC<ModalContentAttributes>;
  Close: FC<ModalCloseAttributes>;
  InsideClose: FC<ModalCloseAttributes>;
}

interface ModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isInsideOpen: boolean;
  setIsInsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextProps | null>(null);

const Modal: ModalComponent = (props: CommonLayoutAttributes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInsideOpen, setIsInsideOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        isModalOpen: isModalOpen,
        setIsModalOpen: setIsModalOpen,
        isInsideOpen: isInsideOpen,
        setIsInsideOpen: setIsInsideOpen,
      }}
    >
      <StyledModalWrapper id="modal-root">{props.children}</StyledModalWrapper>
    </ModalContext.Provider>
  );
};

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

const ModalInsideTrigger = (props: ModalTriggerAttributes) => {
  const { setIsInsideOpen } = useContext(ModalContext)!;

  return (
    <StyledModalTrigger
      onClick={() => {
        setIsInsideOpen(true);
      }}
      className={props.className}
    >
      {props.children}
    </StyledModalTrigger>
  );
};

const ModalBackground = (props: ModalBackgroundAttributes) => {
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
          className={props.className}
        >
          {props.children}
        </StyledModalBackground>
      )}
    </>
  );
};

const ModalInsideBackground = (props: ModalBackgroundAttributes) => {
  const { isInsideOpen, setIsInsideOpen } = useContext(ModalContext)!;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");

    if (isInsideOpen && modalRoot) {
      modalRoot.appendChild(ref.current!);
    }

    return () => {
      if (ref.current && ref.current.parentNode) {
        ref.current.parentNode.removeChild(ref.current);
      }
    };
  }, [isInsideOpen]);

  {
    /*https://velog.io/@ansrjsdn/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0-React-DOMException-Failed-to-execute-removeChild-on-Node-The-node-to-be-removed-is-not-a-child-of-this-node */
    /*Fragment를 쓰면 DOM에 아무것도 추가하지 않기에  Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node 발생*/
  }

  return (
    <div ref={ref}>
      {isInsideOpen && (
        <StyledModalBackground
          id="modal-inside-background"
          onClick={() => {
            if (props.isCancelable) {
              setIsInsideOpen(false);
            }
          }}
          className={props.className}
        >
          {props.children}
        </StyledModalBackground>
      )}
    </div>
  );
};

const ModalContent = (props: ModalContentAttributes) => {
  return (
    <StyledModalContent
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {props.children}
    </StyledModalContent>
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

const ModalInsideClose = (props: ModalCloseAttributes) => {
  const { setIsInsideOpen } = useContext(ModalContext)!;

  return (
    <StyledModalClose
      onClick={() => {
        setIsInsideOpen(false);
      }}
      className={props.className}
    >
      {props.children}
    </StyledModalClose>
  );
};

Modal.Trigger = ModalTrigger;
Modal.InsideTrigger = ModalInsideTrigger;
Modal.Background = ModalBackground;
Modal.InsideBackground = ModalInsideBackground;
Modal.Content = ModalContent;
Modal.Close = ModalClose;
Modal.InsideClose = ModalInsideClose;

export type {
  ModalTriggerAttributes,
  ModalContentAttributes,
  ModalCloseAttributes,
};

export {
  Modal,
  ModalTrigger,
  ModalInsideTrigger,
  ModalBackground,
  ModalInsideBackground,
  ModalContent,
  ModalClose,
  ModalInsideClose,
};

const StyledModalWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
`;

const StyledModalBackground = styled.div<ModalBackgroundAttributes>`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;

const StyledModalTrigger = styled.div`
  width: fit-content;
  height: fit-content;
`;

const StyledModalContent = styled.div<ModalContentAttributes>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  height: fit-content;
  z-index: ${({ $zIndex }) => $zIndex ?? 20};
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
