import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../Config.json' assert { type: 'json' };
import fileNameJson from '../fileName.json' assert { type: 'json' };
import FolderNameJson from '../../../FolderName.json' assert { type: 'json' };

let StartFunc = ({inDataPk}) => {
    let LocalDataPk = inDataPk;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${LocalDataPk}/${fileNameJson.folderName}/${fileNameJson.fileName}`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

    return {
        dbObject: db,
        TableSchema: LocalFuncForTableSchema()
    };
};

let LocalFuncForTableSchema = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    let LocalFirstLevelFolders = Configjson.jsonConfig.tableAndColumns.children.find(element => {
        return "children" in element && element.name === FolderNameJson.folderName;
    });

    let LocalSecondNeeded = LocalFirstLevelFolders.children.find(element => {
        return "children" in element === false && element.name === fileNameJson.fileName;
    });

    return LocalSecondNeeded;
};

export { StartFunc };
