import React, { HTMLAttributes, ReactNode } from "react";

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** elements inside the group */
  children: ReactNode;
  /** Tailwind spacing utility (e.g. "space-x-4") */
  spacing?: string;
  /** additional Tailwind or custom classes */
  className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  spacing = "",
  className = "",
  ...rest
}) => {
  return (
    <div className={`${spacing} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default ButtonGroup;
