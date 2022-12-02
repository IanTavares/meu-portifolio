    var menu = document.querySelector('.navList');
    var menuIcon = document.querySelector('.menu-icon');

    function abrirMenu() {
        menu.classList.toggle ('open')
    }
    const el = document.querySelector('#name')
    const text = "Ian Tavares"
    const interval = 100
    
    function abrirMenu() {
        menu.classList.toggle ('open')
    }
    
    //Texto Digitado H1
    
    function showText (el, text, interval) {
        const char = text.split("").reverse()
    
        const typer = setInterval(() => {
    
            if(!char.length) {
                return clearInterval(typer)
            }
    
            const next = char.pop()
    
            el.innerHTML += next
    
        }, interval)
    }
    
    showText(el, text, interval)