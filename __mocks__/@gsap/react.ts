export const useGSAP = jest.fn(
  (callback: () => void, _deps?: { scope?: React.RefObject<HTMLElement | null>; dependencies?: unknown[] }) => {
    // Execute the callback immediately in tests
    if (typeof callback === "function") {
      callback();
    }
  }
);
