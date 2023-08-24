let buttonClick = document.getElementById("buttonClick");
let textMessage = document.getElementById("information");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let creDentials = request.jsonResponse;
  if (creDentials) {
    textMessage.style.display = "none";
    buttonClick.style.display = "block";
    alert("App Is Successfully Installed");
  }
});

buttonClick.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  buttonClick.style.display = "none";
  textMessage.style.display = "block";
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: startAutomate,
  });
});

let startAutomate = async () => {
  try {
    var delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    //SETTINGS BUTTON
    console.log("Clicking on Setting Button");
    let href = document.querySelectorAll("a[href]");
    let hrefArr = [...href];

    for (let a in hrefArr) {
      if (hrefArr[a].textContent === "Settings") {
        hrefArr[a].click();
      }
    }
    await delay(3000);
    //SALES AND CHANNELS
    console.log("Clicking on Sales and Channel Button");
    try {
      let href = document.querySelectorAll("a[href]");
      let hrefArr = [...href];
      for (let a in hrefArr) {
        if (hrefArr[a].textContent === "Apps and sales channels") {
          hrefArr[a].click();
        }
      }
    } catch (e) {
      console.log("Error on clicking Sales and channel Button");
    }
    await delay(3000);
    //Develop App Section
    console.log("Clicking on Sales and Develop App Button");
    try {
      let href = document.querySelectorAll("a[href]");
      let hrefArr = [...href];
      for (let a in hrefArr) {
        if (hrefArr[a].textContent === "Develop apps") {
          hrefArr[a].click();
        }
      }
    } catch (e) {
      console.log("Error on clicking Develop App Button");
    }
    await delay(4000);
    //Allow Custom App Developement
    try {
      let href = document.querySelectorAll("a[href]");
      let hrefArr = [...href];
      for (let a in hrefArr) {
        if (hrefArr[a].textContent === "Allow custom app development") {
          hrefArr[a].click();
        } else {
          console.log("Skipping Processs no  Allow Custom app button Found");
        }
      }
    } catch (e) {
      console.log("Skipping Processs");
    }
    await delay(4000);
    try {
      let href = document.querySelectorAll("button[type='button']");
      let hrefArr = [...href];
      for (let a in hrefArr) {
        if (hrefArr[a].textContent === "Allow custom app development") {
          hrefArr[a].click();
        } else {
          console.log("Skipping Processs no  Allow Custom app button Found");
        }
      }
    } catch (e) {
      console.log("Skipping Processs");
    }
    await delay(4000);
    //Create An App
    console.log("Clicking on Create anApp Button");
    try {
      let href = document.querySelectorAll("button[type='button']");
      let hrefArr = [...href];
      for (let a in hrefArr) {
        if (hrefArr[a].textContent === "Create an app") {
          hrefArr[a].click();
        }
      }
    } catch (e) {
      console.log("Error while clicking on create an app");
    }
    await delay(4000);
    console.log("Setting App Name");
    try {
      let inputName = document.querySelectorAll("input[type]");
      let appName = ""
      if(document.querySelectorAll("h3")[3] == undefined){
        appName = document.querySelectorAll("h3")[0].textContent
      }else{
        appName = document.querySelectorAll("h3")[3].textContent
      }
      let inputSelect = inputName[0];
      if (inputName[0].getAttribute("placeholder")) {
        inputSelect = inputName[1];
      }
      inputSelect.value = `${appName}-simpl-app`;
      const inputEvent = new Event("input", { bubbles: true });
      inputEvent.simulated = true;
      inputSelect.dispatchEvent(inputEvent);
      const inputChangeEvent = new Event("change", { bubbles: true });
      inputSelect.dispatchEvent(inputChangeEvent);
      const inputBlurEvent = new Event("blur", { bubbles: true });
      inputSelect.dispatchEvent(inputBlurEvent);
    } catch {
      console.log("Entering App Name failed");
    }
    await delay(3000);
    console.log("Clicking on Create App Button");
    try {
      let href = document.querySelectorAll("button[type='button']");
      let hrefArr = [...href];
      for (let a in hrefArr) {
        if (hrefArr[a].textContent === "Create app") {
          hrefArr[a].click();
        }
      }
    } catch (e) {
      console.log("Error while clicking on create app");
    }
    await delay(4000);
    console.log("Proceeding with Admin Scopes");
    try {
      let href = document.querySelectorAll("a[href]");
      let hrefArr = [...href];
      for (let a in hrefArr) {
        if (hrefArr[a].textContent === "Configure Admin API scopes") {
          hrefArr[a].click();
        }
      }
    } catch (e) {
      console.log("Error while clicking on Admin Scopes");
    }
    await delay(4000);
    console.log("Proceeding with Selecting Admin Scopes");
    try {
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      const checkArry = [...checkboxes];
      checkArry.forEach((element, index) => {
        if (
          [
            0, 1, 3, 4, 6, 8, 10, 12, 14, 16, 18, 19, 21, 23, 25, 27, 29, 31,
            33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65,
            67, 69, 71, 73, 75, 77, 79, 81, 82, 83, 84, 85, 87, 89, 91, 93, 94,
            96, 98, 100, 102, 104, 106, 108,
          ].includes(index)
        )
          element.click();
      });
    } catch (e) {
      console.log("Error while selecting scopes!!");
    }
    await delay(4000);
    console.log("Saving the Admin Scope");
    try {
      let adminBtn = document.querySelectorAll("button[type='button']");
      let arryOfaTag = [...adminBtn];
      for (let a in arryOfaTag) {
        if (arryOfaTag[a].textContent === "Save") {
          arryOfaTag[a].click();
        }
      }
    } catch (e) {
      console.log("Error while saving the scopes");
    }
    await delay(4000);
    console.log("Going Back to Configration");
    try {
      let aTag = document.querySelectorAll("a[href]");
      let arryOfaTag = [...aTag];
      for (let a in arryOfaTag) {
        if (arryOfaTag[a].textContent === "Configuration") {
          arryOfaTag[a].click();
        }
      }
    } catch (e) {
      console.log("going Back to configuration failed");
    }
    await delay(4000);
    console.log("Proceeding with Store Front API");
    try {
      let aTag = document.querySelectorAll("a[href]");
      let arryOfaTag = [...aTag];
      if (arryOfaTag[arryOfaTag.length - 1].textContent === "Configure") {
        arryOfaTag[arryOfaTag.length - 1].click();
      }
    } catch (e) {
      console.log("Clicking on configure failed");
    }
    await delay(4000);
    console.log("Proceeding with selecting Store Front API");
    try {
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      const checkArry = [...checkboxes];

      checkArry.forEach((element, index) => {
        if ([0, 2, 3, 6, 7, 11, 12, 14].includes(index)) {
          element.click();
        }
      });
    } catch (e) {
      console.log("Error while selecting checkboxes");
    }
    await delay(3000);
    try {
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      const checkArry = [...checkboxes];

      checkArry.forEach((element, index) => {
        if ([5, 8, 9, 10].includes(index)) {
          element.click();
        }
      });
    } catch (e) {
      console.log("Selecting second pair of Checkboxes");
    }
    await delay(4000);
    console.log("Saving Store Front API Scopes");
    try {
      let aTag = document.querySelectorAll("button[type='button']");
      let arryOfaTag = [...aTag];
      for (let a in arryOfaTag) {
        if (arryOfaTag[a].textContent === "Save") {
          arryOfaTag[a].click();
        }
      }
    } catch (e) {
      console.log("Error while saving Store Front API Scope");
    }
    await delay(4000);
    console.log("Installing the APP");
    try {
      console.log("First Install Button !!!");
      let aTag = document.querySelectorAll("button[type='button']");
      let arryOfaTag = [...aTag];
      for (let a in arryOfaTag) {
        if (arryOfaTag[a].textContent === "Install app") {
          arryOfaTag[a].click();
        }
      }
    } catch (e) {
      console.log("Install button not found");
    }
    await delay(4000);
    try {
      console.log("Second Install Button !!!");
      let aTag = document.querySelectorAll("button[type='button']");
      let arryOfaTag = [...aTag];
      if (arryOfaTag[arryOfaTag.length - 1].textContent === "Install") {
        arryOfaTag[arryOfaTag.length - 1].click();
      }
    } catch (e) {
      console.log("Install button not found");
    }
    await delay(8000);
    console.log("App installed Successfull");
    console.log("Reveling the token !!!");
    try {
      let aTag = document.querySelectorAll("button[type='button']");
      let arryOfaTag = [...aTag];
      for (let a in arryOfaTag) {
        if (arryOfaTag[a].textContent === "Reveal token once") {
          arryOfaTag[a].click();
        }
      }
    } catch (e) {
      console.log("Token button not found");
    }
    await delay(4000);
    try {
      let inputTag = document.querySelectorAll("input[type]");
      let inputArr = [...inputTag];
      let urlPath = window.location.pathname;
      let urlPatharr = urlPath.split("/");
      let credentials = [];
      for (let a in inputArr) {
        credentials.push(inputArr[a].value);
      }
      let jsonResponse = {
        merchant_name: urlPatharr[2],
        access_token: credentials[0],
        storefront_apiKey: credentials[1],
        app_key: credentials[2],
        app_secret: credentials[3],
        app_id: urlPatharr[6],
      };

      chrome.runtime.sendMessage({ jsonResponse });
    } catch (e) {
      console.log("Details fetching unsuccessfull");
      chrome.runtime.sendMessage(false);
    }
  } catch (e) {
    console.log("Automation Failed please open your online Store URL");
    chrome.runtime.sendMessage(false);
  }
};
