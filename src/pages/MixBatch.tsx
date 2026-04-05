import React, { useRef } from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { LayoutVertical } from '../components/LayoutVertical.tsx';
import { LayoutHorizontal } from '../components/LayoutHorizontal.tsx';
import { Text } from '../Text.tsx';
import { motion } from 'motion/react';
import { useLayerNavigation } from '../hooks/useLayerNavigation.ts';
import { Divider } from '../components/Divider.tsx';
import { ImageBlock } from '../components/ImageBlock.tsx';

import heroImg from '../assets/images/mix-batch.webp';
import competitorsImg from '../assets/images/batch-transfer/competitors.webp';
import entryPointImg from '../assets/images/batch-transfer/entry-point.webp';
import flowImg from '../assets/images/batch-transfer/flow.webp';
import interactionCostImg from '../assets/images/batch-transfer/interaction-cost.webp';
import optionAImg from '../assets/images/batch-transfer/option-a.webp';
import optionBImg from '../assets/images/batch-transfer/option-b.webp';
import reviewSubmitImg from '../assets/images/batch-transfer/review-submit.webp';
import revisionImg from '../assets/images/batch-transfer/revision.webp';
import transparencyImg from '../assets/images/batch-transfer/transparency.webp';
import visibilityImg from '../assets/images/batch-transfer/visibility.webp';

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
  '02 — The Problem',
  '03 — Exploration & Solutioning',
  '04 — User Research & Validation',
  '05 — Final Design',
];

