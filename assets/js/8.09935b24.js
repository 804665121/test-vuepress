(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{279:function(t,e,a){"use strict";a.r(e);var s=a(13),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),e("p",[e("strong",[t._v("注意点:Vue2 和vue3 不建议混合使用语法结构")])]),t._v(" "),e("ol",[e("li",[e("p",[t._v("尽量不要与vue2.x配置混合")]),t._v(" "),e("ul",[e("li",[t._v("vue2配置中的 data,methods,computed 中可以访问到setup方法中的属性,方法")]),t._v(" "),e("li",[t._v("但是在setup中 "),e("strong",[t._v("不能访问")]),t._v("vue2配置中的(data,methods,computed)")]),t._v(" "),e("li",[t._v("如何存在重名 则setup中有优先")])])]),t._v(" "),e("li",[e("p",[t._v("setup不能是一个async函数,因为返回值不再是return对象,而是promise,模版看不到对象中的属性")])])]),t._v(" "),e("h1",{attrs:{id:"_1-ref函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-ref函数"}},[t._v("#")]),t._v(" 1.ref函数")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("作用:定义一个响应式的数据")])]),t._v(" "),e("li",[e("p",[t._v("语法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const age=ref(initValue)\n")])])]),e("ul",[e("li",[t._v("创建一个包含响应式的"),e("strong",[t._v("引用对象(reference)")])]),t._v(" "),e("li",[t._v("js中操作数据xx.value")]),t._v(" "),e("li",[t._v("模版中读取数据不需要.value 直接与vue2 读取一致")])])]),t._v(" "),e("li",[e("p",[t._v("备注:")]),t._v(" "),e("ul",[e("li",[t._v("接收的数据可以是:基本数据类型,也可以是对象类型")]),t._v(" "),e("li",[t._v("基本数据类型的数据:响应式依然是 使用 "),e("strong",[t._v("Object.defineProperty()")]),t._v(" 的"),e("strong",[t._v("get")]),t._v("和"),e("strong",[t._v("set")]),t._v("完成的")]),t._v(" "),e("li",[t._v("对象类型的数据: 内部 使用了Vue3的一个新函数--------"),e("strong",[t._v("-reactive")]),t._v("函数")])])])]),t._v(" "),e("h1",{attrs:{id:"_2-reactive函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-reactive函数"}},[t._v("#")]),t._v(" 2.reactive函数")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("作用: 定义一个响应式对象类型数据")])]),t._v(" "),e("li",[e("p",[t._v("原理: 通过使用"),e("strong",[t._v("Proxy")]),t._v("代理的方式实现响应式(数据劫持),并通过"),e("strong",[t._v("Reflect")]),t._v("操作源对象内部的数据")])]),t._v(" "),e("li",[e("p",[t._v("语法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('let objInfo=reactive({\n name:"123",\n age:23,\n a:{\n  b:{\n  c:2323\n  }\n }\n})\n')])])])]),t._v(" "),e("li",[e("p",[t._v("备注")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("不可以定义基本数据类型")])]),t._v(" "),e("li",[e("p",[t._v("在修改对象里面的值的时候不需要.value 可以直接修改")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("objInfo.name=“王五”\n")])])])]),t._v(" "),e("li",[e("p",[t._v("可以处理深层次结构的数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("objInfo.a.b.c=898989 可以直接修改 无需借助其它api\n")])])])])])])]),t._v(" "),e("h1",{attrs:{id:"_3-vue2和vue3实现原理对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue2和vue3实现原理对比"}},[t._v("#")]),t._v(" 3.vue2和vue3实现原理对比")]),t._v(" "),e("h3",{attrs:{id:"vue2响应式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2响应式"}},[t._v("#")]),t._v(" Vue2响应式")]),t._v(" "),e("p",[t._v("原理:运用Object.definePrototype进行数据代理给数据绑定 "),e("strong",[t._v("get")]),t._v("和"),e("strong",[t._v("set")]),t._v("方法")]),t._v(" "),e("p",[t._v("弊端:")]),t._v(" "),e("ul",[e("li",[t._v("新增属性 和删除属性页面不会自动更新, 需要借助"),e("strong",[t._v("this.$set()和 vue.set()")])]),t._v(" "),e("li",[t._v("直接对数组下标修改,页面不会自动更新")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('        let person = {\n            name: "章三"\n        }\n        let p = {}\n        Object.defineProperty(p, "name", {\n            get() {\n                return person.name\n            },\n            set(value) {\n                return p.name = value\n            }\n        })\n')])])]),e("h4",{attrs:{id:"vue3响应式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue3响应式"}},[t._v("#")]),t._v(" Vue3响应式")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("实现原理")]),t._v(" "),e("ul",[e("li",[t._v("通过Proxy(代理):拦截对象任意属性的变化:包括属性的 增 删 改 查.")]),t._v(" "),e("li",[t._v("通过reflect(反射): 对被代理的对象属性进行操作")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("   /**\n         *  vue3 实现方式\n         * 使用 Proxy 代理的方式 运用set 和get 和deletePrototype 方法 \n         * 解决了vue2中不能直接修改数组问题和删除数据不更新问题 \n         * 和直接修改对象里面的值的问题\n         * 运用Reflect 反射将处理的值返回\n         * \n         */\n  let person = {\n            name: \"账单\",\n            age: 24\n        }\n        let p = new Proxy(person, {\n            get(target, name) {\n                console.log(target, name, 'target,name')\n                return Reflect.get(trage, name)\n            },\n            set(target, name, value) {\n                console.log(\"修改了\", target, name, 'target,name')\n                return Reflect.set(trage, name)\n            },\n            deleteProperty(target, name) {\n                console.log(\"删除了\", target, name, 'target,name')\n                // return delete target[name]\n                return Reflect.deleteProperty(target, name)\n            }\n\n        })\n")])])])])]),t._v(" "),e("h1",{attrs:{id:"_4-setup注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-setup注意事项"}},[t._v("#")]),t._v(" 4.setup注意事项")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("setup执行的时机")]),t._v(" "),e("p",[t._v("在beforeCreate之前执行一次,this是undefined")])]),t._v(" "),e("li",[e("p",[t._v("setup的参数")]),t._v(" "),e("ul",[e("li",[t._v("props :值为对象,包含组件外部传递过来的值,且组件内部声明接收了的属性")]),t._v(" "),e("li",[t._v("context:\n"),e("ul",[e("li",[t._v("attrs: 值为对象,包含:组件外部传递过来,但没有在props配置中声明的属性,相当于 this.$attrs")]),t._v(" "),e("li",[t._v("Slots: 收到的插槽内容,相当于this.$slots")]),t._v(" "),e("li",[t._v("emit : 分发自定义事件的函数,相当于this.$emit")])])])])])]),t._v(" "),e("h1",{attrs:{id:"_5-watch注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-watch注意事项"}},[t._v("#")]),t._v(" 5.watch注意事项")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("监视"),e("strong",[t._v("ref")]),t._v("定义的响应式数据,使用"),e("strong",[t._v("watch监视一个值")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' let sum = ref(1);\n immediate:true 表示初始化的时候执行一次\n  watch(\n      sum,\n      (newVal, oldVal) => {\n        console.log(newVal, oldVal, "sum修改了");\n      },\n      { immediate: true }\n    );\n')])])])]),t._v(" "),e("li",[e("p",[t._v("监控多个"),e("strong",[t._v("ref")]),t._v("值的情况,"),e("strong",[t._v("监视多个值")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('监视多个值的情况,watch的第一个值接收的是一个数据,返回的newval和oldVal也是一个数据\n\n    let sum = ref(1);\n    let msg = ref("hello");\n    watch([sum, msg], (newVal, oldVal) => {\n          console.log(newVal, oldVal, "sum修改了");\n    });\n')])])])]),t._v(" "),e("li",[e("p",[t._v("监视"),e("strong",[t._v("reactive")]),t._v(" 定义的响应式数据的"),e("strong",[t._v("全部属性")])]),t._v(" "),e("ul",[e("li",[t._v("使用"),e("strong",[t._v("watch")]),t._v("监测的时候无法准确监测到到"),e("strong",[t._v("oldVal")]),t._v(".")]),t._v(" "),e("li",[t._v("强制开启了"),e("strong",[t._v("deep")]),t._v("深度监视(deep无法关闭)")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('let person = reactive({\n      name: "zangsan",\n      age: 19,\n      job: {\n        j1: 20,\n      },\n    });\nwatch(person, (newVal, oldVal) => {\n   console.log(newVal, oldVal, "person 监视的值");\n});\n')])])])]),t._v(" "),e("li",[e("p",[t._v("监视"),e("strong",[t._v("reactive")]),t._v(" 定义的响应式数据的"),e("strong",[t._v("某个属性")])]),t._v(" "),e("ul",[e("li",[t._v("需要使用箭头函数的方式,才能监测要数据变化 ,直接写无法使用")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' let person = reactive({\n      name: "zangsan",\n      age: 19,\n      job: {\n        j1: 20,\n      },\n    });\n    watch(\n      () => person.age,\n      (newVal, oldVal) => {\n        console.log(newVal, oldVal, "person.age 监视的值");\n      }\n    );\n')])])])]),t._v(" "),e("li",[e("p",[t._v("监视"),e("strong",[t._v("reactive")]),t._v(" 定义的响应式数据的"),e("strong",[t._v("某些属性")])]),t._v(" "),e("p",[t._v("与"),e("strong",[t._v("ref")]),t._v("的响应式数据一致也是传递一个数组")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n  let person = reactive({\n      name: "zangsan",\n      age: 19,\n      job: {\n        j1: 20,\n      },\n    });\n watch([() => person.age, () => person.name], (newVal, oldVal) => {\n      console.log(newVal, oldVal, "person.age 监视的值");\n});\n')])])])]),t._v(" "),e("li",[e("p",[t._v("特殊情况")]),t._v(" "),e("p",[t._v("监视"),e("strong",[t._v("reactive")]),t._v("定义的对象中的"),e("strong",[t._v("某个属性")]),t._v(",开启"),e("strong",[t._v("deep:true")]),t._v("有效")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' let person = reactive({\n      name: "zangsan",\n      age: 19,\n      job: {\n        j1: 20,\n      },\n    });\n   watch(\n      () => person.job,\n      (newVal, oldVal) => {\n        console.log(newVal, oldVal, "person.job 监视的值");\n      },\n      { deep: true }\n    );//此处由于监视的是reactive定义的对象中的某个属性,所有deep配置有效果\n')])])]),e("p",[t._v("在watch中,使用"),e("strong",[t._v("ref")]),t._v("定一个的对象,在监视值的时候需要加上.value,")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(' let person1 = ref({\n      name: "zangsan",\n      age: 19,\n      job: {\n        j1: 20,\n      },\n    });\n//第一种方式\n    watch(person1.value, (newVal, oldVal) => {\n      console.log(newVal, oldVal, "oldVal");\n    });\n  //第二种方式\n    watch(person1, (newVal, oldVal) => {\n      console.log(newVal, oldVal, "oldVal");\n    },{deep:true});\n')])])])])]),t._v(" "),e("h1",{attrs:{id:"_4-watcheffect函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-watcheffect函数"}},[t._v("#")]),t._v(" 4.watchEffect函数")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("watch")]),t._v("使用:既要指明函数的属性,也要指明监视的回调")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("watchEffect")]),t._v(":不需要指明监视哪个属性,监视的回调中用到哪个属性,那就监视哪个属性")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("watchEffect")]),t._v("有点像"),e("strong",[t._v("computed")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("但是"),e("strong",[t._v("computed")]),t._v("注重的是计算出来的值("),e("strong",[t._v("回调函数的返回值)")]),t._v(",所以必须要写返回值")])]),t._v(" "),e("li",[e("p",[t._v("而"),e("strong",[t._v("watchEffect")]),t._v("更注重的是过程("),e("strong",[t._v("回调函数的函数体")]),t._v("),所以不用写返回值.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('watchEffect所指定的回调中用到的数据只要发生改变,则直接执行回调\n watchEffect(() => {\n      const x = person.age;\n      console.log("回调执行了");\n });\n')])])])])])])]),t._v(" "),e("h1",{attrs:{id:"_5-生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-生命周期"}},[t._v("#")]),t._v(" 5.生命周期")]),t._v(" "),e("p",[t._v("Vue3中也可以直接使用Vue2的生命周期")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("beforeDestroy")]),t._v("改名为"),e("strong",[t._v("beforeUnmount")])]),t._v(" "),e("li",[e("strong",[t._v("destroyed")]),t._v("改名为"),e("strong",[t._v("ummounted")])])]),t._v(" "),e("p",[e("strong",[t._v("选项式 API 的生命周期选项和组合式 API 之间的映射")])]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("beforeCreate")]),t._v(" -> 使用 "),e("code",[t._v("setup()")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("created")]),t._v(" -> 使用 "),e("code",[t._v("setup()")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("beforeMount")]),t._v(" -> "),e("code",[t._v("onBeforeMount")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("mounted")]),t._v(" -> "),e("code",[t._v("onMounted")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("beforeUpdate")]),t._v(" -> "),e("code",[t._v("onBeforeUpdate")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("updated")]),t._v(" -> "),e("code",[t._v("onUpdated")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("beforeUnmount")]),t._v(" -> "),e("code",[t._v("onBeforeUnmount")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("unmounted")]),t._v(" -> "),e("code",[t._v("onUnmounted")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("errorCaptured")]),t._v(" -> "),e("code",[t._v("onErrorCaptured")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("renderTracked")]),t._v(" -> "),e("code",[t._v("onRenderTracked")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("renderTriggered")]),t._v(" -> "),e("code",[t._v("onRenderTriggered")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("activated")]),t._v(" -> "),e("code",[t._v("onActivated")])])]),t._v(" "),e("li",[e("p",[e("code",[t._v("deactivated")]),t._v(" -> "),e("code",[t._v("onDeactivated")])])])]),t._v(" "),e("p",[t._v("![截屏2022-04-02 22.20.13](/Users/liulu/Desktop/截屏2022-04-02 22.20.13.png)")]),t._v(" "),e("h1",{attrs:{id:"_6-hook函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-hook函数"}},[t._v("#")]),t._v(" 6.hook函数")]),t._v(" "),e("ul",[e("li",[t._v("什么是hook?-----本质上的一个函数,把setup函数中使用的Composition API进行了封装")]),t._v(" "),e("li",[t._v("类似于vue2.x中的mixin")]),t._v(" "),e("li",[t._v("自定义hook的优势:复用代码,让setup中的逻辑更清楚易懂")])]),t._v(" "),e("h1",{attrs:{id:"_7-toref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-toref"}},[t._v("#")]),t._v(" 7.toRef")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("作用:创建一个"),e("strong",[t._v("ref")]),t._v("对象,其"),e("strong",[t._v("value")]),t._v("值指向另一个对象中的某个属性")])]),t._v(" "),e("li",[e("p",[t._v("语法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const name=toRef(person,'name')\n")])])])]),t._v(" "),e("li",[e("p",[t._v("应用:要将响应式对象中的某个属性单独提供给外部使用")])]),t._v(" "),e("li",[e("p",[t._v("扩展:"),e("strong",[t._v("toRef")]),t._v("和"),e("strong",[t._v("toRefs")]),t._v("功能一致,但可以批量创建多个ref对象,语法:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("toRefs(person)\n")])])])])]),t._v(" "),e("h1",{attrs:{id:"_8-其它composition-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-其它composition-api"}},[t._v("#")]),t._v(" 8.其它Composition API")]),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"shallowreactive和shallowref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shallowreactive和shallowref"}},[t._v("#")]),t._v(" shallowReactive和shallowRef")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("shallowReactive")]),t._v(":只处理对象最外层的响应式(浅响应式)")]),t._v(" "),e("li",[e("strong",[t._v("shallowRef")]),t._v(": 只处理基本数据类型的响应式,不进行对象的响应式")]),t._v(" "),e("li",[t._v("什么时候使用?\n"),e("ul",[e("li",[t._v("如果又一个对象数据,结构比较深,但变卦时只是外层属性变化====>"),e("strong",[t._v("shallowReactive")])]),t._v(" "),e("li",[t._v("如果有一个对象数据,后续功能不会修改该对象中的属性,而是生新的对象来替代====>"),e("strong",[t._v("shallowRefÏ")])])])])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"readonly和shallowreadonly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#readonly和shallowreadonly"}},[t._v("#")]),t._v(" readonly和shallowReadonly")]),t._v(" "),e("ul",[e("li",[t._v("readonly:让一个响应式的数据变为只读(深只读)")]),t._v(" "),e("li",[t._v("shallowReadonly:让一个响应式数据变为只读的(浅只读)")]),t._v(" "),e("li",[t._v("应用场景:不希望数据被修改时")])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"toraw与markraw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#toraw与markraw"}},[t._v("#")]),t._v(" toRaw与markRaw")]),t._v(" "),e("ul",[e("li",[t._v("toRew\n"),e("ul",[e("li",[t._v("作用:讲一个有"),e("strong",[t._v("reactive")]),t._v("生成的"),e("strong",[t._v("响应式数据")]),t._v("转为"),e("strong",[t._v("普通对象")])]),t._v(" "),e("li",[t._v("使用场景:用于读取响应式对象对应的普通对象,对这个普通对象的所有操作,不会引起页面的更新")])])]),t._v(" "),e("li",[t._v("markRaw\n"),e("ul",[e("li",[t._v("作用:标记一个对象,使其"),e("strong",[t._v("永远不会变成响应式对象")])]),t._v(" "),e("li",[t._v("应用场景:\n"),e("ul",[e("li",[t._v("有些值不应该被响应式的,例如复杂的第三方库")]),t._v(" "),e("li",[t._v("当渲染具有不可变数据源的大列表的时候,跳过响应式转换可以提高性能")])])])])])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"customref"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#customref"}},[t._v("#")]),t._v(" customRef")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("作用:创建一个自定义的ref,并对其依赖项跟踪和更新触发进行显示控制")])]),t._v(" "),e("li",[e("p",[t._v("实现防抖效果")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template>\n  <h1>自定义ref</h1>\n  <div>\n    <input type="text" v-model="keyword" />\n    <span>{{ keyword }}</span>\n  </div>\n</template>\n\n<script>\nimport { customRef } from "@vue/reactivity";\nexport default {\n  setup() {\n    // 防抖函数的实现\n    function useCustomRef(value, delay = 2000) {\n      return customRef((track, trigger) => {\n        let timer;\n        return {\n          get() {\n            console.log(value, "get");\n            track();\n            return value;\n          },\n          set(newVal) {\n            console.log(newVal, "值被修改l1111");\n            clearTimeout(timer);\n            timer = setTimeout(() => {\n              //默认等待2s之后再执行\n              value = newVal;\n              trigger();\n            }, delay);\n          },\n        };\n      });\n    }\n    let keyword = useCustomRef("hello", 1000);\n    return {\n      keyword,\n    };\n  },\n};\n<\/script>\n\n<style>\n</style>\n')])])])])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"provide与inject"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#provide与inject"}},[t._v("#")]),t._v(" provide与inject")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("作用:实现"),e("strong",[t._v("祖孙之间")]),t._v("的通信Ï")])]),t._v(" "),e("li",[e("p",[t._v("套路:父组件有一个"),e("strong",[t._v("provide")]),t._v("选项来提供数据,孙组件有"),e("strong",[t._v("inject")]),t._v("选项来使用这些数据")])]),t._v(" "),e("li",[e("p",[t._v("具体写法")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("祖组件写法")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import { reactive,toRefs, provide } from "vue"; //引入provide\n setup() {\n    let person = reactive({\n      name: "章三",\n      age: 24,\n      job: 20,\n    });\n\n    provide("user", person);\n\n    return {\n      ...toRefs(person),\n    };\n  },\n')])])])]),t._v(" "),e("li",[e("p",[t._v("孙组件接收")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('import { inject } from "vue";\nsetup() {\n    let person = inject("user");\n    return {\n      person,\n    };\n  },\n')])])])])])]),t._v(" "),e("li")])]),t._v(" "),e("li",[e("h4",{attrs:{id:"响应式数据的判断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式数据的判断"}},[t._v("#")]),t._v(" 响应式数据的判断")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("isRef")]),t._v(":检查一个值是否是"),e("strong",[t._v("ref")]),t._v("对象")]),t._v(" "),e("li",[e("strong",[t._v("isReactive")]),t._v(":检查一个对象是否是由"),e("strong",[t._v("reactive")]),t._v("创建的响应式对象")]),t._v(" "),e("li",[e("strong",[t._v("isReadonly")]),t._v(":检查一个对象是否是由"),e("strong",[t._v("readonly")]),t._v("创建的只读代理")]),t._v(" "),e("li",[e("strong",[t._v("isProxy")]),t._v(":检查一个对象是否是由"),e("strong",[t._v("reactive")]),t._v("或者"),e("strong",[t._v("readonly")]),t._v("方法创建的代理对象")])])])]),t._v(" "),e("h1",{attrs:{id:"_9-composition-api的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-composition-api的优势"}},[t._v("#")]),t._v(" 9.Composition API的优势")]),t._v(" "),e("ol",[e("li",[e("h4",{attrs:{id:"options-api-存在的问题-vue2-配置式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-api-存在的问题-vue2-配置式"}},[t._v("#")]),t._v(" Options API 存在的问题(vue2) 配置式")]),t._v(" "),e("p",[t._v("使用传统的Options API 新增或者修改一个需求,就需要分别在data,methods,computed里修改")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("export default{\n   data(){},\n   methods:{},\n   computed:{}\n}\n")])])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"composition-api-的优势-vue3-组合式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#composition-api-的优势-vue3-组合式"}},[t._v("#")]),t._v(" Composition API 的优势(vue3) 组合式")]),t._v(" "),e("p",[t._v("我们可以更加优雅的组织我们的代码,函数.让相关功能更加有序的组织在一起.")])])]),t._v(" "),e("h1",{attrs:{id:"_10-新的组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-新的组件"}},[t._v("#")]),t._v(" 10.新的组件")]),t._v(" "),e("ul",[e("li",[e("h4",{attrs:{id:"fragment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fragment"}},[t._v("#")]),t._v(" Fragment")]),t._v(" "),e("ul",[e("li",[t._v("在vue2中:组件必须有一个根元素")]),t._v(" "),e("li",[t._v("在vue3中:组件可以没有根标签,内部会讲多个标签包含在一个Fragment虚拟元素中")]),t._v(" "),e("li",[t._v("好处:减少标签层级,减少内存占用")])])]),t._v(" "),e("li",[e("p",[t._v("Teleport")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("可以将组件里面嵌套很深的组件,移动到body里面")])]),t._v(" "),e("li",[e("p",[t._v("实现代码:"),e("strong",[t._v("teleport")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<teleport to="body">\n    <div class="panel" v-if="isShow" @click="closeDialog">\n      <div class="box">\n        这是一个弹框\n        <div>这是一些内容</div>\n        <button >关闭弹框</button>\n      </div>\n    </div>\n  </teleport>\n')])])])])])]),t._v(" "),e("li",[e("h4",{attrs:{id:"suspense"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suspense"}},[t._v("#")]),t._v(" Suspense")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("等待异步组件时渲染一些额外内容,让应用有更好的用户体验")])]),t._v(" "),e("li",[e("p",[t._v("使用步骤")]),t._v(" "),e("ul",[e("li",[t._v("异步引入组件")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\nimport { defineAsyncComponent } from "vue";\nconst Child = defineAsyncComponent(() => import("../components/Child.vue")); //异步引入\n')])])]),e("ul",[e("li",[e("p",[t._v("使用"),e("strong",[t._v("suspense")]),t._v("包裹组件,并配置好"),e("strong",[t._v("default")]),t._v("和"),e("strong",[t._v("fallback")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<Suspense>\n    <template v-slot:default>\n      <Child></Child>\n    </template>\n    <template v-slot:fallback>\n      <span>....加载中</span>\n    </template>\n  </Suspense>\n")])])])])])])]),t._v(" "),e("h1",{attrs:{id:"_11-其它"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-其它"}},[t._v("#")]),t._v(" 11.其它")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("data选项应始终被声明为一个函数。")])]),t._v(" "),e("li",[e("p",[t._v("过度类名的更改：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Vue2.x写法")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter,\n.v-leave-to")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-leave,\n.v-enter-to")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("Vue3.x写法")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-enter-from,\n.v-leave-to")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".v-leave-from,\n.v-enter-to")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])])]),t._v(" "),e("li",[e("p",[e("strong",{staticStyle:{color:"#DD5145"}},[t._v("移除")]),t._v("keyCode作为 v-on 的修饰符，同时也不再支持"),e("code",[t._v("config.keyCodes")])])]),t._v(" "),e("li",[e("p",[e("strong",{staticStyle:{color:"#DD5145"}},[t._v("移除")]),e("code",[t._v("v-on.native")]),t._v("修饰符")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("父组件中绑定事件")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-component")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("close")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleComponentEvent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("v-on:")]),t._v("click")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleNativeClickEvent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("子组件中声明自定义事件")]),t._v(" "),e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}},[e("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("emits")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'close'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])]),t._v(" "),e("li",[e("p",[e("strong",{staticStyle:{color:"#DD5145"}},[t._v("移除")]),t._v("过滤器（filter）")]),t._v(" "),e("blockquote",[e("p",[t._v("过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。")])])]),t._v(" "),e("li",[e("p",[t._v("......")])])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);