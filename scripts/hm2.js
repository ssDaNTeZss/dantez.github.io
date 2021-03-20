// Стек имеет следующие распространенные методы:

// push: добавляет элемент на верх Стека
// pop: удаляет верхний элемент
// peek: показывает/возвращает верхний элемент
// length: выводит кол-во элементов в Стеке
// clear: очищает Стек

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
        console.log(`Элемент ${delItem} удален`);
        return delItem;
    }

    peek() {
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
        console.log('Стек очищен...');
        return this.items;
    }
}

const stack = new Stack();

window.onload = function () {
    const main =  document.querySelector("#mainContainer");
    const addB = document.querySelector("#add");
    const delB = document.querySelector("#del");
    const clearB = document.querySelector("#clear");
    const divCount = document.querySelector("#count");

    addB.onclick = function () {
        let container = document.getElementById("container");
        let text = document.getElementById('text');

        if (text.value.trim()) {
            let mas = text.value.split(/,\s*/);

            mas.forEach(function(entry) {
                let stackBlock = document.createElement("div");

                stackBlock.className = "stack-block";
                stackBlock.id = `sb${stack.push(entry)}`;
                stackBlock.innerHTML = entry;
                container.prepend(stackBlock);

                stLength();
            });
        }
    };

    delB.onclick = function () {
        let div = document.getElementById(`sb${stack.peek()}`);
        div.remove();

        stack.pop();

        stLength();
    };

    clearB.onclick = function () {
        let container = document.getElementById("container");
        container.remove();

        let div = document.createElement("div");
        div.className = "stack";
        div.id = 'container';
        main.append(div);

        stack.clear();

        stLength();
    };

    function stLength() {
        divCount.innerHTML = stack.length() == 0 ? 'Стек пуст...' : `Количество элементов в Стеке, равно ${stack.length()}`;
    }
};