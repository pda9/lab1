function loadJson(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'dishes.json', false);
    xhr.send();
    if(xhr.status != 200){
        alert("Ахтунг!");
    }
    else{
        alert(xhr.responseText);
    }
}