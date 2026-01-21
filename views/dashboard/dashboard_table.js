import IDS from "../_ids.js"

/** @type {webix.ui.datatable} */
const DashboardTable = {
    view: "datatable",
    id: IDS.DASHBOARD_TABLE,
    hover: "cell_hover",
    columns: [
        { id: "id", header: "", sort: "int", css: "dashboard_table_id_column", width: 50 },
        { id: "title", header: ["Film Title", { content: "textFilter" }], sort: "text", fillspace: true },
        { id: "year", header: ["Released"], sort: "text", width: 80 },
        { id: "votes", header: ["Votes", { content: "textFilter" }], template: `#votes# <span class="remove_btn webix_icon wxi-trash"></span>`, sort: "text", width: 100 },
        { id: "category_id", header: ["Category", { content: "selectFilter" }], sort: "text", collection: "/data/categories.json" },
    ],
    onClick: {
        /** @this {webix.ui.datatable} */
        remove_btn(_ev, id) {
            this.remove(id);
            return false;
        }
    },
    scheme: {
        /**
         * @this {webix.ui.datatable}
         * @param {object} obj
         */
        $init(obj) {
            // Generate a random integer in range [1, 4]
            const cat = Math.floor(Math.random() * 4.0) + 1.0;
            // Assign it as a category id
            obj["category_id"] = cat;
        }
    },
    url: "/data/data.json",
};

export default DashboardTable