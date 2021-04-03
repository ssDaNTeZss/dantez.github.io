window.onload = function () {

    const makeBlock = (parentId) => {
        return function createChild(child) {
            return function a(count) {
                try {
                    for (let i = 1; i <= count; i++) {
                        let container = document.getElementById(parentId);
                        let addedObject = document.createElement(child);

                        addedObject.className = "addedObject";
                        addedObject.id = 'addedObject-' + i;
                        addedObject.innerHTML =
                            `<a id=delButton-${i} class="closeButton" href="#" onClick="delObject(this.id)">&#10006;</a>\n` +
                            `<span class="text-info">Блок № ${i}</span>\n`;
                        container.append(addedObject);
                    }
                } catch (e) {
                    console.log('Что-пошло не так...');
                }
            }
        }
    };

    // makeBlock('container123')('div')(10);

    const addButton = document.querySelector("#add");

    addButton.onclick = function () {
        let container = document.getElementById("container");
        container.innerHTML = '';

        const parentId = document.getElementById("parentInput").value;
        const childsName = document.getElementById("childInput").value;
        let count = document.getElementById("countObj").value;

        count = count == '' ? 1 : count;

        makeBlock(parentId)(childsName)(count);
    }
};

function delObject(idButton) {
    let objectNumber = idButton.split('-');
    let object = document.getElementById(`addedObject-${objectNumber[1]}`);

    object.remove();
}