import React from "react";
import { StyledButton } from "./styles";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "secondary" | "primary" | "danger";
  size?: "small" | "medium" | "large";
  isFullWidth?: boolean;
}
export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
  // type utility that helps document the valid props for a <button> element to our TypeScript consumers
>(({ children, variant, size, isFullWidth, ...props }, ref) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      isFullWidth={isFullWidth}
      {...props}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
});

Button.displayName = "Button";
Button.defaultProps = {
  variant: "secondary",
  size: "medium",
  isFullWidth: false,
};
