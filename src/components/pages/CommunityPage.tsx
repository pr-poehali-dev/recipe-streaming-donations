import Icon from "@/components/ui/icon";
import { COMMUNITY_POSTS } from "@/data";

export default function CommunityPage() {
  return (
    <div className="mt-6">
      <h1 className="font-display text-4xl font-bold text-bark">Сообщество</h1>
      <p className="text-muted-foreground mt-1 font-body">Делитесь впечатлениями и рецептами</p>

      {/* Post form */}
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

      {/* Posts */}
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
  );
}
