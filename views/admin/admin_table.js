import categoriesCollection from "../../collections/categories_collection.js";
import IDS from "../_ids.js";

/**
 * Remove a category
 * @this {webix.ui.datatable}
 */
function handleRemove(_ev, col) {
    // Get category id
    const id = this.getItem(col).id;
    
    // Check if its used in the dashboard table
    const isUsed = $$(IDS.DASHBOARD_TABLE).data.find((it) => it.category_id == id, true) !== null;
    if (isUsed) {
        webix.message("Category is used");
        return false;
    }

    // Remove an item from the collection
    categoriesCollection.remove(id);

    // Stop event propagation
    return false;
}

/** @type {webix.ui.datatable} */
const AdminTable = {
    view: "datatable",
    id: IDS.ADMIN_TABLE,
    select: true,
    columns: [
        { id: "value", header: "Category", width: 250 },
        { template: `<span class="remove_btn webix_icon wxi-trash"></span>`, width: 40 },
    ],
    onClick: {
        remove_btn: handleRemove,
    },
    on: {
        onAfterSelect(id) {
            // Set collection cursor to notify the form
            categoriesCollection.setCursor(id);
            // Clear previous validation failure messages
            $$(IDS.ADMIN_FORM).clearValidation();
        },
        onAfterAdd(id) {
            this.showItem(id);
        },
    },
};

export default AdminTable;