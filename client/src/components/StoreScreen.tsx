import React, { useState, useEffect } from 'react';
import { CatalogItem, COSMETIC_CATALOG, UserLoadout, UserInventoryItem } from '@realmforge/shared';
import { useAuth } from '../context/AuthContext';
import { ShoppingBag, Sparkles, Check, Gem } from 'lucide-react';

export const StoreScreen: React.FC = () => {
  const { user, token, updateUser } = useAuth();
  const [catalog, setCatalog] = useState<CatalogItem[]>(COSMETIC_CATALOG);
  const [inventory, setInventory] = useState<UserInventoryItem[]>([]);
  const [loadout, setLoadout] = useState<UserLoadout | null>(null);
  const [purchasingId, setPurchasingId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!token) return;
      try {
        const catRes = await fetch('/api/economy/catalog');
        if (catRes.ok) {
          const data = await catRes.json();
          setCatalog(data.catalog);
        }

        const invRes = await fetch('/api/economy/inventory', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (invRes.ok) {
          const data = await invRes.json();
          setInventory(data.inventory);
        }

        const loadoutRes = await fetch('/api/economy/loadout', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (loadoutRes.ok) {
          const data = await loadoutRes.json();
          setLoadout(data.loadout);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [token]);

  const handlePurchase = async (item: CatalogItem) => {
    if (!token) return;
    setPurchasingId(item.id);
    setMessage(null);

    try {
      const res = await fetch('/api/economy/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ itemId: item.id }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setInventory(prev => [...prev, data.item]);
      if (user) {
        updateUser({
          ...user,
          profile: { ...user.profile, gems: user.profile.gems - item.costGems },
        });
      }
      setMessage({ type: 'success', text: `Successfully unlocked ${item.name}!` });
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Failed to purchase' });
    } finally {
      setPurchasingId(null);
    }
  };

  const handleEquip = async (item: CatalogItem) => {
    if (!token) return;
    try {
      const res = await fetch('/api/economy/equip', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ itemId: item.id }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setLoadout(data.loadout);
      setMessage({ type: 'success', text: `Equipped ${item.name} to active loadout!` });
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    }
  };

  const isOwned = (itemId: string) => inventory.some(i => i.itemId === itemId);
  const isEquipped = (item: CatalogItem) => {
    if (!loadout) return false;
    if (item.targetTowerType) return loadout.towerSkins[item.targetTowerType] === item.id;
    if (item.category === 'AVATAR_FRAME') return loadout.avatarFrame === item.id;
    return false;
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-xl backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-purple-500/20 text-purple-400 rounded-xl">
            <ShoppingBag className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white">Armory & Cosmetic Vault</h1>
            <p className="text-xs text-slate-400">Unlock custom tower skins, visual themes, and profile crests.</p>
          </div>
        </div>

        {user && (
          <div className="flex items-center space-x-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-purple-400 font-bold text-sm">
            <Gem className="w-4 h-4" />
            <span>{user.profile.gems} Gems Available</span>
          </div>
        )}
      </div>

      {message && (
        <div
          className={`p-4 rounded-xl text-sm font-medium border ${
            message.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Item Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {catalog.map(item => {
          const owned = isOwned(item.id);
          const equipped = isEquipped(item);

          return (
            <div
              key={item.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-xl space-y-4 hover:border-slate-700 transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      item.rarity === 'LEGENDARY'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : item.rarity === 'EPIC'
                        ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}
                  >
                    {item.rarity}
                  </span>
                  <span className="text-xs text-slate-400 capitalize">{item.category.replace('_', ' ')}</span>
                </div>

                <h3 className="text-base font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 font-bold text-purple-400 text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>{item.costGems} Gems</span>
                </div>

                {equipped ? (
                  <span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-lg text-xs font-bold flex items-center space-x-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Equipped</span>
                  </span>
                ) : owned ? (
                  <button
                    onClick={() => handleEquip(item)}
                    className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 rounded-lg text-xs font-bold transition"
                  >
                    Equip
                  </button>
                ) : (
                  <button
                    onClick={() => handlePurchase(item)}
                    disabled={purchasingId === item.id}
                    className="px-4 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white rounded-lg text-xs font-bold transition shadow disabled:opacity-50"
                  >
                    {purchasingId === item.id ? 'Unlocking...' : 'Unlock'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
