const { execSync } = require('child_process');
const path = require('path');

try {
    // Get absolute path to package.json
    const packagePath = path.resolve(process.cwd(), 'package.json');
    
    // Get current version from package.json
    const packageJson = require(packagePath);
    const currentVersion = packageJson.version;
    
    console.log('Current version:', currentVersion);
    
    // Split version and increment patch
    const [major, minor, patch] = currentVersion.split('.');
    const newVersion = `${major}.${minor}.${Number(patch) + 1}`;
    
    console.log('New version:', newVersion);
    
    // Update version using npm version (without creating git tag)
    execSync(`npm version ${newVersion} --no-git-tag-version`);
    
    // Stage the modified files
    execSync('git add package.json');
    execSync('git add package-lock.json');
    
    console.log('Version bump completed successfully');
    process.exit(0);
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
} 