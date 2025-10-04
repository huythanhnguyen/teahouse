# Vietnamese Tea Store - PowerShell Deployment Script
# Triển khai lên Cloudflare Pages

Write-Host "🚀 Bắt đầu triển khai Vietnamese Tea Store..." -ForegroundColor Green

# Kiểm tra git status
Write-Host "📋 Kiểm tra git status..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  Có thay đổi chưa commit. Đang commit..." -ForegroundColor Yellow
    git add .
    git commit -m "Deploy: Update website content"
}

# Push lên GitHub
Write-Host "📤 Push code lên GitHub..." -ForegroundColor Blue
git push origin main

# Kiểm tra trạng thái
Write-Host "✅ Code đã được push lên GitHub" -ForegroundColor Green
Write-Host "🌐 Cloudflare Pages sẽ tự động build và deploy" -ForegroundColor Cyan
Write-Host "⏱️  Thời gian build: ~2-3 phút" -ForegroundColor Yellow
Write-Host "🔗 URL: https://teahouse.pages.dev" -ForegroundColor Magenta

# Mở Cloudflare Dashboard
Write-Host "🔍 Mở Cloudflare Dashboard..." -ForegroundColor Blue
Start-Process "https://dash.cloudflare.com/pages"

Write-Host "🎉 Triển khai hoàn tất!" -ForegroundColor Green
Write-Host "📊 Kiểm tra tại: https://dash.cloudflare.com/pages" -ForegroundColor Cyan
