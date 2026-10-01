const button = document.querySelector('.btn');
const toast = document.querySelector('.toast');

button.addEventListener('click', () => {
	toast.classList.remove('show');
	void toast.offsetWidth;
	toast.classList.add('show');
	console.log(toast);
	setTimeout(() => {
		toast.classList.remove('show');
	}, 2400);
});
