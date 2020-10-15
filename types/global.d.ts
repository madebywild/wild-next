declare module "*.css" {
  const payload: string;
  export default payload;
}

declare module "*.jpg" {
  const payload: string;
  export default payload;
}

declare module "*.png" {
  const payload: string;
  export default payload;
}

declare module "*.jpeg" {
  const payload: string;
  export default payload;
}

declare module "*.svg" {
  import React from "react";
  const payload: React.FC;
  export default payload;
}
