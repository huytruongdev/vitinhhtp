import Slider from 'react-slick'
import './ProductGallery.scss'

const ProductGallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <ul>{dots}</ul>
        ),
        customPaging: i => (
            <div className="gallery__item">
                <img
                    src={`https://hanoicomputercdn.com/media/product/77685_man_hinh_lg_24mr400_b_850x850_${i + 1}.jpg`}
                    alt={`LG preview ${i}`}
                />
            </div>
        )
    };
    return (
        <div className="product-img">
            <Slider {...settings}>
                <img src='https://hanoicomputercdn.com/media/product/77685_man_hinh_lg_24mr400_b_850x850_1.jpg' alt='LG preview' />
                <img src='https://hanoicomputercdn.com/media/product/77685_man_hinh_lg_24mr400_b_850x850_2.jpg' alt='LG preview' />
                <img src="https://hanoicomputercdn.com/media/product/77685_man_hinh_lg_24mr400_b_850x850_3.jpg" alt="LG preview" />
                <img src='https://hanoicomputercdn.com/media/product/77685_man_hinh_lg_24mr400_b_850x850_4.jpg' alt='LG preview' />
                <img src='https://hanoicomputercdn.com/media/product/77685_man_hinh_lg_24mr400_b_850x850_5.jpg' alt='LG preview' />
            </Slider>
        </div>
    )
}

export default ProductGallery