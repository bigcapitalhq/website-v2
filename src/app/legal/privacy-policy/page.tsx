import { getLegalContent } from '@/lib/legal';

export default async function Page() {
  const content = await getLegalContent('privacy-policy');
  return (
    <div className={'my-10'}>
      <div className={'mb-8'}>
        <h1 className="text-5xl font-bold">Bigcapital Legal Information</h1>
      </div>

      <div className={'max-w-3xl'}>
        <h1 className={"text-[#545E89] font-bold text-4xl mb-6"}>Privacy Policy</h1>
        <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
      </div>
    </div>
  );
}
