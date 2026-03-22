import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "wouter";

// Image URLs for Cha'Paludo brand
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-hero-banner-ChrsERYKGUeHwSPScN9PFp.webp";
const PRODUCT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-product-showcase-R42iXhhcT29pn6ScVPTNYG.webp";
const HEALTHY_TEETH_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-dog-teeth-healthy-Ym8zoyRDjaDGsmv5gdKJNQ.webp";

// Product functions and sizes
const FUNCTIONS = [
  { id: "digestive", name: "腸道", color: "bg-yellow-100", textColor: "text-yellow-700" },
  { id: "skin", name: "皮膚", color: "bg-pink-100", textColor: "text-pink-700" },
  { id: "joint", name: "關節", color: "bg-blue-100", textColor: "text-blue-700" },
  { id: "immune", name: "免疫", color: "bg-purple-100", textColor: "text-purple-700" }
];

const SIZES = [
  { id: "small", name: "小型犬+貓", weight: "≤10kg" },
  { id: "medium", name: "中型犬", weight: "11-25kg" },
  { id: "large", name: "大型犬", weight: ">25kg" }
];

export default function Home() {
  const [, setLocation] = useLocation();
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState("digestive");

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

      {/* Pain Points Section */}
      <section className="py-16 px-4 md:px-8 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            您的毛孩保健困擾
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "有成分卻缺乏便利性",
                description: "市面上保健食品成分豐富，但飼主需要每天複雜配置，毛孩也不一定願意吃。",
                icon: "⏰"
              },
              {
                title: "毛孩不願意吃",
                description: "保健食品味道不佳，毛孩挑食，導致保健效果大打折扣。",
                icon: "😞"
              },
              {
                title: "消耗快，缺乏互動",
                description: "保健肉塊雖然毛孩喜歡，但快速消耗，缺乏互動樂趣與長效潔牙功能。",
                icon: "⚡"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Cha'Paludo 的解決方案
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "4 大機能",
                description: "腸道、皮膚、關節、免疫，滿足不同保健需求"
              },
              {
                title: "3 種體型",
                description: "小型犬+貓、中型犬、大型犬，精準營養配置"
              },
              {
                title: "毛孩愛吃",
                description: "美味配方設計，毛孩主動享受，保健無負擔"
              },
              {
                title: "潔牙 + 互動",
                description: "邊潔牙邊玩耍，一舉多得的日常保健"
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

      {/* Product Matrix Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            產品矩陣
          </h2>
          
          {/* Function Selector */}
          <div className="mb-12">
            <p className="text-center text-gray-600 mb-6">選擇機能需求</p>
            <div className="flex flex-wrap justify-center gap-4">
              {FUNCTIONS.map((func) => (
                <button
                  key={func.id}
                  onClick={() => setSelectedFunction(func.id)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    selectedFunction === func.id
                      ? `${func.color} ${func.textColor} ring-2 ring-offset-2 ring-green-600`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {func.name}
                </button>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="grid md:grid-cols-3 gap-8">
            {SIZES.map((size) => {
              const func = FUNCTIONS.find(f => f.id === selectedFunction);
              return (
                <div key={size.id} className={`p-6 rounded-lg shadow-md border-2 border-green-200 ${func?.color}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{size.name}</h3>
                  <p className="text-gray-600 mb-4">體重：{size.weight}</p>
                  <div className="bg-white rounded p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">每盒 30 支 (15 日份)</p>
                    <p className="text-sm text-gray-600 mb-2">每支 12g</p>
                    <p className="text-lg font-bold text-green-700">
                      {func?.name} 機能配方
                    </p>
                  </div>
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => setLocation(`/product/${selectedFunction}-${size.id}`)}
                  >
                    查看詳情
                  </Button>
                </div>
              );
            })}
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
                  <p className="text-gray-600">潔牙、口氣清新、機能保健、互動樂趣</p>
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
                onClick={() => setLocation("/faq")}
                className="bg-green-600 hover:bg-green-700 text-white w-full"
              >
                了解更多
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
              Cha'Paludo 源自對毛孩口腔健康與日常保健的深切關懷。我們發現許多飼主面臨一個共同困擾：
              <strong>保健食品有成分，但毛孩不願意吃；保健肉塊毛孩愛吃，但快速消耗缺乏互動樂趣。</strong>
            </p>
            <p>
              我們的使命就是創造一個簡單、美味、有效、有趣的日常保健解決方案。
              <strong>讓毛孩在享受美味的同時，自然地維護口腔健康、滿足機能保健需求。</strong>
            </p>
            <p>
              經過多年的研發與獸醫師的臨床驗證，Cha'Paludo 機能潔牙骨應運而生。
              我們提供 4 大機能 × 3 種體型的完整矩陣，確保每隻毛孩都能找到最適合的保健方案。
            </p>
            <p>
              <strong>「兩支就夠，一天不缺席」</strong>——這不只是一句標語，
              而是我們對每位飼主的承諾：簡單、便利、有效、有趣的日常保健，
              讓毛孩擁有健康的笑容與活力的人生。
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
                q: "為什麼要選擇 Cha'Paludo？",
                a: "Cha'Paludo 結合了潔牙、機能保健、毛孩愛吃、互動樂趣於一身。相比傳統保健食品，我們提供更便利、更有效、更有趣的日常保健方案。"
              },
              {
                q: "4 大機能分別是什麼？",
                a: "腸道（消化健康）、皮膚（毛髮光澤）、關節（活動靈活）、免疫（抵抗力增強）。您可根據毛孩的需求選擇相應機能。"
              },
              {
                q: "如何選擇體型規格？",
                a: "我們提供小型犬+貓（≤10kg）、中型犬（11-25kg）、大型犬（>25kg）三種規格，確保營養配置精準適配。"
              },
              {
                q: "每天要吃幾支？",
                a: "建議每天 1-2 支，可視毛孩的體型與咀嚼習慣調整。"
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
            開始毛孩的保健之旅
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
