const form = document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault();
    
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    console.log(item, priority);
}


form.addEventListener('submit', onSubmit);