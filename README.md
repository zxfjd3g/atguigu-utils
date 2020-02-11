# 尚硅谷大前端自定义工具函数库

# 说明
## 1. 包含以下8个方面
    1). 函数相关
    2). 数组相关
    3). 对象相关
    4). 字符串相关
    5). 事件总线
    6). 消息订阅与发布
    7). Promise
    8). ajax函数axios
    9). 数据结构与算法

## 2. 使用
    1). 下载: 
        npm install -S atguigu-utils
        yarn add atguigu-utils
    
    2). 网页中使用
        <script src="./node_modules/atguigu-utils/dist/atguigu-utils.js"></script>
        <script>
          console.log(aUtils.flatten1([1, [3, [2, 4]]]))  // [1, 3, 2, 4]
        </script>
    
    3). 模块化引入
        import {flatten1} from 'atguigu-utils'
        const {flatten2} = require('atguigu-utils')
        console.log(aUtils.flatten1([1, [3, [2, 4]]]))
        console.log(aUtils.flatten2([1, [3, [2, 4]]]))
    
    4). 完整的功能函数测试
        test文件夹下都一系列测试页面

# API
## 1. 函数相关

### call()
    语法: call(fn, obj, ...args)
    功能: 等同于函数对象的call方法

### apply()
    语法: apply(fn, obj, args)
    功能: 等同于函数对象的apply方法

### bind(fn, obj, args)
    语法: bind(fn, obj, ...args)
    功能: 等同于函数对象的bind方法
    
### throttle()
    语法: throttle(callback, delay)
    功能: 用来生成节流函数的工具函数

### debounce()
    语法: debounce(callback, delay)
    功能: 用来生成防抖函数的工具函数


## 2. 数组相关
### map()
### reduce()
### filter()
### find()
### findIndex()
### every()
### some()
### unique1() / unique2() / unique3()
### concat()
### slice()
### flatten()
### compact()
### chunk() / chunk2()
### difference()
### mergeArray()
### pull()
### pullAll()
### drop()
### dropRight()


## 3. 对象相关
### newInstance()
### myInstanceOf()
### mergeObject()
### clone1() / clone2()
### deepClone1() / deepClone2() / deepClone3() / deepClone4()


## 4. 字符串相关
### reverseString()
### palindrome()
### truncate()


## 5. 事件总线: eventBus
### eventBus.on()
### eventBus.emit()
### eventBus.off()


## 6. 消息订阅与发布: PubSub
### PubSub.subscribe()
### PubSub.publish()
### PubSub.unsubscribe()


## 7. Promise
### Promise()
### Promise.prototype.then()
### Promise.prototype.catch()
### Promise.resolve()
### Promise.reject()
### Promise.all()
### Promise.race()
### Promise.resolveDelay()
### Promise.rejectDelay()

## 8. ajax函数axios
### axios()
### axios.get()
### axios.post()
### axios.delete()
### axios.put()

