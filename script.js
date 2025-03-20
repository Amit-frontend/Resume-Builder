// script.js
// Get references to DOM elements
const form =
document.getElementById('resumeform');
const preview =
document.getElementById('resumepreview');
const generateBtn =
document.getElementById('generate-btn');
// Generate Resume
generateBtn.addEventListener('click',
function () {
// Get form values
const name =
document.getElementById('name').v
alue;
const email =
document.getElementById('email').v
alue;
const phone =
document.getElementById('phone').
value;
const skills =
document.getElementById('skills').va
lue;
const experience =
document.getElementById('experience').value;
const education =
document.getElementById('education').value;
// Create Resume Preview
preview.innerHTML = `
<h2>${name}</h2>
<p><strong>Email:</strong>
${email}</p>
<p><strong>Phone:</strong>
${phone}</p>
<h3>Skills</h3>
<p>${skills}</p>
<h3>Experience</h3>
<p>${experience}</p>
<h3>Education</h3>
<p>${education}</p>
`;
});
// Reset functionality
const resetBtn =
document.getElementById('resetbtn');
resetBtn.addEventListener('click',
function () {
document.getElementById('resumeform').
reset();
preview.innerHTML = "<p>Startentering details to see your resumepreview here.</p>";
});
generateBtn.addEventListener('click',
function () {
const name =
document.getElementById('name').v
alue;
const email =
document.getElementById('email').v
alue;
if (!name || !email) {
alert("Please fill in all requiredfields!");
return;
}
// Existing code to generate resume
});
// Generate Resume with fade-in
animation
generateBtn.addEventListener('click',
function () {
const name =
document.getElementById('name').v
alue;
const email =
document.getElementById('email').v
alue;
const phone =
document.getElementById('phone').
value;
const skills =
document.getElementById('skills').va
lue;
const experience =
document.getElementById('experience').value;const education =
document.getElementById('education').value;
// Add fade-in effect
preview.style.opacity = 0; // Start
hidden
setTimeout(() => {
preview.innerHTML = `
<h2>${name}</h2>
<p><strong>Email:</strong>
${email}</p>
<p><strong>Phone:</strong>
${phone}</p>
<h3>Skills</h3>
<p>${skills}</p>
<h3>Experience</h3>
<p>${experience}</p>
<h3>Education</h3>
<p>${education}</p>
`;
preview.style.opacity = 1; // Fadein
}, 300); // Wait 300ms for effect
});
const themeSwitch =
document.getElementById('themeswitch');
themeSwitch.addEventListener('change', function () {
document.body.classList.toggle('dark-mode');
});
// Save form data in localStorage
form.addEventListener('input',
function () {
const formData = {
name:
document.getElementById('name').value,
email:
document.getElementById('email').value,
phone:
document.getElementById('phone').
value,
skills:
document.getElementById('skills').value,experience:
document.getElementById('experience').value,
education:
document.getElementById('education').value,
};
localStorage.setItem('formData',
JSON.stringify(formData));
});
// Load form data from localStorage
window.addEventListener('load',
function () {
const savedData =
JSON.parse(localStorage.getItem('formData'));
if (savedData) {
document.getElementById('name').v
alue = savedData.name || '';
document.getElementById('email').v
alue = savedData.email || '';
document.getElementById('phone').
value = savedData.phone || '';
document.getElementById('skills').va
lue = savedData.skills || '';
document.getElementById('experience').value = savedData.experience ||'';
document.getElementById('education').value = savedData.education || '';
}
});