// var input = document.getElementsByClassName('form-index')[0];
// var inputValue = input.value;
// var list = document.getElementsByClassName('todo-list')[0];

// input.addEventListener('keyup', function (e) {
//     if (e.keyCode === 13) {
//         var li = document.createElement('li');
//         var t = document.createTextNode(this.value);
//         li.appendChild(t);
//         if (this.value === '') alert('ban chua nhap');
//         else list.appendChild(li);
//         this.value = '';
//     }  else console.log (this.value);
// })

$ (document).ready (function () {
    var input = $ ('.form-index');
    var list = $ ('.todo-list');
    var body = $ ('.body');

    body.on('keyup', '.form-index', function (e) {
        console.log($(this).val().length);
        if (e.keyCode === 13) {
                    var li = $('<li></li>');
                    console.log (li);
                    $(li).append(document.createTextNode($(this).val()))
                    if ($(this).val() === '') alert('You can not add a blank text');
                    else $(list).append(li);
                    $(input).val("");
                }  else console.log ($(this).val());
    })
})
