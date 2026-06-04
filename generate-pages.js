const fs = require('fs');

const categories = [
  { 
    id: 'electrical', name: 'Electrical Essentials', desc: 'Secure, clean, and reliable architectural installations.', img: 'savera-electrical.png',
    products: [
      { name: 'Premium Switch Plate', img: 'premium_switch_plate.png' },
      { name: 'PVC Conduit Pipe', img: 'pvc_conduit_pipe.png' },
      { name: 'Modular Fan Box', img: 'modular_fan_box.png' },
      { name: 'MCB Box', img: 'mcb_box.png' },
      { name: 'Concealed Housing', img: 'concealed_housing.png' },
      { name: 'Flame Retardant Wire', img: 'fr_wire.png' }
    ]
  },
  { 
    id: 'frame', name: 'Frame Solutions', desc: 'Sturdy and reliable door frame options with matching premium finishes.', img: 'savera-frame.png',
    products: [
      { name: 'Teak Wood Frame', img: 'teak_wood_frame.png' },
      { name: 'Sal Wood Frame', img: 'sal_wood_frame.png' },
      { name: 'Aluminum Profile', img: 'aluminum_profile.png' },
      { name: 'WPC Door Frame', img: 'wpc_door_frame.png' },
      { name: 'Hardwood Chaukhat', img: 'hardwood_chaukhat.png' },
      { name: 'UPVC Window Frame', img: 'upvc_window_frame.png' }
    ]
  },
  { 
    id: 'entrances', name: 'Entrances', desc: 'Designer wooden, flush, and PVC doors crafted for stunning homes.', img: 'savera-entrances.png',
    products: [
      { name: 'Solid Teak Door', img: 'teak_door.png' },
      { name: 'Premium Flush Door', img: 'flush_door.png' },
      { name: 'Designer Veneer Door', img: 'veneer_door.png' },
      { name: 'HDHMR Door', img: 'hdhmr_door.png' },
      { name: 'Laminated Door', img: 'laminated_door.png' },
      { name: 'PVC Bathroom Door', img: 'savera-entrances.png' }
    ]
  },
  { 
    id: 'hardware', name: 'Precision Fittings', desc: 'Premium locks, handles, hinges, channels, and heavy-duty glass fittings.', img: 'savera-hardware.png',
    products: [
      { name: 'Heavy Duty Hinges', img: 'savera-hardware.png' },
      { name: 'Soft Close Channels', img: 'product-table.png' },
      { name: 'Glass Door Fittings', img: 'savera-kitchen.png' },
      { name: 'Mortise Locks', img: 'savera-hardware.png' },
      { name: 'Premium Handles', img: 'savera-entrances.png' },
      { name: 'Drawer Slides', img: 'product-table.png' }
    ]
  },
  { 
    id: 'power', name: 'Power Controls', desc: 'High-quality wires, elegant switch plates, and advanced electrical controls.', img: 'savera-power.png',
    products: [
      { name: 'Modular Switches', img: 'savera-power.png' },
      { name: 'Distribution Boards', img: 'savera-electrical.png' },
      { name: 'Wire Coils', img: 'savera-power.png' },
      { name: 'Stabilizers', img: 'product-lamp.png' },
      { name: 'Smart Touch Switches', img: 'savera-lighting.png' },
      { name: 'Changeover Switches', img: 'savera-electrical.png' }
    ]
  },
  { 
    id: 'lighting', name: 'Lighting', desc: 'Curated lighting choices for warm ceilings, bright kitchens, and display areas.', img: 'savera-lighting.png',
    products: [
      { name: 'LED Panel Lights', img: 'savera-lighting.png' },
      { name: 'Profile Lighting', img: 'product-lamp.png' },
      { name: 'Spotlights', img: 'savera-lighting.png' },
      { name: 'Modern Chandelier', img: 'product-lamp.png' },
      { name: 'Wall Sconces', img: 'savera-lighting.png' },
      { name: 'Track Lights', img: 'savera-power.png' }
    ]
  },
  { 
    id: 'paints', name: 'Colour Finishes', desc: 'Luxury wall paints, rich textures, waterproofing, and beautifully refined colour finishes.', img: 'savera-paints.png',
    products: [
      { name: 'Exterior Emulsion', img: 'savera-paints.png' },
      { name: 'Interior Luxury Paint', img: 'savera-paints.png' },
      { name: 'Wood Polish', img: 'product-table.png' },
      { name: 'Texture Paint', img: 'savera-paints.png' },
      { name: 'Enamel Gloss', img: 'savera-kitchen.png' },
      { name: 'Waterproofing Primer', img: 'savera-paints.png' }
    ]
  },
  { 
    id: 'kitchen', name: 'Smart Storage', desc: 'Modular kitchen baskets, smooth channels, modern handles, and pull-outs.', img: 'savera-kitchen.png',
    products: [
      { name: 'Tandem Boxes', img: 'savera-kitchen.png' },
      { name: 'Cutlery Organizers', img: 'product-table.png' },
      { name: 'Corner Pull-outs', img: 'savera-hardware.png' },
      { name: 'Pantry Tall Unit', img: 'savera-kitchen.png' },
      { name: 'Wicker Baskets', img: 'product-bookshelf.png' },
      { name: 'Under-sink Organizers', img: 'savera-kitchen.png' }
    ]
  },
  { 
    id: 'bedroom', name: 'Bedroom Solutions', desc: 'Durable materials and soft-close fittings for elegant wardrobes and custom beds.', img: 'product-chair.png',
    products: [
      { name: 'Sliding Wardrobe Channels', img: 'savera-hardware.png' },
      { name: 'Hydraulic Bed Fittings', img: 'product-chair.png' },
      { name: 'Profile Wardrobe Handles', img: 'product-table.png' },
      { name: 'Mirror Fittings', img: 'savera-entrances.png' },
      { name: 'Soft Close Hinges', img: 'savera-hardware.png' },
      { name: 'Wardrobe Lifts', img: 'product-chair.png' }
    ]
  },
  { 
    id: 'decorative', name: 'Decorative Finish', desc: 'Exquisite decorative surfaces, veneers, laminates, and metallic finishing accents.', img: 'product-lamp.png',
    products: [
      { name: 'Premium Veneer', img: 'product-table.png' },
      { name: 'High Gloss Laminate', img: 'savera-entrances.png' },
      { name: 'Fluted Panels', img: 'savera-frame.png' },
      { name: 'Charcoal Louvers', img: 'product-lamp.png' },
      { name: 'Metallic Laminates', img: 'savera-paints.png' },
      { name: 'Acrylic Sheets', img: 'product-table.png' }
    ]
  },
  { 
    id: 'accessories', name: 'Finishing Details', desc: 'Essential finishing accessories for doors, custom cabinets, and smart storage units.', img: 'product-table.png',
    products: [
      { name: 'Door Stoppers', img: 'savera-hardware.png' },
      { name: 'Tower Bolts', img: 'product-table.png' },
      { name: 'Magnetic Catchers', img: 'savera-entrances.png' },
      { name: 'Drawer Knobs', img: 'product-lamp.png' },
      { name: 'Edge Banding', img: 'savera-kitchen.png' },
      { name: 'Concealed Handles', img: 'product-table.png' }
    ]
  }
];

