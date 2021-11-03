import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink, InlinePageLink } from "../components/atoms"
import Contact from "../components/contact"
import { Heading } from "../components/atoms"

const About = _ => {
  return (
    <Layout activePage="privacy">
      <SEO title="Privacy" />
      <div className="container">
        <Heading>
        <span className="pr-2" role="img" aria-label="emoji icon">
        👨‍💻
        </span>
        Privacy Policy
      </Heading>

      <p className="mt-3 mb-12 text-tertiary">
      This Privacy Policy describes how your personal information is handled.
      </p>
      
      <article className="prose sm:prose md:prose-lg">

<h1 className="text-3xl font-semibold text-center text-primary">Terms of Use &amp; Privacy Policy</h1>
<h2 className="text-2xl font-semibold text-primary p-2">Terms of Use</h2>
<p>This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation.</p>
<p>The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.</p>
<p>See the <a href="https://www.gnu.org/licenses/agpl-3.0.en.html">GNU Affero General Public License</a> for more details.</p>
<h2 className="text-2xl font-semibold text-primary p-2">Privacy Policy</h2>
<p>To better respect and protect your privacy, this notice explains the way your personal information is collected and used.</p>
<h3 className="text-2xl font-semibold text-primary p-2">Collection of Routine Information</h3>
<p>We do not collect, use, save, or have access to any of your personal data.</p>
<p>This software tracks basic information about the user. This information includes, but is not limited to, IP addresses, device details, timestamps, user interaction with the software, and referring pages. There is no intention to personally identify specific users of this software.</p>
<h3 className="text-2xl font-semibold text-primary p-2">Our Applications Comply with the Children’s Online Privacy Protection Act</h3>
<p>Our applications don’t collect personal information from anyone, including children under the age of 13.</p>
<h3 className="text-2xl font-semibold text-primary p-2">Advertisement and Other Third Parties</h3>
<p>This software uses advertisements and analytics. Advertising partners and other third parties may use cookies, scripts and/or web beacons to track user activities of this software in order to display advertisements and other useful information. Such tracking is done directly by the third parties through their own servers and is subject to their own privacy policies. This software has no access or control over these cookies, scripts and/or web beacons that may be used by third parties. Learn how to <a href="http://www.google.com/privacy_ads.html">opt out of Google’s cookie usage</a>.</p>
<h3 className="text-2xl font-semibold text-primary p-2">Affiliate Links</h3>
<p>Some links to products on this website use affiliate links to Amazon and other ecommerce websites. If you purchase an item through one of these links, advertising fees are generated from a small percentage of the purchase price. Mick Schroeder is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
<h3 className="text-2xl font-semibold text-primary p-2">Links to Third Party Websites</h3>
<p>This software includes links to third party websites. We are not responsible for the content or privacy policies on these websites. You should be aware that the privacy policies of these websites may differ from this one.</p>
<h3 className="text-2xl font-semibold text-primary p-2">Security</h3>
<p>The security of your personal information is important, but understand that no method of transmission over the Internet, or method of electronic storage, is 100% secure or anonymous. While we strive to store as little data as possible and use acceptable means to protect your information, we cannot guarantee absolute security.</p>
<h3 className="text-2xl font-semibold text-primary p-2">Changes To This Privacy Policy</h3>
<p>We reserve the right to update or change this privacy policy at any time.</p>
<h3 className="text-2xl font-semibold text-primary p-2">Contact Information</h3>
<p>For any questions or concerns regarding the privacy policy, please email <a href="mailto:privacy@mickschroeder.com">privacy@mickschroeder.com</a>.</p>
        </article>
        
      </div>
      <Contact />
    </Layout>
  )
}

export default About
