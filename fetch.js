let a;
async function uploadImageFile(file, type, generateThumb) {
    let data = new FormData();
    data.append("file", file);
    data.append("type", type);
    data.append("generateThumb", generateThumb);

    let r = await fetch("/rest/picture", {
        method: "POST",
        headers: {},
        body: data
    });
    let imageData = await r.json();

    return imageData;
}
