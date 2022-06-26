import FooterLinks from "../home/FooterLinks";
import PoweredBy from "../home/PoweredBy";
import dynamic from 'next/dynamic';

const Scripts = dynamic(
  () => import('../../pages/uitls'),
  { ssr: false }
)

export default function Footer() {
    return (
        <>
            <Scripts/>
            <footer className="footer pt-lg-5 pt-4 bg-faded-light">
                <FooterLinks />
                <PoweredBy />
            </footer>
            <a className="btn-scroll-top show" href="#top" data-scroll="">
                <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
                <i className="btn-scroll-top-icon fi-chevron-up">   </i>
            </a>
        </>
    )
}