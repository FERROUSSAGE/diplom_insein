import animateScroll from './animate';

const fromFooterToTop = () => {
    document.querySelector('.button-footer')
        .addEventListener('click', (e) => {
            e.preventDefault();
            animateScroll(e.target.attributes[0].textContent);
        });
};

export default fromFooterToTop;