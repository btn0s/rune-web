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

interface WelcomeEmailProps {
  userEmail?: string;
}

export const WelcomeEmail: React.FC<Readonly<WelcomeEmailProps>> = ({
  userEmail = "friend@example.com",
}) => (
  <Html>
    <Head />
    <Preview>Welcome to Rune's Private Beta</Preview>
    <Body style={main}>
      <Container style={container}>
        <div style={logo}>
          <Img
            src="https://www.rune.design/logo.svg"
            width="24"
            height="24"
            alt="Rune Logo"
            style={logoImage}
          />
          <span style={logoText}>Rune</span>
        </div>
        <Heading style={h1}>Thank you for your interest in Rune</Heading>
        <Text style={text}>Hi {userEmail.split("@")[0]},</Text>
        <Text style={text}>Thanks for signing up for Rune's private beta.</Text>
        <Text style={text}>
          We'll notify you as soon as we're ready to give you access. In the
          meantime, stay tuned for updates!
        </Text>
        <Text style={text}>
          Best,
          <br />
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

const link = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "16px 0",
};