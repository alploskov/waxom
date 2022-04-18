_form = () => {
    document.getElementById("b-email").onclick = () => {
        console.log(document.getElementById("i-email").value);
        document.getElementById("i-email").value = '';
    }
}