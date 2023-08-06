var inputBox = document.getElementById('input-box')
var listContainer = document.getElementById('list-container')
var btn = document.querySelector('.button')

btn.onclick = addTask = () => {
    if (inputBox.value === '') {
        alert('Zehmet Olmasa Qeydlerinizi Qeyd Edin :)');
    } else {
        var li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.append(li);
        var span = document.createElement('span')
        span.innerHTML = 'x'
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData()
};

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
}, false)

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)

}

function showTask() {
    listContainer.innerHTML = localStorage.getItem('data')
}

showTask()