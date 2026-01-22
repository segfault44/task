import IDS from "../_ids.js";

// Random user generator data sets
const FIRST_NAMES = [ "James", "Michael", "John", "Mary", "Patricia", "Jennifer" ];
const LAST_NAMES = [ "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia" ];
const COUNTRIES = [ "USA", "Russia", "China", "Germany", "Italy", "Spain" ];

/**
 * Return a random element from an array
 * @template T
 * @param {Array<T>} list 
 * @return {T}
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/** @this {webix.ui.text} */
function handleInput() {
    /** @type {webix.ui.list} */
    const list = $$(IDS.USERS_LIST);
    if (!list) return;
    const value = this.getValue();
    list.filter("#name", value);
}

/**
 * Create a new user with random data
 * @this {webix.ui.toolbar}
 */
function handleClickNew() {
    /** @type {webix.ui.list} */
    const list = $$(IDS.USERS_LIST);
    if (!list) throw new Error("User list not found");

    // Generate a new user data
    const firstName = getRandomElement(FIRST_NAMES);
    const lastName = getRandomElement(LAST_NAMES);
    const name = `${firstName} ${lastName}`;
    const age = Math.floor(Math.random() * 20) + 20;
    const country = getRandomElement(COUNTRIES);    

    // Finalize a user
    const user = {
        name, age, country,
    };

    // Add the user to the list and re-sort the list
    list.add(user);
    if (currentSortOrder !== "none") {
        list.sort("#age#", currentSortOrder);
    }
}

/**
 * Current user list sort order
 * Updated in `handleSort`
 * Used in `handleClickNew` to re-sort users
 * @type {"none" | "asc" | "desc"}
 */
let currentSortOrder = "none";

/**
 * Sort the list and the chart
 * @param {"asc" | "desc"} order 
 */
function handleSort(order) {
    /** @type {webix.ui.list} */
    const list = $$(IDS.USERS_LIST);
    if (!list) return;
    list.sort("#age#", order);
    currentSortOrder = order;
}

/** @type {webix.ui.toolbar} */
const UsersToolbar = {
    view: "toolbar",
    cols: [
        {
            view: "text",
            id: IDS.USERS_TOOLBAR_TEXT,
            on: {
                onTimedKeyPress: handleInput,
            }
        },
        {
            view: "button",
            label: "Sort asc",
            css: "webix_primary",
            width: 100,
            click: () => handleSort("asc"),
        },
        {
            view: "button",
            label: "Sort desc",
            css: "webix_primary",
            width: 100,
            click: () => handleSort("desc"),
        },
        {
            view: "button",
            label: "Add new",
            css: "webix_primary",
            width: 100,
            click: handleClickNew,
        },
    ]
};

export default UsersToolbar;