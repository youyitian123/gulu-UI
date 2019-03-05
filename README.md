# gulu-UI
* 使用vuepress搭建

#页面样式变量
    --font-size: 14px;
    font-size: var(--font-size);

#Vue组件引入
     Vue.component('g-button',Button)

#插槽<slot>
    <button class="g-button">
      <slot></slot>
    </button>
    <g-button>按钮</g-button>

#事件监听
    @click="$emit('click')  @click=""

#Parcel打包

#单元测试
* BDD       行为驱动开发
* TDD       测试驱动开发
* assert    断言

#自动测试(Karma Mocha Chai)  
#持续集成(Travis CI/Circle CI)
#package.json 发布(dist/index.js  dist/index.css)
#yarn link/npm link


#上传代码到 npmjs.org
* 更新 package.json
    在 package.json 里将版本号改为 0.0.1，等我们做完了再改成 1.0.0
    创建 index.js，在 index.js 里将你想要导出的内容全部导出

* 在 gulu 项目根目录运行 npm adduser
* 如果错误提示里面含有 https://registry.npm.taobao.org 则说明你的 npm 源目前为淘宝源，需要更换为 npm 官方源
* 运行 npm publish
#转义
* npx parcel build index.js --no-minify 
* package.json 的 main 改为 dist/index.js


./deploy.sh
