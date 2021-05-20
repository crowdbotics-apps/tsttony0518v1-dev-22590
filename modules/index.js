import { getPropertyMap, getModules } from "./utils.js";
import * as mods from "glob:./**/index.js";

export const modules = getModules(mods);
export const initialRoute = "SplashIndex023318743_2_3";
export const slices = Object.entries(getPropertyMap(modules, "slice"));
export const navigators = Object.entries(getPropertyMap(modules, "navigator"));
export const hooks = Object.entries(getPropertyMap(modules, "hook"));
