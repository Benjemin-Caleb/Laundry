let StartFunc = async ({ inBodyData }) => {
    let jVarLocalFetchUrl = `/bin/Factory/QrCodeDetails`;
    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};

export { StartFunc };