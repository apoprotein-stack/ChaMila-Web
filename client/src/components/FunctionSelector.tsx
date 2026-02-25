import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface SelectedFunction {
  name: string;
  emoji: string;
  selected: boolean;
}

export default function FunctionSelector() {
  const [selectedFunctions, setSelectedFunctions] = useState<SelectedFunction[]>([
    { name: "腸胃保健", emoji: "🦴", selected: false },
    { name: "心血管保健", emoji: "❤️", selected: false },
    { name: "關節護理", emoji: "🏃", selected: false },
    { name: "護肝排毒", emoji: "🌿", selected: false }
  ]);

  const [quantity, setQuantity] = useState(1);

  const toggleFunction = (index: number) => {
    const updated = [...selectedFunctions];
    updated[index].selected = !updated[index].selected;
    setSelectedFunctions(updated);
  };

  const selectedCount = selectedFunctions.filter(f => f.selected).length;
  const basePrice = 299;
  const pricePerFunction = 150;
  const totalPrice = selectedCount > 0 ? (basePrice + (selectedCount - 1) * pricePerFunction) * quantity : 0;
  const discountedPrice = Math.round(totalPrice * 0.88);

  const nutritionMap: Record<string, string[]> = {
    "腸胃保健": ["益生菌", "膳食纖維", "消化酵素"],
    "心血管保健": ["Omega-3", "輔酶 Q10", "L-肉鹼"],
    "關節護理": ["葡萄糖胺", "軟骨素", "膠原蛋白"],
    "護肝排毒": ["牛奶薊", "N-乙酰半胱氨酸", "薑黃"]
  };

  const getSelectedNutrients = () => {
    const nutrients = new Set<string>();
    selectedFunctions.forEach(f => {
      if (f.selected) {
        nutritionMap[f.name]?.forEach(n => nutrients.add(n));
      }
    });
    return Array.from(nutrients);
  };

  return (
    <div className="space-y-8">
      {/* Function Selection Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {selectedFunctions.map((func, idx) => (
          <button
            key={idx}
            onClick={() => toggleFunction(idx)}
            className={`p-6 rounded-xl border-2 transition-all ${ 
              func.selected
                ? "border-accent bg-accent/10 shadow-md"
                : "border-border bg-white hover:border-accent/50"
            }`}
          >
            <div className="text-4xl mb-3">{func.emoji}</div>
            <p className="font-semibold text-primary text-sm">{func.name}</p>
            {func.selected && (
              <div className="mt-3 flex justify-center">
                <Check className="w-5 h-5 text-accent" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
        <label className="font-semibold text-primary">每月訂購份數：</label>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-lg border border-border hover:bg-primary/10 transition"
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-16 h-10 text-center border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-lg border border-border hover:bg-primary/10 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Results Display */}
      {selectedCount > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Nutrition Info */}
          <div className="p-6 bg-white border border-border rounded-xl">
            <h4 className="font-semibold text-primary mb-4">營養成分</h4>
            <div className="space-y-2">
              {getSelectedNutrients().map((nutrient, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground/80">{nutrient}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Info */}
          <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/30 rounded-xl">
            <h4 className="font-semibold text-primary mb-4">價格計算</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-foreground/80">
                <span>基礎價格：</span>
                <span>${basePrice}</span>
              </div>
              {selectedCount > 1 && (
                <div className="flex justify-between text-foreground/80">
                  <span>額外機能 ({selectedCount - 1}個)：</span>
                  <span>${(selectedCount - 1) * pricePerFunction}</span>
                </div>
              )}
              <div className="flex justify-between text-foreground/80">
                <span>小計 × {quantity}份：</span>
                <span>${totalPrice}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-semibold text-primary">
                <span>88 折優惠價：</span>
                <span className="text-lg text-accent">${discountedPrice}/月</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Button */}
      {selectedCount > 0 && (
        <div className="text-center pt-4">
          <Button className="bg-primary hover:bg-primary/90 text-white text-base h-12 px-12">
            立即預約訂閱
          </Button>
        </div>
      )}

      {selectedCount === 0 && (
        <div className="text-center py-8 text-foreground/60">
          <p>選擇至少一個機能組合，查看營養成分與價格</p>
        </div>
      )}
    </div>
  );
}
