import React from 'react'
import './Review.scss'

const Review = () => {
    return (
        <>
            <div className='review-container'>
                <div className='title'>
                    <b>0/5</b>
                    <div>
                        <i className="fa fa-star grey" aria-hidden="true"></i>
                        <i className="fa fa-star grey" aria-hidden="true"></i>
                        <i className="fa fa-star grey" aria-hidden="true"></i>
                        <i className="fa fa-star grey" aria-hidden="true"></i>
                        <i className="fa fa-star grey" aria-hidden="true"></i>
                    </div>
                </div>
                <div className='filter'>
                    <div className='filter__item'>
                        Tất cả
                    </div>
                    <div className='filter__item'>
                        5 <i className="fa fa-star orange" aria-hidden="true"></i>
                    </div>
                    <div className='filter__item'>
                        4 <i className="fa fa-star orange" aria-hidden="true"></i>
                    </div>
                    <div className='filter__item'>
                        3 <i className="fa fa-star orange" aria-hidden="true"></i>
                    </div>
                    <div className='filter__item'>
                        2 <i className="fa fa-star orange" aria-hidden="true"></i>
                    </div>
                    <div className='filter__item'>
                        1 <i className="fa fa-star orange" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className='review-result'>
                <div className='title'>
                    <span>0/5 <i className="fa fa-star red"></i></span>
                </div>
                <div className='avg-rate'>
                    <div className='avg-rate__item'>
                        <span> 5 <i className="fa fa-star black"></i></span>
                        <div className='rate-bar'></div>
                        <span><b>0</b> đánh giá</span>
                    </div>
                    <div className='avg-rate__item'>
                        <span> 4 <i className="fa fa-star black"></i></span>
                        <div className='rate-bar'></div>
                        <span><b>0</b> đánh giá</span>
                    </div>
                    <div className='avg-rate__item'>
                        <span> 3 <i className="fa fa-star black"></i></span>
                        <div className='rate-bar'></div>
                        <span><b>0</b> đánh giá</span>
                    </div>
                    <div className='avg-rate__item'>
                        <span> 2 <i className="fa fa-star black"></i></span>
                        <div className='rate-bar'></div>
                        <span><b>0</b> đánh giá</span>
                    </div>
                    <div className='avg-rate__item'>
                        <span> 1 <i className="fa fa-star black"></i></span>
                        <div className='rate-bar'></div>
                        <span className='total-avg-rate'><b>0</b> đánh giá</span>
                    </div>
                </div>
                <div className='drop-comment'>
                    <p>Chia sẻ nhận xét về sản phẩm</p>
                    <button>Viết nhận xét của bạn</button>
                </div>
            </div>
        </>
    )
}

export default Review