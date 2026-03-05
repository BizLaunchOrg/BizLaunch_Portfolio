import React, { ReactNode } from "react";

export interface ButtonGroupProps {
  /** buttons or elements to render side-by-side */
  children: ReactNode;
  /** additional container classes */
  className?: string;
  /** spacing between buttons (Tailwind margin-x utility) */
  spacing?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className = "",
  spacing = "space-x-2",
}) => {
  return (
    <div className={`inline-flex items-center ${spacing} ${className}`}>
      {children}
    </div>
  );
};

export default ButtonGroup;
