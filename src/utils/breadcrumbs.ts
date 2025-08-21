export const HOME_CRUMB = { title: "Главная", href: "/" };

export function withHomeCrumb(items: Array<{ title: string; href: string }>) {
  return [HOME_CRUMB, ...items];
}

const SECTIONS = [
  {
    path: "/operacija-i-lecheie",
    title: "Операция и лечение",
    posts: [
      "ee7m50sju1-protokol-lecheniya",
      "giv7fnnag1-besplatnie-i-platnie-uslugi",
      "gsl8ufj5c1-klassifikatsiya-tnm",
      "lhn1l0yuf1-kakoe-bivaet-lechenie",
      "zjzi4kmcg1-rmzh-v-period-beremennosti",
      "l8llo3tng1-operatsiya-andzhelini-dzholi",
      "8jbckafc11-podgotovka-chto-brat-s-soboi-v-bolnitsu",
      "2yoa6r2y71-kak-blizkim-podderzhat-tebya-vo-vremya-l",
      "0nrezu4ru1-planirui-vremya-na-bolnichnii",
      "49zveicx21-pobochnie-effekti-k-chemu-bit-gotovoi",
      "hmy47kvti1-limfostaz",
      "2inij3idd1-posleoperatsionnii-period",
      "yozi37xml1-nablyudenie-sroki-obsledovanii"
    ]
  },
  {
    path: "/zhizn-posle-remissija",
    title: "Жизнь после и ремиссия",
    posts: [
      "nsnfva0rv1-kakie-izmeneniya-tebya-zhdut-i-kak-k-nim",
      "1zmcu8rz21-vipadenie-volos",
      "dg0zkctcb1-reabilitatsiya-posle-onkologii",
      "zfgdsfggy1-profilaktika-limfostaza",
      "czmd3iz591-izmenenie-vesa",
      "l3y43zcpc1-izmeneniya-v-mishtsah-i-nervah",
      "ctsyd002b1-klimaktericheskii-sindrom-prilivi",
      "3m9skmdz51-bele-posle-mastektomii",
      "n98ax7t261-gde-kupit-bele-posle-mastektomii",
      "t1ixisnt61-komu-i-zachem-nuzhno-nosit-rukav",
      "k6jhc8eps1-tvoi-novie-regulyarnie-chek-api",
      "ngkb4ivjm1-kak-tebe-mogut-pomoch-rodnie",
      "7ta0hayi31-strah-retsidiva-kak-spravlyatsya",
      "8zj4sujli1-onkologiya-i-zhenskaya-krasota",
      "clscke2n41-rabota",
      "1tfi4mfn31-seksualnaya-zhizn",
      "c2m6k6vre1-ravnoe-konsultirovanie"
    ]
  },
  {
    path: "/postanovka-diagnoza",
    title: "Постановка диагноза",
    posts: [
      "dg58cuu7t1-chto-takoe-rak",
      "30vtgvvsg1-statistika-v-mire-i-belarusi",
      "rxbvb1dsk1-faktori-riska",
      "8fkv901sj1-onkologicheskii-marshrut",
      "ukir3yyo71-algoritm-diagnostirovaniya-i-lecheniya",
      "d5hfo2dsj1-kto-prinimaet-uchastie-v-diagnostirovani",
      "frmjrvt0b1-chek-list-chto-sprosit-u-onkologa",
      "xppja5fzv1-tipi-i-stadii-raka",
      "40mxvv9pa1-ierarhiya-meducherezhdenii-belarusi",
      "5sn2kve151-metodi-diagnostiki-dostupnie-v-belarusi",
      "zf6uy711m1-kontakti-i-poleznie-ssilki-dlya-onkopats",
      "9ldvuasdx1-telefoni-doveriya-v-belarusi",
      "ebbechaue1-uchastie-v-klinicheskih-issledovaniyah"
    ]
  }
];

export function getSectionCrumb(pathname: string) {
  const section = SECTIONS.find(section => pathname.startsWith(section.path));
  if (section) return section;

  const match = pathname.match(/^\/tpost\/([^/]+)/);
  if (match) {
    const slug = match[1];
    return SECTIONS.find(section => section.posts?.includes(slug));
  }
  return undefined;
}

export function buildBreadcrumbs({ pathname, pageTitle }: { pathname: string; pageTitle: string }) {
  const section = getSectionCrumb(pathname);
  const crumbs = [HOME_CRUMB];
  if (section) {
    crumbs.push({ title: section.title, href: section.path });
  }
  crumbs.push({ title: pageTitle, href: "/#" });
  return crumbs;
}