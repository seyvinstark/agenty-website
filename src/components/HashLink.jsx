import { useNavigate, useLocation } from 'react-router-dom';

/**
 * A link component that handles hash-based navigation correctly with react-router.
 * - On the homepage (/): scrolls to the target element smoothly.
 * - On other pages: navigates to / first, then scrolls after a short delay.
 */
export default function HashLink({ to, children, onClick, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClick(e) {
    e.preventDefault();
    onClick?.(e);

    const hash = to.startsWith('#') ? to : `#${to}`;
    const id = hash.slice(1);

    if (location.pathname === '/') {
      // Already on homepage — set hash first (so e.g. Services tab can react), then scroll
      const el = document.getElementById(id);
      if (el) {
        window.location.hash = id;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to homepage, then scroll after render
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          window.location.hash = id;
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
