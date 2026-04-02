import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { HERO_IMG, RECIPES, STREAMS, Page } from "@/data";

interface HomePageProps {
  setPage: (p: Page) => void;
}

export default function HomePage({ setPage }: HomePageProps) {
  return (
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
  );
}
