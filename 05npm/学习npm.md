# 学习npm
## 常用命令
## 1、初始化npm命令:
```
npm init
npm init -y
```
### 2、设置淘宝镜像：
```
npm config set registry https://registry.npm.taobao.org
```
### 3、检查镜像：
```
npm config list
```
###4、下载依赖：
```
npm install XX
npm install XX@版本号
```
### 5、加入测试依赖，打包生产是不用，一般前端需要：
```
npm install -D mockjs
npm install --save-dev mockjs
```
### 6、删除依赖：
```
npm uninstall XX
```
### 7、下载依赖包：
```
npm install 
npm i
```
## nvm管理node版本
## nrm切换npm源
## 使用cnpm淘宝源
### 安装
```
npm install cnpm -g
```
### 国内安装 China mirror:
```
npm install cnpm -g --registry=https://registry.npm.taobao.org
```