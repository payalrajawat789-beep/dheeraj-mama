/* ==========================================================================
   JSR Dheeraj Hosiery & Ananya Sports (Traders) - Interactive Application Logic
   ========================================================================== */

const PHONE_NUMBER = "919898487879";

// Products Data Array
const productsData = [
  {
    id: "p1",
    name: "Round Neck T-Shirts",
    category: "tshirts",
    tag: "Best Seller",
    image: "assets/round_neck_tshirts.jpg",
    desc: "100% Combed & Bio-Washed Cotton round neck t-shirts available in 20+ vibrant plain colors. Ideal for printing & casual retail.",
    fabric: "100% Cotton / Bio-Wash (180-220 GSM)",
    sizes: "S, M, L, XL, XXL",
    moq: "30 Pieces / Bundle",
    colors: "Black, Navy, Royal Blue, White, Red, Maroon, Olive + 15 more",
    features: "Pre-shrunk fabric, double needle stitched neckline, soft hand feel."
  },
  {
    id: "p2",
    name: "Polo T-Shirts",
    category: "tshirts",
    tag: "Premium",
    image: "assets/polo_tshirts.jpg",
    desc: "Classic Matty / Pique knit collared polo t-shirts with durable ribbed collars and cuffs. Excellent for corporate and casual wear.",
    fabric: "Cotton-Poly Pique Matty (220-240 GSM)",
    sizes: "M, L, XL, XXL",
    moq: "24 Pieces",
    colors: "Royal Blue, Navy, White, Charcoal, Black, Mustard",
    features: "Durable collar stability, color-fast dyeing, premium button finish."
  },
  {
    id: "p3",
    name: "Sports T-Shirts",
    category: "sportswear",
    tag: "Activewear",
    image: "assets/sports_tshirts.jpg",
    desc: "High-performance sports t-shirts featuring contrast side panels and ventilation mesh for maximum agility during athletic activities.",
    fabric: "Micro-Polyester Interlock (160 GSM)",
    sizes: "M, L, XL, XXL",
    moq: "30 Pieces",
    colors: "Neon Green, Royal Blue, Bright Red, Orange, Navy",
    features: "Lightweight, breathable panels, stretchable fit, quick moisture evaporation."
  },
  {
    id: "p4",
    name: "Dry Fit T-Shirts",
    category: "sportswear",
    tag: "Top Rated",
    image: "assets/dryfit_tshirts.jpg",
    desc: "Ultra-lightweight dry fit t-shirts engineered with sweat-wicking technology. Keeps athletes cool and comfortable.",
    fabric: "100% Micro Polyester Dry-Fit Dot Knit",
    sizes: "S, M, L, XL, XXL",
    moq: "30 Pieces",
    colors: "Melange Gray, Navy, Black, Electric Blue, Fluorescent Yellow",
    features: "Quick-dry property, anti-bacterial finish, UV protection."
  },
  {
    id: "p5",
    name: "Track Pants",
    category: "trackpants",
    tag: "High Demand",
    image: "assets/track_pants.jpg",
    desc: "Durable athletic track pants with zipper pockets, elastic waistband, and internal drawstrings. Perfect for sports and gym.",
    fabric: "Poly-NS / Super-Poly Heavy Fabric",
    sizes: "M, L, XL, XXL",
    moq: "20 Pieces",
    colors: "Dark Navy, Black, Charcoal Gray, Light Gray",
    features: "Dual deep zipper pockets, elastic ribbing, heavy duty stitching."
  },
  {
    id: "p6",
    name: "Lower (Sports Lower)",
    category: "lower",
    tag: "Wholesale Hot",
    image: "assets/cotton_lower.jpg",
    desc: "Multi-utility daily wear sports lower crafted for athletic comfort. Designed with side piping and flexible stretch.",
    fabric: "Poly-Cotton / Spandex Blend",
    sizes: "M, L, XL, XXL",
    moq: "24 Pieces",
    colors: "Black, Dark Gray, Navy Blue, Wine",
    features: "4-way stretch fabric, non-fading dyes, reinforced pocket seams."
  },
  {
    id: "p7",
    name: "Cotton Lower",
    category: "lower",
    tag: "Comfort Fit",
    image: "assets/cotton_lower.jpg",
    desc: "Super-soft pure cotton French Terry lower and joggers for relaxed daily lounging, home wear, and casual walking.",
    fabric: "100% Cotton Loopknit / Terry (240 GSM)",
    sizes: "M, L, XL, XXL",
    moq: "20 Pieces",
    colors: "Melange Gray, Black, Navy, Olive Green, Steel Blue",
    features: "Breathable natural fabric, rib cuffs at ankle, soft inner finish."
  },
  {
    id: "p8",
    name: "Sports Shorts",
    category: "shorts",
    tag: "Summer Special",
    image: "assets/sports_shorts.jpg",
    desc: "Breathable athletic sports shorts with elastic waist and secure pockets. Ideal for running, football, cricket, and fitness.",
    fabric: "Micro-Active / Dry Fit Poly",
    sizes: "M, L, XL, XXL",
    moq: "40 Pieces",
    colors: "Black, Navy, Royal Blue, Red, Gray",
    features: "Lightweight mobility, quick drying, durable drawstrings."
  },
  {
    id: "p9",
    name: "Men Capri (3/4th Pants)",
    category: "capri",
    tag: "Trending",
    image: "assets/men_capri.jpg",
    desc: "Comfortable knee-length 3/4th capris with multiple pockets and elastic waistband. Highly popular for summer retail stock.",
    fabric: "Cotton-Poly Blend / Twill Matty",
    sizes: "M, L, XL, XXL",
    moq: "24 Pieces",
    colors: "Beige, Olive, Dark Gray, Navy, Black",
    features: "Knee length cut, multi-pocket convenience, soft waist feel."
  },
  {
    id: "p10",
    name: "Gym Wear Collection",
    category: "gymwear",
    tag: "Fitness Line",
    image: "assets/gym_wear.jpg",
    desc: "Specialized fitness wear including gym stringers, compression tops, and performance vests tailored for intense workouts.",
    fabric: "Poly-Spandex / Elastane Active Stretch",
    sizes: "S, M, L, XL",
    moq: "30 Pieces",
    colors: "Black, Gunmetal Gray, Army Green, Electric Blue",
    features: "4-way compression stretch, ergonomic seam positioning, anti-odor."
  },
  {
    id: "p11",
    name: "Men's Sportswear Sets",
    category: "sportswear",
    tag: "Complete Set",
    image: "assets/sports_tshirts.jpg",
    desc: "Matching sportswear combos (T-Shirt + Shorts / Track Pants) packaged in bulk bundles for sports shops and club teams.",
    fabric: "High-grade Dry-Fit & Micro Polyester",
    sizes: "M, L, XL, XXL",
    moq: "15 Sets",
    colors: "Team Blue/White, Navy/Red, Black/Neon",
    features: "Matching color schemes, club logo ready, high durability."
  },
  {
    id: "p12",
    name: "Kids Sportswear",
    category: "kids",
    tag: "Junior Range",
    image: "assets/kids_sportswear.jpg",
    desc: "Vibrant and durable kids sports t-shirts, track suits, and lowers designed for school sports and active children.",
    fabric: "Soft Cotton-Poly Interlock (Skin Friendly)",
    sizes: "24, 26, 28, 30, 32, 34, 36 (Ages 4-14)",
    moq: "36 Pieces",
    colors: "Bright Red, Yellow, Sky Blue, Royal Blue, Green",
    features: "Skin safe dyes, extra seam strength for kids' active use."
  }
];

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  const productsGrid = document.getElementById("productsGrid");
  const searchInput = document.getElementById("searchInput");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalClose = document.getElementById("modalClose");
  const modalBody = document.getElementById("modalBody");
  const navbar = document.querySelector(".navbar");
  const backToTopBtn = document.getElementById("backToTop");
  const mobileToggle = document.getElementById("mobileToggle");
  const navLinks = document.querySelector(".nav-links");
  const contactForm = document.getElementById("wholesaleInquiryForm");

  let currentCategory = "all";
  let searchQuery = "";

  // Render Products Function
  function renderProducts() {
    if (!productsGrid) return;
    productsGrid.innerHTML = "";

    const filtered = productsData.filter(item => {
      const matchesCategory = (currentCategory === "all") || (item.category === currentCategory);
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.fabric.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <i class="fas fa-box-open" style="font-size: 3rem; color: #94a3b8; margin-bottom: 1rem;"></i>
          <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">No Garments Found</h3>
          <p style="color: #64748b;">Try adjusting your search term or select another category tab above.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      
      const waMsg = encodeURIComponent(`Hello JSR Dheeraj Hosiery & Ananya Sports,\n\nI am interested in wholesale pricing for:\nProduct: ${product.name}\nMOQ: ${product.moq}\n\nPlease share catalog, color chart and wholesale rate list.`);
      const waLink = `https://wa.me/${PHONE_NUMBER}?text=${waMsg}`;

      card.innerHTML = `
        <div class="product-img-wrap">
          <span class="product-tag">${product.tag}</span>
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <button class="product-quick-view" onclick="openQuickView('${product.id}')" title="Quick Specs">
            <i class="fas fa-eye"></i>
          </button>
        </div>
        <div class="product-content">
          <h3 class="product-title">${product.name}</h3>
          <p class="product-desc">${product.desc}</p>
          <div class="product-meta">
            <span>Fabric: <strong>${product.fabric.split('/')[0]}</strong></span>
            <span>MOQ: <strong>${product.moq}</strong></span>
          </div>
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
            <i class="fab fa-whatsapp"></i> Get Wholesale Price
          </a>
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

    // Close mobile menu on clicking nav link
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        if (mobileToggle.querySelector("i")) {
          mobileToggle.querySelector("i").className = "fas fa-bars";
        }
      });
    });
  }

  // Active Section Scroll Spy for Top Mobile Navigation & Desktop Header
  const sections = document.querySelectorAll("section[id], header[id]");
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
            // Auto scroll active link into view in horizontal mobile navbar
            if (window.innerWidth <= 768) {
              link.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
          }
        });
      }
    });
  }

  // Sticky Navbar Shadow & Active Link on Scroll
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

  // Back to top scroll
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

      const message = `Hello JSR Dheeraj Hosiery & Ananya Sports (Traders),\n\n*New Wholesale Inquiry*\n👤 Name: ${name}\n📱 Phone: ${phone}\n🏙️ City: ${city}\n🏪 Business Type: ${customerType}\n📦 Requirements: ${requirement}\n\nPlease share pricing details and wholesale catalog.`;

      const targetUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(targetUrl, '_blank');
    });
  }

  // Close Modal Handler
  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
});

// Category Quick Filter from Category Cards
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

// Global Quick View Function
function openQuickView(productId) {
  const item = productsData.find(p => p.id === productId);
  if (!item) return;

  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalBody = document.getElementById("modalBody");
  if (!modalBackdrop || !modalBody) return;

  const waMsg = encodeURIComponent(`Hello JSR Dheeraj Hosiery & Ananya Sports,\n\nI want to inquire about bulk wholesale order for:\nItem: ${item.name}\nFabric: ${item.fabric}\nMOQ: ${item.moq}\n\nPlease send wholesale price per piece and available color options.`);
  const waLink = `https://wa.me/${PHONE_NUMBER}?text=${waMsg}`;

  modalBody.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrap">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="modal-details">
        <span class="badge badge-primary" style="align-self: flex-start; margin-bottom: 0.5rem;">${item.tag}</span>
        <h3 class="modal-title">${item.name}</h3>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${item.desc}</p>
        
        <div class="modal-specs">
          <div class="spec-item">
            <span>Fabric Quality</span>
            <span>${item.fabric}</span>
          </div>
          <div class="spec-item">
            <span>Available Sizes</span>
            <span>${item.sizes}</span>
          </div>
          <div class="spec-item">
            <span>Minimum Order Quantity</span>
            <span>${item.moq}</span>
          </div>
          <div class="spec-item">
            <span>Color Options</span>
            <span>${item.colors}</span>
          </div>
          <div class="spec-item">
            <span>Key Feature</span>
            <span>${item.features}</span>
          </div>
        </div>

        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="margin-top: auto; padding: 1rem;">
          <i class="fab fa-whatsapp" style="font-size: 1.2rem;"></i> Ask Wholesale Price on WhatsApp
        </a>
      </div>
    </div>
  `;

  modalBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modalBackdrop = document.getElementById("modalBackdrop");
  if (modalBackdrop) {
    modalBackdrop.classList.remove("active");
  }
  document.body.style.overflow = "auto";
}
