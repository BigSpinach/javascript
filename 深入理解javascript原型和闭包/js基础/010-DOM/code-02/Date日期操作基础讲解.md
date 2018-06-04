###Date日期操作基础讲解
> Date是日期类，通过它可以对时间进行处理
```javascript
var time = new Date();//=>获取当前客户端本机时间（当前获取的时间不能作为重要的参考依据）

//=>获取的结果是一个日期格式的对象：Sun Oct 22 2017 15:58:40 GMT+0800 (中国标准时间)
typeof new Date() ->'object'

//=>time.getFullYear() 获取四位整数年
//=>time.getMonth() 获取月（0~11代表1~12月）
//=>time.getDate() 获取日
//=>time.getDay() 获取星期（0~6代表周日~周六）
//=>time.getHours() 获取小时
//=>time.getMinutes() 获取分钟
//=>time.getSeconds() 获取秒
//=>time.getMilliseconds() 获取毫秒
//=>time.getTime() 获取当前日期距离'1970-01-01 00:00:00'的毫秒差
```

```javascript
var time = new Date('2017-10-22'); //=>当new Date中传递一个时间格式的字符串，相当于把这个字符串转换为标准的时间对象格式（转换完成后，就可以调取上面我们讲的那些方法了）
//=>时间格式的字符串
'2017-10-22'  (IE下识别不了)
'2017/10/22'
'2017/10/22 16:15:34'
1508659621314 (如果传递的是距离1970年的那个毫秒差，也是可以识别转换的，但是只能是数字，不能是字符串)
...
```