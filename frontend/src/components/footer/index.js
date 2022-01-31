import React from 'react'
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from './style/footer'

export default function Footer(){
  return (
    <Container>
      <Title>Questions? Contact Us</Title>
      <Break />
      <Row>
        <Column>
          <Link href='#'>FAQ</Link>
          <Link href='#'>Investor Relations</Link>
          <Link href='#'>Purchase</Link>
          <Link href='#'>Corporate Information</Link>
          <Link href='#'>Original Artwork</Link>
        </Column>
        <Column>
          <Link href='#'>Help Centre</Link>
          <Link href='#'>Jobs</Link>
          <Link href='#'>Terms of Use</Link>
          <Link href='#'>Contact Us</Link>
          <Link href='#'>Redeem</Link>
        </Column>
        <Column>
          <Link href='#'>Account</Link>
          <Link href='#'>Privacy</Link>
          <Link href='#'>Delivery Information</Link>
          <Link href='#'>Cookie Preferences</Link>
          <Link href='#'>Legal Notices</Link>
        </Column>
        <Column>
          <Link href='#'>Bleh</Link>
          <Link href='#'>Out of Content</Link>
          <Link href='#'>Arjhun</Link>
          <Link href='#'>made this</Link>
          <Link href='#'>thanks</Link>
        </Column>
      </Row>
    </Container>
  )
}
