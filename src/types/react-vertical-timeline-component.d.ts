declare module "react-vertical-timeline-component" {
  import React from "react";

  export interface VerticalTimelineProps {
    children?: React.ReactNode;
    layout?: "1-column" | "2-columns";
    lineColor?: string;
  }

  export interface VerticalTimelineElementProps {
    children?: React.ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string;
    dateClassName?: string;
    icon?: React.ReactNode;
    iconClassName?: string;
    iconStyle?: React.CSSProperties;
    position?: "left" | "right";
    textClassName?: string;
    [key: string]: any;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}

declare module "react-vertical-timeline-component/style.min.css";
