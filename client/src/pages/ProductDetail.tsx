import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation, useRoute } from "wouter";

// Product data structure
const PRODUCTS = {
  digestive: {
    name: "腸道機能潔牙骨",
    description: "促進消化健康，改善腸道菌叢平衡",
    benefits: [
      "促進腸道益菌生長",
      "改善消化效率",
      "減少脹氣與便秘",
      "增強腸道免疫力"
    ],
    ingredients: ["益生菌", "膳食纖維", "消化酵素", "天然豬肉"]
  },
  skin: {
    name: "皮膚機能潔牙骨",
    description: "維護毛髮光澤，舒緩皮膚問題",
    benefits: [
      "增進毛髮光澤度",
      "舒緩皮膚搔癢",
      "強化皮膚屏障",
      "減少皮膚發炎"
    ],
    ingredients: ["Omega-3", "Omega-6", "維生素E", "天然豬肉"]
  },
  joint: {
    name: "關節機能潔牙骨",
    description: "維護關節靈活度，支持活動能力",
    benefits: [
      "維護關節軟骨",
      "增進活動靈活度",
      "減少關節不適",
      "支持長期活動能力"
    ],
    ingredients: ["葡萄糖胺", "軟骨素", "膠原蛋白", "天然豬肉"]
  },
  immune: {
    name: "免疫機能潔牙骨",
    description: "增強抵抗力，維持健康狀態",
    benefits: [
      "增強免疫力",
      "提升抵抗能力",
      "維持健康體質",
      "支持整體健康"
    ],
    ingredients: ["β-葡聚糖", "維生素C", "鋅", "天然豬肉"]
  }
};

const SIZES = {
  small: {
    name: "小型犬+貓",
    weight: "≤10kg",
    price: 599,
    quantity: 30,
    dailyDosage: "1支"
  },
  medium: {
    name: "中型犬",
    weight: "11-25kg",
    price: 699,
    quantity: 30,
    dailyDosage: "1-2支"
  },
  large: {
    name: "大型犬",
    weight: ">25kg",
    price: 799,
    quantity: 30,
    dailyDosage: "2支"
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
          <Button onClick={() => setLocation("/")} className="bg-green-600 hover:bg-green-700 text-white">
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
          <Button onClick={() => setLocation("/")} className="bg-green-600 hover:bg-green-700 text-white">
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
          <button onClick={() => setLocation("/")} className="text-green-600 hover:text-green-700 font-semibold">
            ← 返回首頁
          </button>
        </div>
      </div>

      {/* Product Header */}
      <section className="px-4 md:px-8 py-12 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full font-semibold">
              {product.name}
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
            <span className="text-4xl font-bold text-green-700">NT${size.price}</span>
            <span className="text-gray-600">/ 盒 (30 支)</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Left Column - Product Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">核心功效</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-600 font-bold mr-3 text-lg">✓</span>
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
                  <div key={idx} className="bg-green-50 p-4 rounded-lg border border-green-200">
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
                  <span className="text-gray-600">12g</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-gray-700">建議用量</span>
                  <span className="text-gray-600">每天 {size.dailyDosage}</span>
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
                  <p className="text-gray-600">每天給予 1-2 支，可作為零食或獎勵。</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-gray-800 mb-2">互動時間</p>
                  <p className="text-gray-600">讓毛孩自然咀嚼，享受潔牙與保健的雙重效果。</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold text-gray-800 mb-2">儲存方式</p>
                  <p className="text-gray-600">置於陰涼乾燥處，開封後請於 30 天內食用完畢。</p>
                </div>
              </div>
            </div>

            {/* TNU Technology */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">獨家 TNU 熱封營養技術</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-300">
                <p className="text-gray-700 mb-4">
                  <strong>TNU (ThemoNutricUp)</strong> 是 Cha'Paludo 獨家開發的熱封營養加強技術，
                  能將完整的營養成分密封在每一支潔牙骨中。
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>完整保留營養成分，不流失</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>每支都能提供最大的保健效果</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>讓毛孩吃零食也能獲得完整的機能保健</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">✓</span>
                    <span>結合潔牙、保健、美味於一身</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Safety & Certification */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">安全認證與品質把關</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-300">
                  <p className="font-semibold text-gray-800 mb-2">✓ 100% 台灣豬 CAS 認證</p>
                  <p className="text-sm text-gray-600">採用在地台灣豬，通過 CAS 認證把關，符合最高食品安全標準。台灣豬肉品質優良，營養豐富，是毛孩最好的蛋白質來源。</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-gray-800 mb-2">✓ 獸醫師推薦</p>
                  <p className="text-sm text-gray-600">經過獸醫師臨床驗證與推薦</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-gray-800 mb-2">✓ 無添加</p>
                  <p className="text-sm text-gray-600">無人工香料、色素、防腐劑</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
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
                <div className="flex justify-between text-lg font-bold text-green-700 border-t pt-3">
                  <span>小計</span>
                  <span>NT${totalPrice}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
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
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-semibold text-green-800 mb-2">💚 訂閱優惠</p>
                <p className="text-xs text-green-700">
                  加入會員後，可享受訂閱優惠與專屬會員價格。
                </p>
              </div>

              {/* Product Comparison */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-semibold text-blue-800 mb-2">📊 其他體型</p>
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
                a: "可以。Cha'Paludo 採用天然成分，經過安全檢測，適合長期作為日常保健食品。"
              },
              {
                q: "如何確認毛孩適應良好？",
                a: "初次使用建議先給予少量，觀察毛孩的反應。如無異常，可逐漸增加用量至建議量。"
              },
              {
                q: "可以與其他保健品一起食用嗎？",
                a: "可以。建議諮詢獸醫師，確保不同保健品之間無衝突。"
              },
              {
                q: "訂閱有什麼優勢？",
                a: "加入訂閱計畫，可享受優惠價格、定期配送、會員專屬服務。"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">其他機能選擇</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {Object.entries(PRODUCTS)
              .filter(([key]) => key !== functionKey)
              .map(([key, prod]) => (
                <div key={key} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setLocation(`/product/${key}-${sizeKey}`)}
                >
                  <h3 className="font-bold text-gray-800 mb-3">{prod.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{prod.description}</p>
                  <Button
                    variant="outline"
                    className="w-full text-green-600 border-green-600 hover:bg-green-50"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(`/product/${key}-${sizeKey}`);
                    }}
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
