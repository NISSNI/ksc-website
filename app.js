// ============================================
// KSC Website V2 — Multi-language Engine
// ============================================

const L = {
  nav: {
    home:      { zh:'首页',       en:'Home',       th:'หน้าแรก',        vi:'Trang chủ' },
    about:     { zh:'关于我们',   en:'About',      th:'เกี่ยวกับเรา',   vi:'Về chúng tôi' },
    products:  { zh:'产品中心',   en:'Products',   th:'ผลิตภัณฑ์',      vi:'Sản phẩm' },
    factory:   { zh:'生产基地',   en:'Factory',    th:'โรงงาน',        vi:'Nhà máy' },
    contact:   { zh:'联系我们',   en:'Contact',    th:'ติดต่อเรา',      vi:'Liên hệ' },
  },
  hero: {
    badge: { zh:'珠三角领先金属材料供应商', en:'Leading Metal Materials Supplier in PRD', th:'ผู้จัดหาวัสดุโลหะชั้นนำในเขตเจิ้งจู', vi:'Nha cung cap vat lieu kim loai hang dau vung Chinh Hai' },
    h1:    { zh:'高顺昌 — 金属材料专家', en:'KSC — Metal Materials Expert', th:'เคเอสซี — ผู้เชี่ยวชาญวัสดุโลหะ', vi:'KSC — Chuyen gia vat lieu kim loai' },
    p:     { zh:'专业销售特钢、矽钢片、铝材、不锈钢、铜材，提供分条/剪板/冷轧/退火等加工服务，深耕行业超过25年', en:'Specializing in Special Steel, Silicon Steel, Aluminum, Stainless Steel & Copper — with slitting, shearing, cold-rolling & annealing, 25+ years expertise', th:'เชี่ยวชาญเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดง พร้อมบริการตัด ม้วน และอบ มากกว่า 25 ปี', vi:'Chuyen ve Thep dac biet, Thep Silicon, Nhom, Thep khong gi & Dong — cat, uon, can lanh, u hon hon 25 nam' },
    btn1:  { zh:'查看产品', en:'View Products', th:'ดูผลิตภัณฑ์', vi:'Xem san pham' },
    btn2:  { zh:'联系我们', en:'Contact Us', th:'ติดต่อเรา', vi:'Lien he' },
  },
  sec: {
    about_h:  { zh:'关于我们', en:'About KSC', th:'เกี่ยวกับ KSC', vi:'Ve KSC' },
    about_p:  { zh:'高顺昌控股有限公司，25年深耕金属材料行业', en:'25+ years of expertise in metal materials & processing', th:'ความเชี่ยวชาญกว่า 25 ปีในวัสดุและการแปรรูปโลหะ', vi:'Hon 25 nam kinh nghiem trong vat lieu va gia cong kim loai' },
    mat_h:    { zh:'材料及应用', en:'Materials & Application', th:'วัสดุและการประยุกต์', vi:'Vat lieu va Ung dung' },
    mat_p:    { zh:'覆盖特钢、矽钢片、铝材、不锈钢、铜材全品类', en:'Full range of Special Steel, Silicon Steel, Aluminum, Stainless Steel & Copper', th:'วัสดุครบครัน ทั้งเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดง', vi:'Da dang day du: Thep dac biet, Thep Silicon, Nhom, Thep khong gi va Dong' },
    fac_h:    { zh:'五大生产基地', en:'Five Manufacturing Bases', th:'ห้าฐานการผลิต', vi:'Nam co so san xuat' },
    fac_p:    { zh:'覆盖中国、越南、泰国，加工产能领先', en:'Across China, Vietnam & Thailand — industry-leading capacity', th:'ครอบคลุมจีน เวียดนาม และไทย', vi:'Khap Trung Quoc, Viet Nam va Thai Lan' },
    cust_h:   { zh:'一流客户', en:'First-Rate Customers', th:'ลูกค้าระดับหัวแถว', vi:'Khach hang hang dau' },
    cust_p:   { zh:'我们为众多世界500强企业提供产品与服务', en:'Serving world-leading enterprises with premium materials', th:'ให้บริการวัสดุระดับพรีเมียมแก่องค์กรชั้นนำ', vi:'Phuc vu cac doanh nghiep hang dau the gioi' },
    proc_h:   { zh:'制程能力', en:'Process Capability', th:'ความสามารถในการผลิต', vi:'Nang luc san xuat' },
    proc_p:   { zh:'先进设备，精准加工，产能充足', en:'Advanced equipment, precision processing, ample capacity', th:'อุปกรณ์ทันสมัย การแปรรูปแม่นยำ', vi:'Thiet bi hien dai, gia cong chinh xac' },
    contact_h:{ zh:'联系我们', en:'Contact Us', th:'ติดต่อเรา', vi:'Lien he' },
    contact_p:{ zh:'期待与您携手合作', en:'We look forward to working with you', th:'เราหวังที่จะร่วมงานกับคุณ', vi:'Chung toi mong muon hop tac cung ban' },
  },
  about: {
    p1: { zh:'高顺昌控股有限公司（KSC）成立于2000年，总部位于香港，是一家专业从事特钢、矽钢片、铝材、不锈钢、铜材等金属材料贸易及加工服务的综合性企业。KSC在华南地区中高碳钢销量领先，深耕行业超过25年。', en:'Kao Shun Cheong Holdings Co., Ltd. (KSC) was established in 2000 with HQ in Hong Kong, specializing in the trade and processing of Special Steel, Silicon Steel, Aluminum, Stainless Steel, and Copper. KSC is the leading medium & high carbon steel supplier in South China, with 25+ years of expertise.', th:'KSC ก่อตั้งปี 2000 สำนักงานใหญ่ที่ฮ่องกง องค์กรที่ครอบคลุมการค้าและแปรรูปเหล็กพิเศษ เหล็กซิลิคอน อะลูมิเนียม สแตนเลส และทองแดง KSC เป็นผู้นำเหล็กคาร์บอนกลาง-สูงในจีนตอนใต้', vi:'KSC duoc thanh lap nam 2000, tru so tai Hong Kong, chuyen thuong mai va gia cong Thep dac biet, Thep Silicon, Nhom, Thep khong gi va Dong. KSC la nha cung cap thep carbon trung-cao hang dau mien Nam Trung Quoc.' },
  },
  products: {
    steel:  { zh:'特钢/精冲钢', en:'Special Steel / Fineblanking Steel', th:'เหล็กพิเศษ/เหล็กกลึง', vi:'Thep dac biet / Dam chinh xac' },
    alum:   { zh:'铝材', en:'Aluminum', th:'อะลูมิเนียม', vi:'Nhom' },
    ss:     { zh:'不锈钢', en:'Stainless Steel', th:'สแตนเลส', vi:'Thep khong gi' },
    sil:    { zh:'矽钢片', en:'Silicon Steel', th:'เหล็กซิลิคอน', vi:'Thep Silicon' },
    cop:    { zh:'铜材', en:'Copper', th:'ทองแดง', vi:'Dong' },
    hr:     { zh:'热轧/冷轧卷', en:'Hot-Rolled / Cold-Rolled Steel', th:'เหล็กม้วนร้อน/เย็น', vi:'Thep can nong/lanh' },
  },
  factory: {
    dg: { zh:'东莞工厂', en:'Dongguan Factory', th:'โรงงานตงกวาน', vi:'Nha may Dongguan' },
    sz: { zh:'苏州工厂', en:'Suzhou Factory', th:'โรงงานซูโจว', vi:'Nha may Suzhou' },
    xy: { zh:'新余工厂', en:'Xinyu Factory', th:'โรงงานซินยู', vi:'Nha may Xinyu' },
    vn: { zh:'越南海防工厂', en:'Haiphong Factory', th:'โรงงานไฮฟอง เวียดนาม', vi:'Nha may Hai Phong' },
    th: { zh:'泰国春武里工厂', en:'Chon Buri Factory', th:'โรงงานชลบุรี ไทย', vi:'Nha may Chon Buri' },
    sl: { zh:'分条', en:'Slitting', th:'ตัดยาว', vi:'Cat dai' },
    sh: { zh:'剪板', en:'Shearing', th:'ตัดแผ่น', vi:'Cat tam' },
    cr: { zh:'冷轧', en:'Cold Rolling', th:'ม้วนเย็น', vi:'Can lanh' },
    an: { zh:'退火', en:'Annealing', th:'อบ', vi:'Uu' },
  },
  footer: {
    brand: { zh:'高顺昌控股有限公司（KSC）专注金属材料行业超过25年，是中国、越南、泰国领先的金属材料供应商。', en:'KSC — 25+ years of expertise in metal materials, serving China, Vietnam & Thailand.', th:'KSC มีประสบการณ์กว่า 25 ปีในวัสดุโลหะ ส่งมอบให้จีน เวียดนาม และไทย', vi:'KSC hon 25 nam kinh nghiem vat lieu kim loai, phuc vu Trung Quoc, Viet Nam va Thai Lan.' },
    col1: { zh:'快速链接', en:'Quick Links', th:'ลิงก์ด่วน', vi:'Lien ket nhanh' },
    col2: { zh:'产品中心', en:'Products', th:'ผลิตภัณฑ์', vi:'San pham' },
    col3: { zh:'联系我们', en:'Contact', th:'ติดต่อ', vi:'Lien he' },
    copy: { zh:'© 2025 高顺昌控股有限公司 保留所有权利', en:'© 2025 Kao Shun Cheong Holdings Co., Ltd. All Rights Reserved', th:'© 2025 KSC สงวนลิขสิทธิ์', vi:'© 2025 KSC Bao luu moi quyen' },
  },
  stat: {
    years:    { zh:'年行业经验', en:'Years Experience', th:'ปีประสบการณ์', vi:'Nam kinh nghiem' },
    bases:     { zh:'个生产基地', en:'Manufacturing Bases', th:'ฐานการผลิต', vi:'Co so san xuat' },
    countries: { zh:'个国家和地区', en:'Countries & Regions', th:'ประเทศและภูมิภาค', vi:'Quoc gia va vung lanh tho' },
  },
  proc: {
    slitting_wide:   { zh:'宽幅分条机', en:'Slitting-Wide',    th:'เครื่องตัดยาวกว้าง',   vi:'May cat dai rong' },
    slitting_narrow: { zh:'窄幅分条机', en:'Slitting-Narrow',  th:'เครื่องตัดยาวแคบ',    vi:'May cat dai hep' },
    shearing_wide:   { zh:'大剪板机',   en:'Shearing-Wide',    th:'เครื่องตัดแผ่นใหญ่',   vi:'May cat tam lon' },
    shearing_narrow: { zh:'小飞剪机',   en:'Shearing-Narrow',  th:'เครื่องตัดแผ่นเล็ก',   vi:'May cat tam nho' },
    cr_thin:         { zh:'六辊轧机',   en:'Cold-Rolling-Thin',th:'เครื่องม้วนเย็นบาง',  vi:'May can lanh mong' },
    cr_thick:        { zh:'四辊轧机',   en:'Cold-Rolling-Thick',th:'เครื่องม้วนเย็นหนา',  vi:'May can lanh day' },
    annealing:        { zh:'退火炉',     en:'Annealing Furnace',th:'เตาอบ',               vi:'Lo u' },
  },
};

