<template>
	  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
		<g-button icon="settings" iconPosition="left">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
		<g-button disabled>默认按钮</g-button>
		<br>
		<g-button-group class='group'>
                <g-button icon="left">上一页</g-button>
                <g-button>更多</g-button>
                <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>            
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
	</template>
	<script>
		import GButton from '../../../src/button'
		import GButtonGroup from '../../../src/button-group'
	  export default {
	    components: {
				GButton,
				GButtonGroup
	    },
	    data () {
	      return {
					content: `
					
<g-button>默认按钮</g-button>
<g-button icon="settings" iconPosition="left">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>	

<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
	      `.replace(/^ {8}/gm, '').trim()
	      }
	    }
	  }
	</script> 
	<style lang="scss">
	.g-button-group{
		margin-top: 1em;
	}
	</style>
	