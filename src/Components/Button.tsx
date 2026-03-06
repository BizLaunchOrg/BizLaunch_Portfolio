import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** content inside the button */
  children: ReactNode;
  /** additional Tailwind or custom classes */
  className?: string;
}

const defaultClasses =
  "px-4 py-2  bg-gray-900  focus:outline-none focus:ring-2 focus:ring-blue-500";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <button className={`${defaultClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
