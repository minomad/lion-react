import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PB_URL);

//sdk 자동취소 클라이언트 통합 sdk에서 확인 abort랑 비슷하다
pb.autoCancellation(false);
export default pb;

// sdk는 리셋이랑 다르게 data를 바로 받아옴 items가 아님 