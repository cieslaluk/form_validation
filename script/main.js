var allAgreementsCheckbox = document.getElementById('wszystkie-zgody');
var firstAgrement = document.getElementById('zgoda-marketingowa-1');
var secondAgrement = document.getElementById('zgoda-marketingowa-2');


/*===============================================*/
function checkAgreements() {


    var allCheckboxes = document.querySelectorAll('[type="checkbox"]');

    for (var i = 0; i < allCheckboxes.length - 1; i++) {
        allCheckboxes[i].checked = this.checked;
        allCheckboxes[i].disabled = this.checked;
    }

}

allAgreementsCheckbox.addEventListener('change', checkAgreements);

/*===============================================*/
function validateForm(event) {
    var nameInput = document.getElementById('name');
    var mailInput = document.getElementById('email');
    var firstAgreement = document.getElementById('zgoda-marketingowa-1');
    
    event.preventDefault();
   
    document.getElementById('message').innerHTML = '<ul id="message-list"></ul>';
    
    if(nameInput.value === ''){
        var msgName = document.createElement('li');
        msgName.innerHTML = 'Wpisz imię!';
        document.getElementById('message-list').appendChild(msgName);
        
    }

    if(mailInput.value === ''){
        var msgEmail = document.createElement('li');
        msgEmail.innerHTML = 'Wpisz email!';
        document.getElementById('message-list').appendChild(msgEmail);
    }
    
    if(!firstAgreement.checked){
        var msgCheckbox = document.createElement('li');
        msgCheckbox.innerHTML = 'Zaznacz checkbox 1';
        document.getElementById('message-list').appendChild(msgCheckbox);
    }
    
    
}

document.getElementById('mailing-form').addEventListener('submit', validateForm);