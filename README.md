# ระบบสร้าง Prompt เกม (Canva AI Compatible)

## ความสามารถ
- เลือกรายวิชา + แนวคิดเกม หรือกำหนดเอง
- สร้าง Prompt ภาษาไทย/อังกฤษ 10 ชุด
- บันทึกลง Google Sheets
- แสดงรายการที่เคยบันทึก

## วิธีใช้งาน
1. แก้ไข Script ID ใน `script.js` และ `view.html`
2. Deploy Google Apps Script (ดูใน Code.gs)
3. เปิด `index.html` เพื่อเริ่มใช้งาน

## Google Apps Script (Code.gs)
```js
function doPost(e) {
  const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Prompts");
  const prompts = JSON.parse(e.postData.contents);

  prompts.forEach((p, index) => {
    sheet.appendRow([new Date(), index + 1, p.th, p.en]);
  });

  return ContentService.createTextOutput(
    JSON.stringify({ status: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```
