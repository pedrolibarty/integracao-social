"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  "Histórias de Infância",
  "Receitas de Família",
  "Memórias Culturais",
  "Tradições",
  "Relatos de Vida",
];

const initialPosts = {
  "Histórias de Infância": [
    {
      author: "Maria S.",
      text: "Cresci em uma rua onde todas as crianças se conheciam pelo nome. As tardes eram marcadas por brincadeiras simples: amarelinha desenhada no chão, bola de meia e histórias inventadas na hora. Não havia pressa, nem tecnologia. Apenas o tempo passando devagar e a sensação de pertencimento que hoje faz tanta falta.",
      likes: 24,
    },
    {
      author: "João P.",
      text: "Minha avó tinha o costume de sentar na varanda no fim do dia e chamar todos os netos para ouvir histórias da juventude dela. Falava de dificuldades, mas também de esperança. Essas memórias moldaram quem eu sou e me ensinaram a valorizar as pequenas coisas.",
      likes: 19,
    },
  ],

  "Receitas de Família": [
    {
      author: "Ana L.",
      text: "O bolo de milho da minha mãe sempre foi mais do que uma receita. Era preparado aos domingos, com a casa cheia e cheiro de café fresco. Ela dizia que o segredo não estava nos ingredientes, mas na calma ao preparar e no carinho com quem iria comer. Hoje faço igual para manter viva essa tradição.",
      likes: 31,
    },
    {
      author: "Rogério M.",
      text: "Aprendi a fazer feijão com meu pai, que acordava cedo para cozinhar antes do trabalho. Ele me ensinou que cozinhar também é uma forma de cuidar. Cada tempero tinha uma história e cada refeição era um momento de união da família.",
      likes: 22,
    },
  ],

  "Memórias Culturais": [
    {
      author: "Carlos R.",
      text: "No meu bairro, as festas juninas eram o evento mais esperado do ano. As ruas se transformavam, todos ajudavam na decoração e ninguém ficava de fora. Era um momento em que diferenças desapareciam e a cultura nos unia de forma simples e verdadeira.",
      likes: 27,
    },
    {
      author: "Luciana F.",
      text: "Cresci ouvindo músicas regionais que meus pais colocavam todos os domingos. Cada canção carregava histórias do nosso povo e me ensinou a respeitar minhas origens. Hoje, faço questão de passar isso adiante para meus filhos.",
      likes: 18,
    },
  ],

  "Tradições": [
    {
      author: "Pedro A.",
      text: "Todo final de ano, minha família se reúne para preparar a ceia juntos. Não importa onde cada um esteja durante o ano, esse momento é sagrado. As mesmas receitas, as mesmas conversas e a sensação de continuidade entre gerações.",
      likes: 29,
    },
    {
      author: "Renata C.",
      text: "Na minha casa, o almoço de domingo sempre foi um ritual. Era o momento de conversar, resolver conflitos e reforçar laços. Mesmo com o tempo passando, fazemos questão de manter essa tradição viva.",
      likes: 21,
    },
  ],

  "Relatos de Vida": [
    {
      author: "Fernanda G.",
      text: "Mudei de cidade várias vezes ao longo da vida, o que me ensinou a lidar com o novo e com as despedidas. Cada lugar deixou uma marca e contribuiu para quem sou hoje. Aprendi que pertencimento também pode ser construído.",
      likes: 26,
    },
    {
      author: "Marcos V.",
      text: "Passei por momentos difíceis que me fizeram repensar prioridades. Com o tempo, percebi que compartilhar histórias ajuda a curar e a criar conexões reais. Espaços como este mostram que ninguém está realmente sozinho.",
      likes: 33,
    },
  ],
};

export default function IntegracaoSocial() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState("");

  const addPost = () => {
    if (!newPost.trim()) return;
    const updated: any = { ...posts };
    updated[selectedCategory] = updated[selectedCategory] || [];
    updated[selectedCategory].unshift({
      author: "Você",
      text: newPost,
      likes: 0,
    });
    setPosts(updated);
    setNewPost("");
  };

  const likePost = (index: any) => {
    const updated: any = { ...posts };
    updated[selectedCategory][index].likes++;
    setPosts(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900">
      <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center text-slate-800"
          >
            Ecossistema de Integração Social
          </motion.h1>
          <p className="text-center text-sm text-slate-500 mt-1">
            Histórias, memórias e vivências que conectam pessoas
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-4 gap-8">
        <aside className="md:col-span-1 space-y-2">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={cat === selectedCategory ? "default" : "ghost"}
              className="w-full justify-start"
            onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </aside>

        <section className="md:col-span-3 space-y-6">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardContent className="p-4 space-y-3">
              <Textarea
                placeholder={`Compartilhe algo sobre ${selectedCategory}...`}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="bg-slate-50"
              />
              <Button onClick={addPost} className="w-full gap-2">
                <Send className="w-4 h-4" /> Publicar
              </Button>
            </CardContent>
          </Card>

          {(posts[selectedCategory] || []).map((post:any, i:any) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="bg-white border-slate-200 shadow-sm hover:shadow-md transition">
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="bg-sky-100 text-sky-700">
                      <AvatarFallback>{post.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-slate-500">{selectedCategory}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-700">{post.text}</p>

                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => likePost(i)}
                      className="gap-1 text-slate-600"
                    >
                      <Heart className="w-4 h-4" /> {post.likes}
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-1 text-slate-600">
                      <MessageCircle className="w-4 h-4" /> Comentar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}