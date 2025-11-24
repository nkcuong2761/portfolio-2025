import React, { useState } from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { LayoutVertical } from '../components/LayoutVertical.tsx';
import { LayoutHorizontal } from '../components/LayoutHorizontal.tsx';
import { Text } from '../Text.tsx';
import { TextCard } from '../components/TextCard.tsx';

// Image URLs from Figma
const imgAtoms = "https://i.postimg.cc/fWqQM7Yz/atoms.png";
const imgMolecules = "https://i.postimg.cc/WpYcsm02/molecules.png";
const imgOrganisms = "https://i.postimg.cc/BZ7fJ52Z/organisms.png";
const imgTemplates = "https://i.postimg.cc/vH1FT1vw/templates.png";
const imgVariables1 = "https://i.postimg.cc/QNYZjg1Y/variable_1.png";
const imgVariables2 = "https://i.postimg.cc/ryZ2qGx7/variable_2.png";
const imgAudit = "https://i.postimg.cc/w648dQzW/audit.jpg";
const imgConsolidate = "https://i.postimg.cc/csLyj5pC/consolidate.png";
const imgLandscape = "https://i.postimg.cc/J1zVgdfs/landscape.png";
const imgSpec = "https://i.postimg.cc/VkQsRXf6/spec.png";
const imgDoc1 = "https://i.postimg.cc/csLyj5V9/doc-1.png";
const imgDoc2 = "https://i.postimg.cc/p2Lb71g7/doc-2.png";
const imgDoc3 = "https://i.postimg.cc/MWp24rhN/doc-3.png";
const imgDoc4 = "https://i.postimg.cc/mbgfq606/doc-4.png";

const painPoints = [
  'insufficient components and tendency to detach components',
  'lacks of scalability (color, typography for different tiers, products)',
  'same usage & behavior, different UI',
  'designers cannot find/use components created by others due to difference in knowledge/component structure',
  'no documentations and guidelines for components/pattern usage',
  'no communication of design system to other engineering departments',
  'feature engineers do not communicate with other teams when a component is updated',
  'due to frequent encounter with new design pattern, engineers struggle to meet deadlines',
  'engineers are forced to reuse old pattern, creating mis-match between design & production',
];

const PainPointsCards: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0px',
        marginLeft: '-20px', // Negative margin for overlapping effect
        marginRight: '-20px',
        marginTop: '-10px',
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {painPoints.map((point, index) => (
        <div
          key={index}
          style={{
            marginLeft: index > 0 ? '-20px' : '0px', // Overlap each card
          }}>
          <TextCard
            text={point}
            index={index}
            activeIndex={activeIndex}
            onActivate={setActiveIndex}
          />
        </div>
      ))}
    </div>
  );
};

