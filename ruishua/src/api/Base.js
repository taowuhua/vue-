/*
 * @Author: Your name
 * @Date:   2020-04-17 12:04:47
 * @Last Modified by:   Your name
 * @Last Modified time: 2020-04-17 15:11:43
 */
/*
 * @Author: 陶务华
 * @Date: 2020-04-16 22:49:27
 * @LastEditTime: 2020-04-18 22:35:13
 * @LastEditors: Please set LastEditors
 * @Description: 服务器的域名或者ip端口号配置,独立出来
 * 可以灵活切换环境
 * @FilePath: \ruishua\src\http\base.js
 */

const base = {
  localDebug: '', // 本地调试
  develop: 'http://debug.goodday6789.com:8085',
  production: 'https://www.goodday6789.com:8085'
}
export default base
