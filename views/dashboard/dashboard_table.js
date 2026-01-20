import IDS from "../_ids.js"

/** @type {webix.ui.datatable} */
const DashboardTable = {
    view: "datatable",
    id: IDS.DASHBOARD_TABLE,
    hover: "cell_hover",
    columns: [
        { id: "id", header: "", sort: "int", css: "dashboard_table_id_column", width: 50 },
        { id: "title", header: ["Film Title", { content: "textFilter" }], sort: "text", fillspace: true },
        { id: "year", header: ["Released", { content: "textFilter" }], sort: "text", width: 80 },
        { id: "votes", header: ["Votes", { content: "textFilter" }], template: `#votes# <span class="remove_btn webix_icon wxi-trash"></span>`, sort: "text", width: 100 },
    ],
    onClick: {
        /** @this {webix.ui.datatable} */
        remove_btn(_ev, id) {
            this.remove(id);
            return false;
        }
    },
    url: "/data/data.json",
};

export default DashboardTable