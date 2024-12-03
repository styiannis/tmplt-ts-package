import { submoduleB1, submoduleB2, submoduleB3 } from '../src';

describe('Module B', () => {
  it('Submodule B1', () => {
    expect(submoduleB1()).toBe('Hello from submodule B1');
  });

  it('Submodule B2', () => {
    expect(submoduleB2()).toBe('Hello from submodule B2');
  });

  it('Submodule B3', () => {
    expect(submoduleB3()).toBe('Hello from submodule B3');
  });
});
