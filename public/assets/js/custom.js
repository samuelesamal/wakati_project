$(function () {
    const initializeLottieIcon = (container) => {
        if (!container || !window.lottie || container.dataset.lottieInitialized === "true") {
            return;
        }

        const animationGlobal = container.dataset.animationGlobal;
        const animationPath = container.dataset.animationPath;
        const animationData = animationGlobal ? window[animationGlobal] : null;
        const startFrame = Number(container.dataset.startFrame || 0);
        const endFrame = Number(container.dataset.endFrame || 100);

        if (!animationPath && !animationData) {
            return;
        }

        const animationOptions = {
            container,
            renderer: "svg",
            loop: true,
            autoplay: true
        };

        if (animationPath) {
            animationOptions.path = animationPath;
        } else {
            animationOptions.animationData = animationData;
        }

        container.dataset.lottieInitialized = "true";

        const animationInstance = window.lottie.loadAnimation(animationOptions);
        animationInstance.addEventListener("DOMLoaded", () => {
            container.classList.add("is-ready");
            animationInstance.playSegments([startFrame, endFrame], true);
        });
    };

    const heroMotionLogo = document.getElementById("heroMotionLogo");

    if (heroMotionLogo && window.lottie) {
        initializeLottieIcon(heroMotionLogo);
    }

    document.querySelectorAll(".shared-lottie-icon").forEach((icon) => {
        initializeLottieIcon(icon);
    });

    // Header Scroll
    const updateHeaderState = () => {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    };

    $("header").removeClass("fixed-header");
    $(window).on("scroll", updateHeaderState);


    // Featured Projects Stacked Carousel
    const carouselTrack = document.getElementById("carouselTrack");
    const carouselDots = document.getElementById("carouselDots");
    const prevButton = document.querySelector(".nav-button--prev");
    const nextButton = document.querySelector(".nav-button--next");

    if (carouselTrack && carouselDots && prevButton && nextButton) {
        const carouselSlides = [
            {
                title: "Uganda Baati",
                tags: ["Corporate video", "Brand storytelling"],
                description: "A confident brand story captured in a premium, cinematic landscape frame.",
                mediaType: "video",
                mediaSrc: "../assets/videos/featured-projects/uganda-baati.mp4"
            },
            {
                title: "MHS",
                tags: ["Medical brand", "Campaign video"],
                description: "A clean campaign reel built to feel polished, informative, and visually modern.",
                mediaType: "video",
                mediaSrc: "../assets/videos/featured-projects/mhs.mp4"
            },
            {
                title: "NREP Kuumi",
                tags: ["Event coverage", "Production"],
                description: "Editorial coverage with a calm stacked-card presentation and generous whitespace.",
                mediaType: "video",
                mediaSrc: "../assets/videos/featured-projects/nrep-kuumi.mp4"
            },
            {
                title: "M-KOPA",
                tags: ["Product campaign", "Video production"],
                description: "Product-led storytelling presented in a restrained premium carousel composition.",
                mediaType: "video",
                mediaSrc: "../assets/videos/featured-projects/mkopa.mp4"
            },
            /*{
                title: "Amber Bottle",
                tags: ["Photography", "Studio"],
                description: "Studio-crafted still imagery placed into the same cinematic landscape system.",
                mediaType: "image",
                mediaSrc: "../assets/images/portfolio/portfolio-img-5.jpg"
            },
            {
                title: "Digital Magazine",
                tags: ["Digital design", "Web development"],
                description: "Editorial design work shown with the same soft stacked rhythm and premium spacing.",
                mediaType: "image",
                mediaSrc: "../assets/images/portfolio/portfolio-img-6.jpg"
            }*/
        ];

        let activeIndex = 0;
        let travelCarouselAutoAdvance = null;
        let travelCarouselAutoStopped = false;
        let travelCards = [];
        let travelDots = [];

        const triggerActiveTravelCardTextAnimation = () => {
            const activeCard = carouselTrack.querySelector(".travel-card.is-active");
            if (!activeCard) {
                return;
            }

            activeCard.classList.remove("is-text-animating");
            void activeCard.offsetWidth;
            activeCard.classList.add("is-text-animating");
        };

        const syncTravelCarouselVideos = () => {
            travelCards.forEach((card) => {
                const video = card.querySelector("video.travel-card__media");
                if (!video) {
                    return;
                }

                if (card.classList.contains("is-active")) {
                    const playAttempt = video.play();
                    if (playAttempt && typeof playAttempt.catch === "function") {
                        playAttempt.catch(() => {
                            // Ignore autoplay interruptions quietly.
                        });
                    }
                } else {
                    video.pause();
                }
            });
        };

        const stopTravelCarouselAutoAdvance = () => {
            travelCarouselAutoStopped = true;
            if (travelCarouselAutoAdvance) {
                window.clearInterval(travelCarouselAutoAdvance);
                travelCarouselAutoAdvance = null;
            }
        };

        const startTravelCarouselAutoAdvance = () => {
            if (travelCarouselAutoStopped || travelCarouselAutoAdvance) {
                return;
            }

            travelCarouselAutoAdvance = window.setInterval(() => {
                activeIndex = (activeIndex + 1) % carouselSlides.length;
                renderCarousel();
            }, 4200);
        };

        const createCard = (slide, index) => {
            const card = document.createElement("article");
            card.className = "travel-card";
            card.dataset.index = String(index);

            const visual = document.createElement("div");
            visual.className = "travel-card__visual";

            if (slide.mediaType === "video") {
                const video = document.createElement("video");
                video.className = "travel-card__media";
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.playsInline = true;
                video.preload = "auto";
                video.innerHTML = `<source src="${slide.mediaSrc}" type="video/mp4">`;
                visual.appendChild(video);
            } else {
                const image = document.createElement("img");
                image.className = "travel-card__media";
                image.src = slide.mediaSrc;
                image.alt = slide.title;
                visual.appendChild(image);
            }

            const content = document.createElement("div");
            content.className = "travel-card__content";
            content.innerHTML = `
                <div class="travel-card__text">
                    <h3>${slide.title}</h3>
                    <p>${slide.description}</p>
                </div>
                <div class="travel-card__tags">
                    ${slide.tags.map((tag) => `<span>${tag}</span>`).join("")}
                </div>
            `;

            card.appendChild(visual);
            card.appendChild(content);
            return card;
        };

        const getTravelCardOffset = (index) => {
            const rawOffset = index - activeIndex;
            const wrapLength = carouselSlides.length;

            if (rawOffset > wrapLength / 2) {
                return rawOffset - wrapLength;
            }

            if (rawOffset < -wrapLength / 2) {
                return rawOffset + wrapLength;
            }

            return rawOffset;
        };

        const buildTravelCarousel = () => {
            carouselTrack.innerHTML = "";
            carouselDots.innerHTML = "";
            travelCards = [];
            travelDots = [];

            carouselSlides.forEach((slide, index) => {
                const card = createCard(slide, index);
                carouselTrack.appendChild(card);
                travelCards.push(card);

                const dot = document.createElement("button");
                dot.type = "button";
                dot.className = "travel-carousel__dot";
                dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
                dot.addEventListener("click", () => {
                    stopTravelCarouselAutoAdvance();
                    activeIndex = index;
                    renderCarousel();
                });
                carouselDots.appendChild(dot);
                travelDots.push(dot);
            });
        };

        const renderCarousel = () => {
            travelCards.forEach((card, index) => {
                const normalizedOffset = getTravelCardOffset(index);

                card.classList.remove("is-active", "is-next", "is-prev", "is-hidden");

                if (normalizedOffset === 0) {
                    card.classList.add("is-active");
                } else if (normalizedOffset === 1) {
                    card.classList.add("is-next");
                } else if (normalizedOffset === -1) {
                    card.classList.add("is-prev");
                } else {
                    card.classList.add("is-hidden");
                }
            });

            travelDots.forEach((dot, index) => {
                dot.classList.toggle("is-active", index === activeIndex);
            });

            window.requestAnimationFrame(syncTravelCarouselVideos);
            window.requestAnimationFrame(triggerActiveTravelCardTextAnimation);
        };

        prevButton.addEventListener("click", () => {
            stopTravelCarouselAutoAdvance();
            activeIndex = (activeIndex - 1 + carouselSlides.length) % carouselSlides.length;
            renderCarousel();
        });

        nextButton.addEventListener("click", () => {
            stopTravelCarouselAutoAdvance();
            activeIndex = (activeIndex + 1) % carouselSlides.length;
            renderCarousel();
        });

        buildTravelCarousel();
        renderCarousel();
        startTravelCarouselAutoAdvance();
    }

    // Mobile menu close buttons
    document.querySelectorAll(".dropdown-menu .btn-close").forEach((closeButton) => {
        closeButton.addEventListener("click", () => {
            const dropdownMenu = closeButton.closest(".dropdown-menu");
            const dropdownToggle = dropdownMenu?.parentElement?.querySelector('[data-bs-toggle="dropdown"]');

            if (!dropdownToggle || !window.bootstrap?.Dropdown) {
                return;
            }

            const dropdownInstance = window.bootstrap.Dropdown.getOrCreateInstance(dropdownToggle);
            dropdownInstance.hide();
        });
    });

    // What we do carousel
    const servicesCarousel = $(".what-we-do-carousel");

    if (servicesCarousel.length) {
        const syncVisibleServiceVideo = () => {
            const carouselElement = servicesCarousel.get(0);
            if (!carouselElement) {
                return;
            }

            const allVideos = carouselElement.querySelectorAll(".service-carousel-video");
            allVideos.forEach((video) => {
                video.pause();
            });

            const activeVideo = carouselElement.querySelector(".owl-item.center .service-carousel-video")
                || carouselElement.querySelector(".owl-item.active .service-carousel-video");

            if (!activeVideo) {
                return;
            }

            const playAttempt = activeVideo.play();
            if (playAttempt && typeof playAttempt.catch === "function") {
                playAttempt.catch(() => {
                    // Ignore autoplay rejections quietly; muted inline playback should usually succeed.
                });
            }
        };

        servicesCarousel.owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 28,
            dots: false,
            nav: true,
            mouseDrag: true,
            touchDrag: true,
            smartSpeed: 650,
            navText: [
                '<span aria-hidden="true">&larr;</span>',
                '<span aria-hidden="true">&rarr;</span>'
            ],
            responsive: {
                0: {
                    stagePadding: 18
                },
                768: {
                    stagePadding: 72
                },
                1200: {
                    stagePadding: 140
                }
            }
        });

        servicesCarousel.on("initialized.owl.carousel translated.owl.carousel", () => {
            window.requestAnimationFrame(syncVisibleServiceVideo);
        });

        window.requestAnimationFrame(syncVisibleServiceVideo);
    }


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    if (btn) {
        btn.addEventListener("click", scrollToTop);
    }

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (!btn) {
            return;
        }
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
	AOS.init({
		once: true,
	});

});

