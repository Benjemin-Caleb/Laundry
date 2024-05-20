import { StartFunc as StartFuncBSTableURL } from "./ParentId/Entry.js";
import { StartFunc as StartFuncDashboardId } from "./DashboardId/Entry.js";
import { StartFunc as StartFuncShow } from "./BSTableFromScreen/EntryFile.js";
import { StartFunc as StartFuncCreate } from "./Tree/Entry.js";
import { StartFunc as StartFuncShowWithInfoId } from "./ShowWithInfoId/EntryFile.js";
// import { StartFunc as StartFuncCreate } from "./Create/Entry.js";

const StartFunc = () => {
    StartFuncBSTableURL();
    StartFuncDashboardId();
    StartFuncShow();
    StartFuncCreate();

    StartFuncShowWithInfoId();
    // StartFuncKSTree();
    // StartFuncCreate();
};

export { StartFunc };