import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ReservationModal from "@/components/ReservationModal";

// Image URLs for Cha'Paludo brand
const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-hero-banner-fixed-Faj6KcK3GXbjhe24aZbuRx.webp";
const PRODUCT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-product-showcase-R42iXhhcT29pn6ScVPTNYG.webp";
const HEALTHY_TEETH_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-dog-teeth-healthy-Ym8zoyRDjaDGsmv5gdKJNQ.webp";

// Brand story and lifestyle images
const BRAND_STORY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-brand-story-founder-KwBW233dJMfLuTAHx3SDqw.webp";
const MORNING_ROUTINE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-lifestyle-morning-routine-8hRTq48XLk6u75RHMEjhyX.webp";
const EVENING_ROUTINE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-lifestyle-evening-routine-KBoT2xaWnjYo55CsgJ4tsR.webp";
const VET_CONSULTATION_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-veterinary-consultation-WZqx7RfFiWUprTgXjyyVx6.webp";
const HAPPY_DOG_TEETH_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663213447942/FqTesSteRuR8Smb57J7x3Y/chapaludo-happy-dog-teeth-EQLtwNKPB55qMfgP9okBxD.webp"

// Product functions - All 4 functions
const FUNCTIONS = [
  { id: "digestive", name: "口腸共健", color: "bg-blue-100", textColor: "text-blue-700", description: "潔牙 × 腸道健康", status: "available" },
  { id: "skin", name: "口皮共健", color: "bg-pink-100", textColor: "text-pink-700", description: "潔牙 × 皮膚光澤", status: "available" },
  { id: "joint", name: "口關共健", color: "bg-amber-100", textColor: "text-amber-700", description: "潔牙 × 關節靈活", status: "coming-soon" },
  { id: "immune", name: "口免共健", color: "bg-green-100", textColor: "text-green-700", description: "潔牙 × 免疫支持", status: "coming-soon" }
];

// Product sizes - All 4 sizes
const SIZES = [
  { id: "small", name: "S 尺寸", weight: "≤5kg 小型犬", price: 420, weight_per_pack: 180, pieces: 30 },
  { id: "medium", name: "M 尺寸", weight: "5-10kg 中型犬", price: 480, weight_per_pack: 300, pieces: 30 },
  { id: "large", name: "L 尺寸", weight: "10-25kg 大型犬", price: 580, weight_per_pack: 450, pieces: 30 },
  { id: "xlarge", name: "XL 尺寸", weight: ">25kg 超大型犬", price: 680, weight_per_pack: 600, pieces: 30 }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2
    }
  },
  viewport: { once: true }
};

