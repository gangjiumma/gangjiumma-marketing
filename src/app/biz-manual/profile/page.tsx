import type { Metadata } from 'next';
import { Store, Edit3, ToggleLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualDetailLayout from '@/components/ManualDetailLayout';
import InteractiveDemo, { DemoStep } from '@/components/InteractiveDemo';

export const metadata: Metadata = {
  title: '사장님 홈 둘러보기 — 강쥐엄마 사장님 메뉴얼',
  description:
    '일반/사장님 모드 토글, 업체 정보 등록 — 한 번 잘 채워두면 끝나는 기본 설정.',
};

const STEPS: DemoStep[] = [
  {
    title: '일반 ↔ 사장님 모드 토글',
    image: '/manual/14-mytab-toggle.jpg',
    imageAlt: 'MY 탭 상단 일반/사장님 토글',
    description: (
      <>
        가입 승인 후 MY 탭 상단에 <strong>일반 / 사장님 토글</strong>이 생겨요.
        <strong> "사장님"</strong>을 누르면 사장님 페이지(강쥐사장님)로 이동해요.
      </>
    ),
    tip: '한 계정으로 일반 사용자 + 사장님 둘 다 사용 가능해요. 산책 기록, 강쥐Talk 등 일반 기능은 그대로 쓸 수 있어요.',
  },
  {
    title: '사장님 홈 화면 전체 둘러보기',
    image: '/manual/15-bizhome.jpg',
    imageAlt: '사장님 홈 화면',
    description: (
      <>
        사장님 홈에서 핵심 기능들이 한눈에 보여요:
        <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-slate-700">
          <li>상단: 업체 카드 (편집 아이콘)</li>
          <li>광고: 이번 주 광고 횟수 + AI/직접 작성 진입</li>
          <li>운영: 광고·쿠폰 관리, 문의 관리, QR 스캔, 구독</li>
        </ul>
      </>
    ),
    tip: '우측 상단의 "사용메뉴얼" 박스를 탭하면 언제든 이 페이지로 다시 올 수 있어요.',
  },
  {
    title: '업체 정보 수정 — 사진/상호/업종/지역',
    image: '/manual/16-profile-edit-1.jpg',
    imageAlt: '업체 정보 수정 화면 1',
    description: (
      <>
        사장님 홈 → 업체 카드의 <strong>연필 아이콘</strong>을 탭하면 업체 정보 수정 화면이 열려요.
        <strong>대표 사진</strong>은 매장 입구, 인테리어, 또는 시그니처 메뉴/서비스 사진이 좋아요.
      </>
    ),
    tip: '강쥐엄마 사용자들이 가장 먼저 보는 사진이에요. 깔끔하고 강쥐가 보이는 사진을 추천해요.',
  },
  {
    title: '업체 정보 수정 — 연락처/주소/SNS',
    image: '/manual/17-profile-edit-2.jpg',
    imageAlt: '업체 정보 수정 화면 2',
    description: (
      <>
        스크롤을 내리면 <strong>전화번호, 주소, 영업시간, 인스타, 홈페이지, 카카오톡 채널</strong>을 입력할 수 있어요.
        이 정보들은 광고와 업체 프로필에 <strong>자동으로 표시</strong>돼요.
      </>
    ),
    tip: '인스타나 카카오톡 채널을 등록해두면 사용자가 더 다양한 채널로 사장님께 연락할 수 있어요. 비어있어도 됩니다.',
  },
];

export default function ProfileManualPage() {
  return (
    <>
      <Header />
      <ManualDetailLayout
        badge="🏪 기본 설정"
        title="사장님 홈 둘러보기"
        subtitle="일반/사장님 모드 토글, 업체 정보 등록 — 한 번 잘 채워두면 끝나는 기본 설정."
        nextHref="/biz-manual/ads"
        nextLabel="AI로 광고 만들기"
      >
        {/* 핵심 메시지 */}
        <div className="bg-gradient-to-br from-biz-tint50 to-biz-tint100 border border-biz-tint200 rounded-3xl p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-biz text-white rounded-2xl flex items-center justify-center">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                업체 정보, 한 번에 잘 채워두기
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                업체 정보는 광고, 검색, 업체 프로필에 모두 자동으로 표시돼요.
                사진과 연락처를 빠짐없이 채워두면 사용자 신뢰도가 올라가요.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
          <ToggleLeft className="w-6 h-6 text-biz" />
          단계별 따라하기
        </h2>
        <p className="text-slate-600 mb-6 text-sm md:text-base">
          모드 전환부터 업체 정보 등록까지 4단계.
        </p>

        <InteractiveDemo steps={STEPS} />

        {/* 체크리스트 */}
        <div className="mt-10 bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <Edit3 className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              업체 정보 체크리스트
            </h2>
          </div>
          <p className="text-slate-600 text-sm mb-5">
            영업 시작 전 다음 항목들을 모두 채워두시는 걸 추천해요.
          </p>

          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              { label: '대표 사진', required: true },
              { label: '상호명', required: true },
              { label: '업종 선택', required: true },
              { label: '시/도 + 구/군', required: true },
              { label: '전화번호', required: false },
              { label: '주소 (상세)', required: false },
              { label: '영업시간', required: false },
              { label: '인스타그램 URL', required: false },
              { label: '홈페이지 URL', required: false },
              { label: '카카오톡 채널 ID', required: false },
              { label: '출장 가능 지역', required: false },
              { label: '업체 소개·자랑', required: false },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 p-3 rounded-xl border ${
                  item.required
                    ? 'bg-biz-tint50 border-biz-tint200'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="text-sm">
                  {item.required ? '✓' : '◯'}
                </span>
                <span className="text-sm font-medium text-slate-700 flex-1">
                  {item.label}
                </span>
                {item.required && (
                  <span className="text-[10px] font-bold text-biz-dark bg-white px-1.5 py-0.5 rounded">
                    필수
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </ManualDetailLayout>
      <Footer />
    </>
  );
}
