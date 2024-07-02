import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import meetingImg from '../../assets/meeting.jpg';
import styles from './Preview.module.css';

export default function Preview() {
	const progressCircle = useRef(null);
	const progressContent = useRef(null);
	const onAutoplayTimeLeft = (s, time, progress) => {
		progressCircle.current.style.setProperty('--progress', 1 - progress);
		progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
	};

	return (
		<article className={styles.preview}>
			<div className={styles.image}>
				<Swiper
					modules={[Navigation, Autoplay]}
					navigation
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					onAutoplayTimeLeft={onAutoplayTimeLeft}
				>
					<SwiperSlide>
						<img src={meetingImg} alt="People at a meeting" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={meetingImg} alt="People at a meeting" />
					</SwiperSlide>
					<SwiperSlide>
						<img src={meetingImg} alt="People at a meeting" />
					</SwiperSlide>
					<div className="autoplay-progress" slot="container-end">
						<svg viewBox="0 0 36 36" ref={progressCircle}>
							<circle cx="18" cy="18" r="16"></circle>
						</svg>
						<span ref={progressContent}></span>
					</div>
				</Swiper>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>
					Get <mark>insights</mark> that help your business grow.
				</h2>
				<p className={styles.desc}>
					Discover the benefits of data analytics and make better
					decisions regarding revenue, customer experience, and
					overall efficiency.
				</p>
				<ul className={styles.statuses}>
					<li>
						<span className={styles.num}>10K+</span>
						<span className={styles.label}>Companies</span>
					</li>
					<li>
						<span className={styles.num}>314</span>
						<span className={styles.label}>Templates</span>
					</li>
					<li>
						<span className={styles.num}>12M+</span>
						<span className={styles.label}>Queries</span>
					</li>
				</ul>
			</div>
		</article>
	);
}