const generateTemplate = (cat) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Explore premium ${cat.name} at Savera Enterprises. ${cat.desc}">
  <meta name="keywords" content="${cat.name}, Savera Enterprises, premium architectural materials, ${cat.products.map(p => p.name).join(', ')}, interior design">
  <meta name="author" content="Savera Enterprises">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${cat.name} | Savera Enterprises Showroom">
  <meta property="og:description" content="${cat.desc}">
  <meta property="og:image" content="https://www.saveraenterprises.com/images/${cat.img}">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${cat.name} | Savera Enterprises">
  <meta name="twitter:description" content="${cat.desc}">
  <meta name="twitter:image" content="https://www.saveraenterprises.com/images/${cat.img}">

  <title>${cat.name} | Savera Enterprises</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
  <style>
    .cat-hero {
      min-height: 70vh;
      display: flex;
      align-items: center;
      padding: 0 5%;
      position: relative;
    }
    .cat-title {
      font-family: var(--font-serif);
      font-size: 5rem;
      color: var(--charcoal);
      line-height: 1.1;
      margin-bottom: 1rem;
    }
    .cat-desc {
      font-size: 1.5rem;
      color: #555;
      max-width: 600px;
      line-height: 1.6;
    }
    .cat-img-wrapper {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 45%;
      border-bottom-left-radius: 40px;
      overflow: hidden;
    }
    .cat-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .detail-section {
      padding: 8rem 5%;
      background: white;
    }
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }
    
    /* Mobile Overrides for Category Page */
    @media (max-width: 768px) {
      .cat-hero {
        flex-direction: column;
        padding-top: 6rem;
        text-align: center;
      }
      .hero-text-anim {
        width: 100% !important;
        margin-bottom: 3rem;
      }
      .cat-title {
        font-size: 3rem;
      }
      .cat-desc {
        font-size: 1.1rem;
        margin-left: auto;
        margin-right: auto;
      }
      .cat-img-wrapper {
        position: relative;
        width: 100%;
        height: 400px;
        border-radius: 30px;
      }
      .grid-2 {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar">
    <div class="logo">
      <a href="index.html" style="display:flex; align-items:center; text-decoration:none; color:inherit;">
        <svg class="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px; height:24px;">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
        <span class="logo-text">Savera</span>
      </a>
    </div>
    <div class="nav-links">
      <a href="index.html#products">Products</a>
      <a href="index.html#promise">Why Savera</a>
      <a href="index.html#materials">Materials</a>
      <a href="index.html#gallery">Gallery</a>
      <a href="#visit" class="nav-cta" style="background-color: var(--charcoal); color: white; padding: 0.6rem 1.2rem; border-radius: 100px; font-weight: 600;">Visit Showroom</a>
    </div>
  </nav>

  <main class="cat-hero">
    <div style="width: 50%; z-index: 2;" class="hero-text-anim">
      <p style="text-transform: uppercase; letter-spacing: 2px; color: var(--sage-green); margin-bottom: 1rem; font-weight: 600;">Premium Collection</p>
      <h1 class="cat-title">${cat.name}</h1>
      <p class="cat-desc">${cat.desc}</p>
    </div>
    <div class="cat-img-wrapper hero-img-anim">
      <img src="./images/${cat.img}" alt="${cat.name}" class="cat-img">
    </div>
  </main>

  <section class="detail-section" style="background: var(--bg-color); padding-top: 5rem; padding-bottom: 5rem;">
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 5%;">
      <h2 class="section-title reveal-el" style="text-align: center; margin-bottom: 3rem;">Featured Products</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
        ${cat.products.map(p => `
        <div class="reveal-el" style="border-radius: 20px; overflow: hidden; background: white; box-shadow: 0 10px 30px rgba(0,0,0,0.03); display: flex; flex-direction: column;">
          <div style="aspect-ratio: 1/1; overflow: hidden; position: relative;">
            <img src="./images/${p.img}" alt="${p.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          </div>
          <div style="padding: 1.5rem; text-align: center;">
            <h3 style="font-family: var(--font-sans); font-weight: 600; font-size: 1.2rem; color: var(--charcoal); margin: 0;">${p.name}</h3>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="detail-section">
    <div class="grid-2">
      <div class="reveal-el">
        <h2 class="section-title">Crafted for perfection.</h2>
        <p style="font-size: 1.15rem; color: #555; line-height: 1.6; margin-top: 1.5rem;">
          At Savera, our ${cat.name.toLowerCase()} are curated from the finest brands to ensure longevity, aesthetic appeal, and perfect functionality. Every piece you see in our showroom has been selected to meet the highest architectural standards.
        </p>
        <div style="margin-top: 3rem;">
          <a href="#" style="background: var(--charcoal); color: white; padding: 1.2rem 2.5rem; border-radius: 100px; text-decoration: none; font-weight: 500; display: inline-block;">Consult our Experts &rarr;</a>
        </div>
      </div>
      <div class="reveal-el" style="background: var(--bg-color); padding: 4rem; border-radius: 30px; text-align: center;">
        <h3 style="font-family: var(--font-serif); font-size: 2rem; color: var(--sage-green); margin-bottom: 1rem;">100% Quality Assured</h3>
        <p style="color: #666; font-size: 1.1rem; line-height: 1.6;">We personally verify the finish, durability, and installation compatibility of all our ${cat.name.toLowerCase()} before recommending them to your site.</p>
      </div>
    </div>
  </section>

  <!-- CTA / Visit Us Today -->
  <section id="visit" class="newsletter-section" style="background-color: var(--bg-color);">
    <div class="newsletter-container">
      <div class="newsletter-content reveal-el" style="text-align: center;">
        <h2 class="newsletter-title" style="margin-bottom: 1.5rem;">Experience ${cat.name} in person.</h2>
        <p class="newsletter-desc" style="font-size: 1.2rem; margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">
          Visit our Patna showroom to touch, feel, and compare the finest materials for your dream home.
        </p>
        <div style="display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap;">
          <a href="#" style="background: white; color: var(--sage-green); padding: 1.2rem 3rem; border-radius: 100px; text-decoration: none; font-weight: 600; font-family: var(--font-sans);">Visit Showroom &rarr;</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo">
          <svg class="logo-icon footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
          <span class="logo-text footer-text">Savera Enterprises</span>
        </div>
        <p class="footer-desc">Premium hardware, plywood, interior, modular kitchen and home solutions showroom in Patna.</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 Savera Enterprises. Designed with ♥ in Patna</p>
    </div>
  </footer>

  <!-- Animation Libraries (Lenis for smooth scroll, GSAP for animations) -->
  <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
  
  <script>
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  </script>
</body>
</html>
`;

categories.forEach(cat => {
  fs.writeFileSync('category-' + cat.id + '.html', generateTemplate(cat));
  console.log('Generated category-' + cat.id + '.html');
});
