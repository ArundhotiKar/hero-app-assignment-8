const getStoredApp = () => {
    
    const storedAppSTR = localStorage.getItem("appList");

    if (storedAppSTR) {
        const storedBookData = JSON.parse(storedAppSTR);
        return storedBookData;
    }
    else {
        return [];
    }

}
const addToStoredDB = (id) => {
    console.log("addToStoredDB called with id:", id);

    const storedAppData = getStoredApp();
    console.log("Before:", storedAppData);

    if (storedAppData.includes(id)) {
        console.log("hello - already exists");
        alert("bhai ei id already exist");
    } else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("appList", data);
        console.log("After:", storedAppData);
    }
}
// ✅ New function to remove app from localStorage
const removeFromStoredDB = (id) => {
    let storedAppData = getStoredApp();
    storedAppData = storedAppData.filter(appId => appId.toString() !== id.toString());
    localStorage.setItem("appList", JSON.stringify(storedAppData));
}

export { addToStoredDB, getStoredApp, removeFromStoredDB };