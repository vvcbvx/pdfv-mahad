// ==================== CSS ====================
const styles = `
/* تنسيقات الصفحة الرئيسية */
.hero-section {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    padding: 6rem 2rem 4rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero-content h1 {
    font-size: 3.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    animation: fadeInDown 1s ease;
}

.hero-content p {
    font-size: 1.5rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease;
}

.btn {
    display: inline-block;
    background: #e74c3c;
    color: white;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
    animation: fadeIn 1.5s ease;
}

.btn:hover {
    background: #c0392b;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* أقسام الصفحة */
.featured-section {
    padding: 4rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.section-title h2 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
}

.section-title p {
    color: #7f8c8d;
    max-width: 700px;
    margin: 0 auto;
}

.section-title::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: #e74c3c;
    margin: 1rem auto 0;
}

/* سلايدر المنتجات المميزة */
.featured-slider {
    position: relative;
    margin: 2rem 0;
}

.slide {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.slide:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
}

.slide-img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.slide-content {
    padding: 1.5rem;
    text-align: center;
}

.slide-content h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
}

.slide-price {
    color: #e74c3c;
    font-weight: bold;
    font-size: 1.2rem;
}

.slide-old-price {
    text-decoration: line-through;
    color: #95a5a6;
    margin-right: 0.5rem;
}

.sale-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: #e74c3c;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: bold;
}

/* فئات المنتجات */
.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.category-card {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    height: 200px;
    cursor: pointer;
}

.category-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.category-card:hover .category-img {
    transform: scale(1.1);
}

.category-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
}

.category-title {
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
}

/* تأثيرات الحركة */
@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .hero-content p {
        font-size: 1.2rem;
    }
    
    .section-title h2 {
        font-size: 2rem;
    }
}
`;

// ==================== HTML ====================
const template = `
<section class="hero-section">
    <div class="hero-content">
        <h1>أحذية العنتر</h1>
        <p>أحدث الموديلات بأفضل الأسعار في ريف دير الزور</p>
        <a href="#products" class="btn">تصفح المنتجات</a>
    </div>
</section>

<section class="featured-section">
    <div class="section-title">
        <h2>منتجات مميزة</h2>
        <p>اكتشف أحدث تشكيلاتنا من الأحذية بجودة عالية وأسعار تنافسية</p>
    </div>
    
    <div class="featured-slider" id="featured-slider">
        <!-- سيتم إضافة الشرائح ديناميكيًا -->
    </div>
</section>

<section class="featured-section">
    <div class="section-title">
        <h2>تصفح حسب الفئة</h2>
        <p>اختر من بين مجموعة واسعة من الفئات التي تناسب جميع الأذواق</p>
    </div>
    
    <div class="categories-grid" id="categories-grid">
        <!-- سيتم إضافة الفئات ديناميكيًا -->
    </div>
</section>
`;

// ==================== JS Logic ====================
export function renderHome() {
    // إضافة التنسيقات إلى head
    addStyles(styles);
    
    // عرض الهيكل HTML
    document.getElementById('app').innerHTML = template;
    
    // جلب بيانات المنتجات المميزة وعرضها
    loadFeaturedProducts();
    
    // جلب بيانات الفئات وعرضها
    loadCategories();
}

function addStyles(css) {
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
}

async function loadFeaturedProducts() {
    try {
        // في تطبيق حقيقي، سيتم جلب البيانات من API
        const featuredProducts = [
            {
                id: 1,
                name: "حذاء رياضي مميز",
                price: 120,
                oldPrice: 150,
                images: ["https://via.placeholder.com/500x500?text=Product+1"],
                category: "رياضي"
            },
            {
                id: 2,
                name: "حذاء رسمي كلاسيكي",
                price: 200,
                images: ["https://via.placeholder.com/500x500?text=Product+2"],
                category: "رسمي"
            },
            {
                id: 3,
                name: "حذاء كاجوال مريح",
                price: 80,
                oldPrice: 100,
                images: ["https://via.placeholder.com/500x500?text=Product+3"],
                category: "كاجوال"
            },
            {
                id: 4,
                name: "حذاء شتوي دافئ",
                price: 150,
                images: ["https://via.placeholder.com/500x500?text=Product+4"],
                category: "شتوي"
            }
        ];
        
        renderSlider(featuredProducts);
    } catch (error) {
        console.error('Error loading featured products:', error);
    }
}

async function loadCategories() {
    try {
        // في تطبيق حقيقي، سيتم جلب البيانات من API
        const categories = [
            {
                id: 1,
                name: "أحذية رياضية",
                image: "https://via.placeholder.com/600x400?text=رياضية"
            },
            {
                id: 2,
                name: "أحذية رسمية",
                image: "https://via.placeholder.com/600x400?text=رسمية"
            },
            {
                id: 3,
                name: "أحذية كاجوال",
                image: "https://via.placeholder.com/600x400?text=كاجوال"
            },
            {
                id: 4,
                name: "أحذية شتوية",
                image: "https://via.placeholder.com/600x400?text=شتوية"
            }
        ];
        
        renderCategories(categories);
    } catch (error) {
        console.error('Error loading categories:', error);
    }
}

function renderSlider(products) {
    const slider = document.getElementById('featured-slider');
    let slidesHTML = '';
    
    products.forEach(product => {
        slidesHTML += `
        <div class="slide" data-id="${product.id}">
            ${product.oldPrice ? `<span class="sale-badge">خصم ${calculateDiscount(product)}%</span>` : ''}
            <img src="${product.images[0]}" alt="${product.name}" class="slide-img">
            <div class="slide-content">
                <h3>${product.name}</h3>
                <p class="slide-price">
                    ${product.oldPrice ? `<span class="slide-old-price">${product.oldPrice} $</span>` : ''}
                    ${product.price} $
                </p>
                <a href="#product/${product.id}" class="btn">عرض التفاصيل</a>
            </div>
        </div>
        `;
    });
    
    slider.innerHTML = slidesHTML;
    initSlider();
}

function renderCategories(categories) {
    const grid = document.getElementById('categories-grid');
    let categoriesHTML = '';
    
    categories.forEach(category => {
        categoriesHTML += `
        <div class="category-card" data-id="${category.id}">
            <img src="${category.image}" alt="${category.name}" class="category-img">
            <div class="category-overlay">
                <h3 class="category-title">${category.name}</h3>
            </div>
        </div>
        `;
    });
    
    grid.innerHTML = categoriesHTML;
    
    // إضافة حدث النقر للفئات
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
            const categoryId = card.dataset.id;
            window.location.hash = `products?category=${categoryId}`;
        });
    });
}

function calculateDiscount(product) {
    return Math.round((1 - product.price / product.oldPrice) * 100);
}

function initSlider() {
    // هنا يمكنك إضافة منطق السلايدر باستخدام مكتبة مثل Swiper.js
    // أو تنفيذ سلايدر مخصص
    console.log('Slider initialized');
}