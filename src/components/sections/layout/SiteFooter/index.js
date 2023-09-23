import React from "react";
import Footer from "../../../primitives/footer/Footer";
import FooterLogo from "../../../primitives/footer/FooterLogo";
import FooterSocialLinks from "../../../primitives/footer/FooterSocialLinks";
import FooterLinks from "../../../primitives/footer/FooterLinks";
import footerLinks from "../../../../data/footerLinks";
import footerSocialLinks from "../../../../data/footerSocialLinks";
import KFCLabel from "../../../primitives/svgs/KFCLabel";
import "./site-footer.css";

/**
 * @type {React.FC}
 */
const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <Footer>
      <FooterLogo />
      <p>
        Items availability, prices, participation, delivery areas and charges,
        purchase requirements for delivery may vary.
      </p>
      <FooterLinks links={footerLinks} />
      <FooterSocialLinks socialLinks={footerSocialLinks} />
      <p className="copyright">&copy;KFC, Inc. All rights reserved.</p>
      <KFCLabel className="svg footer-label" />
    </Footer>
  );
};

export default SiteFooter;
