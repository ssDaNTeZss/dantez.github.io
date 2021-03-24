// Стек имеет следующие распространенные методы:

// push: добавляет элемент на верх Стека
// pop: удаляет верхний элемент
// peek: показывает/возвращает верхний элемент
// length: выводит кол-во элементов в Стеке
// clear: очищает Стек

_log = console.log.bind(console);
_warn = console.warn.bind(console);
_err = console.error.bind(console);

console.log = function() {
    let logArguments = [];

    logArguments.push(logTime());
    for (let key in arguments) {
        logArguments.push(arguments[key]);
    }

    _log.apply(this, logArguments);
};

console.warn = function() {
    let logArguments = [];

    logArguments.push(logTime());
    for (let key in arguments) {
        logArguments.push(arguments[key]);
    }

    _warn.apply(this, logArguments);
};

console.error = function() {
    let logArguments = [];

    logArguments.push(logTime());
    for (let key in arguments) {
        logArguments.push(arguments[key]);
    }

    _err.apply(this, logArguments);
};

function logTime() {
    let date = new Date();
    let options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    return(date.toLocaleString("ru", options));
}

class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(e) {
        this.items[this.count] = e;
        console.log(`Добавлен элемент '${e}' под номером ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    pop() {
        if (this.count == 0) return undefined;
        let delItem = this.items[this.count - 1];
        this.count--;
        console.warn(`Элемент ${delItem} удален`);
        return delItem;
    }

    peek() {
        if (this.count == 0) return undefined;
        console.log(`Верхний элемент '${this.items[this.count - 1]}', под номером ${this.count - 1}`);
        return this.count - 1;
    }

    length() {
        console.log(this.count == 0 ? 'Стек пуст...' : `Количество элементов в Стеке, равно ${this.count}`);
        return this.count;
    }

    clear() {
        this.items = [];
        this.count = 0;
        console.warn('Стек очищен...');
        return this.items;
    }
}

const stack = new Stack();

window.onload = function () {
    const addButton = document.querySelector("#add");
    const delButton = document.querySelector("#del");
    const clearButton = document.querySelector("#clear");
    const divCount = document.querySelector("#count");

    addButton.onclick = function () {
        let container = document.getElementById("container");
        let text = document.getElementById('text');

        if (text.value.trim()) {
            let mas = text.value.split(/,\s*/);

            const TIME_START = new Date;

            mas.forEach(function(entry) {
                let stackBlock = document.createElement("div");

                stackBlock.className = "stack-block";
                stackBlock.id = `sb${stack.push(entry)}`;
                stackBlock.innerHTML = entry;
                container.prepend(stackBlock);

                stLength();
            });

           const TIME_END = new Date,
               CHRONOMETRY = TIME_END - TIME_START;

            console.log('Операция добавления заняла -', CHRONOMETRY, 'мс');
        }
    };

    delButton.onclick = function () {
        try {
            let div = document.getElementById(`sb${stack.peek()}`);
            div.remove();

            stack.pop();

            stLength();
        } catch (err) {
            console.warn('Стек пуст...');
        }
    };

    clearButton.onclick = function () {
        let container = document.getElementById("container");
        container.innerHTML = '';

        stack.clear();

        stLength();
    };

    function stLength() {
        divCount.innerHTML = stack.length() == 0 ? 'Стек пуст...' : `Количество элементов в Стеке, равно ${stack.length()}`;
    }
};