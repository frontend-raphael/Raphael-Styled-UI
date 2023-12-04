import { CommonLayoutAttributes } from "@/types";
import { propsMapper } from "@/utils";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface PopoverAttributes extends CommonLayoutAttributes {
  $zIndex?: number;
}

interface PopoverProps extends PopoverAttributes {
  trigger: React.ReactNode;
}

const defaultProps: PopoverProps = {
  trigger: <></>,
  $zIndex: 1,
  children: <></>,
  className: "",
};

const Popover = (props: PopoverProps) => {
  const { trigger, children, $zIndex, className } = propsMapper<
    PopoverProps,
    PopoverProps
  >(defaultProps, props);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
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
    if (!triggerRef.current) {
      return;
    }

    setTriggerHeight(triggerRef.current?.clientHeight);
  }, []);

  useEffect(() => {
    document.addEventListener("click", setOnOutsideClickListener);

    return () => {
      document.removeEventListener("click", setOnOutsideClickListener);
    };
  }, [setOnOutsideClickListener]);

  return (
    <PopoverWrapper ref={popoverRef} className={className}>
      <PopoverTrigger
        ref={triggerRef}
        onClick={() => {
          setIsTriggered(!isTriggered);
        }}
      >
        {trigger}
      </PopoverTrigger>
      {isTriggered && (
        <PopoverContent $triggerHeight={triggerHeight} $zIndex={$zIndex}>
          {children}
        </PopoverContent>
      )}
    </PopoverWrapper>
  );
};

export type { PopoverAttributes, PopoverProps };

export default Popover;

const PopoverWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
`;

const PopoverTrigger = styled.div``;

const PopoverContent = styled.div<{ $triggerHeight: number; $zIndex: number }>`
  position: absolute;
  left: 0;
  top: ${({ $triggerHeight }) => ($triggerHeight ? $triggerHeight : 0)};
  z-index: ${({ $zIndex }) => $zIndex};
`;

export { PopoverWrapper, PopoverTrigger, PopoverContent };
