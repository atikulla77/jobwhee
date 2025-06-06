import {Header} from "@/components/landingApp/Header/Header";

import {Footer} from "../../../components/landingApp/Footer/Footer";
import {AboutUsPage} from "@/components/AboutUsPage/AboutUsPage";

export default function AboutUs() {
    // const t = useTranslations("HomePage");

    return (
        <div className=" bg-[#F0F1F4] px-[20px] sm:px-[40px] xxl:px-[120px] 2xl:px-0 pt-[30px] sm:pt-[34px]">
            <Header/>
            <AboutUsPage/>
            <Footer/>
        </div>
    );
}
