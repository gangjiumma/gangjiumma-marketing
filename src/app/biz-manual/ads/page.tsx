import type { Metadata } from 'next';
import { Sparkles, Wand2, Camera, Send, Zap, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualDetailLayout from '@/components/ManualDetailLayout';
import InteractiveDemo, { DemoStep } from '@/components/InteractiveDemo';

export const metadata: Metadata = {
  title: 'AI로 광고 만들기 — 강쥐엄마 사장님 메뉴얼',
  description:
    '몇 가지 선택만 하면 AI가 광고 문구를 작성해드려요. 사진까지 한 번에, 5분이면 첫 광고 완성.',
};

const STEPS: DemoStep[] = [
  {
    title: '사장님 홈에서 "AI로 광고 만들기" 진입',
    image: '/manual/18-ads-entry.jpg',
    imageAlt: '사장님 홈 화면 - 광고 섹션',
    description: (
      <>
        하단 탭의 <strong className="text-biz">사장님</strong> 탭으로 이동하면,
        광고 섹션에 <strong>"AI로 광고 만들기"</strong> 카드가 보여요.
        탭하면 작성 화면이 열려요.
      </>
    ),
    tip: (
      <>
        직접 광고 문구를 쓰고 싶으면 바로 아래 <strong>"직접 작성하기"</strong>를
        선택하세요. 이 메뉴얼에서는 AI 작성을 중심으로 안내해드려요.
      </>
    ),
  },
  {
    title: '업종·목적·채널·분위기 선택',
    image: '/manual/19-ai-ad-form.jpg',
    imageAlt: 'AI 광고 만들기 폼',
    description: (
      <>
        AI가 광고를 더 정확하게 작성할 수 있도록 4가지를 선택해주세요:
        <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-slate-700">
          <li>
            <strong>업종</strong>: 유치원 / 호텔 / 펫시터 / 훈련소 / 기타
          </li>
          <li>
            <strong>광고 목적</strong>: 신규 고객 유치 / 이벤트 안내 / 신상품 / 일상 공유 / 후기 / 기타
          </li>
          <li>
            <strong>발행 채널</strong>: 강쥐Talk (인스타그램은 곧 지원)
          </li>
          <li>
            <strong>글 분위기</strong>: 친근한 / 전문적 / 유머러스 / 트렌디 / 감성적
          </li>
        </ul>
      </>
    ),
    tip: (
      <>
        <strong>"친근한"</strong> 분위기가 가장 많이 선택돼요. 강쥐엄마 사용자 톤과 잘 어울려요.
      </>
    ),
  },
  {
    title: '(선택) 추가 정보 입력으로 AI 정확도 ↑',
    image: '/manual/20-ai-ad-extra.jpg',
    imageAlt: '추가 정보 입력 화면',
    description: (
      <>
        이벤트, 영업시간, 특별 서비스 등 광고에 꼭 들어가야 할 정보를 자유롭게 적어주세요.
        <br />
        <span className="text-sm text-slate-500 mt-1 inline-block">
          예: "신규오픈 기념, 강쥐엄마 보고왔다고 알려주시면 10% 할인"
        </span>
      </>
    ),
    tip: (
      <>
        <strong>이벤트·할인 정보</strong>, <strong>특별 서비스</strong>(픽업, 야간 진료 등),
        <strong>위치 안내</strong>(주차, 지하철)를 적으면 AI가 자연스럽게 녹여서 광고를 작성해요.
      </>
    ),
  },
  {
    title: 'AI 초안 생성하기',
    image: '/manual/21-ai-ad-ready.jpg',
    imageAlt: 'AI 초안 생성 버튼',
    description: (
      <>
        모든 항목이 채워졌으면 <strong className="text-biz">"AI 초안 생성하기"</strong>를
        탭하세요. AI가 사장님 업체에 맞는 광고를 작성해드려요.
      </>
    ),
    tip: (
      <>
        AI 초안 생성은 보통 <strong>5~10초</strong> 정도 걸려요.
        하루 <strong>10회까지</strong> 무료로 만들 수 있어요 (저장만 해도 횟수에 포함).
      </>
    ),
  },
  {
    title: 'AI가 작성한 초안 확인 + 수정',
    image: '/manual/23-ai-ad-draft.jpg',
    imageAlt: 'AI 광고 초안 결과',
    description: (
      <>
        AI가 사장님 톤에 맞게 광고 문구를 작성해드려요. 마음에 안 드는 부분은
        다음 단계에서 자유롭게 <strong>수정</strong>할 수 있어요.
      </>
    ),
    tip: (
      <>
        AI는 <strong>사장님 본인의 말투</strong>로 글을 써드려요. ("저희 매장은...",
        "저희 가게에..." 같은 1인칭). 3인칭 카피라이터 톤이 아니라서 진정성이 느껴져요.
      </>
    ),
  },
  {
    title: '사진 첨부 + 업체 정보 자동 표시 + 게시',
    image: '/manual/24-ai-ad-edit.jpg',
    imageAlt: '광고 게시 화면 - 사진 첨부',
    description: (
      <>
        업종 탭에서 카테고리를 다시 한 번 확인하고, 광고에 들어갈 사진을 첨부해주세요.
        업체 정보(전화번호, 주소, 홈페이지)는 <strong>자동으로 들어가요</strong>.
      </>
    ),
    tip: (
      <>
        업체 정보가 비어있거나 바뀌었다면 <strong>"수정"</strong>을 탭해서
        업체 정보 수정 화면으로 가서 업데이트할 수 있어요.
      </>
    ),
  },
  {
    title: '저장 / 즉시 게시 선택',
    image: '/manual/25-ai-ad-publish.jpg',
    imageAlt: '저장하기 또는 즉시 게시',
    description: (
      <>
        마지막으로 <strong>"저장하기"</strong>(임시 저장 후 나중에 게시) 또는
        <strong className="text-biz"> "즉시 게시"</strong>(바로 강쥐Talk에 노출)를 선택해요.
      </>
    ),
    tip: (
      <>
        <strong>예약 게시</strong>는 곧 지원될 예정이에요. 지금은 즉시 게시 또는 저장 후 직접 게시만 가능해요.
        주 광고 횟수(basic 3회 / pro 5회)에서 차감돼요.
      </>
    ),
  },
];

export default function AdsManualPage() {
  return (
    <>
      <Header />
      <ManualDetailLayout
        badge="⭐ 핵심 기능"
        title="AI로 광고 만들기"
        subtitle="몇 가지 선택만 하면 AI가 광고 문구를 작성해드려요. 사진까지 한 번에, 5분이면 첫 광고 완성."
        nextHref="/biz-manual/manage"
        nextLabel="광고·쿠폰 관리"
      >
        {/* 핵심 가치 박스 */}
        <div className="bg-gradient-to-br from-biz to-biz-dark rounded-3xl p-6 md:p-8 text-white mb-10 shadow-biz">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-black mb-2">
                이게 강쥐엄마의 심장이에요
              </h2>
              <p className="text-white/90 leading-relaxed">
                강쥐엄마 AI는 사장님 업체 정보와 펫 산업을 학습한 모델이에요.
                일반 챗봇과 달리 강쥐엄마 사용자들이 좋아하는 톤으로 광고를 작성해드려요.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { icon: Sparkles, label: '하루 10회', sub: '무료 작성' },
              { icon: Camera, label: '사진 첨부', sub: '갤러리에서' },
              { icon: Send, label: '즉시 게시', sub: '5분이면 끝' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 text-center"
                >
                  <Icon className="w-5 h-5 mx-auto mb-1.5 text-white/80" />
                  <div className="font-bold text-sm">{stat.label}</div>
                  <div className="text-xs text-white/70 mt-0.5">{stat.sub}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 데모 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-biz-tint100 flex items-center justify-center">
              <Zap className="w-5 h-5 text-biz" />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              실제 화면으로 따라하기
            </h2>
          </div>
          <p className="text-slate-600 mb-6 text-sm md:text-base">
            각 단계를 탭해서 실제 앱 화면과 함께 안내받으세요.
            화면에 표시된 빨간 박스가 다음에 탭할 위치를 알려줘요.
          </p>

          <InteractiveDemo steps={STEPS} />
        </div>

        {/* 자주 묻는 질문 (페이지 한정) */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-amber-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900">
              AI 광고 작성 팁
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'AI가 작성한 문구가 마음에 안 들어요',
                a: '게시 화면 직전 단계에서 자유롭게 수정할 수 있어요. AI 초안은 시작점이고, 사장님이 마지막으로 다듬어서 게시하시면 돼요.',
              },
              {
                q: '같은 정보로 다시 만들면 같은 글이 나오나요?',
                a: '아니요, AI는 매번 조금씩 다르게 작성해드려요. 마음에 안 들면 다시 "AI 초안 생성하기"를 눌러 새 버전을 받아보세요. (하루 10회 한도 안에서)',
              },
              {
                q: '광고 사진은 어떤 게 좋을까요?',
                a: '강쥐엄마 사용자들은 진짜 매장 사진을 좋아해요. 인스타에 올렸던 사진 그대로도 좋고, 강아지 손님들이 즐겁게 노는 모습이 가장 반응이 좋아요. (저작권 있는 이미지는 피해주세요)',
              },
              {
                q: '게시한 광고를 수정하거나 삭제할 수 있나요?',
                a: '네, "내 광고 현황" 또는 "광고·쿠폰 관리"에서 게시 중인 광고도 편집/삭제할 수 있어요. 자세한 내용은 다음 섹션에서 안내해드릴게요.',
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-biz-tint50 rounded-xl border border-biz-tint200 overflow-hidden"
              >
                <summary className="cursor-pointer p-4 flex items-center gap-3 list-none">
                  <span className="font-bold text-biz-dark text-sm flex-shrink-0">
                    Q.
                  </span>
                  <span className="flex-1 font-bold text-slate-900 text-sm md:text-base">
                    {item.q}
                  </span>
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 pt-1 text-sm text-slate-700 leading-relaxed border-t border-biz-tint200">
                  <div className="flex gap-2 mt-3">
                    <span className="font-bold text-emerald-600 flex-shrink-0">
                      A.
                    </span>
                    <span>{item.a}</span>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </ManualDetailLayout>
      <Footer />
    </>
  );
}
