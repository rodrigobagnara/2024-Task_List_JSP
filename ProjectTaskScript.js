function return_to_index() 
{
    location.href = "TaskList.html";
}

function go_to_create_task() 
{
    location.href = "TaskCreate.html";
}

function delete_task() 
{
    alert("Excluir tarefas concluídas...");
}

function creation_validate() 
{
    var tagTask = document.forms["formCreateTask"].descriptionTask.value;

    var tagTaskTrim = tagTask.trim();

    if(tagTaskTrim.length < 15)
    {
        alert("A descrição da tarefa deve possuir no minimo 15 caracteres!");
        return;
    }
    else if(tagTaskTrim.length > 80)
    {
        alert("A descrição da tarefa deve possuir no máximo 80 caracteres!");
        return;
    }
    else
    {
        alert("Tarefa válida!");
        document.forms["formCreateTask"].submit();
    }

}