
// 文档介绍

// 非父子组件的通信
// 有时候，非父子关系的两个组件之间也需要通信。在简单的场景下，可以使用一个空的 Vue 实例作为事件总线：

// var bus = new Vue()
// // 触发组件 A 中的事件
// bus.$emit('id-selected', 1)
// // 在组件 B 创建的钩子中监听事件
// bus.$on('id-selected', function (id) {
//   // ...
// })
// 在复杂的情况下，我们应该考虑使用专门的状态管理模式。

// 导入vue
import Vue from 'vue'
// 创建一个公共的对象
const bus = new Vue()
// 导出
export default bus
