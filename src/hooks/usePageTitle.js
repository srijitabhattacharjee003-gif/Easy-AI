import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} · Easy AI for Older Adults`
      : 'Easy AI for Older Adults · HCI Research at IIT Kharagpur';
  }, [title]);
}