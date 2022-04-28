import React from 'react'
import { Button, Content, Breadcrumb, BreadcrumbItem, Tabs, Tab
} from 'carbon-components-react';
import '../assets/LandingPage.scss';
import LandingPageHeader from './components/LandingPageHeader/';


export default function LandingPageScreen() {
  
  const props = {
    tabs: {
      selected: 0,
      role: 'navigation',
    },
    tab: {
      role: 'presentation',
      tabIndex: 0,
    },
  };
  
  
  return (
      <>
        <LandingPageHeader/>
        <div className="cds--grid cds--grid--full-width landing-page">
            <div className="cds--row landing-page__banner">
            <div className="cds--col-lg-16">
              <Breadcrumb noTrailingSlash>
                <BreadcrumbItem>
                  <a href="/">Learning the Basics</a>
                </BreadcrumbItem>
              </Breadcrumb>
              <h1 className="landing-page__heading">Hardware at a few clicks away</h1>
              <div className="cds--grid cds--grid--no-gutter cds--grid--full-width">
                <div className="cds--col-lg-8 lp_heading3">
                  Test
                </div>
                <div className="cds--col-lg-8 lp_heading3">Test 2
                </div>
              </div>
            </div>
          </div>
          <div className="cds--row landing-page__r2">
            <h2 className="landing-page__r2__heading">Powered by IBM Technology</h2>
            <div className="cds--col cds--no-gutter">
              <Tabs {...props.tabs}>
                <Tab {...props.tab} label="IBM Cloud Foundry">
                  <div className="cds--grid cds--grid--no-gutter cds--grid--full-width">
                    <div className="cds--row landing-page__tab-content">
                      <div className="cds--col-lg-16">
                        Webapp hosted on IBM's Cloud Foundry. Allowing for a quick, consistant, 
                        reliable, serverless, and secure connection that can help easily migrate
                        the webapp if ever needed.
                      </div>
                      <div className="cds--col-lg-16" href="https://www.ibm.com/cloud/cloud-foundry">Click here to learn more.</div>
                    </div>
                  </div>
                </Tab>
                <Tab {...props.tab} label="IBM DB2 Cloud">
                  <div className="cds--grid cds--grid--no-gutter cds--grid--full-width">
                    <div className="cds--row landing-page__tab-content">
                      <div className="cds--col-lg-16">
                        All data is safe behind IBMs Proprietary cloud based Database. Behind state of the 
                        arch technology, you can rest assured that all info is secured and out of harms reach.
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab {...props.tab} label="Carbon Design Systems">
                  <div className="cds--grid cds--grid--no-gutter cds--grid--full-width">
                    <div className="cds--row landing-page__tab-content">
                      <div className="cds--col-lg-16">
                        Carbon provides styles and components in Vanilla, React, Angular,
                        and Vue for anyone building on the web.
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="cds--row landing-page__r3">
            <div className="cds--col-md-4 cds--col-lg-4">
              <h3 className="landing-page__label">Resources</h3>
            </div>
            <div className="cds--col-md-4 cds--col-lg-4">Help Center</div>
            <div className="cds--col-md-4 cds--col-lg-4">Contact Us</div>
            <div className="cds--col-md-4 cds--col-lg-4">Become </div>
          </div>
        </div>
      </>
    );
};