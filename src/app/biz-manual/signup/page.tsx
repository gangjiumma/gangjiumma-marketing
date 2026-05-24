import type { Metadata } from 'next';
import { UserPlus, Phone, Gift, Sparkles, ShieldCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManualDetailLayout from '@/components/ManualDetailLayout';
import InteractiveDemo, { DemoStep } from '@/components/InteractiveDemo';
import Highlight from '@/components/Highlight';

export const metadata: Metadata = {
  title: '가입부터 입점 승인까지 — 강쥐엄마 사장님 메뉴얼',
  description:
    '회원가입 → 사장님 입점 신청 → AI 자동 검수 → 즉시 사용. 5분이면 끝나요.',
};

const STEPS: DemoStep[] = [
  {
    title: '1) 휴대폰 번호로 회원가입',
    image: '/manual/02-signup-phone.jpg',
    imageAlt: '회원가입 - 휴대폰 번호 입력',
    description: (
      <>
        앱을 처음 실행하면 로그인 화면이 보여요. 아래 <strong>"30초 회원가입"</strong>을
        눌러 휴대폰 번호와 비밀번호로 가입하세요. 별도 인증 메일이나 SNS 연동이 필요 없어요.
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={45}
        width={92}
        height={4}
        shape="rect"
        label="휴대폰 번호 = 아이디"
        labelPosition="top"
        variant="biz"
      />
    ),
    tip: '휴대폰 번호가 아이디 역할을 해요. 사장님 본인 번호로 가입하시면 돼요.',
  },
  {
    title: '2) 약관 동의 + 가입 완료',
    image: '/manual/03-signup-terms.jpg',
    imageAlt: '약관 동의 화면',
    description: (
      <>
        필수 약관에 동의하고 <strong>"가입하고 시작하기"</strong>를 탭하세요.
        마케팅 정보 수신은 선택이지만, 동의해주시면 강쥐엄마 사장님 혜택을 가장 먼저 받으실 수 있어요.
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={87}
        width={92}
        height={6}
        shape="pill"
        label="여기 탭하면 가입 완료"
        labelPosition="top"
        variant="biz"
        pulse
      />
    ),
  },
  {
    title: '3) 닉네임 + 지역 + 우리 강쥐 정보 (1-2분)',
    image: '/manual/06-onboarding-pet.jpg',
    imageAlt: '온보딩 - 펫 정보 입력',
    description: (
      <>
        사장님 본인의 닉네임, 지역(시/도 + 구/군), 그리고 키우시는 강쥐 정보를 입력해요.
        강쥐 정보는 <strong>나중에 MY 탭에서 추가/수정</strong>해도 괜찮으니
        빠르게 넘어가도 돼요.
      </>
    ),
    overlay: (
      <Highlight
        x={89}
        y={4}
        width={20}
        height={4}
        shape="pill"
        label="건너뛰기 가능"
        labelPosition="bottom"
        variant="biz"
      />
    ),
    tip: '강쥐 키우는 사장님이시면 본인 강쥐 정보를 채워두시는 게 좋아요. 강쥐엄마 사용자 입장에서 사장님이 더 친근하게 느껴져요.',
  },
  {
    title: '4) MY 탭 → "사장님 입점 신청"',
    image: '/manual/07-mytab.jpg',
    imageAlt: 'MY 탭 - 사장님 입점 신청 버튼',
    description: (
      <>
        가입이 완료되면 일반 회원 화면이 보여요. 하단의 <strong>MY 탭</strong>으로 가서
        <strong> "사장님 입점 신청"</strong> 카드를 탭하세요.
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={67}
        width={92}
        height={10}
        shape="rect"
        label="여기를 탭"
        labelPosition="top"
        variant="biz"
        pulse
      />
    ),
    tip: '"지금 가입하면 베타 기간 무료" 안내가 보이면 잘 찾으신 거예요.',
  },
  {
    title: '5) 업체 정보 + 형태 + 업종 선택',
    image: '/manual/09-application-2-type.jpg',
    imageAlt: '업체 형태 + 업종 선택',
    description: (
      <>
        <strong>업체 형태</strong>는 매장이 있으면 "지역 매장", 자사몰/인스타 판매면 "온라인몰".
        <strong>업종</strong>은 강쥐돌봄(유치원·호텔·펫시터·훈련소), 강쥐살롱(미용·목욕·털관리),
        강쥐동반(애견카페·놀이터·동반식당·동반숙소) 중 선택하세요.
      </>
    ),
    overlay: (
      <>
        <Highlight
          x={50}
          y={20}
          width={92}
          height={14}
          shape="rect"
          label="매장 있음/없음 선택"
          labelPosition="right"
          variant="biz"
        />
      </>
    ),
    tip: '"지역 매장"은 가입 후 변경할 수 없어요. 매장 위치가 있다면 꼭 "지역 매장"을 선택하세요.',
  },
  {
    title: '6) 사업자등록증 사진 1장 업로드',
    image: '/manual/10-application-3-license.jpg',
    imageAlt: '사업자등록증 업로드',
    description: (
      <>
        사업자등록증을 또렷하게, <strong>전체가 보이도록</strong> 찍어서 업로드하세요.
        AI가 자동으로 검토해드려요. 사장님 정보가 일치하면 즉시 승인돼요.
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={43}
        width={92}
        height={50}
        shape="rect"
        label="또렷하게, 전체"
        labelPosition="bottom"
        variant="biz"
      />
    ),
    tip: '사진이 흐릿하거나 잘리면 다시 요청드릴 수 있어요. 햇빛 좋은 곳에서 한 번에 찍어주세요.',
  },
  {
    title: '7) AI 자동 검수 (최대 30초) → 승인 완료',
    image: '/manual/12-application-5-approved.jpg',
    imageAlt: 'AI 검수 완료 - 승인',
    description: (
      <>
        AI가 사업자등록증을 자동으로 검토해요. 보통 <strong>10~30초</strong> 안에 완료되고,
        통과하면 즉시 <strong>"베타버전 사장님"</strong>으로 가입돼요.
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={89}
        width={92}
        height={6}
        shape="pill"
        label="다음 → 약관 동의로"
        labelPosition="top"
        variant="biz"
        pulse
      />
    ),
    tip: 'AI 자동 검수가 통과 안 되면 운영팀(마음이)이 직접 확인해드려요. 보통 1~24시간 안에 처리됩니다.',
  },
  {
    title: '8) 베타 사장님 약관 동의 → 무료로 시작!',
    image: '/manual/13-agreement.jpg',
    imageAlt: '베타 사장님 약관 동의',
    description: (
      <>
        마지막으로 <strong>베타 기간 약관</strong>에 동의하고
        <strong className="text-biz"> "무료로 시작하기"</strong>를 탭하세요.
        축하해요, 강쥐엄마 사장님이 되셨어요! 🎉
      </>
    ),
    overlay: (
      <Highlight
        x={50}
        y={97}
        width={92}
        height={6}
        shape="pill"
        label="여기 탭하면 시작!"
        labelPosition="top"
        variant="primary"
        pulse
      />
    ),
    tip: '7월 28일까지 모든 기능 무료. 7월 15일~28일 사이 결제 카드를 등록하시면 정식 출시 후에도 그대로 사용 가능해요.',
  },
];

export default function SignupManualPage() {
  return (
    <>
      <Header />
      <ManualDetailLayout
        badge="🚀 시작하기"
        title="가입부터 입점 승인까지"
        subtitle="회원가입 → 사장님 입점 신청 → AI 자동 검수 → 즉시 사용. 5분이면 끝나요."
        nextHref="/biz-manual/profile"
        nextLabel="사장님 홈 둘러보기"
      >
        {/* 핵심 메시지 */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 mb-8">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Phone, label: '5분', sub: '가입 완료까지' },
              { icon: Sparkles, label: 'AI', sub: '자동 검수' },
              { icon: Gift, label: '7/28까지', sub: '100% 무료' },
              { icon: ShieldCheck, label: '카드 X', sub: '등록 불필요' },
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-biz-tint50 rounded-2xl p-4 border border-biz-tint200"
                >
                  <div className="w-10 h-10 bg-biz text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-lg">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-600">{stat.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 flex items-center gap-2">
          <UserPlus className="w-6 h-6 text-biz" />
          단계별 따라하기
        </h2>
        <p className="text-slate-600 mb-6 text-sm md:text-base">
          각 단계를 탭해서 실제 화면과 함께 진행해보세요.
        </p>

        <InteractiveDemo steps={STEPS} />

        {/* 사업자등록증 팁 박스 */}
        <div className="mt-10 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 md:p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">💡</span>
            <div>
              <h3 className="font-black text-amber-900 mb-2">
                사업자등록증 사진을 잘 찍는 법
              </h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li className="flex gap-2">
                  <span className="text-amber-600 flex-shrink-0">✓</span>
                  <span>밝은 곳에서 (그림자 없이)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 flex-shrink-0">✓</span>
                  <span>등록증 전체가 화면에 들어오도록</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 flex-shrink-0">✓</span>
                  <span>글자가 흐려지지 않게 (손떨림 X)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-600 flex-shrink-0">✓</span>
                  <span>국세청 직인이 보이도록</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ManualDetailLayout>
      <Footer />
    </>
  );
}
