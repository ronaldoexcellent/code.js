const header = document.querySelector('header');
const nav = document.querySelector('nav');
const main = document.querySelector('main');
const aside = document.querySelector('aside');
const footer = document.querySelector('footer');

var widget;

const widgets = {
    construct : (widget) => {
        this.widget = document.createElement(widget);
        this.widget.className = "widget";
        this.widget.draggable = true;
    },
    select : (widget) => {
        this.widget = document.querySelector(widget);
    },
    restrict : (widget) => {
        this.widget = document.querySelector(widget).disabled = true;
    },
    constructMultiple : (widget, n) => {
        this.widget = new Array();
        for (i = 0; i < n; i++) {
            this.widget[i] = document.createElement(widget);
            this.widget[i].draggable = true;
        }
    }
};

const render = (category, wid) => {
    return category.appendChild(wid);
};

const renderAll = (category, widget) => {
    for (i = 0; i < widget.length; i++) {
        category.appendChild(widget[i]);
    };
};

const renderBefore = (target, wid) => {
    return target.insertAdjacentElement('beforeBegin', wid);
};

const renderAfter = (target, wid) => {
    return target.insertAdjacentElement('afterEnd', wid);
};

const renderFirstPlace = (target, wid) => {
    return target.insertAdjacentElement('afterBegin', wid);
};

const renderLastPlace = (target, wid) => {
    return target.insertAdjacentElement('beforeEnd', wid);
};

const swap = (current_widget, new_widget) => {
    current_widget.replaceWith(new_widget);
};

const swapMultiple = (widget, n) => {
    document.querySelector('layout').replaceChildren(widget[n]);
};
/*
    if (layout.children[i].children.length > 1) {
        layout.children[i].className.replace('widget', 'category' + layout.indexOf(layout.children[i]))
    }
*/