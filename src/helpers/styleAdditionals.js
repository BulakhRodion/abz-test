export function showFocused(e) {
    e.target.classList.add("input-active");
}

export function hideFocused(e) {
    if(e.target.value.length > 0) {
        return;
    } else {
        e.target.classList.remove("input-active");
    }
}