import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <span>{site.footer}</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  )
}
