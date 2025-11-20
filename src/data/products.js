export const categories = [
  { id: 'laptops', name: 'Laptops', color: 'from-cyan-500 to-blue-500' },
  { id: 'phones', name: 'Phones', color: 'from-fuchsia-500 to-pink-500' },
  { id: 'audio', name: 'Audio', color: 'from-amber-500 to-orange-500' },
  { id: 'gaming', name: 'Gaming', color: 'from-emerald-500 to-teal-500' },
  { id: 'accessories', name: 'Accessories', color: 'from-violet-500 to-indigo-500' },
]

export const products = [
  {
    id: 'p1',
    title: 'NovaBook X1 Pro',
    category: 'laptops',
    price: 1799,
    rating: 4.7,
    reviews: 128,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Ultra-slim performance laptop with a 14-inch 120Hz display and all-day battery life.',
    specs: {
      CPU: 'Intel Core i7 14-core',
      GPU: 'Intel Arc Integrated',
      RAM: '16GB LPDDR5',
      Storage: '1TB NVMe SSD',
      Display: '14" 2880x1800 120Hz',
      Weight: '1.2kg'
    }
  },
  {
    id: 'p2',
    title: 'Aether Phone 12',
    category: 'phones',
    price: 999,
    rating: 4.6,
    reviews: 512,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35b5?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Flagship smartphone with pro camera system and stunning edge-to-edge display.',
    specs: {
      Chip: 'Hexa-core Neural Engine',
      Display: '6.1" OLED 120Hz',
      Camera: '48MP Triple System',
      Battery: '4200mAh',
      Storage: '256GB',
      Water: 'IP68'
    }
  },
  {
    id: 'p3',
    title: 'Nimbus ANC Headphones',
    category: 'audio',
    price: 349,
    rating: 4.5,
    reviews: 204,
    images: [
      'https://images.unsplash.com/photo-1518441902112-f0e5f1b2b0f3?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518444082079-b5d6f9c8c9a0?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518441902109-5a1d0a73e7f8?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Premium over-ear headphones with adaptive noise cancellation and 50-hour battery.',
    specs: {
      Drivers: '40mm Neodymium',
      Noise: 'Adaptive ANC',
      Battery: '50h playback',
      Codec: 'AAC / aptX',
      Weight: '260g',
      Colors: 'Black, Silver'
    }
  },
  {
    id: 'p4',
    title: 'Nebula 4K Gaming Monitor',
    category: 'gaming',
    price: 699,
    rating: 4.8,
    reviews: 89,
    images: [
      'https://images.unsplash.com/photo-1603481588273-0c5c9a66094e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517059224940-d4af9eec41e5?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601935111741-a3ce30d8ab6c?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Immersive 27-inch 4K monitor with 144Hz refresh rate and HDR600 support.',
    specs: {
      Size: '27-inch',
      Resolution: '3840x2160',
      Refresh: '144Hz',
      HDR: 'VESA HDR600',
      Response: '1ms GtG',
      Inputs: 'HDMI 2.1, DP 1.4'
    }
  },
  {
    id: 'p5',
    title: 'Flux Mechanical Keyboard',
    category: 'accessories',
    price: 159,
    rating: 4.4,
    reviews: 73,
    images: [
      'https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop'
    ],
    description: 'Low-profile mechanical keyboard with hot-swappable switches and per-key RGB.',
    specs: {
      Layout: '75%',
      Switches: 'Hotswap Linear',
      Connectivity: 'USB-C / BT 5.1',
      Case: 'CNC Aluminum',
      Keycaps: 'PBT Doubleshot'
    }
  }
]

export const getProductById = (id) => products.find(p => p.id === id)
