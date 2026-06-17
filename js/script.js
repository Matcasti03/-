function mostrarSenha() 
{
    const senha = document.getElementById("senha");

    if (senha.type === "password") {
        senha.type = "text";
    } else {
        senha.type = "password";
    };
}
    function abrirLogin() {
    document.getElementById("overlayLogin").classList.add("ativo");
}

function fecharLogin() {
    document.getElementById("overlayLogin").classList.remove("ativo");
}
function toggleDark() {
    document.body.classList.toggle("dark");
}
