import { RouteConfig, TabRouteConfig } from "../types/navigation";
import { Index } from "../pages/index";
import { Factory } from "../pages/factory";
import { Mine } from "../pages/mine";
const Home = require("./imgs/index.png");
const HomeActive = require("./imgs/index_active.png");
const FactoryPNG = require("./imgs/add.png");
const FactoryActive = require("./imgs/add_active.png");
const MinePNG = require("./imgs/mine.png");
const MineActive = require("./imgs/mine_active.png");
/**tabBar 路由 */
export const TabRoutes: TabRouteConfig[] = [
  {
    key: "index",
    component: Index,
    icon: Home,
    ActiveIcon: HomeActive,
  }, {
    key: "factory",
    component: Factory,
    icon: FactoryPNG,
    ActiveIcon: FactoryActive,
  }, {
    key: "mine",
    component: Mine,
    icon: MinePNG,
    ActiveIcon: MineActive,
  }
];


/**页面路由 */

export const ScreenRoutes: RouteConfig[] = [

];


