import { defaultPalette } from "@/resources";
import {
  CommonLayoutAttributes,
  Position,
  RaphaelColor,
  RaphaelSize,
} from "@/types";
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

interface DropdownAttributes extends CommonLayoutAttributes {}

interface DropdownTriggerAttributes extends CommonLayoutAttributes {}

interface DropdownContentAttributes extends CommonLayoutAttributes {
  $zIndex?: number;
  $maxHeight?: RaphaelSize;
}

interface DropdownItemAttributes extends CommonLayoutAttributes {}

interface DropdownSubAttributes extends CommonLayoutAttributes {}

interface DropdownSubTriggerAttributes extends CommonLayoutAttributes {}

interface DropdownSubContentAttributes extends CommonLayoutAttributes {
  $zIndex?: number;
}

interface DropdownSubItemAttributes extends CommonLayoutAttributes {}

interface DropdownSeparatorAttributes
  extends Pick<CommonLayoutAttributes, "className"> {
  $separatorWidth?: RaphaelSize;
  $separatorColor?: RaphaelColor;
}

interface DropdownComponent extends FC<DropdownAttributes> {
  Trigger: FC<DropdownTriggerAttributes>;
  Content: FC<DropdownContentAttributes>;
  Item: FC<DropdownItemAttributes>;
  Sub: FC<DropdownSubAttributes>;
  SubTrigger: FC<DropdownSubTriggerAttributes>;
  SubContent: FC<DropdownSubContentAttributes>;
  SubItem: FC<DropdownSubItemAttributes>;
  Separator: FC<DropdownSeparatorAttributes>;
}

interface DropdownContextProps {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  subTriggerArea: [number, number];
  setSubTriggerArea: React.Dispatch<React.SetStateAction<[number, number]>>;
  subContentPosition: Position;
  setSubContentPosition: React.Dispatch<React.SetStateAction<Position>>;
  isSubContentOpen: boolean;
  setIsSubContentOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextProps | null>(null);

const Dropdown: DropdownComponent = (props: DropdownAttributes) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Trigger Area first left, second right
  const [subTriggerArea, setSubTriggerArea] = useState<[number, number]>([
    0, 0,
  ]);
  const [subContentPosition, setSubContentPosition] = useState<Position>({
    xPos: 0,
    yPos: 0,
  });
  const [isSubContentOpen, setIsSubContentOpen] = useState(false);

  const setOnOutsideClickListener = useCallback(
    (mouseEvent: MouseEvent | React.MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(mouseEvent.target as HTMLElement)
      ) {
        setIsDropdownOpen(false);
      }
    },
    [isDropdownOpen]
  );

  useEffect(() => {
    document.addEventListener("click", setOnOutsideClickListener);

    return () => {
      document.removeEventListener("click", setOnOutsideClickListener);
    };
  }, [setOnOutsideClickListener]);

  return (
    <DropdownContext.Provider
      value={{
        isDropdownOpen: isDropdownOpen,
        setIsDropdownOpen: setIsDropdownOpen,
        subTriggerArea: subTriggerArea,
        setSubTriggerArea: setSubTriggerArea,
        subContentPosition: subContentPosition,
        setSubContentPosition: setSubContentPosition,
        isSubContentOpen: isSubContentOpen,
        setIsSubContentOpen: setIsSubContentOpen,
      }}
    >
      <StyledDropdownWrapper ref={ref} className={props.className}>
        {props.children}
      </StyledDropdownWrapper>
    </DropdownContext.Provider>
  );
};

const DropdownTrigger = (props: DropdownTriggerAttributes) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isDropdownOpen, setIsDropdownOpen } = useContext(DropdownContext)!;

  return (
    <StyledDropdownTrigger
      ref={ref}
      className={props.className}
      onClick={() => {
        setIsDropdownOpen(!isDropdownOpen);
      }}
    >
      {props.children}
    </StyledDropdownTrigger>
  );
};

const DropdownContent = (props: DropdownContentAttributes) => {
  const { isDropdownOpen } = useContext(DropdownContext)!;

  return (
    <>
      {isDropdownOpen && (
        <StyledDropdownContent
          $zIndex={props.$zIndex ?? 1}
          $maxHeight={props.$maxHeight ?? "300px"}
          className={props.className}
        >
          {props.children}
        </StyledDropdownContent>
      )}
    </>
  );
};

const DropdownItem = (props: DropdownItemAttributes) => {
  const { setIsSubContentOpen, setIsDropdownOpen } =
    useContext(DropdownContext)!;

  return (
    <StyledDropdownItem
      className={props.className}
      onClick={() => {
        setIsSubContentOpen(false);
        setIsDropdownOpen(false);
      }}
      onMouseOver={() => {
        setIsSubContentOpen(false);
      }}
    >
      {props.children}
    </StyledDropdownItem>
  );
};

const DropdownSub = (props: DropdownSubAttributes) => {
  return (
    <StyledDropdownSub className={props.className}>
      {props.children}
    </StyledDropdownSub>
  );
};

