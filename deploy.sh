#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/vietfactory"
cd "$APP_DIR"

echo "==> Pull latest code"
git pull origin main

echo "==> Install dependencies"
npm ci

echo "==> Build Next.js"
npm run build

echo "==> Restart PM2"
pm2 restart vietfactory || pm2 start ecosystem.config.cjs
pm2 save

echo "==> Deploy complete"