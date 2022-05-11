const dom = {
	days: document.querySelector('#days'),
	hours: document.querySelector('#hours'),
	minutes: document.querySelector('#minutes'),
	seconds: document.querySelector('#seconds'),
};

const rangeTime = 1000 * 60 * 60 * 24 * 7;
const finalTime = Date.now() + rangeTime;

const interval = setInterval(() => {
	const timeNow = Date.now();
	const timer = finalTime - timeNow;
	if (timer <= 0) {
		clearInterval(interval);
		alert('Время вышло');
	} else {
		const formattedTime = getFormattedTime(timer);
		renderTime(formattedTime, dom);
	}
}, 1000);

// Функция форматирования времени
function getFormattedTime(time) {
	const formattedTime = {
		days: Math.floor(time / (1000 * 60 * 60 * 24)),
		hours: Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes: Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: Math.floor((time % (1000 * 60)) / 1000),
	};
	return formattedTime;
}

// Функция отрисовки времени

function renderTime(timeData, dom) {
	Object.keys(timeData).forEach(key => {
		const segment = dom[key].querySelector('.segment');
		dom[key].querySelector('.timer__num').innerHTML = timeData[key];
		renderProgressBar(segment, key, timeData[key]);
	});
}

// Функция отрисовки кругового прогресс бара

function renderProgressBar(el, key, value) {
	const style = el.style;
	if (['seconds', 'minutes'].includes(key)) {
		style.strokeDasharray = `${value} 60`;
	} else if (key === 'hours') {
		const segment = 60 / 24;
		style.strokeDasharray = `${value * segment} 60`;
	} else if (key === 'days') {
		const segment = 60 / 7;
		style.strokeDasharray = `${value * segment} 60`;
	}
	style.strokeLinecap = value ? 'round' : 'initial';
}
