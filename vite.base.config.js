import { defineConfig } from 'vite';
export default defineConfig({
    optimizeDeps: {
        include: [],
    },
    css:{},
    plugins:[],
    envPrefix:'ENV',  // 配置vite注入客户端环境变量校验的env前缀
})