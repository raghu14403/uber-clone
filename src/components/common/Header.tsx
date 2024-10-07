import * as HS from "../../styles/header-style";

function Header() {
  return (
    <HS.Parent>
      <HS.LeftContent>
        <h3>Uber</h3>
        <HS.Items>
          <HS.Item>Ride</HS.Item>
          <HS.Item>Drive</HS.Item>
          <HS.Item>About</HS.Item>
        </HS.Items>
      </HS.LeftContent>
      <HS.RightContent>
        <p>EN</p>
        <p>Help</p>
      </HS.RightContent>
    </HS.Parent>
  );
}
export default Header;
