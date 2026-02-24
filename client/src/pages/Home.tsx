import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, Zap, Heart } from "lucide-react";
import { useState } from "react";

const heroImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/i50z0CPZHEEGxxzpPvg1N0/sandbox/cbZ4OC1U557DWm3OCj177l-img-1_1771891705000_na1fn_Y2hhbWlsYS1oZXJvLWJhbm5lcg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaTUwejBDUFpIRUVHeHh6cFB2ZzFOMC9zYW5kYm94L2NiWjRPQzFVNTU3RFdtM09DajE3N2wtaW1nLTFfMTc3MTg5MTcwNTAwMF9uYTFmbl9ZMmhoYldsc1lTMW9aWEp2TFdKaGJtNWxjZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fwfNN6ybBrTSCk~ofL81H0zREojXa9cQeRSMfbOOBBH286oUcz9DW639jYzZUvSWVJWTuT4d8eoYejkDEfeurFKd97Au2S7xE4gvWKzbHd6cH2Jp2jTvTHNenkIM5QpEIl-nV49-kM6b~Nwamzw2RWRkgBtOqYQl7EJDT1jl-WuI2~9zZ1t0f6rcU3WT48rshF7buuSw5n5qRLF0CLnjyyHaQk5WPMoly8DhxmoMyAIZmHYoVMGFrLayRiVhssFzsebJOEJs1ilfWb2hNU5pvb~~jnmpWcwBWhTDL~QJASetshyzZaMlRkLfRGMT9cb0-pyzHWjPnFCwuhS~wUtPlQ__";

const productImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/i50z0CPZHEEGxxzpPvg1N0/sandbox/cbZ4OC1U557DWm3OCj177l-img-2_1771891718000_na1fn_Y2hhbWlsYS1wcm9kdWN0LXNob3djYXNl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaTUwejBDUFpIRUVHeHh6cFB2ZzFOMC9zYW5kYm94L2NiWjRPQzFVNTU3RFdtM09DajE3N2wtaW1nLTJfMTc3MTg5MTcxODAwMF9uYTFmbl9ZMmhoYldsc1lTMXdjbTlrZFdOMExYTm9iM2RqWVhObC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QwWog-CAyecLuLfdwlSaDmVBz3Zwp7TEsSJ2bMeU5UgMq9BFcVVbXWiJ5AHh1rhsXacVWd9r41xWmy8Ocbh~smJUeAOB-Ck6jTlZeiQr3BSkDzEo8lu3VpxJWTEP9LP6RTBjxXhDk~0AZOC2Rsie1~XEilKT0SlSrB7PfbX3lxZb9jHEOZUs9ABAYxXjlg--g8T0tXuV8VAMDZ6k7kl9E~zlHGu6CXB5nJMUjwRfwgPkIzJCGEzZrZGglLW02S-LrxredwqX96AwqTvU7JYSY9TOwUybhWoM3qMRvObbRx1D8cavvtG-Kg21ta2RmKn~EdYK4bFhK8pqd364REaRGw__";

const technologyImageUrl = "https://private-us-east-1.manuscdn.com/sessionFile/i50z0CPZHEEGxxzpPvg1N0/sandbox/cbZ4OC1U557DWm3OCj177l-img-3_1771891699000_na1fn_Y2hhbWlsYS10ZWNobm9sb2d5LXZpc3VhbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaTUwejBDUFpIRUVHeHh6cFZ2ZzFOMC9zYW5kYm94L2NiWjRPQzFVNTU3RFdtM09DajE3N2wtaW1nLTNfMTc3MTg5MTY5OTAwMF9uYTFmbl9ZMmhoYldsc1lTMTBaV05vYm05c2IyZDVMWFpwYzNWaGJBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=n~-VbNvFFpmtXieo~r8G6PLxZjXFlF0qBpC5C89pPODGbvy3ERc3q-BEyhTGBr1ECP2j~yTtNHX5agcgzPEN1P3OiQ3N6Z8-NJGRJNF2E-KtqJV1LFFqoUuNqEEiLw5d9j5~725QqHPKHlKO~3qCX-7BBmgxxvXjz2nCYSLpSuXVKDbPc0qkTS9MqYFa0DWaIYB-2nk3HGMQCjqQgcNX5COELZzHtH10Mr1djo8wwK2l0iCzhzRpjg2dUHhe~CPMSOqA2TllWbox5y1YsNPTcIps9FxkaYhng3Aw3LYFPiYlEhr8sfskyWAjAoKa9Mu05kB6BNQ5Hda8184Cek1AtA__";

