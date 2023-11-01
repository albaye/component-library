import React, { ReactNode } from "react";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button"> // type utility that helps document the valid props for a <button> element to our TypeScript consumers
>(({ children, ...props }, ref) => {
  return (
    <button type="button" {...props} ref={ref}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
