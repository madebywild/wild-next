import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

// @ts-ignore
const { theme } = resolveConfig(tailwindConfig);

export { theme };
