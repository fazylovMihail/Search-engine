const input = document.querySelector('.search__input');
const btn = document.querySelector('.search__button');
const select = document.querySelector('.search__select');

function SubmitRequest(event){
    event.preventDefault();

    valueInput = input.value;
    valueSelect = select.value;

    let params;

    if(valueInput){
        if(valueSelect == 'google' || 'bing'){
            params = '/search?q=';
        }
        else if(valueSelect == 'yandex'){
            params = '/search?text=';
        }
        else if(valueSelect == 'duck'){
            params = '?q=';
        }
    
        window.open(`https://www.${valueSelect}.com/${params}` + valueInput, '_blank');
    }
    else{
        alert('Нужно что-то написать');
    }
}

btn.addEventListener('click', SubmitRequest)