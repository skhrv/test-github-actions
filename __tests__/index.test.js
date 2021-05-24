const fs = require('fs');
const path = require('path');
const { upVersion } = require('../src/index.js');

// BEGIN
const getFixturePath = () => path.resolve(__dirname, '..', '__fixtures__', 'package.json');

afterEach(async () => {
  fs.promises.writeFile(getFixturePath(), '{"version":"1.3.2"}');
});

describe('upVersion', () => {
  it.each([
    ['patch', '1.3.3'],
    ['minor', '1.4.0'],
    ['major', '2.0.0'],
  ])('update %s version', async (versionType, expected) => {
    await upVersion(getFixturePath(), versionType);
    const data = await fs.promises.readFile(getFixturePath(), 'utf-8');
    const packageJson = JSON.parse(data);
    expect(packageJson.version).toEqual(expected);
  });

  it('patch as default version argument', async () => {
    await upVersion(getFixturePath());
    const data = await fs.promises.readFile(getFixturePath(), 'utf-8');
    const packageJson = JSON.parse(data);
    expect(packageJson.version).toEqual('1.3.3');
  });

  it('throw error if version argument is invalid', async () => {
    await expect(async () => upVersion(getFixturePath(), 'any version')).rejects.toThrow();
  });
});
// END
