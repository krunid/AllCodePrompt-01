let generatedPrompts = [];

function generatePrompts() {
  const subject = document.getElementById('subject').value;
  const concept = document.getElementById('customConcept').value.trim() || document.getElementById('concept').value;
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = "";
  generatedPrompts = [];

  for (let i = 1; i <= 10; i++) {
    const th = `Prompt ภาษาไทย #${i}: เกม "${concept}" สำหรับวิชา "${subject}" ที่นักเรียนสามารถเรียนรู้ได้อย่างสนุก โดยมีกติกา... [ต่อให้ครบ 500 คำ]`;
    const en = `Prompt English #${i}: Create an educational game on "${subject}" using the concept "${concept}", designed to engage learners... [500 words]`;
    generatedPrompts.push({ th, en });

    resultsDiv.innerHTML += `
      <div class="bg-white p-4 rounded shadow">
        <h2 class="font-bold">Prompt ${i}</h2>
        <div class="grid md:grid-cols-2 gap-2">
          <textarea readonly class="w-full p-2 border">${th}</textarea>
          <textarea readonly class="w-full p-2 border">${en}</textarea>
        </div>
      </div>`;
  }
}

function saveToSheet() {
  if (!generatedPrompts.length) return alert("กรุณาสร้าง Prompt ก่อน");
  fetch("https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec", {
    method: "POST",
    body: JSON.stringify(generatedPrompts),
  })
  .then(res => res.json())
  .then(data => alert("✅ บันทึกเรียบร้อยแล้ว!"))
  .catch(err => alert("❌ เกิดข้อผิดพลาด"));
}
