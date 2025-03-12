const { execSync } = require('child_process');
const fs = require('fs');

// Get current version from package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const currentVersion = packageJson.version;

// Split version into major, minor, and patch
const [major, minor, patch] = currentVersion.split('.');

// Increment patch version
const newVersion = `${major}.${minor}.${Number(patch) + 1}`;

// Update package.json with new version
execSync(`npm version ${newVersion} --no-git-tag-version`);

// Stage the modified package.json
execSync('git add package.json'); 