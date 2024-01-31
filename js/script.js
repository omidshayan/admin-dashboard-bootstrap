const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

// theme mode
function applyTheme(theme){
    document.body.classList.remove("theme-auto","theme-light","theme-dark");
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
    const saveTheme = localStorage.getItem('theme') || "auto";

    applyTheme(saveTheme)

    for(const opationElement of document.querySelectorAll('#selTheme option')){
        opationElement.selected = saveTheme === opationElement.value
    }
    document.querySelector('#selTheme').addEventListener("change", function () {
        localStorage.setItem("theme", this.value)
        applyTheme(this.value)
    })
})

// active 

// انتخاب تمام عناصر li-hover
let lastClickedItem = null;
const sidebarItems = document.querySelectorAll('.li-hover');
sidebarItems.forEach(function(item) {
    item.addEventListener('click', function() {
        if (lastClickedItem === item) {
            return;
        }
        if (lastClickedItem) {
            lastClickedItem.classList.remove('active');
        }
        item.classList.add('active');
        lastClickedItem = item;
    });
});