const dogPlayingUrl = "https://private-us-east-1.manuscdn.com/sessionFile/i50z0CPZHEEGxxzpPvg1N0/sandbox/DHBXyGYSMPuvqXE2YMiM7s-img-1_1771974119000_na1fn_Y2hhbWlsYS1kb2ctcGxheWluZy1vdXRkb29y.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaTUwejBDUFpIRUVHeHh6cFZ2ZzFOMC9zYW5kYm94L0RIQlh5R1lTTVB1dnFYRTJZTWlNN3MtaW1nLTFfMTc3MTk3NDExOTAwMF9uYTFmbl9ZMmhoYldsc1lTMWtiMmN0Y0d4aGVXbHVaeTF2ZFhSa2IyOTkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oHPRfNNOzp73wyQKD1XNddMqgcSvMp4jbdSgpTCGIX5hSAIC9DCv1orla3YuPwNbPO4AvbwFqu~o2z4oRp0bgEtd-2~8SiTvxe43UeGYNC37VVAy35rcGrhkFWriuKay~vsCm2WaQQaUO7nQFUzs1xBO-Dm1hSWGD5rrNSQ~5hIBOycp8ASFBzdlu8rpGDhxHNB66NqCfV59x~ULs3ZY2GHGa7CqssK6-oAbItV1cqyEpi3zKnyvngDsofkqlGx3UXyGzrQmpR3MGpq6bRzzxPgb3VJSz5uYubqZQldlt6BvSsKESfdpPuk1WiREP5kF-HvTt2JG0ZznXDaZFQiDMg__";

const catActiveUrl = "https://private-us-east-1.manuscdn.com/sessionFile/i50z0CPZHEEGxxzpPvg1N0/sandbox/DHBXyGYSMPuvqXE2YMiM7s-img-2_1771974117000_na1fn_Y2hhbWlsYS1jYXQtYWN0aXZl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaTUwejBDUFpIRUVHeHh6cFZ2ZzFOMC9zYW5kYm94L0RIQlh5R1lTTVB1dnFYRTJZTWlNN3MtaW1nLTJfMTc3MTk3NDExNzAwMF9uYTFmbl9ZMmhoYldsc1lTMWpZWFF0WVdOMGFYWmwucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=gxodMJSfIFxigjiMtGpoITRYgPIdiK9uEtXZBytgXfzRFqncYAthJKQ1Da2MCmHqjeVI7PjOB6vx8Wx98W5nwLwECy7yPh0bTfumbovUakzwtkww5WkWfrcI5GGGkfBakksUeFBxyu0DpvmWzQXTeGjpWOSyTmZxf3HOIF2h2NlcT5ZU-DF4Qw4~mWCHYDgtPhqKdP3qqAXc6Vvs5Bjs1HQDjjpZF8ZnsLIkJjCOAnow~hjSGNFbVjbcosxRDqOV1GatbtazKd6cazLDh7oshbaOIw6duc-rDZBDjjrfk63GyHqWwa68MSOf0OO0Tkv1hegp4TIf4szzK3WlFUUK7A__";

