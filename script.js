function replaceText() {
    var inputText = document.getElementById("inputText").value;
    var replaceText = document.getElementById("replaceText").value;
    var replacementText = document.getElementById("replacementText").value;
    var caseSensitive = document.getElementById("caseSensitive").checked;

    var output = document.getElementById("outputText");

    var flags = "g";
    if (!caseSensitive) {
        flags += "i";
    }

    var replacedText = inputText.replace(new RegExp(replaceText, flags), replacementText);

    output.value = replacedText;
}

document.getElementById("inputText").addEventListener("input", replaceText);
document.getElementById("replaceText").addEventListener("input", replaceText);
document.getElementById("replacementText").addEventListener("input", replaceText);
document.getElementById("caseSensitive").addEventListener("change", replaceText);

replaceText();