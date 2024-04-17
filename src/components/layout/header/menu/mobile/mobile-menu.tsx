'use client'

import { Menu } from '@/lib/shopify/types'

export default function MobileMenu({ menu }: { menu: Menu }) {
  return (
    <>
      <input id="mobile-menu" type="checkbox" className="peer hidden" />
      <style>
        {`
          #mobile-menu:not(:checked) ~ div.menu-div {
            transform: translateX(-100%);
          }
          #mobile-menu:checked ~ div.menu-div {
            transform: translateX(0%);
          }
          div.menu-div {
            transition: transform 0.2s ease-in-out;
            position: fixed;
            left: 0;
            top: 56.28px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            z-index: 50;
          }
        `}
      </style>
      <div className="menu-div bg-primary md:hidden">
        <div className="border-t-[1px] border-red-400 px-[40px] pb-[60px]">
          <ul className="size-full text-white">
            <a href="#">Sidebar Item 1</a>
            <a href="#">Sidebar Item 2</a>
          </ul>
        </div>
      </div>
    </>
  )
}
