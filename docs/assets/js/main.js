"use strict";let userInfo={palette:1,typography:2,name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:"",skills:["HTML","Sass","JavaScript"]};const userNameForm=document.querySelector(".full__name"),professionForm=document.querySelector(".profession__input"),userNameCard=document.querySelector(".name"),professionCard=document.querySelector(".profession");function handleCardName(){updateUserInfo("name",userNameForm.value),setLocalStorage(),fillCardName()}function updateUserInfo(e,t){userInfo[e]=t}function setLocalStorage(){localStorage.setItem("userInfo",JSON.stringify(userInfo))}function fillCardName(){""!==userInfo.name?userNameCard.innerHTML=userInfo.name:userNameCard.innerHTML="Nombre Apellido"}function handleCardProfession(){updateUserInfo("job",professionForm.value),setLocalStorage(),fillCardProfession()}function fillCardProfession(){""!==userInfo.job?(professionCard.innerHTML=userInfo.job,console.log(userInfo.job)):professionCard.innerHTML="Front-end developer"}userNameForm.addEventListener("keyup",handleCardName),professionForm.addEventListener("keyup",handleCardProfession);const mobileForm=document.querySelector(".phone__input"),emailForm=document.querySelector(".email__input"),linkedinForm=document.querySelector(".linkedin__input"),gitHubForm=document.querySelector(".github__input"),mobileLink=document.querySelector(".icon__number"),emailLink=document.querySelector(".icon__mail"),linkedinLink=document.querySelector(".icon__linkedin"),githubLink=document.querySelector(".icon__github");function handleLinkedin(){updateUserInfo("linkedin",linkedinForm.value),setLocalStorage(),fillLinkedin()}function fillLinkedin(){""!==userInfo.linkedin&&(linkedinLink.href=`https://www.linkedin.com/in/${userInfo.linkedin}`)}function handleMail(){updateUserInfo("email",emailForm.value),setLocalStorage(),fillMail()}function fillMail(){""!==userInfo.email&&(emailLink.href=`mailto:${userInfo.email}`)}function handleMobile(){updateUserInfo("phone",mobileForm.value),setLocalStorage(),fillMobileNumber()}function fillMobileNumber(){""!==userInfo.phone&&(mobileLink.href="tel:"+userInfo.phone)}function handleGithub(){updateUserInfo("github",gitHubForm.value),setLocalStorage(),fillGithubLink()}function fillGithubLink(){""!==userInfo.github&&(githubLink.href="https://github.com/"+userInfo.github)}linkedinForm.addEventListener("keyup",handleLinkedin),emailForm.addEventListener("keyup",handleMail),mobileForm.addEventListener("keyup",handleMobile),gitHubForm.addEventListener("keyup",handleGithub);const collapseDesignElement=document.querySelector(".collapseform-design"),designContentElement=document.querySelector(".form_design_content"),collapseFillElement=document.querySelector(".collapseform-fill"),fillContentElement=document.querySelector(".form_fill_content"),collapseShareElement=document.querySelector(".collapseform-share"),shareContentElement=document.querySelector(".form_share_content"),iconDesignElement=document.querySelector(".icon_design"),iconFillElement=document.querySelector(".icon_fill"),iconShareElement=document.querySelector(".icon_share");function handleCollapseDesign(){designContentElement.classList.toggle("hidden"),iconDesignElement.classList.contains("fa-angle-up")?(iconDesignElement.classList.remove("fa-angle-up"),iconDesignElement.classList.add("fa-angle-down")):(iconDesignElement.classList.remove("fa-angle-down"),iconDesignElement.classList.add("fa-angle-up")),fillContentElement.classList.contains("hidden")||(fillContentElement.classList.add("hidden"),iconFillElement.classList.contains("fa-angle-up")?(iconFillElement.classList.remove("fa-angle-up"),iconFillElement.classList.add("fa-angle-down")):(iconFillElement.classList.remove("fa-angle-down"),iconFillElement.classList.add("fa-angle-up"))),shareContentElement.classList.contains("hidden")||(shareContentElement.classList.add("hidden"),iconShareElement.classList.contains("fa-angle-up")?(iconShareElement.classList.remove("fa-angle-up"),iconShareElement.classList.add("fa-angle-down")):(iconShareElement.classList.remove("fa-angle-down"),iconShareElement.classList.add("fa-angle-up")))}function handleCollapseFill(){fillContentElement.classList.toggle("hidden"),iconFillElement.classList.contains("fa-angle-up")?(iconFillElement.classList.remove("fa-angle-up"),iconFillElement.classList.add("fa-angle-down")):(iconFillElement.classList.remove("fa-angle-down"),iconFillElement.classList.add("fa-angle-up")),designContentElement.classList.contains("hidden")||(designContentElement.classList.add("hidden"),iconDesignElement.classList.contains("fa-angle-up")?(iconDesignElement.classList.remove("fa-angle-up"),iconDesignElement.classList.add("fa-angle-down")):(iconDesignElement.classList.remove("fa-angle-down"),iconDesignElement.classList.add("fa-angle-up"))),shareContentElement.classList.contains("hidden")||(shareContentElement.classList.add("hidden"),iconShareElement.classList.contains("fa-angle-up")?(iconShareElement.classList.remove("fa-angle-up"),iconShareElement.classList.add("fa-angle-down")):(iconShareElement.classList.remove("fa-angle-down"),iconShareElement.classList.add("fa-angle-up")))}function handleCollapseShare(){shareContentElement.classList.toggle("hidden"),iconShareElement.classList.contains("fa-angle-up")?(iconShareElement.classList.remove("fa-angle-up"),iconShareElement.classList.add("fa-angle-down")):(iconShareElement.classList.remove("fa-angle-down"),iconShareElement.classList.add("fa-angle-up")),designContentElement.classList.contains("hidden")||(designContentElement.classList.add("hidden"),iconDesignElement.classList.contains("fa-angle-up")?(iconDesignElement.classList.remove("fa-angle-up"),iconDesignElement.classList.add("fa-angle-down")):(iconDesignElement.classList.remove("fa-angle-down"),iconDesignElement.classList.add("fa-angle-up"))),fillContentElement.classList.contains("hidden")||(fillContentElement.classList.add("hidden"),iconFillElement.classList.contains("fa-angle-up")?(iconFillElement.classList.remove("fa-angle-up"),iconFillElement.classList.add("fa-angle-down")):(iconFillElement.classList.remove("fa-angle-down"),iconFillElement.classList.add("fa-angle-up")))}collapseDesignElement.addEventListener("click",handleCollapseDesign),collapseFillElement.addEventListener("click",handleCollapseFill),collapseShareElement.addEventListener("click",handleCollapseShare);const fr=new FileReader,uploadBtn=document.querySelector(".button_add-image"),fileField=document.querySelector("#img-selector"),profileImage=document.querySelector(".photo__user"),littleImage=document.querySelector(".image-preview");function getImage(e){var t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.src=fr.result,littleImage.src=fr.result,userInfo.photo=fr.result,setLocalStorage()}function fakeFileClick(){fileField.click()}fileField.addEventListener("change",getImage),uploadBtn.addEventListener("click",fakeFileClick);const firstPalete=document.querySelector("#setcolors_green"),secondPalete=document.querySelector("#setcolors_red"),thirdPalete=document.querySelector("#setcolors_blue"),nameColor=document.querySelector(".name"),rectangleColor=document.querySelector(".rectangle__decoration"),buttonsColor=document.querySelectorAll(".icon__item"),circleColor=document.querySelectorAll(".social__media-buttom"),tagColors=document.querySelectorAll(".tag");function handleFirstPalete(){addFirstPalete(),userInfo.palette=1,localStorage.setItem("userInfo",JSON.stringify(userInfo))}function handleSecondPalete(){addSecondPalete(),userInfo.palette=2,localStorage.setItem("userInfo",JSON.stringify(userInfo))}function handleThirdPalete(){addThirdPalete(),userInfo.palette=3,localStorage.setItem("userInfo",JSON.stringify(userInfo))}function addFirstPalete(){const e=document.querySelectorAll(".tag");nameColor.classList.add("add__color__dark-green"),nameColor.classList.remove("add__color__dark-red"),nameColor.classList.remove("add__color__dark-blue"),rectangleColor.classList.add("add__color__light-green"),rectangleColor.classList.remove("add__color__light-blue"),rectangleColor.classList.remove("add__color__light-red");for(let t=0;t<e.length;t++)e[t].classList.add("add__color__medium-green"),e[t].classList.remove("add__color__medium-blue"),e[t].classList.remove("add__color__medium-red");for(let e=0;e<buttonsColor.length;e++)buttonsColor[e].classList.add("add__color__dark-green"),buttonsColor[e].classList.remove(".add__color__dark-blue"),buttonsColor[e].classList.remove("add__color__dark-red");for(let e=0;e<circleColor.length;e++)circleColor[e].classList.add("add__border__light-green"),circleColor[e].classList.remove("add__border__light-blue"),circleColor[e].classList.remove("add__border__light-red")}function addSecondPalete(){const e=document.querySelectorAll(".tag");nameColor.classList.add("add__color__dark-red"),nameColor.classList.remove("add__color__dark-green"),nameColor.classList.remove("add__color__dark-blue"),rectangleColor.classList.add("add__color__light-red"),rectangleColor.classList.remove("add__color__light-blue"),rectangleColor.classList.remove("add__color__light-green");for(let t=0;t<e.length;t++)e[t].classList.add("add__color__medium-red"),e[t].classList.remove("add__color__medium-blue"),e[t].classList.remove("add__color__medium-green");for(let e=0;e<buttonsColor.length;e++)buttonsColor[e].classList.add("add__color__dark-red"),buttonsColor[e].classList.remove(".add__color__dark-blue"),buttonsColor[e].classList.remove("add__color__dark-green");for(let e=0;e<circleColor.length;e++)circleColor[e].classList.add("add__border__light-red"),circleColor[e].classList.remove("add__border__light-green"),circleColor[e].classList.remove("add__border__light-blue")}function addThirdPalete(){const e=document.querySelectorAll(".tag");nameColor.classList.add("add__color__dark-blue"),nameColor.classList.remove("add__color__dark-red"),nameColor.classList.remove("add__color__dark-green"),rectangleColor.classList.add("add__color__light-blue"),rectangleColor.classList.remove("add__color__light-green"),rectangleColor.classList.remove("add__color__light-red");for(let t=0;t<e.length;t++)e[t].classList.add("add__color__medium-blue"),e[t].classList.remove("add__color__medium-green"),e[t].classList.remove("add__color__medium-red");for(let e=0;e<buttonsColor.length;e++)buttonsColor[e].classList.add(".add__color__dark-blue"),buttonsColor[e].classList.remove("add__color__dark-green"),buttonsColor[e].classList.remove("add__color__dark-red");for(let e=0;e<circleColor.length;e++)circleColor[e].classList.add("add__border__light-blue"),circleColor[e].classList.remove("add__border__light-green"),circleColor[e].classList.remove("add__border__light-red")}secondPalete.addEventListener("click",handleSecondPalete),thirdPalete.addEventListener("click",handleThirdPalete),firstPalete.addEventListener("click",handleFirstPalete);const ubuntuTypo=document.querySelector("#Ubuntu"),comicSansTypo=document.querySelector("#ComicSans"),montserratTypo=document.querySelector("#Montserrat"),nameTypo=document.querySelector(".name"),professionTypo=document.querySelector(".profession");function selectUbuntu(){addUbuntuTypo(),userInfo.typography=1,localStorage.setItem("userInfo",JSON.stringify(userInfo))}function selectComicSans(){addComicSansTypo(),userInfo.typography=2,localStorage.setItem("userInfo",JSON.stringify(userInfo))}function selectMontserrat(){addMonserratTypo(),userInfo.typography=3,localStorage.setItem("userInfo",JSON.stringify(userInfo))}function addUbuntuTypo(){nameTypo.classList.add("add__font__ubuntu"),nameTypo.classList.remove("add__font__comicsans"),nameTypo.classList.remove("add__font__monserrat"),professionTypo.classList.add("add__font__ubuntu"),professionTypo.classList.remove("add__font__comicsans"),professionTypo.classList.remove("add__font__monserrat")}function addComicSansTypo(){nameTypo.classList.add("add__font__comicsans"),nameTypo.classList.remove("add__font__ubuntu"),nameTypo.classList.remove("add__font__monserrat"),professionTypo.classList.add("add__font__comicsans"),professionTypo.classList.remove("add__font__ubuntu"),professionTypo.classList.remove("add__font__monserrat")}function addMonserratTypo(){nameTypo.classList.add("add__font__monserrat"),nameTypo.classList.remove("add__font__ubuntu"),nameTypo.classList.remove("add__font__comicsans"),professionTypo.classList.add("add__font__monserrat"),professionTypo.classList.remove("add__font__ubuntu"),professionTypo.classList.remove("add__font__comicsans")}ubuntuTypo.addEventListener("click",selectUbuntu),comicSansTypo.addEventListener("click",selectComicSans),montserratTypo.addEventListener("click",selectMontserrat);const skillContainer=document.querySelector(".container_skills");let skillsArr=[],listContent="",skillsListElement="";function showSkills(){fetch("https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json").then(e=>e.json()).then(e=>{const t=e.skills;for(const e of t)skillContainer.innerHTML+=`<input class="checkbox__input checkbox__input--${e}" id="${e}" type="checkbox" name="skill_option" value="${e}"><label class="checkbox__label checkbox__label--${e}" for="${e}">${e}</label>`;const o=document.querySelectorAll(".checkbox__input");function l(){skillsArr=[];for(let e=0;e<o.length;e++)o[e].checked&&skillsArr.push(t[e]);updateUserInfo("skills",skillsArr),setLocalStorage(),function(){let e=0;for(let t=0;t<o.length;t++)o[t].checked&&(e+=1);if(e>=3)for(let e=0;e<o.length;e++)o[e].checked||(o[e].disabled=!0);else for(let e=0;e<o.length;e++)o[e].checked||(o[e].disabled=!1)}(),skillsInCard()}skillsListElement=document.querySelector(".skill__tags");for(let e=0;e<o.length;e++)o[e].addEventListener("click",l)})}function skillsInCard(){skillsListElement=document.querySelector(".skill__tags");const e=userInfo.skills,t=userInfo.palette;listContent="";for(let o=0;o<e.length;o++)1===t?listContent+=`<li class="tag add__color__medium-green">${e[o]}</li>`:2===t?listContent+=`<li class="tag add__color__medium-red">${e[o]}</li>`:3===t&&(listContent+=`<li class="tag add__color__medium-blue">${e[o]}</li>`);skillsListElement.innerHTML=listContent}showSkills();const buttonCreateCardElement=document.querySelector(".button_deco"),twitterLinkElement=document.querySelector(".twitter_link"),twitterAnchor=document.querySelector(".button_twitter"),twitterMotherElement=document.querySelector(".twitter_mother");function sendRequest(){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(userInfo),headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){showURL(e)}).catch(function(e){console.log(e)})}function showURL(e){e.success?(twitterLinkElement.innerHTML='<a class="twitter_link" href='+e.cardURL+">"+e.cardURL+"</a>",twitterAnchor.href=`https://twitter.com/intent/tweet?text=¡Mira%20qué%20tarjeta%20más%20chula%20he%20creado%20con%20Awesome%20profile-cards!%20${e.cardURL}`):twitterLinkElement.innerHTML="ERROR:"+e.error}function handlerSendBackend(e){e.preventDefault(),sendRequest(),twitterMotherElement.classList.remove("hidden"),buttonCreateCardElement.classList.add("button_created")}buttonCreateCardElement.addEventListener("click",handlerSendBackend);const resetBtnEl=document.querySelector(".buttom__reset"),designForm=document.querySelector(".custom-form"),fillForm=document.querySelector(".fill-form"),shareForm=document.querySelector(".share-form");function handleResetBtn(){skillsListElement=document.querySelector(".skill__tags"),professionCard.innerHTML="Front-end developer",userNameCard.innerHTML="Nombre Apellido",linkedinLink.href="",emailLink.href="",mobileLink.href="",githubLink.href="",addComicSansTypo(),addFirstPalete(),skillsListElement.innerHTML='<li class="first_tag tag">HTML</li> <li class="second_tag tag">CSS</li> <li class="third_tag tag">GULP</li>',localStorage.removeItem("userInfo"),designForm.reset(),fillForm.reset(),shareForm.reset()}resetBtnEl.addEventListener("click",handleResetBtn);let savedUserInfo=JSON.parse(localStorage.getItem("userInfo"));function refillFormUserInfo(){if(null!==savedUserInfo){userInfo=savedUserInfo,refillFormField(userNameForm,"name"),refillFormField(professionForm,"job"),refillFormField(linkedinForm,"linkedin"),refillFormField(emailForm,"email"),refillFormField(mobileForm,"phone"),refillFormField(gitHubForm,"github"),fillCardName(),fillCardProfession(),fillLinkedin(),fillMail(),fillMobileNumber(),fillGithubLink(),1===userInfo.typography?(addUbuntuTypo(),ubuntuTypo.setAttribute("checked","true")):2===userInfo.typography?(addComicSansTypo(),comicSansTypo.setAttribute("checked","true")):3===userInfo.typography&&(addMonserratTypo(),montserratTypo.setAttribute("checked","true")),1===userInfo.palette?(addFirstPalete(),firstPalete.setAttribute("checked","true")):2===userInfo.palette?(addSecondPalete(),secondPalete.setAttribute("checked","true")):3===userInfo.palette&&(addThirdPalete(),thirdPalete.setAttribute("checked","true"));const e=userInfo.skills,t=userInfo.palette;let o="",l=document.querySelector(".skill__tags");for(let l=0;l<e.length;l++)1===t?o+=`<li class="tag add__color__medium-green">${e[l]}</li>`:2===t?o+=`<li class="tag add__color__medium-red">${e[l]}</li>`:3===t&&(o+=`<li class="tag add__color__medium-blue">${e[l]}</li>`);l.innerHTML=o;skillContainer.querySelectorAll(".checkbox__input")}}function refillFormField(e,t){e.value=userInfo[t]}refillFormUserInfo();