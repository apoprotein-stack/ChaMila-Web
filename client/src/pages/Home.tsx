import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

// Image URLs for Cha'Paludo brand
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-hero-banner-ChrsERYKGUeHwSPScN9PFp.webp";
const PRODUCT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-product-showcase-R42iXhhcT29pn6ScVPTNYG.webp";
const HEALTHY_TEETH_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-dog-teeth-healthy-Ym8zoyRDjaDGsmv5gdKJNQ.webp";

// Brand story and lifestyle images
const BRAND_STORY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-brand-story-founder-KwBW233dJMfLuTAHx3SDqw.webp";
const MORNING_ROUTINE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-lifestyle-morning-routine-8hRTq48XLk6u75RHMEjhyX.webp";
const EVENING_ROUTINE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-lifestyle-evening-routine-KBoT2xaWnjYo55CsgJ4tsR.webp";
const VET_CONSULTATION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-veterinary-consultation-WZqx7RfFiWUprTgXjyyVx6.webp";
const HAPPY_DOG_TEETH_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-happy-dog-teeth-EQLtwNKPB55qMfgP9okBxD.webp"

// Product functions - Year 1 positioning
const FUNCTIONS = [
  { id: "digestive", name: "口腸共健", color: "bg-blue-100", textColor: "text-blue-700", description: "潔牙 × 腸道健康" },
  { id: "skin", name: "口皮共健", color: "bg-pink-100", textColor: "text-pink-700", description: "潔牙 × 皮膚光澤" }
];

