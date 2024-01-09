import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [review, setReview] = useState(0);
	const { name, job, image, text } = people[review];

	// Review change handler
	const handleReviewChange = (type) => {
		const arrayLength = people.length;

		// If type is undefined, get a random review
		if (type === undefined) {
			setReview((prevState) => getRandomUniqueReview(prevState));
			return;
		}

		// If type is next, get the next review , else get previous
		if (type === 'next') {
			setReview((prevState) => (prevState === arrayLength - 1 ? 0 : prevState + 1));
		} else {
			setReview((prevState) => (prevState === 0 ? arrayLength - 1 : prevState - 1));
		}
	};

	// Get a random review that is not the current review
	const getRandomUniqueReview = (currentReview) => {
		const arrayLength = people.length;
		let randomReview = Math.floor(Math.random() * arrayLength);

		// If random review is the current review, call function until a unique review is found
		if (randomReview === currentReview) {
			return getRandomUniqueReview(currentReview);
		}
		return randomReview;
	};

	return (
		<article className='review'>
			<div className='imageContainer'>
				<img src={image} alt={name} className='personImg' />
				<span className='quoteIcon'>
					<FaQuoteRight />
				</span>
			</div>
			<div className='textContainer'>
				<h4 className='author'>{name}</h4>
				<p className='job'>{job}</p>
				<p className='info'>{text}</p>
				<div className='buttonContainer'>
					<button className='prevBtn' onClick={() => handleReviewChange('prev')}>
						<FaChevronLeft />
					</button>
					<button className='nextBtn' onClick={() => handleReviewChange('next')}>
						<FaChevronRight />
					</button>
				</div>
				<button className='randomBtn' onClick={() => handleReviewChange()}>
					surprise me
				</button>
			</div>
		</article>
	);
};

export default Review;
