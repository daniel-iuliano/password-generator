
let password = document.getElementById('password');
let btnGenerator = document.getElementById('generate');

let normalBtn = document.getElementById('normalBtn');
let insaneBtn = document.getElementById('insaneBtn');
let extremeBtn = document.getElementById('extremeBtn');





function normalPasswordGenerator( len ) {
    let length = (len)?(len):(8);
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeric = '0123456789';
    let punctuation = '';
    let password = "";
    let character = "";
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}

function insanePasswordGenerator( len ) {
    let length = (len)?(len):(14);
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeric = '0123456789';
    let punctuation = '@#$%^&';
    let password = "";
    let character = "";
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}

function extremePasswordGenerator( len ) {
    let length = (len)?(len):(20);
    let string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numeric = '0123456789';
    let punctuation = '!@#$%^&*()_+~`|}{[];?><,./-=';
    let password = "";
    let character = "";
    while( password.length<length ) {
        entity1 = Math.ceil(string.length * Math.random()*Math.random());
        entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
        entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
        hold = string.charAt( entity1 );
        hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
        character += hold;
        character += numeric.charAt( entity2 );
        character += punctuation.charAt( entity3 );
        password = character;
    }
    password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
    return password.substr(0,len);
}

function showPasswordGenerator(){
    if(normalBtn.checked){
        password.value = normalPasswordGenerator()
    }    
     else if(insaneBtn.checked){
            password.value = insanePasswordGenerator() 
    }else
    {
        password.value = extremePasswordGenerator() 
    }
}

btnGenerator.addEventListener('click', ()=>{
    showPasswordGenerator()
    });