

## webpack
	作用:打包

	核心概念
		入口
		出口
		loaders 打包非.js文件
		plugins 插件
		
	参数:
		--progress 查看打包进度
		--config xxx.js 指定打包的配置文件
		-p 压缩
		--watch 监控

## 第一天构建项目
	1、建立必要的文件和文件夹
		src 项目的源文件
			main.js 打包的入口
			App.vue 项目运行起来，用户看到的第一个组件
			
		package.json 记录项目信息
		webpack.config.dev.js 开发阶段配置文件
		
	2、实现热更新(热重载/热替换)
		App.vue
		
		main.js
			导入App.vue
			创建根实例，实现render函数
			
		webpack.config.dev.js
			loader
			
		使用`html-webpack-plugin`生成index.html
			
		webpack-dev-server
			--hot 开启热重载
			--open 自动打开浏览器
			--port 端口 指定端口，不指定就是8080

------------------

### 搭建项目之创建项目必要的文件和文件夹

```
注意:创建的项目的文件夹不要放在中文目录下，项目的名称不要有中文
```

```
src: 项目源代码所在目录
	main.js 项目打包的入口文件
	App.vue 启动项目之后，用户看到的第一个组件
	
package.json：项目的描述文件
webpack.config.dev.js ： 开发阶段的webpack的配置文件
```

### 搭建项目，当更改了App.vue中内容的时候，实现热重载

```
1、写好App.vue中的代码
	写在template之间
	
2、在main.js中写代码
	2.1、导入App.vue
	
	2.2、使用Vue框架，把App.vue作为第一个让用户看到的组件
		安装vue: cnpm i vue --save
		创建根实例，在根实例中，让我们的框架第一个显示App.vue
	
3、在webpack.config.dev.js中配置打包的指令
	入口
	loader: 
		安装`vue-loader`对我们.vue结尾的文件打包
		
4、使用`html-webpack-plugin`，来根据参照文件(template.html)，生成一个index.html
	4.1、先写好template中的内容，里面要写上id=app的div
	4.2、安装`html-webpack-plugin`插件，在webpack.config.dev.js中写好代码
		参考:https://github.com/jantimon/html-webpack-plugin
		
5、使用 webpack-dev-server 打包
	在我们项目的根目录下，运行下面的代码:
		webpack-dev-server --progress --config webpack.config.dev.js --open --port 6008 --hot
		
	解释:
		--progress 查看打包进度
		--config xxx.js 指定打包的配置文件
		--open 打开默认浏览器
		--port 6008 指定打开的端口，如果不指定，默认是8080
		--hot 启动热重载，告诉vue-loader可以进行热重载了

注意：
	开发阶段，我们生成的index.html及bundle.js都发布到`webpack-dev-server`这个服务器上面去了，我们在项目里面是看不到生成的实实在在的这些文件的
```

## 使用vue-cli搭建我们的项目

## vue-cli
	作用:帮助我们快速创建项目的结构

	参考

### 使用步骤:
	1、安装全局包 
		cnpm i vue-cli -g
		cnpm i cross-env -g
		
		cross-env 设置项目的环境
		
	2、在桌面生成项目
		vue init webpack-simple my_vue_project
		
	3、切换到根目录下
		cd my_vue_project
		cnpm install 安装依赖的包
		
	4、运行
		npm run dev

------------------

## App.vue
	头部
		1、集成mint-ui到项目中
			安装
			main.js中，导入并且集成，Vue.use(xxx)
			
		2、在需要的地方去使用它
			App.vue的头部
	
	底部TabBar
	
	实现中间的路由部分
		1、集成vue-router到项目中
			安装
			main.js中，导入并且集成，Vue.use(xxx)
		
		2、在需要的地方去使用它	
			html中
				router-link：触发路径				
				router-view：占位符
				
			js中
				定义/新建组件
				创建路由对象，设置路由规则(自动帮助我们注册)
				把我们创建好的路由对象，注入到根实例中

-------------------------				
​	
## mint-ui
	基于Vue的移动端组件库
	地址:https://mint-ui.github.io/#!/zh-cn
	
	PC端基于Vue的组件库
		https://www.awesomes.cn/subject/vue#应用-框架
		http://element.eleme.io/#/zh-CN/component/installation

