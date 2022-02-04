import React from "react";
import Logo from "../Logo/Logo";
import classes from "./Footer.module.css"
import ButtonHome from "../ButtonArray/ButtonHome";
import NavLinkCreator from "../NavLinkCreator/NavLinkCreator";
const Footer = () => {
    return (
        <>
            <footer className="container">
                <div className={classes.footer}>
                    <div className="colXs12">
                        <div className="colXs3">
                            <div><Logo/></div>
                            <div className={classes.textfooter}>In the BeFriends Club you can take advantage of attractive offers</div>
                            <div className={classes.btnToCenter}>
                                <ButtonHome text="Join Now " to="/home" />
                            </div>
                            <div></div>
                        </div>
                        <div className="colXs3">
                            <div className={classes.toRight}>
                                <div className={classes.headLine}>Useful links</div>
                                <NavLinkCreator to='/contact' text="Contact Us "  /><br/>
                                <NavLinkCreator to='/help' text="Help & About us "  /><br/>
                                <NavLinkCreator to='/shipping' text="Shipping & Returns "  /><br/>
                                <NavLinkCreator to='/refund' text="Refund Policy "  />
                            </div>
                            <div>

                            </div>

                        </div>
                        <div className="colXs3">
                            <div className={classes.toRight}>
                                <div className={classes.headLine}>Customer Service </div>
                                <NavLinkCreator to='/home' text="Orders"  /><br/>
                                <NavLinkCreator to='/home' text="Downloads"  /><br/>
                                <NavLinkCreator to='/home' text="Addresses"  /><br/>
                                <NavLinkCreator to='/home' text="Account details"  />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer
