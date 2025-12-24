// Ensure native bindings are installed on Linux for Tailwind CSS v4
// This script only runs on Linux builds (like Vercel)
if (process.platform === 'linux' && process.arch === 'x64') {
  const { execSync } = require('child_process');
  let needsInstall = false;
  const packagesToInstall = [];

  // Check lightningcss native bindings
  try {
    require('lightningcss-linux-x64-gnu');
    console.log('✓ lightningcss native bindings found');
  } catch (e) {
    console.log('⚠ lightningcss native bindings missing');
    packagesToInstall.push('lightningcss-linux-x64-gnu@^1.30.1');
    needsInstall = true;
  }

  // Check @tailwindcss/oxide native bindings
  try {
    require('@tailwindcss/oxide-linux-x64-gnu');
    console.log('✓ @tailwindcss/oxide native bindings found');
  } catch (e) {
    console.log('⚠ @tailwindcss/oxide native bindings missing');
    packagesToInstall.push('@tailwindcss/oxide-linux-x64-gnu@4.1.13');
    needsInstall = true;
  }

  // Install missing packages
  if (needsInstall) {
    console.log('Installing missing native bindings for Linux x64...');
    try {
      const installCmd = `npm install ${packagesToInstall.join(' ')} --no-save --ignore-scripts`;
      execSync(installCmd, { stdio: 'inherit' });
      console.log('✓ Native bindings installed successfully');
    } catch (installError) {
      console.error('❌ Error installing native bindings:', installError.message);
      console.error('This will cause build failures. Please ensure optional dependencies are installed.');
      process.exit(1);
    }
  }
} else {
  // On non-Linux platforms, just skip
  console.log(`Skipping native bindings install (platform: ${process.platform}, arch: ${process.arch})`);
}

