/*const formFillCollapsable = document.querySelector('.collapseform-fill');*/
const skillContainer = document.querySelector('.container_skills');

function showSkills() {

  fetch('https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json')
    .then(response => response.json())
    .then(data => {
      const totalSkills = data.skills;
      for (const skill of totalSkills) {
        skillContainer.innerHTML += `<input class="checkbox__input checkbox__input--${skill}" id="${skill}" type="checkbox" name="skill_option" value="${skill}"><label class="checkbox__label checkbox__label--${skill}" for="${skill}">${skill}</label>`;
      }
      const skillsInputElements = document.querySelectorAll('.checkbox__input');
      console.log(skillsInputElements);
      const skillsLabelElements = document.querySelectorAll('.checkbox__label');
      console.log(skillsLabelElements);
      const skillsListElement = document.querySelector('.skill__tags');


      /*function limitCheckBox() {
        let count = 0;
        for (let i = 0; i < skillsInputElements.length; i++) {
          if (skillsInputElements[i].checked) {
            count += 1;
          }
          if (count > 3 && skillsInputElements[i].checked === false) {
            skillsInputElements[i].disabled = true;
          }
        }
      }*/

      function limitCheckBox() {
        let count = 0;
        for (let i = 0; i < skillsInputElements.length; i++) {
          if (skillsInputElements[i].checked) {
            count += 1;
          }
        }
        if (count >= 3) {
          for (let i = 0; i < skillsInputElements.length; i++) {
            if (!skillsInputElements[i].checked) {
              skillsInputElements[i].disabled = true;
            }
          }
        } else {
          for (let i = 0; i < skillsInputElements.length; i++) {
            if (!skillsInputElements[i].checked) {
              skillsInputElements[i].disabled = false;
            }
          }
        }
      }

      function handleCheckBoxClick(event) {
        let listContent = "";

        for (const skillsItem of skillsInputElements) {
          if (skillsItem.checked === true) {
            listContent += `<li class="tag">${skillsItem.value}</li>`;
          }
        }

        limitCheckBox();

        skillsListElement.innerHTML = listContent;
      }

      for (let i = 0; i < skillsInputElements.length; i++) {
        skillsInputElements[i].addEventListener('click', handleCheckBoxClick);
      }

    });

};
showSkills();
