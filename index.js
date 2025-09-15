const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    'nav-item-1': 'Eğitimler',
    'nav-item-2': 'Eğitmenler',
    'nav-item-3': 'Sorular',
    'nav-item-4': 'Blog',
    'nav-item-5': 'Hakkımızda',
    'nav-item-6': 'İletişim',
  },
  cta: {
    h1: 'Full Stack Web Developer',
    button: 'Kayıt Olun',
  },
  'top-content': {
    'left-h4': 'Kabul Şartları',
    'left-content':
      'Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.',
    'right-h4': 'Haftalık Program',
    'right-content':
      'Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.',
  },
  'bottom-content': {
    'left-h4': 'EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.',
    'left-content':
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    'middle-h4': "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    'middle-content':
      'Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.',
    'right-h4':
      'ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ',
    'right-content':
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    'contact-h4': 'İLETİŞİM',
    address: 'Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye',
    phone: '+90 (216) 550-5905',
    email: 'bilgi@birsirketsitesi.com.tr',
  },
  footer: {
    copyright: 'Copyright Bir Şirket Sitesi 2023',
  },
  images: {
    'logo-img': 'https://i.ibb.co/42PDMF2/logo.png',
    'cta-img': 'https://i.ibb.co/XssVKxk/cta.png',
    'accent-img': 'https://i.ibb.co/5FZmL26/accent.png',
  },
};

/* Kodlar Buradan aşağıya */


const navItems = document.querySelectorAll('header nav a');
const navTexts = Object.values(siteContent.nav);

navItems.forEach((link, i) => {
  link.textContent = navTexts[i];
  link.classList.add('italic');
});


const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent.images['logo-img']);


const ctaHeading = document.querySelector('.cta h1');
ctaHeading.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent.images['cta-img']);


const topContent = document.querySelectorAll('.top-content .text-content');
topContent[0].querySelector('h4').textContent =
  siteContent['top-content']['left-h4'];
topContent[0].querySelector('p').textContent =
  siteContent['top-content']['left-content'];

topContent[1].querySelector('h4').textContent =
  siteContent['top-content']['right-h4'];
topContent[1].querySelector('p').textContent =
  siteContent['top-content']['right-content'];


const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent.images['accent-img']);


const bottomContent = document.querySelectorAll(
  '.bottom-content .text-content'
);
bottomContent[0].querySelector('h4').textContent =
  siteContent['bottom-content']['left-h4'];
bottomContent[0].querySelector('p').textContent =
  siteContent['bottom-content']['left-content'];

bottomContent[1].querySelector('h4').textContent =
  siteContent['bottom-content']['middle-h4'];
bottomContent[1].querySelector('p').textContent =
  siteContent['bottom-content']['middle-content'];

bottomContent[2].querySelector('h4').textContent =
  siteContent['bottom-content']['right-h4'];
bottomContent[2].querySelector('p').textContent =
  siteContent['bottom-content']['right-content'];


const contactSection = document.querySelector('.contact');
const contactH4 = contactSection.querySelector('h4');
const contactPs = contactSection.querySelectorAll('p');

contactH4.textContent = siteContent.contact['contact-h4'];
contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;


const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;
footerLink.classList.add('bold');
