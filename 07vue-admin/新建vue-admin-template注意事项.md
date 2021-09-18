# 建立vue-admin-template注意事项
## 官网安装方式
## 克隆项目
```
git clone https://github.com/PanJiaChen/vue-admin-template.git
```
### 进入项目目录
```
cd vue-admin-template
```
## 安装依赖
```
npm install
```
### 建议不要直接使用 cnpm 安装以来，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
```
npm install --registry=https://registry.npm.taobao.org
```
### 启动服务
```
npm run dev
```
## 结果根据官网安装不行解决办法——使用cnpm i
###  命令：
```
cnpm i
```
** 结果报错原因：core-js依赖加不进 **
### 解决办——上安装core-js相应的版本即可：
```
cnpm install core-js@3.6.5
```
### 启动程序即可：
```
npm run dev
```