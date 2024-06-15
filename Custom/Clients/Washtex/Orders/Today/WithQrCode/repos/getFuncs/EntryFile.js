import {
    GetFunc as GetFuncDal, GetDataOnlyFunc as GetDataOnlyFuncDal,
    GetFromModalUuidFunc as GetFromModalUuidFuncDal,
    GetFromModalUuidAndTSFunc as GetFromModalUuidAndTSFuncDal,
    GetFromModalFunc as GetFromModalFuncDal,
    GetIdFunc as GetIdFuncDal, GetBodyCheckFunc as GetBodyCheckFuncDal,
    GetRowDataFunc as GetRowDataFuncDal, GetRowCountByIdFunc as GetRowCountByIdFuncDal, GetRowCountFunc as GetRowCountFuncDal,
    GetFilterDataFunc as GetFilterDataFuncDal,
    GetSummeryFunc as GetSummeryFuncDal,
    GetMaxRowFunc as GetMaxRowFuncDal,
    GetNonMaxRowFunc as GetNonMaxRowFuncDal
} from '../../dals/getFuncs/EntryFile.js';

let GetFunc = async ({inDataPk}) => {
    return GetFuncDal({inDataPk});
};

let GetSummeryFunc = async () => {
    return GetSummeryFuncDal();
};

let GetDataOnlyFunc = async ({inDataPk}) => {
    return GetDataOnlyFuncDal({inDataPk});
};

let GetIdFunc = ({ inId }) => {
    return GetIdFuncDal({ inId });
};

let GetNonMaxRowFunc = ({ inId }) => {
    return GetNonMaxRowFuncDal({ inId });
};

let GetRowCountByIdFunc = ({ inKey, inValue }) => {
    return GetRowCountByIdFuncDal({ inKey, inValue });
};

let GetRowDataFunc = ({ inKey, inValue }) => {
    return GetRowDataFuncDal({ inKey, inValue });
};

let GetfilterDataFunc = ({ inKey, inValue }) => {
    return GetFilterDataFuncDal({ inKey, inValue });
};

let GetFromModalFunc = () => {
    return GetFromModalFuncDal();
};

let GetFromModalUuidFunc = () => {
    return GetFromModalUuidFuncDal();
};

let GetFromModalUuidAndTSFunc = () => {
    return GetFromModalUuidAndTSFuncDal();
};

let GetBodyCheckFunc = async () => {
    return GetBodyCheckFuncDal();
};

let GetRowCountFunc = () => {
    return GetRowCountFuncDal();
};

let GetMaxRowFunc = () => {
    return GetMaxRowFuncDal();
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowCountFunc, GetRowDataFunc,
    GetRowCountByIdFunc, GetfilterDataFunc, GetSummeryFunc, GetMaxRowFunc,
    GetNonMaxRowFunc
};