let currentLang = 'zh';

const LANG_CONFIG = {
  zh: { flag: '🇨🇳', label: '中文' },
  en: { flag: '🇬🇧', label: 'English' },
  th: { flag: '🇹🇭', label: 'ภาษาไทย' },
  vi: { flag: '🇻🇳', label: 'Tiếng Việt' },
};

function T(section, key) {
  const v = L[section]?.[key];
  if (!v) return key;
  return v[currentLang] || v['en'] || key;
}

function applyTranslations() {
  // Nav
  document.querySelectorAll('[data-i18n="nav"]').forEach(el => {
    el.textContent = T('nav', el.dataset.i18nKey);
  });

  // Hero
  document.querySelectorAll('[data-i18n="hero"]').forEach(el => {
    el.textContent = T('hero', el.dataset.i18nKey);
  });

  // Sec
  document.querySelectorAll('[data-i18n="sec"]').forEach(el => {
    el.textContent = T('sec', el.dataset.i18nKey);
  });

  // About
  document.querySelectorAll('[data-i18n="about"]').forEach(el => {
    el.textContent = T('about', el.dataset.i18nKey);
  });

  // Products
  document.querySelectorAll('[data-i18n="prod"]').forEach(el => {
    el.textContent = T('products', el.dataset.i18nKey);
  });

  // Factory
  document.querySelectorAll('[data-i18n="fac"]').forEach(el => {
    el.textContent = T('factory', el.dataset.i18nKey);
  });

  // Footer
  document.querySelectorAll('[data-i18n="footer"]').forEach(el => {
    el.textContent = T('footer', el.dataset.i18nKey);
  });

  // Stat
  document.querySelectorAll('[data-i18n="stat"]').forEach(el => {
    el.textContent = T('stat', el.dataset.i18nKey);
  });

  // Proc
  document.querySelectorAll('[data-i18n="proc"]').forEach(el => {
    el.textContent = T('proc', el.dataset.i18nKey);
  });

  // Placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = T('contact', el.dataset.i18nKey);
  });

  // HTML lang
  document.documentElement.lang = currentLang;

  // Update lang button label
  const labelEl = document.querySelector('.lang-current-label');
  if (labelEl) labelEl.textContent = currentLang.toUpperCase();

  // Update active lang option
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });

  localStorage.setItem('ksc_lang', currentLang);
}

function initLang() {
  const saved = localStorage.getItem('ksc_lang');
  if (saved && L.nav.home[saved]) currentLang = saved;
  else {
    const bl = navigator.language.toLowerCase();
    if (bl.startsWith('zh')) currentLang = 'zh';
    else if (bl.startsWith('th')) currentLang = 'th';
    else if (bl.startsWith('vi')) currentLang = 'vi';
    else currentLang = 'en';
  }
  applyTranslations();

  const btn = document.querySelector('.lang-btn');
  const dropdown = document.querySelector('.lang-dropdown');
  btn?.addEventListener('click', e => { e.stopPropagation(); dropdown?.classList.toggle('show'); });
  document.addEventListener('click', () => dropdown?.classList.remove('show'));
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
      currentLang = opt.dataset.lang;
      applyTranslations();
      dropdown?.classList.remove('show');
    });
  });
}

document.addEventListener('DOMContentLoaded', initLang);
