import { useEffect, useState } from "react";

const ReviewData = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://mighty-beach-10745.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return [reviews, setReviews]
}

export default ReviewData;