------------------

## home.vue

### 轮播图
	步骤:
		1、利用vue-resource获取轮播的数据
			把vue-resource集成到我们项目中来
				安装
				在main.js中导入并且Vue.use(xxx)
				
			在需要的地方使用它
		
		2、使用mint-ui中的swipe组件来实现轮播功能
			参考:https://mint-ui.github.io/docs/#/zh-cn2/swipe

### 九宫格布局
	步骤:
		1、把mui集成到项目中(假设它没有上传到npm)
			把mui的dist目录下面的那些需要的内容，拷贝到当前目录下
			在main.js导入其样式文件
			
		2、在需要使用它的地方，使用
			home.vue

### mui
	http://www.dcloud.io/hellomui
------------------

## 新闻列表
	步骤:
		1、点击首页的新闻资讯按钮，跳转到新闻列表组件
			在home.vue中，点击新闻咨询，使用router-link触发
			创建newslist.vue
			main.js中写代码，设置路由规则


		2、使用vue-resource发送网络请求
			this.$http.get(xxx).then()
			
			注意:
				必须在main.js中使用Vue.use(VueResource)


		3、渲染新闻列表
-----------------

## 第一天所安装的包

第一次安装:

	包:vue
	应用场景:在main.js中使用Vue去展示App.vue的时候用到
	安装方式:cnpm i vue --save

第二次安装:
	包:vue-loader vue-template-compiler css-loader style-loader
	应用场景:打包.vue结尾的文件的时候
	安装方式：cnpm i vue-loader vue-template-compiler css-loader style-loader --save-dev
	
	注意：如果包安装失败了之后，先卸载掉，比如
		cnpm uninstall vue-loader --save-dev

第三次安装:
	包:html-webpack-plugin webpack webpack-dev-server
	应用场景:在我们使用一个参照文件生成index.html的时候，需要用到它
	安装方式:cnpm i html-webpack-plugin webpack webpack-dev-server --save-dev
	第四次安装
		包:mint-ui
		应用场景:App.vue中实现头部和底部
		安装方式:cnpm i mint-ui --save/-S


	第五次安装
		包:vue-router
		应用场景:在App.vue中间要呈现内容的时候，使用它
		安装方式:cnpm i vue-router -S


	第六次安装
		包:vue-resource
		应用场景:在首页轮播功能获取轮播数据的时候
		安装方式:cnpm i vue-resource -S
		
	第七次安装
		包：file-loader
		应用场景:在导入mui的样式的时候，需要到入字体文件mui.ttf
		安装方式:cnpm i file-loader --save-dev

----------------

# 第二天目标

## newslist.vue

```
1、渲染
```

```
2、对服务器返回的时间，进行过滤
	全局的过滤器 + momentjs
	
	全局过滤器的语法:
		Vue.filter('过滤器名称',处理函数)
		
	moment的语法
		moment(时间的原始数据)
		format(要格式化的时间格式字符串)
```

------

## newsinfo.vue

```
步骤:
	1、点击了新闻列表中的某一项，跳转到新闻详情组件，并且要带上新闻id
		newslist.vue中通过router-link实现跳转
		创建newsinfo.vue并且在main.js中导入，并且设置路由规则
	
	2、拿着新闻id获取新闻详情的数据
	
	3、渲染组件
```

------

## 显示和隐藏TabBar和导航栏的返回按钮

```
要解决问题的关键点:
	监控路由的变化，获取当前的路径
	
	在App.vue中，通过`watch`监控`$route`，为什么要把监控的代码写在App.vue中，因为我们导航栏的返回按钮和底部TabBar是写在App.vue中的
	
步骤:
	1、根据路径来显示和隐藏导航栏上面的返回按钮
		创建一个返回按钮
		给返回按钮添加点击事件，并且通过编程式导航，进行回退
		参考:https://router.vuejs.org/zh-cn/essentials/navigation.html
```

```
	2、根据路径来显示和隐藏底部的TabBar
		还可以使用动态绑定class的方式来实现
		注意点：动态添加class也是根据boolean值
		参考:https://cn.vuejs.org/v2/guide/class-and-style.html
```

