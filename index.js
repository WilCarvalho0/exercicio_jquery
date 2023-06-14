$(document).ready(function() {
    $('#form-tarefa').submit(function(event) {
        event.preventDefault();
        var nomeTarefa = $('#nome-tarefa').val();
        if (nomeTarefa.trim() !== '') {
            $('#lista-tarefas').append('<li>' + nomeTarefa + '</li>');
            $('#nome-tarefa').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});