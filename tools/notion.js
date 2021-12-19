const notion = document.querySelector('#notion');
const notionContent = document.querySelector('#notion>p');
const notionButton = document.querySelector('#notion>button')

window.onload = () => {
	let notionText = '1. 現在已經開放學生、家長、教師登錄囉!快來享受更快的速度吧<br><br>2. 本站之安全性已於2021/12/15做出更新，請各位放心使用~~<br><br>3. 本站之程式碼皆已放置在Github(請看訊息區有網址)上有興趣者歡迎觀看';
	notion.style.top = '30%';
	notionContent.innerHTML = notionText;	 
	notionButton.addEventListener('click', () => {
    	notion.style.top = '-50%';
	});
};