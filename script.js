const inputContainer = document.getElementById('input-container');
const countdownForm =document.getElementById('countdownForm');
const deteEl = document.getElementById('date-picker');

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
deteEl.setAttribute('min', today);