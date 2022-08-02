#jQuery中一些不熟悉的点

## 获取 select 的值

select 有 change 事件
	```js
	$(select).change(()=>{
		
	})
	$(select).val() // 选中的值
	$(select).selectedIndex() // 选中的索引
	$(select).find('option:selected').text() // 选中的文本
	$(select).children('option:selected').text() // 选中的文本
	```
	
##  