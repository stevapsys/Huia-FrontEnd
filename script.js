function validacao() {
    var CRM = form.CRM.value;
  
    if (CRM == "") {
        document.getElementById('campo').style.display="inline";
        form.CRM.focus();
        return false;
    }

    if (document.form.UF.selectedIndex==""){
        document.getElementById('campoUF').style.display="inline";
        document.form.UF.focus()
        return false;
     }

}