export default function Home() {
  const [, setLocation] = useLocation();
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedFunction, setSelectedFunction] = useState("digestive");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-96 md:h-[600px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={HERO_IMAGE}
          alt="Cha'Paludo Functional Dental Chews"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "Georgia, serif" }}>
              Cha'Paludo
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-light tracking-wide">機能潔牙骨</p>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
              嚼一根，早晚兩次，照顧的不只是牙齒
            </p>
            <Button
              size="lg"
              onClick={() => setShowReservationModal(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              預約試吃
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Concept Section */}
      <section className="py-24 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          >
            潔牙為入口，全身為出口
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-gray-700 leading-relaxed text-lg"
            >
              <p>
                Cha'Paludo 機能潔牙骨是一種創新的日常保健方案，透過每日咀嚼，同時維護口腔健康與全身機能。
              </p>
              <p>
                我們發現，口腔微生物群落與腸道、皮膚健康之間存在密切的關係。因此，以「潔牙為入口、全身為出口」的機制訴求，
                讓毛孩在享受潔牙的同時，自然地維護腸道健康、皮膚光澤，以及整體免疫力。
              </p>
              <p className="font-bold text-blue-700 text-xl italic">
                「嚼一根，早晚兩次，照顧的不只是牙齒」
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={HEALTHY_TEETH_IMAGE}
                alt="Healthy Teeth Benefits"
                className="w-full rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Matrix Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          >
            完整產品矩陣
          </motion.h2>
          
          {/* Function Selector */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {FUNCTIONS.map((func) => (
              <motion.button
                key={func.id}
                variants={fadeInUp}
                onClick={() => setSelectedFunction(func.id)}
                className={`px-8 py-4 rounded-full font-bold transition-all ${
                  selectedFunction === func.id
                    ? `${func.color} ${func.textColor} ring-2 ring-offset-2 ring-current scale-105`
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {func.name}
                {func.status === "coming-soon" && (
                  <span className="ml-2 text-xs opacity-60 font-normal">(建置中)</span>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Size Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {SIZES.map((size) => (
              <motion.div
                key={size.id}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{size.name}</h3>
                <p className="text-blue-600 font-medium mb-6">{size.weight}</p>
                <div className="space-y-3 mb-8 text-gray-500 text-sm">
                  <p>每盒 {size.pieces} 支（15 日份）</p>
                  <p>每盒重量 {size.weight_per_pack}g</p>
                  <p className="font-bold text-gray-800">口腸共健</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-gray-900">NT${size.price}</span>
                  <Button variant="outline" className="rounded-full hover:bg-blue-50">查看詳情</Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 px-4 md:px-8 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-5xl font-bold text-center mb-20 text-gray-800"
          >
            品牌故事
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={BRAND_STORY_IMAGE}
                alt="Brand Story"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                Cha'Paludo 源自對毛孩口腔健康與全身保健的深切關懷。我們發現，許多飼主面臨一個共同困擾：
                <strong className="text-blue-700">傳統保健食品雖然有成分，但毛孩不一定願意吃；而單純的潔牙產品雖然毛孩喜歡，卻無法提供全身保健支持。</strong>
              </p>
              <p className="text-lg text-gray-600">
                經過多年的研究與獸醫師的臨床驗證，我們發現口腔微生物群落與腸道、皮膚健康之間存在密切的關係。
                基於這一科學發現，Cha'Paludo 機能潔牙骨應運而生。
              </p>
              <div className="p-6 bg-white rounded-2xl border-l-8 border-blue-600 shadow-lg">
                <p className="text-xl font-bold text-gray-800 italic">
                  「嚼一根，早晚兩次，照顧的不只是牙齒」
                </p>
              </div>
            </motion.div>
          </div>

          {/* Routine Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 mb-24"
          >
            <motion.div variants={fadeInUp} className="group rounded-3xl overflow-hidden shadow-2xl bg-white">
              <div className="overflow-hidden">
                <img
                  src={MORNING_ROUTINE_IMAGE}
                  alt="Morning Routine"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">早晨的開始</h4>
                <p className="text-gray-600 text-lg">
                  每天早上，給毛孩一支 Cha'Paludo，開啟健康的一天。
                  溫暖的晨光中，看著毛孩開心地咀嚼，是飼主最溫馨的時刻。
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="group rounded-3xl overflow-hidden shadow-2xl bg-white">
              <div className="overflow-hidden">
                <img
                  src={EVENING_ROUTINE_IMAGE}
                  alt="Evening Routine"
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-10">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">晚間的陪伴</h4>
                <p className="text-gray-600 text-lg">
                  傍晚時分，再給毛孩一支，在舒適的環境中享受潔牙時光。
                  這是毛孩與飼主親密互動的美好時刻。
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Veterinary Endorsement */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-gray-600 leading-relaxed order-2 md:order-1"
            >
              <h3 className="text-3xl font-bold text-gray-800">獸醫師推薦</h3>
              <p className="text-xl">
                Cha'Paludo 已通過多位獸醫師的臨床驗證。我們的產品設計基於科學研究，
                每一個配方都經過專業評估，確保毛孩的安全與健康。
              </p>
              <div className="bg-blue-50 p-8 rounded-3xl border-l-8 border-blue-600 shadow-inner">
                <p className="text-gray-800 font-bold text-xl mb-2">✓ 獸醫師臨床驗證</p>
                <p className="text-gray-600">通過多項安全檢測與品質把關，確保每一口都是安心的守護。</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <img
                src={VET_CONSULTATION_IMAGE}
                alt="Veterinary Consultation"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Happy Dogs Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            {...fadeInUp}
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-12"
          >
            毛孩的笑容最珍貴
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <img
              src={HAPPY_DOG_TEETH_IMAGE}
              alt="Happy Dog with Healthy Teeth"
              className="w-full md:w-4/5 mx-auto rounded-3xl shadow-2xl mb-12"
            />
          </motion.div>
          <motion.p 
            {...fadeInUp}
            className="text-xl text-gray-600 leading-relaxed"
          >
            健康的牙齒，是毛孩快樂生活的基礎。Cha'Paludo 致力於透過每日的潔牙保健，
            讓毛孩展現最燦爛的笑容，享受更長更健康的陪伴時光。
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            開始毛孩的保健之旅
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl mb-12 opacity-90 font-light"
          >
            加入 Cha'Paludo 社群，獲得最新產品資訊與獸醫師建議
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button
              size="lg"
              onClick={() => setShowReservationModal(true)}
              className="bg-white text-blue-800 hover:bg-gray-100 px-12 py-8 text-xl rounded-full shadow-2xl transition-transform hover:scale-105"
            >
              預約試吃
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-12 py-8 text-xl rounded-full transition-transform hover:scale-105"
            >
              加入會員
            </Button>
          </motion.div>
        </div>
      </section>

      {showReservationModal && (
        <ReservationModal onClose={() => setShowReservationModal(false)} />
      )}
    </div>
  );
}
