import type { HTMLAttributes } from "react";
import type { ReactNode } from "react";

interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default ButtonGroup;