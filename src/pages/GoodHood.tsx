import React, { useRef } from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { LayoutVertical } from '../components/LayoutVertical.tsx';
import { LayoutHorizontal } from '../components/LayoutHorizontal.tsx';
import { Text } from '../Text.tsx';
import { motion } from 'motion/react';
import { useLayerNavigation } from '../hooks/useLayerNavigation.ts';
import { ImageBlock } from '../components/ImageBlock.tsx';
import { Divider } from '../components/Divider.tsx';

// Images
import ghBanner from "../assets/images/goodhood/gh-banner.webp";
import impact from "../assets/images/goodhood/impact.webp";
import mixpanelLogo from "../assets/images/goodhood/mixpanel-logo.webp";
import mockup1Phone from "../assets/images/goodhood/mockup-1phone.webp";
import mockup2Phones from "../assets/images/goodhood/mockup-2phones.webp";
import mockup3Phones from "../assets/images/goodhood/mockup-3phones.webp";
import mockupSamsung from "../assets/images/goodhood/mockup-samsung.webp";
import ndp from "../assets/images/goodhood/ndp.webp";
import ratings from "../assets/images/goodhood/ratings.webp";
import ssFreeDiscovery from "../assets/images/goodhood/ss-free-discovery.webp";
import ssNewChat from "../assets/images/goodhood/ss-new-chat.webp";
import ssNewCreate from "../assets/images/goodhood/ss-new-create.webp";
import ssNewFeed from "../assets/images/goodhood/ss-new-feed.webp";
import ssNewFilter from "../assets/images/goodhood/ss-new-filter.webp";
import ssNewReview from "../assets/images/goodhood/ss-new-review.webp";
import ssNewSearch from "../assets/images/goodhood/ss-new-search.webp";
import ssOldFeed from "../assets/images/goodhood/ss-old-feed.webp";
import ssOldFreeChat from "../assets/images/goodhood/ss-old-free-chat.webp";
import uikit from "../assets/images/goodhood/uikit.webp";
import volunteer from "../assets/images/goodhood/volunteer.webp";
import vsOlio from "../assets/images/goodhood/vs-olio.webp";
import womanSmiling from "../assets/images/goodhood/woman-smiling.webp";

const MotionLayoutVertical = motion.create(LayoutVertical);
const MotionLayoutHorizontal = motion.create(LayoutHorizontal);

const animateProps = {
  initial: { opacity: 0, y: 48, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "0px 0px -20% 0px" },
  transition: { duration: 0.9, ease: [0.165, 0.84, 0.44, 1] as const }
};

const sections = [
  '01 — Project Overview',
  '02 — Challenge & Goal',
  '03 — Discovery',
  '04 — UX Audit',
  '05 — Iterating',
  '06 — Results',
];

