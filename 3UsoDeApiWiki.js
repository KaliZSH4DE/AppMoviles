const terminoBusqueda = 'Programación'; // Término que deseas buscar 
const url = `https://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=${terminoBusqueda}&format=json&origin=*`;

// Función para obtener resultados de Wikipedia 
async function buscarEnWikipedia() { 
    try { 
        const respuesta = await fetch(url); // Llamada a la API de Wikipedia 
        const datos = await respuesta.json(); // Convierte la respuesta a JSON 
        const resultados = datos.query.search; // Corregido aquí
        
        if (resultados.length > 0) { 
            document.getElementById('resultados').textContent = `Resultados de búsqueda para "${terminoBusqueda}":`; 
            const listaResultados = document.getElementById('listaResultados'); 
            listaResultados.innerHTML = ''; // Limpiar lista antes de agregar resultados
            resultados.forEach(resultado => { 
                const li = document.createElement('li'); 
                li.innerHTML = `<a href="https://es.wikipedia.org/wiki/${resultado.title}" target="_blank">${resultado.title}</a> — ${resultado.snippet}`; // Corregido aquí
                listaResultados.appendChild(li); 
            }); 
        } else { 
            document.getElementById('resultados').textContent = 'No se encontraron resultados.'; 
        } 
    } catch (error) { 
        document.getElementById('resultados').textContent = 'Error al obtener los datos de Wikipedia.'; 
        console.error('Error:', error); // Mover aquí para capturar el error
    } 
} 

// Llamar a la función para hacer la búsqueda cuando la página se carga 
buscarEnWikipedia();
