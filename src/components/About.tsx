import { FlexBox, HeadingText, PlainText } from "../styles/styles";

function About() {
  return (
    <>
      <FlexBox
        width="100vw"
        style={{
          height: "500px",
          backgroundImage:
            'url("https://www.uber-assets.com/image/upload/v1555699210/assets/63/cdb12d-a0cd-49fa-a6c0-6184a84d99ea/original/About_us_600.jpg")',
          backgroundSize: "cover",
          position: "relative",
          marginBottom: "100px",
        }}
      >
        <HeadingText
          color="white"
          fontSize="64px"
          style={{
            position: "absolute",
            bottom: "12%",
            left: "12%",
          }}
        >
          About Us
        </HeadingText>
      </FlexBox>
      <FlexBox
        flexDirection="column"
        width="75%"
        gap="100px"
        style={{ margin: "auto" }}
      >
        <FlexBox
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
          width="60%"
        >
          <HeadingText>
            We reimagine the way the world moves for the better
          </HeadingText>
          <PlainText>
            Movement is what we power. It’s our lifeblood. It runs through our
            veins. It’s what gets us out of bed each morning. It pushes us to
            constantly reimagine how we can move better. For you. For all the
            places you want to go. For all the things you want to get. For all
            the ways you want to earn. Across the entire world. In real time. At
            the incredible speed of now.
          </PlainText>
        </FlexBox>
        <FlexBox
          flexDirection="column"
          gap="150px"
        >
          <FlexBox gap="100px">
            <FlexBox>
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_300,w_500/v1603308507/assets/f6/0c9607-ae68-43d5-9e88-79f3011d88ee/original/Sustainability.jpg"
                alt="sustainability"
              />
            </FlexBox>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
              gap="20px"
            >
              <HeadingText>Sustainability</HeadingText>
              <PlainText>
                Uber is committing to becoming a fully electric, zero-emission
                platform by 2040, with 100% of rides taking place in
                zero-emission vehicles, on public transit, or with
                micromobility. It is our responsibility as the largest mobility
                platform in the world to more aggressively tackle the challenge
                of climate change. We will do this by offering riders more ways
                to ride green, helping drivers go electric, making transparency
                a priority and partnering with NGOs and the private sector to
                help expedite a clean and just energy transition.
              </PlainText>
            </FlexBox>
          </FlexBox>
          <FlexBox gap="100px">
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <HeadingText>Rides and beyond</HeadingText>
              <PlainText>
                In addition to helping riders find a way to go from point A to
                point B, we're helping people order food quickly and affordably,
                removing barriers to healthcare, creating new freight-booking
                solutions, and helping companies provide a seamless employee
                travel experience. And always helping drivers and couriers earn.
              </PlainText>
            </FlexBox>
            <FlexBox>
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_300,w_500/v1554854756/assets/74/0853d5-80e4-414a-91d7-6fd0b15a136d/original/UberIM_20250-medium-%282%29.jpg"
                alt="Ride and Beyond"
              />
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <FlexBox
          flexDirection="column"
          gap={"50px"}
        >
          <FlexBox>
            <HeadingText>Keep up with the latest</HeadingText>
          </FlexBox>
          <FlexBox gap={"20px"}>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <img
                src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_30,w_30/v1542255691/assets/85/aa54ca-6b5b-48d7-82ac-20657ec53f51/original/megaphone-outlined.svg"
                alt="megaphone"
              />
              <HeadingText>Newsroom</HeadingText>
              <PlainText>
                Get announcements about partnerships, app updates, initiatives,
                and more near you and around the world.
              </PlainText>
            </FlexBox>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <img
                src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_24,w_24/v1542250072/assets/b8/ea1bfc-215a-4246-97f2-a7ac03cd67bd/original/person_group-filled.svg"
                alt="group"
              />
              <HeadingText>Blog</HeadingText>
              <PlainText>
                Find new places to explore and learn about Uber products,
                partnerships, and more.
              </PlainText>
            </FlexBox>
            <FlexBox
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <img
                src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_30,w_30/v1542249793/assets/34/131a8c-392f-44a9-9745-3b8c110502f5/original/network-filled.svg"
                alt="network"
              />
              <HeadingText>Investor relations</HeadingText>
              <PlainText>
                Download financial reports, see next-quarter plans, and read
                about our corporate responsibility initiatives.
              </PlainText>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
}

export default About;
