# CustomizeRow
依赖jQuery实现多行文本在firefox chrome ie能够显示定义的行数文本内容在超出时不撑破 容器并在尾部添加省略符号
在chrome上，若应用了-webkit-line-clamp的方式实现，需要设置brower属性为true,以避免出现重复的"..."

2017/09/08 upload

## 使用方法
# css
<link rel="stylesheet" type="text/css" href="src/css/customizerow.css">


# html
 <p class='cus-row' cus-row='3'>文本内容</p>


# js
<script src="src/js/customizerow.js"></script>
<script>
  var customizerow = new customizeRow({
	 rowclass:".cus-row",
	 brower:true
 })
</script>

# 参数
rowclass [string] 标签选择器，需要应用的标签，默认".cusrow"
brower [boolean] 决定是否在chrome上运行，默认为false运行
