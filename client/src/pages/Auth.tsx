import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Lock, User, Phone } from "lucide-react";
import { useRoute } from "wouter";
import { toast } from "sonner";

const displayFontStyle = { fontFamily: "Georgia, serif", fontWeight: "700" };
const logoUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213447942/foDWJtLKKXQBUytM.png";

export default function Auth() {
  const [match, params] = useRoute("/auth");
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      if (isLogin) {
        // Login validation
        if (!formData.email || !formData.password) {
          toast.error("請填寫所有欄位");
          setIsSubmitting(false);
          return;
        }

        // Simulate login
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: formData.email,
            name: formData.email.split("@")[0],
            loggedIn: true,
          })
        );

        toast.success("登入成功！");
        handleNavigate("/member");
      } else {
        // Register validation
        if (!formData.email || !formData.password || !formData.confirmPassword || !formData.name || !formData.phone) {
          toast.error("請填寫所有欄位");
          setIsSubmitting(false);
          return;
        }

        if (formData.password !== formData.confirmPassword) {
          toast.error("密碼不相符");
          setIsSubmitting(false);
          return;
        }

        if (formData.password.length < 6) {
          toast.error("密碼至少需要 6 個字符");
          setIsSubmitting(false);
          return;
        }

        // Simulate registration
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: formData.email,
            name: formData.name,
            phone: formData.phone,
            loggedIn: true,
          })
        );

        toast.success("註冊成功！");
        handleNavigate("/member");
      }
    } catch (error) {
      toast.error("操作失敗，請稍後重試");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-transparent">
      {/* Header */}
      <nav className="border-b border-border bg-white/80 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="CháMila Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-lg text-primary" style={displayFontStyle}>
              CháMila
            </span>
          </div>
          <Button
            variant="ghost"
            onClick={() => handleNavigate("/")}
            className="text-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            返回首頁
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container max-w-md mx-auto py-12 px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Title */}
          <h1 className="text-3xl font-bold text-primary mb-2 text-center" style={displayFontStyle}>
            {isLogin ? "會員登入" : "加入會員"}
          </h1>
          <p className="text-center text-foreground/60 mb-8">
            {isLogin ? "登入您的 CháMila 帳號" : "建立新的 CháMila 帳號"}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field (Register Only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="請輸入您的姓名"
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                郵箱 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="請輸入您的郵箱"
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            {/* Phone Field (Register Only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  電話 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="請輸入您的電話"
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                密碼 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="請輸入密碼"
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            {/* Confirm Password Field (Register Only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  確認密碼 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-foreground/40" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="請再次輸入密碼"
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-lg transition mt-6"
            >
              {isSubmitting ? (isLogin ? "登入中..." : "註冊中...") : isLogin ? "登入" : "註冊"}
            </Button>
          </form>

          {/* Toggle Login/Register */}
          <div className="mt-6 text-center">
            <p className="text-foreground/60">
              {isLogin ? "還沒有帳號？" : "已有帳號？"}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setFormData({
                    email: "",
                    password: "",
                    confirmPassword: "",
                    name: "",
                    phone: "",
                  });
                }}
                className="text-primary hover:text-primary/80 font-semibold ml-1 transition"
              >
                {isLogin ? "立即註冊" : "登入"}
              </button>
            </p>
          </div>

          {/* Demo Info */}
          <div className="mt-8 p-4 bg-accent/10 rounded-lg">
            <p className="text-xs text-foreground/60 text-center">
              💡 演示模式：您可以使用任何郵箱和密碼進行登入/註冊
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
