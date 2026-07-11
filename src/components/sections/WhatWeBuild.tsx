import { Fragment } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { whatWeBuild } from "@/content/platform";

function FlowArrow() {
  return (
    <div className="flex items-center justify-center py-1 lg:py-0" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-5 w-5 rotate-90 text-faint lg:rotate-0">
        <path
          d="M4 12h14M13 6l6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function WhatWeBuild() {
  return (
    <section id="what-we-build" className="section relative">
      <Container>
        <SectionHeading
          eyebrow="What We Build"
          title={
            <>
              From surgical video to{" "}
              <span className="text-gradient-iris">clinical intelligence</span>
            </>
          }
          intro="Surgery generates the richest data in medicine and uses almost none of it. Theia closes that gap, turning what the camera sees into insight a surgeon, a hospital, and a health system can act on."
        />

        <StaggerGroup className="mt-14 flex flex-col lg:flex-row lg:items-stretch">
          {whatWeBuild.map((step, i) => (
            <Fragment key={step.title}>
              <StaggerItem className="flex-1">
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-2xs text-faint">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
              {i < whatWeBuild.length - 1 && (
                <StaggerItem className="lg:flex lg:items-center">
                  <FlowArrow />
                </StaggerItem>
              )}
            </Fragment>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
