import FooterLinks from "../home/FooterLinks";
import PoweredBy from "../home/PoweredBy";

export default function Footer() {
    return (
        <>
            <footer className="footer pt-lg-5 pt-4 bg-secondary">
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