### 声明式导航&编程式导航

```
相同点:
	都能进行路由导航，都能前进和后退
	
不同点:
	写法不一样:
		声明式，写在组件的template里面的，是通过router-link来实现的
		
		编程式，写在我们js里面的某个函数中的，它是通过$router.xxx方法来实现的
```

### $route 、$router、routes

```
routes前面没有$，不是Vue对象的属性，它是在设置路由规则的时候，使用的，千万不要写错了
```

```
相同点：
	都是Vue对象的属性
	
不同点：
	作用不同:
		$route:
			1、通过它，获取上一个路由传递过来的参数
			2、通过它，监控路由的变化
			3、获取到当前的路径
		
		$router:编程式导航，路由的前进和后退
		
	写法不同:
		$route:
			获取值 this.$route.params.xxx
			监控变化 $route:function(newValue,oldValue){}
			
		$router:
			前进:$router.push() $router.go(正数)
			后退:$router.go(负数)
```

------

## 评论子组件(父子组件通讯)

```
为什么要抽取评论组件?
	评论组件在很多地方都是用到了，并且每个使用它的地方，评论的UI的界面一样，只是数据不一样，这个时候，就可以把评论组件单独抽离出来
	
Vue中，把单独抽离出来公共的组件，就称之为子组件

父组件
	newsinfo.vue

子组件
	subcomment.vue
```

### 代码步骤

```
1、新建一个子组件
	subcomment.vue
		template
		style
		script

2、在父组件中集成子组件
	例子:在新闻详情父组件中集成评论子组件
		2.1、在新闻详情父组件中导入评论子组件
		2.2、在父组件中注册子组件
		2.3、在父组件的template中，以自定义标签的形式使用

3、从父组件中传递必要的条件给子组件【掌握】
	参考:https://cn.vuejs.org/v2/guide/components.html#组件组合
	
	接收方:(subcomment.vue)
		在导出的Vue对象中，通过props声明它预期的数据
			props:['xxx']
			
	传递方:(newsinfo.vue)
		<子组件 xxx='值'></子组件>

4、子组件拿到父组件传递过来的值之后，实现自己内部的业务逻辑
	4.1、搭建评论组件的UI界面
	
	4.2、完成展示评论内容(包含加载更多)
		一进来展示第一页的数据
		当点击加载更多按钮之后，加载后续页面的数据
	
	4.3、完成提交评论的功能
		获取textarea中的内容
			原生、jquery、v-model、ref
			
		提交给服务器
		提交成功之后，需要做几件事情
			清空内容
			提示用户提交成功
			重新加载第一页的数据(把别人评论的数据获取下来)
```

------

## 开发阶段&生产阶段

```
注意点:
	1、开发阶段、我们请求的数据接口的地址一般是一个内网地址
		请求的也是公司内部的服务器(192.168.xxx.xx)
```

```
	2、生产阶段、我们请求的数据接口的地址是公网(外网的地址)
		外网可以通过，比如 http://183.232.231.173/
```

------

## 第二天安装的包

```
第一次安装:
	包:momentjs
	应用场景:在newslist.vue中对服务器返回的时间过滤的时候
	安装方式:cnpm i moment -S
	
第二次安装:
	包:jquery
	应用场景:获取textarea的值的时候
	安装方式:cnpm i jquery -S
	
```

## 第三天

## 图片分类 & 图片列表

```
步骤:
	1、通过路由导航到photolist.vue
		1.1、创建photolist.vue
		1.2、在main.js中导入photolist.vue，设置路由规则
		1.3、在home.vue中，通过声明式导航，进行路由跳转
		
		注意点:我们在.vue文件中，除了通过template写内容，还可以通过自己实现js中的render函数来写组件内容
	
	2、实现图片分类
		2.1、先获取数据
		
		2.2、渲染
	
	3、根据分类id加载图片列表
		3.1、监听分类id的点击
		
		3.2、根据id获取对应id的图片列表数据
		
		3.3、渲染
```

## 模版字符串

```
语法:``
```

