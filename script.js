var correctPassword = "032026"; //           /*đổi mật khẩu ở đây */

function checkPassword() {
  var input = document.getElementById("PasswordInput").value;
  if (input === correctPassword) {
    document.getElementById("lockscreen").style.display = "none";
    playMusic();
  } else {
    document.getElementById("errorText").innerText = "Sai mật khẩu rồi 😢";
    document.getElementById("PasswordInput").style.border = "2px solid red";
  }
}
function playMusic() {
  document.getElementById("music").play();
}
/our memories/;
function changeImage(element) {
  document.getElementById("bigImage").src = element.src;

  // bỏ active cũ
  document.querySelectorAll(".thumbnails img").forEach((img) => {
    img.style.opacity = "0.6";
  });

  // active ảnh đang chọn
  element.style.opacity = "1";
}
/bắt sự kiện khi scroll/;
const cards = document.querySelectorAll(".member-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

cards.forEach((card) => {
  observer.observe(card);
});
/Lời nhắn cuối/;
document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Chúc các đồng chí về đơn vị mới tiếp tục giữ vững tinh thần của một người quân nhân do đơn vị đào tạo, chúc các đồng chí và gia đình thật nhiều sức khỏe luôn hoàn thành tốt mọi nhiệm vụ được cấp trên giao, TẠM BIỆT !!.";
  const typingElement = document.getElementById("typing-text");
  const section = document.querySelector(".final-message");

  let index = 0;
  let started = false;

  function typeWriter() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 40);
    }
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !started) {
          started = true;
          typeWriter();
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  observer.observe(section);
});
/* moi */
/* animation hiện ảnh khi scroll */

const memoryImages = document.querySelectorAll(".memory-img");

const memoryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

memoryImages.forEach((img) => {
  memoryObserver.observe(img);
});

/* popup ảnh */

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closePopup = document.querySelector(".close-popup");

memoryImages.forEach((img) => {
  img.addEventListener("click", () => {
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
/* animation notes */

const notes = document.querySelectorAll(".note");

const noteObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

notes.forEach((note) => {
  noteObserver.observe(note);
});
/* animation ảnh đầu */

const heroImage = document.querySelector(".hero-image");

const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

heroObserver.observe(heroImage);
/* popup member */

const memberCards = document.querySelectorAll(".member-card");

const memberPopup = document.getElementById("member-popup");

const memberPopupImg = document.getElementById("member-popup-img");

const memberPopupName = document.getElementById("member-popup-name");

const memberPopupUser = document.getElementById("member-popup-user");

const closeMemberPopup = document.querySelector(".close-member-popup");

memberCards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img").src;

    const name = card.querySelector("h3").textContent;

    const user = card.querySelector("p").textContent;

    memberPopup.style.display = "flex";

    memberPopupImg.src = img;

    memberPopupName.textContent = name;

    memberPopupUser.textContent = user;
  });
});

/* đóng popup */

closeMemberPopup.addEventListener("click", () => {
  memberPopup.style.display = "none";
});

/* click nền để đóng */

memberPopup.addEventListener("click", (e) => {
  if (e.target === memberPopup) {
    memberPopup.style.display = "none";
  }
});
