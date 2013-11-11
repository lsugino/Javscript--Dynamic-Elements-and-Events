$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());
 
  function bindEvents() {
    // add enter function!
    // $('textarea').bind("enterKey",function(e){
    //   addTodo()
    // });
    // $('.add').keyup(function(e){
    //   if(e.keyCode == 13)
    //   {
    //       $(this).trigger("enterKey");
    //   }
    // });

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
 
  function deleteTodo(evt) {
    $(evt.target).closest('div').remove()
  }
 
  function completeTodo(evt) {
    console.log(evt.target)
    $(evt.target).closest('li').text('Completed! :)')
        // $(evt.target).parent().parent().children().first()find('a.delete').text('woo')


  }
  
  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName)
    return $todo;
  }
 
  bindEvents();
});