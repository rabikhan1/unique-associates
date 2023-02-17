import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import CtaAreaThree from '../components/Common/CtaAreaThree';

class PrivacyPolicy extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <PageBanner
                    pageTitle="Privacy Policy"
                    BGImage="bg-five"
                />

                <div class="text-container ptb-100">
                    <div class="container">
                        <h1>
                            PRIVACY POLICY
                        </h1>

                        <h4>Information we collect</h4>
                        <p>When you use the Services you will have the option to provide us with personal information, such as your email address, so that we may keep you informed.
                            <br />
                            When visiting our website, we may place one or more cookies (a small file that is stored by your browser to recognise you and store your preferences) on your computer. This helps us to improve our Services by personalising information you may want. You may adjust the settings on your browser to refuse cookies but some of the Services may not work if you do so. We may also log information from your computer including the existence of cookies, your IP address and information about your browser program in order to allow us to diagnose problems, administer and track your usage of the Services.
                            <br /></p>
                        <h4>How we use information</h4>
                        <p>We use the information we collect to provide the Services and to communicate with you. We may disclose information (including personal information) to other companies in our group and may use and share, within the group, information that we learn from your interactions with us. We will only share your personal information outside our group in the following circumstances:
                            <br />
                            When you have consented or directed us to share the information.<br />
                            With service providers or affiliate companies who perform services on our behalf.<br />
                            In order to satisfy any requirement under the law or to protect our rights or prevent any concerns relating to fraud or security.<br />
                            In the event of a merger or sale of all or part of our business whereby personal information may be transferred as an asset of the business.<br />
                            We may share with third parties aggregate information or information that does not personally identify you.
                            <br /></p>
                        <h4>Communicating with you</h4>
                        <p>If you prefer not to receive emails about our Services, you may opt out of such communications by following the instructions at the bottom of any of our emails, or by amending your preferences in MyRealproperty.
                            <br /></p>
                        <h4>Third parties</h4>
                        <p>We use third parties to serve advertisements on our website and these third parties may use parties or other means to help measure the effectiveness of their advertisements. Our website may also include links to other unrelated websites and/or contact forms to other unrelated parties which may collect personal information. Our privacy policy does not extend to these third parties or other websites and we recommend that users refer directly to these parties regarding their privacy policies before supplying personal details to these companies.
                            <br /></p>
                        <h4>Safety and security</h4>
                        <p>Personal information is processed and stored in our databases and we have taken reasonable steps to secure and protect the information under our control, including establishing processes to prevent unauthorized access or disclosure of this information. However, whilst we make every effort to ensure the security of your information, we are unable to guarantee the protection of the information from misuse, accidental disclosure or unauthorised acts by others. Information provided by you may be stored or processed outside the Pakistan.
                        </p>
                        <h4>Changes to Privacy Policy</h4>
                        <p>We reserve the right to change this privacy policy at any time without prior notice to you. Any changes will be posted on our website and become effective at the time of posting. In the event that material changes are made that affect the use or disclosure of your personal information, we will make reasonable efforts to notify you of these changes.
                        <br />
                        </p>
                    </div>
                </div>
                <CtaAreaThree/>
            </>
        );
    }
}

export default PrivacyPolicy;