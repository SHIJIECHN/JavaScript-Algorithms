/*检查一个值是否是基本布尔类型，并返回 true 或 false。

基本布尔类型即 true 和 false */
function boo(bool) {
    return typeof bool === "boolean";
}
  boo([].slice);
 // 布尔表达式中的所有对象都会被转换成true。
 // 基本类型与引用类型的布尔值的区别： typeof操作符对基本类型返回"boolean"而引用类型返回"object"；
 // 由于Boolean对象是Boolean类型的实例，所以使用instanceof操作符测试Boolean对象返回true，而测试基本类型
 // 的布尔值则返回false