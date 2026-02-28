import { useNavigate, useLocation } from 'react-router-dom';

/**
 * A link component that handles hash-based navigation correctly with react-router.
 * - On the homepage (/): scrolls to the target element smoothly.
 * - On other pages: navigates to / first, then scrolls after a short delay.
 */
export default function HashLink({ to, children, onClick, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) {
      window.location.hash = id;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleClick(e) {
    e.preventDefault();
    const hash = to.startsWith('#') ? to : `#${to}`;
    const id = hash.slice(1);

    if (location.pathname === '/') {
      // If parent passed onClick (e.g. close mobile menu), run it first then defer scroll
      // so the menu can close and layout can settle before we scroll (fixes mobile nav).
      if (onClick) {
        onClick(e);
        setTimeout(() => scrollToId(id), 350);
      } else {
        scrollToId(id);
      }
    } else {
      onClick?.(e);
      navigate('/');
      setTimeout(() => scrollToId(id), 100);
    }
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
