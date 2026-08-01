/* ==========================================================================
   JSR Dheeraj Hosiery & Ananya Sports (Traders) - Wholesale Garment Catalog
   ========================================================================== */

const PHONE_NUMBER = "919898487879";

// Real Products Data Array (Arranged in exact requested order)
const productsData = [
  {
    id: "gk-kids-half-sleeve",
    name: "GK Kids Half Sleeve T-Shirt",
    category: "tshirts",
    categories: ["tshirts", "kidswear"],
    tag: "Wholesale Hot",
    images: ["assets/gk_kids_half_sleeve.jpg"],
    desc: "Premium multi-color printed kids round neck half sleeve t-shirts in bio-washed hosiery fabric (Ferrari, Lee Cooper, Ellen Solly, etc.). Soft ribbing & non-fading prints.",
    fabric: "100% Combed Cotton / Bio-Wash Hosiery",
    gsm: "180 - 200 GSM",
    pricing: [
      { size: "20 - 24 (Ages 2-5 Yrs)", price: "₹45 / pc" },
      { size: "26 - 30 (Ages 6-9 Yrs)", price: "₹55 / pc" },
      { size: "32 - 36 (Ages 10-14 Yrs)", price: "₹65 / pc" }
    ],
    moq: "30 Pieces / Bundle"
  },
  {
    id: "round-neck-half-sleeve",
    name: "Round Neck Half Sleeve T-Shirt",
    category: "tshirts",
    categories: ["tshirts", "kidswear"],
    tag: "Best Seller",
    images: [
      "assets/round_neck_half_sleeve_1.jpg",
      "assets/round_neck_half_sleeve_2.jpg"
    ],
    desc: "Classic round neck half sleeve t-shirts with chest prints (Ferrari, Lee Cooper, Under Armour, Fastrack, Gucci). Soft breathable hosiery knit in multi-color packs.",
    fabric: "Combed Cotton Hosiery Blend",
    gsm: "175 - 190 GSM",
    pricing: [
      { size: "Small (28 - 30)", price: "₹50 / pc" },
      { size: "Medium (32 - 34)", price: "₹60 / pc" },
      { size: "Large (36 - 38)", price: "₹70 / pc" }
    ],
    moq: "24 Pieces / Pack"
  },
  {
    id: "girls-printed-shorts",
    name: "Girls Printed Shorts",
    category: "shorts",
    categories: ["shorts", "kidswear"],
    tag: "New Arrival",
    images: ["assets/girls_printed_shorts.jpg"],
    desc: "Cute and vibrant printed shorts for girls in floral, stripes, polka dots, tie-dye & heart patterns. Elastic waist with adjustable drawstrings.",
    fabric: "Super-Soft Hosiery Cotton Knit",
    gsm: "160 - 180 GSM",
    pricing: [
      { size: "Small (S)", price: "₹35 / pc" },
      { size: "Medium (M)", price: "₹40 / pc" },
      { size: "Large (L)", price: "₹45 / pc" }
    ],
    moq: "40 Pieces / Assorted"
  },
  {
    id: "kids-cotton-chaddi",
    name: "Kids Cotton Chaddi",
    category: "kidswear",
    categories: ["kidswear", "underwear"],
    tag: "Daily Essential",
    images: ["assets/kids_cotton_chaddi.jpg"],
    desc: "100% pure cotton breathable kids printed drawer / chaddi. Skin-friendly soft elastic band designed for all-day moisture control and comfort.",
    fabric: "100% Pure Soft Cotton Hosiery",
    gsm: "140 - 160 GSM",
    pricing: [
      { size: "Small (Ages 1-3 Yrs)", price: "₹18 / pc" },
      { size: "Medium (Ages 4-7 Yrs)", price: "₹22 / pc" },
      { size: "Large (Ages 8-12 Yrs)", price: "₹26 / pc" }
    ],
    moq: "50 Pieces / Pack"
  },
  {
    id: "kids-printed-shorts",
    name: "Kids Printed Shorts",
    category: "shorts",
    categories: ["shorts", "kidswear"],
    tag: "Trending",
    images: ["assets/kids_printed_shorts.jpg"],
    desc: "Durable kids printed half pants in checks, camouflage, animal prints, and cartoon graphics. Deep side pocket & flexible elastic waistband.",
    fabric: "Heavy Combed Cotton Hosiery",
    gsm: "170 - 190 GSM",
    pricing: [
      { size: "18 - 24 (Ages 2-5 Yrs)", price: "₹38 / pc" },
      { size: "26 - 30 (Ages 6-9 Yrs)", price: "₹48 / pc" },
      { size: "32 - 36 (Ages 10-14 Yrs)", price: "₹58 / pc" }
    ],
    moq: "36 Pieces / Bundle"
  }
];

