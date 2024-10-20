// Smooth Scroll to Milestone Section
function scrollToContent() {
    const milestoneSection = document.getElementById('milestone');
    milestoneSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Counter Animation
  document.addEventListener('DOMContentLoaded', function () {
    let counter = document.getElementById('days');
    let count = 0;
    let interval = setInterval(function () {
      if (count < 100) {
        count++;
        counter.innerText = count;
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
