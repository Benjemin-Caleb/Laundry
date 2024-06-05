import { StartFunc as StartFuncPullData } from "./PullData/EntryFile.js";
import { StartFunc as StartFuncChecks } from "./Checks/QrCheck.js";
import { StartFunc as StartFuncUniqueKeyCheck } from "./Checks/UniqueKeyCheck.js";

let StartFunc = ({ inInSertObject, inRefFilterObject }) => {
    let LocalinDataToInsert = inInSertObject;
    let LocalRefFilterObject = inRefFilterObject;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };
    let LocalStartFuncPullData = StartFuncPullData();

    if ("error" in LocalStartFuncPullData) {
        LocalReturnData.KReason = LocalStartFuncPullData.error;
        return LocalReturnData;
    };

    const LocalTableSchema = LocalStartFuncPullData.inTableSchema;
    const db = LocalStartFuncPullData.inDb;
    let LocalKeysNeeded = {};

    for (const prop in LocalTableSchema.fileData) {
        if ("references" in LocalTableSchema.fileData[prop]) {
            LocalKeysNeeded[prop] = LocalTableSchema.fileData[prop];
        };
    };
    if ((Object.keys(LocalKeysNeeded).length === 0) === false) {

        let LocalKeyNeeded = Object.keys(LocalKeysNeeded)[0];
        let LocalValueNeeded = LocalinDataToInsert[LocalKeyNeeded];

        let LocalK1 = Object.values(LocalKeysNeeded)[0].references;
        let localSarchKey = LocalK1.key;
        
        let LocalDataNeeded = StartFuncChecks({
            inFileName: LocalK1.model.tableName,
            inFolderName: LocalK1.folderName,
            NeededKey: LocalValueNeeded,
            inSearchKey: localSarchKey,
            inRefFilterObject: LocalRefFilterObject
        });

        if (LocalDataNeeded.KTF === false) {
            LocalReturnData.KReason = LocalDataNeeded.KReason;
            return LocalReturnData;
        };
    };
    // let LocalStartFuncChecksQrCodeId = StartFuncChecksQrCodeId({ inData: db.data, inDataToInsert: LocalinDataToInsert, });
    let LocalStartFuncChecksQrCodeId = StartFuncUniqueKeyCheck({
        inData: db.data, inDataToInsert: LocalinDataToInsert,
        inTableSchema: LocalTableSchema.fileData
    });

    if (LocalStartFuncChecksQrCodeId.KTF === false) {
        LocalReturnData.KReason = LocalStartFuncChecksQrCodeId.KReason;
        return LocalReturnData;
    };

    let LocalDataWithUuid = LocalFuncGeneratePk({
        inDataToInsert: LocalinDataToInsert,
        inData: db.data
    });

    if (LocalDataWithUuid.KTF === false) {
        LocalReturnData.KReason = LocalDataWithUuid.KReason;
        return LocalReturnData;
    };

    db.data.push(LocalDataWithUuid.InsertData);
    let LocalFromWrite = db.write();

    LocalReturnData.KTF = true;
    LocalReturnData.ScanNo = LocalDataWithUuid.InsertData.QrCodeId
    return LocalReturnData;
};

const LocalFuncGeneratePk = ({ inDataToInsert, inData }) => {
    let LocalInData = inData;
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    let LocalArrayPk = LocalInData.map(element => element.pk);

    let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
        return element !== undefined;
    });

    let numberArray = LocalRemoveUndefined.map(Number);

    let MaxPk = (Math.max(...numberArray, 0) + 1);

    LocalReturnData.InsertData = { ...inDataToInsert, UuId: MaxPk, pk: MaxPk, DateTime: Timestamp() };
    LocalReturnData.KTF = true;
    return LocalReturnData
};

const Timestamp = () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString();
    return formattedDate;
};

export { StartFunc };