// Track active slide indices for multi-image sliders
const sliderState = {};

// DOM Elements & Initialization
document.addEventListener("DOMContentLoaded", () => {
  const productsGrid = document.getElementById("productsGrid");
  const searchInput = document.getElementById("searchInput");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const navbar = document.querySelector(".navbar");
  const backToTopBtn = document.getElementById("backToTop");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.querySelector(".nav-links");
  const contactForm = document.getElementById("wholesaleInquiryForm");

  let currentCategory = "all";
  let searchQuery = "";

  // Initialize Slider State
  productsData.forEach(p => {
    sliderState[p.id] = 0;
  });

  // Render Products Grid Function
  function renderProducts() {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";

    const filtered = productsData.filter(item => {
      const matchesCategory = (currentCategory === "all") || 
                              (item.category === currentCategory) || 
                              (item.categories && item.categories.includes(currentCategory));
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.fabric.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: #ffffff; border-radius: 16px; border: 1px dashed #cbd5e1;">
          <i class="fas fa-box-open" style="font-size: 3.5rem; color: #94a3b8; margin-bottom: 1rem;"></i>
          <h3 style="font-size: 1.4rem; margin-bottom: 0.5rem; color: #0f172a;">No Garments Found</h3>
          <p style="color: #64748b;">Try adjusting your search query or select another category tab above.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.setAttribute("id", `card-${product.id}`);

      const waMsg = encodeURIComponent(
        `Hello JSR Dheeraj Hosiery & Ananya Sports,\n\nI am interested in wholesale pricing for:\nProduct: ${product.name}\nCloth Quality: ${product.fabric}\nGSM: ${product.gsm}\nMOQ: ${product.moq}\n\nPlease share wholesale catalog and current stock availability.`
      );
      const waLink = `https://wa.me/${PHONE_NUMBER}?text=${waMsg}`;

      // Image Section HTML (Single image vs Gallery slider)
      let imageHtml = "";
      if (product.images.length > 1) {
        const activeIdx = sliderState[product.id] || 0;
        imageHtml = `
          <div class="product-img-wrap has-slider" id="wrap-${product.id}">
            <span class="product-tag">${product.tag}</span>
            <span class="gallery-badge"><i class="fas fa-images"></i> ${product.images.length} Photos</span>
            <div class="product-slider-container">
              <img src="${product.images[activeIdx]}" alt="${product.name} - View ${activeIdx + 1}" class="product-active-img" id="img-${product.id}">
            </div>
            <button class="slider-arrow prev-arrow" onclick="slideImage('${product.id}', -1, event)" title="Previous photo">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="slider-arrow next-arrow" onclick="slideImage('${product.id}', 1, event)" title="Next photo">
              <i class="fas fa-chevron-right"></i>
            </button>
            <div class="slider-dots">
              ${product.images.map((_, idx) => `
                <span class="dot ${idx === activeIdx ? 'active' : ''}" onclick="setSlide('${product.id}', ${idx}, event)"></span>
              `).join('')}
            </div>
            <button class="product-quick-view" onclick="openQuickView('${product.id}')" title="Quick Specs">
              <i class="fas fa-expand"></i>
            </button>
          </div>
        `;
      } else {
        imageHtml = `
          <div class="product-img-wrap" onclick="openQuickView('${product.id}')">
            <span class="product-tag">${product.tag}</span>
            ${product.isPendingImageNote ? `<span class="pending-badge"><i class="fas fa-camera"></i> Official Stock Photo</span>` : ''}
            <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
            <button class="product-quick-view" onclick="openQuickView('${product.id}')" title="Quick Specs">
              <i class="fas fa-expand"></i>
            </button>
          </div>
        `;
      }

      // Price table HTML
      const priceRows = product.pricing.map(p => `
        <tr>
          <td class="size-col">${p.size}</td>
          <td class="price-col">${p.price}</td>
        </tr>
      `).join('');

      card.innerHTML = `
        ${imageHtml}
        <div class="product-content">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
          
          <div class="product-specs-grid">
            <div class="spec-box">
              <span class="spec-label"><i class="fas fa-shirt"></i> Quality</span>
              <span class="spec-val">${product.fabric}</span>
            </div>
            <div class="spec-box">
              <span class="spec-label"><i class="fas fa-weight-hanging"></i> GSM</span>
              <span class="spec-val">${product.gsm}</span>
            </div>
          </div>

          <div class="price-table-container">
            <div class="price-table-title">
              <i class="fas fa-tags"></i> Size & Wholesale Price Table
            </div>
            <table class="card-price-table">
              <thead>
                <tr>
                  <th>Size / Group</th>
                  <th style="text-align: right;">Price (Wholesale)</th>
                </tr>
              </thead>
              <tbody>
                ${priceRows}
              </tbody>
            </table>
          </div>

          <div class="product-card-footer">
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-wholesale-full">
              <i class="fab fa-whatsapp"></i> Get Wholesale Price
            </a>
          </div>
        </div>
      `;

      productsGrid.appendChild(card);
    });
  }

  // Initial Render
  renderProducts();

  // Search Input Event
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  // Category Tabs Event
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Mobile Menu Toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const icon = mobileToggle.querySelector("i");
      if (navLinks.classList.contains("active")) {
        icon.className = "fas fa-times";
      } else {
        icon.className = "fas fa-bars";
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        if (mobileToggle.querySelector("i")) {
          mobileToggle.querySelector("i").className = "fas fa-bars";
        }
      });
    });
  }

  // Active Section Scroll Spy
  const sections = document.querySelectorAll("section[id]");
  const allNavLinks = document.querySelectorAll(".nav-link");

  function updateActiveNavLink() {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        allNavLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Sticky Navbar & Scroll Events
  window.addEventListener("scroll", () => {
    updateActiveNavLink();
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }

    if (window.scrollY > 400) {
      backToTopBtn?.classList.add("show");
    } else {
      backToTopBtn?.classList.remove("show");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Contact Form WhatsApp Handler
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("formName").value;
      const phone = document.getElementById("formPhone").value;
      const city = document.getElementById("formCity").value;
      const customerType = document.getElementById("formType").value;
      const requirement = document.getElementById("formRequirement").value;

      const message = `Hello JSR Dheeraj Hosiery & Ananya Sports (Traders),\n\n*New Wholesale Inquiry*\n👤 Name: ${name}\n📱 Phone: ${phone}\n🏙️ City: ${city}\n🏪 Business Type: ${customerType}\n📦 Requirements: ${requirement}\n\nPlease share wholesale catalog & price details.`;

      const targetUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(targetUrl, '_blank');
    });
  }

  // Close Modal Handlers
  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
});

