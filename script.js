import Header from "./views/header.js"
import Main from "./views/main.js"
import Footer from "./views/footer.js"
import UserMenuPopup from "./views/user_menu_popup.js";
import IDS from "./views/_ids.js";
import { YEAR_FILTERS } from "./views/dashboard/dashboard_tabbar.js";
import usersCollection from "./views/users/users_collection.js";

// Initialize custom views
webix.protoUI({ name: "editlist" }, webix.EditAbility, webix.ui.list);

// Initialize windows and popups
webix.ui(UserMenuPopup);

// Initialize app
webix.ui({
    rows: [ Header, Main, Footer ],
});

// Bind the dashboard form to the datatable
$$(IDS.DASHBOARD_FORM).bind(IDS.DASHBOARD_TABLE);

// Register dashboard table filters
$$(IDS.DASHBOARD_TABLE).registerFilter(
    $$(IDS.DASHBOARD_TABBAR),
    {
        columnId: "year",
        compare(value, filter, _item) {
            const year = Number(value);
            if (Number.isNaN(year)) return false;
            return YEAR_FILTERS[filter].callback(year);
        }
    },
    {
        getValue: view => view.getValue(),
        setValue: (view, value) => view.setValue(value),
    }
)

$$(IDS.DASHBOARD_TABBAR).attachEvent("onChange", (_id) => $$(IDS.DASHBOARD_TABLE).filterByAll());

// Sync the user data with user collection
$$(IDS.USERS_LIST).sync(usersCollection);

// Sync the user chart with the user collection
$$(IDS.USERS_CHART).sync(usersCollection, function () {
    // Group the chart by country
    this.group({
        by: "country",
        map: {
            count: ["country", "count"],
        },
    });

    // Sort the chart by count, and then by country name
    this.sort((a, b) => (
        a.count == b.count ? a.country < b.country : a.count < b.count
    ));
});