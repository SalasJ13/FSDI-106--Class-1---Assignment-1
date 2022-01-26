//clase 2
var isImportant = false;
var isAsideVisible = true;

function toggleImportant(){
    console.log("Icon click")

    let icon=$(".iImportant");
    if(isImportant){
        icon.removeClass("fas").addClass("far");
        isImportant = false;
    }
    else{
        icon.removeClass("far").addClass("fas");
        isImportant =   true;
    }
    
}
function toggleDetails(){
    let aside =$("aside");

    if(isAsideVisible){
        aside.hide();
        isAsideVisible=false;
    }
    else{
        aside.show();
        isAsideVisible=true;
    }
}


function saveTask(){
    console.log("Saving task");

    //guardamos lo que se ingresa
    let text = $("#txtTitle").val();
    console.log(text);
    //tarea 2 mostrar todos lo que se ingrese desde el form y mostrarlo en console
    let dateTime = $("#txtDueDate").val();
    console.log(dateTime);
    let location=$("#txtLocation").val();
    console.log(location);
    let description=$("#txtDescri").val();
    console.log(description);
    let participants=$("#txtParti").val();
    console.log(participants);
    let color =$("#txtColor").val();
    console.log(color);
}

function init(){
    console.log("Calendar")

    //hook events
    $("#btnSave").click(saveTask);

    $(".iImportant").click(toggleImportant);
    $("#btnToggleDet").click(toggleDetails);
}
window.onload=init;