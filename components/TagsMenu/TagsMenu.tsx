'use client';

import css from '@/components/TagsMenu/TagsMenu.module.css';
import { noteTags } from '@/types/note';
import Link from 'next/link';
import { useState } from 'react';

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={handleClick}>
        Notes ▾
      </button>

      {isOpen && (
        <ul className={css.menuList}>
          {['All notes', ...noteTags].map(tag => {
            const path = tag === 'All notes' ? 'All' : encodeURIComponent(tag);
            return (
              <li className={css.menuItem} key={tag}>
                <Link
                  href={`/notes/filter/${path}`}
                  className={css.menuLink}
                  onClick={() => setIsOpen(false)}
                >{`${tag}`}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
