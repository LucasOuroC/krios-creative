
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    base: '/',
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/c4d88cbac5f8267aefd0182488f86075234c8874.png': path.resolve(__dirname, './src/assets/c4d88cbac5f8267aefd0182488f86075234c8874.png'),
        'figma:asset/b9becdbdef9b726fb0bd5c65a4a2f5f8bc729d50.png': path.resolve(__dirname, './src/assets/b9becdbdef9b726fb0bd5c65a4a2f5f8bc729d50.png'),
        'figma:asset/a3e7e2319c1d5f0bfa86b9b6a875840de77d53a2.png': path.resolve(__dirname, './src/assets/a3e7e2319c1d5f0bfa86b9b6a875840de77d53a2.png'),
        'figma:asset/8dfd4dadb3681d519a9311e11f6d5423c1b70c6c.png': path.resolve(__dirname, './src/assets/8dfd4dadb3681d519a9311e11f6d5423c1b70c6c.png'),
        'figma:asset/486251245151822be7abb300220ed42600648afc.png': path.resolve(__dirname, './src/assets/486251245151822be7abb300220ed42600648afc.png'),
        'figma:asset/2a614220d504b63e30c905a386231ae8ca253a96.png': path.resolve(__dirname, './src/assets/2a614220d504b63e30c905a386231ae8ca253a96.png'),
        'figma:asset/1550e2937db35a3529ed1f3160c80ab454bf2e94.png': path.resolve(__dirname, './src/assets/1550e2937db35a3529ed1f3160c80ab454bf2e94.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          gallery: path.resolve(__dirname, 'gallery.html')
        }
      }
    },
    server: {
      port: 3000,
      open: true,
    },
  });