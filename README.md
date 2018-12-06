gulu - 一个Vue UI 的组件

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
