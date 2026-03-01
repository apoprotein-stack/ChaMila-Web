import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const displayFontStyle = { fontFamily: "Georgia, serif", fontWeight: "700" };

  const faqItems: FAQItem[] = [
    {
      question: "為什麼 CháMila 比一般寵物飼料貴？",
      answer: "CháMila 採用在地臺灣豬 CAS認證與 ThermoNutricUp 技術，將豬肉轉化為科學級的保健食品。我們不添加穀物或多種蛋白質混合，確保營養完整性與消化吸收率。這是投資毛孩的長期健康，而非單純的日常飼料。"
    },
    {
      question: "CháMila 適合多大的毛孩？",
      answer: "CháMila 適合 3 個月以上的犬貓。不同體型的毛孩建議用量不同：小型犬貓（3-5kg）每日 5-10g、中型犬（10-20kg）每日 15-20g、大型犬（20kg+）每日 25-30g。建議先從少量開始，讓毛孩的腸胃適應。"
    },
    {
      question: "如何保存 CháMila？",
      answer: "CháMila 採用 50-300g 夾鏈袋包裝，開封後請放在陰涼乾燥處或冷藏保存。建議在開封後 30 天內使用完畢，以保持營養成分的活性。若需長期保存，可放入冷凍庫，使用前自然解凍即可。"
    },
    {
      question: "毛孩有過敏症狀，可以吃 CháMila 嗎？",
      answer: "CháMila 使用在地臺灣豬 CAS認證，避免了多蛋白質混合可能引起的過敏反應。但如果毛孩對豬肉過敏，則不建議使用。建議在使用前先諮詢獸醫師，特別是對於有嚴重過敏史的毛孩。"
    },
    {
      question: "訂閱制的最低訂閱期是多久？",
      answer: "CháMila 訂閱制的最低訂閱期為 3 個月。訂閱期間內，您可以隨時調整機能組合、修改訂購份數或暫停一個月。若要取消訂閱，需在下次配送前 7 天通知我們。"
    },
    {
      question: "如何調整訂閱方案？",
      answer: "登入會員中心後，您可以隨時調整訂閱方案。選擇新的機能組合、修改訂購份數、選擇跳過月份或暫停訂閱。所有變更將在下個月開始生效。若有問題，可透過 LINE 客服或 Email 聯絡我們。"
    },
    {
      question: "CháMila 有什麼營養成分？",
      answer: "CháMila 的基礎成分為台灣豬肉，透過 ThermoNutricUp 技術保留 95% 以上的營養。根據不同機能組合，會添加對應的機能成分：腸胃保健含益生菌、心血管保健含 Omega-3、關節護理含葡萄糖胺、護肝排毒含牛奶薊。詳細營養成分表可在產品頁面下載。"
    },
    {
      question: "CháMila 有通過檢驗認證嗎？",
      answer: "是的，CháMila 通過 SGS 檢驗，確保無重金屬、無農藥殘留、無致病菌。所有檢驗報告都可在品牌故事頁面下載。我們致力於提供最安全、最透明的產品。"
    },
    {
      question: "如何加入 LINE 社群？",
      answer: "掃描官網上的 LINE 官方帳號 QR Code，或搜尋 @chamila 即可加入。加入後可獲得 88 折首購優惠、接收最新產品資訊、與獸醫師線上諮詢，以及參與社群專屬活動。"
    },
    {
      question: "CháMila 支持哪些付款方式？",
      answer: "CháMila 支持信用卡、轉帳、超商付款等多種方式。訂閱制用戶可綁定信用卡進行自動扣款，也可選擇每月手動付款。所有交易都通過安全的金流系統進行。"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <span className="font-bold text-lg text-primary" style={displayFontStyle}>CháMila</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-sm text-foreground hover:text-primary transition">
              首頁
            </a>
            <a href="/#about" className="text-sm text-foreground hover:text-primary transition">
              品牌故事
            </a>
            <a href="/#products" className="text-sm text-foreground hover:text-primary transition">
              產品
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            預約試吃
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6" style={displayFontStyle}>
            常見問題
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            關於 CháMila 的一切，我們都為您準備了詳細的解答。
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-border rounded-xl overflow-hidden hover:border-accent transition"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-primary/5 transition text-left"
                >
                  <h3 className="font-semibold text-primary text-lg">{item.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedIndex === index && (
                  <div className="px-6 py-5 bg-gradient-to-br from-primary/5 to-accent/5 border-t border-border">
                    <p className="text-foreground/80 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={displayFontStyle}>
            還有其他問題嗎？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            透過 LINE 社群或 Email 聯絡我們，獸醫師團隊將為您解答。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
              加入 LINE 社群
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base h-12 px-8"
            >
              發送 Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container text-center text-sm text-foreground/60">
          <p>&copy; 2026 CháMila 芯研毛膳. 版權所有。</p>
        </div>
      </footer>
    </div>
  );
}
