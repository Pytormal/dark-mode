const useLocalStorage = () => {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(key,'initialValue') 
    }

}