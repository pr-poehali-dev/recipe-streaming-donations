import { GIFTS } from "@/data";

export default function GiftsPage() {
  return (
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
  );
}
