/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EpSuccessFilledIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EpSuccessFilledIcon(props: EpSuccessFilledIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 93 93"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M46.5 5.813a40.687 40.687 0 110 81.374 40.687 40.687 0 010-81.374zm-5.069 48.714l-9.038-9.044a3.491 3.491 0 00-5.957 2.467 3.49 3.49 0 001.022 2.468l11.509 11.508a3.477 3.477 0 004.935 0L67.733 38.09a3.488 3.488 0 10-4.929-4.934l-21.373 21.37z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EpSuccessFilledIcon;
/* prettier-ignore-end */
