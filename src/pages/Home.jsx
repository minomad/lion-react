import useDocumentTitle from '@/hooks/useDocumentTitle';

function Home() {
  useDocumentTitle('홈');

  return (
    <div className="grid place-content-center bg-hero bg-no-repeat min-h-[calc(100vh_-_300px)] bg-center bg-cover">
      <h2 className="text-black font-extralight tracking-widest uppercase text-4xl">Home
        <span className='text-[60px] text-indigo-700'>.</span>
      </h2>
    </div>
  );
}

export default Home;
