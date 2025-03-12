const fs = require('fs');
const { execSync } = require('child_process');

try {
    // Read package.json
    const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    const currentVersion = packageJson.version;
    
    console.log('Current version:', currentVersion);
    
    // Split version and increment patch
    const [major, minor, patch] = currentVersion.split('.');
    const newVersion = `${major}.${minor}.${Number(patch) + 1}`;
    
    console.log('New version:', newVersion);
    
    // Update package.json
    packageJson.version = newVersion;
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2) + '\n');
    
    // Stage the modified files
    execSync('git add package.json');
    execSync('git add package-lock.json');
    
    console.log('Version bump completed successfully');
    process.exit(0);
} catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
} 