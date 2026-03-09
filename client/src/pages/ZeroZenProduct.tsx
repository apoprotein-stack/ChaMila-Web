import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

// Product data for different ZeroZen specifications
const productData: Record<string, any> = {
  '150ml': {
    name: 'ZeroZen 臭難忍 150ml 隨身瓶',
    price: 'NT$299',
    subscriptionPrice: 'NT$269',
    image: 'https://via.placeholder.com/400x500?text=ZeroZen+150ml',
    description: '隨身攜帶，瞬時歸零。適合外出、旅遊、車內使用，輕巧便攜。',
    specifications: {
      容量: '150ml',
      規格: '隨身瓶',
      用途: '外出、旅遊、車內除臭',
      保存期限: '3年',
    },
    ingredients: [
      '陽離子介面活性劑',
      '天然植物萃取',
      '去離子水',
      '香精',
      '防腐劑（符合台灣法規）',
    ],
    usage: [
      '直接噴灑於需要除臭的區域',
      '距離15-20cm處均勻噴灑',
      '無需稀釋，開蓋即用',
      '建議每次2-3下，根據需要調整',
    ],
    certifications: [
      '台灣衛生福利部核准',
      '符合 CNS 標準',
      '寵物友善認證',
      '環保包裝認證',
    ],
    benefits: [
      '瞬時除臭效果',
      '溫和不刺激',
      '對寵物肌膚友善',
      '環保可回收包裝',
      '免稀釋直接使用',
    ],
  },
  '300ml': {
    name: 'ZeroZen 臭難忍 300ml 家用瓶',
    price: 'NT$499',
    subscriptionPrice: 'NT$449',
    image: 'https://via.placeholder.com/400x500?text=ZeroZen+300ml',
    description: '家庭必備，全方位除臭。適合客廳、臥室、廚房、浴室等家居空間。',
    specifications: {
      容量: '300ml',
      規格: '家用瓶',
      用途: '家居全面除臭',
      保存期限: '3年',
    },
    ingredients: [
      '陽離子介面活性劑',
      '天然植物萃取',
      '去離子水',
      '香精',
      '防腐劑（符合台灣法規）',
    ],
    usage: [
      '直接噴灑於需要除臭的區域',
      '距離15-20cm處均勻噴灑',
      '無需稀釋，開蓋即用',
      '根據空間大小調整使用量',
      '建議每天使用1-2次',
    ],
    certifications: [
      '台灣衛生福利部核准',
      '符合 CNS 標準',
      '寵物友善認證',
      '環保包裝認證',
    ],
    benefits: [
      '高效除臭',
      '溫和不刺激',
      '對寵物肌膚友善',
      '環保可回收包裝',
      '經濟實惠',
    ],
  },
  '500ml': {
    name: 'ZeroZen 臭難忍 500ml 大容量瓶',
    price: 'NT$799',
    subscriptionPrice: 'NT$719',
    image: 'https://via.placeholder.com/400x500?text=ZeroZen+500ml',
    description: '大容量經濟裝，長期使用更划算。適合寵物家庭、多房間使用。',
    specifications: {
      容量: '500ml',
      規格: '大容量瓶',
      用途: '寵物家庭、多房間長期使用',
      保存期限: '3年',
    },
    ingredients: [
      '陽離子介面活性劑',
      '天然植物萃取',
      '去離子水',
      '香精',
      '防腐劑（符合台灣法規）',
    ],
    usage: [
      '直接噴灑於需要除臭的區域',
      '距離15-20cm處均勻噴灑',
      '無需稀釋，開蓋即用',
      '根據空間大小調整使用量',
      '建議每天使用1-3次',
    ],
    certifications: [
      '台灣衛生福利部核准',
      '符合 CNS 標準',
      '寵物友善認證',
      '環保包裝認證',
    ],
    benefits: [
      '高效除臭',
      '溫和不刺激',
      '對寵物肌膚友善',
      '環保可回收包裝',
      '大容量經濟划算',
    ],
  },
  '2000ml': {
    name: 'ZeroZen 臭難忍 2000ml 商業用瓶',
    price: 'NT$2,499',
    subscriptionPrice: 'NT$2,249',
    image: 'https://via.placeholder.com/400x500?text=ZeroZen+2000ml',
    description: '商業用大容量，適合寵物店、動物醫院、美容沙龍等專業場所。',
    specifications: {
      容量: '2000ml',
      規格: '商業用瓶',
      用途: '寵物店、動物醫院、美容沙龍',
      保存期限: '3年',
    },
    ingredients: [
      '陽離子介面活性劑',
      '天然植物萃取',
      '去離子水',
      '香精',
      '防腐劑（符合台灣法規）',
    ],
    usage: [
      '直接噴灑於需要除臭的區域',
      '距離15-20cm處均勻噴灑',
      '無需稀釋，開蓋即用',
      '根據空間大小調整使用量',
      '商業用途建議每天多次使用',
    ],
    certifications: [
      '台灣衛生福利部核准',
      '符合 CNS 標準',
      '寵物友善認證',
      '環保包裝認證',
      '商業用認證',
    ],
    benefits: [
      '高效除臭',
      '溫和不刺激',
      '對寵物肌膚友善',
      '環保可回收包裝',
      '商業用大容量',
      '批量訂購優惠',
    ],
  },
};

