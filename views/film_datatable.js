import SMALL_FILM_SET from "../data/small_film_set.js";
import IDS from "./_ids.js"

const FilmDatatable = {
    view: "datatable",
    id: IDS.TABLE,
    data: SMALL_FILM_SET,
    autoConfig: true,
};

export default FilmDatatable;