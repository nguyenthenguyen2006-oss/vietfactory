import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectGallery } from "@/components/ProjectGallery";
import { getServiceBySlug, services } from "@/data/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Dịch vụ" };
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <HeroSection
        title={service.title}
        subtitle={service.shortDescription}
        compact
        show3D={false}
        backgroundImage={service.coverImage}
      />

      <section className="section-pad bg-white">
        <div className="container-wide">
          <Link
            href="/dich-vu"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-navy"
          >
            <ArrowLeft size={16} weight="bold" />
            Tất cả dịch vụ
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
                Tổng quan
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-muted">
                {service.description}
              </p>
              <h3 className="mt-10 text-lg font-semibold text-navy">Điểm mạnh</h3>
              <ul className="mt-4 space-y-3">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-slate-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src={service.coverImage}
                alt={service.title}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {service.gallery && service.gallery.length > 0 && (
        <section className="section-pad bg-surface">
          <div className="container-wide">
            <h2 className="text-2xl font-semibold tracking-tight text-navy md:text-3xl">
              Hình ảnh thực tế
            </h2>
            <p className="mt-2 text-sm text-slate-muted">
              Hình ảnh công trình và triển khai thực tế từ Labaco.
            </p>
            <div className="mt-8">
              <ProjectGallery gallery={service.gallery} />
            </div>
          </div>
        </section>
      )}

      {service.specs && service.specs.length > 0 && (
        <section className="section-pad">
          <div className="container-wide max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-navy">
              Thông số kỹ thuật
            </h2>
            <dl className="mt-8 divide-y divide-cold rounded-sm border border-cold bg-white">
              {service.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="grid gap-2 px-6 py-4 sm:grid-cols-2 sm:gap-4"
                >
                  <dt className="text-sm font-medium text-navy">{spec.label}</dt>
                  <dd className="text-sm text-slate-muted">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="section-pad bg-surface">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-navy">
            Quy trình triển khai
          </h2>
          <ol className="mt-8 space-y-4">
            {service.process.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 rounded-sm border border-cold bg-white p-5"
              >
                <span className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-charcoal">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-wide max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-navy">FAQ</h2>
          <div className="mt-8 space-y-4">
            {service.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-sm border border-cold bg-white"
              >
                <summary className="cursor-pointer px-6 py-4 text-sm font-semibold text-navy">
                  {item.question}
                </summary>
                <p className="border-t border-cold px-6 py-4 text-sm leading-relaxed text-slate-muted">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CTASection />
    </>
  );
}