#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const RETRY_DELAY = 30000; // 30 seconds
const MAX_RETRIES = 3;

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function publishWithRetry() {
  console.log('Starting publish with retry logic...');

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      console.log(`\nAttempt ${attempt}/${MAX_RETRIES}`);

      // Use lerna publish with concurrency 1 and other safety flags
      execSync('npx lerna publish --concurrency 1 --no-verify-access --yes', {
        stdio: 'inherit',
        cwd: process.cwd()
      });

      console.log('✅ All packages published successfully!');
      return;

    } catch (error) {
      console.log(`❌ Attempt ${attempt} failed`);

      if (attempt < MAX_RETRIES) {
        console.log(`⏳ Waiting ${RETRY_DELAY/1000} seconds before retry...`);
        await sleep(RETRY_DELAY);
      } else {
        console.log('❌ All retry attempts exhausted');

        // Try to publish only failed packages
        console.log('\n🔄 Attempting to publish only changed packages...');
        try {
          execSync('npx lerna publish from-git --concurrency 1 --yes', {
            stdio: 'inherit',
            cwd: process.cwd()
          });
          console.log('✅ Remaining packages published successfully!');
        } catch (finalError) {
          console.error('❌ Final attempt failed. You may need to publish manually.');
          process.exit(1);
        }
      }
    }
  }
}

publishWithRetry().catch(console.error);
