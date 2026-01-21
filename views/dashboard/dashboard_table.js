import IDS from "../_ids.js"

/** @type {webix.ui.datatable} */
const DashboardTable = {
    view: "datatable",
    id: IDS.DASHBOARD_TABLE,
    hover: "cell_hover",
    columns: [
        { id: "id", header: "", sort: "int", css: "dashboard_table_id_column", width: 50 },
        { id: "title", header: ["Film Title", { content: "textFilter" }], sort: "text", fillspace: true },
        { id: "category_id", header: ["Category", { content: "selectFilter" }], sort: "text", collection: "/data/categories.json" },
        { id: "votes", header: ["Votes", { content: "textFilter" }], sort: "text", width: 100 },
        { id: "year", header: ["Year"], sort: "text", width: 80 },
        { template: `<span class="remove_btn webix_icon wxi-trash"></span>`, width: 40 },
    ],
    onClick: {
        /** @this {webix.ui.datatable} */
        remove_btn(_ev, id) {
            this.remove(id);
            return false;
        }
    },
    scheme: {
        // Generate a category id in range [1, 4]
        $init: (obj) => obj["category_id"] = Math.floor(Math.random() * 4.0) + 1.0,
        
    },
    url: "/data/data.json",
};

export default DashboardTable