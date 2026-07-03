import type { Metadata } from "next";
import AppLegalLayout from "@/components/AppLegalLayout";

export const metadata: Metadata = {
  title: "환불정책",
  robots: { index: false, follow: false, nocache: true },
  description: "AnimAI 정기결제(구독) 서비스의 환불 정책을 안내합니다.",
};

export default function RefundPolicyPage() {
  return (
    <AppLegalLayout
      title="환불정책"
      subtitle="AnimAI 정기결제(구독) 서비스의 환불 규정입니다."
      effectiveDate="2026년 5월 23일"
    >
      <section className="mb-12">
        <p className="text-base md:text-lg">
          본 환불정책은 (주)비타니마(이하 &quot;회사&quot;)가 운영하는 AnimAI(이하 &quot;서비스&quot;)의 유료 정기결제 상품에 대한 결제 취소 및 환불 기준을 정함을 목적으로 합니다. 본 정책은 「전자상거래 등에서의 소비자보호에 관한 법률」 및 관련 법령을 준수합니다.
        </p>
      </section>

      <section id="section-1" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제1조 (환불정책 개요)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>본 정책은 AnimAI Biz 사장님 회원이 결제하는 정기결제(구독) 서비스 — Lite / Basic / Pro 플랜 — 에 적용됩니다.</li>
          <li>회사는 신용카드 자동결제(토스페이먼츠 빌링키) 방식으로 매월 정해진 일자에 결제를 진행합니다.</li>
          <li>환불 신청은 본 정책에서 정한 기준에 따라 처리되며, 결제 대행사(토스페이먼츠)를 통해 결제 수단으로 환급됩니다.</li>
        </ol>
      </section>

      <section id="section-2" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제2조 (정기결제 청약철회)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회원은 결제일로부터 <strong>7일 이내</strong>에 청약철회를 할 수 있으며, 서비스를 전혀 이용하지 않은 경우 결제 금액 전액이 환불됩니다.</li>
          <li>여기서 &quot;서비스 이용&quot;이란 광고 게시, 쿠폰 발급, 자사몰 상품 등록, AI 광고 초안 생성 등 유료 기능 사용을 의미합니다.</li>
          <li>서비스를 1회라도 이용한 경우, 본 조에 따른 청약철회는 제한될 수 있으며, 다음 제3조의 환불 기준이 적용됩니다.</li>
        </ol>
      </section>

      <section id="section-3" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제3조 (결제 취소 및 환불)</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>
            <strong>정기결제 회원의 일할 환불</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>월 기준은 30일이며, 월 이용료를 30으로 나눈 금액을 1일 이용료로 산정합니다.</li>
              <li>결제일로부터 24시간 이후 ~ 결제일로부터 15일까지는 잔여일에 대한 일할 계산으로 환불됩니다.</li>
              <li>결제일로부터 15일을 초과한 경우, 해당 결제 회차의 환불은 제한되며 차회 결제가 자동 해지됩니다.</li>
            </ul>
          </li>
          <li>
            <strong>구독 해지 (다음 결제부터 미적용)</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>회원은 AnimAI 앱 내 [구독 관리] 메뉴에서 언제든지 자동결제를 해지할 수 있습니다.</li>
              <li>구독 해지 시 해당 결제 회차의 잔여 기간 동안은 서비스를 계속 이용할 수 있으며, 다음 결제일부터 자동결제가 중단됩니다.</li>
              <li>해지에 따른 별도의 위약금은 부과되지 않습니다.</li>
            </ul>
          </li>
          <li>
            <strong>플랜 변경(업그레이드 / 다운그레이드)</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>상위 플랜으로 업그레이드 시: 잔여 기간 차액을 즉시 결제하여 변경됩니다.</li>
              <li>하위 플랜으로 다운그레이드 시: 현재 결제 회차 종료 후 다음 결제부터 변경된 플랜이 적용됩니다.</li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="section-4" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제4조 (회사 귀책에 의한 환불)</h2>
        <p className="mb-3">다음의 경우 회사는 잔여 이용 기간 또는 손해에 상응하는 금액을 환불합니다.</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회사의 귀책사유로 서비스 제공이 24시간 이상 중단된 경우, 중단된 기간에 비례하여 환불합니다.</li>
          <li>회사의 귀책사유로 결제 오류가 발생하여 회원이 의도하지 않은 결제가 이루어진 경우, 전액 환불됩니다.</li>
          <li>회사가 서비스를 영구 종료할 경우, 최소 30일 전 공지하며 잔여 기간에 대해 일할 환불합니다.</li>
          <li>본 조에 따른 환불 처리는 회원의 신청 없이 회사가 직접 진행하며, 결제 수단으로 자동 환급됩니다.</li>
        </ol>
      </section>

      <section id="section-5" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제5조 (환불이 불가한 경우)</h2>
        <p className="mb-3">다음의 경우에는 환불이 제한될 수 있습니다.</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>회원의 약관 위반 또는 부정 이용으로 인해 자격이 상실된 경우</li>
          <li>결제일로부터 15일을 초과한 경우 (단, 회사 귀책 사유는 제외)</li>
          <li>무료 혜택, 쿠폰, Paw 포인트 등 유료 결제와 무관한 항목</li>
          <li>이미 환불 처리가 완료된 결제 건</li>
          <li>회원이 본인의 정보를 허위로 입력하여 결제한 경우</li>
        </ol>
      </section>

      <section id="section-6" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제6조 (환불 신청 방법)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>AnimAI 앱 내 [구독 관리] → [문의하기] 메뉴를 통해 환불을 신청할 수 있습니다.</li>
          <li>이메일을 통한 신청도 가능합니다.{" "}
            <a href="mailto:cs@vitanima.kr" className="text-brand hover:underline font-bold">cs@vitanima.kr</a>
          </li>
          <li>환불 신청 시 다음 정보를 함께 알려주시면 처리가 빠릅니다.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>가입 시 사용한 이메일 주소 또는 휴대폰 번호</li>
              <li>사업자등록증상 상호명</li>
              <li>환불 신청 사유</li>
              <li>결제 일자 및 결제 금액</li>
            </ul>
          </li>
        </ol>
      </section>

      <section id="section-7" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제7조 (환불 처리 기간)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>환불 신청 접수 후 영업일 기준 <strong>3~7일 이내</strong>에 환불 처리됩니다.</li>
          <li>환불은 원 결제 수단(신용카드)으로 자동 환급되며, 카드사 정책에 따라 카드 명세서 반영까지 추가 시일이 소요될 수 있습니다.</li>
          <li>회원의 카드사 사정 또는 결제 대행사 사정에 따라 환불 처리가 지연될 수 있으며, 회사는 가능한 범위 내에서 최대한 빠르게 처리하도록 노력합니다.</li>
        </ol>
      </section>

      <section id="section-8" className="mb-12">
        <h2 className="text-xl md:text-2xl font-black text-ink-1 mb-4">제8조 (문의 및 분쟁 해결)</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>본 환불정책 또는 환불 처리에 관한 문의는 다음 채널로 접수해 주십시오.
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>이메일: <a href="mailto:cs@vitanima.kr" className="text-brand hover:underline font-bold">cs@vitanima.kr</a></li>
              <li>유선번호: 010-2358-5248</li>
              <li>AnimAI 앱 내 [MY-설정] 메뉴</li>
            </ul>
          </li>
          <li>회사는 회원의 정당한 환불 요청에 대해 성실히 응대하며, 분쟁이 발생할 경우 「전자상거래 등에서의 소비자보호에 관한 법률」 및 관련 법령에 따라 처리합니다.</li>
          <li>회원과 회사 간의 분쟁 해결이 원활하지 않을 경우, 한국소비자원, 전자거래분쟁조정위원회 등 관련 기관의 조정을 받을 수 있습니다.</li>
        </ol>
      </section>
    </AppLegalLayout>
  );
}