```
作用:
	1、格式化字符串
		比如换行，不需要加\r\n
	
	2、占位、替换
```

------

## 图片详情组件

```
步骤:
	1、点击图片列表，导航到图片详情组件，带上图片id
		1.1、创建图片详情组件
		1.2、在main.js中导入photoinfo.vue组件，并且设置路由规则
		1.3、在photolist.vue中通过router-link(声明式导航)触发路由
	
	2、根据图片id获取图片详情数据
	
	3、渲染
		图片缩略图数组
			1、获取数据(另外一个接口)
			2、渲染九宫格视图
			3、实现预览图片的功能
		
		评论子组件
			1、在photoinfo.vue(父组件)中导入subcomment.vue
			2、在父组件的components中注册
			3、在父组件的template中使用
			4、父组件给子组件传递commentId
```

## 组件命名的约定

```
https://cn.vuejs.org/v2/guide/components.html#组件命名约定
```

## 预览图片（photoswipe.com && vue-preview）

```
参考:
	https://github.com/LS1231/vue-preview
	
步骤:
	1、集成到项目中来
		下载
		在main.js中，导入，并且通过Vue.use(xxx)集成它	
	
	2、在需要的地方去使用它
		photoinfo.vue中使用
		
	3、在使用我们的vue-preview的时候，出现问题如何解决?
		能百度就去百度
		运行提供的demo，如果demo没有错，但是自己写错了，对着demo更改自己的代码
```

## photoswipe

```
纯原生，没有依赖于任何第三方库(比如jquery)
```

```
适用于PC端与移动端
```

```
使用：
	参考:http://photoswipe.com/documentation/getting-started.html
	
	步骤:
		1、在html中引入它的css、js
		
		2、把.pswp，写在你需要的dom元素中去
		
		3、写js代码，给它提供数据
```

------

## 商品列表

```
步骤:
	1、跳转到商品列表组件
		创建goodslist.vue
		在main.js中导入并且设置路由规则
		在home.vue中通过声明式导航跳转到goodslist.vue
	
	2、获取商品列表的数据
	
	3、渲染出来
```

------

## 今日安装的包

```
第一次安装包
	包:vue-preview
	使用场景:图片详情中，进行缩略图预览
	安装方式:cnpm i vue-preview -S
```

# 第四天目标

## 商品详情组件

```
步骤：
	1、创建goodsinfo.vue
	2、在main.js中，导入并且设置路由规则
	3、在goodslist.vue，通过声明式导航，触发路由
	
完成商品详情数据的展示
	1、根据id获取数据
		
	2、渲染数据
```

### 抽取轮播子组件

```
思路分析:
	1、创建subswipe.vue
	2、集成到goodsinfo.vue中来
	3、goodsinfo.vue(父组件)传值给subswipe(子组件)
		把url传递给子组件
		
		接收方:(subswipe) 
			props:
		
		传值方:
		
步骤:
	1、完成商品详情中轮播子组件的功能
	2、改造home.vue中轮播的功能
	
注意:
	1、组件要有共同点
	2、尽可能把业务逻辑放在子组件中去,父组件只需要集成子组件，并且给他传递必要的参数就OK
```

### 回顾编程式导航，完成图文介绍和商品评论功能

```
$router
```

```
步骤：
	1、使用编程式导航，跳转到图文介绍组件中去，并且要带上商品id
		1.1、创建pictureAndText.vue
		1.2、设置路由规则
		1.3、使用编程式导航，跳转
		1.4、根据商品id、发送网络请求，获取数据、渲染
```

```
	2、使用编程式导航，跳转到商品评论组件里面去，并且要带上商品id
		2.1、创建goodscomment.vue
		2.2、设置路由规则
		2.3、使用编程式导航，跳转
		2.4、集成评论子组件
```

### 子组件(subnumber.vue)传值给父组件(goodsinfo.vue)

```
原理:通过自定义事件传递值
```

