import { StartFunc as StartFuncOnExpandRow } from "./onExpandRow/EntryFile.js";
import IconsJson from './icons.json' with {type: 'json'};
import searchJson from './search.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');
    
    jFLocalToTableTag();

    $table.bootstrapTable({
        data: [],
        detailView: true,
        onExpandRow: StartFuncOnExpandRow,
        icons: IconsJson
    });

};

const jFLocalToTableTag = () => {
    var $table = $('#table');

    $table.attr(searchJson.tableAttributes);
};

export { StartFunc };
