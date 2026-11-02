document.addEventListener("DOMContentLoaded", function () {

  const MENU_ITEMS = [
    { id: "cappuccino",    name: "Classic Cappuccino",    price: 149, category: "coffee",   badge: "bestseller",
      desc: "Double espresso layered with silky steamed milk and a dust of cocoa.",
      img: "https://images.unsplash.com/photo-1559001724-fbad036dbc9e?q=80&w=800&auto=format&fit=crop" },
    { id: "latte",         name: "Café Latte",            price: 139, category: "coffee",   badge: "",
      desc: "Smooth espresso crowned with creamy milk and delicate latte art.",
      img: "https://images.unsplash.com/photo-1503240778100-fd245e17a273?q=80&w=800&auto=format&fit=crop" },
    { id: "espresso",      name: "Espresso Shot",         price: 99,  category: "coffee",   badge: "",
      desc: "A bold, aromatic single shot pulled fresh from our house blend.",
      img: "https://images.unsplash.com/photo-1608415123476-aca7a5da0abe?q=80&w=800&auto=format&fit=crop" },
    { id: "mocha",         name: "Hazelnut Mocha",        price: 159, category: "coffee",   badge: "",
      desc: "Espresso swirled with rich hazelnut chocolate and velvety milk.",
      img: "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=800&auto=format&fit=crop" },

    { id: "margherita",    name: "Margherita Pizza",      price: 249, category: "food",     badge: "bestseller",
      desc: "Wood-fired classic with tangy tomato sauce, mozzarella and basil.",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
    { id: "farmhouse",     name: "Farmhouse Pizza",       price: 299, category: "food",     badge: "chef",
      desc: "Garden-fresh peppers, onions and mushrooms on a cheesy wood-fired base.",
      img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=800&auto=format&fit=crop" },
    { id: "signature-pizza", name: "Signature Pizza",     price: 349, category: "food",     badge: "chef",
      desc: "Our chef's masterpiece — peri-peri glaze, roasted tomatoes and premium cheese.",
      img: "https://images.unsplash.com/photo-1655673654158-9f7285b7d1ea?q=80&w=800&auto=format&fit=crop" },
    { id: "burger",        name: "Smoky BBQ Burger",      price: 179, category: "food",     badge: "",
      desc: "Juicy smoky BBQ patty stacked with crispy lettuce and house sauce.",
      img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800&auto=format&fit=crop" },
    { id: "pasta",         name: "Creamy Alfredo Pasta",  price: 219, category: "food",     badge: "",
      desc: "Penne tossed in a slow-cooked creamy Alfredo with herbs and garlic.",
      img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=800&auto=format&fit=crop" },

    { id: "cold-coffee",   name: "Cold Coffee",           price: 159, category: "drinks",   badge: "bestseller",
      desc: "Blended cold brew with milk and a scoop of vanilla ice cream.",
      img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop" },
    { id: "lemon-tea",     name: "Iced Lemon Tea",        price: 119, category: "drinks",   badge: "",
      desc: "Chilled black tea with lemon and a hint of mint over ice.",
      img: "https://images.unsplash.com/photo-1619604395920-a16f33192a50?q=80&w=800&auto=format&fit=crop" },
    { id: "mojito",        name: "Virgin Mojito",         price: 139, category: "drinks",   badge: "",
      desc: "Cool lime, fresh mint and sparkling soda — the ultimate refresher.",
      img: "https://images.unsplash.com/photo-1766566676237-2765703901f3?q=80&w=800&auto=format&fit=crop" },

    { id: "lava-cake",     name: "Chocolate Lava Cake",   price: 169, category: "desserts", badge: "chef",
      desc: "Warm chocolate cake with a gooey molten centre and vanilla scoop.",
      img: "https://images.unsplash.com/photo-1700448293876-07dca826c161?q=80&w=800&auto=format&fit=crop" },
    { id: "cheesecake",    name: "New York Cheesecake",   price: 189, category: "desserts", badge: "",
      desc: "Silky baked cheesecake on a buttery crumb with blueberry topping.",
      img: "https://images.unsplash.com/photo-1702925614886-50ad13c88d3f?q=80&w=800&auto=format&fit=crop" },
    { id: "brownie",       name: "Fudgy Brownie",         price: 149, category: "desserts", badge: "",
      desc: "Dense fudgy brownie drizzled with warm chocolate sauce.",
      img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop" }
  ];

  const navbar      = document.getElementById("mainNavbar");
  const navLinks    = document.querySelectorAll(".nav-link");
  const navMenu     = document.getElementById("navMenu");
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon   = document.getElementById("themeIcon");

  const cartBtn     = document.getElementById("cartBtn");
  const cartCount   = document.getElementById("cartCount");
  const cartModalEl = document.getElementById("cartModal");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");
  const cartModalCount = document.getElementById("cartModalCount");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const checkoutBtn  = document.getElementById("checkoutBtn");

  const menuGrid    = document.getElementById("menuGrid");
  const menuEmpty   = document.getElementById("menuEmpty");
  const menuSearch  = document.getElementById("menuSearch");
  const filterBtns  = document.querySelectorAll(".filter-btn");
  const exploreBtns = document.querySelectorAll(".explore-link");

  const backToTop   = document.getElementById("backToTop");
  const toastBox    = document.getElementById("toastBox");
  const yearEl      = document.getElementById("year");

  function showToast(message, type = "success") {
    const icons = { success: "bi-check-circle-fill", error: "bi-x-circle-fill", info: "bi-info-circle-fill" };
    const toast = document.createElement("div");
    toast.className = `toast-msg ${type}`;
    toast.innerHTML = `<i class="bi ${icons[type] || icons.info}"></i> <span></span>`;
    toast.querySelector("span").textContent = message;
    toastBox.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("hide-out");
      setTimeout(() => toast.remove(), 320);
    }, 2800);
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeIcon.className = theme === "dark" ? "bi bi-sun-fill" : "bi bi-moon-stars-fill";
  }

  applyTheme(localStorage.getItem("bitebrew-theme") || "light");

  themeToggle.addEventListener("click", function () {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem("bitebrew-theme", next);
    applyTheme(next);
  });

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
    backToTop.classList.toggle("show", window.scrollY > 400);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  document.querySelectorAll("section[id], header[id]").forEach(function (sec) {
    sectionObserver.observe(sec);
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  document.body.classList.add("js-reveal"); 

  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    revealObserver.observe(el);
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  let activeCategory = "all";
  let searchTerm = "";

  function badgeHTML(badge) {
    if (badge === "bestseller") return `<span class="badge-pill">Bestseller</span>`;
    if (badge === "chef") return `<span class="badge-pill chef">Chef's Pick</span>`;
    return "";
  }

  function renderMenu() {
    const query = searchTerm.trim().toLowerCase();

    const items = MENU_ITEMS.filter(function (item) {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    menuGrid.innerHTML = items
      .map(function (item, index) {
        return `
          <div class="col-sm-6 col-lg-4 col-xl-3">
            <article class="menu-card pop-in" style="animation-delay:${index * 60}ms">
              <div class="menu-card-media">
                <img src="${item.img}" alt="${item.name}" loading="lazy">
                ${badgeHTML(item.badge)}
              </div>
              <div class="menu-card-body">
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-desc">${item.desc}</p>
                <div class="menu-card-footer">
                  <span class="menu-item-price">₹${item.price}</span>
                  <button class="add-btn" data-add="${item.id}" data-testid="add-to-order-btn">
                    <i class="bi bi-bag-plus"></i> Add
                  </button>
                </div>
              </div>
            </article>
          </div>`;
      })
      .join("");

    menuEmpty.classList.toggle("d-none", items.length > 0);
  }

  menuSearch.addEventListener("input", function () {
    searchTerm = this.value;
    renderMenu();
  });

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      activeCategory = btn.dataset.filter;
      renderMenu();
    });
  });

  exploreBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.dataset.filter;
      filterBtns.forEach(function (b) {
        const isMatch = b.dataset.filter === target;
        b.classList.toggle("active", isMatch);
        if (isMatch) b.click(); 
      });
      document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    });
  });

  renderMenu();

  let cart = loadCart();

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem("bitebrew-cart"));
      return Array.isArray(saved) ? saved : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem("bitebrew-cart", JSON.stringify(cart));
  }

  function itemDetails(id) {
    return MENU_ITEMS.find(function (item) { return item.id === id; });
  }

  function updateCartUI() {
    const totalQty = cart.reduce(function (sum, entry) { return sum + entry.qty; }, 0);
    const total = cart.reduce(function (sum, entry) {
      const product = itemDetails(entry.id);
      return sum + (product ? product.price * entry.qty : 0);
    }, 0);

    cartCount.textContent = totalQty;
    cartModalCount.textContent = totalQty + (totalQty === 1 ? " item" : " items");
    cartTotalEl.textContent = "₹" + total.toLocaleString("en-IN");

    if (cart.length === 0) {
      cartItemsEl.innerHTML = `
        <div class="cart-empty">
          <i class="bi bi-bag-x"></i>
          <p>Your cart is empty — add something tasty from the menu.</p>
        </div>`;
      return;
    }

    cartItemsEl.innerHTML = cart
      .map(function (entry) {
        const product = itemDetails(entry.id);
        if (!product) return "";
        return `
          <div class="cart-item">
            <img src="${product.img}" alt="${product.name}" class="cart-item-img">
            <div class="cart-item-info">
              <h6>${product.name}</h6>
              <span>₹${product.price} each</span>
            </div>
            <div class="qty-stepper">
              <button data-cart-action="dec" data-id="${entry.id}" aria-label="Decrease quantity"><i class="bi bi-dash"></i></button>
              <span>${entry.qty}</span>
              <button data-cart-action="inc" data-id="${entry.id}" aria-label="Increase quantity"><i class="bi bi-plus"></i></button>
            </div>
            <strong class="cart-item-total">₹${(product.price * entry.qty).toLocaleString("en-IN")}</strong>
            <button class="cart-remove" data-cart-action="remove" data-id="${entry.id}" aria-label="Remove ${product.name}">
              <i class="bi bi-trash3"></i>
            </button>
          </div>`;
      })
      .join("");
  }

  function bumpCartBadge() {
    cartCount.classList.remove("bump");
    void cartCount.offsetWidth; // restart the animation
    cartCount.classList.add("bump");
  }

  function addToCart(id) {
    const product = itemDetails(id);
    if (!product) return;

    const entry = cart.find(function (item) { return item.id === id; });
    if (entry) {
      entry.qty += 1;
    } else {
      cart.push({ id: id, qty: 1 });
    }

    saveCart();
    updateCartUI();
    bumpCartBadge();
    showToast(`${product.name} added to your order`, "success");
  }

  menuGrid.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-add]");
    if (btn) addToCart(btn.dataset.add);
  });

  cartItemsEl.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-cart-action]");
    if (!btn) return;

    const entry = cart.find(function (item) { return item.id === btn.dataset.id; });
    if (!entry) return;

    if (btn.dataset.cartAction === "inc") entry.qty += 1;
    if (btn.dataset.cartAction === "dec") entry.qty -= 1;
    if (btn.dataset.cartAction === "remove" || entry.qty <= 0) {
      cart = cart.filter(function (item) { return item.id !== entry.id; });
    }

    saveCart();
    updateCartUI();
  });

  cartBtn.addEventListener("click", function () {
    bootstrap.Modal.getOrCreateInstance(cartModalEl).show();
  });

  clearCartBtn.addEventListener("click", function () {
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    updateCartUI();
    showToast("Cart cleared", "info");
  });

  checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) {
      showToast("Your cart is empty — add something tasty first", "error");
      return;
    }
    cart = [];
    saveCart();
    updateCartUI();
    bootstrap.Modal.getOrCreateInstance(cartModalEl).hide();
    showToast("Order placed! We have started preparing it", "success");
  });

  updateCartUI();

  document.getElementById("orderSpecialBtn").addEventListener("click", function () {
    addToCart("signature-pizza");
  });

  const reservationForm = document.getElementById("reservationForm");
  const resDate = document.getElementById("resDate");

  resDate.min = new Date().toISOString().split("T")[0];

  function markInvalid(input, isBad) {
    input.classList.toggle("is-invalid", isBad);
    return !isBad;
  }

  reservationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name  = document.getElementById("resName");
    const phone = document.getElementById("resPhone");
    const time  = document.getElementById("resTime");
    const guests = document.getElementById("resGuests");

    const digits = phone.value.replace(/\D/g, "");
    const nameOk    = markInvalid(name, name.value.trim().length < 3);
    const phoneOk   = markInvalid(phone, digits.length < 10 || digits.length > 12);
    const dateOk    = markInvalid(resDate, !resDate.value || resDate.value < resDate.min);
    const timeOk    = markInvalid(time, !time.value);
    const guestsOk  = markInvalid(guests, !guests.value);

    if (!(nameOk && phoneOk && dateOk && timeOk && guestsOk)) {
      showToast("Please fill in all the details correctly", "error");
      return;
    }

    showToast(`Thanks ${name.value.trim()}! Your table is booked for ${resDate.value} at ${time.value}`, "success");
    reservationForm.reset();
  });

  reservationForm.querySelectorAll(".form-control, .form-select").forEach(function (field) {
    field.addEventListener("input", function () { field.classList.remove("is-invalid"); });
  });

  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterEmail = document.getElementById("newsletterEmail");

  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail.value.trim());
    if (!emailOk) {
      showToast("Please enter a valid email address", "error");
      return;
    }
    showToast("Welcome to the Bite & Brew family!", "success");
    newsletterForm.reset();
  });

  yearEl.textContent = new Date().getFullYear();
});
