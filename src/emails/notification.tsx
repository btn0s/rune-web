import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface NotificationEmailProps {
  userEmail?: string;
}

export const NotificationEmail: React.FC<Readonly<NotificationEmailProps>> = ({
  userEmail = "unknown@example.com",
}) => (
  <Html>
    <Head />
    <Preview>New Rune Beta Signup: {userEmail}</Preview>
    <Body style={main}>
      <Container style={container}>
        <div style={logo}>
          <Img
            src="https://rune.design/logo.svg"
            width="24"
            height="24"
            alt="Rune Logo"
            style={logoImage}
          />
          <span style={logoText}>Rune</span>
        </div>
        <Heading style={h1}>New Beta Signup</Heading>
        <Text style={text}>
          A new user has signed up for the Rune private beta:
        </Text>
        <Text style={highlight}>{userEmail}</Text>
        <Text style={text}>
          This email was sent to you automatically from the Rune waitlist
          system.
        </Text>
        <Text style={text}>
          <Link href="https://rune.design" style={link}>
            rune.design
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontWeight: "bold",
  marginBottom: "32px",
};

const logoImage = {
  display: "inline-block",
  verticalAlign: "middle",
};

const logoText = {
  fontSize: "16px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  lineHeight: "1.25",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "16px 0",
};

const highlight = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  backgroundColor: "#f5f5f5",
  padding: "10px",
  borderRadius: "4px",
  margin: "16px 0",
};

const link = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "1.6",
};
