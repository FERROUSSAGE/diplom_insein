const menu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu'),
        closeBtn = popupDialogMenu.querySelector('.close-menu'),
        menuBtn = document.querySelector('.menu');

    let windowWidth = window.innerWidth;
    window.addEventListener('resize', (e) => {
        windowWidth = e.target.innerWidth;
        if (windowWidth < 576) {
            popupDialogMenu.style.transform = 'translateY(-1500px)';    
        } else {
            popupDialogMenu.style.transform = 'translateX(645px)'; 
        }
    });

    const openMenu = () => {
        popupDialogMenu.style.transform = 'translateY(0)';
    };
    const closeMenu = () => {
        if(windowWidth < 576){
            popupDialogMenu.style.transform = 'translateY(-1500px)';
        } else {
            popupDialogMenu.style.transform = 'translateX(645px)';
        }
    };

    menuBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);
};

export default menu;