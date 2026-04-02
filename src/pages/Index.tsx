import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HERO_IMG = "https://cdn.poehali.dev/projects/69a58b94-86eb-4d82-998f-d59cc73cdb8c/files/0f5133e9-f650-4e6b-a298-555d60f1218f.jpg";

type Page = "home" | "catalog" | "stream" | "gifts" | "community" | "profile";

const CUISINES = [
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

const RECIPES = [
  { id: 1, title: "Паста Карбонара", cuisine: "🇮🇹", time: "25 мин", price: 290, rating: 4.9, tag: "Хит", color: "from-orange-100 to-amber-50" },
  { id: 2, title: "Том Ям с креветками", cuisine: "🇹🇭", time: "40 мин", price: 390, rating: 4.8, tag: "Новинка", color: "from-red-50 to-orange-50" },
  { id: 3, title: "Хинкали домашние", cuisine: "🇬🇪", time: "90 мин", price: 350, rating: 4.95, tag: "", color: "from-yellow-50 to-amber-50" },
  { id: 4, title: "Суши-бурито", cuisine: "🇯🇵", time: "35 мин", price: 450, rating: 4.7, tag: "", color: "from-emerald-50 to-teal-50" },
  { id: 5, title: "Круассаны слоёные", cuisine: "🇫🇷", time: "120 мин", price: 520, rating: 4.9, tag: "Топ", color: "from-amber-50 to-yellow-50" },
  { id: 6, title: "Пельмени сибирские", cuisine: "🇷🇺", time: "60 мин", price: 260, rating: 4.6, tag: "", color: "from-sky-50 to-blue-50" },
];

const STREAMS = [
  {
    id: 1,
    title: "Готовим итальянский ужин",
    chef: "Шеф Антон",
    avatar: "👨‍🍳",
    live: true,
    viewers: 1240,
    donations: 8500,
    cuisine: "🇮🇹",
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

const GIFTS = [
  { emoji: "☕", name: "Кофе шефу", price: 50, color: "bg-amber-100" },
  { emoji: "🌹", name: "Букет специй", price: 150, color: "bg-red-100" },
  { emoji: "🍾", name: "Шампанское", price: 300, color: "bg-yellow-100" },
  { emoji: "🦞", name: "Лобстер", price: 500, color: "bg-orange-100" },
  { emoji: "👑", name: "Золотая корона", price: 1000, color: "bg-yellow-200" },
  { emoji: "🚀", name: "Ракета вкусов", price: 2000, color: "bg-purple-100" },
];

const COMMUNITY_POSTS = [
  { id: 1, author: "Елена К.", avatar: "👩", text: "Приготовила карбонару по рецепту — семья в восторге! Добавила чуть больше пармезана, получилось идеально.", time: "2 ч назад", likes: 34, cuisine: "🇮🇹" },
  { id: 2, author: "Дмитрий Р.", avatar: "👨", text: "Шеф Антон — лучший! Его стрим по тайской кухне изменил мой взгляд на специи. Всем советую.", time: "5 ч назад", likes: 67, cuisine: "🇹🇭" },
  { id: 3, author: "Анна М.", avatar: "🧑", text: "Купила 3 рецепта грузинской кухни — все работают на 100%. Хинкали получились как в Тбилиси!", time: "вчера", likes: 91, cuisine: "🇬🇪" },
];

export default function Index() {
  const [page, setPage] = useState<Page>("home");
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);
  const [donateAmount, setDonateAmount] = useState<number | null>(null);
  const [donateMsg, setDonateMsg] = useState("");
  const [showDonateModal, setShowDonateModal] = useState(false);

  const filteredRecipes = selectedCuisine
    ? RECIPES.filter((r) => r.cuisine === selectedCuisine)
    : RECIPES;

  return (
    <div className="min-h-screen bg-background font-body">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => setPage("home")}
            className="flex items-center gap-2"
          >
            <span className="text-2xl">🍳</span>
            <span className="font-display text-xl font-bold text-bark">
              Вкусно<span className="text-spice">Стрим</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {(["home", "catalog", "stream", "gifts", "community", "profile"] as Page[]).map((p) => {
              const labels: Record<Page, string> = {
                home: "Главная",
                catalog: "Каталог",
                stream: "Стримы",
                gifts: "Подарки",
                community: "Сообщество",
                profile: "Профиль",
              };
              return (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-body ${
                    page === p
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {labels[p]}
                </button>
              );
            })}
          </nav>

          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-body">
            Войти
          </Button>
        </div>
      </header>

      {/* MOBILE NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border px-2 py-2">
        <div className="flex justify-around">
          {([
            { p: "home", icon: "Home", label: "Главная" },
            { p: "catalog", icon: "BookOpen", label: "Каталог" },
            { p: "stream", icon: "Video", label: "Стримы" },
            { p: "gifts", icon: "Gift", label: "Подарки" },
            { p: "community", icon: "Users", label: "Сообщество" },
            { p: "profile", icon: "User", label: "Профиль" },
          ] as { p: Page; icon: string; label: string }[]).map(({ p, icon, label }) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all font-body ${
                page === p ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon name={icon} size={20} />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 pb-24 md:pb-10">

        {/* ═══════════════ HOME PAGE ═══════════════ */}
        {page === "home" && (
          <div>
            {/* Hero */}
            <section className="relative rounded-3xl overflow-hidden mt-6 min-h-[420px] grain-overlay">
              <img
                src={HERO_IMG}
                alt="Кулинарный мир"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-bark/85 via-bark/50 to-transparent" />
              <div className="relative z-10 p-8 md:p-14 flex flex-col justify-end h-full min-h-[420px]">
                <Badge className="w-fit mb-4 bg-saffron text-bark border-none font-body text-xs font-semibold animate-fade-in">
                  🔴 2 стрима идут прямо сейчас
                </Badge>
                <h1 className="font-display text-4xl md:text-6xl text-white font-bold leading-tight animate-fade-in delay-100">
                  Кулинарные рецепты<br />
                  <span className="text-saffron italic">со всего мира</span>
                </h1>
                <p className="mt-3 text-white/80 text-base md:text-lg max-w-md animate-fade-in delay-200 font-body">
                  Покупайте авторские рецепты, смотрите стримы шефов и поддерживайте любимых кулинаров донатами
                </p>
                <div className="flex flex-wrap gap-3 mt-6 animate-fade-in delay-300">
                  <Button
                    onClick={() => setPage("catalog")}
                    className="bg-primary text-white hover:bg-primary/90 rounded-full px-6 font-body"
                  >
                    Смотреть каталог
                  </Button>
                  <Button
                    onClick={() => setPage("stream")}
                    variant="outline"
                    className="border-white/40 text-white bg-white/10 hover:bg-white/20 rounded-full px-6 font-body"
                  >
                    <Icon name="Video" size={16} className="mr-2" />
                    Стримы
                  </Button>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "340+", label: "Рецептов", icon: "🍽️" },
                { value: "48", label: "Шефов", icon: "👨‍🍳" },
                { value: "12 стран", label: "Кухонь мира", icon: "🌍" },
              ].map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-4 text-center card-hover animate-fade-in">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="font-display text-2xl font-bold text-bark">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-body">{s.label}</div>
                </div>
              ))}
            </section>

            {/* Live Streams Preview */}
            <section className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-2xl font-bold text-bark">🔴 Идут сейчас</h2>
                <button onClick={() => setPage("stream")} className="text-sm text-primary hover:underline font-body">
                  Все стримы →
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {STREAMS.filter((s) => s.live).map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setPage("stream")}
                    className="bg-bark rounded-2xl p-5 cursor-pointer card-hover animate-fade-in"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{s.avatar}</span>
                        <div>
                          <div className="text-white font-semibold font-body">{s.chef}</div>
                          <div className="text-white/60 text-sm font-body">{s.title}</div>
                        </div>
                      </div>
                      <span className="text-lg">{s.cuisine}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-white/80 text-sm font-body">{s.viewers.toLocaleString()} зрителей</span>
                      </div>
                      <div className="text-saffron text-sm font-body">
                        💰 {s.donations.toLocaleString()} ₽ донатов
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Popular Recipes */}
            <section className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-2xl font-bold text-bark">Популярные рецепты</h2>
                <button onClick={() => setPage("catalog")} className="text-sm text-primary hover:underline font-body">
                  Весь каталог →
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {RECIPES.slice(0, 3).map((r, i) => (
                  <div
                    key={r.id}
                    className={`bg-gradient-to-br ${r.color} border border-border rounded-2xl p-4 card-hover cursor-pointer animate-fade-in`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-3xl">{r.cuisine}</span>
                      {r.tag && (
                        <Badge className="bg-primary/10 text-primary border-none text-xs font-body">
                          {r.tag}
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold text-bark mt-2 leading-tight">{r.title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground font-body">
                      <Icon name="Clock" size={13} />
                      {r.time}
                      <span className="ml-auto">⭐ {r.rating}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-bold text-primary font-body">{r.price} ₽</span>
                      <button className="bg-primary text-white text-xs px-3 py-1.5 rounded-full hover:bg-primary/90 transition font-body">
                        Купить
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ═══════════════ CATALOG PAGE ═══════════════ */}
        {page === "catalog" && (
          <div className="mt-6">
            <h1 className="font-display text-4xl font-bold text-bark">Каталог рецептов</h1>
            <p className="text-muted-foreground mt-1 font-body">340+ авторских рецептов от лучших шефов</p>

            <div className="mt-6 overflow-x-auto pb-2">
              <div className="flex gap-2 min-w-max">
                <button
                  onClick={() => setSelectedCuisine(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-body ${
                    !selectedCuisine ? "bg-primary text-white" : "bg-secondary text-muted-foreground hover:bg-muted"
                  }`}
                >
                  Все кухни
                </button>
                {CUISINES.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedCuisine(selectedCuisine === c.flag ? null : c.flag)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all font-body ${
                      selectedCuisine === c.flag
                        ? "bg-primary text-white"
                        : "bg-secondary text-muted-foreground hover:bg-muted"
                    }`}
                  >
                    {c.flag} {c.name}
                    <span className="text-xs opacity-60">{c.count}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {filteredRecipes.map((r, i) => (
                <div
                  key={r.id}
                  className={`bg-gradient-to-br ${r.color} border border-border rounded-2xl p-5 card-hover cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl">{r.cuisine}</span>
                    {r.tag && (
                      <Badge className="bg-primary/10 text-primary border-none text-xs font-body">{r.tag}</Badge>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-bold text-bark leading-tight">{r.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground font-body">
                    <Icon name="Clock" size={13} />
                    {r.time}
                    <span className="ml-auto text-amber-500">⭐ {r.rating}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-bold text-lg text-primary font-body">{r.price} ₽</span>
                    <button className="bg-primary text-white text-sm px-4 py-2 rounded-full hover:bg-primary/90 transition font-body">
                      Купить
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredRecipes.length === 0 && (
              <div className="text-center py-20 text-muted-foreground font-body">
                <div className="text-5xl mb-4">🔍</div>
                <p>Рецепты этой кухни скоро появятся</p>
              </div>
            )}
          </div>
        )}

        {/* ═══════════════ STREAM PAGE ═══════════════ */}
        {page === "stream" && (
          <div className="mt-6">
            <h1 className="font-display text-4xl font-bold text-bark">Кулинарные стримы</h1>
            <p className="text-muted-foreground mt-1 font-body">Смотрите и поддерживайте шефов донатами</p>

            <div className="grid md:grid-cols-3 gap-5 mt-6">
              {STREAMS.map((s, i) => (
                <div
                  key={s.id}
                  className={`rounded-2xl overflow-hidden border border-border card-hover animate-fade-in ${
                    s.live ? "bg-bark" : "bg-card"
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`relative h-36 flex items-center justify-center ${s.live ? "bg-bark" : "bg-muted"}`}>
                    <span className="text-6xl">{s.avatar}</span>
                    {s.live ? (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-600 text-white text-xs px-2.5 py-1 rounded-full font-body">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        LIVE
                      </div>
                    ) : (
                      <div className="absolute top-3 left-3 bg-black/50 text-white/80 text-xs px-2.5 py-1 rounded-full font-body">
                        📅 {(s as typeof s & { scheduled?: string }).scheduled}
                      </div>
                    )}
                    <div className="absolute top-3 right-3 text-2xl">{s.cuisine}</div>
                  </div>

                  <div className="p-4">
                    <h3 className={`font-display text-lg font-bold leading-tight ${s.live ? "text-white" : "text-bark"}`}>
                      {s.title}
                    </h3>
                    <p className={`text-sm mt-0.5 font-body ${s.live ? "text-white/60" : "text-muted-foreground"}`}>
                      {s.chef}
                    </p>

                    {s.live && (
                      <div className="flex items-center gap-3 mt-2 text-sm">
                        <span className="text-white/70 font-body flex items-center gap-1">
                          <Icon name="Eye" size={13} /> {s.viewers.toLocaleString()}
                        </span>
                        <span className="text-saffron font-body">💰 {s.donations.toLocaleString()} ₽</span>
                      </div>
                    )}

                    <div className="flex gap-2 mt-3">
                      {s.live ? (
                        <>
                          <button className="flex-1 bg-primary text-white text-sm py-2 rounded-xl hover:bg-primary/90 transition font-body">
                            Смотреть
                          </button>
                          <button
                            onClick={() => setShowDonateModal(true)}
                            className="bg-saffron text-bark text-sm py-2 px-3 rounded-xl hover:opacity-90 transition font-body font-semibold"
                          >
                            💝 Донат
                          </button>
                        </>
                      ) : (
                        <button className="flex-1 bg-secondary text-secondary-foreground text-sm py-2 rounded-xl hover:bg-muted transition font-body">
                          Напомнить
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Donate Modal */}
            {showDonateModal && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
                onClick={() => setShowDonateModal(false)}
              >
                <div
                  className="bg-background rounded-3xl p-6 w-full max-w-sm animate-scale-in shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl font-bold text-bark">Отправить донат 💝</h3>
                    <button onClick={() => setShowDonateModal(false)} className="text-muted-foreground hover:text-foreground">
                      <Icon name="X" size={20} />
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[50, 100, 200, 500, 1000, 2000].map((a) => (
                      <button
                        key={a}
                        onClick={() => setDonateAmount(a)}
                        className={`py-2.5 rounded-xl text-sm font-semibold transition-all font-body ${
                          donateAmount === a
                            ? "bg-primary text-white"
                            : "bg-secondary text-secondary-foreground hover:bg-muted"
                        }`}
                      >
                        {a} ₽
                      </button>
                    ))}
                  </div>

                  <textarea
                    value={donateMsg}
                    onChange={(e) => setDonateMsg(e.target.value)}
                    placeholder="Сообщение шефу (необязательно)"
                    className="w-full bg-secondary rounded-xl p-3 text-sm resize-none h-20 border-none outline-none font-body"
                  />

                  <Button
                    className="w-full mt-4 bg-primary text-white rounded-xl py-3 font-body"
                    disabled={!donateAmount}
                  >
                    Отправить {donateAmount ? `${donateAmount} ₽` : ""}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══════════════ GIFTS PAGE ═══════════════ */}
        {page === "gifts" && (
          <div className="mt-6">
            <h1 className="font-display text-4xl font-bold text-bark">Подарки шефам</h1>
            <p className="text-muted-foreground mt-1 font-body">Поддержите любимого шефа во время стрима</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              {GIFTS.map((g, i) => (
                <div
                  key={g.name}
                  className={`${g.color} border border-border rounded-2xl p-5 text-center card-hover cursor-pointer animate-fade-in`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="text-5xl mb-3">{g.emoji}</div>
                  <div className="font-display text-lg font-bold text-bark">{g.name}</div>
                  <div className="text-primary font-semibold font-body mt-1">{g.price} ₽</div>
                  <button className="mt-3 bg-primary text-white text-sm px-4 py-2 rounded-full hover:bg-primary/90 transition w-full font-body">
                    Подарить
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-display text-2xl font-bold text-bark mb-3">Топ дарителей за неделю 🏆</h3>
              <div className="space-y-3">
                {[
                  { name: "ГурманСПб", amount: 12500, emoji: "🥇" },
                  { name: "КухняМечты", amount: 8900, emoji: "🥈" },
                  { name: "ВкусноЕм", amount: 6200, emoji: "🥉" },
                ].map((t) => (
                  <div key={t.name} className="flex items-center justify-between py-2 border-b border-amber-100 last:border-0">
                    <div className="flex items-center gap-3 font-body">
                      <span className="text-xl">{t.emoji}</span>
                      <span className="font-medium text-bark">{t.name}</span>
                    </div>
                    <span className="text-primary font-bold font-body">{t.amount.toLocaleString()} ₽</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════ COMMUNITY PAGE ═══════════════ */}
        {page === "community" && (
          <div className="mt-6">
            <h1 className="font-display text-4xl font-bold text-bark">Сообщество</h1>
            <p className="text-muted-foreground mt-1 font-body">Делитесь впечатлениями и рецептами</p>

            <div className="bg-card border border-border rounded-2xl p-4 mt-6">
              <div className="flex gap-3">
                <span className="text-3xl">😊</span>
                <textarea
                  placeholder="Поделитесь своим кулинарным опытом..."
                  className="flex-1 bg-secondary rounded-xl p-3 text-sm resize-none h-16 border-none outline-none font-body"
                />
              </div>
              <div className="flex justify-end mt-2">
                <button className="bg-primary text-white text-sm px-5 py-2 rounded-full hover:bg-primary/90 transition font-body">
                  Опубликовать
                </button>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              {COMMUNITY_POSTS.map((post, i) => (
                <div
                  key={post.id}
                  className="bg-card border border-border rounded-2xl p-5 animate-fade-in"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{post.avatar}</span>
                    <div>
                      <div className="font-semibold text-bark font-body">{post.author}</div>
                      <div className="text-xs text-muted-foreground font-body">{post.time}</div>
                    </div>
                    <span className="ml-auto text-xl">{post.cuisine}</span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed font-body">{post.text}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition font-body">
                      <Icon name="Heart" size={14} />
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition font-body">
                      <Icon name="MessageCircle" size={14} />
                      Ответить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══════════════ PROFILE PAGE ═══════════════ */}
        {page === "profile" && (
          <div className="mt-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-4xl mx-auto mb-3">
                👤
              </div>
              <h2 className="font-display text-2xl font-bold text-bark">Мой профиль</h2>
              <p className="text-muted-foreground text-sm font-body mt-1">Войдите, чтобы покупать рецепты и донатить</p>
              <Button className="mt-4 bg-primary text-white rounded-full px-8 font-body">
                Войти / Зарегистрироваться
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-5">
              {[
                { icon: "📖", label: "Купленных рецептов", value: "—" },
                { icon: "💰", label: "Донатов отправлено", value: "—" },
                { icon: "⭐", label: "В избранном", value: "—" },
              ].map((s) => (
                <div key={s.label} className="bg-card border border-border rounded-2xl p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="font-display text-xl font-bold text-bark">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-body mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-card border border-border rounded-2xl divide-y divide-border">
              {[
                { icon: "ShoppingBag", label: "Мои покупки" },
                { icon: "Heart", label: "Избранное" },
                { icon: "Bell", label: "Уведомления" },
                { icon: "Settings", label: "Настройки" },
              ].map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-3 px-5 py-4 hover:bg-secondary transition text-left font-body"
                >
                  <Icon name={item.icon} size={18} className="text-muted-foreground" />
                  <span className="text-foreground">{item.label}</span>
                  <Icon name="ChevronRight" size={16} className="ml-auto text-muted-foreground" />
                </button>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
