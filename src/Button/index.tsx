import React from "react";

export default function Button({ children, ...rest }: any) {
  console.log("random");
  return <button {...rest}>{children}</button>;
}
