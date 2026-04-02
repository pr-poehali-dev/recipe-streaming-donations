import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { CUISINES, RECIPES } from "@/data";

export default function CatalogPage() {
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const filteredRecipes = selectedCuisine
    ? RECIPES.filter((r) => r.cuisine === selectedCuisine)
    : RECIPES;

  return (
    <div className="mt-6">
      <h1 className="font-display text-4xl font-bold text-bark">Каталог рецептов</h1>
      <p className="text-muted-foreground mt-1 font-body">340+ авторских рецептов от лучших шефов</p>

      {/* Cuisine filters */}
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

      {/* Recipe Grid */}
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
  );
}
