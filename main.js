document.getElementById("myForm").addEventListener('submit', (e) => {
    e.preventDefault();
    // debugger;
    // testUsername();
    // testPassword();

    // Se a função for chamada dentro do if, ela será executada
    if (!testUsername() || !testPassword() || !testEmail()) {
        // Quando é colocado o return em um if, se cair no if, nada mais da função será executado
        return false;
    }

    alert("DEU TUDO CERTO, PORRA")

})

function testUsername() {
    var username = document.getElementsByTagName("input")[0].value;
    console.log(username)
    // Procura por números e espaço vazio
    // var usernameTest = username.search(/([0-9]+|\s+)/g);

    var usernameTest = /^[a-zA-Z]{3}/.test(username)
    console.log(usernameTest)

    // Verifica se o input correspondente está vazio ou se atende o que está sendo passado na variável username
    if (!usernameTest) {
        alert("Insira apenas letras e 3 no mínimo")
        return false;
        console.log("DEU TUDO ERRADO 1")
    }

    return true;
    alert("As letras deram certo")
    console.log("DEU CERTO")
}


function testPassword() {
    var password = document.getElementsByTagName("input")[1].value;
    console.log("Senha", password)

    // No passwordTest iremos validar se o que é necessário para funcionar está sendo atentido
    // no caso irá ser retornado true ou false
    var passwordTest = /^[a-z]{5}/.test(password)
    console.log(passwordTest)

    if (!passwordTest) {
        alert("Insira 5 letras no mínimo")
        return false;
        console.log("DEU TUDO ERRADO 2")
    }

    return true;
    alert("As 5 letras que voce colocou deram certo")
}

function testEmail() {
    var email = document.getElementsByTagName("input")[2].value;
    console.log(email)

    // [a-zA-Z0-9.!#$%&'*+/=?^_`{|} -> Procurando letras, números e símbolos ( tipo ! # etc)
    // @[a-zA-Z] -> Procurando letras após o @
    //  + concatena
    var emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+(\.[a-zA-Z]+)+(\.\w{2,3,4})*$/.test(email)

    if(!emailTest){
        alert("Email invalido")
        return false;
    }

}
