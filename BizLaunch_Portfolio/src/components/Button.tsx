import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import type { ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    as?: React.ElementType;
}

const Button = ({ children, as: Component = 'button', ...props }: ButtonProps) => {
    return (
        <Component {...props}>
            {children}
        </Component>
    );
};

export default Button;