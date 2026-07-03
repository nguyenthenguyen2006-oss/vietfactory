import type { Metadata } from "next";
import { Phone, Envelope, MapPin } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/ContactForm";
import { HeroSection } from "@/components/HeroSection";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: `Liên hệ ${company.name} để được tư vấn thiết kế và thi công công trình công nghiệp.`,
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Liên hệ tư vấn"
        subtitle="Đội ngũ kỹ thuật sẵn sàng trao đổi phương án phù hợp dự án của bạn."
        compact
        show3D={false}
        backgroundImage="/images/labaco/Nghia-Do.jpg"
      />

      <section className="section-pad bg-surface">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                Thông tin liên hệ
              </h2>
              <ul className="mt-8 space-y-6">
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-accent">
                    <Phone size={22} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-muted">Hotline</p>
                    <a
                      href={`tel:${company.hotline.replace(/\s/g, "")}`}
                      className="text-lg font-semibold text-navy hover:text-accent"
                    >
                      {company.hotline}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-accent">
                    <Envelope size={22} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-muted">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-lg font-semibold text-navy hover:text-accent"
                    >
                      {company.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-accent">
                    <MapPin size={22} weight="duotone" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-muted">Địa chỉ</p>
                    <p className="text-base font-medium text-navy">{company.address}</p>
                  </div>
                </li>
              </ul>
              <p className="mt-8 text-sm text-slate-muted">{company.workingHours}</p>
            </div>

            <div className="lg:col-span-7">
              <ContactForm variant="light" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-wide">
          <h2 className="text-xl font-semibold text-navy">Bản đồ</h2>
          <div className="mt-6 flex aspect-[21/9] items-center justify-center rounded-sm border border-cold bg-surface">
            <p className="text-sm text-slate-muted">
              Google Maps placeholder · Thay iframe Maps tại đây
            </p>
          </div>
        </div>
      </section>
    </>
  );
}