#!/bin/bash

# Vietnamese Tea Store - Deployment Script
# Triển khai lên Cloudflare Pages

echo "🚀 Bắt đầu triển khai Vietnamese Tea Store..."

# Kiểm tra git status
echo "📋 Kiểm tra git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  Có thay đổi chưa commit. Đang commit..."
    git add .
    git commit -m "Deploy: Update website content"
fi

# Push lên GitHub
echo "📤 Push code lên GitHub..."
git push origin main

# Kiểm tra trạng thái
echo "✅ Code đã được push lên GitHub"
echo "🌐 Cloudflare Pages sẽ tự động build và deploy"
echo "⏱️  Thời gian build: ~2-3 phút"
echo "🔗 URL: https://teahouse.pages.dev"

# Kiểm tra build status (nếu có Cloudflare CLI)
if command -v wrangler &> /dev/null; then
    echo "🔍 Kiểm tra trạng thái build..."
    wrangler pages project list
fi

echo "🎉 Triển khai hoàn tất!"
echo "📊 Kiểm tra tại: https://dash.cloudflare.com/pages"
