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
        },
        preprocessorOptions:{
            //整个的配置对象都会给到less 的执行参数（全局参数）中去
            less:{
                math:"always"
            }
        }
    },
    plugins:[],
    envPrefix:'ENV',  // 配置vite注入客户端环境变量校验的env前缀
})