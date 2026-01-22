import IDS from "../_ids.js";
import usersCollection from "../../collections/users_collection.js";
import { currentSortOrder } from "./users_toolbar.js";

/** @type {webix.ui.list} */
const UsersList = {
    view: "editlist",
    template: `#name#, #age#, from #country# <span class="webix_icon mdi mdi-close list_remove_icon"></span>`,
    id: IDS.USERS_LIST,
    css: "users_list",
    editable: true,
    editor: "text",
    editValue: "name",
    rules: {
        name: webix.rules.isNotEmpty,
    },
    onClick: {
        /** @this {webix.ui.list} */
        list_remove_icon(_ev, id) {
            usersCollection.remove(id);
            if (currentSortOrder !== "none") {
                this.sort("#age#", currentSortOrder);
            }
            return false;
        }
    },
};

export default UsersList;