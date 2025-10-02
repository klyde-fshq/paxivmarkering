import ContactForm from "@/src/components/contactComponents/contactForm";
import Footer from "@/src/components/footer";

export default function ContactPage() {
    return (
        <div className="flex flex-col bg-black items-center justify-center z-20">
            <div className="z-0 max-h-[1090px] md:max-h-[972px]">
                <ContactForm />
            </div>
            <div className="flex w-full bg-white z-20 justify-center items-center m-0">
                <div className="md:max-w-[1440px] bg-white z-20">
                    <Footer />
                </div>
            </div>
            
        </div>
    )
}