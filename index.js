function interact(){
  //adding an item to the shopping list
  $('#js-shopping-list-form').submit(event => {

    event.preventDefault();

    //save item
    const addThis = $(event.currentTarget).find('#shopping-list-entry');

    //add item
    $("ul").append('<li><span class="shopping-item">' + $(addThis).val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
  });

  //checking and unchecking list items
  $('ul').on('click', 'button', function(event) {
    event.preventDefault();
    if($(event.currentTarget).hasClass('shopping-item-toggle')){
      const checkThis = $(event.currentTarget).closest("li").find('.shopping-item');

      checkThis.toggleClass('shopping-item__checked');
    }
  });

  //delete item
  $('ul').on('click', 'button', function(event) {
    event.preventDefault();

    if($(event.currentTarget).hasClass('shopping-item-delete')){
      this.closest("li").remove();
    }
  });
}

$(interact);