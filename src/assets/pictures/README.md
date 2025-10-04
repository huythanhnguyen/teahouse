# Cấu trúc thư mục hình ảnh

Thư mục này được tổ chức theo các section của website để dễ quản lý và tự động load hình ảnh.

## Cấu trúc thư mục:

### 📁 homepage/
Chứa tất cả hình ảnh cho trang chủ

#### 📁 banner/
- `home-slider-background-img.png` - Hình nền chính cho hero banner
- `tra-hoa-large.jpg` - Hình ảnh trà hoa lớn
- `tra-hoa.jpg` - Hình ảnh trà hoa
- `tea-set-1.jpg` - Bộ trà
- `tra-mat-ong.jpg` - Trà mật ong

#### 📁 our-story/
- `an-nhien-tra.jpg` - Trà an nhiên
- `tra-mong-rong.jpg` - Trà mông rồng
- `nguyen-lieu.jpg` - Nguyên liệu truyền thống

#### 📁 products/
- `tra-chanh-mat-ong.jpg` - Trà chanh mật ong
- `an-nhien-tra.jpg` - Trà an nhiên (copy)

### 📁 blog/
Chứa hình ảnh cho phần blog

#### 📁 thumbnails/
- `gallery-img-2.jpg` - Hình thumbnail cho bài viết blog

### 📁 icons/
Chứa các icon và hình ảnh nhỏ

### 📁 general/
Chứa các hình ảnh tổng quát khác
- `100324_BellocqFood-201-BANNER_3.webp` - Banner tổng quát

## Cách sử dụng:

1. **Thêm hình ảnh mới**: Đặt vào thư mục phù hợp với section
2. **Tên file**: Sử dụng tên mô tả, không có khoảng trắng
3. **Định dạng**: Khuyến nghị sử dụng .jpg, .png, .webp
4. **Kích thước**: Tối ưu hóa hình ảnh trước khi upload

## Tự động load:

Website sẽ tự động load hình ảnh từ các thư mục này theo đường dẫn:
- `/src/assets/pictures/homepage/banner/` - Hero banner
- `/src/assets/pictures/homepage/our-story/` - Our Story section  
- `/src/assets/pictures/homepage/products/` - Product grid
- `/src/assets/pictures/blog/thumbnails/` - Blog thumbnails


