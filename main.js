function Validate(){

    function testUsername(){
        // debugger;
        var username = document.getElementsByTagName("input")[0].value;
        // Procura por números e espaço vazio
        var usernameTest = username.search(/([0-9]+|\s+)/g);
        console.log(usernameTest)

        // Verifica se o input correspondente está vazio ou se atende o que está sendo passado na variável username
        if( username == " " || usernameTest != -1 ){
            alert("Insira apenas letras")
        }
    }

    function testPassword(){
        var password = document.getElementsByTagName("input")[1].value;

    }
    
    function testGmail(){

    }

    testUsername();
}