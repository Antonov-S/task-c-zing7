import pic1 from "../app/public/pic1.png";
import pic2 from "../app/public/pic2.png";
import pic3 from "../app/public/pic3.png";

export const links = [
  {
    name: "Начало",
    hash: "#home"
  },
  {
    name: "За нас",
    hash: "#about"
  },
  {
    name: "Услуги",
    hash: "#services"
  },
  {
    name: "Как работи",
    hash: "#how-it-works"
  },
  {
    name: "Контакти",
    hash: "#contact"
  }
] as const;

export const mobileLinks = [
  {
    name: "Начало",
    hash: "#home"
  },
  {
    name: "За нас",
    hash: "#about"
  },
  {
    name: "Услуги",
    hash: "#services"
  },
  {
    name: "Как работи",
    hash: "#how-it-works"
  },
  {
    name: "Контакти",
    hash: "#contact"
  },
  {
    name: "Профил",
    hash: "#profile"
  },
  {
    name: "Заявка за пратка",
    hash: "#request"
  }
] as const;

export const mainTitle =
  "Гъвкави решения за сухопътен транспорт за всеки клиент";

export const services = [
  "Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари);",
  "Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;",
  "Взимане на стоки и доставки за от и в България;",
  "Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;",
  "Регулярни групажни линии;",
  "Транспортни услуги до Турция и Близкия изток;",
  "Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания."
] as const;

export const solutions = [
  {
    src: pic1,
    heading: "Опасни товари (ADR)"
  },
  {
    src: pic2,
    heading: "Хладилен транспорт"
  },
  {
    src: pic3,
    heading: "Извънгабаритни товари"
  }
] as const;
