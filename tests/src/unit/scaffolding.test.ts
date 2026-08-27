import { REALMFORGE_VERSION, DEFAULT_TICK_RATE, MS_PER_TICK } from '@realmforge/shared';

describe('Monorepo Scaffolding & Shared Core', () => {
  it('should define the correct version and tick constants', () => {
    expect(REALMFORGE_VERSION).toBe('1.0.0');
    expect(DEFAULT_TICK_RATE).toBe(20);
    expect(MS_PER_TICK).toBe(50);
  });
});
