import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/hero/HeroSection';
import ProductGrid from './components/product/ProductGrid';
import CartDrawer from './components/cart/CartDrawer';
import VirtualDomDemo from './components/virtualdom/VirtualDomDemo';
import ComponentTreeVisualizer from './components/virtualdom/ComponentTreeVisualizer';
import ProductFilter from './components/product/ProductFilter';

// Ürün verisi — normalde bir API'dan gelir
const PRODUCTS = [
  { id: 1,  name: 'Wireless Headphones',  category: 'Electronics', price: 899,  oldPrice: 1299, emoji: '🎧', bg: '#1a0a2e', badge: 'sale' },
  { id: 2,  name: 'Mechanical Keyboard',  category: 'Electronics', price: 1250, emoji: '⌨️',  bg: '#0a1a2e', badge: 'new'  },
  { id: 3,  name: 'Smart Watch',          category: 'Wearable',    price: 2100, emoji: '⌚',  bg: '#0a2e1a', badge: 'hot'  },
  { id: 4,  name: 'Portable Charger',     category: 'Accessories', price: 349,  oldPrice: 499, emoji: '🔋', bg: '#2e1a0a', badge: 'sale' },
  { id: 5,  name: '4K Webcam',            category: 'Electronics', price: 780,  emoji: '📷',  bg: '#1a2e0a', badge: 'new'  },
  { id: 6,  name: 'USB-C Hub',            category: 'Accessories', price: 420,  emoji: '🔌',  bg: '#2e0a1a', badge: null   },
  { id: 7,  name: 'Gaming Mouse',         category: 'Electronics', price: 650,  oldPrice: 850, emoji: '🖱️', bg: '#1a0a1a', badge: 'sale' },
  { id: 8,  name: 'Smart Ring',           category: 'Wearable',    price: 1800, emoji: '💍',  bg: '#0a2e2e', badge: 'new'  },
  { id: 9,  name: 'Laptop Stand',         category: 'Accessories', price: 290,  emoji: '💻',  bg: '#2e2e0a', badge: null   },
  { id: 10, name: 'Noise Cancelling Buds',category: 'Electronics', price: 1100, oldPrice: 1500, emoji: '🎵', bg: '#0a0a2e', badge: 'sale' },
  { id: 11, name: 'Fitness Tracker',      category: 'Wearable',    price: 950,  emoji: '🏃',  bg: '#2e0a2e', badge: 'hot'  },
  { id: 12, name: 'Wireless Charger',     category: 'Accessories', price: 380,  emoji: '⚡',  bg: '#0a2e0a', badge: null   },
  { id: 13, name: 'Mechanical Numpad',    category: 'Electronics', price: 520,  emoji: '🔢',  bg: '#1a1a0a', badge: 'new'  },
  { id: 14, name: 'Smart Glasses',        category: 'Wearable',    price: 3200, emoji: '🕶️', bg: '#0a1a1a', badge: 'hot'  },
  { id: 15, name: 'Cable Management Kit', category: 'Accessories', price: 180,  oldPrice: 250, emoji: '🗂️', bg: '#1a0a0a', badge: 'sale' },
];

function App() {
  // Tüm global state burada — aşağıya props olarak akar
  const [cart, setCart]       = useState([]); // ürün listesi
  const [cartOpen, setCartOpen] = useState(false); // drawer açık mı?
  const [search, setSearch]  = useState('');
  const [activeCategory, setCategory] = useState('All');

   // Filtreleme — Virtual DOM için güzel örnek: state değişince sadece ProductGrid render olur
  const filteredProducts = PRODUCTS.filter(p => {
    const matchSearch   = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === 'All' || p.category === activeCategory;
    return matchSearch && matchCategory;
  });


  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);

  const scrollToProducts = () =>
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      {/* 1. Layout — her sayfada sabit kalır */}
      <Navbar
        cartCount={totalQty}
        onCartClick={() => setCartOpen(true)}
      />

      <main>
        {/* 2. Hero — sadece görsel, sıfır state */}
        <HeroSection onShopClick={scrollToProducts} />

        {/* 3. Ürün listesi — products ve callback aşağı iner */}
        <section id="products" style={{ padding: '80px 40px' }}>
          <p style={{ color: 'var(--accent)', letterSpacing: 4, fontSize: 12, textTransform: 'uppercase', marginBottom: 12 }}>
            Collection
          </p>
          <h2 style={{ fontSize: 36, marginBottom: 40 }}>Featured Products</h2>

         {/* YENİ — filter component */}
          <ProductFilter
            search={search}
            onSearch={setSearch}
            activeCategory={activeCategory}
            onCategory={setCategory}
          />

          {/* filteredProducts geçiyoruz artık */}
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} onAddToCart={addToCart} />
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: 40, marginBottom: 12 }}>🔍</p>
              <p style={{ fontSize: 16 }}>No products found for "<span style={{ color: 'var(--accent)' }}>{search}</span>"</p>
            </div>
          )}
        </section>


       {/* Component Tree + Virtual DOM — yan yana */}
       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: 0 }}>
       <ComponentTreeVisualizer />
       <VirtualDomDemo />
       </div>
      </main>

      {/* 6. Sepet — isOpen prop'u ile kontrol edilir */}
      <CartDrawer
        items={cart}
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {/* 7. Layout sonu */}
      <Footer />
    </>
  );
}

export default App;