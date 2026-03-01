import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, Zap, Heart } from "lucide-react";
import { useState } from "react";
import FunctionSelector from "@/components/FunctionSelector";

const heroImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chamila-hero-banner-final-jq7jj2MVgDakkTSxRcKKz2.webp";

const productImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chamila-product-showcase-final-bVi8MdWMSEEhiSyDrvLARC.webp";

const technologyImageUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chamila-technology-visual-final-D9vG8zS22r9FW29gkbos7m.webp";

const dogPlayingUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chamila-dog-playing-final-LkcsPbkFsyUU2dfxopLWsB.webp";

const catActiveUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chamila-cat-active-final-DskdRtFrJtsGP3wwF5iLsp.webp";

const petsTogetherUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chamila-pets-together-final-ZNayDj88wXNpoKYBurw5hD.webp";

const dogHealthyUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chamila-dog-healthy-vitality-final-XkCvUcbX8fXABXwaihdqPH.webp";

const logoUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213447942/foDWJtLKKXQBUytM.png";

const displayFontStyle = { fontFamily: "Georgia, serif", fontWeight: "700" };

export default function Home() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="CháMila Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg text-primary" style={displayFontStyle}>CháMila</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-foreground hover:text-primary transition">
              品牌故事
            </a>
            <a href="#products" className="text-sm text-foreground hover:text-primary transition">
              產品
            </a>
            <a href="#technology" className="text-sm text-foreground hover:text-primary transition">
              技術
            </a>
            <a href="/faq" className="text-sm text-foreground hover:text-primary transition">
              常見問題
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition">
              聯絡我們
            </a>
          </div>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            預約試吃
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[600px] lg:min-h-[700px]">
          {/* Left Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-12 lg:py-20 bg-gradient-to-br from-primary/5 to-transparent">
            <div className="max-w-xl">
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-sm font-semibold text-accent">芯研毛膳 Cha'Mila</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight" style={displayFontStyle}>
                為毛孩的健康，做最好的選擇
              </h1>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                在地臺灣豬 CAS認證 × 機能配方 × 獸醫師背書。透過 ThermoNutricUp 技術，將台灣在地豬肉轉化為寵物保健食品，讓毛孩享受科學級的營養補充。產品採用 50-300g 夾鏈袋包裝，新鮮便利。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary hover:bg-primary/90 text-white text-base h-12 px-8">
                  了解更多 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 text-base h-12 px-8">
                  預約試吃
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-primary to-primary/80 p-8">
            <img
              src={heroImageUrl}
              alt="CháMila Premium Pet Supplements"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Mobile Hero Image */}
        <div className="lg:hidden w-full h-96 bg-gradient-to-br from-primary to-primary/80">
          <img
            src={heroImageUrl}
            alt="CháMila Premium Pet Supplements"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Vibrant Pet Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={displayFontStyle}>
                健康活力的毛孩
              </h2>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                CháMila 的產品設計目標，就是讓每一隻毛孩都能展現最佳的活力與健康狀態。透過科學配方與優質肉源，我們幫助飼主為毛孩的日常保健做出最好的選擇。
              </p>
              <div className="flex gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-2">犬用保健</h4>
                  <p className="text-sm text-foreground/70">針對狗狗的特定需求設計，從腸胃到心血管全面照顧。</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-primary mb-2">貓用保健</h4>
                  <p className="text-sm text-foreground/70">符合貓咪營養需求，提升活力與毛髮光澤。</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={petsTogetherUrl}
                alt="Happy pets with CháMila"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={displayFontStyle}>
              核心價值
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              CháMila 致力於提供透明、科學、負責任的寵物保健解決方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "成分透明",
                description: "每批次完整成分表公開，原料來源可追溯"
              },
              {
                icon: Leaf,
                title: "台灣在地",
                description: "在地臺灣豬 CAS認證，自建工廠直接控制品質"
              },
              {
                icon: Zap,
                title: "科學配方",
                description: "機能配方設計，有明確的營養劑量與效果"
              },
              {
                icon: Heart,
                title: "獸醫背書",
                description: "專業獸醫師推薦與臨床觀察數據支持"
              }
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border hover:border-accent/30 transition"
              >
                <value.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section - Origin Story */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center" style={displayFontStyle}>
              品牌故事
            </h2>
            
            {/* Origin Story */}
            <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6" style={displayFontStyle}>因為牠們是家人</h3>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  我永遠記得那個下雨的晚上，米粒蜷在我懷裡，抓癢抓到皮都紅了，拉肚子拉到虛弱。帶去醫院，醫生一句「可能是食物過敏」，讓我心如刀割。
                </p>
                <p>
                  原來我給她的「愛」，其實是一堆雞肉+牛肉+魚肉混在一起的飼料，蛋白質來源複雜又不明。市面上許多寵物食品，肉類來源並沒有強制完整溯源，飼主根本看不清裡面到底是什麼。結果毛小孩蛋白質過敏越來越普遍——皮膚發紅、掉毛、反覆耳炎、腸胃不適……這些問題，很多時候不是生病，而是「吃錯了」。
                </p>
                <p className="font-semibold text-primary">
                  那一刻我真正明白：毛小孩不是寵物，牠們是我們生活裡最親密的家人。每天等我們回家、陪我們度過低潮、用一輩子無條件信任我們——這樣的家人，值得我們用最講究、最先進的方式去愛。
                </p>
              </div>
            </div>

            {/* Why Pork */}
            <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6" style={displayFontStyle}>為什麼選擇豬肉</h3>
                <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                  華人從小吃豬肉長大，我們最懂豬肉的安全與親切。在歐美，豬肉也已成為寵物食品的新寵——因為它相對低敏、蛋白質優質，不像牛肉、雞肉那麼容易引發過敏。
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  台灣年屠宰豬隻約 860 萬頭，豬肺、豬脾等副產品年產量穩定、成本低。我們透過自建工廠直接控制製程與品質，確保每一批產品都符合製藥級標準。
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={productImageUrl}
                  alt="CháMila Product Range"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Philosophy */}
            <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-6" style={displayFontStyle}>米其林精神 × 科學精準</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                從那天起，我們決定用獨家營養技術 + 法式精心料理的精神，來重新定義寵物營養。就像頂級米其林主廚對待珍稀食材一樣：不只是使用，而是透過科學精準的調理與專利技術，把每一份營養價值完整釋放、穩定保留，並提升到最高生物利用率。
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                我們專注於豬肉中最精華、最珍貴的部位，運用我們獨家的營養技術——包括低溫酶解活化、奈米級微乳化包埋與多階段營養鎖定系統——完整釋放這些部位的天然高密度營養精華，遠遠超越一般豬肉所能提供的價值。同時，我們以極致嚴謹的態度，徹底去除多餘油脂與不需要的成分，只保留最純淨、最低脂、最高效能的營養核心。
              </p>
            </div>

            {/* Quality Promise */}
            <div className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
              <h3 className="text-2xl font-bold text-primary mb-6" style={displayFontStyle}>國家級把關的承諾</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                每一批原料，都經過層層科學調理與檢驗，取得 CAS 國家品質保證標章。這是我們對每一隻毛孩、每一戶家庭的鄭重承諾：
              </p>
              <p className="text-xl font-semibold text-primary text-center py-6 px-4 bg-white rounded-lg border-l-4 border-accent">
                「這包裡的東西，我們敢讓自己的家人吃，也敢讓你的家人吃。」
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mt-6">
                單一蛋白來源、來源清楚、油脂極低、國家級把關，讓過敏風險降到最低。
              </p>
            </div>

            {/* Product Philosophy */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center" style={displayFontStyle}>我們的承諾</h3>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8 text-center">
                我們相信，真正的愛不是給最多，而是給最頂級、最科學、最懂的那一份。因為毛小孩是家人，我們也只想用最獨家、最講究的方式，回報這份無條件的愛。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 bg-white rounded-lg border border-border">
                  <h4 className="font-semibold text-primary text-lg mb-3">單一蛋白精華</h4>
                  <p className="text-foreground/70">精選台灣豬肉，來源清楚，降低過敏風險</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-border">
                  <h4 className="font-semibold text-primary text-lg mb-3">獨家營養技術</h4>
                  <p className="text-foreground/70">ThermoNutricUp 技術，保留 95% 營養成分</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-border">
                  <h4 className="font-semibold text-primary text-lg mb-3">法式精心調理</h4>
                  <p className="text-foreground/70">米其林精神，精準調配每一份營養</p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-border">
                  <h4 className="font-semibold text-primary text-lg mb-3">CAS 國家品質保證</h4>
                  <p className="text-foreground/70">每批檢驗，製藥級標準，敢讓家人吃</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={technologyImageUrl}
                alt="TNU Technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={displayFontStyle}>
                ThermoNutricUp 技術
              </h2>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                CháMila 的獨特技術優勢在於 ThermoNutricUp（TNU）技術，透過三階段精密製程，將營養成分完整保留在每一顆肉錠或每一條肉泥中。所有產品採用環保 50-300g 夾鏈袋包裝，方便飼主按需取用，確保新鮮度與便利性。
              </p>

              <div className="space-y-4">
                {[
                  { step: "第一階段", title: "精選肉源", desc: "台灣在地豬肺脾，新鮮直送工廠" },
                  { step: "第二階段", title: "ThermoNutricUp 製程", desc: "精密溫度控制，保留 95% 以上營養成分" },
                  { step: "第三階段", title: "機能配方", desc: "添加機能成分，完成保健食品化" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-accent text-accent-foreground font-semibold">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{item.step}：{item.title}</h4>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Function Selector */}
          <div className="mt-20 p-12 bg-white rounded-2xl border border-border shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3" style={displayFontStyle}>
                自由混搭機能組合
              </h3>
              <p className="text-foreground/70">
                選擇毛孩需要的機能組合，即時看到營養成分與建議用量
              </p>
            </div>

            <FunctionSelector />
          </div>
        </div>
      </section>

      {/* Active Pets Showcase */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={dogPlayingUrl}
                alt="Happy dog playing outdoor"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="font-semibold text-primary mb-2">活力充沛</h3>
                <p className="text-sm text-foreground/70">毛孩的每一次跑跳，都是健康的表現。</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={catActiveUrl}
                alt="Active cat playing indoor"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="font-semibold text-primary mb-2">靈活敏捷</h3>
                <p className="text-sm text-foreground/70">貓咪的敏捷身手，源自於完整的營養補充。</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <img
                src={dogHealthyUrl}
                alt="Healthy dog with vitality"
                className="w-full h-80 object-cover"
              />
              <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <h3 className="font-semibold text-primary mb-2">毛髮亮麗</h3>
                <p className="text-sm text-foreground/70">優質營養讓毛孩的毛髮更加蓬鬆有光澤。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={displayFontStyle}>
              機能產品
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              針對不同毛孩的健康需求，提供科學配方的保健方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "腸胃保健", emoji: "🦴", desc: "改善消化吸收，維持腸道健康" },
              { name: "心血管保健", emoji: "❤️", desc: "支持心臟功能，促進血液循環" },
              { name: "關節護理", emoji: "🏃", desc: "強化關節，提升活動力" },
              { name: "護肝排毒", emoji: "🌿", desc: "支持肝臟代謝，促進排毒" }
            ].map((product, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-white border border-border hover:border-accent hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{product.emoji}</div>
                <h3 className="text-xl font-semibold text-primary mb-3">{product.name}</h3>
                <p className="text-foreground/70 mb-6">{product.desc}</p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                  了解詳情
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veterinarian Recommendation Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={displayFontStyle}>
              獸醫師推薦
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              來自專業獸醫師的信任背書，為毛孩的健康保駕護航
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "李獸醫",
                clinic: "台北寵物醫療中心",
                specialty: "內科專家",
                testimonial: "CháMila 的 ThermoNutricUp 技術保留了豬肉的完整營養，我在臨床上看到使用者的毛孩腸胃狀況明顯改善。",
                avatar: "🐾"
              },
              {
                name: "王獸醫",
                clinic: "新竹動物醫院",
                specialty: "營養學專家",
                testimonial: "在地臺灣豬 CAS認證的設計非常科學，避免了多種蛋白質混合可能引起的過敏反應。我推薦給許多有敏感腸胃的毛孩飼主。",
                avatar: "🏥"
              },
              {
                name: "陳獸醫",
                clinic: "台中寵物健康診所",
                specialty: "預防醫學專家",
                testimonial: "保健食品化的概念很先進。CháMila 不只是零食，而是真正的營養補充，幫助毛孩從根本上提升免疫力。",
                avatar: "💚"
              }
            ].map((vet, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border hover:border-accent transition"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-5xl">{vet.avatar}</div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg">{vet.name}</h3>
                    <p className="text-sm text-foreground/70">{vet.clinic}</p>
                    <p className="text-xs text-accent font-semibold mt-1">{vet.specialty}</p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed italic">
                  「{vet.testimonial}」
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={displayFontStyle}>
            準備好為毛孩做最好的選擇了嗎？
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            現在預約試吃，加入 LINE 社群，獲得 88 折首購優惠與獸醫師專業建議。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base h-12 px-8">
              預約試吃 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base h-12 px-8"
            >
              加入 LINE 社群
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="font-bold text-lg text-primary" style={displayFontStyle}>CháMila</span>
              </div>
              <p className="text-sm text-foreground/70">
                為毛孩的健康，提供科學級的保健食品。
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#about" className="hover:text-primary transition">品牌故事</a></li>
                <li><a href="#products" className="hover:text-primary transition">產品</a></li>
                <li><a href="#technology" className="hover:text-primary transition">技術</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">聯絡方式</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>Email: hello@chamila.tw</li>
                <li>LINE: @chamila</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">關注我們</h4>
              <div className="flex gap-4">
                <a href="#" className="text-primary hover:text-accent transition">Facebook</a>
                <a href="#" className="text-primary hover:text-accent transition">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 CháMila 芯研毛膳. 版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
