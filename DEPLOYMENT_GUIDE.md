# Hướng Dẫn Triển Khai Lên Cloudflare Pages

## 🚀 Bước 1: Chuẩn Bị Repository

### 1.1 Khởi tạo Git Repository
```bash
# Khởi tạo git repository
git init

# Thêm tất cả files
git add .

# Commit lần đầu
git commit -m "Initial commit: Vietnamese Tea Store website"

# Thêm remote repository
git remote add origin https://github.com/huythanhnguyen/teahouse.git

# Push lên GitHub
git push -u origin main
```

### 1.2 Cấu trúc dự án
```
teastore/
├── src/
│   ├── components/
│   ├── views/
│   ├── router/
│   └── assets/
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── _headers
├── _redirects
└── .gitignore
```

## 🌐 Bước 2: Triển Khai Lên Cloudflare Pages

### 2.1 Truy cập Cloudflare Dashboard
1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Chọn **Pages** từ menu bên trái
3. Click **Create a project**

### 2.2 Kết Nối GitHub Repository
1. Chọn **Connect to Git**
2. Chọn **GitHub** và authorize Cloudflare
3. Chọn repository `huythanhnguyen/teahouse`
4. Click **Begin setup**

### 2.3 Cấu Hình Build Settings
```
Project name: teahouse
Production branch: main
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: /
```

### 2.4 Environment Variables (Optional)
```
NODE_VERSION: 18
```

### 2.5 Advanced Settings
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty)

## ⚙️ Bước 3: Cấu Hình Custom Domain (Optional)

### 3.1 Thêm Custom Domain
1. Trong Cloudflare Pages dashboard
2. Chọn project của bạn
3. Vào tab **Custom domains**
4. Click **Set up a custom domain**
5. Nhập domain của bạn (ví dụ: `teahouse.yourdomain.com`)

### 3.2 Cấu Hình DNS
```
Type: CNAME
Name: teahouse (hoặc subdomain bạn muốn)
Target: teahouse.pages.dev
```

## 🔧 Bước 4: Cấu Hình Build

### 4.1 Package.json Scripts
Đảm bảo package.json có các scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 4.2 Vite Configuration
File `vite.config.js` đã được cấu hình đúng cho SPA.

## 📁 Bước 5: Files Cần Thiết

### 5.1 _headers File
File `_headers` đã được tạo để cấu hình cache và security headers.

### 5.2 _redirects File
File `_redirects` đã được tạo để xử lý SPA routing.

## 🚀 Bước 6: Deploy

### 6.1 Automatic Deploy
- Mỗi khi push code lên GitHub, Cloudflare sẽ tự động build và deploy
- Build time: ~2-3 phút
- Deploy time: ~30 giây

### 6.2 Manual Deploy
1. Vào Cloudflare Pages dashboard
2. Chọn project
3. Click **Deployments**
4. Click **Retry deployment** nếu cần

## 🔍 Bước 7: Kiểm Tra

### 7.1 Kiểm Tra Website
- URL: `https://teahouse.pages.dev`
- Kiểm tra tất cả pages hoạt động
- Kiểm tra responsive design
- Kiểm tra performance

### 7.2 Kiểm Tra SEO
- Meta tags
- Open Graph tags
- Sitemap (nếu có)

## 🛠️ Troubleshooting

### Lỗi Build
```bash
# Kiểm tra logs trong Cloudflare Pages
# Thường do:
- Missing dependencies
- Build command sai
- Node version không tương thích
```

### Lỗi Routing
- Đảm bảo file `_redirects` có nội dung: `/*    /index.html   200`
- Kiểm tra Vue Router configuration

### Lỗi Assets
- Kiểm tra đường dẫn assets
- Đảm bảo files trong thư mục `public/`

## 📊 Performance

### Cloudflare Features
- **CDN**: Tự động có CDN toàn cầu
- **Caching**: Static assets được cache
- **Compression**: Tự động nén files
- **HTTP/2**: Hỗ trợ HTTP/2

### Optimization Tips
1. Optimize images
2. Minify CSS/JS
3. Use WebP format
4. Enable Brotli compression

## 🔄 Continuous Deployment

### Workflow
1. Code changes → GitHub
2. GitHub → Cloudflare Pages (auto)
3. Build → Deploy → Live

### Branch Strategy
- `main`: Production
- `develop`: Development
- `feature/*`: Feature branches

## 📈 Monitoring

### Cloudflare Analytics
- Page views
- Unique visitors
- Performance metrics
- Error rates

### Custom Analytics
- Google Analytics
- Hotjar
- Mixpanel

---

## ✅ Checklist Triển Khai

- [ ] Repository đã push lên GitHub
- [ ] Cloudflare Pages project đã tạo
- [ ] Build settings đã cấu hình đúng
- [ ] Custom domain đã setup (nếu cần)
- [ ] Website hoạt động trên production URL
- [ ] Tất cả pages load được
- [ ] Mobile responsive
- [ ] Performance tốt
- [ ] SEO meta tags

## 🎉 Kết Quả

Website sẽ được deploy tại: `https://teahouse.pages.dev`

**Build time**: ~2-3 phút
**Deploy time**: ~30 giây
**Global CDN**: Có
**HTTPS**: Tự động
**Custom domain**: Có thể thêm
