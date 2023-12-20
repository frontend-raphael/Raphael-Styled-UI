import { CommonComponentAttributes } from "@/types/component";

// T is Component Props Type
const propsMapper = <
  T extends CommonComponentAttributes,
  I extends Partial<T> & CommonComponentAttributes
>(
  defaultProps: T,
  inputProps: I
) => {
  const props = { ...defaultProps, ...inputProps };

  return props;
};

export default propsMapper;
