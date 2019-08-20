$.getJSON("projects.json", function (projects) {
  console.log(projects);

  var projList = document.querySelector('#projects');
  // const markup =
  //   `
  //   <div>
  //       ${projects.map(p =>
  //     `<a href="${p.url}" title="${p.title}"><img src="${p.img}" class="img-responsive" alt="${p.title}"></a>`
  //   ).join('')}
  //   </div>
  // `;
  // projList.innerHTML = markup;

  projList.innerHTML = projects.map(function (p) {
    return `
    <a href="${p.url}"
    title="${p.title}">
    <img src="${p.img}"
    class="img-responsive"
    alt="${p.title}">
    </a>`;
  }).join('');

});