const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector(".navlist");

hamburger.addEventListener("click", () => {
  navlist.classList.toggle("navlist-active");
});
const newsletterForm = document.querySelector(".footer-col form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector("input");
    const email = emailInput.value.trim();

    if (email === "" || !email.includes("@")) {
      alert("⚠️ Please enter a valid email address");
      return;
    }

    alert(`✅ Thank you for subscribing, ${email}!`);
    emailInput.value = ""; // clear input
  });
}
