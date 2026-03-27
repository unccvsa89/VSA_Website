const albums = {
    "2025_interest": {
        title: "Gold Rush + Interest",
        caterogy: "GBM",
        description: "Kicking off the semester with our new members!",
        count: 139,
        year: "2025_2026"
    },
    
    "2025_moon_festival": {
        title: "Moon Festival",
        caterogy: "GBM",
        description: "Beneath the full moon, we celebrate connection, gratitude, and light!",
        count: 576,
        year:"2025_2026"
    },

    "2025_royal_cafe": {
        title: "Royal Cafe",
        caterogy: "GBM",
        description: "Royal Cafe came alive with dares, elegance and a court full of supporters who made the night unforgettable!",
        count: 31,
        year:"2025_2026"
    },

    "2025_granny": {
        title: "Granny",
        caterogy: "GBM",
        description: "Granny GBM brought fun twists to every game, nonstop laughter, and the constant pressure of being hunted down by grannies around the room!",
        count: 113,
        year:"2025_2026"
    },

    "2025_tet": {
        title: "Tết Năm Mới",
        caterogy: "GBM",
        description: "From games and prizes to sharing traditions and laughter, it was such a special night welcoming new beginnings together!",
        count: 175,
        year:"2025_2026"
    },

    "2024_viet_night": {
        title: "Lanterns of Legacy",
        caterogy: "VietNight",
        description: "Enjoy a spectacular night and magnificent performances, food, raffle prizes, Vietnamese culture, and much more!!!",
        count: 397,
        year: "2024_2025"
    },

    "2024_interest": {
        title: "Interest",
        caterogy: "GBM",
        description: "A little bit more about our WONDERFUL Eboard and our AMAZING organization!",
        count: 152,
        year: "2024_2025"
    },

    "2024_night_market": {
        title: "Night Market",
        caterogy: "GBM",
        description: "A BIG shoutout to all of the vendors to help make it possible, especially NC Nails Esthetics Academy!",
        count: 98,
        year: "2024_2025"
    },

    "2024_maid_cafe": {
        title: "Maid Cafe",
        caterogy: "GBM",
        description: "Sweet treats served by our maids, while also watching them do a series of funny Dares!",
        count: 106,
        year:"2024_2025"
    },

    "2024_tet": {
        title: "New Year",
        caterogy: "GBM",
        description: "Feelin’ lucky with red envelopes and big smiles with good luck come our way !! Vsa wants to wish you a Happy Lunar New Year with good fortune and good vibes !!!",
        count: 559,
        year:"2024_2025"
    },

    "2024_valentine": {
        title: "Valentine",
        caterogy: "GBM",
        description: "Bring your friends or that special someone to play our fun compatibility games and test your relationship!!",
        count: 201,
        year:"2024_2025"
    },

    "2024_che_and_paint": {
        title: "Che and Paint",
        caterogy: "GBM",
        description: "Enjoying a Vietnamese dessert/snack called chè thái and painting canvases, fans, and lanterns!!!",
        count: 307,
        year:"2024_2025"
    },

    "2023_viet_night": {
        title: "Yêu Lành",
        caterogy: "VietNight",
        description: "An amazing night filled with amazing people, food, performances, and more!!!",
        count: 0,
        year:"2023_2024"
    },

    "2023_interest": {
        title: "Interest",
        caterogy: "GBM",
        description: "It’s that time for the eboard members & members to meet each other. Giveaways, snacks, games, and lots more!",
        count: 465,
        year:"2023_2024"
    },

    "2023_casino_night": {
        title: "Casino Night",
        caterogy: "GBM",
        description: "Join VSA for some EXCITING fun at our Casino Night gbm!! Learn a variety of traditional Vietnamese games like tiến lên, bầu cua tôm cá, and much more!",
        count: 468,
        year:"2023_2024"
    },

    "2023_moon_festival": {
        title: "Moon Festival",
        caterogy: "GBM",
        description: "A special performance featuring Lion Dancers, games with special prizes, and Moon Cake tasting!",
        count: 442,
        year:"2023_2024"
    },

    "2023_vsa_by_night": {
        title: "VSA By Night",
        caterogy: "GBM",
        description: "An amazing time listening to all of the talented performers. Shout out to all of the people who stepped up and sang their heart out!",
        count: 722,
        year:"2023_2024"
    },

    "2023_xin_chao_vietnam": {
        title: "Xin Chào Vietnam",
        caterogy: "GBM",
        description: "Come learn about Vietnamese culture with dessert, games, dancing, fashion, and more!",
        count: 113,
        year:"2023_2024"
    },
};

const galleryContainer = document.getElementById('pinterest-gallery');
const eventTitle = document.getElementById('event-title');

if (galleryContainer && eventTitle) {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');
    const album = albums[albumId];

    if (album) {
        document.getElementById('breadcrumb-current').textContent = album.title;
        document.getElementById('event-title').textContent = album.title;
        document.getElementById('event-desc').textContent = album.description;

        const imagesToShow = Math.floor(album.count / 1);

        let imageNumbers = [];
        for (let i = 1; i <= album.count; i++) {
            imageNumbers.push(i);
        }
    
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const randomNumbers = shuffle(imageNumbers);
        const selectedNumbers = randomNumbers.slice(0, imagesToShow);

        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const captionText = document.getElementById("caption");
        const closeBtn = document.querySelector(".close-lightbox");

        selectedNumbers.forEach(num => {
            const div = document.createElement('div');
            div.classList.add('pin-item');

            const imgElement = document.createElement('img');
            imgElement.src = `/gallery_page/asset/images/gallery/${album.year}/${albumId}/${num}.jpg`;
            imgElement.alt = `${album.title} - Photo ${num}`;
            imgElement.loading = "lazy";

            imgElement.onclick = function() {
                lightbox.style.display = "block";
                lightboxImg.src = this.src;
                captionText.innerHTML = this.alt;
            }

            div.appendChild(imgElement);
            galleryContainer.appendChild(div);
        });

        if (closeBtn) {
            closeBtn.onclick = function() {
                lightbox.style.display = "none";
            }
        }

        if (lightbox) {
            lightbox.onclick = function(event) {
                if (event.target === lightbox) {
                    lightbox.style.display = "none";
                }
            }
        }
    } else {
        document.getElementById('event-title').textContent = "Gallery not found";
    }   
}