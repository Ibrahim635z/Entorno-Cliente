const moverImagen = () => {

    
    const imgCollection = document.getElementsByTagName("img");
      
    for (let i = 0; i < imgCollection.length; i++) {
        

        const enMovimiento = (event) => {
            const top1=event.pageY;
            const left1=event.pageX;
            
            imgCollection[i].style.top= top1 + 'px';
            imgCollection[i].style.left= left1 + 'px';
    
        };
    

        const detenerMovimiento = () => {

            document.removeEventListener('mousemove', enMovimiento);
            document.removeEventListener('mouseup', detenerMovimiento);
        };


        imgCollection[i].addEventListener('mousedown', () => {
        
            document.addEventListener('mousemove', enMovimiento);
            document.addEventListener('mouseup', detenerMovimiento); 
        });
    }
};

(function () {
    moverImagen();
})();