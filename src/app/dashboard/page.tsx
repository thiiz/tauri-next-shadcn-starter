import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export const metadata = {
  title: 'Dashboard'
};

export default async function Page() {
  return (
    <PageContainer>
      <div className='flex flex-1 flex-col items-center justify-center space-y-4'>
        <div className='text-center'>
          <Heading
            title='Tauri + Next.js'
            description='Tauri and Next.js starter template'
          />
        </div>
        <Separator />
        <Image
          src='/tauri-next-starter.png'
          alt='Tauri + Next.js'
          width={1000}
          height={1000}
          className='mx-auto'
        />
      </div>
    </PageContainer>
  );
}
