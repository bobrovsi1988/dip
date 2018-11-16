var link = document.querySelector('link[rel=import]');

function pasteHtml(index_id, pattern_id) {

    var import_pattern= link.import.querySelector('#'+pattern_id);

    var header_link = document.getElementById(index_id);
   return header_link.appendChild(import_pattern.cloneNode(true));
}
pasteHtml("header_paste", "header");

pasteHtml('footer_paste', 'footer');
pasteHtml('left_menu_paste', 'left');
