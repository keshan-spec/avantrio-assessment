import '../../../Styles/nav.css'
import { NavItem } from "./NavItem";

interface Props { }

export const SideNav: React.FC<Props> = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem to="/" isLogo={true} asset={"assets/Group 537@2x.png"} />
        <NavItem to="/" asset={"assets/Group 538@2x.png"} />
        <NavItem to="/" asset="assets/Group 563@2x.png" />
        <NavItem to="/" asset="assets/Group 548@2x.png" />
        <NavItem to="/" asset="assets/Group 549@2x.png" />
        <NavItem to="/" asset="assets/Group 555@2x.png" />
        <NavItem to="/" asset="assets/Group 565@2x.png" />
      </ul>
    </nav>
  );
}
