import { useEffect } from 'react';

export const useChangeDocumentTitle = (pageTitle) => {
	useEffect(() => {
		document.title = `Douglas-Combs | Personal Portfolio - ${pageTitle}`;
	}, [pageTitle]);
};
