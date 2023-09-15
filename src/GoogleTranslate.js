import React from "react";

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en" },
    "google_translate_element"
  );
}
const GoogleTranslate = (props) => {
  return (
    <>
      <div className="text-black h-4
      " id="google_translate_element">
        <button onClick={googleTranslateElementInit}>Translate</button>
      </div>
    </>
  );
};

export default GoogleTranslate;
