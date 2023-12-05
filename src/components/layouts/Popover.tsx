import { CommonLayoutAttributes } from "@/types";
import {
  FC,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

interface PopoverTriggerAttributes extends CommonLayoutAttributes {}

interface PopoverContentAttributes extends CommonLayoutAttributes {
  $zIndex?: number;
}

interface PopoverCloseAttributes extends CommonLayoutAttributes {}

interface PopoverComponent extends FC<CommonLayoutAttributes> {
  Trigger: FC<PopoverTriggerAttributes>;
  Content: FC<PopoverContentAttributes>;
  Close: FC<PopoverCloseAttributes>;
}

interface PopoverContextProps {
  isTriggered: boolean;
  setIsTriggered: React.Dispatch<React.SetStateAction<boolean>>;
  triggerHeight: number;
  setTriggerHeight: React.Dispatch<React.SetStateAction<number>>;
}

const PopoverContext = createContext<PopoverContextProps | null>(null);

const Popover: PopoverComponent = (props: CommonLayoutAttributes) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [isTriggered, setIsTriggered] = useState(false);
  const [triggerHeight, setTriggerHeight] = useState(0);

  const setOnOutsideClickListener = useCallback(
    (mouseEvent: MouseEvent | React.MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(mouseEvent.target as HTMLElement)
      ) {
        setIsTriggered(false);
      }
    },
    [isTriggered]
  );

  useEffect(() => {
    document.addEventListener("click", setOnOutsideClickListener);

    return () => {
      document.removeEventListener("click", setOnOutsideClickListener);
    };
  }, [setOnOutsideClickListener]);

  return (
    <PopoverContext.Provider
      value={{
        isTriggered: isTriggered,
        setIsTriggered: setIsTriggered,
        triggerHeight: triggerHeight,
        setTriggerHeight: setTriggerHeight,
      }}
    >
      <StyledPopoverWrapper className={props.className}>
        {props.children}
      </StyledPopoverWrapper>
    </PopoverContext.Provider>
  );
};

const PopoverTrigger = (props: PopoverTriggerAttributes) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setTriggerHeight, setIsTriggered } = useContext(PopoverContext)!;

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setTriggerHeight(ref.current?.clientHeight);
  }, []);
  return (
    <StyledPopoverTrigger
      ref={ref}
      className={props.className}
      onClick={() => {
        setIsTriggered(true);
      }}
    >
      {props.children}
    </StyledPopoverTrigger>
  );
};

const PopoverContent = (props: PopoverContentAttributes) => {
  const { isTriggered, triggerHeight } = useContext(PopoverContext)!;
  return (
    <>
      {isTriggered && (
        <StyledPopoverContent
          className={props.className}
          $triggerHeight={triggerHeight}
          $zIndex={props.$zIndex ?? 1}
        >
          {props.children}
        </StyledPopoverContent>
      )}
    </>
  );
};

const PopoverClose = (props: PopoverCloseAttributes) => {
  const { setIsTriggered } = useContext(PopoverContext)!;
  return (
    <StyledPopoverClose
      className={props.className}
      onClick={() => {
        setIsTriggered(false);
      }}
    >
      {props.children}
    </StyledPopoverClose>
  );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Close = PopoverClose;

export type {
  PopoverTriggerAttributes,
  PopoverContentAttributes,
  PopoverCloseAttributes,
};

export { Popover, PopoverTrigger, PopoverContent, PopoverClose };

const StyledPopoverWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const StyledPopoverTrigger = styled.div`
  width: fit-content;
  height: fit-content;
`;

const StyledPopoverContent = styled.div<{
  $triggerHeight: number;
  $zIndex: number;
}>`
  position: absolute;
  left: 0;
  top: ${({ $triggerHeight }) => ($triggerHeight ? $triggerHeight : 0)};
  z-index: ${({ $zIndex }) => $zIndex};
`;

const StyledPopoverClose = styled.div`
  width: fit-content;
  height: fit-content;
`;

export {
  StyledPopoverWrapper,
  StyledPopoverTrigger,
  StyledPopoverContent,
  StyledPopoverClose,
};
