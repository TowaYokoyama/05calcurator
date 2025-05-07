import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // React プラグインを追加
  build: {
    outDir: 'dist', // 出力ディレクトリ
    sourcemap: true, // ソースマップを出力
  },
  server: {
    port: 3000, // 開発サーバーのポート設定
    open: true, // サーバー起動時にブラウザを自動で開く
  },
  resolve: {
    alias: {
      '@': '/src', // @でsrcディレクトリを参照できるように設定
    },
  },
});
