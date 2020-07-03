(function () {
	'use strict';

	window.addEventListener('load', function () {
	  /*let menu = document.createElement('nav');
	  
	  
	  
	  document.body.appendChild(menu);
	  
	  let menu = document.createElement('div');
	  
	  menu.class = 'menu';
	  	
	  document.body.appendChild('menu'); */
	  var h1 = document.createElement('h1');
	  h1.textContent = '107153124同學';
	  h1.id = 'student';
	  h1.style = 'font-family:italic,serif'; //字體

	  document.body.appendChild(h1);
	  var sent = document.createElement('input');
	  sent.type = 'button';
	  sent.id = 'sending';
	  sent.value = 'Send!';
	  sent.style = 'width:120px;height:40px;font-size:20px;border-radius:10px;';
	  document.body.appendChild(sent);

	  sent.onclick = function () {
	    var word = document.getElementById('textbox0').value; //將文字框内的字賦值到word

	    document.getElementById('textbox0').value = ""; //抓取textbox id,並對其進行清空

	    console.log('"' + word + '" 以上内容被抓取!');
	    var xhr = new XMLHttpRequest();
	    xhr.open("POST", url, true);
	    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	    xhr.send(JSON.stringify(word));
	    /*	
	    	var XHR = new XMLHttpRequest();
	    	var FD = new FormData();
	    	
	    	FD.append(word);
	    	XHR.addEventListener('load', function(event){
	    		console.log('成功!');});
	    	XHR.addEventListener('error', function(event){
	    		console.log('錯誤');});
	    		
	    	XHR.open('POST', 'http://localhost:8888/'); //url = 請求地址
	    	XHR.send(FD);
	    		*/
	  };

	  var textbox = document.createElement('textarea'); //宣告輸入框

	  textbox.rows = '20'; //高度

	  textbox.cols = '60'; //寬度

	  textbox.style = 'font-size:175%; resize:none;border-radius:10px; '; //resize:none是禁用拖動改變大小

	  textbox.id = 'textbox0';
	  document.body.appendChild(textbox); //let bg = document.createElement('div');
	  //bg.style = 'background-image: url('gf.jpg')'
	});

}());
//# sourceMappingURL=draft.js.map
