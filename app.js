const root = document.getElementById('course-list');

function renderHome() {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      root.innerHTML = '';
      data.courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
          <img src="${course.cover || ''}">
          <h3>${course.title}</h3>
        `;
        card.onclick = () => openCourse(course);
        root.appendChild(card);
      });
    });
}

function openCourse(course) {
  let html = `
    <div class="top-bar">
      <button class="back-btn" onclick="renderHome()">← 返回</button>
      <span>${course.title}</span>
    </div>
  `;

  course.sections.forEach(sec => {
    html += `
      <h3>${sec.order}. ${sec.title}</h3>
      <img src="assets/images/${sec.image}" class="step-img">
      <p>${sec.text}</p>
    `;
  });

  root.innerHTML = html;
}

renderHome();
