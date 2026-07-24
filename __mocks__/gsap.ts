const mockGsap = {
  to: jest.fn().mockReturnThis(),
  from: jest.fn().mockReturnThis(),
  fromTo: jest.fn().mockReturnThis(),
  set: jest.fn().mockReturnThis(),
  timeline: jest.fn().mockReturnValue({
    to: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    fromTo: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    add: jest.fn().mockReturnThis(),
    play: jest.fn().mockReturnThis(),
    pause: jest.fn().mockReturnThis(),
    resume: jest.fn().mockReturnThis(),
    reverse: jest.fn().mockReturnThis(),
    restart: jest.fn().mockReturnThis(),
    kill: jest.fn().mockReturnThis(),
    clear: jest.fn().mockReturnThis(),
  }),
  registerPlugin: jest.fn(),
  defaults: jest.fn(),
  config: jest.fn(),
  context: jest.fn().mockReturnValue({
    add: jest.fn(),
    revert: jest.fn(),
    kill: jest.fn(),
  }),
  matchMedia: jest.fn().mockReturnValue({
    add: jest.fn(),
    revert: jest.fn(),
  }),
  utils: {
    toArray: jest.fn((selector: string | Element | Element[]) => {
      if (typeof selector === "string") return [];
      if (Array.isArray(selector)) return selector;
      return [selector];
    }),
    clamp: jest.fn((min: number, max: number, value: number) =>
      Math.min(Math.max(value, min), max)
    ),
    mapRange: jest.fn(),
    pipe: jest.fn(),
    wrap: jest.fn(),
  },
};

export const ScrollTrigger = {
  create: jest.fn(),
  refresh: jest.fn(),
  update: jest.fn(),
  getAll: jest.fn().mockReturnValue([]),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  kill: jest.fn(),
  defaults: jest.fn(),
  scrollerProxy: jest.fn(),
  matchMedia: jest.fn(),
  batch: jest.fn(),
};

export const ScrollToPlugin = {};

export default mockGsap;
export { mockGsap as gsap };
