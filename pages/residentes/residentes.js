document.readyState === "complete" ? init() : window.addEventListener("load", init);
let residentes = [
    {id: 1, nombre: "Juan miguel", identificacion: "1000503103", correo: "example@gmail.com", telefono: "3205211241"},
    {id: 2, nombre: "Arturo Villamizar", identificacion: "1004240242", correo: "aturo@gmail.com", telefono: "3104552430"},
    {id: 3, nombre: "Maria Jose", identificacion: "1042424204", correo: "maria@gmail.com", telefono: "3205231241"},
    {id: 4, nombre: "Juan Carlos", identificacion: "1000503103", correo: "juan@gmail.com", telefono: "3204213134"},
    {id: 5, nombre: "Luisa Castro", identificacion: "1005327424", correo: "luisa@gmail.com", telefono: "3207541234"},
    {id: 6, nombre: "Carlos Perez", identificacion: "1000237802", correo: "carlos@gmail.com", telefono: "3135283463"},
]
let content = null;
function init() {
    content = parent.document.getElementById("content");
    let row = 0;
    document.getElementById("residentes").innerHTML = residentes.map(residente => {
        row++;
        return `<tr onclick="show(${residente.id})" class="residente">
            <td scope="row">${row}</td>
            <td>${residente.identificacion}</td>
            <td>${residente.nombre}</td>
            <td>${residente.correo}</td>
            <td>${residente.telefono}</td>
        </tr>`
    }
    ).join("");
    
}

function show(id){
    const residente = residentes.find(residente => residente.id === id);
    content.innerHTML = `<object type="text/html" data="pages/residente/residente.html" id="contentObj" style="width: 100%; height: 100%;"></object>`;
    
}