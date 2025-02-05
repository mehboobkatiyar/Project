export const loadCounterFromLocalStorage = () => {
  const savedCounter = localStorage.getItem("counter");
  return savedCounter ? JSON.parse(savedCounter) : 0; // Default to 0 if no value is found
};

export const saveCounterToLocalStorage = (counterValue) => {
  localStorage.setItem("counter", JSON.stringify(counterValue));
};

export const loadTextFromLocalStorage = () => {
  const savedText = localStorage.getItem("richText");
  return savedText ? savedText : "";
};

export const saveTextToLocalStorage = (textContent) => {
  localStorage.setItem("richText", textContent);
};

export const loadFormsFromLocalStorage = () => {
  const savedForms = localStorage.getItem("forms");
  return savedForms ? JSON.parse(savedForms) : [];
};

export const saveFormsToLocalStorage = (forms) => {
  localStorage.setItem("forms", JSON.stringify(forms));
};
