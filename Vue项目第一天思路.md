# 内容回顾

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

## 构建项目
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

------

## 今日所安装的第三方包

```
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

## 今日所安装的包
	第一次安装
		包:mint-ui
		应用场景:App.vue中实现头部和底部
		安装方式:cnpm i mint-ui --save/-S


	第二次安装
		包:vue-router
		应用场景:在App.vue中间要呈现内容的时候，使用它
		安装方式:cnpm i vue-router -S


	第三次安装
		包:vue-resource
		应用场景:在首页轮播功能获取轮播数据的时候
		安装方式:cnpm i vue-resource -S
		
	第四次安装
		包：file-loader
		应用场景:在导入mui的样式的时候，需要到入字体文件mui.ttf
		安装方式:cnpm i file-loader --save-dev

----------------