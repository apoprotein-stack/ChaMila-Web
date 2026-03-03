import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { toast } from "sonner";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    petName: "",
    petType: "dog",
    petAge: "",
    healthConcerns: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form
      if (!formData.name || !formData.phone || !formData.email || !formData.petName) {
        toast.error("請填寫所有必填欄位");
        setIsSubmitting(false);
        return;
      }

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast.success("預約成功！我們將盡快與您聯絡。");

      // Prepare LINE message
      const lineMessage = `
CháMila 試吃預約申請
姓名: ${formData.name}
電話: ${formData.phone}
郵箱: ${formData.email}
毛孩名字: ${formData.petName}
毛孩類型: ${formData.petType === "dog" ? "狗" : "貓"}
毛孩年齡: ${formData.petAge}
健康關注: ${formData.healthConcerns || "無"}
      `.trim();

      // Open LINE OA (replace with your actual LINE OA URL)
      const lineOAUrl = "https://line.me/R/oaMessage/@chamila"; // Replace with actual LINE OA ID
      window.open(lineOAUrl, "_blank");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        petName: "",
        petType: "dog",
        petAge: "",
        healthConcerns: "",
      });

      onClose();
    } catch (error) {
      toast.error("提交失敗，請稍後重試");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-white">
          <h2 className="text-2xl font-bold text-primary">預約試吃</h2>
          <button
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              姓名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="請輸入您的姓名"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              電話 <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="請輸入您的電話"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              郵箱 <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="請輸入您的郵箱"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          {/* Pet Name */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              毛孩名字 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              placeholder="請輸入毛孩的名字"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
          </div>

          {/* Pet Type */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              毛孩類型
            </label>
            <select
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="dog">狗</option>
              <option value="cat">貓</option>
            </select>
          </div>

          {/* Pet Age */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              毛孩年齡
            </label>
            <input
              type="text"
              name="petAge"
              value={formData.petAge}
              onChange={handleChange}
              placeholder="例如：3歲"
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Health Concerns */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              健康關注
            </label>
            <textarea
              name="healthConcerns"
              value={formData.healthConcerns}
              onChange={handleChange}
              placeholder="例如：腸胃敏感、毛髮乾燥等"
              rows={3}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition"
          >
            {isSubmitting ? "提交中..." : "提交預約"}
          </Button>

          {/* LINE OA Info */}
          <p className="text-xs text-foreground/60 text-center mt-4">
            提交後將自動開啟 LINE，請加入我們的官方帳號以獲得最新資訊
          </p>
        </form>
      </div>
    </div>
  );
}
