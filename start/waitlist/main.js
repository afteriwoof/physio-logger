(function () {
  const form = document.getElementById("waitlistForm");
  const msg = document.getElementById("formMsg");
  if (!form || !msg) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.className = "msg";
    msg.textContent = "Submitting…";

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      });

      if (res.ok) {
        form.reset();
        msg.className = "msg ok";
        msg.textContent = "You’re on the list. I’ll email when there’s something concrete to try.";
      } else {
        msg.className = "msg err";
        msg.textContent = "Something went wrong. Please try again, or refresh and retry.";
      }
    } catch (err) {
      msg.className = "msg err";
      msg.textContent = "Network error. Please check your connection and try again.";
    }
  });
})();