// Image Slider Control Functions
function slideImage(productId, direction, e) {
  if (e) e.stopPropagation();
  const product = productsData.find(p => p.id === productId);
  if (!product || !product.images) return;

  let currentIdx = sliderState[productId] || 0;
  currentIdx = (currentIdx + direction + product.images.length) % product.images.length;
  sliderState[productId] = currentIdx;

  const imgElem = document.getElementById(`img-${productId}`);
  if (imgElem) {
    imgElem.style.opacity = "0.4";
    setTimeout(() => {
      imgElem.src = product.images[currentIdx];
      imgElem.style.opacity = "1";
    }, 120);
  }

  const wrapElem = document.getElementById(`wrap-${productId}`);
  if (wrapElem) {
    const dots = wrapElem.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === currentIdx);
    });
  }
}

function setSlide(productId, slideIdx, e) {
  if (e) e.stopPropagation();
  const product = productsData.find(p => p.id === productId);
  if (!product || !product.images) return;

  sliderState[productId] = slideIdx;

  const imgElem = document.getElementById(`img-${productId}`);
  if (imgElem) {
    imgElem.style.opacity = "0.4";
    setTimeout(() => {
      imgElem.src = product.images[slideIdx];
      imgElem.style.opacity = "1";
    }, 120);
  }

  const wrapElem = document.getElementById(`wrap-${productId}`);
  if (wrapElem) {
    const dots = wrapElem.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === slideIdx);
    });
  }
}