const petsTogetherUrl = "https://private-us-east-1.manuscdn.com/sessionFile/i50z0CPZHEEGxxzpPvg1N0/sandbox/DHBXyGYSMPuvqXE2YMiM7s-img-3_1771974113000_na1fn_Y2hhbWlsYS1wZXRzLXRvZ2V0aGVy.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaTUwejBDUFpIRUVHeHh6cFZ2ZzFOMC9zYW5kYm94L0RIQlh5R1lTTVB1dnFYRTJZTWlNN3MtaW1nLTNfMTc3MTk3NDExMzAwMF9uYTFmbl9ZMmhoYldsc1lTMXdaWFJ6TFhSdloyVjBhR1Z5LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QJ0PPqyPjqcGSTLH~AQcbbSJ3L5nJ4P-nVAhwfHKQ3oVAVoSulmKIEzVuRVB6zmeIuEs--UqHFxGztnAEN8Zo8XriHjmmbIkVVcUhATH47OH~CjiKSK2KvVrQkklMp8I2zTPtrBmTBpBxd0GnSvtBW~KJGpOX1JiOO7yqqj51w77atQvh7YKOQBm669zNQ8IAjpIfUPrb34iWa512eJCqO-iQi-gi3NMQ9MwxvvYrFYdawoYfYEE4YtUz6I3-YPNcIVZXSJ9Z5X~zcS7n6-nbd7iI02PfxC7~xPdcCvLLwH4~2jncQoNAU5F9wVz72NwGW6imEkKxWc7KBXpVYlUNQ__";

const dogHealthyUrl = "https://private-us-east-1.manuscdn.com/sessionFile/i50z0CPZHEEGxxzpPvg1N0/sandbox/DHBXyGYSMPuvqXE2YMiM7s-img-4_1771974112000_na1fn_Y2hhbWlsYS1kb2ctaGVhbHRoeS12aXRhbGl0eQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaTUwejBDUFpIRUVHeHh6cFZ2ZzFOMC9zYW5kYm94L0RIQlh5R1lTTVB1dnFYRTJZTWlNN3MtaW1nLTRfMTc3MTk3NDExMjAwMF9uYTFmbl9ZMmhoYldsc1lTMWtiMmN0YUdWaGJIUm9lUzEyYVhSaGJHbDBlUS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tKo8uDr5DBWsFKCXvvGHUtSClxzqferWoQiqJhQNT3jHD7eg3MVwCxCkNd2QiZsEetgW9RtuVXcmyZUrbON-7m1wx0qVaaGgbkIsuBgvRcWJOdCImPKQ6JVX3jKOO-s6tg0TIqXE-oRPxKjHCRpuYjuThiGtqx6rk6LDFcUgRxkCQ88ne8-FWmqJdNLJzpgrhBC0Y~Fef7YsOGCQwjE6EdrSpc2qgLO4~pB8dm~3jK35ECYYHsz-bEnZmrGszOBtRqEhmasTreYdi~~3BQo~IgovXxhDjm0T1TkQqSyhxIRDaBA5TPQxxGnB8WZ0CHPMOLROuSHFr4hYMTTOAssorg__";

const displayFontStyle = { fontFamily: "'Playfair Display', serif" };

export default function Home() {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
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
                單一豬肉源 × 機能配方 × 獸醫師背書。透過 ThermoNutricUp 技術，將台灣在地豬肉轉化為寵物保健食品，讓毛孩享受科學級的營養補充。產品採用 50-300g 夾鏈袋包裝，新鮮便利。
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
                description: "單一豬肉源，自建工廠直接控制品質"
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

      {/* Brand Story Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={displayFontStyle}>
                品牌故事
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">保健食品化 × 食品保健化</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    CháMila 的核心理念是將保健成分融入好吃的肉泥或肉錠，降低毛孩的餵食抗拒。同時，我們不只提供好吃的零食，而是有明確機能訴求、有劑量設計、有獸醫師觀察數據的日常補充方案。
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">台灣豬肉副產品的優勢</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    台灣年屠宰豬隻約 860 萬頭，豬肺、豬脾等副產品年產量穩定、成本低（35–55 元/kg，是雞魚肉的 25–30%）。我們透過自建工廠直接控制製程與品質，確保每一批產品都符合製藥級標準。
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={productImageUrl}
                alt="CháMila Product Range"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white">
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
