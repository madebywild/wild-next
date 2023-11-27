/**
 * Remove duplicate items from an array.
 *
 * @param array The array to dedupe.
 * @returns The deduped array.
 */
export const dedupe = <T extends unknown>(a: T[]): T[] => [...new Set(a)];

/**
 * Return the first item in an array.
 *
 * @param array The array.
 * @returns The first item in the array.
 */
export const takeFirst = <T extends unknown>(a: T[]): T | undefined => a[0];

/**
 * Return the last item in an array.
 *
 * @param array The array.
 * @returns The last item in the array.
 */
export const takeLast = <T extends unknown>(a: T[]): T | undefined => a[a.length - 1];

/**
 * Check if a value is not `null` or `undefined`.
 *
 * @param value The value to check.
 * @returns Whether the value is not `null` or `undefined`.
 */
export const nonNullable = <T extends unknown>(v: T): v is NonNullable<T> => v !== null && v !== undefined;

/**
 * Immediately run a function and return its result.
 * Can be used as an `IIFE` or a `do` expression.
 * @see https://maxgreenwald.me/blog/do-more-with-run
 *
 * @example
 * // Conditionally assign a value.
 * // Useful to avoid temporary variable assignments.
 * const fooBar = run(() => {
 *  return someCondition() ? "foo" : "bar";
 * });
 *
 * // Top-level await.
 * const fooBar = run(async () => {
 *  const res = await fetch("https://example.com");
 *  return res.json();
 * });
 *
 * // Avoid nested ternaries in JSX.
 * <div>
 *   {run(() => {
 *     if (status === "loading") return <LoadingPage />
 *     if (status === "signed-out") return <SignUpPage />
 *     if (status === "onboarding") return <OnboardingPage />
 *
 *     return <DashboardPage user={user} />
 *   })}
 * </div>
 *
 * @param fn The function to run.
 * @returns The return value of the function.
 */
export const run = <T>(fn: () => T): T => fn();
