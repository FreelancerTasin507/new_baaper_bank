document.getElementById('login_btn').addEventListener('click',function(){
    const emailValue = document.getElementById('login_email');
    const emailText = emailValue.value;

    const password = document.getElementById('login_pass');
    const passValue = password.value;

    window.location.href = 'index_bank.html'

})