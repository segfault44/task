import IDS from "../_ids.js";

/**
 * Map of filter functions
 * Key: filter id
 * Value: callback
 * @type {Record<number, (year: number) => boolean>}
 */
export const YEAR_FILTERS = {
    1: (_year) => true, // "All"
    2: (year) => year < 1990, // "Old"
    3: (year) => year >= 1990 && year < 2010, // "Modern"
    4: (year) => year >= 2010, // "New"
};


/** @type {webix.ui.tabbar} */
const DashboardTabbar = {
    view: "tabbar",
    id: IDS.DASHBOARD_TABBAR,
    options: [
        { id: 1, value: "All" },
        { id: 2, value: "Old" },
        { id: 3, value: "Modern" },
        { id: 4, value: "New" },
    ],
    on: {
        onChange(_id) {
            $$(IDS.DASHBOARD_TABLE).filterByAll();
        }
    }
};

export default DashboardTabbar;