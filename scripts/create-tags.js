const { execSync } = require('child_process');
const fs = require('fs');

// Get version from package.json
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const version = packageJson.version;

try {
    // Create version tag
    execSync(`git tag "v${version}"`);

    // Delete existing latest tag if it exists
    try {
        execSync('git tag -d "latest"');
        execSync('git push origin :refs/tags/latest');
    } catch (error) {
        // Tag doesn't exist, that's fine
    }

    // Create new latest tag
    execSync('git tag "latest"');

    // Force push the tags
    execSync('git push --tags -f');
    
    console.log(`Successfully created and pushed tags: v${version} and latest`);
} catch (error) {
    console.error('Error creating or pushing tags:', error.message);
    process.exit(1);
} 