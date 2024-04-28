let textarea;

async function uploadImage(files) {
    const file = files[0];
    let imageData = await uploadImageFile(file, "notcompress", false);
    let filename = imageData.filename;
    let imageUrl = "playentry.org//uploads/" + filename.substring(0, 2) + "/" + filename.substring(2,4) + "/" + filename + "." + imageData.imageType;
    textarea.innerText += imageUrl;
}

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
    imageUploadButtonInput.setAttribute("onchange", "uploadImage(this.files)")

    imageUploadButton.appendChild(imageUploadButtonSpan);
    imageUploadButton.appendChild(imageUploadButtonInput);

    let toolBar = document.querySelector(".e1h77j9v7");
    toolBar.prepend(imageUploadButton);

    textarea = document.querySelector(".e1h77j9v1 > textarea");
};
