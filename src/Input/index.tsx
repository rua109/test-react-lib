import React from "react";

export default function Input({ children, ...rest }: any) {
  return <input {...rest}>{children}</input>;
}
