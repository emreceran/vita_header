document.addEventListener('DOMContentLoaded', function() {
    // Tüm `Mega Menu` öğelerini seç
    const megaMenus = document.querySelectorAll('[data-name="Mega Menu"]');
    const topMenu = document.querySelector('#top_menuu');
    

    // Her bir Mega Menu için olay dinleyicileri ekle
    megaMenus.forEach((menu) => {
    const dropdownToggle = menu.closest('.dropdown').querySelector('[data-bs-toggle="dropdown"]');
    
    if (dropdownToggle) {
        // Menü açılma kontrol değişkeni
        let isMenuOpen = false;

        // Menü açıldığında
        topMenu.addEventListener('mouseenter', () => {
        if (!isMenuOpen) { // Eğer menü zaten açık değilse animasyonu uygula
            menu.classList.add('active'); // Açılma animasyonu
            isMenuOpen = true; // Menü açık olarak işaretle
        }
        });

        // Menü kapandığında
        topMenu.addEventListener('mouseleave', () => {
        menu.classList.remove('active'); // Kapanma animasyonu
        isMenuOpen = false; // Menü kapalı olarak işaretle
        });

        // Menü üzerinde gezinme
        menu.addEventListener('mouseenter', () => {
        isMenuOpen = true; // Menü üzerinde gezinirken açık kalsın
        });

        // Menüden çıkıldığında kapatma
        menu.addEventListener('mouseleave', () => {
        menu.classList.remove('active'); // Kapat
        isMenuOpen = false; // Menü kapalı olarak işaretle
        });
    }
    });


        // #top_menu içindeki ilk 4 li elemanını seç
    const firstFourItems = document.querySelectorAll('#top_menuu > li:nth-child(-n+4)');
    const megaNav = document.querySelector('#mega_nav');
    megaNav.style.borderRadius = '50rem';
    // İlk dört eleman üzerine geldiğinde işlem yap
    firstFourItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        megaNav.style.borderRadius = '28px 28px 0 0';
    });

    item.addEventListener('mouseleave', () => {
        megaNav.style.borderRadius = '50rem';
    });
    });

  });
  