const notion = document.querySelector('#notion');
const notionContent = document.querySelector('#notion>p');
const notionButton = document.querySelector('#notion>button')

window.onload = () => {
	let notionText = '1. 目前只支援學生登入<br><br>2. 若送出表單時出現不安全連線請按仍要傳送按鈕，會出現此跟學校使用的連線協定有關與本網站無關';
	notion.style.top = '30%';
	notionContent.innerHTML = notionText;	 
	notionButton.addEventListener('click', () => {
    	notion.style.top = '-50%';
	});
};