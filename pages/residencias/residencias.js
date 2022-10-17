document.readyState === "complete" ? init() : window.addEventListener("load", init);
let residencias = [
    {id: 1, direccion: "cs-s", estado: "mora", descripcion: "....", conjunto: "cs", residente: "Juan miguel"},
    {id: 2, direccion: "sdc-a", estado: "pas y salvo", descripcion: "....", conjunto: "cs", residente: "Arturo Villamizar"},
    {id: 3, direccion: "sdc-b", estado: "mora", descripcion: "....", conjunto: "cs", residente: "Maria Jose"},
    {id: 4, direccion: "sdc-c", estado: "pas y salvo", descripcion: "....", conjunto: "cs", residente: "Juan Carlos"},
    {id: 5, direccion: "sdc-d", estado: "mora", descripcion: "....", conjunto: "cs", residente: "Luisa Castro"},
    {id: 6, direccion: "sdc-e", estado: "pas y salvo", descripcion: "....", conjunto: "cs", residente: "Carlos Perez"},
    {id: 7, direccion: "sdc-f", estado: "mora", descripcion: "....", conjunto: "cs", residente: "Maria Jose"},
]
let content = null;
function init() {
    content = parent.document.getElementById("content");
    let row = 0;
    document.getElementById("residencias").innerHTML = residencias.map(residencia => {
        row++;
        return `<tr onclick="show(${residencia.id})" class="residencia">
            <td scope="row">${row}</td>
            <td>${residencia.direccion}</td>
            <td>${residencia.estado}</td>
            <td>${residencia.residente}</td>
        </tr>`
    }
    ).join("");
    
}

function show(id){
    const residencia = residencias.find(residencia => residencia.id === id);
    content.innerHTML = `<object type="text/html" data="pages/residencia/residencia.html" id="contentObj" style="width: 100%; height: 100%;"></object>`;

}