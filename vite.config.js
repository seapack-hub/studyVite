import { defineConfig,loadEnv } from 'vite';

import viteBaseConfig from './vite.base.config';
import viteDevConfig from './vite.dev.config';
import viteProdConfig from './vite.prod.config';

//策略模式
const envResolver = {
    "build":()=>{
        console.log('生产模式配置');
        return ({...viteBaseConfig,...viteProdConfig})
    },
    "serve":()=>{
        console.log('开发模式配置');
        return ({...viteBaseConfig,...viteDevConfig})
    }
}
export default defineConfig(({command,mode})=>{
    const env = loadEnv(mode,process.cwd(),'');
    console.log('env',env);
    return envResolver[command]();
})