import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

let dataForm = document.querySelector("form");
let displayPost = document.querySelector(".display-post");
let dataCopyBtn = document.querySelector(".copy");
dataForm.addEventListener("submit", function (event) {
      event.preventDefault();
      let formElements = document.querySelectorAll(".form-check-input");
      let formElementsArray = [...formElements];
      let selectedDataArray = [];
      for (let i = 0; i < formElementsArray.length; i++) {
            if (formElementsArray[i].checked) {
                  selectedDataArray.push(formElementsArray[i].value);
                  console.log(`${formElementsArray[i].value}`);
            }
      }
      // console.log(selectedDataArray);
      arrayToData(selectedDataArray);

})


function arrayToData(arr) {
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 'name') {
                  obj['Name'] = faker.person.fullName();
            } else if (arr[i] == 'bio') {
                  obj['bio'] = faker.person.bio();
            }
            else if (arr[i] == 'jobTitle') {
                  obj['Job Title'] = faker.person.jobTitle();
            } else if (arr[i] == 'gender') {
                  obj['gender'] = faker.person.gender();
            } else { }
      }
      let output = document.createElement('code');
      output.classList.add("output-box-text");
      output.append(JSON.stringify(obj))
      if (JSON.stringify(obj) == "{}") {
            alert("please, Enter some data")
      } else {
            displayPost.append(output)
      }

}
dataCopyBtn.addEventListener("click", function () {
      if (displayPost.textContent.trim() == '') {
            alert("Put some data to copy!")
      } else {
            navigator.clipboard.writeText(displayPost.textContent);
            alert("Data copied!")
      }

})


