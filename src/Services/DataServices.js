import exampleData from "../Data/json2.json";

export function getData(email) {
  let resumeLS = JSON.parse(localStorage.getItem(email));
  if (resumeLS !== undefined && resumeLS !== null) {
    return resumeLS;
  } else {
    return exampleData;
  }
}

export function setData(email, data) {
  localStorage.setItem(email, JSON.stringify(data));
}

export function deleteData(email) {
  localStorage.removeItem(email);
}
