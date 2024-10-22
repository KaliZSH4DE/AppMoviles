function add() {
    let tarea = document.getElementById("input").value;

    if (tarea !== '') {
        let li = document.createElement("li");
        li.textContent = tarea;

        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = function() {
            li.remove();
        };

        li.appendChild(botonEliminar);
        document.getElementById("listaTareas").appendChild(li);
        
        document.getElementById("input").value = "";
    }
}
