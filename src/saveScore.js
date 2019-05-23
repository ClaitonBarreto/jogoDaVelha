function saveScore(item) {
    window.sessionStorage.setItem(item, parseInt(getScore(item)) + 1)
}

function getScore(item) {
    return window.sessionStorage.getItem(item)
}