window.addEventListener('load', () => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
})

const update = () => {
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    /** establece ancho width = Cantidad de pixeles scrolleados / (Alt-total-del-body - Alto total de la ventana del buscador) * 100 */
    requestAnimationFrame(update);
}