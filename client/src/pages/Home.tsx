import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";

// Image URLs for Cha'Paludo brand
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-hero-banner-ChrsERYKGUeHwSPScN9PFp.webp";
const PRODUCT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-product-showcase-R42iXhhcT29pn6ScVPTNYG.webp";
const HEALTHY_TEETH_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-dog-teeth-healthy-Ym8zoyRDjaDGsmv5gdKJNQ.webp";

export default function Home() {
  const [, setLocation] = useLocation();
  const [showReservationModal, setShowReservationModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Cha'Paludo Dental Chews"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Cha'Paludo
            </h1>
            <p className="text-xl md:text-2xl mb-8">機能潔牙骨</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              兩支就夠，一天不缺席
            </p>
            <Button
              size="lg"
              onClick={() => setShowReservationModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              預約試吃
            </Button>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            為什麼選擇 Cha'Paludo
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "機能潔牙",
                description: "專業配方設計，有效清潔牙齒、維持口腔健康"
              },
              {
                title: "便利日常",
                description: "每盒 30 支，每支 12g，每天兩支即可"
              },
              {
                title: "天然成分",
                description: "採用天然食材與機能成分，安全無虞"
              },
              {
                title: "獸醫師認可",
                description: "通過專業獸醫師背書與臨床驗證"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-green-700 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            產品介紹
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={PRODUCT_IMAGE}
                alt="Cha'Paludo Product Box"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Cha'Paludo 機能潔牙骨
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-bold text-gray-700">規格</p>
                  <p className="text-gray-600">每支 12g，每盒 30 支（15 日份）</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">核心機能</p>
                  <p className="text-gray-600">潔牙、口氣清新、牙齦健康維護</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">適用對象</p>
                  <p className="text-gray-600">全年齡犬貓（1 歲以上）</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">建議用量</p>
                  <p className="text-gray-600">每天 1-2 支，可作為零食或獎勵</p>
                </div>
              </div>
              <Button
                size="lg"
                onClick={() => setLocation("/zerozen-product/pld-01")}
                className="bg-green-600 hover:bg-green-700 text-white w-full"
              >
                查看詳細規格
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Teeth Benefits */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            健康牙齒的重要性
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                毛孩的口腔健康，從現在開始
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>牙齒健康直接影響毛孩的進食與消化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>定期潔牙可預防牙周病與口臭</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>機能潔牙骨提供日常口腔護理解決方案</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span>與獸醫師建議的潔牙方式相輔相成</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src={HEALTHY_TEETH_IMAGE}
                alt="Healthy Dog Teeth"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            品牌故事
          </h2>
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <p>
              Cha'Paludo 源自對毛孩口腔健康的深切關懷。我們發現許多飼主面臨一個共同困擾：
              <strong>如何在日常生活中簡單、有效地維護毛孩的牙齒健康。</strong>
            </p>
            <p>
              傳統的潔牙方式（如刷牙）對許多毛孩來說難以執行，而我們的使命就是
              <strong>創造一個簡單、美味、有效的日常潔牙解決方案。</strong>
            </p>
            <p>
              經過多年的研發與獸醫師的臨床驗證，Cha'Paludo 機能潔牙骨應運而生。
              每一支潔牙骨都融合了機能成分與天然食材，
              <strong>讓毛孩在享受美味的同時，自然地維護口腔健康。</strong>
            </p>
            <p>
              <strong>「兩支就夠，一天不缺席」</strong>——這不只是一句標語，
              而是我們對每位飼主的承諾：簡單、便利、有效的口腔護理，
              讓毛孩擁有健康的笑容。
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            常見問題
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Cha'Paludo 適合多大的毛孩？",
                a: "Cha'Paludo 適合 1 歲以上的犬貓。對於幼犬幼貓，建議先諮詢獸醫師。"
              },
              {
                q: "每天要吃幾支？",
                a: "建議每天 1-2 支，可視毛孩的體型與咀嚼習慣調整。"
              },
              {
                q: "如何保存？",
                a: "請存放於陰涼乾燥處，開封後建議在 2 週內食用完畢。"
              },
              {
                q: "是否有過敏成分？",
                a: "Cha'Paludo 採用天然食材製成，不含人工香料與色素。如毛孩有特殊過敏，請先諮詢獸醫師。"
              },
              {
                q: "可以完全替代刷牙嗎？",
                a: "Cha'Paludo 是日常口腔護理的補充方案，建議搭配定期獸醫師潔牙與居家刷牙。"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-800 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            開始毛孩的潔牙之旅
          </h2>
          <p className="text-lg mb-8 opacity-90">
            加入 Cha'Paludo 社群，獲得最新產品資訊與獸醫師建議
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setShowReservationModal(true)}
              className="bg-white text-green-700 hover:bg-gray-100"
            >
              預約試吃
            </Button>
            <Button
              size="lg"
              onClick={() => setLocation("/auth")}
              className="bg-green-800 hover:bg-green-900 text-white"
            >
              加入會員
            </Button>
          </div>
        </div>
      </section>

      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">預約試吃</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="飼主名稱"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="email"
                placeholder="電子郵件"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="tel"
                placeholder="聯絡電話"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <input
                type="text"
                placeholder="毛孩名稱"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600">
                <option>毛孩類型（犬/貓）</option>
                <option>犬</option>
                <option>貓</option>
              </select>
              <div className="flex gap-4 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowReservationModal(false)}
                >
                  取消
                </Button>
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => {
                    setShowReservationModal(false);
                    alert("感謝您的預約！我們將盡快與您聯絡。");
                  }}
                >
                  提交
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
