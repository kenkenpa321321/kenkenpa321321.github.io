// タッチイベントに対応している
if(window.TouchEvent){

	// イベントリスナーに対応している
	if(window.addEventListener){

		// ------------------------------------------------------------
		// タッチすると実行される関数
		// ------------------------------------------------------------
		function TouchEventFunc(e){
			// デフォルトのタッチ操作をキャンセルする
			e.preventDefault();
		}


		// ------------------------------------------------------------
		// リッスンを開始する
		// ------------------------------------------------------------
		// タッチを開始すると実行されるイベント
		document.addEventListener("touchstart",TouchEventFunc);

		// タッチしたまま平行移動すると実行されるイベント
		document.addEventListener("touchmove",TouchEventFunc);

		// タッチを終了すると実行されるイベント
		document.addEventListener("touchend",TouchEventFunc);

	}
}
let song;
let isUserStarted = false;

function preload() {
    song = loadSound('ohayou.mp3');
}

function setup() {
    const canvas = createCanvas(710, 200);
    // キャンバスのマウスプレスでtogglePlay()を呼び出す
    canvas.mousePressed(togglePlay);
    // 無音時は緑
    background(0, 255, 0);
}

// マウスプレスで再生/一時停止を切り替える
function togglePlay() {
    print('mouse');
    if (!song.isPlaying()) {
        // .play()は.pause()位置から再開する
        song.play();
        // 再生中は赤
        background(255, 0, 0);
    }
    else {
        song.pause();
        // 無音時は赤
        background(0, 255, 0);
    }
}

function touchStarted() {
    if (!isUserStarted) {
        // touchStarted()を1回だけ呼び出されるようにする
        print('touch');
        userStartAudio();
        isUserStarted = true;
    }
}
