import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fees and Insurance - Wang Medical",
  description: "Fees and Insurance - Wang Medical",
};

const FeesAndInsurance = () => {
    return (
        <div className="w-full">
            <Header header="Fees and Insurance" />
            {/** First section */}
            <div className="py-10 md:pt-[5rem] md:py-[10rem] w-full flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10 w-full max-w-6xl">
                <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Self-Pay Patients</h2>
                <p>We provide a flat self-pay rate of <span className="font-semibold">$135.00</span> per visit that includes all services provided. There are no hidden or add-on fees. Each visit lasts at least one hour.</p>
                <p>
                    <span className="font-semibold">Consultation with Dr. Wang (no other services provided):</span> $75.00. 
                    If Dr. Wang can&apos;t help you, we do not charge for the consultation.
                </p>
                <p><span className="font-semibold">Herbal Consultation:</span> $75 plus herbs.</p>
                <p><span className="font-semibold">Self-pay patient consultation when received with treatment:</span> No additional charge.</p>
                </div>
                <div className="">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Massage Therapy</h2>
                <p><span className="font-semibold">$40</span> for 30 minutes table time.</p>
                <p><span className="font-semibold">$80</span> for one hour table time.</p>
                <p><span className="font-semibold">$110</span> for 90 minutes table time.</p>
                <p>Contracted rate per 15 minutes for treatment massage billed to insurance. Patient is responsible for deductible, copay, and coinsurance.</p>
                </div>
            

                <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Pre-Pay Packages</h2>
                <p>Self-pay patients can buy a package of 6 treatments for <span className="font-semibold">$720</span>, saving an additional $90.00.</p>
                </div>

                
                <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Referral Discounts</h2>
                <p>Referred patients receive <span className="font-semibold">$20 off</span> their first visit.</p>
                <p>Patients who refer new patients receive <span className="font-semibold">$20 credit</span> on their accounts that may be used for any service or product.</p>
                </div>

                <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Insured Patients</h2>
                <p>
                    Acupuncture, tui na, heat therapy, cupping, office exams and case management, etc. are billed at contracted rates with insurances that we accept. 
                    A typical one-hour visit is billed between <span className="font-semibold">$160</span> and <span className="font-semibold">$240</span>. 
                    Patients are responsible for deductible, copay, and coinsurance. If a service is not covered, the patient is charged the reduced self-pay rate.
                </p>
                <p className="font-semibold">Wang Medical, Inc. contracts with several insurance providers including:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Blue Cross</li>
                    <li>Blue Cross Federal</li>
                    <li>Pacific Source</li>
                    <li>Aetna</li>
                    <li>United Health Care</li>
                    <li>VA Community Care (preauthorization required)</li>
                    <li>GEHA</li>
                    <li>Mail Handlers</li>
                    <li>Auto and Work Claims (preauthorization required)</li>
                </ul>
                </div>
                
            </div>
</div>

            <Footer showRequest={true} />
        </div>
    )
}

export default FeesAndInsurance;