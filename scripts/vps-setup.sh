#!/usr/bin/env bash
# One-time VPS setup for vietfactory.vn (Ubuntu 24.04 + FASTPANEL)
set -euo pipefail

APP_DIR="/var/www/vietfactory"
REPO="https://github.com/nguyenthenguyen2006-oss/vietfactory.git"

echo "==> Install Node.js 20"
if ! command -v node &>/dev/null || [[ "$(node -v)" != v20* ]]; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y nodejs
fi

echo "==> Install PM2"
npm install -g pm2

echo "==> Clone or update app"
mkdir -p "$APP_DIR"
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR" && git pull origin main
else
  git clone "$REPO" "$APP_DIR"
  cd "$APP_DIR"
fi

echo "==> Build app"
npm ci
npm run build

echo "==> Start with PM2"
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup systemd -u root --hp /root

echo ""
echo "Done. Next steps in FASTPANEL:"
echo "  1. Create site: vietfactory.vn + www.vietfactory.vn"
echo "  2. Reverse proxy -> http://127.0.0.1:3000"
echo "  3. Enable Let's Encrypt SSL + Force HTTPS"
echo ""
echo "Verify: curl -I http://127.0.0.1:3000"