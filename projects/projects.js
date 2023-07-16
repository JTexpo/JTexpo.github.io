function changeButtonColor(hover, btn_id) {
    var button = document.getElementById(btn_id);
    console.log(button)
    if (hover) {
        button.classList.replace('project-btn','project-btn-img-hover')
    } else {
        button.classList.replace('project-btn-img-hover','project-btn')
    }
  }
  