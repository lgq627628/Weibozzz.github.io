(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{170:function(s,a,t){s.exports=t.p+"assets/img/16b9358b7d5d09b1.985b738f.png"},232:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"查看homebrew安装的服务列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看homebrew安装的服务列表"}},[s._v("#")]),s._v(" 查看homebrew安装的服务列表")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew services list\n")])])]),e("h3",{attrs:{id:"查看安装路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看安装路径"}},[s._v("#")]),s._v(" 查看安装路径")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew list nginx\n")])])]),e("h2",{attrs:{id:"mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" mysql")]),s._v(" "),e("h3",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql\n")])])]),e("h3",{attrs:{id:"启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql.server start\n")])])]),e("p",[s._v("此时可能会报错：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("Starting MySQL\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" ERROR"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" The server quit without updating PID "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/usr/local/var/mysql/xxxxx.local.pid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n")])])]),e("p",[s._v("这是由于权限问题造成的\n可以通用一下命令修改权限")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" -R a+rwx /usr/local/var/mysql\n")])])]),e("p",[s._v("再执行")]),s._v(" "),e("p",[e("code",[s._v("sudo mysql.server start")])]),s._v(" "),e("p",[s._v("显示")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("Starting MySQL\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" SUCCESS"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])]),e("p",[s._v("启动成功")]),s._v(" "),e("p",[s._v("配置\n启动后，需要对mysql进行一些配置，可以通过以下命令进行初始化：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("/usr/local/opt/mysql/bin/mysql_secure_installation\n")])])]),e("h3",{attrs:{id:"关闭"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭"}},[s._v("#")]),s._v(" 关闭")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql.server stop\n")])])]),e("h3",{attrs:{id:"重启"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启"}},[s._v("#")]),s._v(" 重启")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mysql.server restart\n")])])]),e("h3",{attrs:{id:"连接navicat报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接navicat报错"}},[s._v("#")]),s._v(" 连接navicat报错")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("Client does not support authentication protocol\n\n")])])]),e("p",[s._v("解决")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("ALTER "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),s._v(" PASSWORD EXPIRE NEVER"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改加密规则 （这行我没有写，不过貌似也可以）")]),s._v("\n\nALTER "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED WITH mysql_native_password BY "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#更新一下用户的密码 ")]),s._v("\n\nFLUSH PRIVILEGES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新权限")]),s._v("\n\n")])])]),e("p",[s._v("报错 "),e("code",[s._v("1130 - Host XXX is not allowed to connect to this MySQL server")])]),s._v(" "),e("p",[s._v("解决")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("mysql -u root -p\nuse mysq"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" from user where "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("user")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nupdate user "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" where user "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#将Host设置为通配符%")]),s._v("\nflush privilegs "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#刷新权限")]),s._v("\n\n")])])]),e("h2",{attrs:{id:"安装java"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装java"}},[s._v("#")]),s._v(" 安装java")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew cask "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" java\n")])])]),e("h2",{attrs:{id:"maven"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#maven"}},[s._v("#")]),s._v(" maven")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew search maven\nbrew info maven\nbrew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" maven\n")])])]),e("h2",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[s._v("#")]),s._v(" redis")]),s._v(" "),e("p",[s._v("1.安装redis")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis\n")])])]),e("p",[s._v("2.启动redis服务")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew services start redis 或 redis-server /usr/local/etc/redis.conf\n")])])]),e("p",[s._v("3.关闭redis服务")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew services stop redis\n")])])]),e("p",[s._v("4.重启redis服务")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew services restart redis\n")])])]),e("p",[s._v("5.打开图形化界面")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("redis-cli\n")])])]),e("h2",{attrs:{id:"tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[s._v("#")]),s._v(" tomcat")]),s._v(" "),e("p",[s._v("搜索"),e("code",[s._v("tomcat")]),s._v("是否存在：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("brew search tomcat\n")])])]),e("p",[s._v("安装"),e("code",[s._v("tomcat：")]),s._v(" "),e("code",[s._v("brew install tomcat")]),s._v("\n检查是否安装成功：\n"),e("code",[s._v("catalina -h")]),s._v("\n运行"),e("code",[s._v("tomcat")]),s._v("：\n"),e("code",[s._v("catalina run")])]),s._v(" "),e("p",[e("code",[s._v("Tomcat")]),s._v("的默认端口是8080，如果运行成功可通过http://localhost:8080访问\n"),e("code",[s._v("webapp")]),s._v("的根目录"),e("code",[s._v("(CATALINA_HOME)为:/usr/local/Cellar/tomcat/7.0.33/libexec/webapps/ROOT/")])]),s._v(" "),e("h2",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" nginx")]),s._v(" "),e("p",[e("code",[s._v("brew install nginx")])]),s._v(" "),e("ul",[e("li",[e("p",[s._v("启动"),e("code",[s._v("nginx")]),s._v("服务\n"),e("code",[s._v("sudo brew services start nginx")]),s._v("\n利用"),e("code",[s._v("http://localhost:8080")]),s._v("进行访问, 如果出现如下界面，说明启动成功.")])]),s._v(" "),e("li",[e("p",[s._v("重启"),e("code",[s._v("nginx")]),s._v("服务\n"),e("code",[s._v("sudo brew services restart nginx")])])]),s._v(" "),e("li",[e("p",[s._v("查看"),e("code",[s._v("nginx")]),s._v("版本\n"),e("code",[s._v("nginx -v")])])]),s._v(" "),e("li",[e("p",[s._v("关闭"),e("code",[s._v("nginx")]),s._v("服务\n"),e("code",[s._v("sudo brew services stop nginx")]),s._v("\n另外几个比较方便的指令")])]),s._v(" "),e("li",[e("p",[s._v("重新加载"),e("code",[s._v("nginx")])])]),s._v(" "),e("li",[e("p",[s._v("停止"),e("code",[s._v("nginx")]),s._v(" "),e("code",[s._v("nginx -s stop")])])]),s._v(" "),e("li",[e("p",[s._v("文件说明")])])]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v("/usr/local/etc/nginx/nginx.conf "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#（配置文件路径）")]),s._v("\n\n/usr/local/var/www "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#（服务器默认路径）")]),s._v("\n\n/usr/local/Cellar/nginx/1.8.0 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#（安装路径)")]),s._v("\n")])])]),e("h2",{attrs:{id:"今日图-前端真是越来越简单了啊"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#今日图-前端真是越来越简单了啊"}},[s._v("#")]),s._v(" 今日图 - 前端真是越来越简单了啊")]),s._v(" "),e("p",[e("img",{attrs:{src:t(170),alt:"16b9358b7d5d09b1.png"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);