export const MixBatch: React.FC = () => {
  const { theme } = useTheme();
  const theming = themes[theme];
  const { isCollapsed } = useCollapse();
  const pageRef = useRef<HTMLDivElement>(null);

  useLayerNavigation(sections, pageRef);

  // Helper for proper placeholder styling
  const ImagePlaceholder = ({ label, height = '400px' }: { label: string, height?: string }) => (
    <div style={{
      width: '100%',
      height,
      borderRadius: '12px',
      backgroundColor: theming.bg.neutral.secondary,
      border: `1px solid ${theming.stroke.neutral.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theming.textIcon.neutral.tertiary,
      fontFamily: 'Inter',
      fontSize: '14px'
    }}>
      [Image: {label}]
    </div>
  );

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
        padding='156px 0px 0px 0px'
        gap='156px'
        alignItems='flex-start'
        alignSelf='stretch'
        style={{ minHeight: '100%' }}
      >
        {/* 01 — Project Overview */}
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
              Mix Batch Payment
            </Text>
            <Text
              variant='mainBodyLg'
              color={theming.textIcon.neutral.secondary}>
              Streamlining high-volume transfers for Techcombank Business
            </Text>
          </LayoutVertical>

          <ImageBlock
            src={heroImg}
            alt="Batch payment"
            height="600px"
            imageWidth="80%"
            imageLeft="10%"
            imageTop="10%"
            withShadow
          />

          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            Released in 2022, the batch transfer feature on Techcombank Business allows corporate customers to send money to multiple beneficiaries in a single transaction. However, the legacy system forced users to segregate transfers: one batch for internal (Techcombank) receivers and a separate batch for external banks.
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
                    Discovery, Iteration, Prototyping
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
                    3 Months
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}>
                    May – Aug 2024
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
                  Team
                </Text>
                <LayoutVertical gap='8px'>
                  <Text
                    variant='mainHeadingMd'
                    color={theming.textIcon.neutral.primary}>
                    12 Members
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}
                    as='ul'
                    style={{ marginLeft: '21px', padding: 0 }}>
                    <li>1 Product Owner, 3 Business Analysts</li>
                    <li>6 Engineers & QAs</li>
                    <li>1 UX Designer, 1 UX Writer, 1 UX Researcher</li>
                  </Text>
                </LayoutVertical>
              </LayoutVertical>
            </LayoutHorizontal>
          </LayoutVertical>

        </MotionLayoutVertical>

        {/* The Goal */}
        <MotionLayoutVertical padding='0px 48px' gap='24px' alignSelf='stretch'>
          <Text
            variant='mainHeadingLg'
            color={theming.textIcon.neutral.primary}>
            The Goal
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            In 2024, I spearheaded the design process to launch Mix Batch Payment. The goal was to allow users to combine all beneficiary types into a single file, eliminating redundant workflows and adhering to the mental models of modern accountants.
          </Text>

          {/* Metrics Box (Impact) */}
          <LayoutVertical gap='0px' width='100%'>
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
                <LayoutVertical flex='1' gap='8px'>
                  <Text
                    variant='mainHeadingLg'
                    color={theming.textIcon.accent.primary}>
                    551
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}>
                    SME Customers impacted
                  </Text>
                </LayoutVertical>

                <Divider orientation='vertical' />

                <LayoutVertical flex='1' gap='8px'>
                  <Text
                    variant='mainHeadingLg'
                    color={theming.textIcon.accent.primary}>
                    380
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}>
                    Large Enterprise Customers impacted
                  </Text>
                </LayoutVertical>

                <Divider orientation='vertical' />

                <LayoutVertical flex='1' gap='8px'>
                  <Text
                    variant='mainHeadingLg'
                    color={theming.textIcon.accent.primary}>
                    4,503
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}>
                    Billion VND in transaction volume
                  </Text>
                </LayoutVertical>
              </LayoutHorizontal>
            </LayoutVertical>
          </LayoutVertical>
        </MotionLayoutVertical>

        {/* 02 — The Problem */}
        <MotionLayoutVertical
          id='02 — The Problem'
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text
            variant='mainBodySmRegular'
            color={theming.textIcon.neutral.tertiary}>
            02 — The Problem
          </Text>
          <Text
            variant='mainHeadingLg'
            color={theming.textIcon.neutral.primary}>
            The Pain of Fragmentation
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            In the previous version, users uploaded an Excel sheet containing transfer details. The catch? All beneficiaries in that sheet had to be from the same group: either all Techcombank (internal) or all external banks.
            <br /><br />
            This created friction in real-world scenarios. For example, a supply chain company paying for raw materials from multiple manufacturers to support the company's production line cannot control which banks their vendors use. If 50% of vendors use Techcombank and 50% use other banks, the accountant had to split their data and initiate two separate batch transfers.
            <br /><br />
            This defeated the purpose of batching, which is to consolidate all transactions within a payment cycle into a single request, simplifying management and cash flow auditing.
          </Text>

        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='156px'
          padding='0px 48px'
          {...animateProps}>

          <LayoutVertical alignSelf='stretch' gap='48px'>

            <LayoutVertical alignSelf='stretch' gap='24px'>
              <Text
                variant='mainHeadingLg'
                color={theming.textIcon.neutral.primary}>
                Heuristic Audit & Usability Debts
              </Text>
              <Text
                variant='mainBodyMdRegular'
                color={theming.textIcon.neutral.secondary}>
                Before starting the redesign, I audited the 2022 interface and analyzed CSAT feedback. I identified three major usability debts:
              </Text>
            </LayoutVertical>

            <LayoutVertical alignSelf='stretch' gap='16px'>
              <Text
                variant='mainHeadingMd'
                color={theming.textIcon.neutral.primary}>
                Visibility of System Status
              </Text>
              <Text
                variant='mainBodyMdRegular'
                color={theming.textIcon.neutral.tertiary}>
                The upload screen showed an infinite loading loop with no time estimation.
              </Text>
              <ImageBlock
                src={visibilityImg}
                alt="Visibility of System Status"
                height="600px"
                imageWidth="90%"
                imageLeft="5%"
                imageTop="10%"
              />
            </LayoutVertical>
          </LayoutVertical>

          <LayoutVertical alignSelf='stretch' gap='16px'>
            <Text
              variant='mainHeadingMd'
              color={theming.textIcon.neutral.primary}>
              High Interaction Cost
            </Text>
            <Text
              variant='mainBodyMdRegular'
              color={theming.textIcon.neutral.tertiary}>
              To view error messages, users had to click into each individual transaction rather than seeing a summary.
            </Text>
            <ImageBlock
              src={interactionCostImg}
              alt="High Interaction Cost"
              height="600px"
              imageWidth="80%"
              imageLeft="10%"
              imageTop="-10%"
            />
          </LayoutVertical>
          <LayoutVertical alignSelf='stretch' gap='16px'>
            <Text
              variant='mainHeadingMd'
              color={theming.textIcon.neutral.primary}>
              Lack of Transparency
            </Text>
            <Text
              variant='mainBodyMdRegular'
              color={theming.textIcon.neutral.tertiary}>
              Users couldn't see the transfer method. <strong>Context:</strong> Transfers to external banks go through either NAPAS 247 (Instant) or CITAD (Interbank - up to 1 business day). Large corporations need to know exactly when money will arrive, but the system didn't display which infrastructure would be used.
            </Text>
            <ImageBlock
              src={transparencyImg}
              alt="Lack of Transparency"
              height="600px"
              imageWidth="80%"
              imageLeft="10%"
              imageTop="-30%"
            />
          </LayoutVertical>
        </MotionLayoutVertical>

        {/* 03 — Exploration & Solutioning */}
        <MotionLayoutVertical
          id='03 — Exploration & Solutioning'
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text
            variant='mainBodySmRegular'
            color={theming.textIcon.neutral.tertiary}>
            03 — Exploration & Solutioning
          </Text>
          <Text
            variant='mainHeadingLg'
            color={theming.textIcon.neutral.primary}>
            Competitor Benchmarking
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            To understand industry standards, I analyzed how competitors handle batching in Vietnam.
            <br /><br />
            <strong>MB:</strong> Good error handling (dedicated step to view/edit errors). However, they failed to differentiate between NAPAS/CITAD transfers.
            <br />
            <strong>Vietcombank:</strong> Allowed direct editing on the web, but the revision page was cluttered, combining error and valid transactions in a single view with poor hierarchy.
          </Text>

          <ImageBlock
            src={competitorsImg}
            alt="Competitor Analysis - MB & VCB UI Comparison"
            height="400px"
            imageTop="15%"
            imageWidth="90%"
            imageLeft="5%"
            borderRadiusImage="0px"
          />
        </MotionLayoutVertical>

        <MotionLayoutVertical
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text
            variant='mainHeadingLg'
            color={theming.textIcon.neutral.primary}
            style={{ marginTop: '24px' }}>
            The Design Hypothesis
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            We had a clear goal: Allow mixed beneficiaries. However, we had a debate regarding the Transaction Revision Page. How should we group valid transactions to help accountants review them best?
          </Text>

          <LayoutHorizontal alignSelf='stretch' gap='24px'>

            <LayoutVertical
              flex='1'
              style={{
                borderRadius: '12px',
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
              }}>
              <ImageBlock
                src={optionAImg}
                alt="Bank-Based Grouping"
                height="400px"
                imageTop="-50%"
                imageWidth="110%"
                imageLeft="-10%"
                borderRadiusFrame="0px"
              />
              <LayoutVertical padding='16px 12px' gap='12px' height='200px'>
                <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>Option A</Text>
                <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>Bank-Based Grouping<br />Separate transactions by Internal vs. External.</Text>
                <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Assumption: Users are used to the old workflow and want to see these two categories clearly separated for accounting purposes.</Text>
              </LayoutVertical>
            </LayoutVertical>

            <LayoutVertical
              flex='1'
              style={{
                borderRadius: '12px',
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
              }}>
              <ImageBlock
                src={optionBImg}
                alt="Speed-Based Grouping"
                height="400px"
                imageTop="-50%"
                imageWidth="110%"
                imageLeft="-10%"
                borderRadiusFrame="0px"
              />
              <LayoutVertical padding='16px 12px' gap='12px' height='200px'>
                <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>Option B</Text>
                <Text variant='mainBodySmRegular' color={theming.textIcon.neutral.tertiary}>Speed-Based Grouping<br />Separate by Interbank (CITAD/Slow) vs. NAPAS (Instant).</Text>
                <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>Assumption: Techcombank prioritizes NAPAS. However, NAPAS has strict rules (e.g., &lt;500M VND, &lt;100 char notes). If we highlight transactions that fail these rules (and are forced into CITAD), users might fix them to ensure instant payment.</Text>
              </LayoutVertical>
            </LayoutVertical>

          </LayoutHorizontal>
        </MotionLayoutVertical>

        {/* 04 — User Research & Validation */}
        <MotionLayoutVertical
          id='04 — User Research & Validation'
          alignSelf='stretch'
          gap='24px'
          padding='0px 48px'
          {...animateProps}>
          <Text
            variant='mainBodySmRegular'
            color={theming.textIcon.neutral.tertiary}>
            04 — User Research & Validation
          </Text>
          <Text
            variant='mainHeadingLg'
            color={theming.textIcon.neutral.primary}>
            Settling the debate
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            To settle the debate between Option A and Option B, and to validate the need for a "Direct Edit" feature, we conducted In-depth Interviews and Usability Testing with 5 SME Accountants.
          </Text>
        </MotionLayoutVertical>

        {/* Insight 1 */}
        <MotionLayoutVertical
          alignSelf='stretch'
          gap='16px'
          padding='0px 48px'
          {...animateProps}>
          <Text
            variant='mainHeadingMd'
            color={theming.textIcon.neutral.primary}>
            The "Source of Truth" Insight
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            We proposed a feature to let users edit errors directly on the website (like our competitors). Surprisingly, 5/5 users rejected this.
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            <strong>Why?</strong> Accountants need their local Excel file to match the bank records 100%. If they fix an error on the web, their local file is outdated. They preferred to fix the Excel file and re-upload.
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            <strong>Design Decision:</strong> We cut the "Direct Edit" feature from the scope, saving engineering time and aligning with actual user behavior.
          </Text>
          <ImageBlock
            src=""
            alt="Excel"
            height="300px"
            imageTop="15%"
          />
        </MotionLayoutVertical>

        {/* Insight 2 */}
        <MotionLayoutVertical
          alignSelf='stretch'
          gap='16px'
          padding='0px 48px'
          {...animateProps}>
          <Text
            variant='mainHeadingMd'
            color={theming.textIcon.neutral.primary}>
            Speed Over Origin
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            3/5 users preferred Option B (Grouping by Speed/Infrastructure).
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            One user noted that distinguishing between NAPAS and CITAD was critical; she would actively edit transaction amounts or notes to ensure the payment went through NAPAS 247 for instant delivery.
          </Text>
        </MotionLayoutVertical>

        {/* 05 — Final Design */}
        <MotionLayoutVertical
          id='05 — Final Design'
          gap='156px'
          width='100%'
          alignSelf='stretch'
          padding='180px 48px'
          {...animateProps}
          style={{
            backgroundColor: theming.bg.page.darker
          }}>
          <MotionLayoutVertical alignSelf='stretch' gap='24px' {...animateProps}>
            <Text
              variant='mainBodySmRegular'
              color={theming.textIcon.neutral.tertiary}>
              05 — Final Design
            </Text>
            <Text
              variant='mainHeadingLg'
              color={theming.textIcon.neutral.primary}>
              Execute & Deliver
            </Text>
            <Text
              variant='mainBodyMdRegular'
              color={theming.textIcon.neutral.secondary}>
              Based on the research, I proceeded with Option B, focusing on transparency regarding payment speed.
            </Text>
          </MotionLayoutVertical>

          {/* 1. Entry Point */}
          <MotionLayoutVertical alignSelf='stretch' gap='24px' {...animateProps}>
            <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>1. Entry Point & Upload</Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              <strong>Expectation Management:</strong> Replaced the infinite loader with a percentage tracker.<br />
              <strong>Async Awareness:</strong> Added visuals indicating where users can find the file later if the upload takes too long (for massive files).
            </Text>
            <ImageBlock
              src={entryPointImg}
              alt="Entry point"
              height="600px"
              imageTop="10%"
              imageWidth="90%"
              imageLeft="5%"
            />
          </MotionLayoutVertical>

          {/* 2. Transaction Revision */}
          <MotionLayoutVertical alignSelf='stretch' gap='24px' {...animateProps}>
            <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>2. Transaction Revision (The Core Improvement)</Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              <strong>Semantic Affordance:</strong> Visual signaling to separate NAPAS (Instant) from Interbank (Slow).<br />
              <strong>Inline Warnings:</strong> Nudges users to fix transaction notes in their Excel file if forced into slow paths.<br />
              <strong>Summary Footer:</strong> Persistent footer showing total value for quick audit.
            </Text>
            <ImageBlock
              src={revisionImg}
              alt="Revision Page"
              height="1000px"
              imageTop="-10%"
              imageWidth="70%"
              imageLeft="15%"
            />
          </MotionLayoutVertical>

          {/* 3. Review & Submit */}
          <MotionLayoutVertical alignSelf='stretch' gap='24px' {...animateProps}>
            <Text variant='mainHeadingMd' color={theming.textIcon.neutral.primary}>3. Review & Submit</Text>
            <Text variant='mainBodyMdRegular' color={theming.textIcon.neutral.secondary}>
              A single listing table for the final step, acting as the clean list for Maker/Checker sign-off.
            </Text>
            <ImageBlock
              src={reviewSubmitImg}
              alt="Review & Submit"
              height="800px"
              imageTop="-14%"
              imageWidth="70%"
              imageLeft="15%"
            />
          </MotionLayoutVertical>

        </MotionLayoutVertical>

      </LayoutVertical>
    </div>
  );
};