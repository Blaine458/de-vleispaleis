import FullGallery from "@/components/FullGallery";

export default function Gallery() {
    return (
        <main>
            <section className="bg-[#fffae7] relative z-30 h-fit min-h-[100vh] w-full text-[#223534] pt-16 sm:py-12 md:py-16 lg:py-20">
                <FullGallery />
            </section>
        </main>
    );
}