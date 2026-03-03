import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut, User, Mail, Phone, Heart, ShoppingCart, Settings } from "lucide-react";
import { toast } from "sonner";

const displayFontStyle = { fontFamily: "Georgia, serif", fontWeight: "700" };
const logoUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663213447942/foDWJtLKKXQBUytM.png";

interface UserData {
  email?: string;
  name: string;
  phone?: string;
  loggedIn?: boolean;
}

export default function Member() {
  const [user, setUser] = useState<UserData | null>(null);
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setEditData({
        name: parsedUser.name,
        phone: parsedUser.phone || "",
      });
    } else {
      window.location.href = "/auth";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("已登出");
    window.location.href = "/";
  };

  const handleSaveProfile = () => {
    if (!editData.name) {
      toast.error("姓名不能為空");
      return;
    }

    const updatedUser = {
      ...user,
      name: editData.name,
      phone: editData.phone,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    toast.success("個人資料已更新");
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>載入中...</p>
      </div>
    );
  }

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
            <span className="font-bold text-lg text-primary" style={displayFontStyle}>
              CháMila
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-foreground">
              歡迎，<span className="font-semibold">{user.name}</span>
            </span>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              <LogOut className="w-4 h-4 mr-2" />
              登出
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-border p-6 sticky top-24">
              <h3 className="font-bold text-lg text-primary mb-4">會員中心</h3>
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === "profile"
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary/5"
                  }`}
                >
                  <User className="w-4 h-4 inline mr-2" />
                  個人資料
                </button>
                <button
                  onClick={() => setActiveTab("subscriptions")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === "subscriptions"
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary/5"
                  }`}
                >
                  <Heart className="w-4 h-4 inline mr-2" />
                  訂閱管理
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === "orders"
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary/5"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 inline mr-2" />
                  訂單歷史
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === "settings"
                      ? "bg-primary text-white"
                      : "text-foreground hover:bg-primary/5"
                  }`}
                >
                  <Settings className="w-4 h-4 inline mr-2" />
                  設定
                </button>
              </nav>
            </div>
          </div>

          {/* Main Panel */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-sm border border-border p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-primary" style={displayFontStyle}>
                    個人資料
                  </h2>
                  {!isEditing && (
                    <Button
                      onClick={() => setIsEditing(true)}
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      編輯
                    </Button>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        姓名
                      </label>
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        電話
                      </label>
                      <input
                        type="tel"
                        value={editData.phone}
                        onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div className="flex gap-4">
                      <Button
                        onClick={handleSaveProfile}
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        保存
                      </Button>
                      <Button
                        onClick={() => setIsEditing(false)}
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary/5"
                      >
                        取消
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                      <User className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-foreground/60">姓名</p>
                        <p className="font-semibold text-foreground">{user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-foreground/60">郵箱</p>
                        <p className="font-semibold text-foreground">{user.email}</p>
                      </div>
                    </div>
                    {user.phone && (
                      <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-sm text-foreground/60">電話</p>
                          <p className="font-semibold text-foreground">{user.phone}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Subscriptions Tab */}
            {activeTab === "subscriptions" && (
              <div className="bg-white rounded-xl shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold text-primary mb-6" style={displayFontStyle}>
                  訂閱管理
                </h2>
                <div className="text-center py-12">
                  <Heart className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                  <p className="text-foreground/60 mb-4">您還沒有任何訂閱</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    開始訂閱
                  </Button>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === "orders" && (
              <div className="bg-white rounded-xl shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold text-primary mb-6" style={displayFontStyle}>
                  訂單歷史
                </h2>
                <div className="text-center py-12">
                  <ShoppingCart className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                  <p className="text-foreground/60">您還沒有任何訂單</p>
                </div>
              </div>
            )}

            {/* Settings Tab */}
            {activeTab === "settings" && (
              <div className="bg-white rounded-xl shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold text-primary mb-6" style={displayFontStyle}>
                  設定
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">通知設定</h3>
                    <p className="text-sm text-foreground/60 mb-4">
                      管理您的郵件和推播通知偏好
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      編輯通知設定
                    </Button>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">隱私與安全</h3>
                    <p className="text-sm text-foreground/60 mb-4">
                      管理您的帳號安全設定
                    </p>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                      更改密碼
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
