// ドロップダウンメニューの消えない方法
$(function(){
    // ▼マウスが載ったらサブメニューを表示
    $("ul.ddmenu li").mouseenter(function(){
        $(this).siblings().find("ul").hide();  // 兄弟要素に含まれるサブメニューを全部消す。
        $(this).children().slideDown(150);     // 自分のサブメニューを表示する。
    });
    // ▼どこかがクリックされたらサブメニューを消す
    $('html').click(function() {
        $('ul.ddmenu ul').slideUp(150);
    });
});