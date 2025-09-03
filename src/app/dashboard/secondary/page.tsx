import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';

export default function SecondaryPage() {
  return (
    <PageContainer scrollable={false}>
      <Heading
        title='Secondary Page'
        description='next and shadcn starter template'
      />
    </PageContainer>
  );
}
