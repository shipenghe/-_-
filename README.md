本项目是上海师范大学学生创新项目，本文件对其进行基本介绍

## 项目基本信息
* 项目名：上海师范大学图书馆座位预订系统（前端）
* 开发者：石朋贺
* 技术选型：JS框架React、UI框架antd
* 开发周期：2020.02 - 至今

## 文档结构信息
### src源码文件夹
* index.js        程序入口文件
* App.js          应用根组件
* api             接口文件夹
* assets          公共资源文件夹
* components      非路由组件
* pages           路由组件
* config          配置文件夹
* utils           工具文件夹


## 项目开发信息
* 使用create-react-app搭建脚手架
* npm start 开发环境运行
* npm run build 打包成生产环境
* cnpm i antd --save 引入antdUI框架(按需引入、主题等参考官网配置)
* cnpm i react-router-dom --save 引入react-router进行路由
* cnpm i axios --save 引入axois发送ajax请求
* cnpm i store --save 引入store用于进行浏览器存储

## 登录模块
* 用户名密码表单验证：
  1. 均由字母数字下划线组成
  2. 最低4位，最多12位
  3. 均为必填项
* 验证方法选择：
  1. 声明式验证
  2. 自定义验证
* 登录业务逻辑
  1. 登陆成功或失败均进行提示
  2. 登陆成功跳转至用户界面，且不能返回
  3. 登录成功后，保存用户信息，无需多次登陆

## 开发环境下的跨域问题
* 使用代理解决("proxy": "http://localhost:5000")

## 本项目中的git使用
### 初始化git及远程仓库
* 项目初始化时已经有了git忽略文件gitignore,可以进行git的忽略配置
* 初始化本地git仓库 git init(根目录下)
* 将工作区代码提交到缓存区 git add .
* 将缓存区代码提交到版本库 git commit -m "项目git初始化"
* 在github创建相应仓库
* 在本地设置远程仓库别名及地址 git remote add origin https://github.com/shipenghe/-_-.git
### 主分支推送
* 将本地主分支推送到远程主分支 git push origin master
### 个人分支创建
* 创建并切换到个人分支(dev_个人昵称) git checkout -b dev_huaming
* 暂存个人分支 git add .
* 提交个人分支 git commit -m "个人分支初始化"
* 将本地个人分支推送到远程个人分支 git push origin dev_huaming
### 合并到主分支
* 切换到主分支 git checkout master
* 合并个人分支到主分支 git merge dev_huaming
### 个人分支拉取主分支
* git pull origin master