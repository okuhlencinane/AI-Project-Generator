document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#poem-generator-form");
  const poemContainer = document.querySelector("#poem");
  const copyBtn = document.querySelector("#copyBtn");
  const loading = document.querySelector(".loading");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    //let apiKey = '37o01tf961eb43e8aa46dbf5fa9e5225';
    const topicInput = form.querySelector("input[type='text']");
    const topic = topicInput.value.trim();
    if (!topic) return;

    poemContainer.innerHTML = "";
    copyBtn.style.display = "none";
    loading.style.display = "block";
    const poemText = await generatePoem(topic);

    loading.style.display = "none";
    const typewriter = new Typewriter(poemContainer, {
      delay: 40,
      cursor: "",
    });
    typewriter.typeString(poemText.replace(/\n/g, "<br>")).start();

    copyBtn.style.display = "inline-block";
  });
  copyBtn.addEventListener("click", () => {
    const text = poemContainer.innerText;
    navigator.clipboard.writeText(text).then(() => {
      copyBtn.textContent = "✅ Copied!";
      setTimeout(() => (copyBtn.textContent = "📋 Copy Poem"), 2000);
    });
  });
});
async function generatePoem(topic) {
  await new Promise((r) => setTimeout(r, 1200));
  return `In ${topic} dreams softly bloom,\nWhispers echo in gentle gloom.\nStars paint stories across the sky,\nWhere love and wonder never die.`
}

