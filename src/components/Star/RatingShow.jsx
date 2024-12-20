import { Rating } from '@mui/material'
import './Rating.scss'

const RatingShow = ({ average }) => {
    return (
        <div className='rating'>
            <Rating name="size-small" defaultValue={average} size='small' readOnly />
            <b className='color-blue'>{average}</b>
        </div>
    )
}

export default RatingShow