export const TcbDS: React.FC = () => {
  const { theme } = useTheme();
  const theming = themes[theme];
  const { isCollapsed } = useCollapse();

  return (
    <LayoutVertical
      width='100%'
      height='100vh'
      padding='156px 0px'
      gap='156px'
      alignItems='flex-start'
      alignSelf='stretch'
      style={{
        flex: 1,
        zIndex: 0,
        overflow: 'auto',
        marginRight: isCollapsed ? '0px' : '224px',
        transition: 'margin-right 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', /* ease-out */
      }}
    >
      {/* 01 — Project Overview */}
      <LayoutVertical
        alignSelf='stretch'
        gap='36px'
        padding='0px 48px'>
        <LayoutVertical
          alignSelf='stretch'
          gap='24px'>
          <Text
            variant='figmaSubtitleSmRegular'
            color={theming.textIcon.neutral.tertiary}>
            01 — Project Overview
          </Text>
          <Text
            variant='mainDisplayLg'
            color={theming.textIcon.neutral.primary}>
            Techcombank Design System
          </Text>
          <Text
            variant='mainBodyLg'
            color={theming.textIcon.neutral.secondary}>
            A unified visual language for all banking platforms—built to scale, governed with precision.
          </Text>
        </LayoutVertical>
        
        {/* Hero Image */}
        <LayoutVertical
          alignSelf='stretch'
          style={{
            height: '400px',
            borderRadius: '12px',
            backgroundColor: theming.bg.neutral.secondary,
            border: `0.5px solid ${theming.stroke.neutral.border}`,
            overflow: 'hidden',
            position: 'relative',
          }}>
          {/* TODO: Add hero image */}
        </LayoutVertical>

        {/* Building a foundation section */}
        <LayoutVertical
          alignSelf='stretch'
          gap='24px'>
          <Text
            variant='mainHeadingLg'
            color={theming.textIcon.neutral.primary}>
            Building a foundation for digital banking
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            Techcombank's digital ecosystem is expanding across web, mobile, and internal tools. However, inconsistencies in UI components and design decisions have created friction for users and the product team. I played a key role in developing a design system that unifies the visual language across Techcombank's five digital platforms, enabling faster and more consistent product development.
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
              alignItems='flex-start'>
              {/* Role */}
              <LayoutVertical
                style={{ flex: 1 }}
                gap='16px'>
                <Text
                  variant='figmaSubtitleSmRegular'
                  color={theming.textIcon.neutral.tertiary}>
                  Role
                </Text>
                <LayoutVertical gap='8px'>
                  <Text
                    variant='mainHeadingMd'
                    color={theming.textIcon.neutral.primary}>
                    UX Designer - Admin
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}>
                    System architecture, tokens creation, component design, documentation, governance
                  </Text>
                </LayoutVertical>
              </LayoutVertical>

              {/* Divider */}
              <LayoutVertical
                style={{
                  width: '1px',
                  height: '100%',
                  backgroundColor: theming.stroke.neutral.divider,
                }}
              />

              {/* Timeline */}
              <LayoutVertical
                style={{ flex: 1 }}
                gap='16px'>
                <Text
                  variant='figmaSubtitleSmRegular'
                  color={theming.textIcon.neutral.tertiary}>
                  Timeline
                </Text>
                <LayoutVertical gap='8px'>
                  <Text
                    variant='mainHeadingMd'
                    color={theming.textIcon.neutral.primary}>
                    Ongoing
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}>
                    Oct 2024 – now
                  </Text>
                </LayoutVertical>
              </LayoutVertical>

              {/* Divider */}
              <LayoutVertical
                style={{
                  width: '1px',
                  height: '100%',
                  backgroundColor: theming.stroke.neutral.divider,
                }}
              />

              {/* Team */}
              <LayoutVertical
                style={{ flex: 1 }}
                gap='16px'>
                <Text
                  variant='figmaSubtitleSmRegular'
                  color={theming.textIcon.neutral.tertiary}>
                  Team
                </Text>
                <LayoutVertical gap='8px'>
                  <Text
                    variant='mainHeadingMd'
                    color={theming.textIcon.neutral.primary}>
                    20
                  </Text>
                  <Text
                    variant='mainBodyMdRegular'
                    color={theming.textIcon.neutral.secondary}
                    as='ul'
                    style={{ marginLeft: '21px', padding: 0 }}>
                    <li>1 Design Manager</li>
                    <li>4 admins UX Designers</li>
                    <li>7 ad-hoc UX Designers</li>
                    <li>8 Engineers</li>
                  </Text>
                </LayoutVertical>
              </LayoutVertical>
            </LayoutHorizontal>
          </LayoutVertical>
        </LayoutVertical>
      </LayoutVertical>

      {/* 02 — Problem Statement */}
      <LayoutVertical
        alignSelf='stretch'
        gap='24px'
        padding='0px 48px'>
        <Text
          variant='figmaSubtitleSmRegular'
          color={theming.textIcon.neutral.tertiary}>
          02 — Problem Statement
        </Text>
        <Text
          variant='mainHeadingLg'
          color={theming.textIcon.neutral.primary}>
          Fragmented experiences, inconsistent design
        </Text>

        {/* Metrics Box */}
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
              alignItems='flex-start'>
              <LayoutVertical style={{ flex: 1 }} gap='8px'>
                <Text
                  variant='mainHeadingLg'
                  color={theming.textIcon.accent.primary}>
                  05
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  Techcombank digital platforms, each has a different UI Kit
                </Text>
              </LayoutVertical>

              <LayoutVertical
                style={{
                  width: '1px',
                  height: '100%',
                  backgroundColor: theming.stroke.neutral.divider,
                }}
              />

              <LayoutVertical style={{ flex: 1 }} gap='8px'>
                <Text
                  variant='mainHeadingLg'
                  color={theming.textIcon.accent.primary}>
                  92%
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  of designers report lack of consistency between features on a same platform
                </Text>
              </LayoutVertical>

              <LayoutVertical
                style={{
                  width: '1px',
                  height: '100%',
                  backgroundColor: theming.stroke.neutral.divider,
                }}
              />

              <LayoutVertical style={{ flex: 1 }} gap='8px'>
                <Text
                  variant='mainHeadingLg'
                  color={theming.textIcon.accent.primary}>
                  53%
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  of designers & engineers heard about Design Systems but never used one before
                </Text>
              </LayoutVertical>
            </LayoutHorizontal>
          </LayoutVertical>
          <Text
            variant='mainBodySmRegular'
            color={theming.textIcon.neutral.tertiary}
            style={{ marginTop: '8px' }}>
            *Survey results with sample size of 34 designers and engineers
          </Text>
        </LayoutVertical>

        <Text
          variant='mainBodyMdRegular'
          color={theming.textIcon.neutral.secondary}>
          Despite a large design team, each member focuses on unique features within our products, primarily Techcombank (Retail) Mobile Banking and Techcombank Business (mobile and web apps). The inherited Figma components library was just a UI Kit, lacking documentation and guidelines, which led to challenges in design quality and hand-offs. Surveys and interviews confirmed the absence of a unified design system and highlighted key pain points for designers and engineers.
        </Text>

        {/* Pain Points - Overlapping cards with hover effects */}
        <PainPointsCards />
      </LayoutVertical>

      {/* 03 — Approach */}
      <LayoutVertical
        alignSelf='stretch'
        gap='24px'
        padding='0px 48px'>
        <Text
          variant='figmaSubtitleSmRegular'
          color={theming.textIcon.neutral.tertiary}>
          03 — Approach
        </Text>
        <Text
          variant='mainHeadingLg'
          color={theming.textIcon.neutral.primary}>
          A system built on atomic principles
        </Text>
        <Text
          variant='mainBodyMdRegular'
          color={theming.textIcon.neutral.secondary}>
          We adopted an atomic design methodology, building from the ground up: atoms → molecules → organisms → templates. This approach ensures both scalability and consistency.
        </Text>

        <LayoutVertical alignSelf='stretch' gap='8px'>
          <Text
            variant='mainBodySmRegular'
            color={theming.textIcon.neutral.tertiary}>
            Atomic design explained in Legos
          </Text>
          <LayoutHorizontal
            alignSelf='stretch'
            gap='16px'
            alignItems='flex-start'>
            {/* Atoms */}
            <LayoutVertical
              style={{
                flex: 1,
                borderRadius: '12px',
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
              }}>
              <LayoutVertical
              height='200px'
              width='100%'
              backgroundColor={theming.bg.neutral.secondary}>
                <img 
                  src={imgAtoms} 
                  alt="Atoms" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }} 
                />
              </LayoutVertical>
              <LayoutVertical padding='16px 12px' gap='4px' style={{minHeight: '140px'}}>
                <Text
                  variant='mainHeadingMd'
                  color={theming.textIcon.neutral.primary}>
                  Atoms
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  A single lego bricks, like to an input, a button, etc.
                </Text>
              </LayoutVertical>
            </LayoutVertical>

            {/* Molecules */}
            <LayoutVertical
              style={{
                flex: 1,
                borderRadius: '12px',
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
              }}>
              <LayoutVertical
              height='200px'
              width='100%'
              backgroundColor={theming.bg.neutral.secondary}>
                <img 
                  src={imgMolecules} 
                  alt="Molecules" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }} 
                />
              </LayoutVertical>
              <LayoutVertical padding='16px 12px' gap='4px' style={{minHeight: '140px'}}>
                <Text
                  variant='mainHeadingMd'
                  color={theming.textIcon.neutral.primary}>
                  Molecules
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  A functional combination of bricks, like an input field with labels, placeholder, etc.
                </Text>
              </LayoutVertical>
            </LayoutVertical>

            {/* Organisms */}
            <LayoutVertical
              style={{
                flex: 1,
                borderRadius: '12px',
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
              }}>
              <LayoutVertical
              height='200px'
              width='100%'
              backgroundColor={theming.bg.neutral.secondary}>
                <img 
                  src={imgOrganisms} 
                  alt="Organisms" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }} 
                />
              </LayoutVertical>
              <LayoutVertical padding='16px 12px' gap='4px' style={{minHeight: '140px'}}>
                <Text
                  variant='mainHeadingMd'
                  color={theming.textIcon.neutral.primary}>
                  Organisms
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  Large, standalone structure, like an input form with multiple inputs and a button
                </Text>
              </LayoutVertical>
            </LayoutVertical>

            {/* Templates */}
            <LayoutVertical
              style={{
                flex: 1,
                borderRadius: '12px',
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden'
              }}>
              <LayoutVertical
              height='200px'
              width='100%'
              backgroundColor={theming.bg.neutral.secondary}>
                <img 
                  src={imgTemplates} 
                  alt="Templates" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }} 
                />
              </LayoutVertical>
              <LayoutVertical padding='16px 12px' gap='4px' style={{minHeight: '140px'}}>
                <Text
                  variant='mainHeadingMd'
                  color={theming.textIcon.neutral.primary}>
                  Templates
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  Layouts/blueprints for a design set, like a complete reusable sign up form
                </Text>
              </LayoutVertical>
            </LayoutVertical>
          </LayoutHorizontal>
        </LayoutVertical>
      </LayoutVertical>

      {/* Creating the ions */}
      <LayoutVertical
        alignSelf='stretch'
        gap='24px'
        padding='0px 48px'
        style={{marginBottom: '-180px', zIndex: '-1'}}>
        <Text
          variant='mainHeadingLg'
          color={theming.textIcon.neutral.primary}>
          Creating the ions
        </Text>
        <Text
          variant='mainBodyMdRegular'
          color={theming.textIcon.neutral.secondary}>
          Ions are a level below atoms, represented as expanding sets of design tokens in a design system. The token structure we established is robust and easy for designers to adopt. After competitor benchmarks and testing, we finalized global and alias tokens that are future-proof, adhering to naming standards while minimizing the learning curve. This allows us to create components using a broader set of tokens without compromising the existing design.
        </Text>
        <LayoutHorizontal
          alignSelf='stretch'
          justifyContent='center'
          alignItems='flex-end'>
          <img 
            src={imgVariables2} 
            alt="Global tokens table" 
            style={{
              width: '420px',
              objectFit: 'cover',
              zIndex: 1,
              transform: 'rotate(-2deg)',
            }} 
          />
          <img 
            src={imgVariables1} 
            alt="Alias tokens table" 
            style={{
              width: '520px',
              objectFit: 'cover',
              transform: 'rotate(2deg)',
              boxShadow: '0 52px 80px 0 rgba(0, 0, 0, 0.20), 0 21.724px 33.422px 0 rgba(0, 0, 0, 0.15), 0 11.615px 17.869px 0 rgba(0, 0, 0, 0.12), 0 6.511px 10.017px 0 rgba(0, 0, 0, 0.09), 0 3.458px 5.32px 0 rgba(0, 0, 0, 0.06), 0 1.439px 2.214px 0 rgba(0, 0, 0, 0.03)',
              zIndex: 2,
              marginLeft: '-20px'
            }} 
          />
        </LayoutHorizontal>
      </LayoutVertical>
      
      {/* 04 — A component case study: Button */}
      <LayoutVertical
        gap='156px'
        width='100%'
        alignSelf='stretch'
        padding='180px 48px'
        style={{
          backgroundColor: theming.bg.page.darker
        }}>
        <LayoutVertical
          alignSelf='stretch'
          gap='24px'>
          <Text
            variant='figmaSubtitleSmRegular'
            color={theming.textIcon.neutral.tertiary}>
            04 — A component case study: Button
          </Text>
          <Text
            variant='mainHeadingLg'
            color={theming.textIcon.neutral.primary}>
            Constructing a component: <span style={{ color: theming.textIcon.accent.primary }}>Button</span>
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            To kick off the team's component-building process, I led the creation of the Button component. Here's a guide to constructing design components: Audit the old component, consolidate findings, conduct a landscape study, conceptualize the component, and connect tokens for developer hand-off.
          </Text>
        </LayoutVertical>

        {/* Audit */}
        <LayoutVertical alignSelf='stretch' gap='24px'>
          <Text
            variant='mainHeadingMd'
            color={theming.textIcon.neutral.primary}>
            Audit
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            Start by auditing the old component, collecting all instances in current designs. Gather screens representing all variants from mobile and web platforms across Techcombank's three domains: Retail Digital Banking (RDB), Corporate Digital Banking (CDB), and the public web. The goal is to create a single source of truth for reusable design components across all platforms.
          </Text>
          <LayoutVertical alignSelf='stretch' gap='8px'>
            <Text
              variant='mainBodySmRegular'
              color={theming.textIcon.neutral.tertiary}>
              Example of a pile-of-mess audit (it's ok)
            </Text>
            <img 
              src={imgAudit} 
              alt="Audit example" 
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                borderRadius: '12px',
              }} 
            />
          </LayoutVertical>
        </LayoutVertical>

        {/* Consolidate */}
        <LayoutHorizontal alignSelf='stretch' gap='24px' alignItems='flex-start'>
          <LayoutVertical style={{ flex: 1 }} gap='24px'>
            <Text
              variant='mainHeadingMd'
              color={theming.textIcon.neutral.primary}>
              Consolidate
            </Text>
            <Text
              variant='mainBodyMdRegular'
              color={theming.textIcon.neutral.secondary}>
              List all styles the component includes, along with any child components. This overview helps designers understand the component's current state before reconstruction. A styling table can assist in quickly grasping the component's status and providing informed feedback during revisions.
            </Text>
          </LayoutVertical>
          <LayoutVertical
            style={{
              flex: 1,
              borderRadius: '12px',
              backgroundColor: theming.bg.neutral.secondary,
              border: `1px solid ${theming.stroke.neutral.border}`,
              overflow: 'hidden',
              height: '400px',
            }}>
            <img 
              src={imgConsolidate} 
              alt="Consolidate" 
              style={{
                width: '200%',
                objectFit: 'cover',
                left: '10%',
                top: '10%',
                position: 'relative'
              }} 
            />
          </LayoutVertical>
        </LayoutHorizontal>

        {/* Landscape study */}
        <LayoutVertical alignSelf='stretch' gap='24px'>
          <Text
            variant='mainHeadingMd'
            color={theming.textIcon.neutral.primary}>
            Landscape study
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            Gather design components, UI behaviors, and guidelines from established design systems, focusing on finance-specific ones. This research helps understand common patterns and best practices for Techcombank. Analyze how other systems construct components in Figma, noting framing, style variations, and programming constraints.
          </Text>
          <LayoutVertical
            alignSelf='stretch'
            height='250px'
            justifyContent='flex-end'
            alignItems='center'
            style={{
              borderRadius: '12px',
              backgroundColor: theming.bg.neutral.secondary,
              border: `1px solid ${theming.stroke.neutral.border}`,
              overflow: 'hidden',
            }}>
            <img 
              src={imgLandscape} 
              alt="Landscape study" 
              style={{
                height: '100%',
                objectFit: 'cover',
                position: 'relative',
                bottom: '-15%',
              }} 
            />
          </LayoutVertical>
        </LayoutVertical>

        {/* Component concept */}
        <LayoutVertical alignSelf='stretch' gap='24px'>
          <Text
            variant='mainHeadingMd'
            color={theming.textIcon.neutral.primary}>
            Component concept
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            In the initial draft, identify all states and variations of the component. Note key changes from the old version and differences between web and app versions. Use data from the landscape study to support design choices. Prepare mockups to visualize the new component, comparing old and new screens side by side. The design may go through several iterations before finalization, including micro-interactions and accessibility checks.
          </Text>
          <LayoutVertical
            alignSelf='stretch'
            style={{
              height: '200px',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              border: `1px solid ${theming.stroke.neutral.border}`,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* Button example */}
            <LayoutHorizontal gap='16px' alignItems='center'>
              <LayoutVertical
                padding='0 24px'
                style={{
                  height: '40px',
                  minWidth: '156px',
                  borderRadius: '960px',
                  backgroundColor: 'rgba(255,255,255,0.01)',
                  border: `1px solid #404040`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  variant='figmaBodyMdEmphasize'
                  color='#1a1a1a'>
                  Reject
                </Text>
              </LayoutVertical>
              <LayoutVertical
                padding='0 24px'
                style={{
                  height: '40px',
                  minWidth: '156px',
                  borderRadius: '960px',
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  variant='figmaBodyMdEmphasize'
                  color='#ffffff'>
                  Approve
                </Text>
              </LayoutVertical>
            </LayoutHorizontal>
          </LayoutVertical>
        </LayoutVertical>

        {/* Tokenization and Hand-off */}
        <LayoutHorizontal alignSelf='stretch' gap='24px' alignItems='flex-start'>
          <LayoutVertical style={{ flex: 1 }} gap='24px'>
            <Text
              variant='mainHeadingMd'
              color={theming.textIcon.neutral.primary}>
              Tokenization and Hand-off
            </Text>
            <Text
              variant='mainBodyMdRegular'
              color={theming.textIcon.neutral.secondary}>
              The final step is to create component-specific tokens and map them accordingly. This gives designers more control over component properties, ensuring they are future-proof and easily modifiable. Detailed specifications can streamline processes for developers and testers.
            </Text>
          </LayoutVertical>
          <LayoutVertical
          height='200px'
            style={{
              flex: 1,
              borderRadius: '12px',
              backgroundColor: theming.bg.neutral.secondary,
              border: `1px solid ${theming.stroke.neutral.border}`,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <img 
              src={imgSpec} 
              alt="Tokenization" 
              style={{
                width: '80%',
                objectFit: 'cover',
                position: 'relative'
              }} 
            />
          </LayoutVertical>
        </LayoutHorizontal>

        {/* Documentation */}
        <LayoutVertical alignSelf='stretch' gap='24px'>
          <Text
            variant='mainHeadingMd'
            color={theming.textIcon.neutral.primary}>
            Documentation
          </Text>
          <Text
            variant='mainBodyMdRegular'
            color={theming.textIcon.neutral.secondary}>
            A component UI alone doesn't complete a design system. It's crucial to communicate the various styles and states of buttons, their usage guidelines, and best practices to ensure consistent use across the platform, reinforcing brand identity and enhancing user experience.
          </Text>

          {/* Documentation examples */}
          <LayoutVertical alignSelf='stretch' gap='8px'>
            <Text
              variant='mainBodySmRegular'
              color={theming.textIcon.neutral.tertiary}>
              Only use one primary button on a page
            </Text>
            <LayoutVertical
              alignSelf='stretch'
              height='400px'
              alignItems='center'
              justifyContent='center'
              style={{
                borderRadius: '12px',
                backgroundColor: theming.bg.neutral.secondary,
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
              }}>
              <img 
                src={imgDoc1} 
                alt="Documentation example 1" 
                style={{
                  height: '90%',
                  objectFit: 'cover',
                  position: 'relative'
                }}
              />
            </LayoutVertical>
          </LayoutVertical>
        </LayoutVertical>

        <LayoutHorizontal alignSelf='stretch' gap='48px' alignItems='flex-start'>
          <LayoutVertical style={{ flex: 1 }} gap='8px'>
            <Text
              variant='mainBodySmRegular'
              color={theming.textIcon.neutral.tertiary}>
              Secondary buttons pairing
            </Text>
            <LayoutVertical
              alignSelf='stretch'
              height='400px'
              alignItems='center'
              justifyContent='flex-end'
              style={{
                borderRadius: '12px',
                backgroundColor: theming.bg.neutral.secondary,
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
              }}>
              <img 
                src={imgDoc2} 
                alt="Documentation example 2" 
                style={{
                  width: '40%',
                  objectFit: 'cover',
                  position: 'relative',
                  bottom: '20%'
                }} 
              />
            </LayoutVertical>
          </LayoutVertical>
          <LayoutVertical style={{ flex: 1 }} gap='8px' padding='240px 0 0 0'>
            <Text
              variant='mainBodySmRegular'
              color={theming.textIcon.neutral.tertiary}>
              Use tertiary button as dismissive action
            </Text>
            <LayoutVertical
              alignSelf='stretch'
              height='400px'
              alignItems='center'
              justifyContent='center'
              style={{
                borderRadius: '12px',
                backgroundColor: theming.bg.neutral.secondary,
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
              }}>
              <img 
                src={imgDoc3} 
                alt="Documentation example 3" 
                style={{
                  height: '90%',
                  objectFit: 'cover',
                  position: 'relative'
                }} 
              />
            </LayoutVertical>
          </LayoutVertical>
        </LayoutHorizontal>

        <LayoutVertical alignSelf='stretch' gap='8px'>
          <Text
            variant='mainBodySmRegular'
            color={theming.textIcon.neutral.tertiary}>
            Try not to use buttons for navigation
          </Text>
          <LayoutVertical
            alignSelf='stretch'
            height='400px'
            alignItems='center'
            justifyContent='center'
            style={{
              borderRadius: '12px',
              backgroundColor: theming.bg.neutral.secondary,
              border: `1px solid ${theming.stroke.neutral.border}`,
              overflow: 'hidden',
            }}>
            <img 
              src={imgDoc4} 
              alt="Documentation example 4" 
              style={{
                width: '90%',
                objectFit: 'cover',
                position: 'relative'
              }}
            />
          </LayoutVertical>
        </LayoutVertical>
      </LayoutVertical>

      {/* 05 — Outcome */}
      <LayoutVertical
        alignSelf='stretch'
        gap='24px'
        padding='0px 48px'>
        <Text
          variant='figmaSubtitleSmRegular'
          color={theming.textIcon.neutral.tertiary}>
          05 — Outcome
        </Text>
        <Text
          variant='mainHeadingLg'
          color={theming.textIcon.neutral.primary}>
          Measurable efficiency gains
        </Text>

        {/* Metrics Box */}
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
            alignItems='flex-start'>
            <LayoutVertical style={{ flex: 1 }} gap='8px'>
              <Text
                variant='mainHeadingLg'
                color={theming.textIcon.accent.primary}>
                86%
              </Text>
              <Text
                variant='mainBodyMdRegular'
                color={theming.textIcon.neutral.secondary}>
                Product teams adopted new design system within 2 months
              </Text>
            </LayoutVertical>

            <LayoutVertical
              style={{
                width: '1px',
                height: '100%',
                backgroundColor: theming.stroke.neutral.divider,
              }}
            />

            <LayoutVertical style={{ flex: 1 }} gap='8px'>
              <Text
                variant='mainHeadingLg'
                color={theming.textIcon.accent.primary}>
                100%
              </Text>
              <Text
                variant='mainBodyMdRegular'
                color={theming.textIcon.neutral.secondary}>
                of new designs using system components
              </Text>
            </LayoutVertical>
          </LayoutHorizontal>
        </LayoutVertical>

        <Text
          variant='mainBodyMdRegular'
          color={theming.textIcon.neutral.secondary}>
          The design system has become the foundation for all digital products at Techcombank. It's maintained by a dedicated team with quarterly releases, comprehensive documentation, and a governance model that ensures quality and consistency.
        </Text>
        <Text
          variant='mainBodyMdRegular'
          color={theming.textIcon.neutral.secondary}>
          Beyond efficiency, it has elevated the overall quality of our digital experiences, creating a cohesive brand presence across all touch-points.
        </Text>
      </LayoutVertical>
    </LayoutVertical>
  );
};