// Category Filter Helper
function filterByCategory(catName) {
  const tabBtn = document.querySelector(`.tab-btn[data-category="${catName}"]`);
  if (tabBtn) {
    tabBtn.click();
  }
  const productsElem = document.getElementById("products");
  if (productsElem) {
    productsElem.scrollIntoView({ behavior: "smooth" });
  }
}

// Quick View Modal Popup
function openQuickView(productId) {
  const item = productsData.find(p => p.id === productId);
  if (!item) return;

  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalBody = document.getElementById("modalBody");
  if (!modalBackdrop || !modalBody) return;

  const waMsg = encodeURIComponent(
    `Hello JSR Dheeraj Hosiery & Ananya Sports,\n\nI want to inquire about bulk wholesale order for:\nItem: ${item.name}\nCloth Quality: ${item.fabric}\nGSM: ${item.gsm}\nMOQ: ${item.moq}\n\nPlease send wholesale price per piece and color catalog.`
  );
  const waLink = `https://wa.me/${PHONE_NUMBER}?text=${waMsg}`;

  let modalGalleryHtml = "";
  if (item.images.length > 1) {
    modalGalleryHtml = `
      <div class="modal-gallery">
        <div class="modal-main-img-box">
          <img src="${item.images[0]}" id="modalMainImg" alt="${item.name}">
        </div>
        <div class="modal-thumbs">
          ${item.images.map((img, idx) => `
            <img src="${img}" class="modal-thumb ${idx === 0 ? 'active' : ''}" onclick="changeModalImg('${img}', this)" alt="Thumbnail ${idx+1}">
          `).join('')}
        </div>
      </div>
    `;
  } else {
    modalGalleryHtml = `
      <div class="modal-img-wrap">
        <img src="${item.images[0]}" alt="${item.name}">
      </div>
    `;
  }

  const modalPriceRows = item.pricing.map(p => `
    <tr>
      <td style="padding: 0.5rem 0.75rem;"><strong>${p.size}</strong></td>
      <td style="padding: 0.5rem 0.75rem; text-align: right; color: var(--primary); font-weight: 700;">${p.price}</td>
    </tr>
  `).join('');

  modalBody.innerHTML = `
    <div class="modal-grid">
      ${modalGalleryHtml}
      <div class="modal-details">
        <span class="badge badge-primary" style="align-self: flex-start; margin-bottom: 0.5rem;">${item.tag}</span>
        <h3 class="modal-title">${item.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.25rem;">${item.desc}</p>
        
        <div class="modal-specs">
          <div class="spec-item">
            <span>Cloth Quality</span>
            <span>${item.fabric}</span>
          </div>
          <div class="spec-item">
            <span>Fabric GSM</span>
            <span>${item.gsm}</span>
          </div>
          <div class="spec-item">
            <span>Minimum Order (MOQ)</span>
            <span>${item.moq}</span>
          </div>
        </div>

        <div style="margin: 1.25rem 0;">
          <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--navy); margin-bottom: 0.5rem;">Wholesale Rate Table</h4>
          <table class="card-price-table" style="width: 100%; border: 1px solid var(--border-color); border-radius: 8px;">
            <thead>
              <tr style="background: #f8fafc;">
                <th style="padding: 0.5rem 0.75rem;">Size Group</th>
                <th style="padding: 0.5rem 0.75rem; text-align: right;">Wholesale Price</th>
              </tr>
            </thead>
            <tbody>
              ${modalPriceRows}
            </tbody>
          </table>
        </div>

        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="margin-top: auto; padding: 1rem; width: 100%; justify-content: center;">
          <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i> Get Wholesale Price on WhatsApp
        </a>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function changeModalImg(imgSrc, thumbElem) {
  const modalMainImg = document.getElementById("modalMainImg");
  if (modalMainImg) {
    modalMainImg.src = imgSrc;
  }
  const thumbs = document.querySelectorAll(".modal-thumb");
  thumbs.forEach(t => t.classList.remove("active"));
  thumbElem.classList.add("active");
}

function closeModal() {
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("active");
  }
  document.body.style.overflow = "auto";
}
