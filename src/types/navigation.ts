import * as React from "react";
/**路由配置 */

export interface RouteConfig {
  /**名称 */
  key: string;
  /**组件 */
  component: React.ComponentType<any>;
}



/**tabBar Route*/


export interface TabRouteConfig extends RouteConfig {
  /**图标 */
  icon: string;
  /**选中的图标 */
  ActiveIcon: string;
}