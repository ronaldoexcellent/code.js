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
    constructmultiple : (widget, n) => {
        this.widget = new Array();
        for (i = 0; i < n; i++) {
            this.widget[i] = document.createElement(widget);
            this.widget[i].draggable = true;
        }
    },
    swap : (new_widget, current_widget) => {
        this.widget = document.querySelector(layout).replaceChild(new_widget, current_widget);
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

var renderBeforeBegin,renderBeforeEnd, renderAfterBegin, renderAfterEnd;

/*
    if (layout.children[i].children.length > 1) {
        layout.children[i].className.replace('widget', 'category' + layout.indexOf(layout.children[i]))
    }
*/