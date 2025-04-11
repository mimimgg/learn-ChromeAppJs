const images = ["0.jpg", "1.jpg", "2.jpg"];
const randomImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const bgImageCss = bgImage.style;

bgImage.src = `img/${randomImages}`;

bgImageCss.width = "100%";
bgImageCss.height = "100vh";
bgImageCss.objectFit = "cover";
bgImageCss.zIndex = "-1";
bgImageCss.top = "0";
bgImageCss.position = "absolute";

// ✨ 딤드 레이어 추가 ✨
const dimmedLayer = document.createElement("div");
const dimmedLayerCss = dimmedLayer.style;

dimmedLayerCss.position = "absolute";
dimmedLayerCss.top = "0";
dimmedLayerCss.left = "0";
dimmedLayerCss.width = "100%";
dimmedLayerCss.height = "100vh";
dimmedLayerCss.backgroundColor = "rgba(0, 0, 0, 0.5)"; // 검은색 반투명 (0.5)
dimmedLayerCss.zIndex = "-1"; // 배경보다 위에 오도록 설정

document.body.append(bgImage);
document.body.append(dimmedLayer);
