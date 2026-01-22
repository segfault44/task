import categoriesCollection from "../../collections/categories_collection.js";
import IDS from "../_ids.js";

/** @this {webix.ui.button} */
function handleSubmit() {
    // Get the form and the table
    /** @type {webix.ui.form} */
    const form = this.getFormView();
    /** @type {webix.ui.datatable} */
    const table = $$(IDS.ADMIN_TABLE);
    if (!form || !table) throw new Error("Form or table not found");

    // Validate the form
    if (!form.validate()) return;

    // Save form data
    const values = form.getValues();
    const isEdit = "id" in values;
    form.save(values);

    // Reset selection
    if (isEdit) table.unselectAll();
    categoriesCollection.setCursor(null);
}

/** @this {webix.ui.button} */
function handleClear() {
    /** @type {webix.ui.form} */
    const form = this.getFormView();
    /** @type {webix.ui.datatable} */
    const table = $$(IDS.ADMIN_TABLE);
    if (!form || !table) throw new Error("Form or table not found");
    
    // Reset selection
    table.unselectAll();
    form.clearValidation();
    categoriesCollection.setCursor(null);
}

/** @type {webix.ui.form} */
const AdminForm = {
    view: "form",
    id: IDS.ADMIN_FORM,
    width: 300,
    elements: [
        { template: "Edit Categories", type: "section" },
        { view: "text", label: "Category", name: "value", invalidMessage: "Category is required" },
        {
            margin: 5,
            cols: [
                {
                    view: "button",
                    label: "Submit",
                    css: "webix_primary",
                    click: handleSubmit,
                },
                {
                    view: "button",
                    label: "Clear",
                    click: handleClear,
                },
            ],
        },
        {},
    ],
    rules: {
        value: webix.rules.isNotEmpty,
    },
};

export default AdminForm;