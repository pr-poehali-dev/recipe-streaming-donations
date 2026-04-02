import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Page, PAGE_LABELS } from "@/data";

interface AppLayoutProps {
  page: Page;
  setPage: (p: Page) => void;
  children: React.ReactNode;
}

const NAV_PAGES: Page[] = ["home", "catalog", "stream", "gifts", "community", "profile"];

const MOBILE_NAV = [
  { p: "home" as Page, icon: "Home", label: "Главная" },
  { p: "catalog" as Page, icon: "BookOpen", label: "Каталог" },
  { p: "stream" as Page, icon: "Video", label: "Стримы" },
  { p: "gifts" as Page, icon: "Gift", label: "Подарки" },
  { p: "community" as Page, icon: "Users", label: "Сообщество" },
  { p: "profile" as Page, icon: "User", label: "Профиль" },
];

export default function AppLayout({ page, setPage, children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-body">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <button onClick={() => setPage("home")} className="flex items-center gap-2">
            <span className="text-2xl">🍳</span>
            <span className="font-display text-xl font-bold text-bark">
              Вкусно<span className="text-spice">Стрим</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_PAGES.map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all font-body ${
                  page === p
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {PAGE_LABELS[p]}
              </button>
            ))}
          </nav>

          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-body">
            Войти
          </Button>
        </div>
      </header>

      {/* MOBILE NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border px-2 py-2">
        <div className="flex justify-around">
          {MOBILE_NAV.map(({ p, icon, label }) => (
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
        {children}
      </main>
    </div>
  );
}
