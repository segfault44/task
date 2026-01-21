import IDS from "../_ids.js";

/**
 * Get a random list element utility
 * @template T
 * @param {Array<T>} list 
 * @return {T}
 */
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

/**
 * Get max element id in a Webix list
 * @param {webix.ui.list} webixList 
 */
function getMaxId(webixList) {
    let maxId = 0;
    webixList.data.each((it) => {
        if (it.id > maxId) maxId = it.id;
    });
    return maxId;
}

/** @this {webix.ui.text} */
function handleInput() {
    /** @type {webix.ui.chart} */
    const chart = $$(IDS.USERS_CHART);
    /** @type {webix.ui.list} */
    const list = $$(IDS.USERS_LIST);
    if (!chart || !list) return;
    const value = this.getValue();
    chart.filter("#name#", value);
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

    // Random generator data sets
    const FIRST_NAMES = [ "James", "Michael", "John", "Mary", "Patricia", "Jennifer" ];
    const LAST_NAMES = [ "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia" ];
    const COUNTRIES = [ "USA", "Russia", "China", "Germany", "Italy", "Spain" ];

    // Generate a new user data
    const id = getMaxId(list) + 1;
    const firstName = getRandomElement(FIRST_NAMES);
    const lastName = getRandomElement(LAST_NAMES);
    const name = `${firstName} ${lastName}`;
    const age = Math.floor(Math.random() * 20) + 20;
    const country = getRandomElement(COUNTRIES);    

    // Finalize a user
    const user = {
        id, name, age, country,
    };

    // Append a user to a list
    list.add(user);
}

/**
 * Sort the list and the chart
 * @param {"asc" | "desc"} order 
 */
function handleSort(order) {
    /** @type {webix.ui.chart} */
    const chart = $$(IDS.USERS_CHART);
    /** @type {webix.ui.list} */
    const list = $$(IDS.USERS_LIST);
    if (!chart || !list) return;
    chart.sort("#age#", order);
    list.sort("#name#", order);
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