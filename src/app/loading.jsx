import { Spin } from 'antd';

export default function Loading() {
  return(
    <div className='px-8 py-[6rem] h-full flex flex-col justify-center items-center text-center'>
      <Spin />
      <h2 className='text-primary mt-4'>Loading...</h2>
    </div>
  );
}