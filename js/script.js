function Listener() {
        // Selecione o elemento radio button
        const radioButtons = document.querySelectorAll('input[name="tipoRegistro"]');

        // Adicione o event listener ao evento "change"
        radioButtons.forEach(radioButton => {
            radioButton.addEventListener('change', function() {
                // Obtenha o valor selecionado
                const selectedValue = this.value;

                // Selecione a label "tipoRegistro"
                const tipoRegistroLabel = document.getElementById('tipoRegistro');

                // Atualize o conteúdo da label
                // tipoRegistroLabel.textContent = selectedValue;
                tipoRegistroLabel.innerHTML = selectedValue;
                generateFeedback();
            });
        });
}

        function generateFeedback() {
            if (!validateFormDiscente()) return;   
            if (!validateFormTipoRegistro()) return;               
            if (!validateFormItens()) return;               
        
            var form = document.getElementById("itens");
            var feedback = "";
            var tiporegistro = document.querySelector('input[name="tipoRegistro"]:checked').value + " ";
            
            // Verifique qual opção foi selecionada
            if (tiporegistro.includes("AÇÕES DE FEEDBACK")) {
                feedback = document.querySelector('input[name="discente"]:checked').value + " ";
            } else {
                //feedback = "Constatou-se que " + document.querySelector('input[name="discente"]:checked').value + " ";
                feedback = "Constatou-se necessário acompanhamento ";
            }
        
            for (var i = 0; i < form.elements.length; i++) {
                if (form.elements[i].checked) {
                    feedback += form.elements[i].value + "\n";
                }
            }
        
            document.getElementById("feedback").value = feedback;
        
            var paragraph = document.createElement('p');
            paragraph.innerHTML = `**${tiporegistro}**`; // Interpolação de string
        }

        function clearSelection() {
            var form = document.getElementById("itens");
            for (var i = 0; i < form.elements.length; i++) {
                form.elements[i].checked = false;
            }
            document.getElementById("feedback").value = "";
        }

        function copyToClipboard() {
            var textarea = document.getElementById("feedback");
            textarea.select();
            document.execCommand("copy");
            alert('Pressione CTRL V no Sistema Educacional ');
            return false;            
        }


    function validateFormDiscente() {
        var radios = document.getElementsByName('discente');
        var formValid = false;

        var i = 0;
        while (!formValid && i < radios.length) {
            if (radios[i].checked) formValid = true;
            i++;        
        }

        if (!formValid) alert("Selecione o perfil discente!");
        return formValid;
    }

    function validateFormTipoRegistro() {
        var radios = document.getElementsByName('tipoRegistro');
        var formValid = false;

        var i = 0;
        while (!formValid && i < radios.length) {
            if (radios[i].checked) formValid = true;
            i++;        
        }

        if (!formValid) alert("Informe se você conversou pessoalmente com (o/a) Estudante.");
        return formValid;
    }

    

    function validateFormItens() {    
//        document.getElementById('itens').addEventListener('submit', function(e) {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (!checkedOne) {
            alert('Por favor, selecione pelo menos um checkbox nos itens de feedback.');
            return false;
        }
        return true;
    }

    function ERROvalidateFormItens() {
        var checkboxes = document.getElementsByName('itens');
        var formValid = false;

        var i = 0;
        while (!formValid && i < checkboxes.length) {
            if (checkboxes[i].checked) formValid = true;
            i++;        
        }

        if (!formValid) alert("Selecione pelo menos um item para gerar o Feedback!");
        return formValid;
    }