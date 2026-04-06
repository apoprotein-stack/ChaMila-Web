import { useState } from "react";
import { useLocation, useRoute } from "wouter";
import { Button } from "@/components/ui/button";

// Product data structure - Year 1 positioning
const PRODUCTS = {
  digestive: {
    name: "口腸共健",
    sku: "PI",
    description: "潔牙 × 腸道健康 - 透過每日咀嚼維護口腔與腸道健康",
    benefits: [
      "維護口腔健康",
      "支持腸道菌叢平衡",
      "促進消化機能",
      "增強腸道免疫力"
    ],
    ingredients: ["益生菌", "膳食纖維", "消化酵素", "天然食材"]
  },
  skin: {
    name: "口皮共健",
    sku: "PS",
    description: "潔牙 × 皮膚光澤 - 透過每日咀嚼維護口腔與皮膚健康",
    benefits: [
      "維護口腔健康",
      "增進毛髮光澤度",
      "強化皮膚屏障",
      "舒緩皮膚不適"
    ],
    ingredients: ["Omega-3", "Omega-6", "維生素E", "天然食材"]
  }
};

const SIZES = {
  small: {
    name: "S 尺寸",
    weight: "≤5kg 小型犬",
    price: 420,
    quantity: 30,
    weight_per_pack: 180,
    weight_per_piece: 6,
    dailyDosage: "1支"
  },
  medium: {
    name: "M 尺寸",
    weight: "5-10kg 小型犬",
    price: 480,
    quantity: 30,
    weight_per_pack: 300,
    weight_per_piece: 10,
    dailyDosage: "1支"
  }
};

