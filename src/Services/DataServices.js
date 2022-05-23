import exampleData from "../Data/json2.json";

export function getData(email) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let resumeLS = JSON.parse(localStorage.getItem(email));
      if (resumeLS === undefined || resumeLS === null) {
        resumeLS = exampleData;
      }
      resolve(resumeLS);
    }, 2000);
  });
}

export function setData(email, data) {
  localStorage.setItem(email, JSON.stringify(data));
}

export function deleteData(email) {
  localStorage.removeItem(email);
}
