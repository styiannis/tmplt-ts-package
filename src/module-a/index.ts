import submoduleA1 from './submodule-a1';
import { default as submoduleA2 } from './submodule-a2';
import { submoduleA3 } from './submodule-a3';

// Export "moduleA" as a composition of "submoduleA1", "submoduleA2" and "submoduleA3"
export const moduleA = { submoduleA1, submoduleA2, submoduleA3 };
