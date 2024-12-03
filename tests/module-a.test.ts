import { moduleA } from '../src';

describe('Module A', () => {
  it('Submodule A1', () => {
    expect(moduleA.submoduleA1()).toBe('Hello from submodule A1');
  });

  it('Submodule A2', () => {
    expect(moduleA.submoduleA2()).toBe('Hello from submodule A2');
  });

  it('Submodule A3', () => {
    expect(moduleA.submoduleA3()).toBe('Hello from submodule A3');
  });
});
