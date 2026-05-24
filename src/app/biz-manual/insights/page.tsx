import type { Metadata } from 'next';
import { BarChart3, Eye, MousePointerClick, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualDetailLayout from '@/components/ManualDetailLayout';
import InteractiveDemo, { DemoStep } from '@/components/InteractiveDemo';

export const metadata: Metadata = {
  title: '성과 보기 (인사이트) — 강쥐엄마 사장님 메뉴얼',
  description:
    '홈 노출 / 입점업체 클릭 / AI 추천 / 문의 — 광고가 어디서 얼마나 효과를 내는지 한눈에.',
};

const STEPS: DemoStep[] = [
  {
    title: '사장님 홈 → "자세한 인사이트 보기"',
    image: '/manual/27-bizhome-stats.jpg',
    imageAlt: '사장님 홈 통계 카드',
    description: (
      <>
        사장님 홈 상단의 통계 요약 아래 <strong>"자세한 인사이트 보기"</strong> 카드를 탭하세요.
        일/주/월별 추이와 강GPT 분석을 볼 수 있어요.
      </>
    ),
    tip: '홈 상단에 입점 클릭, AI 추천, 문의 수 등 핵심 지표가 항상 보여요. 빠르게 확인하고 싶을 때 유용해요.',
  },
  {
    title: '일별 / 주별 / 월별 추이 보기',
    image: '/manual/30-insights-2.jpg',
    imageAlt: '인사이트 - 추이 그래프',
    description: (
      <>
        상단 탭에서 <strong>일별 / 주별 / 월별</strong>로 보기 단위를 바꿀 수 있어요.
        그 아래 칩으로 보고 싶은 지표(전체/홈 노출/입점업체 클릭/AI 추천)를 선택하세요.
      </>
    ),
    tip: '데이터가 쌓이면 그래프로 추이가 보여요. 가입 직후엔 데이터가 없어서 "활동이 없었어요"가 표시될 수 있어요.',
  },
  {
    title: '표시할 통계 켜고 끄기',
    image: '/manual/29-insights-1.jpg',
    imageAlt: '인사이트 - 통계 토글',
    description: (
      <>
        화면 하단의 <strong>"표시할 통계"</strong> 박스에서 각 지표를 켜고 끌 수 있어요.
        보고 싶은 것만 남기고 정리할 수 있어요.
      </>
    ),
    tip: '문의 수, 주문 수, 상품 후기는 매장 운영 형태에 따라 안 쓰는 사장님도 있어요. 본인에게 중요한 것만 켜두세요.',
  },
];

const METRICS = [
  {
    icon: Eye,
    name: '홈 노출',
    color: 'bg-blue-500',
    tint: 'bg-blue-50 border-blue-200',
    desc: '강쥐엄마 홈 화면에 사장님 광고가 노출된 횟수',
    detail: '사용자가 강쥐엄마 앱을 켤 때마다 노출돼요. 노출 ≠ 클릭이라는 점만 기억해주세요.',
  },
  {
    icon: MousePointerClick,
    name: '입점업체 클릭',
    color: 'bg-amber-500',
    tint: 'bg-amber-50 border-amber-200',
    desc: '사용자가 사장님 업체 카드를 직접 클릭한 횟수',
    detail: '관심 있는 사용자가 사장님 업체 프로필을 더 보려고 누른 거예요. 가장 중요한 지표 중 하나.',
  },
  {
    icon: Sparkles,
    name: 'AI 추천',
    color: 'bg-violet-500',
    tint: 'bg-violet-50 border-violet-200',
    desc: '강GPT가 사장님 업체를 사용자에게 추천한 횟수',
    detail: '사용자가 "○○ 추천해줘"라고 강GPT에게 물어볼 때, AI가 사장님 업체를 추천한 횟수예요.',
  },
  {
    icon: MessageCircle,
    name: '문의 수',
    color: 'bg-emerald-500',
    tint: 'bg-emerald-50 border-emerald-200',
    desc: '사용자가 사장님께 보낸 문의 메시지 수',
    detail: '문의 관리에서 답변할 수 있어요. 답변하면 사장님 신뢰도가 올라가요.',
  },
];

export default function InsightsManualPage() {
  return (
    <>
      <Header />
      <ManualDetailLayout
        badge="📊 인사이트"
        title="성과 보기 (인사이트)"
        subtitle="홈 노출 / 입점업체 클릭 / AI 추천 / 문의 — 광고가 어디서 얼마나 효과를 내는지 한눈에."
        nextHref="/biz-manual/operations"
        nextLabel="문의·QR·구독·Paw"
      >
        {/* 핵심 메시지 */}
        <div className="bg-gradient-to-br from-biz to-biz-dark rounded-3xl p-6 md:p-8 text-white mb-8 shadow-biz">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black mb-2">
                숫자가 보여주는 사장님 광고 효과
              </h2>
              <p className="text-white/90 leading-relaxed text-sm md:text-base">
                홈 노출부터 실제 문의까지 — 광고 성과를 6가지 지표로 한눈에.
                일/주/월별 추이로 트렌드를 파악하세요.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-biz" />
          단계별 따라하기
        </h2>
        <p className="text-slate-600 mb-6 text-sm md:text-base">
          인사이트 화면 진입과 활용 방법.
        </p>

        <InteractiveDemo steps={STEPS} />

        {/* 지표 해설 */}
        <div className="mt-10 bg-white rounded-3xl border border-slate-200 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
            지표가 뭘 의미하나요?
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            각 지표가 사장님께 어떤 정보를 주는지 정리해드릴게요.
          </p>

          <div className="space-y-3">
            {METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border-2 p-5 ${metric.tint}`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl ${metric.color} text-white flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-slate-900 mb-1">
                        {metric.name}
                      </h3>
                      <p className="text-sm font-medium text-slate-700 mb-2">
                        {metric.desc}
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {metric.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 강GPT 분석 (준비중) */}
        <div className="mt-6 bg-biz-tint50 border-2 border-biz-tint200 rounded-2xl p-5 md:p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">✨</span>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-black text-biz-dark">강GPT 분석 (준비중)</h3>
                <span className="text-[10px] font-bold bg-biz text-white px-2 py-0.5 rounded-full">
                  COMING SOON
                </span>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                AI가 사장님의 통계를 분석해서 <strong>잘 되고 있는 점</strong>,
                <strong> 개선할 점</strong>, <strong>다음에 시도해볼 마케팅 아이디어</strong>를
                알려드릴 예정이에요. 곧 만나요!
              </p>
            </div>
          </div>
        </div>
      </ManualDetailLayout>
      <Footer />
    </>
  );
}
