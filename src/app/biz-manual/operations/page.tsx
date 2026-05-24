import type { Metadata } from 'next';
import {
  MessageCircle,
  QrCode,
  CreditCard,
  Coins,
  Mail,
  Settings,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualDetailLayout from '@/components/ManualDetailLayout';
import PhoneFrame from '@/components/PhoneFrame';

export const metadata: Metadata = {
  title: '운영 기능 (문의/QR/구독/Paw) — 강쥐엄마 사장님 메뉴얼',
  description:
    '고객 문의 답변, QR 스캔으로 Paw 적립, 구독 관리, Paw 포인트 현금화, 운영팀 문의 — 운영에 필요한 모든 것.',
};

// 카드 데이터 (각 기능 한 카드씩) — 각자 다른 강조 이미지 사용
const FEATURES = [
  {
    id: 'inquiry',
    icon: MessageCircle,
    color: 'bg-violet-500',
    tint: 'bg-violet-50 border-violet-200',
    title: '고객 문의 관리',
    short: '강쥐엄마 사용자가 보낸 문의를 사장님이 직접 답변하는 채널',
    image: '/manual/26-bizhome-grid-inquiry.jpg',
    steps: [
      '사장님 홈 → 운영 → "문의 관리" 진입',
      '대기 중인 문의 리스트 확인',
      '문의 클릭 → 답장 작성 → 전송',
      '답변하면 사장님 신뢰도 ↑',
    ],
    tip: 'AI 문의 응대(자동 답변)는 pro 플랜에서 제공돼요. basic은 사장님이 직접 답변하시면 돼요.',
  },
  {
    id: 'qr',
    icon: QrCode,
    color: 'bg-cyan-500',
    tint: 'bg-cyan-50 border-cyan-200',
    title: 'QR 스캔으로 Paw 적립',
    short: '쿠폰 사용 처리 + 사장님 Paw 포인트 자동 적립',
    image: '/manual/26-bizhome-grid-qr.jpg',
    steps: [
      '매장에 방문한 고객의 쿠폰 QR 코드를 받음',
      '사장님 홈 → 운영 → "QR 스캔" 진입',
      '고객 QR 스캔 → 쿠폰 사용 처리',
      'Paw 포인트가 사장님께 자동 적립',
    ],
    tip: '쿠폰을 발행하지 않아도 강쥐엄마 사용자가 매장에 와서 "강쥐엄마 보고 왔어요!" QR을 보여줄 수 있어요. 그것도 스캔해서 Paw를 받을 수 있어요.',
  },
  {
    id: 'subscription',
    icon: CreditCard,
    color: 'bg-emerald-500',
    tint: 'bg-emerald-50 border-emerald-200',
    title: '구독 관리',
    short: '플랜 변경, 결제 카드 등록, 구독 해지',
    image: '/manual/26-bizhome-grid-subscription.jpg',
    steps: [
      '사장님 홈 → 운영 → "구독 관리" 진입',
      '현재 플랜 + 결제 정보 확인',
      'Lite / Basic / Pro 플랜 변경',
      '결제 카드 등록 (7/15 정식 출시 후 필수)',
    ],
    tip: '베타 기간(7/28까지)은 카드 등록 없이 무료. 7/15~28에 카드 등록하면 정식 출시 후에도 그대로 사용 가능. 언제든 해지 가능해요.',
  },
  {
    id: 'paw',
    icon: Coins,
    color: 'bg-orange-500',
    tint: 'bg-orange-50 border-orange-200',
    title: 'Paw 포인트 적립·현금화',
    short: '사장님 매장에서 고객이 Paw를 사용하면 그대로 적립',
    image: '/manual/27-bizhome-stats-paw.jpg',
    steps: [
      '고객이 매장에서 쿠폰/Paw 사용 → 사장님께 적립',
      '사장님 홈 → 내 Paw 포인트 카드 확인',
      '"현금화 신청하기" 탭',
      '운영팀이 사업자 정보 확인 후 입금 (1 Paw = 1원)',
    ],
    tip: 'Paw는 강쥐엄마 사용자가 다양한 활동(출석, 산책, 댓글 등)으로 얻을 수 있어요. 매장 방문 시 사용하면 사장님께 적립돼요.',
  },
  {
    id: 'admin-inquiry',
    icon: Mail,
    color: 'bg-rose-500',
    tint: 'bg-rose-50 border-rose-200',
    title: '운영팀에 문의하기',
    short: '강쥐엄마 운영팀(마음이)에게 직접 문의/요청/피드백',
    image: '/manual/27-bizhome-stats-admin.jpg',
    steps: [
      '사장님 홈 맨 아래 → "운영팀에 문의하기" 진입',
      '문의 내용 자유롭게 작성 (입점, 광고, 쿠폰, 정산 등 무엇이든)',
      '전송 → 운영팀이 직접 답변',
    ],
    tip: '베타 기간엔 사장님 한 분 한 분께 직접 답변드려요. 사용 중 불편한 점, 개선 아이디어, 기능 요청 등 무엇이든 편하게 보내주세요.',
  },
];

export default function OperationsManualPage() {
  return (
    <>
      <Header />
      <ManualDetailLayout
        badge="⚙️ 운영"
        title="운영 기능 모음"
        subtitle="고객 문의, QR 스캔, 구독 관리, Paw 포인트, 운영팀 문의 — 사장님 모드의 나머지 핵심 기능들."
      >
        {/* 핵심 메시지 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-biz text-white rounded-2xl flex items-center justify-center">
              <Settings className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2">
                광고 외 나머지 운영 기능들
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                각 기능은 사장님 홈에서 한 번의 탭으로 들어갈 수 있어요.
                자주 안 쓰더라도 한 번씩 둘러봐두시면 좋아요.
              </p>
            </div>
          </div>
        </div>

        {/* 5개 기능 카드 */}
        <div className="space-y-5">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                id={feature.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden"
              >
                <div className="grid md:grid-cols-[1fr_240px] gap-0">
                  {/* 왼쪽: 텍스트 */}
                  <div className="p-6 md:p-7 order-2 md:order-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${feature.color} text-white flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-400 tabular-nums">
                          0{idx + 1}
                        </div>
                        <h3 className="font-black text-slate-900 text-lg md:text-xl">
                          {feature.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {feature.short}
                    </p>

                    {/* 단계 리스트 */}
                    <div className={`rounded-2xl p-4 border-2 ${feature.tint} mb-3`}>
                      <div className="text-xs font-bold text-slate-700 mb-2">
                        사용 순서
                      </div>
                      <ol className="space-y-1.5">
                        {feature.steps.map((step, i) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-700">
                            <span
                              className={`flex-shrink-0 w-5 h-5 rounded-full ${feature.color} text-white text-[10px] font-bold flex items-center justify-center mt-0.5`}
                            >
                              {i + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* 팁 */}
                    <div className="flex gap-2 text-xs text-slate-600 leading-relaxed bg-slate-50 rounded-xl p-3">
                      <span className="flex-shrink-0">💡</span>
                      <span>{feature.tip}</span>
                    </div>
                  </div>

                  {/* 오른쪽: 폰 mockup (강조 이미 굽혀있음) */}
                  <div className="bg-slate-50 p-5 flex items-center justify-center order-1 md:order-2 border-b md:border-b-0 md:border-l border-slate-200">
                    <PhoneFrame variant="tall" shadow="none">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                    </PhoneFrame>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 빠른 점프 */}
        <div className="mt-10 bg-biz-tint50 border border-biz-tint200 rounded-2xl p-5">
          <h3 className="font-bold text-biz-dark mb-3 text-sm">
            🔗 빠른 점프
          </h3>
          <div className="flex flex-wrap gap-2">
            {FEATURES.map((f) => (
              <a
                key={f.id}
                href={`#${f.id}`}
                className="px-3 py-1.5 bg-white text-biz-dark rounded-full text-xs font-bold border border-biz-tint200 hover:bg-biz hover:text-white transition-colors"
              >
                {f.title}
              </a>
            ))}
          </div>
        </div>
      </ManualDetailLayout>
      <Footer />
    </>
  );
}
