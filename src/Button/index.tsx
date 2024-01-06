import React from "react";

export default function Button({ children, ...rest }: any) {
  return <button {...rest}>{children}</button>;
}