```
步骤:
	1、创建subnumber.vue
	2、在父组件中集成subnumber.vue
	3、子组件当它内部数据变化之后，传递给父组件
	
子组件传值给父组件
	接收方:(父组件)
		在使用子组件的地方，使用v-on监听事件，写好事件处理函数，并且这个函数是写在父组件的methods中的
	
	发送方:(子组件)
		使用this.$emit('自定义事件名称',值) 触发
		
注意点:
	1、自定义事件千万不要和系统的，比如click、mouseover等冲突
	2、我们父组件中监听自定义事件的时候，写处理函数的时候，只需要写函数名称即可，千万不要加`()`调用
```

### 非父子关系组件传值

```
原理:通过自定义事件传递值
```

```
达到的目的：
	当我们点击了goodsinfo.vue加入购物车按钮，把值传递到App.vue组件中去，并且更新徽标的值
	
步骤:
	1、先在App.vue的TabBar购物车那一个标签中，写一个徽标的span(默认值0)
	
	2、从goodsinfo.vue中把商品的数量值，传递到App.vue【重点】
		2.1、创建一个公共的Vue对象(bus)
		2.2、在发送方(goodsinfo.vue)，通过bus.$emit('自定义事件名称',值)
		2.3、在接收方(App.vue)中，通过bus.$on('自定义事件名称',处理函数)
	
	3、App.vue根据接收到的值，更新徽标上面的数组，如果是0隐藏，非0就显示
		遇到了一个问题，就是在处理函数中，通过this想更改badge，但是失败了，原因是里面this,现在代表的是bus对象
		解决方式，改为箭头函数
```

------

## 第五天目标

## Vuex

```
全家桶:
	vue、vue-router、vuex

作用:类似于仓库的作用，在项目中进行全局存取数据用的

解释:
	状态 === 数据
	状态/数据 管理模式
	
Vuex 是什么？	
	专门给vue设计的状态管理模式，可以利用它，在全局中存取数据
```

## Vuex几个核心概念说明

```
state:最终存储数据的地方
getter:从仓库中取
mutation:同步往仓库中存，直接可以操作state中数据
action:异步往仓库中存，不可以直接操作state中的数据，必须借助与mutations再操作

module : 可以创建多个仓库
```

## 使用Vuex

```
步骤:
	1、把vuex集成到项目中
		1.1、安装
		1.2、在main.js中导入并且通过Vue.use(xxx)
	
	2、创建仓库
		2.1 通过 const store = new Vuex.Store({}) 创建仓库
		2.2 把创建好的仓库，注入到根实例，这样整个项目才能使用
	
	3、在项目中，通过写代码往仓库中存取数据
```

## 在项目中，使用Vuex存取数据

```
以 在goodsinfo.vue中 点击加入购物车为例，把数据存到仓库
   在shopcart.vue 中 取出仓库中的值，展示
   在App.vue中，取出仓库中放的商品的总个数，展示
   
步骤:
	1、先写state，它的值是一个对象，在这个对象里面，要写好我们存数数据的名称，它的格式是什么？
	
	2、写好mutations里面的代码，它也是一个对象，对象里面是函数（函数第一个参数是state，这是固定的写法）
		调用必须使用 this.$store.commit('方法名称',载荷)
		
	3、写好getters中的代码，getters中也是一个对象，对象里面也是一个方法（函数第一个参数是state，这是固定的写法）并且要有返回值
		调用必须使用 this.$store.getters.函数名称
		
	4、写actions中的代码
	
注意：
	1、state、getter、mutation、action都是以对象的形式书写代码
	2、在mutations中写函数的时候，第一个参数是固定的，就是state,从第二个参数开始，就是载荷(说白了就是参数)
	3、在getters中写的方法，必须要有返回值，函数中的第一个参数也是state
```

------

## 完成购物车页面的展示及操作

