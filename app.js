const userName = document.querySelector('#username');
const userPassword = document.querySelector('#password');
const submitBtn = document.querySelector('[data-send-request]');
const changeMode = document.querySelectorAll('.changeMode');
const modeText = document.querySelector('#mode');
let teacherMode = false;

changeMode.forEach((index) => {
    index.addEventListener('click', () => {
        let dataMode = index.getAttribute('data-mode');
        if(dataMode == 'teacher'){ 
            teacherMode = true;
            modeText.textContent = '教職員工';
        }else if(dataMode == 'student'){
            teacherMode = false;
            modeText.textContent = '學生';
        }else {
            teacherMode = false;
            modeText.textContent = '家長';
        }
    });
});

function sendForm(){
    let user_id = userName.value;
    let user_password = userPassword.value;
    if(user_id === " " || user_id === "" || user_id === undefined || user_password == " " || user_password === "" || user_password === undefined){
        return;
    }
    if(teacherMode === false){
        let loginUrl = `http://crm.mingdao.edu.tw/crm/login.asp?user_id=${user_id}&user_password=${user_password}`;
        window.location.assign(loginUrl);
    }else {
        let loginUrl = `http://s5.mingdao.edu.tw/MD_ERP/login.asp?account=${user_id}&pw=${user_password}`;
        window.location.assign(loginUrl);
    }
    
}

submitBtn.addEventListener('click', sendForm);
window.addEventListener('keydown', (e) => {
    if(e.keyCode == 13){
        sendForm();
    }else {
        return;
    }
});