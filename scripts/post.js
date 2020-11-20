function editClicked() {
    document.getElementById('edit').style.display = 'none';
    document.getElementById('save').style.display = '';
    var x = document.getElementById("maintext").textContent; 
    document.getElementById('myTextArea').value = x;
    var tb = document.getElementById('maintext');
    var ta = document.getElementById('myTextArea');
    var y = document.createTextNode(x);
    if (tb.style.display !== 'none') {
        tb.style.display = 'none';
        ta.style.display = '';
        ta.appendChild(y);
    } else {
        tb.style.display = '';
        ta.style.display = 'none';
    }        
}

function saveClicked(){
    document.getElementById('edit').style.display = '';
    document.getElementById('save').style.display = 'none';
    var a = document.getElementById('myTextArea').value;
    document.getElementById("maintext").innerHTML = a;
    document.getElementById('maintext').style.display = ''
    document.getElementById('myTextArea').style.display = 'none';
    document.getElementById('myTextArea').value = '';
}

function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';          
    a.value=a.defaultValue;
}

var count = 0;
function postLiked(){
count = count + 1;
if(count == 1){
    document.getElementById('likeBlog').innerHTML = "<i class='fa fa-thumbs-up'></i>" + " Liked!" 
    document.getElementById('commentCount').innerHTML = count + " person likes this!"
}
else if(count > 1){
    document.getElementById('likeBlog').innerHTML = "<i class='fa fa-thumbs-up'></i>" + " Liked!"
    document.getElementById('commentCount').innerHTML = count + " people have liked this!"
}
}