export const GoodHood: React.FC = () => {
  const { theme } = useTheme();
  const theming = themes[theme];
  const { isCollapsed } = useCollapse();
  const pageRef = useRef<HTMLDivElement>(null);

  useLayerNavigation(sections, pageRef);

  return (
    <div
      ref={pageRef}
      className='page-scroll'
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        marginRight: isCollapsed ? '0px' : '224px',
        transition: 'margin-right 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}>
      <LayoutVertical
        width='100%'
        padding='156px 0px'
        gap='156px'
        alignItems='flex-start'
        alignSelf='stretch'
      >
        {/* 01 - Project Overview */}
        <MotionLayoutVertical
          id='01 — Project Overview'
          alignSelf='stretch'
          gap='36px'
          padding='0px 48px'
          {...animateProps}>
          <LayoutVertical
            alignSelf='stretch'
            gap='24px'>
            <Text
              variant='mainBodySmRegular'
              color={theming.textIcon.neutral.tertiary}>
              01 — Project Overview
            </Text>
            <Text
              variant='mainDisplayLg'
              color={theming.textIcon.neutral.primary}>
              GoodHood.SG
            </Text>
            <Text
              variant='mainBodyLg'
              color={theming.textIcon.neutral.secondary}>
              Designing for Connected Communities
            </Text>
          </LayoutVertical>

          <img
            src={mockup1Phone}
            alt="GoodHood Banner"
            height="600px"
            width="100%"
            style={{ borderRadius: '12px', objectFit: 'cover' }}
          />

          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            I joined <a href="https://www.goodhoodsg.com/" target="_blank">GoodHood.SG</a> in May 2023 as a Product Designer, embarking on a journey to transform the digital neighborhood hub. From conducting research and refining UX to crafting compelling data visualizations and prototypes, I had the privilege of leading a comprehensive UI overhaul for our mobile apps. The result? The most significant update on GoodHood was released in August 2023.
          </Text>

          {/* Project Info Box */}
          <LayoutVertical
            alignSelf='stretch'
            padding='24.5px'
            style={{
              borderRadius: '12px',
              backgroundColor: theming.bg.neutral.secondary,
              border: `0.5px solid ${theming.stroke.neutral.border}`,
            }}>
            <LayoutHorizontal
              alignSelf='stretch'
              gap='24px'
              alignItems='stretch'>
              {/* Role */}
              <LayoutVertical
                flex='1'
                gap='16px'>
                <Text
                  variant='mainBodySmRegular'
                  color={theming.textIcon.neutral.tertiary}>
                  Role
                </Text>
                <LayoutVertical gap='8px'>
                  <Text
                    variant='mainHeadingMd'
                    color={theming.textIcon.neutral.primary}>
                    UX Designer
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}>
                    Discovery, Iteration, Data Analysis
                  </Text>
                </LayoutVertical>
              </LayoutVertical>

              <Divider orientation='vertical' />

              {/* Timeline */}
              <LayoutVertical
                flex='1'
                gap='16px'>
                <Text
                  variant='mainBodySmRegular'
                  color={theming.textIcon.neutral.tertiary}>
                  Timeline
                </Text>
                <LayoutVertical gap='8px'>
                  <Text
                    variant='mainHeadingMd'
                    color={theming.textIcon.neutral.primary}>
                    8 Months
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}>
                    May 2023 – January 2024
                  </Text>
                </LayoutVertical>
              </LayoutVertical>

              <Divider orientation='vertical' />

              {/* Team */}
              <LayoutVertical
                flex='1'
                gap='16px'>
                <Text
                  variant='mainBodySmRegular'
                  color={theming.textIcon.neutral.tertiary}>
                  Tools
                </Text>
                <LayoutVertical gap='8px'>
                  <Text
                    variant='mainHeadingMd'
                    color={theming.textIcon.neutral.primary}>
                    Figma, Blender, Mixpanel, Google Suite
                  </Text>
                </LayoutVertical>
              </LayoutVertical>
            </LayoutHorizontal>
          </LayoutVertical>
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text
            variant='mainHeadingMd'
            color={theming.textIcon.neutral.primary}>
            Context
          </Text>
          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            GoodHood.SG, a Singapore-based digital neighborhood hub affectionately known as a 'kampung,' aims to unite neighbors for a vibrant and close-knit community. Our vision centers around fostering local connections through neighborhood feeds and chats while promoting sustainability through free giving and receiving initiatives among Singaporeans.
          </Text>
          <img
            src={womanSmiling}
            alt="woman smiling"
            width="100%"
            style={{ borderRadius: '12px' }}
          />
        </MotionLayoutVertical>

        <MotionLayoutVertical alignSelf='stretch' gap='24px' padding='0px 48px' {...animateProps}>
          <Text
            variant='mainHeadingMd'
            color={theming.textIcon.neutral.primary}>
            Opportunity
          </Text>
          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            Taking advantage of the patriotic spirit that sweeps through Singapore on its National Day every August 9th, our team strategically chose this period to promote our product. Our goal was clear: attract new users, boost Daily Active Users (DAU), and enhance store ratings.
          </Text>
          <img
            src={ndp}
            alt="NDP"
            width="100%"
            style={{ borderRadius: '12px' }}
          />
        </MotionLayoutVertical>

        {/* 02 — Challenge & Goal */}
        <MotionLayoutVertical
          id='02 — Challenge & Goal'
          alignSelf='stretch'
          gap='64px'
          padding='0px 48px'
          {...animateProps}>
          <LayoutVertical gap='24px'>
            <Text
              variant='mainBodySmRegular'
              color={theming.textIcon.neutral.tertiary}>
              02 — Challenge & Goal
            </Text>
            <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>
              “One man's trash is another man's treasure” — except that we don't call it “trash”; it has a bad notation to it haha.
            </Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              In early June 2023, the app had around 2052 Total DAU, with an average of 19 new users per day. Recognizing the need for a fresh look and a rebrand to appeal to a broader audience, my initial task was to revamp the product comprehensively. The UX of our selling features needed attention to impact conversion and retention rates positively.
            </Text>
            <LayoutVertical gap='8px'>
              <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
                <strong>Business Selling Points:</strong> Our platform offered a neighborhood-exclusive feed where neighbors could share stories, events, and notices, and join interest groups. Moreover, we provided a space for neighbors to give away items they no longer needed.
              </Text>
            </LayoutVertical>
          </LayoutVertical>
          <img
            src={ghBanner}
            alt="GoodHood Banner"
            width="100%"
            style={{ borderRadius: '12px' }}
          />
          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            Would our selling points change? Until now I can say that they have. But at the end of the day, every startup has to adapt to the market quickly to thrive. I realized this soon and began a journey to align our business goals with users' insights and needs.
          </Text>
        </MotionLayoutVertical>

        {/* 03 — Discovery */}
        <MotionLayoutVertical
          id='03 — Discovery'
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text
            variant='mainBodySmRegular'
            color={theming.textIcon.neutral.tertiary}>
            03 — Discovery
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            Understanding the evolving market, I conducted user interviews and analyzed data through tools like Mixpanel.
          </Text>

          <LayoutHorizontal gap='24px' alignItems='flex-start'>
            {/* Volunteer */}
            <LayoutVertical flex='1' gap='16px'>
              <img
                src={volunteer}
                alt="Volunteer"
                height="400px"
                width="100%"
                style={{ borderRadius: '12px', objectFit: 'cover' }} />
              <LayoutVertical gap='8px'>
                <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>User Interviews</Text>
                <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
                  While most of my work was remote from Vietnam, I had the opportunity to visit Singapore and attend a volunteer workshop of GoodHood. I had the chance to interview our beloved volunteers and to learn from the power users of our product.
                </Text>
              </LayoutVertical>
            </LayoutVertical>
            {/* Mixpanel */}
            <LayoutVertical flex='1' gap='16px'>
              <img
                src={mixpanelLogo}
                alt="Mixpanel"
                height="400px"
                width="100%"
                style={{ borderRadius: '12px', objectFit: 'cover' }} />
              <LayoutVertical gap='8px'>
                <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>Analytics — Mixpanel</Text>
                <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
                  Embracing the power of numbers, I delved into data analytics using Mixpanel. Though challenging initially, mastering this tool opened up opportunities for in-depth UX research.
                </Text>
              </LayoutVertical>
            </LayoutVertical>
          </LayoutHorizontal>
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          padding='0px 48px'
          gap='64px'
          {...animateProps}>
          <LayoutVertical gap='12px'>
            <Text
              variant='mainHeadingMd'
              color={theming.textIcon.neutral.primary}>
              Findings and Strategy
            </Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              After engaging with power users in GoodHood and collecting new data, I uncovered insights that guided my decision-making:
            </Text>
            <ul style={{ margin: 0, paddingLeft: 20, color: theming.textIcon.neutral.secondary }}>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>High Usage of Free Giving System: The Free Giving system emerged as the most frequently used feature.</Text></li>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Central Role of the Free Page: The majority of app interactions occurred on the Free page.</Text></li>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Neighborhood Feed Dominance: Among the four content platforms, the neighborhood feed garnered the most engagement. Groups saw the least engagement.</Text></li>
            </ul>
          </LayoutVertical>

          <LayoutVertical gap='12px'>
            <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>
              “We have to move quick, so let's prioritize”.
            </Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              Realizing that our biggest selling point has shifted to the Free Giving system, we made a finite decision to focus on improving the UX of this feature.
            </Text>
            <ul style={{ margin: 0, paddingLeft: 20, color: theming.textIcon.neutral.secondary }}>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Interactions and engagement are high for Free items (High Demand)</Text></li>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>The number of listings is low (Low Supply)</Text></li>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>The number of posts created is low (Low Supply + Low Incentive)</Text></li>
            </ul>
          </LayoutVertical>
        </MotionLayoutVertical>
      </LayoutVertical>

      {/* 04 — UX Audit */}
      <LayoutVertical
        id='04 — UX Audit'
        gap='156px'
        width='100%'
        alignSelf='stretch'
        padding='180px 0px'
        style={{
          backgroundColor: theming.bg.page.darker
        }}>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='64px'
          padding='0px 48px'
          {...animateProps}>
          <LayoutVertical gap='12px'>
            <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>
              04 — UX Audit
            </Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              Conducting a UX audit of the old GoodHood.SG app (April 2023 and earlier), I identified areas for improvement.
            </Text>
          </LayoutVertical>
          <LayoutHorizontal
            alignSelf='stretch'
            gap='24px'
            {...animateProps}>
            <LayoutVertical flex='1' gap='8px'>
              <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>“Free” Discovery</Text>
              <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
                After the onboarding process, new users will land on this home page. The route to the Free page was tucked inside a non-sticky menu on the home screen, down-prioritizing the feature and making it hard to access if users are on a different screen.
              </Text>
            </LayoutVertical>
            <ImageBlock
              src={ssFreeDiscovery}
              alt="Free Discovery"
              height="400px"
              imageWidth="70%"
              style={{ flex: 1 }}
              imageLeft='15%'
              imageTop='10%'
            />
          </LayoutHorizontal>
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='12px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>“Free” Listings Feed</Text>
          <ul style={{ margin: 0, paddingLeft: 20, color: theming.textIcon.neutral.secondary }}>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>A huge “nudge to list” section pushes the main content of the page down.</Text></li>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>The “Like” icon is put inside the image frame, increasing user error.</Text></li>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>A quick filter includes the “Availability” option to see “Gone” items - a flawed function.</Text></li>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>The “No result” search page is empty.</Text></li>
          </ul>
          <ImageBlock
            src={ssOldFeed}
            alt="Old Feed"
            height="440px"
            imageWidth="80%"
            imageLeft='6%'
            imageTop='1%'
            style={{ backgroundColor: "#ccc" }} />
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='12px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>
            Creating a “Free” Listing — Benchmarking Competitors
          </Text>
          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            During the audit process, I benchmarked direct competitors like Olio to see what a good solution looks like and minimize steps for conversion. (Benchmarking is not copying. It's learning while saving resources).
          </Text>
          <ImageBlock
            src={vsOlio}
            alt="VS Olio"
            height="700px"
            imageHeight="90%"
            imageWidth="auto"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='12px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>Receiving a Request</Text>
          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            If someone requests a Free item, a request message appears. However, there was no differentiation between “Set as recipient” and “Leave a review” CTA, and the process was hard to understand for new users.
          </Text>
          <ImageBlock
            src={ssOldFreeChat}
            alt="Old Free Chat"
            height="600px"
            imageHeight="90%"
            imageWidth='auto'
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          />
        </MotionLayoutVertical>

        {/* 05 — Iterating */}
        <MotionLayoutVertical
          id='05 — Iterating'
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>
            05 — Iterating & Validating Assumptions
          </Text>

          <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>
            "The goal was to make the process of Creating & Requesting Free items easier & more transparent for Givers and Takers."
          </Text>

          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            After loops of feedback and weekly design critiques from the team, we set out a 2-month sprint to work on this re-brand of GoodHood, as we want to release it just in time for the marketing team to start promoting the app before Singapore National Day Parade.
          </Text>

          <img src={mockup3Phones}
            alt="Mockup 3 Phones"
            width="100%"
            style={{ objectFit: 'cover' }} />

        </MotionLayoutVertical>

        <LayoutHorizontal
          gap='24px'
          alignSelf='stretch'
          padding='0px 48px'
          {...animateProps}>
          <MotionLayoutVertical flex='1' gap='16px' {...animateProps}>
            <ImageBlock
              src={ssNewFeed}
              alt="New Feed"
              height="500px"
              imageHeight="90%"
              imageWidth="auto"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            />
            <ul style={{ margin: 0, paddingLeft: 20, color: theming.textIcon.neutral.secondary }}>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>"Free" now has its dedicated page.</Text></li>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>"My listing" navigation for quick access.</Text></li>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Improved placement of the "Heart" icon.</Text></li>
            </ul>
          </MotionLayoutVertical>
          <MotionLayoutVertical flex='1' gap='16px' style={{ marginTop: '128px' }} {...animateProps}>
            <ImageBlock
              src={ssNewFilter}
              alt="New Filter"
              height="500px"
              imageWidth="80%"
              imageLeft="10%"
              imageTop='10%'
            />
            <ul style={{ margin: 0, paddingLeft: 20, color: theming.textIcon.neutral.secondary }}>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Sticky Quick Filter on top.</Text></li>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Added “Top Gone items” to invoke FOMO.</Text></li>
            </ul>
          </MotionLayoutVertical>
          <MotionLayoutVertical flex='1' gap='16px' style={{ marginTop: '256px' }} {...animateProps}>
            <ImageBlock
              src={ssNewSearch}
              alt="New Search"
              height="500px"
              imageWidth="80%"
              imageLeft="10%"
              imageBottom='10%'
            />
            <ul style={{ margin: 0, paddingLeft: 20, color: theming.textIcon.neutral.secondary }}>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Encouraged referrals on No Result state.</Text></li>
              <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Displayed "Nearby items" to extend journey.</Text></li>
            </ul>
          </MotionLayoutVertical>
        </LayoutHorizontal>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='16px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>Creating Free Listing</Text>
          <ul style={{ margin: 0, paddingLeft: 20, color: theming.textIcon.neutral.secondary }}>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Constraint the process within one page.</Text></li>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Pre-fill “Pick up details” to save time.</Text></li>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Sticky “List Now” CTA.</Text></li>
          </ul>
          <ImageBlock
            src={ssNewCreate}
            alt="New Create"
            height="600px"
            imageHeight='90%'
            imageWidth="auto"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='16px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>New Process of Giving Items</Text>
          <ul style={{ margin: 0, paddingLeft: 20, color: theming.textIcon.neutral.secondary }}>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Clearer copy conveying value.</Text></li>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Dynamic "State" updates.</Text></li>
            <li><Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>System messages guiding users.</Text></li>
          </ul>
          <ImageBlock
            src={ssNewChat}
            alt="New Chat"
            height="500px"
            imageWidth="90%"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='16px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainHeadingLg' color={theming.textIcon.neutral.primary}>
            Why stop there? Cease the opportunity!
          </Text>
          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            Post a successful arrangement, users are prompted to give a 5-star review and are immediately nudged to rate the app. This strategic move aligns with our goal of turning satisfied users into positive reviewers.
          </Text>
          <ImageBlock
            src={ssNewReview}
            alt="New Review"
            height="500px"
            imageWidth="90%"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            The results? Exactly what we wanted!
          </Text>
          <ImageBlock
            src={ratings}
            alt="Ratings"
            height="500px"
            imageHeight='90%'
            imageWidth="auto"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
        </MotionLayoutVertical>

      </LayoutVertical>

      <LayoutVertical
        width='100%'
        padding='156px 0px'
        gap='156px'
        alignItems='flex-start'
        alignSelf='stretch'
      >
        {/* 06 — Results */}
        <MotionLayoutVertical
          id='06 — Results'
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>
            06 — Results
          </Text>
          <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
            This case study will get extremely long if I cover every change during the re-branding. Through just a glimpse, I would still want to show a quick review of the big update.
          </Text>
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='96px'
          padding='0px 48px'
          {...animateProps}>
          <img src={uikit}
            alt="UI Kit"
            width="100%"
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
          <img src={mockup2Phones}
            alt="Mockup 2 Phones"
            width="100%"
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
          <img src={mockupSamsung}
            alt="Mockup Samsung"
            width="100%"
            style={{ objectFit: 'cover', borderRadius: '12px' }}
          />
        </MotionLayoutVertical>

        <MotionLayoutVertical alignSelf='stretch' gap='48px' padding='0px 48px' {...animateProps}>
          <LayoutVertical gap='16px'>
            <Text variant='mainHeadingLg' color={theming.textIcon.neutral.primary}>
              Impact
            </Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              While this overview provides a glimpse of our significant update, the impact has been substantial. We observed a rise in app ratings and received positive feedback from users nationwide. Notably, there were significant increases in DAU and Free metrics recorded through backend analytics.
            </Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              My journey at GoodHood.SG is a testament to the power of adaptability, user-centric design, and a commitment to creating a thriving community through digital connections.
            </Text>
            <LayoutHorizontal gap='24px'>
              <a href="https://apps.apple.com/sg/app/goodhood-sg-neighbourhood-app/id1494686562" target="_blank">Link to App Store</a>
              <a href="https://play.google.com/store/apps/details?id=sg.goodhood.app&hl=en_SG&gl=US" target="_blank">Link to Google Play</a>
            </LayoutHorizontal>
          </LayoutVertical>

          <ImageBlock
            src={impact}
            alt="Impact"
            height="500px"
            imageWidth="90%"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }} />
        </MotionLayoutVertical>

      </LayoutVertical>
    </div>
  );
};