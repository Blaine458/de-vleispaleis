// Ensure native bindings are installed for Tailwind CSS v4 (lightningcss + @tailwindcss/oxide)
const { execSync } = require('child_process');

function installNativeBindings(packagesToInstall, platformLabel) {
  if (packagesToInstall.length === 0) return;
  console.log(`Installing missing native bindings for ${platformLabel}...`);
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

if (process.platform === 'linux' && process.arch === 'x64') {
  let needsInstall = false;
  const packagesToInstall = [];

  try {
    require('lightningcss-linux-x64-gnu');
    console.log('✓ lightningcss native bindings found');
  } catch (e) {
    console.log('⚠ lightningcss native bindings missing');
    packagesToInstall.push('lightningcss-linux-x64-gnu@^1.30.1');
    needsInstall = true;
  }

  try {
    require('@tailwindcss/oxide-linux-x64-gnu');
    console.log('✓ @tailwindcss/oxide native bindings found');
  } catch (e) {
    console.log('⚠ @tailwindcss/oxide native bindings missing');
    packagesToInstall.push('@tailwindcss/oxide-linux-x64-gnu@4.1.13');
    needsInstall = true;
  }

  installNativeBindings(packagesToInstall, 'Linux x64');
} else if (process.platform === 'darwin' && process.arch === 'arm64') {
  const packagesToInstall = [];

  try {
    require('lightningcss-darwin-arm64');
    console.log('✓ lightningcss native bindings found');
  } catch (e) {
    console.log('⚠ lightningcss native bindings missing');
    packagesToInstall.push('lightningcss-darwin-arm64@1.30.1');
  }

  try {
    require('@tailwindcss/oxide-darwin-arm64');
    console.log('✓ @tailwindcss/oxide native bindings found');
  } catch (e) {
    console.log('⚠ @tailwindcss/oxide native bindings missing');
    packagesToInstall.push('@tailwindcss/oxide-darwin-arm64@4.1.13');
  }

  installNativeBindings(packagesToInstall, 'macOS ARM64');
} else {
  console.log(`Skipping native bindings install (platform: ${process.platform}, arch: ${process.arch})`);
}

