import ContactForm from "@/src/components/contactComponents/contactForm";
import Footer from "@/src/components/footer";

export default function ContactPage() {
    return (
        <div className="flex flex-col bg-black w-[100%] items-center justify-center z-20">
            <div className="z-0">
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}