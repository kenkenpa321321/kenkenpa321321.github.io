// グローバル変数
var syncerSounds = {
	flag: {} ,
	currentTime: null ,
} ;

// 即時関数
(function()
{
	// 設定
	var setClass = 'sounds'   ;							// ボタン要素のクラス名
	var setDir = './' ;									// 音声ファイルがあるフォルダ(最後は[/])
	var setStopButtonId = 'stop-button-syncer' ;			// 停止ボタンに付けるID

	// クラス名が付いた要素を取得する
	var sounds = document.getElementsByClassName( setClass ) ;

	// 全ての要素にクリックイベントを設定する
	for( var i=0,l=sounds.length ; l>i ; i++ )
	{
		// クリックイベントの設定
		sounds[i].onclick = function()
		{
			// ファイル名の取得
			var file = this.getAttribute( 'data-file' ) ;

			// 一度生成したエレメントは生成しない
			if( typeof( syncerSounds.flag[ file ] )=="undefined" || syncerSounds.flag[ file ] != 1 )
			{
				// 生成するエレメントの調整
				var audio = document.createElement( 'audio' ) ;

				// エレメントのIDを指定
				audio.id = file ;

				

				// ブラウザが[.wav]に対応している場合は[.wav]を読み込む
				if( audio.canPlayType( 'audio/wav' ) )
				{
					audio.src = setDir + file + '.wav' ;
				}

				// [audio]を生成する
				document.body.appendChild( audio ) ;
			}

			// 初回再生以外だったら音声ファイルを巻き戻す
			stopCurrentSound() ;

			// 音声ファイルを再生[play()]する
			document.getElementById( file ).play() ;

			if(file ==="kan"){document.area1.src = "images/ue.jpg"}
			if(file ==="ice"){document.area1.src = "images/sita.jpg"}
			if(file ==="soda"){document.area1.src = "images/migi.jpg"}
			if(file ==="wave"){document.area1.src = "images/ue.jpg"}
			if(file ==="fastener"){document.area1.src = "images/sita.jpg"}
			if(file ==="pet"){document.area1.src = "images/hidari.jpg"}
			if(file ==="spray"){document.area1.src = "images/ue.jpg"}
			if(file ==="tomato"){document.area1.src = "images/sita.jpg"}
			if(file ==="rain"){document.area1.src = "images/migi.jpg"}
			if(file ==="huurin"){document.area1.src = "images/migi.jpg"}
			if(file ==="suiteki"){document.area1.src = "images/ue.jpg"}
			if(file ==="iki"){document.area1.src = "images/migi.jpg"}
			if(file ==="potato"){document.area1.src = "images/sita.jpg"}
			if(file ==="egg"){document.area1.src = "images/hidari.jpg"}
			if(file ==="patipati"){document.area1.src = "images/migi.jpg"}
			if(file ==="men"){document.area1.src = "images/hidari.jpg"}
		
			// 最近再生した音声としてセット
			syncerSounds.currentTime = file ;

			
			// 終了
			return false ;
		}
	}


		// 設定
		var setClass = 'sounds2'   ;							// ボタン要素のクラス名
		var setDir = './' ;									// 音声ファイルがあるフォルダ(最後は[/])
		var setStopButtonId = 'stop-button-syncer' ;			// 停止ボタンに付けるID
	
		// クラス名が付いた要素を取得する
		var sounds = document.getElementsByClassName( setClass ) ;
	
		// 全ての要素にクリックイベントを設定する
		for( var i=0,l=sounds.length ; l>i ; i++ )
		{
			// クリックイベントの設定
			sounds[i].onclick = function()
			{
				// ファイル名の取得
				var file = this.getAttribute( 'data-file' ) ;
	
				// 一度生成したエレメントは生成しない
				if( typeof( syncerSounds.flag[ file ] )=="undefined" || syncerSounds.flag[ file ] != 1 )
				{
					// 生成するエレメントの調整
					var audio = document.createElement( 'audio' ) ;
	
					// エレメントのIDを指定
					audio.id = file ;
	
					
	
					// ブラウザが[.wav]に対応している場合は[.wav]を読み込む
					if( audio.canPlayType( 'audio/wav' ) )
					{
						audio.src = setDir + file + '.wav' ;
					}
	
					// [audio]を生成する
					document.body.appendChild( audio ) ;
				}
	
				// 初回再生以外だったら音声ファイルを巻き戻す
				stopCurrentSound() ;
	
				// 音声ファイルを再生[play()]する
				document.getElementById( file ).play() ;
	
				if(file ==="kan"){document.area1.src = "images/ue.jpg"}
				if(file ==="ice"){document.area1.src = "images/sita.jpg"}
				if(file ==="soda"){document.area1.src = "images/migi.jpg"}
				if(file ==="wave"){document.area1.src = "images/ue.jpg"}
				if(file ==="fastener"){document.area1.src = "images/sita.jpg"}
				if(file ==="pet"){document.area1.src = "images/hidari.jpg"}
				if(file ==="spray"){document.area1.src = "images/ue.jpg"}
				if(file ==="tomato"){document.area1.src = "images/sita.jpg"}
				if(file ==="rain"){document.area1.src = "images/migi.jpg"}
				if(file ==="huurin"){document.area1.src = "images/migi.jpg"}
				if(file ==="suiteki"){document.area1.src = "images/ue.jpg"}
				if(file ==="iki"){document.area1.src = "images/migi.jpg"}
				if(file ==="potato"){document.area1.src = "images/sita.jpg"}
				if(file ==="egg"){document.area1.src = "images/hidari.jpg"}
				if(file ==="patipati"){document.area1.src = "images/migi.jpg"}
				if(file ==="men"){document.area1.src = "images/hidari.jpg"}
			
				// 最近再生した音声としてセット
				syncerSounds.currentTime = file ;
	
				
				// 終了
				return false ;
			}
		}



			// 設定
	var setClass = 'sounds3'   ;							// ボタン要素のクラス名
	var setDir = './' ;									// 音声ファイルがあるフォルダ(最後は[/])
	var setStopButtonId = 'stop-button-syncer' ;			// 停止ボタンに付けるID

	// クラス名が付いた要素を取得する
	var sounds = document.getElementsByClassName( setClass ) ;

	// 全ての要素にクリックイベントを設定する
	for( var i=0,l=sounds.length ; l>i ; i++ )
	{
		// クリックイベントの設定
		sounds[i].onclick = function()
		{
			// ファイル名の取得
			var file = this.getAttribute( 'data-file' ) ;

			// 一度生成したエレメントは生成しない
			if( typeof( syncerSounds.flag[ file ] )=="undefined" || syncerSounds.flag[ file ] != 1 )
			{
				// 生成するエレメントの調整
				var audio = document.createElement( 'audio' ) ;

				// エレメントのIDを指定
				audio.id = file ;

				

				// ブラウザが[.wav]に対応している場合は[.wav]を読み込む
				if( audio.canPlayType( 'audio/wav' ) )
				{
					audio.src = setDir + file + '.wav' ;
				}

				// [audio]を生成する
				document.body.appendChild( audio ) ;
			}

			// 初回再生以外だったら音声ファイルを巻き戻す
			stopCurrentSound() ;

			// 音声ファイルを再生[play()]する
			document.getElementById( file ).play() ;

			if(file ==="kan"){document.area1.src = "images/ue.jpg"}
			if(file ==="ice"){document.area1.src = "images/sita.jpg"}
			if(file ==="soda"){document.area1.src = "images/migi.jpg"}
			if(file ==="wave"){document.area1.src = "images/ue.jpg"}
			if(file ==="fastener"){document.area1.src = "images/sita.jpg"}
			if(file ==="pet"){document.area1.src = "images/hidari.jpg"}
			if(file ==="spray"){document.area1.src = "images/ue.jpg"}
			if(file ==="tomato"){document.area1.src = "images/sita.jpg"}
			if(file ==="rain"){document.area1.src = "images/migi.jpg"}
			if(file ==="huurin"){document.area1.src = "images/migi.jpg"}
			if(file ==="suiteki"){document.area1.src = "images/ue.jpg"}
			if(file ==="iki"){document.area1.src = "images/migi.jpg"}
			if(file ==="potato"){document.area1.src = "images/sita.jpg"}
			if(file ==="egg"){document.area1.src = "images/hidari.jpg"}
			if(file ==="patipati"){document.area1.src = "images/migi.jpg"}
			if(file ==="men"){document.area1.src = "images/hidari.jpg"}
		
			// 最近再生した音声としてセット
			syncerSounds.currentTime = file ;

			
			// 終了
			return false ;
		}
	}



		// 設定
		var setClass = 'sounds4'   ;							// ボタン要素のクラス名
		var setDir = './' ;									// 音声ファイルがあるフォルダ(最後は[/])
		var setStopButtonId = 'stop-button-syncer' ;			// 停止ボタンに付けるID
	
		// クラス名が付いた要素を取得する
		var sounds = document.getElementsByClassName( setClass ) ;
	
		// 全ての要素にクリックイベントを設定する
		for( var i=0,l=sounds.length ; l>i ; i++ )
		{
			// クリックイベントの設定
			sounds[i].onclick = function()
			{
				// ファイル名の取得
				var file = this.getAttribute( 'data-file' ) ;
	
				// 一度生成したエレメントは生成しない
				if( typeof( syncerSounds.flag[ file ] )=="undefined" || syncerSounds.flag[ file ] != 1 )
				{
					// 生成するエレメントの調整
					var audio = document.createElement( 'audio' ) ;
	
					// エレメントのIDを指定
					audio.id = file ;
	
					
	
					// ブラウザが[.wav]に対応している場合は[.wav]を読み込む
					if( audio.canPlayType( 'audio/wav' ) )
					{
						audio.src = setDir + file + '.wav' ;
					}
	
					// [audio]を生成する
					document.body.appendChild( audio ) ;
				}
	
				// 初回再生以外だったら音声ファイルを巻き戻す
				stopCurrentSound() ;
	
				// 音声ファイルを再生[play()]する
				document.getElementById( file ).play() ;
	
				if(file ==="kan"){document.area1.src = "images/ue.jpg"}
				if(file ==="ice"){document.area1.src = "images/sita.jpg"}
				if(file ==="soda"){document.area1.src = "images/migi.jpg"}
				if(file ==="wave"){document.area1.src = "images/ue.jpg"}
				if(file ==="fastener"){document.area1.src = "images/sita.jpg"}
				if(file ==="pet"){document.area1.src = "images/hidari.jpg"}
				if(file ==="spray"){document.area1.src = "images/ue.jpg"}
				if(file ==="tomato"){document.area1.src = "images/sita.jpg"}
				if(file ==="rain"){document.area1.src = "images/migi.jpg"}
				if(file ==="huurin"){document.area1.src = "images/migi.jpg"}
				if(file ==="suiteki"){document.area1.src = "images/ue.jpg"}
				if(file ==="iki"){document.area1.src = "images/migi.jpg"}
				if(file ==="potato"){document.area1.src = "images/sita.jpg"}
				if(file ==="egg"){document.area1.src = "images/hidari.jpg"}
				if(file ==="patipati"){document.area1.src = "images/migi.jpg"}
				if(file ==="men"){document.area1.src = "images/hidari.jpg"}
			
				// 最近再生した音声としてセット
				syncerSounds.currentTime = file ;
	
				
				// 終了
				return false ;
			}
		}

	// 前回の音声を停止する関数
	function stopCurrentSound()
	{
		var currentSound = document.getElementById( syncerSounds.currentTime ) ;

		if( currentSound != null )
		{
			currentSound.pause() ;
			currentSound.currentTime = 0 ;
		}
	}


	// 停止ボタンをクリックした時のイベント
	document.getElementById( setStopButtonId ).onclick = function()
	{
		stopCurrentSound() ;
		return false ;
	}
	

})() ;

// 要素を取得
var aElement = document.getElementById( "target" ) ;

// 処理を定義
var action = function() {
	// 処理内容
}

// イベントを設定 ( addEventListener )
aElement.addEventListener( "click", action ) ;

// イベントを削除
aElement.removeEventListener( "click", action ) ;
// 要素を取得
var aElement = document.getElementById( "target" ) ;

// イベントを設定 ( onclick )
aElement.onclick = function() {
	// 処理内容
}

// イベントを削除
aElement.onclick = null ;
