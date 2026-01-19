import IDS from "./ids.js"

const small_film_set = [
    { id:1, title:"The Shawshank Redemption", year:1994, votes:678790, rating:9.2, rank:1, category:"Thriller"},
    { id:2, title:"The Godfather", year:1972, votes:511495, rating:9.2, rank:2, category:"Crime"},
    { id:3, title:"The Godfather: Part II", year:1974, votes:319352, rating:9.0, rank:3, category:"Crime"},
    { id:4, title:"The Good, the Bad and the Ugly", year:1966, votes:213030, rating:8.9, rank:4, category:"Western"},
    { id:5, title:"Pulp fiction", year:1994, votes:533848, rating:8.9, rank:5, category:"Crime"},
    { id:6, title:"12 Angry Men", year:1957, votes:164558, rating:8.9, rank:6, category:"Western"}
];

const links = [ "Dashboard", "Users", "Products", "Locations" ];

const header = {
    paddingX: 12,
    paddingY: 4,
    cols: [
        {
            view: "label",
            label: "My App",
            css: "header_label",
            autowidth: true,
        },
        {},
        {
            view: "button",
            label: "Profile",
            type: "icon",
            icon: "wxi-user",
            css: "header_button",
            autowidth: true,
            popup: "user_menu"
        },
    ],
    css: "header",
};

const main = {
    cols: [
        {
            rows: [
                {
                    view: "list",
                    template: (obj) => `<a href="/${obj.value.toLowerCase()}">${obj.value}</a>`,
                    data: links,
                    css: "list",
                    autoheight: true,
                    borderless: true,
                    width: 200,
                },
                {},
                {
                    view: "label",
                    label: "<span class='webix_icon wxi-check'></span> Connected",
                    type: "icon",
                    css: "connection_status",
                    icon: "wxi-user",
                },
            ],
            css: "navbar"
        },
        {
            view: "resizer"
        },
        {
            view: "datatable",
            id: IDS.table,
            data: small_film_set,
            autoConfig: true
        },
        {
            view: "form",
            id: IDS.form,
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
                                onItemClick(id) {
                                    const form = this.getFormView()
                                    // Validate the form
                                    const validationResult = form.validate();
                                    if (!validationResult) return;
                                    // Add the data on successfull validation
                                    webix.message("Validation success");
                                    const table = $$("table");
                                    const data = form.getValues();
                                    table.add({
                                        title: data.title,
                                        year: data.year,
                                        rating: data.rating,
                                        votes: data.votes,
                                        rank: table.count() + 1
                                    });
                                    form.clear();
                                }
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
                                }
                            },
                        }
                    ]
                },
                {}
            ],
            rules: {
                title: webix.rules.isNotEmpty,
                year: (value) => webix.rules.isNumber(value) && value >= 1970 && value <= new Date().getFullYear(),
                rating: (value) => webix.rules.isNumber(value) && value != 0,
                votes: (value) => webix.rules.isNumber(value) && value >= 0 && value <= 100000,
            },
        },
    ],
};

const footer = {
    template: "The software is provided by <a href='https://webix.com'>https://webix.com</a>. All rights reserved (c)",
    css: { "text-align": "center" },
    height: 30,
};

webix.ui({
    view: "popup",
    id: IDS.user_menu,
    css: "user_menu_popup",
    body: {
        view: "list",
        template: (obj) => `<a href="${obj.url}">${obj.label}</a>`,
        autoheight: true,
        data: [
            {
                label: "Settings",
                url: "/settings",
            },
            {
                label: "Log Out",
                url: "/logout",
            }
        ]
    }
});

webix.ui({
    rows: [ header, main, footer ],
});