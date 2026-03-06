import React, {
  ButtonHTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes,
} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** content inside the button */
  children: ReactNode;
  /** additional Tailwind or custom classes */
  className?: string;
  /** if provided, renders as an anchor tag */
  href?: string;
}

const defaultClasses = "px-4 py-2 bg-gray-900";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  href,
  ...rest
}) => {
  if (href) {
    return (
      <a
        href={href}
        className={`${defaultClasses} ${className} inline-flex items-center justify-center`}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={`${defaultClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
