function showfeederdataDiv(){
    window.parent.postMessage("showfeederdataDiv", "*");
}
function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('gadtable');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fn || ('GridAuditDetails.' + (type || 'xlsx')));
}
