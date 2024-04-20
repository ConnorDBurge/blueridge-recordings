import styles from './mobile-menu.module.css'

export function MobileMenuToggle() {
  return (
    <label className={styles.hamburger}>
      <input type="checkbox" role="mobile-toggle" id="mobile-toggle" />
    </label>
  )
}
