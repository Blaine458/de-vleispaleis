// Ensure lightningcss native bindings are installed on Linux
// This script only runs on Linux builds (like Vercel)
if (process.platform === 'linux' && process.arch === 'x64') {
  try {
    require('lightningcss-linux-x64-gnu');
    console.log('✓ lightningcss native bindings found');
  } catch (e) {
    console.log('Installing lightningcss native bindings for Linux x64...');
    const { execSync } = require('child_process');
    try {
      execSync('npm install lightningcss-linux-x64-gnu@^1.30.1 --no-save --ignore-scripts', { stdio: 'inherit' });
    } catch (installError) {
      console.warn('Warning: Could not install lightningcss native bindings:', installError.message);
      console.warn('This may cause build issues. The package should be installed via optionalDependencies.');
    }
  }
} else {
  // On non-Linux platforms, just skip
  console.log(`Skipping lightningcss native bindings install (platform: ${process.platform}, arch: ${process.arch})`);
}