// Product sizes - Year 1 matrix
const SIZES = [
  { id: "small", name: "S 尺寸", weight: "≤5kg 小型犬", price: 420, weight_per_pack: 180, pieces: 30 },
  { id: "medium", name: "M 尺寸", weight: "5-10kg 小型犬", price: 480, weight_per_pack: 300, pieces: 30 }
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
          alt="Cha'Paludo Functional Dental Chews"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Cha'Paludo
            </h1>
            <p className="text-xl md:text-2xl mb-8">機能潔牙骨</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              嚼一根，早晚兩次，照顧的不只是牙齒
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

      {/* Core Concept Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            潔牙為入口，全身為出口
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Cha'Paludo 機能潔牙骨是一種創新的日常保健方案，透過每日咀嚼，同時維護口腔健康與全身機能。
              </p>
              <p>
                我們發現，口腔微生物群落與腸道、皮膚健康之間存在密切的關係。因此，以「潔牙為入口、全身為出口」的機制訴求，
                讓毛孩在享受潔牙的同時，自然地維護腸道健康、皮膚光澤，以及整體免疫力。
              </p>
              <p className="font-semibold text-blue-700">
                「嚼一根，早晚兩次，照顧的不只是牙齒」
              </p>
            </div>
            <div>
              <img
                src={HEALTHY_TEETH_IMAGE}
                alt="Healthy Teeth Benefits"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Matrix Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Year 1 產品矩陣
          </h2>
          
          {/* Function Selector */}
          <div className="mb-12">
            <p className="text-center text-gray-600 mb-6">選擇機能系列</p>
            <div className="flex flex-wrap justify-center gap-4">
              {FUNCTIONS.map((func) => (
                <button
                  key={func.id}
                  onClick={() => setSelectedFunction(func.id)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    selectedFunction === func.id
                      ? `${func.color} ${func.textColor} ring-2 ring-offset-2 ring-blue-600`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <div className="font-bold">{func.name}</div>
                  <div className="text-sm">{func.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="grid md:grid-cols-2 gap-8">
            {SIZES.map((size) => {
              const func = FUNCTIONS.find(f => f.id === selectedFunction);
              const skuCode = selectedFunction === "digestive" ? "PI" : "PS";
              const sizeCode = size.id === "small" ? "S" : "M";
              return (
                <div key={size.id} className={`p-6 rounded-lg shadow-md border-2 border-blue-200 ${func?.color}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{size.name}</h3>
                      <p className="text-gray-600">適用：{size.weight}</p>
                    </div>
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {skuCode}-{sizeCode}
                    </span>
                  </div>
                  <div className="bg-white rounded p-4 mb-4">
                    <p className="text-sm text-gray-600 mb-2">每盒 {size.pieces} 支（15 日份）</p>
                    <p className="text-sm text-gray-600 mb-2">每盒重量 {size.weight_per_pack}g</p>
                    <p className="text-lg font-bold text-blue-700 mb-3">
                      {func?.name}
                    </p>
                    <p className="text-2xl font-bold text-gray-800">NT${size.price}</p>
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
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
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            產品介紹
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={PRODUCT_IMAGE}
                alt="Cha'Paludo Product"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Cha'Paludo 機能潔牙骨
              </h3>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-bold text-gray-700">核心理念</p>
                  <p className="text-gray-600">「嚼一根，早晚兩次，照顧的不只是牙齒」</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">訴求機制</p>
                  <p className="text-gray-600">潔牙為入口、全身為出口，透過每日咀嚼維護口腔與全身健康</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">Year 1 系列</p>
                  <p className="text-gray-600">口腸共健（PI）、口皮共健（PS）</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700">建議用量</p>
                  <p className="text-gray-600">每天早晚各 1 支，可作為日常保健</p>
                </div>
              </div>
              <Button
                size="lg"
                onClick={() => setLocation("/")}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                了解更多
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            常見問題
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "為什麼要選擇 Cha'Paludo？",
                a: "Cha'Paludo 是機能潔牙骨，以潔牙為入口、全身為出口。透過每日咀嚼，同時維護口腔健康與全身機能。相比傳統保健食品或單純潔牙產品，我們提供更便利、更有效的日常保健方案。"
              },
              {
                q: "口腸共健與口皮共健有什麼差別？",
                a: "口腸共健（PI）主要針對腸道健康與消化機能；口皮共健（PS）主要針對皮膚屏障與毛髮光澤。兩者都透過潔牙為入口，維護口腔健康的同時，支持相應的全身機能。"
              },
              {
                q: "為什麼要每日早晚各吃一支？",
                a: "「嚼一根，早晚兩次」是我們的核心訴求。每日早晚各一支，能提供持續的潔牙效果與機能保健支持，是最有效的日常保健模式。"
              },
              {
                q: "如何選擇 S 或 M 尺寸？",
                a: "S 尺寸適合 ≤5kg 的小型犬，M 尺寸適合 5-10kg 的小型犬。請根據毛孩的體重選擇相應規格。"
              },
              {
                q: "可以長期食用嗎？",
                a: "可以。Cha'Paludo 採用安全的食材與製程，經過獸醫師臨床驗證，適合長期作為日常保健食品。"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-gray-800 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story - Founder & Vision */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            品牌故事
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={BRAND_STORY_IMAGE}
                alt="Cha'Paludo Founder"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Cha'Paludo 源自對毛孩口腔健康與全身保健的深切關懷。我們發現，許多飼主面臨一個共同困擾：
                <strong className="text-gray-800">傳統保健食品雖然有成分，但毛孩不一定願意吃；而單純的潔牙產品雖然毛孩喜歡，卻無法提供全身保健支持。</strong>
              </p>
              <p className="text-lg">
                經過多年的研究與獸醫師的臨床驗證，我們發現口腔微生物群落與腸道、皮膚健康之間存在密切的關係。
                基於這一科學發現，Cha'Paludo 機能潔牙骨應運而生。
              </p>
              <p className="text-lg font-semibold text-blue-700">
                「嚼一根，早晚兩次，照顧的不只是牙齒」
              </p>
            </div>
          </div>

          {/* Daily Routine Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">日常保健的兩個時刻</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={MORNING_ROUTINE_IMAGE}
                  alt="Morning Routine"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-blue-50">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">早晨的開始</h4>
                  <p className="text-gray-600">
                    每天早上，給毛孩一支 Cha'Paludo，開啟健康的一天。
                    溫暖的晨光中，看著毛孩開心地咀嚼，是飼主最溫馨的時刻。
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={EVENING_ROUTINE_IMAGE}
                  alt="Evening Routine"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 bg-pink-50">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">晚間的陪伴</h4>
                  <p className="text-gray-600">
                    傍晚時分，再給毛孩一支，在舒適的環境中享受潔牙時光。
                    這是毛孩與飼主親密互動的美好時刻。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Veterinary Endorsement */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 text-gray-600 leading-relaxed order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-800">獸醫師推薦</h3>
              <p className="text-lg">
                Cha'Paludo 已通過多位獸醫師的臨床驗證。我們的產品設計基於科學研究，
                每一個配方都經過專業評估，確保毛孩的安全與健康。
              </p>
              <p className="text-lg">
                獸醫師們認可 Cha'Paludo 的創新理念——透過日常潔牙維護全身健康。
                這是傳統保健方式的革新，也是對毛孩健康的更好照顧。
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-gray-800 font-semibold">✓ 獸醫師臨床驗證</p>
                <p className="text-sm text-gray-600 mt-2">通過多項安全檢測與品質把關</p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={VET_CONSULTATION_IMAGE}
                alt="Veterinary Consultation"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Product Benefits */}
          <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Cha'Paludo 的承諾</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">😊</div>
                <h4 className="font-bold text-gray-800 mb-2">毛孩喜歡</h4>
                <p className="text-gray-600 text-sm">機能潔牙骨的口感與質地，讓毛孩主動享受每日保健</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏥</div>
                <h4 className="font-bold text-gray-800 mb-2">科學驗證</h4>
                <p className="text-gray-600 text-sm">基於口腔微生物群落與全身健康的科學發現</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💚</div>
                <h4 className="font-bold text-gray-800 mb-2">飼主安心</h4>
                <p className="text-gray-600 text-sm">安全食材、獸醫師推薦，讓飼主放心給毛孩最好的</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Dogs Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">毛孩的笑容最珍貴</h2>
          <img
            src={HAPPY_DOG_TEETH_IMAGE}
            alt="Happy Dog with Healthy Teeth"
            className="w-full md:w-2/3 mx-auto rounded-lg shadow-lg mb-8"
          />
          <p className="text-lg text-gray-600 leading-relaxed">
            健康的牙齒，是毛孩快樂生活的基礎。Cha'Paludo 致力於透過每日的潔牙保健，
            讓毛孩展現最燦爛的笑容，享受更長更健康的陪伴時光。
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
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
              className="bg-white text-blue-700 hover:bg-gray-100"
            >
              預約試吃
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              加入會員
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
