# Images Directory

This directory contains all the static images used in the application.

## Structure

```
assets/images/
├── logos/          # Logo files
├── icons/          # Icon files
├── backgrounds/    # Background images
├── avatars/        # User avatar images
└── placeholders/   # Placeholder images
```

## Usage

Images in this directory can be imported and used in components:

```vue
<template>
  <img src="~/assets/images/logo.png" alt="Logo" />
</template>
```

Or using the `~` alias:

```vue
<template>
  <img src="~/assets/images/icons/user.svg" alt="User" />
</template>
```

## Best Practices

1. Use appropriate image formats:
   - PNG for images with transparency
   - JPG for photos
   - SVG for icons and simple graphics
   - WebP for modern browsers (with fallbacks)

2. Optimize images for web:
   - Compress images to reduce file size
   - Use appropriate dimensions
   - Consider using responsive images

3. Naming conventions:
   - Use kebab-case for file names
   - Be descriptive but concise
   - Include size or purpose in name if needed

## Example Files

- `logo.png` - Main application logo
- `favicon.ico` - Browser favicon
- `hero-bg.jpg` - Hero section background
- `user-avatar-placeholder.png` - Default user avatar
