let song;

function preload() {
    // サウンド形式に.oggファイルと.mp3ファイル両方を含める
    soundFormats('ogg', 'mp3');

    // このブラウザがmp3をサポートしない場合、
    // loadSound()は、スケッチに含めておいたoggファイルを読み込む
    song = loadSound('greeting-01.mp3');
}

function setup() {
    createCanvas(710, 200);
    background(0, 255, 0);

    // ボタン
    const button = setButton('PLAY', {
        x: 40,
        y: 180
    });

    button.mousePressed(() => {
        // 再生中なら
        if (song.isPlaying()) {
            // 一時停止
            song.pause();
            // ボタンのラベルを変更
            button.html('PLAY');
            // 背景色を変更
            background(255, 0, 0);
            // 再生中でないなら
        }
        else {
            // 再生
            song.play();
            button.html('PAUSE');
            background(0, 255, 0);
        }
    });
}

function mousePressed() {
    // サンプルから変更
}

function setButton(label, pos) {
    const button = createButton('aaaaa');
    button.size(100, 30);
    button.position(pos.x, pos.y);
    return button;
}
