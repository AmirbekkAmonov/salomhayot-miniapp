import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useEffect, useState } from 'react';
import { useProductStore } from '../hooks/useProductHooks';
import ImageZoomModal from '../components/ui/ImageZoomModal';



function ProductDetail() {
    const { toggleCartItem } = useProductStore();
    const { id } = useParams();
    const product = products.find((p: any) => p.id === Number(id));
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const { isInCart } = useProductStore();
    const [isFocused, setIsFocused] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(12); // default 12 oy
    const [initialPaymentPercent, setInitialPaymentPercent] = useState(45); // default 45%
    const [monthlyPrice, setMonthlyPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    const imageList = product?.images && product.images.length > 0
        ? product.images
        : [product?.image];

    useEffect(() => {
        const productPrice = Number(product?.oldprice.replace(/[^\d]/g, ''));
        const initialPayment = productPrice * (initialPaymentPercent / 100);
        const remaining = productPrice - initialPayment;
        const perMonth = remaining / selectedMonth;

        setMonthlyPrice(Math.round(perMonth));
        setTotalPrice(Math.round(remaining));
    }, [selectedMonth, initialPaymentPercent, product]);



    const prevSlide = () => {
        setCurrentIndex(prev => (prev === 0 ? imageList.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex(prev => (prev === imageList.length - 1 ? 0 : prev + 1));
    };


    if (!product) return <div>Mahsulot topilmadi</div>;
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const getKey = (product: any) => `${product.category}-${product.id}`;
    const key = getKey(product);

    return (
        <div className="product-detail">
            <div className="container product-detail__container">
                <h3>Mahsulot haqida</h3>
                <div className='product-detail__info'>
                    <h2>{product.name}</h2>
                    <div className='product-detail__info-container'>
                        <div className='carousel'>
                            <div className="carousel__main">
                                <img
                                    src={product.image}
                                    alt={`Slide ${currentIndex + 1}`}
                                    className="carousel__image"
                                    onClick={() => {
                                        setSelectedImage(product.image);
                                        setIsModalOpen(true);
                                    }}
                                />
                                <button
                                    className="carousel__btn carousel__btn--prev"
                                    onClick={prevSlide}
                                    aria-label="Oldingi rasm"
                                >
                                    ‹
                                </button>
                                <button
                                    className="carousel__btn carousel__btn--next"
                                    onClick={nextSlide}
                                    aria-label="Keyingi rasm"
                                >
                                    ›
                                </button>
                            </div>

                            <div className="carousel__thumbnails">
                                {imageList.map((src: any, idx: any) => (
                                    <img
                                        key={idx}
                                        src={src}
                                        alt={`Thumbnail ${idx + 1}`}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`carousel__thumbnail ${idx === currentIndex ? 'carousel__thumbnail--active' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className='product-detail__info-container-right'>
                            <div className='product-detail__info'>
                                <p className='product-detail__info-oldprice'>{product.oldprice}</p>
                                <p className='product-detail__info-monthprice'>
                                    {Number(product.monthprice.replace(/[^\d]/g, '')).toLocaleString('uz-UZ').replace(/\u00A0/g, ' ')} ming <span>so'mdan 12 oyga</span>
                                </p>
                                <div className='product-detail__info-buttons'>
                                    <button className='product-detail__info-button' onClick={() => toggleCartItem(key)}>
                                        {isInCart(key) ? 'Savatdan olish' : 'Savatga qo\'shish'}
                                    </button>
                                    <button className='product-detail__info-button'>
                                        Sotib olish
                                    </button>
                                </div>
                            </div>
                            <div className='product-detail__info-installment-payment'>
                                <h3>Muddatli to'lov</h3>
                                <div className='product-detail__info-installment-payment-buttons'>
                                    {[3, 6, 9, 12].map(month => (
                                        <button
                                            key={month}
                                            className={`installment-payment-button ${selectedMonth === month ? 'active' : ''}`}
                                            onClick={() => setSelectedMonth(month)}
                                        >
                                            {month} oy
                                        </button>
                                    ))}
                                </div>

                                <h4>Boshlang'ich to'lov</h4>
                                <div className='product-detail__info-installment-payment-initial-payment'>
                                    <input
                                        type="number"
                                        placeholder='0'
                                        min={0}
                                        max={90}
                                        value={initialPaymentPercent}
                                        onFocus={() => setIsFocused(true)}
                                        onBlur={() => setIsFocused(false)}
                                        onChange={(e) => {
                                            const val = Number(e.target.value);
                                            if (val >= 45 && val <= 90) setInitialPaymentPercent(val);
                                        }}
                                    />
                                    {isFocused
                                        ? <button className='btn-calculate'>Hisoblash</button>
                                        : <button>{initialPaymentPercent}%</button>
                                    }
                                </div>

                                <p>Boshlang'ich to'lov 45% dan 90% gacha</p>
                                <div className='initial-payment-price'>
                                    <div className='initial-payment-price-item'>
                                        <h4>{monthlyPrice.toLocaleString('uz-UZ')} so'm</h4>
                                        <p>Oylik to'lov</p>
                                    </div>

                                    <span className='divider'></span>

                                    <div className='initial-payment-price-item'>
                                        <h4>{totalPrice.toLocaleString('uz-UZ')} so'm</h4>
                                        <p>Umumiy summa</p>
                                    </div>
                                </div>
                                <button className='installment-payment-button-buy'>Muddatli to'lovga xarid qilish</button>
                                <div className='installment-payment-call-center'>
                                    <p>Savollaringiz bormi?</p>
                                    <a href="tel:+998783333833">+998783333833</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container product-detail__description'>
                <h3>Mahsulot haqida</h3>
            </div>
            {isModalOpen && (
                <ImageZoomModal imageUrl={selectedImage} onClose={() => setIsModalOpen(false)} />
            )}
        </div>
    );
}

export default ProductDetail;