```
我现在存储到仓库中的数据是下面这样滴
	[{goodsId:87,count:2},
	{goodsId:88,count:3},
	{goodsId:87,count:3}]
	
步骤:
	1、先搞定数据
		1.1、先把 [{goodsId:87,count:2},
				  {goodsId:88,count:3},
	              {goodsId:87,count:3}] 
	              	  
	              var tempObj = {87:5,88:3}
	              
	              var tempArray = [87,88].join(',')
	              
	              var idsString = 87,88
	              
	              发送网络请求
	              
	              [{
	              	id:87,
	              	title:'华为',
	              	count:5,
	              	...
	              },{
	              	id:88,
	              	title:'苹果',
	              	count:3,
	              	...
	              }]
	
	2、渲染视图
		见代码
	
	3、对购物车的操作
		3.1、一进来计算总数量和总价格
		
		3.2、根据开关的状态，来重新计算总数量和总价格，并且设置开关的启用和禁用状态
		
		3.3、删除我们购物车中的某一项商品
			弹出一个确认删除的框框
				把该商品从仓库中删除(根据商品id来删除)	
				重新渲染(更改模型数据)
				重新计算总数量和总价格	

		注意:我们统计总数量和总价格是根据开关的状态来的，只统计开启的商品项
```

------

## #今日安装的第三方包

第一次安装:

	包:vuex
	应用场景:在使用vuex存取购物车的数据时候用到
	安装方式：cnpm i vuex --save/-S
## webpack打包上线

```
webpack把源代码打包成符合生产环境部署的前端资源
	理解就行，工作中，拷贝我的代码就行
```

### 打包优化的思路(代码能记住多少，到时候去公司开发，就把那个写好的生产阶段的webpack配置文件拷贝过去就行)

```
1、对bundle.js进行es6转es5及压缩
```

```
2、
```

### 代码步骤

```
1、在项目根目录下创建一个生产阶段的webpack.config.prod.js配置文件
	注意:生产阶段配置文件中的内容，就是在开发阶段的基础上，多写一些针对生产环境的配置
	
2、在package.json中增加一个scripts的配置
	"build":"webpack --progress --config webpack.config.prod.js"
	
3、对我们项目中es6的代码转es5【babel】
	参考:https://babeljs.io/docs/setup/#installation 选择webpack构建工具
	
	3.1、安装包
		cnpm i babel-loader babel-core babel-preset-env --save-dev
	
	3.2、使用
		在当前根目录下，创建一个babel的配置文件，写好预设代码
			{
			    "presets": ["env"]
			}
			
		在webpack.config.prod.js中对js进行转换
			{ 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /vue-preview.src.*?js$/,
                loader: 'babel-loader'
            }
            
4、对bundle.js和index.html压缩
	压缩bundle.js
		参考:https://cn.vuejs.org/v2/guide/deployment.html
		在 webpack.config.prod.js 中配置
			new webpack.DefinePlugin({
	            'process.env': {
	              NODE_ENV: '"production"'
	            }
	        }),
	        new webpack.optimize.UglifyJsPlugin({
	            compress: {
	                warnings: false //压缩警告
	            },
	            comments: false //去掉版权信息等注释
	        })
   	
   	压缩index.html
   		参考:https://github.com/jantimon/html-webpack-plugin
   		https://github.com/kangax/html-minifier#options-quick-reference
			minify:{
                collapseWhitespace:true,//压缩空格
                removeComments:true,//去除注释
                minifyJS:true,//压缩js
                minifyCSS:true//压缩css
            }
            
 5、对bundle.js进行优化
 	达到的目的：
 		bundle.js 尽可能小，可包含我们自己写的源代码
 		
 	什么原因造成他过大?
 		项目中用的图标
 		第三方包
 		项目中的样式
```

### 把项目中的图片和第三方包及样式，从bundle.js抽离出来

```
你知道原理即可，能记住则记住，到时候看我的笔记和代码即可
```

```
1、从bundle.js中抽离图片(见代码)
```

```
2、从bundle.js中抽离第三方包(见代码)
	entry:
		改成对象，多入口
		
	output
		改成多出口
		
	plugin
		见代码
		
3、从bundle.js中抽离第三方样式
	使用一个第三方插件
		https://github.com/webpack-contrib/extract-text-webpack-plugin
```

```
4、vue提供了路由懒加载（把每个组件从bundle.js中抽离出来，等需要的时候，再按需加载...）
	第一步：安装 https://babeljs.io/docs/plugins/syntax-dynamic-import/
	
	第二步：把router.js中，导入组件的方式改成 const Foo = () => import('./Foo.vue')
```

### 发布阿里云