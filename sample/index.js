// スクロールを無効化
        $('html').css({
            overflow: 'hidden'
        });
        document.addEventListener(
            'touchmove',
            scrollControll,
            {
                passive: false
            }
        );

        // スクロールを有効化
        $('html').css({
            overflow: ''
        });
        document.removeEventListener(
            'touchmove',
            scrollControll,
            {
                passive: false
            }
        );

    // add/removeEventListenerでアロー関数として定義するとイベントが削除されない
    var scrollControll = function(event) {
        if ($(event.target).closest('.js-can-scroll').length > 0) {
            event.stopPropagation();
        } else {
            event.preventDefault();
        }
    };
