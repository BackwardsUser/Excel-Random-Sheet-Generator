function main(workbook: ExcelScript.Workbook) {

  // Random Variable Size
  var max: number = 500;
  var min: number = 64;

  // Table Size
  var height: number = 20;
  var width: number = 16;

  // Main Script
  for (var x: number = 0; x < width; x++) {
    for (var y: number = 0; y < height; y++) {
      var ranNum: number = Math.random();
      if (ranNum > 0.5) {
        var ran: number = Math.floor(Math.random() * (max - min + 1)) + min;
        workbook.getActiveWorksheet().getCell(y, x).setValue(ran);
      }
    }
  }
}
