// TAB LINKLARI UCHUN
const elsTabsitem = document.querySelectorAll(".tabs__item");//tab linklarni o'rab turuvchi har bir lilarni hammasidan tabs__item klasini topib olayapdi
const elsTablink = document.querySelectorAll(".js-tab-link");//Tab linklarni js li klaslari tanlab olinayapdi

elsTablink.forEach(function(elTablink) {//elsTablinklarni har birini funksiya kiritin elTablink nomi bilan bog'lab olayapmiz
  elTablink.addEventListener('click', function (evt) {//elTablinkni klic hodisasiga quluoq soldirayapmiz va evt funksiyasini kiritib olayapmiz
    evt.preventDefault();//agar click hodisa ro'y berganda yani linklar bosilganda linklarni ishlashdan to'xtatayapmiz bun link bosilganda sahifa ko'tarilib ketmasligi uchun


    //Tab link bosilganda tab itemlardan actic clasini olib tashlaymiz
    elsTabsitem.forEach(function(elTabsitem) {//Tab itemlarni har birini elTabsitem noi bilan nomlab olayapmiz
      elTabsitem.classList.remove('tabs__item--active')//link bosilganda tabs itemdan activ klasini olib tashlayapmiz
    })

    //Qaysi tab link bosilsa o'shaning otasi tab itemga activ klasini qo'shamiz
    elTablink.parentElement.classList.add('tabs__item--active')
    console.log(elTablink.href.split('#')[1]);
  })
})
