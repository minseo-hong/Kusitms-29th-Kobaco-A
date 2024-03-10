import styled from 'styled-components';

import RelatedSection from './RelatedSection';
import KeywordSection from './KeywordSection';
import SNSSection from './SNSSection';
import useTAStep from '../../../hooks/useTAStep';
import RelatedOnboarding from './RelatedOnboarding';
import KeywordOnboarding from './KeywordOnboarding';
import SNSOnboarding from './SNSOnboarding';

interface Props {
  relatedTrendBubble: any;
  genderAgeTrend: any;
  snsTrend: any;
  searchKeyword: string;
}

const Dashboard = ({ relatedTrendBubble, genderAgeTrend, snsTrend }: Props) => {
  const { taStep, setTAStep, totalTAStep, handleDismiss } = useTAStep();

  return (
    <DashboardBlock>
      <Left>
        <RelatedOnboarding
          isVisible={taStep === 4}
          currentStep={taStep}
          totalStep={totalTAStep}
          onConfirm={() => setTAStep(taStep + 1)}
          onDismiss={handleDismiss}
        >
          <RelatedSection relatedTrendBubble={relatedTrendBubble} />
        </RelatedOnboarding>
      </Left>
      <Right>
        <KeywordOnboarding
          isVisible={taStep === 3}
          currentStep={taStep}
          totalStep={totalTAStep}
          onConfirm={() => setTAStep(taStep + 1)}
          onDismiss={handleDismiss}
        >
          <KeywordSection genderAgeTrend={genderAgeTrend} />
        </KeywordOnboarding>
        <SNSOnboarding
          isVisible={taStep === 5}
          currentStep={taStep}
          totalStep={totalTAStep}
          onConfirm={() => setTAStep(taStep + 1)}
          onDismiss={handleDismiss}
        >
          <SNSSection snsTrend={snsTrend} />
        </SNSOnboarding>
      </Right>
    </DashboardBlock>
  );
};

export default Dashboard;

const DashboardBlock = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: stretch;
  height: calc(100vh - 20.5rem);
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
