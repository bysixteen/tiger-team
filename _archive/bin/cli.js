#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const VERSION = require('../package.json').version;
const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

const COMMANDS = {
  init: 'Initialise Project Squad in the current project',
  sync: 'Update Project Squad files from the latest version',
  site: 'Refresh site assets (layout.js, styles.css)',
  version: 'Show the installed version',
  help: 'Show this help message'
};

function log(msg) {
  console.log(msg);
}

function success(msg) {
  console.log(`✓ ${msg}`);
}

function warn(msg) {
  console.log(`⚠ ${msg}`);
}

function error(msg) {
  console.error(`✗ ${msg}`);
}

function injectVersion(src, dest, version) {
  const content = fs.readFileSync(src, 'utf8').replace('__PACKAGE_VERSION__', `v${version}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, content);
}

function copyDir(src, dest, options = {}) {
  const { overwrite = false, dryRun = false } = options;
  const copied = [];
  const skipped = [];

  if (!fs.existsSync(src)) {
    error(`Source directory not found: ${src}`);
    return { copied, skipped };
  }

  if (!fs.existsSync(dest)) {
    if (!dryRun) fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      const result = copyDir(srcPath, destPath, options);
      copied.push(...result.copied);
      skipped.push(...result.skipped);
    } else {
      if (fs.existsSync(destPath) && !overwrite) {
        skipped.push(destPath);
      } else {
        if (!dryRun) {
          fs.copyFileSync(srcPath, destPath);
        }
        copied.push(destPath);
      }
    }
  }

  return { copied, skipped };
}

function syncClaudeMdVersion(cwd, version) {
  const claudeMdPath = path.join(cwd, 'CLAUDE.md');
  if (!fs.existsSync(claudeMdPath)) return;

  const content = fs.readFileSync(claudeMdPath, 'utf8');
  if (!content.includes('Project Squad Framework')) return;

  const updated = content.replace(
    /<!-- version: \d+\.\d+\.\d+ -->/,
    `<!-- version: ${version} -->`
  );

  if (updated !== content) {
    fs.writeFileSync(claudeMdPath, updated);
    success(`Updated CLAUDE.md version to ${version}`);
  }
}

function init() {
  const cwd = process.cwd();
  log(`\nInitialising Project Squad v${VERSION} in ${cwd}\n`);

  // Create directories
  const dirs = [
    '.squad',
    '.claude/commands',
    '.claude/skills',
    'research',
    'research/sprints',
    'research/spikes',
    'research/workshops',
    'docs/decisions',
    '_meta'
  ];

  for (const dir of dirs) {
    const fullPath = path.join(cwd, dir);
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true });
      success(`Created ${dir}/`);
    }
  }

  // Copy .squad templates
  const squadSrc = path.join(TEMPLATES_DIR, '.squad');
  const squadDest = path.join(cwd, '.squad');
  const squadResult = copyDir(squadSrc, squadDest, { overwrite: false });

  for (const file of squadResult.copied) {
    success(`Created ${path.relative(cwd, file)}`);
  }
  for (const file of squadResult.skipped) {
    warn(`Skipped ${path.relative(cwd, file)} (already exists)`);
  }

  // Copy commands
  const cmdSrc = path.join(TEMPLATES_DIR, 'commands');
  const cmdDest = path.join(cwd, '.claude', 'commands');
  const cmdResult = copyDir(cmdSrc, cmdDest, { overwrite: false });

  for (const file of cmdResult.copied) {
    success(`Created ${path.relative(cwd, file)}`);
  }
  for (const file of cmdResult.skipped) {
    warn(`Skipped ${path.relative(cwd, file)} (already exists)`);
  }

  // Copy skills
  const skillsSrc = path.join(TEMPLATES_DIR, 'skills');
  const skillsDest = path.join(cwd, '.claude', 'skills');
  const skillsResult = copyDir(skillsSrc, skillsDest, { overwrite: false });

  for (const file of skillsResult.copied) {
    success(`Created ${path.relative(cwd, file)}`);
  }
  for (const file of skillsResult.skipped) {
    warn(`Skipped ${path.relative(cwd, file)} (already exists)`);
  }

  // Copy site assets
  const siteSrc = path.join(TEMPLATES_DIR, 'site');
  const siteDest = path.join(cwd, 'site');
  const siteResult = copyDir(siteSrc, siteDest, { overwrite: false });

  for (const file of siteResult.copied) {
    if (path.basename(file) === 'layout.js') {
      injectVersion(path.join(siteSrc, 'layout.js'), file, VERSION);
    }
    success(`Created ${path.relative(cwd, file)}`);
  }
  for (const file of siteResult.skipped) {
    warn(`Skipped ${path.relative(cwd, file)} (already exists)`);
  }

  // Sync CLAUDE.md version if present
  syncClaudeMdVersion(cwd, VERSION);

  log('\n---');
  log('\nNext steps:');
  log('  1. Run /seed-project-context to create _meta/PROJECT_CONTEXT.md');
  log('  2. Run /init-project-squad to scaffold your living documents');
  log('  3. Run /create-sprint to start Sprint 000 (Foundation)\n');
}

function sync() {
  const cwd = process.cwd();
  log(`\nSyncing Project Squad v${VERSION}\n`);

  // Check if project has Project Squad
  if (!fs.existsSync(path.join(cwd, '.squad'))) {
    error('No .squad directory found. Run "project-squad init" first.');
    process.exit(1);
  }

  // Sync .squad templates (overwrite)
  const squadSrc = path.join(TEMPLATES_DIR, '.squad');
  const squadDest = path.join(cwd, '.squad');
  const squadResult = copyDir(squadSrc, squadDest, { overwrite: true });

  for (const file of squadResult.copied) {
    success(`Updated ${path.relative(cwd, file)}`);
  }

  // Sync commands (overwrite)
  const cmdSrc = path.join(TEMPLATES_DIR, 'commands');
  const cmdDest = path.join(cwd, '.claude', 'commands');
  const cmdResult = copyDir(cmdSrc, cmdDest, { overwrite: true });

  for (const file of cmdResult.copied) {
    success(`Updated ${path.relative(cwd, file)}`);
  }

  // Sync skills (overwrite)
  const skillsSrc = path.join(TEMPLATES_DIR, 'skills');
  const skillsDest = path.join(cwd, '.claude', 'skills');
  const skillsResult = copyDir(skillsSrc, skillsDest, { overwrite: true });

  for (const file of skillsResult.copied) {
    success(`Updated ${path.relative(cwd, file)}`);
  }

  // Sync site assets (overwrite)
  const siteSrc = path.join(TEMPLATES_DIR, 'site');
  const siteDest = path.join(cwd, 'site');
  const siteResult = copyDir(siteSrc, siteDest, { overwrite: true });

  for (const file of siteResult.copied) {
    if (path.basename(file) === 'layout.js') {
      injectVersion(path.join(siteSrc, 'layout.js'), file, VERSION);
    }
    success(`Updated ${path.relative(cwd, file)}`);
  }

  // Sync CLAUDE.md version if present
  syncClaudeMdVersion(cwd, VERSION);

  log(`\n✓ Synced to v${VERSION}\n`);
}

function site() {
  const cwd = process.cwd();
  log(`\nRefreshing site assets v${VERSION}\n`);

  if (!fs.existsSync(path.join(cwd, '.squad'))) {
    error('No .squad directory found. Run "project-squad init" first.');
    process.exit(1);
  }

  const siteSrc = path.join(TEMPLATES_DIR, 'site');
  const siteDest = path.join(cwd, 'site');
  const siteResult = copyDir(siteSrc, siteDest, { overwrite: true });

  for (const file of siteResult.copied) {
    if (path.basename(file) === 'layout.js') {
      injectVersion(path.join(siteSrc, 'layout.js'), file, VERSION);
    }
    success(`Updated ${path.relative(cwd, file)}`);
  }

  const indexPath = path.join(cwd, 'site', 'index.html');
  if (fs.existsSync(indexPath)) {
    log(`\nOpen in browser → file://${indexPath}\n`);
  } else {
    log(`\nSite assets written to site/\n`);
  }
}

function showVersion() {
  log(`project-squad v${VERSION}`);
}

function showHelp() {
  log(`
project-squad - Design sprint framework for Claude

Usage:
  project-squad <command>

Commands:`);

  for (const [cmd, desc] of Object.entries(COMMANDS)) {
    log(`  ${cmd.padEnd(10)} ${desc}`);
  }

  log(`
Examples:
  npx @by-sixteen/project-squad init    # Set up in current project
  npx @by-sixteen/project-squad sync    # Pull latest updates
  npx @by-sixteen/project-squad site    # Refresh site assets
  npx @by-sixteen/project-squad version # Check installed version
`);
}

// Main
const args = process.argv.slice(2);
const command = args[0] || 'help';

switch (command) {
  case 'init':
    init();
    break;
  case 'sync':
    sync();
    break;
  case 'site':
    site();
    break;
  case 'version':
  case '-v':
  case '--version':
    showVersion();
    break;
  case 'help':
  case '-h':
  case '--help':
  default:
    showHelp();
    break;
}
