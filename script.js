// function showFlowers() {
//     // Lấy element chứa văn bản và nút
//     var centerContainer = document.querySelector('.center-container');
//     centerContainer.style.opacity = '0';
//     centerContainer.style.visibility = 'hidden';
//     centerContainer.remove();
//     // Tạo container chứa các ảnh bay lên nếu chưa có
//     let flyingImagesContainer = document.querySelector('.flying-images');
//     if (!flyingImagesContainer) {
//         flyingImagesContainer = document.createElement('div');
//         flyingImagesContainer.className = 'flying-images';
//         document.body.appendChild(flyingImagesContainer);
//     }

//     const numImages = 10; // Số lượng ảnh bay lên

//     // Tạo và thêm các ảnh vào flyingImagesContainer
//     for (let i = 0; i < numImages; i++) {
//         createAndAnimateImage(i);
//     }

//     // Hiển thị container chính ngay lập tức
//     document.querySelector('.not-loaded').classList.remove('not-loaded');
// }

// Lấy các phần tử từ DOM
const welcomeBtn = document.querySelector(".welcome-btn");
const welcomeWrap = document.querySelector(".welcome-wrap");
const cardWish = document.querySelector(".card-wish");
const cardImgs = document.querySelector(".card-imgs");
const birthdayAudio = document.getElementById("birthday-audio");
// Thêm sự kiện click vào nút
welcomeBtn.addEventListener("click", () => {
    // Ẩn phần tử welcome-wrap
    welcomeWrap.classList.add("hidden");

    // Hiển thị card-wish và card-imgs
    cardWish.classList.remove("hidden");
    cardWish.classList.add("show");

    cardImgs.classList.remove("hidden");
    cardImgs.classList.add("show");

    birthdayAudio.play();
    document.body.classList.remove("container");
});


const images = document.querySelectorAll('.card-img'); // Lấy tất cả các ảnh
let currentIndex = 0;

// Ẩn tất cả ảnh trừ ảnh đầu tiên
images.forEach((img, index) => {
    if (index !== 0) {
        img.classList.add('hidden');
    } else {
        img.classList.add('show');  // Ảnh đầu tiên hiển thị
    }
});

// Hàm đổi ảnh với hiệu ứng
function switchImage() {
    images[currentIndex].classList.remove('show'); // Bỏ hiệu ứng hiển thị
    images[currentIndex].classList.add('hidden');  // Ẩn ảnh hiện tại

    // Chuyển sang ảnh tiếp theo
    currentIndex = (currentIndex + 1) % images.length;

    images[currentIndex].classList.remove('hidden'); // Xóa ẩn
    images[currentIndex].classList.add('show');  // Thêm hiệu ứng hiển thị
}

// Thực hiện đổi ảnh mỗi 3 giây
setInterval(switchImage, 3000);
