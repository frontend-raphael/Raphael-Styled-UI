import { CommonComponentProps } from "@/types/component";

// T is Component Props Type
const propsMapper = <
  T extends CommonComponentProps,
  I extends Partial<T> & CommonComponentProps
>(
  defaultProps: T,
  inputProps: I
) => {
  const props = { ...defaultProps, ...inputProps };

  return props;
};

export default propsMapper;
