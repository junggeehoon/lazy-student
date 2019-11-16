// var countCopies1;
// var clone ;

// function duplicate() {
//     var original = document.getElementById('id_form0');
//     clone = original.cloneNode(true); 
//     var countCopies = $('body').html().split('id_form').length;
//     console.log(countCopies)
//     clone.id = "id_form"+countCopies;
//     original.parentNode.appendChild(clone);
//     countCopies1 = countCopies;
// }

$(document).on("click", ".add", function() {
    $(this).parent().clone().insertAfter($(this).parent());
});

$(document).on("click", ".del", function() {
    var target = $(this).parent();
    if (target.parent().children().length > 1) {
        target.remove();
    }
});


var count = 0;

$(document).on("click", ".addformbox", function() {
    console.log("gello")
    // count++;
    // var $div = $('dic[id^="id_form"]:last');
    // var num = parseInt( $div.prop('id').match(/\d+/g), 10 ) + 1;
    // var $form = $div.clone().prop("id", "id_form"+num);
    // $form.insertAfter($(this).parent());
    // $(this).parent().duplicate().insertAfter($(this).parent());
    // $("#id_form0").clone().attr('id', 'id1').after("#id");
    $('#id_form'+count).clone().prop("id", "id_form"+(count+1)).appendTo($(this).parent());
    count++;
});

// $(document).on("click", ".addformbox", function() {    
//     $('.box:last').clone(true).insertAfter($(this).parent());
// });

$(".deletformbox").click(function() {
    var target = $(this).parent();
    if (target.parent().children().length > 1) {
        target.remove($(this));
    }
});

// //追加
// $(document).on("click",'.addformbox',function() {
//     //クローンを変数に格納
//     var clonecode = $('.box:last').clone(true);
    
//     //数字を＋１し変数に格納
//     var cloneno = clonecode.attr('data-formno');
//     var cloneno2 = parseInt(cloneno) + 1;
//     var cloneno3 = parseInt(cloneno) + 2;
    
//     //data属性の数字を＋１
//     clonecode.attr('data-formno',cloneno2);
    
//     //数値
//     clonecode.find('.no').html(cloneno3);
    
//     //name属性の数字を+1
//     var namecode = clonecode.find('input.namae').attr('name');
//     namecode = namecode.replace(/input\[[0-9]{1,2}/g,'input[' + cloneno2);
//     clonecode.find('input.namae').attr('name',namecode);

//     var namecode2 = clonecode.find('textarea.toiawase').attr('name');
//     namecode2 = namecode2.replace(/textarea\[[0-9]{1,2}/g,'textarea[' + cloneno2);
//     clonecode.find('textarea.toiawase').attr('name',namecode2);
    
//     //HTMLに追加
//     clonecode.insertAfter($('.box:last'));
// });

// //削除
// $(document).on("click",'.deletformbox',function() {
//     //クリックされた削除ボタンの親のクラス名を取得
//     $(this).parents(".box").remove();

//     var scount = 0;
//     //番号振り直し
//     $('.box').each(function(){
//         var scount2 = scount + 1;
    
//         //data属性の数字
//         $(this).attr('data-formno',scount);
        
//         $('.no',this).html(scount2);
        
        
//         //input質問タイトル番号振り直し
//         var name = $('input.namae',this).attr('name');
//         name = name.replace(/input\[[0-9]{1,2}/g,'input[' + scount);
//         $('input.namae',this).attr('name',name);

//         var name2 = $('textarea.toiawase',this).attr('name');
//         name2 = name2.replace(/textarea\[[0-9]{1,2}/g,'textarea[' + scount);
//         $('textarea.toiawase',this).attr('name',name2);

//         scount += 1;
//     });
// });