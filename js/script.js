var originalFeedback = "";

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
                //generateFeedback();
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
        
            originalFeedback = feedback; // Armazene o feedback originalmente gerado            
            document.getElementById("feedback").value = feedback;
        
            var paragraph = document.createElement('p');
            paragraph.innerHTML = `**${tiporegistro}**`; // Interpolação de string

            alert('O registro é um documento formal e possui as seguintes características:\n' +
            '- é um registro institucional;\n' +
            '- guarda a memória de uma trajetória formativa;\n' +
            '- é uma fonte importantíssima de informações, tanto para o aluno como para o docente;\n' +
            '- é um instrumento de comunicação, entretanto não tem a finalidade de registrar opinião pessoal ou expressar um julgamento sobre o aluno que não contribuem para o processo formativo;');
        }

        function clearSelection() {
            var formItens = document.getElementById("itens");
            var formDiscente = document.getElementById("formDiscente");
            var formTipoRegistro = document.getElementById("formTipoRegistro");
        
            // Limpar seleção em formItens
            for (var i = 0; i < formItens.elements.length; i++) {
                formItens.elements[i].checked = false;
            }
        
            // Limpar seleção em formDiscente
            for (var i = 0; i < formDiscente.elements.length; i++) {
                formDiscente.elements[i].checked = false;
            }
        
            // Limpar seleção em formTipoRegistro
            for (var i = 0; i < formTipoRegistro.elements.length; i++) {
                formTipoRegistro.elements[i].checked = false;
            }
        
            document.getElementById("feedback").value = "";
        }
        
        function copyToClipboard() {
            var textarea = document.getElementById("feedback");
        
            if (textarea.value === originalFeedback) {
                alert('ATUALIZE O TEXTO SUGERIDO, com o objetivo de:\n' +
                '----------------------------------------------------------\n' +
                'ESCLARECER: diga exatamente os aspectos mais relevantes do processo de avaliação. \n' +
                'VALORIZAR: a valorização não pode ser um discurso vazio e subjetivo, deve enfocar os aspectos mais relevantes do desenvolvimento do aluno para que (ele) perceba como evolui dentro do processo educacional. \n' +
                'SUGERIR: os aspectos que podem ser aprimorados e também as ações que contribuirão para o desenvolvimento do aluno. \n' +
                'QUESTIONAR: faça perguntas que o leve a identificar algumas dificuldades ou aspectos percebidos durante o processo, seja nas atividades das situações de aprendizagem seja em alguma situação de avaliação específica.');
                textarea.select();                
                return false;
            }
        
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
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        var checkedOne = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (!checkedOne) {
            alert('Por favor, selecione pelo menos um checkbox nos itens de registro.');
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

        if (!formValid) alert("Selecione pelo menos um item para gerar o registro!");
        return formValid;
    }