function getElement(id: string): HTMLElement | null {
    return document.getElementById(id);
}

let element = getElement("myId");
if (element) {
    let className = (element as HTMLElement).className;
}