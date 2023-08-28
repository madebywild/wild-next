/**
 * Checks whether a value is not null or undefined,
 * while preserving the type information.
 *
 * @param value The value to check.
 * @returns Whether the value is neither null nor undefined.
 */
export const nonNullable = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};
