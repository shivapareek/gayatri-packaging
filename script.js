// navbar

const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const navLinks = document.getElementById("mobile-navLinks");

const openMenuHandler = () => {
       navLinks.classList.remove("-translate-x-full")
       navLinks.classList.add("translate-x-0")
}

const closeMenuHandler = () => {
      navLinks.classList.remove("translate-x-0")
      navLinks.classList.add("-translate-x-full")
}

openMenu.addEventListener("click", openMenuHandler);
closeMenu.addEventListener("click", closeMenuHandler);

document.getElementById("quote-btn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });

  document.getElementById("get-started-btn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });
  });
  document.getElementById("explore-products").addEventListener("click", function () {
    document.getElementById("products").scrollIntoView({
      behavior: "smooth"
    });
  });




  const form = document.getElementById("contact-form");
  const toastContainer = document.getElementById("toast-container");

  function showToast() {
    const toast = document.createElement("div");
    toast.className = "bg-white inline-flex space-x-3 p-3 text-sm rounded shadow-lg border border-gray-200 animate-fadeIn";
    toast.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M16.5 8.31V9a7.5 7.5 0 1 1-4.447-6.855M16.5 3 9 10.508l-2.25-2.25" 
            stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>
            <h3 class="text-slate-700 font-medium">Successfully submitted!</h3>
            <p class="text-slate-500">We will contact you shortly.</p>
        </div>
        <button onclick="this.parentElement.remove()" 
            class="cursor-pointer mb-auto text-slate-400 hover:text-slate-600 active:scale-95 transition">
            <svg width="14" height="14" viewBox="0 0 14 14">
                <rect y="12.532" width="17.498" height="2.1" rx="1.05" transform="rotate(-45.74 0 12.532)"/>
                <rect x="12.531" y="13.914" width="17.498" height="2.1" rx="1.05" transform="rotate(-135.74 12.531 13.914)"/>
            </svg>
        </button>
    `;

    toastContainer.appendChild(toast);

    // Auto remove toast after 4 sec
    setTimeout(() => toast.remove(), 4000);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    await fetch(form.action, {
      method: "POST",
      body: formData
    });

    showToast();
    form.reset();
  });


