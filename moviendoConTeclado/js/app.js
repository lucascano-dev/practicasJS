window.onload = () => {
    const player = {
        element: document.getElementById('player'),
        topPosition: 0,
        leftPosition: 0,
        step: 25,
        move: function(direction) {
            switch (direction) {
                case 'ArrowUp':
                    console.log('Arriba');
                    this.topPosition = this.topPosition - this.step; //Actualizamos la variable en el objeto
                    this.element.style.top = this.topPosition + "px"; //Actualizamos el css
                    console.log(this.topPosition);
                    break;
                    case "ArrowDown":
                        this.topPosition = this.topPosition + this.step;
                        this.element.style.top = this.topPosition + "px";
                        break;
        
                    case "ArrowRight":
                        this.leftPosition = this.leftPosition + this.step;
                        this.element.style.left = this.leftPosition + "px";
                        break;
        
                    case "ArrowLeft":
                        this.leftPosition = this.leftPosition - this.step;
                        this.element.style.left = this.leftPosition + "px";
                        break;
                default:
                    break;
            }
        }
    };

    onkeydown = (key) => {
        // console.log(key);
        // console.log(key.code)
        player.move(key.code);
    }
}