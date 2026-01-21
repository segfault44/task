import IDS from "../_ids.js";

/** @type {webix.ui.list} */
const UsersList = {
    view: "editlist",
    template: `#name#, #age#, from #country# <span class="webix_icon mdi mdi-close list_remove_icon"></span>`,
    id: IDS.USERS_LIST,
    css: "users_list",
    editable: true,
    editor: "text",
    editValue: "name",
    scheme: {
        name: "John Doe",
        age: 20,
        country: "USA",
        $init: (it) => it.$css = it.age < 26 ? "user_highlighted" : null,
    },
    rules: {
        name: webix.rules.isNotEmpty,
    },
    onClick: {
        /** @this {webix.ui.list} */
        list_remove_icon(_ev, id) {
            this.remove(id);
            return false;
        }
    },
};

export default UsersList;