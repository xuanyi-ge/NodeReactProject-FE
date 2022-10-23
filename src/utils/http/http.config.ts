/*
 * @Date: 2022-10-21 19:40:04
 * @LastEditors: AhYaaaaas xuanyige87@gmail.com
 * @LastEditTime: 2022-10-23 20:36:47
 * @FilePath: \NodeReactProject-FE\src\utils\http\http.config.ts
 */
import {CreateAxiosDefaults} from "axios"
export const httpConfig: CreateAxiosDefaults<any> = {
  baseURL: "http://localhost:5000",
  timeout: 5000,
  headers: {
  }
}