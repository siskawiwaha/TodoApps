
// [
//    {
//       id: <int>
//       task: <string>
//       timestamp: <string>
//       isCompleted: <boolean>
//     }
//  ]



const SAVED_EVENT = "saved-todo";
const STORAGE_KEY = "TODO_APPS";

function saveData () {
    if(isStorageExist()) {
        const parsed = JSON.stringify(todos);
        localStorage.setItem(STORAGE_KEY, parsed);
        document.dispatchEvent(new Event(SAVED_EVENT));
    }
}

function isStorageExist() {
    if(typeof(Storage) === undefined) {
        alert("Browser Kamu Tidak Mendukung Local Storage");
        return false
    }
    return true;
}

document.addEventListener(SAVED_EVENT, function() {
    alert(localStorage.getItem(STORAGE_KEY));
});

function loadDataFromStorage () {
    const serializedData = localStorage.getItem(STORAGE_KEY);

    let data = JSON.parse(serializedData);

    if(data !== null ){
        for(todo of data) {
            todos.push(todo);
        }
    }
    document.dispatchEvent(new Event(RENDER_EVENT));
}