export default function ProductDetail() {
  const [match, params] = useRoute("/product/:id");
  const [, setLocation] = useLocation();
  const [quantity, setQuantity] = useState(1);

  if (!match || !params?.id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">產品不存在</h1>
          <Button onClick={() => setLocation("/")} className="bg-blue-600 hover:bg-blue-700 text-white">
            返回首頁
          </Button>
        </div>
      </div>
    );
  }

  const [functionKey, sizeKey] = (params.id as string).split('-') as [keyof typeof PRODUCTS, keyof typeof SIZES];

  const product = PRODUCTS[functionKey];
  const size = SIZES[sizeKey];

  if (!product || !size) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">產品不存在</h1>
          <Button onClick={() => setLocation("/")} className="bg-blue-600 hover:bg-blue-700 text-white">
            返回首頁
          </Button>
        </div>
      </div>
    );
  }

  const totalPrice = size.price * quantity;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 px-4 md:px-8 py-4">
        <div className="max-w-6xl mx-auto">
          <button onClick={() => setLocation("/")} className="text-blue-600 hover:text-blue-700 font-semibold">
            ← 返回首頁
          </button>
        </div>
      </div>

      {/* Product Header */}
      <section className="px-4 md:px-8 py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-semibold">
              {product.name}
            </span>
            <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full font-semibold">
              SKU: {product.sku}-{sizeKey === "small" ? "S" : "M"}
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full font-semibold">
              {size.name}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Cha'Paludo {product.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {product.description}
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold text-blue-700">NT${size.price}</span>
            <span className="text-gray-600">/ 盒 (30 支)</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Left Column - Product Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Core Concept */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">核心理念</h2>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <p className="text-lg text-gray-700 font-semibold mb-3">
                  「嚼一根，早晚兩次，照顧的不只是牙齒」
                </p>
                <p className="text-gray-600">
                  Cha'Paludo 機能潔牙骨以「潔牙為入口、全身為出口」的機制訴求，
                  透過每日早晚各一支的咀嚼，同時維護口腔健康與全身機能。
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">核心功效</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-blue-600 font-bold mr-3 text-lg">✓</span>
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">主要成分</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.ingredients.map((ingredient, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-center text-gray-700 font-semibold">{ingredient}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Specifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">產品規格</h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-700">適用對象</span>
                  <span className="text-gray-600">{size.name} ({size.weight})</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-700">每盒數量</span>
                  <span className="text-gray-600">{size.quantity} 支</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-700">每支重量</span>
                  <span className="text-gray-600">{size.weight_per_piece}g</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-700">每盒重量</span>
                  <span className="text-gray-600">{size.weight_per_pack}g</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-700">建議用量</span>
                  <span className="text-gray-600">每天早晚各 {size.dailyDosage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-700">有效期限</span>
                  <span className="text-gray-600">18 個月</span>
                </div>
              </div>
            </div>

            {/* Usage Instructions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">使用方式</h2>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-gray-800 mb-2">日常保健</p>
                  <p className="text-gray-600">每天早晚各給予 1 支，讓毛孩自然咀嚼，享受潔牙與保健的雙重效果。</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-gray-800 mb-2">補購週期</p>
                  <p className="text-gray-600">30 支 / 每日 2 次 = 15 天用量，建議補購週期 14-20 天。</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-gray-800 mb-2">儲存方式</p>
                  <p className="text-gray-600">置於陰涼乾燥處，開封後請於 30 天內食用完畢。</p>
                </div>
              </div>
            </div>

            {/* Safety & Certification */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">品質把關</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-800 mb-2">✓ 獸醫師推薦</p>
                  <p className="text-sm text-gray-600">經過獸醫師臨床驗證與推薦</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-800 mb-2">✓ 安全食材</p>
                  <p className="text-sm text-gray-600">採用安全的天然食材與製程</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-800 mb-2">✓ 無添加</p>
                  <p className="text-sm text-gray-600">無人工香料、色素、防腐劑</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-800 mb-2">✓ 安全檢測</p>
                  <p className="text-sm text-gray-600">通過多項安全檢測與品質把關</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Purchase */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-20 space-y-6">
              {/* Quantity Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  購買數量
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                  >
                    −
                  </button>
                  <span className="text-lg font-bold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Summary */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>單價</span>
                  <span>NT${size.price}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>數量</span>
                  <span>{quantity} 盒</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-blue-700 border-t pt-3">
                  <span>小計</span>
                  <span>NT${totalPrice}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    alert(`已將 ${quantity} 盒 ${product.name} (${size.name}) 加入購物車`);
                  }}
                >
                  加入購物車
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                  onClick={() => setLocation("/auth")}
                >
                  立即購買
                </Button>
              </div>

              {/* Subscription Info */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-2">💙 訂閱優惠</p>
                <p className="text-xs text-blue-700">
                  加入會員後，可享受訂閱優惠與專屬會員價格。
                </p>
              </div>

              {/* Product Comparison */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-2">📊 其他規格</p>
                <div className="space-y-2">
                  {Object.entries(SIZES)
                    .filter(([key]) => key !== sizeKey)
                    .map(([key, sizeData]) => (
                      <button
                        key={key}
                        onClick={() => setLocation(`/product/${functionKey}-${key}`)}
                        className="block w-full text-left px-3 py-2 rounded bg-white hover:bg-blue-100 transition-colors text-sm text-blue-700 font-semibold"
                      >
                        {sizeData.name}
                      </button>
                    ))}
                </div>
              </div>

              {/* Function Comparison */}
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                <p className="text-sm font-semibold text-pink-800 mb-2">🔄 其他系列</p>
                <div className="space-y-2">
                  {Object.entries(PRODUCTS)
                    .filter(([key]) => key !== functionKey)
                    .map(([key, productData]) => (
                      <button
                        key={key}
                        onClick={() => setLocation(`/product/${key}-${sizeKey}`)}
                        className="block w-full text-left px-3 py-2 rounded bg-white hover:bg-pink-100 transition-colors text-sm text-pink-700 font-semibold"
                      >
                        {productData.name}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-8 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">常見問題</h2>
          <div className="space-y-4">
            {[
              {
                q: "這個產品適合我的毛孩嗎？",
                a: `適合 ${size.name} 的毛孩（${size.weight}）。如果您的毛孩不在此體重範圍，建議選擇其他規格。`
              },
              {
                q: "可以長期食用嗎？",
                a: "可以。Cha'Paludo 採用安全的天然食材與製程，經過獸醫師臨床驗證，適合長期作為日常保健食品。"
              },
              {
                q: "為什麼要每日早晚各吃一支？",
                a: "「嚼一根，早晚兩次」是我們的核心訴求。每日早晚各一支，能提供持續的潔牙效果與機能保健支持，是最有效的日常保健模式。"
              },
              {
                q: "口腸共健和口皮共健有什麼不同？",
                a: "口腸共健（PI）主要針對腸道健康與消化機能；口皮共健（PS）主要針對皮膚屏障與毛髮光澤。您可根據毛孩的需求選擇相應系列。"
              },
              {
                q: "可以與其他保健品一起食用嗎？",
                a: "可以。建議諮詢獸醫師，確保不同保健品之間無衝突。"
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

      {/* Other Products */}
      <section className="px-4 md:px-8 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">其他系列</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(PRODUCTS)
              .filter(([key]) => key !== functionKey)
              .map(([key, productData]) => (
                <div key={key} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{productData.name}</h3>
                  <p className="text-gray-600 mb-4">{productData.description}</p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setLocation(`/product/${key}-${sizeKey}`)}
                  >
                    查看詳情
                  </Button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
