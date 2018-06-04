/*console.log(isNaN(NaN));//=>TRUE
console.log(isNaN(1));//=>FALSE
console.log(isNaN('1'));//=>FALSE 它是有效数字:当浏览器发现我们检测的值不是NUMBER类型的时候,首先会默认的把值转换为NUMBER类型,然后再验证是否是有效的数字  '1'->1  isNaN(1)->false
console.log(isNaN(true));//=>首先把布尔类型转换为数字 TRUE->1 FALSE->0  最后的结果是isNaN(1)->false
console.log(isNaN(false));//=>FALSE
console.log(isNaN(null));//=>NULL转换为数字0 =>FALSE
console.log(isNaN(undefined));//=>UNDEFINED转换为数字的NaN =>TRUE*/

console.log(isNaN('12px'));//=>TRUE  '12px'转换为数字不是有效数字是NaN