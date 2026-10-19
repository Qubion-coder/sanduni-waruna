/**
 * Sanduni & Waruna — wedding invitation form handler (Google Apps Script)
 *
 * Receives RSVP and Blessing/Wish submissions from the website and writes
 * them into two separate tabs of the spreadsheet:
 *   • "RSVP"   → Date & Time | Guest Name | Attending
 *   • "Wishes" → Date & Time | Name | Blessing / Wish
 *
 * Setup:
 *   1. Open the spreadsheet → Extensions → Apps Script, paste this file.
 *   2. Run `setupSheets` once (approve permissions) to create both tabs with headers.
 *   3. Deploy → New deployment → Web app
 *        Execute as: Me    |    Who has access: Anyone
 *   4. Copy the Web app URL into NEXT_PUBLIC_GOOGLE_SCRIPT_URL (.env and Vercel).
 */

var SPREADSHEET_ID = '18nAjeHvRJzfjAh-1jlouT089iw_csuMAZtL9HD0dE1A';
var TIMEZONE = 'Asia/Colombo';

var SHEETS = {
  rsvp: {
    name: 'RSVP',
    headers: ['Date & Time', 'Guest Name', 'Attending'],
    widths: [180, 280, 200],
  },
  wish: {
    name: 'Wishes',
    headers: ['Date & Time', 'Name', 'Blessing / Wish'],
    widths: [180, 240, 520],
  },
};

/** Run once from the Apps Script editor to create both tabs with styled headers. */
function setupSheets() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  getOrCreateSheet_(ss, SHEETS.rsvp);
  getOrCreateSheet_(ss, SHEETS.wish);
}

function doGet() {
  return ContentService
    .createTextOutput('Sanduni & Waruna invitation script is running. Send a POST request to submit data.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000); // avoid two guests overwriting the same row

    var body = e && e.postData && e.postData.contents ? e.postData.contents : '{}';
    var payload = JSON.parse(body);
    var formType = String(payload.formType || '').toLowerCase();

    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var submittedAt = formatDate_(payload.submittedAt);
    var name = clean_(payload.name);

    if (formType === 'rsvp') {
      var rsvpSheet = getOrCreateSheet_(ss, SHEETS.rsvp);
      var attending = String(payload.attending || '').toLowerCase() === 'yes'
        ? 'Yes, will attend'
        : 'Regretfully declines';
      rsvpSheet.appendRow([submittedAt, name, attending]);
    } else if (formType === 'wish') {
      var wishSheet = getOrCreateSheet_(ss, SHEETS.wish);
      wishSheet.appendRow([submittedAt, name, clean_(payload.message)]);
    } else {
      throw new Error('Invalid formType. Expected "rsvp" or "wish".');
    }

    return json_({ success: true });
  } catch (err) {
    return json_({ success: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

/* ---------- helpers ---------- */

function getOrCreateSheet_(ss, config) {
  var sheet = ss.getSheetByName(config.name) || ss.insertSheet(config.name);

  if (sheet.getLastRow() === 0) {
    var header = sheet.getRange(1, 1, 1, config.headers.length);
    header.setValues([config.headers])
      .setFontWeight('bold')
      .setFontColor('#ffffff')
      .setBackground('#7a5a3c')
      .setHorizontalAlignment('center')
      .setVerticalAlignment('middle');
    sheet.setRowHeight(1, 32);
    sheet.setFrozenRows(1);
    config.widths.forEach(function (w, i) { sheet.setColumnWidth(i + 1, w); });
    sheet.getRange('A:Z').setWrap(true).setVerticalAlignment('top');
    header.setVerticalAlignment('middle');
  }
  return sheet;
}

function formatDate_(value) {
  var d = value ? new Date(value) : new Date();
  if (isNaN(d.getTime())) d = new Date();
  return Utilities.formatDate(d, TIMEZONE, 'yyyy-MM-dd hh:mm a');
}

// Trim, cap length, and stop values being treated as spreadsheet formulas.
function clean_(value) {
  var s = String(value || '').trim().slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
