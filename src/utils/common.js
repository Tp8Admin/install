"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = exports.timeFormat = void 0;
var uuid_1345_1 = require("uuid-1345");
/*
 * 字符串补位
 */
var padStart = function (str, maxLength, fillString) {
    if (fillString === void 0) { fillString = ' '; }
    // 如果字符串长度大于等于最大长度，则返回原字符串
    if (str.length >= maxLength) {
        return str;
    }
    // 如果补位字符串的长度为0或者为null，则返回原字符串
    var fillLength = maxLength - str.length;
    // 如果补位字符串的长度小于补位的长度，则截取补位字符串的相应长度
    if (fillLength < fillString.length) {
        return fillString.slice(0, fillLength) + str;
    }
    // 将补位字符串重复填充至目标长度
    var times = Math.ceil(fillLength / fillString.length);
    // 循环填充字符串到目标长度
    while ((times >>= 1)) {
        fillString += fillString;
        if (times === 1) {
            fillString += fillString;
        }
    }
    // 返回填充后的字符串
    var result_str = fillString.slice(0, fillLength) + str;
    // console.log('字符串补位 result_str:', result_str);
    return result_str;
};
/*
 * 格式化时间戳
 */
var timeFormat = function (dateTime, fmt) {
    if (dateTime === void 0) { dateTime = null; }
    if (fmt === void 0) { fmt = 'yyyy-mm-dd hh:MM:ss'; }
    // 如果为null或者undefined，返回空字符串
    if (dateTime == 'none') {
        return '无';
    }
    // 如果为null或者undefined，转为数字
    if (!dateTime) {
        dateTime = Number(new Date());
    }
    // 如果为10位数，则转为13位
    if (dateTime.toString().length === 10) {
        dateTime = +dateTime * 1000;
    }
    // 如果date为13位不需要乘1000
    var date = new Date(dateTime);
    // 如果为yyyy，则直接返回年份
    var opt = {
        'y+': date.getFullYear().toString(),
        'm+': (date.getMonth() + 1).toString(),
        'd+': date.getDate().toString(),
        'h+': date.getHours().toString(),
        'M+': date.getMinutes().toString(),
        's+': date.getSeconds().toString(), // 秒
    };
    // 遍历正则表达式
    var ret;
    for (var k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt); // 匹配
        // 如果匹配到了
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : padStart(opt[k], ret[1].length, '0')); // 如果为1，则直接返回，否则前面补0
        }
    }
    // console.log('格式化时间戳 fmt:', fmt);
    return fmt;
};
exports.timeFormat = timeFormat;
/**
 * 生成Snowflake UUID
 * @doc https://www.npmjs.com/package/uuid-1345
 */
var uuid = function () {
    // 使用自定义节点标识
    var nodeId = (0, uuid_1345_1.parse)('tp8-admin-uuid');
    // 生成Snowflake算法的UUID
    var snowflakeUUID = (0, uuid_1345_1.v4)(nodeId); // 将 nodeId 直接传递给 v4
    // console.log('生成Snowflake UUID:', snowflakeUUID);
    return snowflakeUUID;
};
exports.uuid = uuid;
// 测试 “字符串补位”
var originalString = "42";
var paddedString = padStart(originalString, 5, '0');
console.log('字符串补位:', paddedString); // 输出： "00042"
// 测试 “格式化时间戳”
console.log('格式化时间戳:', (0, exports.timeFormat)());
// 测试 “生成Snowflake UUID”
console.log('生成Snowflake UUID:', (0, exports.uuid)());
