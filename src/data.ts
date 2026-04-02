export const HERO_IMG =
  "https://cdn.poehali.dev/projects/69a58b94-86eb-4d82-998f-d59cc73cdb8c/files/0f5133e9-f650-4e6b-a298-555d60f1218f.jpg";

export type Page = "home" | "catalog" | "stream" | "gifts" | "community" | "profile";

export const PAGE_LABELS: Record<Page, string> = {
  home: "Главная",
  catalog: "Каталог",
  stream: "Стримы",
  gifts: "Подарки",
  community: "Сообщество",
  profile: "Профиль",
};

export const CUISINES = [
  { flag: "🇮🇹", name: "Итальянская", count: 48 },
  { flag: "🇯🇵", name: "Японская", count: 35 },
  { flag: "🇫🇷", name: "Французская", count: 29 },
  { flag: "🇬🇪", name: "Грузинская", count: 22 },
  { flag: "🇹🇭", name: "Тайская", count: 31 },
  { flag: "🇲🇽", name: "Мексиканская", count: 18 },
  { flag: "🇮🇳", name: "Индийская", count: 27 },
  { flag: "🇷🇺", name: "Русская", count: 41 },
  { flag: "🇨🇳", name: "Китайская", count: 33 },
  { flag: "🇬🇷", name: "Греческая", count: 16 },
];

export const RECIPES = [
  { id: 1, title: "Паста Карбонара", cuisine: "🇮🇹", time: "25 мин", price: 290, rating: 4.9, tag: "Хит", color: "from-orange-100 to-amber-50" },
  { id: 2, title: "Том Ям с креветками", cuisine: "🇹🇭", time: "40 мин", price: 390, rating: 4.8, tag: "Новинка", color: "from-red-50 to-orange-50" },
  { id: 3, title: "Хинкали домашние", cuisine: "🇬🇪", time: "90 мин", price: 350, rating: 4.95, tag: "", color: "from-yellow-50 to-amber-50" },
  { id: 4, title: "Суши-бурито", cuisine: "🇯🇵", time: "35 мин", price: 450, rating: 4.7, tag: "", color: "from-emerald-50 to-teal-50" },
  { id: 5, title: "Круассаны слоёные", cuisine: "🇫🇷", time: "120 мин", price: 520, rating: 4.9, tag: "Топ", color: "from-amber-50 to-yellow-50" },
  { id: 6, title: "Пельмени сибирские", cuisine: "🇷🇺", time: "60 мин", price: 260, rating: 4.6, tag: "", color: "from-sky-50 to-blue-50" },
];

export const STREAMS = [
  {
    id: 1,
    title: "Готовим итальянский ужин",
    chef: "Шеф Антон",
    avatar: "👨‍🍳",
    live: true,
    viewers: 1240,
    donations: 8500,
    cuisine: "🇮🇹",
    scheduled: undefined as string | undefined,
  },
  {
    id: 2,
    title: "Японские роллы дома",
    chef: "Мария Сакура",
    avatar: "👩‍🍳",
    live: true,
    viewers: 893,
    donations: 4200,
    cuisine: "🇯🇵",
    scheduled: undefined as string | undefined,
  },
  {
    id: 3,
    title: "Грузинский стол — хинкали и хачапури",
    chef: "Нино Берадзе",
    avatar: "🧑‍🍳",
    live: false,
    viewers: 0,
    donations: 0,
    cuisine: "🇬🇪",
    scheduled: "Сегодня в 20:00",
  },
];

export const GIFTS = [
  { emoji: "☕", name: "Кофе шефу", price: 50, color: "bg-amber-100" },
  { emoji: "🌹", name: "Букет специй", price: 150, color: "bg-red-100" },
  { emoji: "🍾", name: "Шампанское", price: 300, color: "bg-yellow-100" },
  { emoji: "🦞", name: "Лобстер", price: 500, color: "bg-orange-100" },
  { emoji: "👑", name: "Золотая корона", price: 1000, color: "bg-yellow-200" },
  { emoji: "🚀", name: "Ракета вкусов", price: 2000, color: "bg-purple-100" },
];

export const COMMUNITY_POSTS = [
  { id: 1, author: "Елена К.", avatar: "👩", text: "Приготовила карбонару по рецепту — семья в восторге! Добавила чуть больше пармезана, получилось идеально.", time: "2 ч назад", likes: 34, cuisine: "🇮🇹" },
  { id: 2, author: "Дмитрий Р.", avatar: "👨", text: "Шеф Антон — лучший! Его стрим по тайской кухне изменил мой взгляд на специи. Всем советую.", time: "5 ч назад", likes: 67, cuisine: "🇹🇭" },
  { id: 3, author: "Анна М.", avatar: "🧑", text: "Купила 3 рецепта грузинской кухни — все работают на 100%. Хинкали получились как в Тбилиси!", time: "вчера", likes: 91, cuisine: "🇬🇪" },
];
