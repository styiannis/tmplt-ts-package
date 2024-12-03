const { readFileSync, existsSync } = require('node:fs');

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

if (pkg.exports) {
  const invalidExports = Object.keys(pkg.exports).reduce((acc, curr) => {
    const imp = pkg.exports[curr].import;
    const req = pkg.exports[curr].require;

    if (undefined !== imp) {
      if (!existsSync(imp.types)) acc.push(imp.types);
      if (!existsSync(imp.default)) acc.push(imp.default);
    }

    if (undefined !== req) {
      if (!existsSync(req.types)) acc.push(req.types);
      if (!existsSync(req.default)) acc.push(req.default);
    }

    return acc;
  }, []);

  if (0 < invalidExports.length) {
    throw Error(
      `Found invalid export paths\n\n${invalidExports
        .map((path, i) => `[${i}] ${path}`)
        .join('\n')}\n`
    );
  }
}
