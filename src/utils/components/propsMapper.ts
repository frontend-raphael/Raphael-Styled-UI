import { CommonComponentProps } from "@/types/component";

// T is Component Props Type
const propsMapper = <T>(
  defaultProps: CommonComponentProps,
  inputProps: CommonComponentProps
) => {
  const props = { ...defaultProps, ...inputProps };

  return props as T;
};

export default propsMapper;
