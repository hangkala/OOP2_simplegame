function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' +
            ' style="top:'+this.top+'px; left:'+this.left+'px;position:absolute;"/>';
    }
    // this.speed = function () {
    //   return 50;
    // };
    this.moveRight = function(){
        this.left += 10;
    };
    this.moveDown = function () {
        this.top += 10;
    };
    this.moveLeft = function () {
        this.left -= 10;
    };
    this.stop = function () {
        this.top -= 10;
    }
    this.moveUp = function () {
        this.top -=10;
    }
}

var hero = new Hero('pikachu.png',0,0, 200);

function start(){
    if((hero.left < window.innerWidth - hero.size && hero.top <= 0)){
        hero.moveRight();
    } if ((hero.left >= window.innerWidth - hero.size) && (hero.top <= window.innerHeight - hero.size)){
        //console.log('top '+ hero.top + ' left ' + hero.left + ' windowninnerwid '+window.innerWidth + ' innerhigh ' + window.innerHeight);
        hero.moveDown();
    } if ((hero.top >= window.innerHeight - hero.size) && 0 <= hero.left < window.innerWidth - hero.size){
        //console.log('top'+ hero.top + 'left' + hero.left + 'windowninnerwid'+window.innerWidth + 'innerhigh' + window.innerHeight);
        hero.moveLeft();
    } if ((hero.top >= window.innerHeight - hero.size)&& (hero.left < 0)){
        hero.stop();
    }if ((hero.top < window.innerHeight - hero.size)&& (hero.left < 0)){
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start,5)
}
start();