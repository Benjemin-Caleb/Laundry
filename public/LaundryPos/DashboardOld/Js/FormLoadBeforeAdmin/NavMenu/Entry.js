import { StartFunc as StartFuncToFactory } from "./ToFactory/Entry.js";
import { StartFunc as StartFuncOrdersId } from "./OrdersId/Entry.js";
import { StartFunc as StartFuncQrCodeId } from "./QrCodeId/Entry.js";
import { StartFunc as StartFuncMastersDashBoardId } from "./MastersDashBoardId/Entry.js";
import { StartFunc as StartFuncTodayDashBoardId } from "./TodayDashBoardId/Entry.js";
import { StartFunc as StartFuncReportsId } from "./ReportsId/Entry.js";

const StartFunc = () => {
    StartFuncToFactory();
    StartFuncOrdersId();
    StartFuncQrCodeId();
    StartFuncQrCodeId();
    StartFuncMastersDashBoardId();
    StartFuncTodayDashBoardId();
    StartFuncReportsId();
};

export { StartFunc };