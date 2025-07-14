document.getElementById("rsvpForm").addEventListener("submit", function(event){
  event.preventDefault();
  const name = this[0].value.trim();
  if(name) {
    document.getElementById("rsvpResponse").textContent = `Thank you, ${name}! We look forward to seeing you there.`;
    this.reset();
  } else {
    alert("Please enter your name.");
  }
});
