import React from "react";

export default function Button({ children, ...rest }: any) {
  console.log("tada");
  return <button {...rest}>{children}</button>;
}
