/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ThumbnailIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ThumbnailIcon(props: ThumbnailIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"20"} cy={"20"} r={"20"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default ThumbnailIcon;
/* prettier-ignore-end */
