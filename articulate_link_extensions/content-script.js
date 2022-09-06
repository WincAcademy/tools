console.log("Extension loaded");

const getLinkElement = id => {
    // https://rise.articulate.com/author/p4qfZS4ZiuyhPEBBGBoS_j4c0uSrWYRk#/author/course
    const a = document.createElement("a");
    a.setAttribute("class", "new_link");
    a.setAttribute("title", "open this module in a new tab");
    a.setAttribute(
        "href",
        `https://rise.articulate.com/author/${id}#/author/course`
    );
    a.setAttribute("target", "_blank");
    a.innerHTML = "🔗";
    return a;
};

const updateSingleItem = item => {
    const id = item.getAttribute("data-ba-course-id");
    const link = getLinkElement(id);
    item.querySelector("h2").insertAdjacentElement("beforeend", link);
};

const updateListItems = () => {
    const list_items = document.querySelectorAll(".courses-list-item--list");
    list_items.forEach(updateSingleItem);
};

setTimeout(updateListItems, 4000);