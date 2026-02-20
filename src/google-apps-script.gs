/**
 * Google Apps Script (Backend Code)
 * 
 * Instructions:
 * 1. Go to script.google.com
 * 2. Create a new project.
 * 3. Paste this code into Code.gs
 * 4. Deploy as Web App (Execute as: Me, Who has access: Anyone)
 * 5. Copy the Web App URL and update it in your frontend code if it changes.
 */

function doPost(e) {
  try {
    // 👉 Use your sheet name (change if needed)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Contact Submissions');
    
    // Parse JSON body from your website
    const data = JSON.parse(e.postData.contents);
    
    // Map form fields to columns in the same order as your sheet
    const row = [
      new Date(),                          // A: Timestamp (auto)
      data.fullName || '',                 // B: Full Name
      data.email || '',                     // C: Email
      data.phone || '',                      // D: Phone
      data.service || '',                     // E: Service Needed
      data.message || '',                      // F: Trip Details
      data.contactMethod || '',                  // G: Contact Method
      'New',                                 // H: Status (you can track progress)
      ''                                      // I: Notes (for your internal use)
    ];
    
    sheet.appendRow(row);
    
    // Success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    // Error response
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
