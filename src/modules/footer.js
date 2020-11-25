import animateScroll from './animate';

const fromFooterToTop = () => {
    document.querySelector('.button-footer')
        .addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.popup-dialog-menu')
                .style.transform = 'translateX(645px)';
            animateScroll(e.target.attributes[0].textContent);
        });
};

export default fromFooterToTop;