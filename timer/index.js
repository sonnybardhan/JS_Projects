// import Timer from './timer';

const durationInput = document.getElementById('duration');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const circle = document.querySelector('circle');
const peri = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', peri);
// let currentOffset = 0;
let duration;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
	onStart(totalDuration){
		duration = totalDuration;
	},
	onTick(timeRemaining){
		circle.setAttribute('stroke-dashoffset', peri * timeRemaining/duration - peri)
		
	},
	onComplete(){
		console.log('Time up!');
	}
})