ENTER_KEY_CODE = 13

$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents(e) {

    $('#todoid').on('keypress', function(e) {
      if (e.keyCode === ENTER_KEY_CODE) {
        return addTodo(), $(this).val('')     //addTodo()
      }
    })

    $('.add').on('click', function() {
      addTodo()
    })

    $(document.body).on('click', 'a.delete', function(e) {
      deleteTodo(e)
    })

    $(document.body).on('click', 'a.complete', function(e) {
      completeTodo(e)
    })
  }

  function addTodo() {
    var input = $('input.todo').val()
    buildTodo(input).appendTo('div.todo_list')
  }

  function deleteTodo(e) {
    console.log(evt.target)
    $(e.target).closest('div').remove()
  }

  function completeTodo(e) {
    console.log(evt.target)
    // If I wanted to delete it...
    // $(e.target).closest('li').prev().first().remove()
    $(e.target).closest('li').text('Completed! :)')
  }

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName)
    return $todo;
  }

  bindEvents();
});