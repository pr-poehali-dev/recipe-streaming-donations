import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { STREAMS } from "@/data";

export default function StreamPage() {
  const [donateAmount, setDonateAmount] = useState<number | null>(null);
  const [donateMsg, setDonateMsg] = useState("");
  const [showDonateModal, setShowDonateModal] = useState(false);

  return (
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
            {/* Stream screen */}
            <div className={`relative h-36 flex items-center justify-center ${s.live ? "bg-bark" : "bg-muted"}`}>
              <span className="text-6xl">{s.avatar}</span>
              {s.live ? (
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-red-600 text-white text-xs px-2.5 py-1 rounded-full font-body">
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  LIVE
                </div>
              ) : (
                <div className="absolute top-3 left-3 bg-black/50 text-white/80 text-xs px-2.5 py-1 rounded-full font-body">
                  📅 {s.scheduled}
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
  );
}
