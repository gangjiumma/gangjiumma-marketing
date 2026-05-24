import type { Metadata } from 'next';
import { ClipboardList, Edit2, Send, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualDetailLayout from '@/components/ManualDetailLayout';
import InteractiveDemo, { DemoStep } from '@/components/InteractiveDemo';
import Highlight from '@/components/Highlight';

export const metadata: Metadata = {
  title: '광고·쿠폰 관리 — 강쥐엄마 사장님 메뉴얼',
  description:
    '게시 중, 임시 저장, 예약 대기 광고를 한 화면에서 모두 관리하세요.',
};

const STEPS: DemoStep[] = [
  {
    title: '사장님 홈 → 운영 → "광고·쿠폰" 진입',
    image: '/manual/26-bizhome-grid.jpg',
    imageAlt: '사장님 홈 운영 그리드',
    description: (
      <>
        사장님 홈 화면 아래쪽 <strong>"운영"</strong> 섹션에서
        <strong className="text-biz"> "광고·쿠폰"</strong> 카드를 탭하세요.
      </>
    ),
    overlay: (
      <Highlight
        x={26}
        y={62}
        width={42}
        height={18}
        shape="rect"
        label="여기를 탭"
        labelPosition="right"
        variant="biz"
        pulse
      />
    ),
    tip: '운영 섹션엔 광고·쿠폰 외에도 문의 관리, QR 스캔, 구독 관리가 있어요. 다른 기능들은 다음 섹션에서 다룰게요.',
  },
  {
    title: '광고 / 쿠폰 탭 분리',
    image: '/manual/28-manage-list.jpg',
    imageAlt: '광고 쿠폰 관리 화면',
    description: (
      <>
        상단에서 <strong>광고</strong>와 <strong>쿠폰</strong>을 탭으로 나눠서 관리해요.
        각 탭마다 게시 중인 항목 개수가 표시돼요.
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={15}
        width={92}
        height={9}
        shape="rect"
        label="탭으로 전환"
        labelPosition="bottom"
        variant="biz"
      />
    ),
  },
  {
    title: '상태 필터 — 전체 / 게시 중 / 임시 저장 / 예약 대기',
    image: '/manual/28-manage-list.jpg',
    imageAlt: '상태 필터',
    description: (
      <>
        그 아래 필터로 광고 상태를 분류해서 볼 수 있어요:
        <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-slate-700">
          <li><strong>전체</strong>: 모든 광고</li>
          <li><strong>게시 중</strong>: 강쥐Talk에 노출되고 있는 광고</li>
          <li><strong>임시 저장</strong>: 작성 후 게시 안 한 광고</li>
          <li><strong>예약 대기</strong>: 곧 지원 예정</li>
        </ul>
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={25}
        width={92}
        height={6}
        shape="rect"
        label="상태별 보기"
        labelPosition="top"
        variant="biz"
      />
    ),
  },
  {
    title: '편집 / 즉시 게시 / 삭제',
    image: '/manual/28-manage-list.jpg',
    imageAlt: '광고 카드 액션 버튼',
    description: (
      <>
        각 광고 카드 하단에 3가지 버튼이 있어요:
        <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-slate-700">
          <li><strong>편집</strong>: 광고 내용 수정 (다시 작성 화면으로)</li>
          <li><strong className="text-biz">즉시 게시</strong>: 임시 저장 → 강쥐Talk 즉시 게시</li>
          <li><strong className="text-red-600">휴지통</strong>: 광고 삭제 (복구 불가)</li>
        </ul>
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={73}
        width={92}
        height={9}
        shape="rect"
        label="3가지 액션 버튼"
        labelPosition="top"
        variant="primary"
      />
    ),
    tip: '게시 중인 광고도 편집/삭제할 수 있어요. 편집 후 다시 게시하면 같은 위치에 업데이트돼요. 게시 횟수는 다시 차감되지 않아요.',
  },
];

export default function ManageManualPage() {
  return (
    <>
      <Header />
      <ManualDetailLayout
        badge="📋 관리"
        title="광고·쿠폰 관리"
        subtitle="게시 중, 임시 저장, 예약 대기 광고를 한 화면에서 모두 관리하세요."
        nextHref="/biz-manual/insights"
        nextLabel="성과 보기 (인사이트)"
      >
        {/* 한 줄 요약 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-biz text-white rounded-2xl flex items-center justify-center">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                광고와 쿠폰, 한 화면에서
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                작성한 모든 광고와 쿠폰을 상태별로 관리할 수 있어요.
                편집/즉시 게시/삭제를 한 번에 처리하세요.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
          <Edit2 className="w-6 h-6 text-biz" />
          단계별 따라하기
        </h2>
        <p className="text-slate-600 mb-6 text-sm md:text-base">
          광고·쿠폰 관리 화면의 기능들을 단계별로 확인하세요.
        </p>

        <InteractiveDemo steps={STEPS} />

        {/* 액션 별 가이드 */}
        <div className="mt-10 grid sm:grid-cols-3 gap-3">
          {[
            {
              icon: Edit2,
              title: '편집',
              desc: '내용 수정 후 다시 저장 또는 게시',
              color: 'biz',
            },
            {
              icon: Send,
              title: '즉시 게시',
              desc: '임시 저장된 광고를 바로 노출',
              color: 'primary',
            },
            {
              icon: Trash2,
              title: '삭제',
              desc: '게시 중단 + 영구 삭제',
              color: 'danger',
            },
          ].map((action, idx) => {
            const Icon = action.icon;
            const colorClass =
              action.color === 'biz'
                ? 'bg-biz-tint50 border-biz-tint200 text-biz-dark'
                : action.color === 'primary'
                ? 'bg-orange-50 border-orange-200 text-orange-700'
                : 'bg-red-50 border-red-200 text-red-700';
            return (
              <div
                key={idx}
                className={`rounded-2xl border-2 p-5 ${colorClass}`}
              >
                <Icon className="w-6 h-6 mb-2" />
                <h3 className="font-black mb-1">{action.title}</h3>
                <p className="text-sm opacity-80">{action.desc}</p>
              </div>
            );
          })}
        </div>
      </ManualDetailLayout>
      <Footer />
    </>
  );
}
