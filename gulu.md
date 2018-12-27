
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