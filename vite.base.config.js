import { defineConfig } from 'vite';
export default defineConfig({
    optimizeDeps: {
        include: [],
    },
    css:{
        modules:{
            localsConvention:'camelCase',
            scopeBehaviour:'local',
            globalModulePaths:[],
            hashPrefix:'hello',
            generateScopedName:"[name]_[local]_[hash:5]"
        }
    },
    plugins:[],
    envPrefix:'ENV',  // 配置vite注入客户端环境变量校验的env前缀
})