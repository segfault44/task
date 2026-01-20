import IDS from "./_ids.js"

const EditFilmsForm = {
    view: "form",
    id: IDS.FORM,
    width: 300,
    elements: [
        { template: "Edit Films", type: "section" },
        { view: "text", label: "Title", name: "title", invalidMessage: "Title is required" },
        { view: "text", label: "Year", name: "year", invalidMessage: "Year value must be from 1970 to the current year" },
        { view: "text", label: "Rating", name: "rating", invalidMessage: "Rating must be a non-zero number" },
        { view: "text", label: "Votes", name: "votes", invalidMessage: "Votes must be a number from 0 to 100000" },
        {
            cols: [
                {
                    view: "button",
                    label: "Add new",
                    css: "webix_primary",
                    on: {
                        onItemClick(_id) {
                            const form = this.getFormView()
                            // Validate the form
                            const validationResult = form.validate();
                            if (!validationResult) return;
                            // Add the data on successfull validation
                            webix.message("Validation success");
                            const table = $$(IDS.TABLE);
                            const data = form.getValues();
                            table.add({
                                title: data.title,
                                year: data.year,
                                rating: data.rating,
                                votes: data.votes,
                                rank: table.count() + 1
                            });
                            form.clear();
                        },
                    },
                },
                {
                    view: "button",
                    label: "Clear",
                    on: {
                        onItemClick(_id) {
                            const form = this.getFormView();
                            form.clear();
                            form.clearValidation();
                        },
                    },
                }
            ],
        },
        {},
    ],
    rules: {
        title: webix.rules.isNotEmpty,
        year: (value) => webix.rules.isNumber(value) && value >= 1970 && value <= new Date().getFullYear(),
        rating: (value) => webix.rules.isNumber(value) && value != 0,
        votes: (value) => webix.rules.isNumber(value) && value >= 0 && value <= 100000,
    },
};

export default EditFilmsForm;