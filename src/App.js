import { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Menu, Welcome, About, Skills, Projects } from './Components';
import { iconContainerAnim, iconsAnim, pageTransitionAnim } from './App.anim';
import backgroundIcons from './App.constants';

export default function App() {
	const [hasLoaded, setHasLoaded] = useState(false);
	const [page, setPage] = useState(0);
	const [bg, setBg] = useState([]);

	const iconSize = 100;

	const generateBackground = () => {
		const windowHeight = window.innerHeight;
		const windowWidth = window.innerWidth;

		const iconsArray = [];

		const rows = Math.floor(windowHeight / iconSize);
		const columns = Math.floor(windowWidth / iconSize);
		const icons = rows * columns;

		for (let i = 0; i < icons; i++) {
			iconsArray.push({
				id: i,
				src: backgroundIcons[Math.floor(Math.random() * backgroundIcons.length)],
				opacity: Math.random(),
			});
		}

		return iconsArray;
	};

	const switchPage = (pageNo) => {
		switch (pageNo) {
			case 0:
				return <About />;
			case 1:
				return <Skills />;
			case 2:
				return <Projects />;
			default:
				return <Welcome />;
		}
	};

	useEffect(() => {
		setBg(generateBackground());
	}, []);

	return (
		<div className='App'>
			<AnimateSharedLayout>
				<AnimatePresence exitBeforeEnter>
					{hasLoaded ? (
						<motion.div key='content'>
							<motion.div variants={iconContainerAnim} initial='end' className='iconsContainer'>
								{bg.map(({ id, src, opacity }) => (
									<motion.div
										variants={iconsAnim}
										custom={Math.random()}
										key={id}
										className='iconWrapper'
										style={{ width: iconSize, height: iconSize }}
									>
										<img alt='icon' src={src} width={52} style={{ opacity: opacity }} />
									</motion.div>
								))}
							</motion.div>
							<AnimatePresence exitBeforeEnter>
								<motion.div key={page} variants={pageTransitionAnim} initial='init' animate='anim' exit='end'>
									{switchPage(page)}
								</motion.div>
							</AnimatePresence>
							<Menu selectPage={setPage} pageNo={page} />
						</motion.div>
					) : (
						<motion.div key='loader' className='loader'>
							<motion.div variants={iconContainerAnim} initial='init' animate='anim' exit='end' className='iconsContainer'>
								{bg.map(({ id, src, opacity }) => (
									<motion.div
										variants={iconsAnim}
										custom={Math.random()}
										key={id}
										className='iconWrapper'
										style={{ width: iconSize, height: iconSize }}
									>
										<img alt='icon' src={src} width={52} style={{ opacity: opacity }} />
									</motion.div>
								))}
							</motion.div>
							<Welcome setLoading={setHasLoaded} />
						</motion.div>
					)}
				</AnimatePresence>
			</AnimateSharedLayout>
		</div>
	);
}
