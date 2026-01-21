import IDS from "../_ids.js";

/**
 * @typedef {{
 *  name: string,
 *  callback: (year: number) => boolean,
 * }} YearFilter
 */

/**
 * Filters
 * @type {Record<number, YearFilter>}
 */
export const YEAR_FILTERS = {
    1: {
        name: "All",
        callback: (_year) => true,
    },
    2: {
        name: "Old",
        callback: (year) => year < 1990,
    },
    3: {
        name: "Modern",
        callback: (year) => year >= 1990 && year < 2010,
    },
    4: {
        name: "New",
        callback: (year) => year > 2010,
    },
};


/** @type {webix.ui.tabbar} */
const DashboardTabbar = {
    view: "tabbar",
    id: IDS.DASHBOARD_TABBAR,
    options: Object.entries(YEAR_FILTERS).map(([id, { name: value }]) => ({ id, value })),
};

export default DashboardTabbar;