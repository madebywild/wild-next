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
  const payload: React.FC<React.SVGAttributes<SVGElement>>;
  export default payload;
}
