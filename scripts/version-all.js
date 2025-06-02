#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const versionType = process.argv[2] || 'patch';

if (!['major', 'minor', 'patch'].includes(versionType)) {
  console.error('Usage: node scripts/version-all.js [major|minor|patch]');
  process.exit(1);
}

console.log(`🔄 Bumping all packages with ${versionType} version...`);

try {
  // Use pnpm to version all packages
  execSync(`pnpm -r version ${versionType}`, {
    stdio: 'inherit',
    cwd: process.cwd()
  });

  console.log('✅ All packages versioned successfully!');

  // Check if there are changes to commit
  const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });

  if (gitStatus.trim()) {
    // Commit the changes
    console.log('📝 Committing version changes...');
    execSync('git add .', { stdio: 'inherit' });
    execSync(`git commit -m "chore: bump all packages (${versionType})"`, { stdio: 'inherit' });

    console.log('🏷️  Creating git tag...');
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toTimeString().split(' ')[0].replace(/:/g, '-');
    const tagName = `release-${date}-${time}`;

    execSync(`git tag -a "${tagName}" -m "Release ${date} ${time.replace(/-/g, ':')} (${versionType} bump)"`, { stdio: 'inherit' });

    console.log('🚀 Pushing changes and tags...');
    execSync('git push && git push --tags', { stdio: 'inherit' });

    console.log('✅ Version bump complete!');
  } else {
    console.log('ℹ️  No changes to commit - versions may have already been bumped');
    console.log('✅ Version bump complete!');
  }

} catch (error) {
  console.error('❌ Version bump failed:', error.message);
  process.exit(1);
}
