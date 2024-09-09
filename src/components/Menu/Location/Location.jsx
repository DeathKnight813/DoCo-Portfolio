import React from 'react';
import { motion } from 'framer-motion';

export const Location = () => {
	return (
		<div className='locationContainer'>
			<motion.p className='location' inital='init' animate='init' whileHover='hover' whileTap='hover'>
				Located in <span>Galena,KS</span>
			</motion.p>
		</div>
	);
};
