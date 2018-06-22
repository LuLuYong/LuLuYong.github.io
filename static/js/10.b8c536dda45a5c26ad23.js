webpackJsonp([10],{"6ELn":function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={name:"vuex-core-mutation",mixins:[s("SZs6").a],methods:{testmutation:function(){this.$store.commit({type:"increment",num:2}),console.log(this.$store.state.count)}}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"v-vuex-core-mutation"},[s("p",{staticClass:"v-txt"},[t._v("\n    更改Vuex的store中的状态的唯一方法是提交mutation。vuex中的mutation非常类似于事件：每个mutation都有一个字符串的"),s("b",[t._v("事件类型（type）")]),t._v("和一个"),s("b",[t._v("回调函数（handler）")]),t._v("。这个回调函数就是我们实际进行状态更改的地方，并且它会接受state作为第一个参数。\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      const store = new Vuex.Store({\n        state: {\n          count: 0,\n        },\n        mutations: {\n          increment(state) {\n            state.count++\n          }\n        }\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    你不能直接调用mutation handler。这个选项更像是事件注册：“当触发一个类型为increment的mutation时，调用此函数。”要唤醒一个handler，我们需要以相应的type调用store.commit方法：\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      this.$store.commit('increment')\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("\n    提交载荷（Payload）——传参\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      const store = new Vuex.Store({\n        state: {\n          count: 0,\n        },\n        mutations: {\n          increment(state, n) {\n            state.count += n;\n          }\n        }\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      this.$store.commit('increment', 10);\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    （大多数情况下，参数应该是一个对象，这样会包含多个字段，并且记录的mutation会更易读。）\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("\n    对象风格的提交方式\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      const store = new Vuex.Store({\n        state: {\n          count: 0,\n        },\n        mutations: {\n          increment(state, obj) {\n            state.count += obj.num;\n          }\n        }\n      })\n    ")]),t._v("\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      this.$store.commit({ type: 'increment', num: 2 });\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("\n    mutation必须是同步函数\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      mutations: {\n        someMutation (state) {\n          api.callAsyncMethod(() => {\n            state.count++\n          })\n        }\n      }\n    ")]),t._v("\n  ")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    现在想象，我们正在 debug 一个 app 并且观察 devtool 中的 mutation 日志。每一条 mutation 被记录，devtools 都需要捕捉到前一状态和后一状态的快照。然而，在上面的例子中 mutation 中的异步函数中的回调让这不可能完成：因为当 mutation 触发的时候，回调函数还没有被调用，devtools 不知道什么时候回调函数实际上被调用——实质上任何在回调函数中进行的状态的改变都是不可追踪的。\n  ")]),t._v(" "),s("p",{staticClass:"v-note"},[t._v("\n    在组件中提交mutation\n  ")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("一、")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    使用this.$store.commit('xxx') 提交 mutation\n  ")]),t._v(" "),s("p",{staticClass:"v-title"},[t._v("二、")]),t._v(" "),s("p",{staticClass:"v-txt"},[t._v("\n    使用mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。\n  ")]),t._v(" "),s("pre",{staticClass:"line-numbers"},[t._v("    "),s("code",{staticClass:"language-js"},[t._v("\n      import { mapMutations } from 'vuex'\n\n      export default {\n        // ...\n        methods: {\n          ...mapMutations([\n            'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`\n\n            // `mapMutations` 也支持载荷：\n            'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`\n          ]),\n          ...mapMutations({\n            add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`\n          })\n        }\n      }\n    ")]),t._v("\n  ")])])}]},i=s("VU/8")(e,a,!1,null,null,null);n.default=i.exports}});
//# sourceMappingURL=10.b8c536dda45a5c26ad23.js.map