export default function ZeroZenProduct() {
  const [location, navigate] = useLocation();
  const spec = new URLSearchParams(location.split('?')[1]).get('spec') || '150ml';
  const product = productData[spec];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">產品未找到</h1>
          <Button onClick={() => navigate('/')}>返回首頁</Button>
        </div>
      </div>
    );
  }

  const displayFontStyle = {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    letterSpacing: '0.05em',
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>返回</span>
          </button>
          <h1 className="text-xl font-bold text-primary">ZeroZen 臭難忍</h1>
          <div className="w-12" />
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="flex items-center justify-center bg-secondary/20 rounded-2xl p-8 min-h-96">
            <div className="text-center text-foreground/40">
              <div className="text-6xl mb-4">📦</div>
              <p>{product.name}</p>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold mb-4" style={displayFontStyle}>
              {product.name}
            </h1>
            <p className="text-xl text-foreground/80 mb-6">{product.description}</p>

            {/* Price */}
            <div className="mb-8 p-6 bg-accent/10 rounded-xl">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-3xl font-bold text-primary">{product.price}</span>
                <span className="text-lg text-foreground/60 line-through">{product.price}</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="text-2xl font-bold text-accent">訂閱價 {product.subscriptionPrice}</span>
                <span className="text-sm text-accent">享 88 折優惠</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                立即購買
              </button>
              <button className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                加入訂閱
              </button>
            </div>

            {/* Specifications */}
            <div className="space-y-3 p-6 bg-secondary/10 rounded-xl">
              <h3 className="font-semibold text-lg mb-4">產品規格</h3>
              {Object.entries(product.specifications).map(([key, value]: [string, any]) => (
                <div key={key} className="flex justify-between">
                  <span className="text-foreground/60">{key}</span>
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={displayFontStyle}>
            產品優勢
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {product.benefits.map((benefit: string, idx: number) => (
              <div key={idx} className="p-4 bg-primary/10 rounded-lg text-center">
                <p className="font-semibold text-primary">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ingredients */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={displayFontStyle}>
            成分表
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-secondary/10 rounded-xl">
              <h3 className="font-semibold text-lg mb-6">主要成分</h3>
              <ul className="space-y-3">
                {product.ingredients.map((ingredient: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-accent/10 rounded-xl">
              <h3 className="font-semibold text-lg mb-6">成分特點</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>• 採用溫和的陽離子介面活性劑</li>
                <li>• 天然植物萃取成分</li>
                <li>• 不含有害化學物質</li>
                <li>• 符合台灣法規標準</li>
                <li>• 寵物友善配方</li>
                <li>• 環保可降解成分</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Usage Instructions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={displayFontStyle}>
            使用方法
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-blue-50 rounded-xl">
              <h3 className="font-semibold text-lg mb-6">使用步驟</h3>
              <ol className="space-y-4">
                {product.usage.map((step: string, idx: number) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="p-8 bg-yellow-50 rounded-xl">
              <h3 className="font-semibold text-lg mb-6">使用建議</h3>
              <ul className="space-y-3 text-foreground/80">
                <li>✓ 避免直接接觸眼睛</li>
                <li>✓ 使用後保持通風</li>
                <li>✓ 存放於陰涼乾燥處</li>
                <li>✓ 遠離兒童和寵物</li>
                <li>✓ 如有過敏反應，立即停止使用</li>
                <li>✓ 建議在通風良好的環境使用</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={displayFontStyle}>
            安全認證
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.certifications.map((cert: string, idx: number) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl text-center">
                <div className="text-3xl mb-3">✓</div>
                <p className="font-semibold text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={displayFontStyle}>
            常見問題
          </h2>
          <div className="space-y-4">
            <div className="p-6 bg-secondary/10 rounded-xl">
              <h3 className="font-semibold mb-2">Q: ZeroZen 可以用在寵物身上嗎？</h3>
              <p className="text-foreground/80">A: 可以。ZeroZen 採用溫和的陽離子介面活性劑，對寵物肌膚友善。建議避免直接噴灑在寵物臉部，可用於寵物活動區域除臭。</p>
            </div>
            <div className="p-6 bg-secondary/10 rounded-xl">
              <h3 className="font-semibold mb-2">Q: 需要稀釋使用嗎？</h3>
              <p className="text-foreground/80">A: 不需要。ZeroZen 採用免稀釋設計，開蓋即可直接使用，非常方便。</p>
            </div>
            <div className="p-6 bg-secondary/10 rounded-xl">
              <h3 className="font-semibold mb-2">Q: 保存期限是多久？</h3>
              <p className="text-foreground/80">A: 保存期限為 3 年。建議存放於陰涼乾燥處，避免陽光直射。</p>
            </div>
            <div className="p-6 bg-secondary/10 rounded-xl">
              <h3 className="font-semibold mb-2">Q: 可以用於汽車內嗎？</h3>
              <p className="text-foreground/80">A: 可以。ZeroZen 適合用於車內、家居、寵物店等各種場景除臭。</p>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={displayFontStyle}>
            其他規格
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.keys(productData).map((spec) => (
              <button
                key={spec}
                onClick={() => navigate(`/zerozen-product?spec=${spec}`)}
                className={`p-6 rounded-xl font-semibold transition-all ${
                  spec === (new URLSearchParams(location.split('?')[1]).get('spec') || '150ml')
                    ? 'bg-primary text-white'
                    : 'bg-secondary/20 text-foreground hover:bg-secondary/40'
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-blue-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4" style={displayFontStyle}>
            立即開始使用 ZeroZen
          </h2>
          <p className="text-lg mb-8 text-white/90">瞬時歸零，重塑生活美學。選擇適合您的規格，享受清新的生活環境。</p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
              立即購買
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              加入訂閱
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
