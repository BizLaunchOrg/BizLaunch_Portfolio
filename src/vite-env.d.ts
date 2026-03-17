/// <reference types="vite/client" />

declare module "*.svg" {
  import type { ComponentType, SVGProps } from "react";
  const content: ComponentType<SVGProps<SVGSVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}