const DropdownSubTrigger = (props: DropdownSubTriggerAttributes) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setSubContentPosition, setIsSubContentOpen, setSubTriggerArea } =
    useContext(DropdownContext)!;

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    setSubTriggerArea([
      ref.current.getBoundingClientRect().left,
      ref.current.getBoundingClientRect().right,
    ]);
  }, []);

  return (
    <StyledDropdownSubTrigger
      ref={ref}
      className={props.className}
      onMouseOver={() => {
        if (!ref.current) {
          return;
        }

        setSubContentPosition({
          xPos: ref.current.getBoundingClientRect().right,
          yPos: ref.current.getBoundingClientRect().top,
        });
        setIsSubContentOpen(true);
      }}
    >
      {props.children}
    </StyledDropdownSubTrigger>
  );
};

const DropdownSubContent = (props: DropdownSubContentAttributes) => {
  const ref = useRef<HTMLDivElement>(null);
  const {
    subContentPosition,
    isSubContentOpen,
    subTriggerArea,
    setIsSubContentOpen,
  } = useContext(DropdownContext)!;

  const setOnBlurSubContent = useCallback(
    (mouseEvent: MouseEvent | React.MouseEvent) => {
      if (
        subTriggerArea[0] <= mouseEvent.clientX &&
        mouseEvent.clientX <= subTriggerArea[1]
      ) {
        return;
      }

      if (
        ref.current &&
        !ref.current.contains(mouseEvent.target as HTMLElement)
      ) {
        setIsSubContentOpen(false);
      }
    },
    [isSubContentOpen]
  );

  useEffect(() => {
    document.addEventListener("mouseover", setOnBlurSubContent);

    return () => {
      document.removeEventListener("mouseover", setOnBlurSubContent);
    };
  }, [setOnBlurSubContent]);

  return (
    <>
      {isSubContentOpen && (
        <StyledDropdownSubContent
          ref={ref}
          $zIndex={props.$zIndex ?? 1}
          $subContentLeft={subContentPosition.xPos}
          $subContentTop={subContentPosition.yPos}
          className={props.className}
        >
          {props.children}
        </StyledDropdownSubContent>
      )}
    </>
  );
};

const DropdownSubItem = (props: DropdownItemAttributes) => {
  const { setIsDropdownOpen, setIsSubContentOpen } =
    useContext(DropdownContext)!;

  return (
    <StyledDropdownSubItem
      onClick={() => {
        setIsSubContentOpen(false);
        setIsDropdownOpen(false);
      }}
      className={props.className}
    >
      {props.children}
    </StyledDropdownSubItem>
  );
};

const DropdownSeparator = (props: DropdownSeparatorAttributes) => {
  return (
    <StyledDropdownSeparator
      $separatorWidth={props.$separatorWidth}
      $separatorColor={props.$separatorColor}
      className={props.className}
    ></StyledDropdownSeparator>
  );
};

export type {
  DropdownAttributes,
  DropdownTriggerAttributes,
  DropdownContentAttributes,
  DropdownItemAttributes,
  DropdownSubAttributes,
  DropdownSubTriggerAttributes,
  DropdownSubContentAttributes,
  DropdownSubItemAttributes,
  DropdownSeparatorAttributes,
};

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownSubItem,
  DropdownSeparator,
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Content = DropdownContent;
Dropdown.Item = DropdownItem;
Dropdown.Sub = DropdownSub;
Dropdown.SubTrigger = DropdownSubTrigger;
Dropdown.SubContent = DropdownSubContent;
Dropdown.SubItem = DropdownSubItem;
Dropdown.Separator = DropdownSeparator;

const StyledDropdownWrapper = styled.div<DropdownAttributes>`
  width: fit-content;
  height: fit-content;
  box-sizing: border-box;
`;

const StyledDropdownTrigger = styled.div`
  width: fit-content;
  height: fit-content;
`;

const StyledDropdownContent = styled.div<{
  $zIndex: number;
  $maxHeight: RaphaelSize;
}>`
  width: fit-content;
  height: fit-content;
  z-index: ${({ $zIndex }) => $zIndex ?? 1};
  max-height: ${({ $maxHeight }) => $maxHeight ?? `300px`};
  overflow-y: scroll;
`;

const StyledDropdownItem = styled.div`
  height: fit-content;
`;

const StyledDropdownSub = styled.div`
  width: fit-content;
  height: fit-content;
`;

const StyledDropdownSubTrigger = styled.div`
  width: fit-content;
  height: fit-content;
`;

const StyledDropdownSubContent = styled.div<{
  $zIndex: number;
  $subContentLeft: number;
  $subContentTop: number;
}>`
  width: fit-content;
  height: fit-content;
  position: fixed;
  left: ${({ $subContentLeft }) => $subContentLeft ?? 0}px;
  top: ${({ $subContentTop }) => $subContentTop ?? 0}px;
  z-index: ${({ $zIndex }) => $zIndex};
`;

const StyledDropdownSubItem = styled.div`
  height: fit-content;
`;

const StyledDropdownSeparator = styled.div<DropdownSeparatorAttributes>`
  width: 100%;
  border: ${({ $separatorWidth }) => $separatorWidth ?? "1px"} solid
    ${({ $separatorColor }) => $separatorColor ?? defaultPalette.borderColor};
  margin: 4px 0;
`;

export {
  StyledDropdownWrapper,
  StyledDropdownTrigger,
  StyledDropdownContent,
  StyledDropdownItem,
  StyledDropdownSub,
  StyledDropdownSubTrigger,
  StyledDropdownSubContent,
  StyledDropdownSubItem,
  StyledDropdownSeparator,
};
