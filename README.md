# ToDo App - Nuxt 4

Ứng dụng quản lý công việc được xây dựng với Nuxt 4, Vue 3 và Tailwind CSS.

## 🚀 Tính năng

- ✅ Quản lý danh sách công việc
- ✅ Thêm/xóa công việc
- ✅ Đánh dấu hoàn thành
- ✅ Giao diện responsive với Tailwind CSS
- ✅ File-based routing
- ✅ Server-side rendering (SSR)

## 🛠️ Công nghệ sử dụng

- **Framework**: Nuxt 4.1.2
- **Frontend**: Vue 3.5.21
- **Styling**: Tailwind CSS 6.14.0
- **Router**: Vue Router 4.5.1
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Cấu trúc dự án

```
nuxt-app/
├── app/
│   └── app.vue              # Root component (entry point)
├── pages/                   # File-based routing
│   ├── index.vue            # Trang chủ (/)
│   └── tasks.vue            # Trang quản lý công việc (/tasks)
├── layouts/                 # Layout templates
│   └── default.vue          # Layout mặc định
├── components/              # Reusable components
│   └── TheHeader/
│       └── index.vue
├── assets/                  # Static assets
│   ├── css/
│   │   ├── main.css         # Custom styles
│   │   └── tailwind.css     # Tailwind configuration
│   └── images/
├── public/                  # Public static files
├── server/                  # Server-side code
├── nuxt.config.js           # Nuxt configuration
└── package.json             # Dependencies
```

## 🏗️ Cách hoạt động

```
app.vue (Root)
  └── NuxtLayout (default.vue)
      └── NuxtPage (pages/index.vue hoặc pages/tasks.vue)
```

### Luồng render:
1. **app.vue** - Component gốc, chứa `<NuxtLayout>` và `<NuxtPage>`
2. **layouts/default.vue** - Layout mặc định với header, footer, navigation
3. **pages/index.vue** - Trang chủ, render trong `<slot />` của layout
4. **pages/tasks.vue** - Trang quản lý công việc

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js >= 18.0.0
- npm >= 8.0.0

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

Ứng dụng sẽ chạy tại: `http://localhost:3000`

### Build cho production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 📱 Các trang hiện có

### 1. Trang chủ (`/`)
- **File**: `pages/index.vue`
- **Mô tả**: Trang chào mừng với link đến trang quản lý công việc
- **Tính năng**: 
  - Giao diện đẹp với Tailwind CSS
  - Navigation đến trang tasks

### 2. Trang quản lý công việc (`/tasks`)
- **File**: `pages/tasks.vue`
- **Mô tả**: Trang chính để quản lý danh sách công việc
- **Tính năng**:
  - Thêm công việc mới
  - Hiển thị danh sách công việc
  - Đánh dấu hoàn thành/chưa hoàn thành
  - Xóa công việc
  - Giao diện responsive

## 🎨 Styling

### Tailwind CSS
- **File cấu hình**: `tailwind.config.js`
- **File styles**: `assets/css/tailwind.css`
- **Custom styles**: `assets/css/main.css`

### Custom CSS Classes
```css
/* Button styles */
.btn-primary    /* Nút chính màu xanh */
.btn-secondary  /* Nút phụ màu xám */
.btn-danger     /* Nút nguy hiểm màu đỏ */

/* Card styles */
.card          /* Card cơ bản */
.card-hover    /* Card có hiệu ứng hover */

/* Form styles */
.form-input    /* Input form */
.form-label    /* Label form */
.form-error    /* Thông báo lỗi */
```

## 🔧 Cấu hình

### Nuxt Configuration (`nuxt.config.js`)
```javascript
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  pages: true,
  srcDir: '.',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
```

### Tailwind Configuration (`tailwind.config.js`)
```javascript
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## 📝 Phát triển thêm

### Thêm trang mới
1. Tạo file trong thư mục `pages/`
2. Ví dụ: `pages/about.vue` → URL: `/about`

### Thêm component
1. Tạo file trong thư mục `components/`
2. Sử dụng: `<ComponentName />` (auto-import)

### Thêm layout
1. Tạo file trong thư mục `layouts/`
2. Sử dụng trong page:
```vue
<script setup>
definePageMeta({
  layout: 'custom-layout'
})
</script>
```

### Thêm API endpoint
1. Tạo file trong thư mục `server/api/`
2. Ví dụ: `server/api/tasks.get.js` → Endpoint: `/api/tasks`

### Thêm middleware
1. Tạo file trong thư mục `middleware/`
2. Sử dụng trong page:
```vue
<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>
```

## 🐛 Troubleshooting

### Lỗi thường gặp

#### 1. "Create a Vue component in the pages/ directory to enable <NuxtPage>"
- **Nguyên nhân**: Nuxt không nhận diện được pages
- **Giải pháp**: 
  - Kiểm tra file có đúng cấu trúc Vue component
  - Restart dev server
  - Xóa cache: `rm -rf .nuxt .output`

#### 2. CSS không load
- **Nguyên nhân**: Đường dẫn CSS sai
- **Giải pháp**: Kiểm tra import path trong `app.vue`

#### 3. Tailwind classes không hoạt động
- **Nguyên nhân**: Cấu hình Tailwind sai
- **Giải pháp**: Kiểm tra `tailwind.config.js` và `nuxt.config.js`

## 📚 Tài liệu tham khảo

- [Nuxt 4 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm thông tin.

## 👨‍💻 Tác giả

**Tienthanh**
- GitHub: [@tienthanh](https://github.com/tienthanh)

## 🙏 Lời cảm ơn

- [Nuxt Team](https://nuxt.com/) - Framework tuyệt vời
- [Vue Team](https://vuejs.org/) - Progressive JavaScript framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

**Happy Coding! 🚀**