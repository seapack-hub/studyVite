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
        //key:config 的形式
        preprocessorOptions:{
            //整个的配置对象都会给到less 的执行参数（全局参数）中去
            less:{
                math:"always",
                //配置全局变量
                globalVars:{
                    mainColor:"#14ec0e"
                }
            }
        },
        devSourcemap:true,  //开启css的sourceMap(文件索引)
    },
    plugins:[],
    envPrefix:'ENV',  // 配置vite注入客户端环境变量校验的env前缀
})