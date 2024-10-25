// require('dotenv').config();

const acordeonTrigger = document.querySelectorAll('.acordeon');

acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        // debugger;
        const content = e.target.parentElement;
        if (content.classList.contains('open')) {
            content.classList.remove('open');
        } else {
            content.classList.add('open');
        }
        
    });

    });
