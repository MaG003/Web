
$(document).ready(function(){
    var newItem =  $('<div class="item-div"><p class="label display-inline item-add item-name">Item Infor Name: </p><input type="text" class="item-add label display-none" value="Item Infor Name"><input type="text" class="isplay-inline item-add" /><i class="fa-solid fa-trash-can delete" style="color: #403f3f;"></i></div>');
    var newGroup = $('<div class="add-infor"><fieldset class="infor" ><legend class="legend"><div class="title"><p class="display-inline title-root">Group Item_20205047</p><input type="text" class="input-title display-none" value="Group Item_20205047"></div><div><i class="fa-solid fa-trash-can delete-mul" style="color: #403f3f;"></i></div><div class="box"><p class=" icon addItem">Add Infro Item</p><p class=" icon addGroup">Add Group Item</p></div></legend><div class="person-add"></div></fieldset></div>');


    $(document).on('click','.delete',function(){
        var usr = confirm('Mai Hoang Viet 20205047 Are you sure!');
        if(usr == true){
            $(this).parent().hide();
        }
    });

    $(document).on('click','.delete-mul',function(){
        var usr = confirm('Mai Hoang Viet 20205047 Are you sure!');
        if(usr == true){
            $(this).parentsUntil(".add-infor").hide();
        }
    });
    
    
    $(document).on('dblclick','.title-root',function(){
        $(this).next().addClass("display-inline").removeClass("display-none");
        $(this).next().val($(this).text());
        $(this).hide();
        var input = $(this).next();
        input.keypress(function(event){
            if(event.which == 13){
                $(this).prev().text($(this).val()).show();
                $(this).addClass("display-none").removeClass("display-inline");
            }
        });
    });
    
    $(document).on('dblclick','.item-name',function(){
        $(this).next().addClass("display-inline").removeClass("display-none");
        $(this).next().val($(this).text());
        $(this).hide();
        var input = $(this).next();
        input.keypress(function(event){
            if(event.which == 13){
                $(this).prev().text($(this).val()).show();
                $(this).addClass("display-none").removeClass("display-inline");
            }
        });
    });
    
    $(document).on('click','.addItem',function(){
        $(this).parents("fieldset").find(".person-add").append(newItem.clone());
        
    });

    $(document).on('click','.addGroup',function(){
        $('.add-div').append(newGroup.clone());
    });


    $('#pdf').click(function() {
        var doc = new jsPDF();
        html2canvas($('.content')[0]).then(function(canvas) {
          var imgData = canvas.toDataURL('image/PNG');
          doc.addImage(imgData, 'PNG', 10, 10, 180, 150);
          doc.save('thong_tin_ca_nhan.pdf');
        })
      });
});