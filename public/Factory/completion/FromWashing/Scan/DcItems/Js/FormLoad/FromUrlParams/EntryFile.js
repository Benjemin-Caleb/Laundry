// import { StartFunc as StartFuncFromSave } from "./FromSave/ChangeRowColour/EntryFile.js";

let StartFunc = () => {
  let jVarLocalFromSave = getUrlQueryParams({ inGetKey: "FromSave" });
  let jVarLocalSavedPk = getUrlQueryParams({ inGetKey: "SavedPk" });
  LocalFuncForBranchNameId();
  if (jVarLocalFromSave) {
    //  StartFuncFromSave({ inRowPk: jVarLocalSavedPk });
  };
};

let LocalFuncForBranchNameId = () => {
  // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
  let jVarLocalfactoryName = localStorage.getItem("FactoryName");

  let jVarLocalBranchNameId = document.getElementById('FactoryNameId');


  if (jVarLocalBranchNameId === null === false) {
    jVarLocalBranchNameId.innerHTML = jVarLocalfactoryName
  };
};

let getUrlQueryParams = ({ inGetKey }) => {
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const value = parameters.get(inGetKey);
  return value;
};

export { StartFunc }