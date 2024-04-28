window.onload = function() {
    // 이미지 업로드 버튼 생성
    let imageUploadButton = document.createElement("label");
    let imageUploadButtonSpan = document.createElement("span");
    let imageUploadButtonInput = document.createElement("input");

    imageUploadButton.setAttribute("class", "imageUpload e1h77j9v5");

    imageUploadButtonSpan.setAttribute("class", "blind");
    imageUploadButtonSpan.innerText="파일 올리기"

    imageUploadButtonInput.setAttribute("type", "file");
    imageUploadButtonInput.setAttribute("class", "blind");
    imageUploadButtonInput.setAttribute("accept", ".png, .jpg, .jpeg, .bmp, .svg");

    imageUploadButton.appendChild(imageUploadButtonSpan);
    imageUploadButton.appendChild(imageUploadButtonInput);

    let toolBar = document.querySelector(".e1h77j9v7");
    toolBar.prepend(imageUploadButton);
};