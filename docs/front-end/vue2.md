# Vue2学习笔记

​		还是得记笔记，好记性不如烂笔头。

## 引言
### 为什么要学习vue
通过学习Vue提供的指令, 很方便的就能把数据渲染到页面上, 不在需要手动操作DOM元素, 前端的Vue之类的框架, 不提倡手动操作DOM元素。
- 轻量级：Vue.js 的核心库只有几十 KB，但功能强大。
- 易于集成：可以轻松与现有项目集成，也支持与其他框架（如 React 或 Angular）共存。
- 活跃的社区：Vue.js 拥有庞大的社区支持和丰富的插件生态。
### 什么是MVVM模式
MVVM 是Model-View-ViewModel 的缩写，它是一种基于前端开发的架构模式，其核心是提供对View 和 ViewModel 的双向数据绑定，这使得ViewModel 的状态改变可以自动传递给 View，即所谓的数据双向绑定。

其中 M 层 是vue中的data, V层是el绑定的HTML元素, VM是new实例的vue。

###  生命周期
Vue2 生命周期
总共分为 8 个阶段：创建前/后，载入前/后，更新前/后，销毁前/后。
各阶段的使用场景

- `beforeCreate`：执行一些初始化任务，此时获取不到 props 或者 data 中的数据
- `created`：组件初始化完毕，可以访问各种数据，获取接口数据等
- `beforeMount`：此时开始创建 VDOM
- `mounted`：dom已创建渲染，可用于获取访问数据和dom元素；访问子组件等。
- `beforeUpdate`：此时view层还未更新，可用于获取更新前各种状态
- `updated`：完成view层的更新，更新后，所有状态已是最新
- `beforeDestroy`：实例被销毁前调用，可用于一些定时器或订阅的取消
- `destroyed`：销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器
- `keep-alive`： 独有的生命周期，分别为 activated 和 deactivated。用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 actived 钩子函数。

