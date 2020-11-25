import {maskPhone, validate} from './validate';

const sendData = () => {

    const popupThank = document.querySelector('.popup-thank '),
        closeBtn = popupThank.querySelector('.close'),
        popupTitle = popupThank.querySelector('.popup-thank__title');

    const validateInput = () => {
        document.querySelectorAll('form').forEach(form => {
            [...form.elements].forEach(item => {
                item.removeAttribute('required');
                item.addEventListener('input', () => {
                    if(item.tagName.toLowerCase() !== 'button' && item.type !== 'button'){
                        if(item.type === 'text' && item.name === 'phone'){
                            maskPhone(`#${item.id}`);
                        }
                        if(item.type === 'text' && item.name === 'name'){
                            item.value = validate(item.value).cirilicAndSpace();
                        }
                    }
                });
            });
        });
    };

    const formDataToJson = (form) => {
        const formData = new FormData(form);
        let obj = {};

        for(let [key, value] of formData.entries()){
            obj[key] = value;
        }

        return JSON.stringify(obj);
    };  

    const postData = (form) => {

        fetch('./server.php', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
            },
            'body': formDataToJson(form)
        })
        .then(response => {
            if(response.status === 200){
                return response.text();
            } else {
                throw new Error(`Произошла ошибка с кодом: ${response.status}`);
            }
        })
        .then((result) => {
            console.log(result);
            popupTitle.innerHTML = `${result} <br> ${popupTitle.textContent}`;
            popupThank.style.visibility = 'visible';
            closeBtn.addEventListener('click', () => popupThank.style.visibility = 'hidden');
        })
        .finally(() => form.reset());
    };

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const target = event.target;

        postData(target);
        target.elements[target.elements.length-1].disabled = true;
    });

    validateInput();
};

export default sendData;