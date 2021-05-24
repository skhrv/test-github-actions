const fs = require('fs');

// BEGIN
const upVersion = async (path, versionType = 'patch') => {
  const data = await fs.promises.readFile(path, 'utf-8');
  const packageJson = JSON.parse(data);
  const [major, minor, patch] = packageJson.version.split('.');
  let newVersion;
  switch (versionType) {
    case 'patch':
      newVersion = [major, minor, Number(patch) + 1].join('.');
      break;
    case 'minor':
      newVersion = [major, Number(minor) + 1, 0].join('.');
      break;
    case 'major':
      newVersion = [Number(major) + 1, 0, 0].join('.');
      break;
    default:
      throw new Error(`Unknown version argument ${versionType}`);
  }
  packageJson.version = newVersion;
  await fs.promises.writeFile(path, JSON.stringify(packageJson, null, 2));
};
// END

module.exports = { upVersion };
