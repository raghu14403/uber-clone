import * as FS from "../../styles/footer-style";

function Footer() {
  return (
    <FS.ParentDiv>
      <div>
        <div>
          <h1>Uber</h1>
        </div>
        <FS.TableDiv>
          <div>
            <h3>Company</h3>
            <FS.ListItem>About Us</FS.ListItem>
            <FS.ListItem>Newsroom</FS.ListItem>
            <FS.ListItem>Investors</FS.ListItem>
            <FS.ListItem>Blog</FS.ListItem>
            <FS.ListItem>Careers</FS.ListItem>
          </div>
          <div>
            <h3>Products</h3>
            <FS.ListItem>Ride</FS.ListItem>
            <FS.ListItem>Drive</FS.ListItem>
            <FS.ListItem>Eat</FS.ListItem>
            <FS.ListItem>uber for Business</FS.ListItem>
            <FS.ListItem>Uber Freight</FS.ListItem>
          </div>
          <div>
            <h3>Global Citizenship</h3>
            <FS.ListItem>Safety</FS.ListItem>
            <FS.ListItem>Diversity</FS.ListItem>
            <FS.ListItem>Transparency</FS.ListItem>
          </div>
          <div>
            <h3>Innovation</h3>
            <FS.ListItem>AI</FS.ListItem>
          </div>
        </FS.TableDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <FS.image
              src="src/assets/facebook.png"
              alt="facebook"
            />
            <FS.image
              src="src/assets/twitter.png"
              alt="twitter"
            />
            <FS.image
              src="src/assets/youtube.png"
              alt="youtube"
            />
            <FS.image
              src="src/assets/linkedin-logo.png"
              alt="Linkedin"
            />
            <FS.image
              src="src/assets/instagram.png"
              alt="instagram"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FS.image
                src="src/assets/internet.png"
                alt="internet"
              />
              <p>EN</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FS.image
                src="src/assets/location.png"
                alt="location"
              />
              <p>$Location</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FS.image
              src="src/assets/copyright.png"
              alt="copyright"
            />
            <p>$year Uber Technologies Inc.</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <p>Privacy</p>
            <p>Accessibility</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </FS.ParentDiv>
  );
}

export default Footer;
