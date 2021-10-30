import React from "react";
import PropTypes from "prop-types";
import footerDesktop from "./footerDesktop";
Footer.propTypes = {};

function Footer(props) {
  return (
        <div>
            
            <div className="hidden lg:block">
               {/* desktop footer */}
               
            </div>
            <div className="lg:hidden">
                {/* mobile footer */}

            </div>
        </div>
  );
}

export default Footer;
