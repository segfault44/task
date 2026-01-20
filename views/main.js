import Navbar from "./navbar.js"
import FilmDatatable from "./film_datatable.js";
import EditFilmsForm from "./edit_films_form.js";

/** @type {webix.ui.layout} */
const Main = {
    cols: [
        Navbar,
        { view: "resizer" },
        FilmDatatable,
        EditFilmsForm,
    ],
};

export default Main;