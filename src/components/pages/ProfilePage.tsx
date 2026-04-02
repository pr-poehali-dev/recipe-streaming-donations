import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ProfilePage() {
  return (
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
  );
}
