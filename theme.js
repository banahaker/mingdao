let darkTheme = false;

const themeChange = document.querySelector('#themeChange');
const body = document.querySelector('body');
const text = document.querySelector('main>.links>section');
const formH1 = document.querySelector('main>form>h1');
const formH2 = document.querySelector('main>form>h2');
const formLabel = document.querySelectorAll('main>form>label');
const formInput = document.querySelectorAll('main>form>label+input');
const sectionH1 = document.querySelectorAll('main>.links>section>h1');
const linkATag = document.querySelectorAll('main>.links>section>ul>li>a');

themeChange.addEventListener('change', () => {
	darkTheme = !darkTheme;
	if (darkTheme) {
		body.style.backgroundColor = '#282a2e';
		formH1.style.color = '#fff';
		formH2.style.color = '#fff';
		formLabel[0].style.color = '#fff';
		formLabel[1].style.color = '#fff';
		formInput[0].style.color = '#fff';
		formInput[1].style.color = '#fff';
		sectionH1.forEach((index) => {
			index.style.color = '#fff';
		});
		linkATag.forEach((index) => {
			index.style.color = '#fff';
			index.addEventListener('mouseover', () => {
				index.style.color = '#ec5c41';
			});
			index.addEventListener('mouseout', () => {
				index.style.color = '#fff';
			});
		});
	}else {
		body.style.backgroundColor = '#fff';
		formH1.style.color = '#343434';
		formH2.style.color = '#343434';
		formLabel[0].style.color = '#343434';
		formLabel[1].style.color = '#343434';
		formInput[0].style.color = '#343434';
		formInput[1].style.color = '#343434';
		sectionH1.forEach((index) => {
			index.style.color = '#343434';
		});
		linkATag.forEach((index) => {
			index.style.color = '#343434';
			index.addEventListener('mouseover', () => {
				index.style.color = '#ec5c41';
			});
			index.addEventListener('mouseout', () => {
				index.style.color = '#343434';
			});
		});
	}
});