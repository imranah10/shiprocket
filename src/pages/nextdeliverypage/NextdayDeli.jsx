import  { BrandLogoHeader } from "./BrandLogoHeader"

import { MainSection } from "./MainSection"
import Faq from '../../components/Faq'
import Header from "../../components/Header"



function NextdayDeli() {


  return (
    <>
       <div  className=''>
        <Header/>
       <BrandLogoHeader />
       <MainSection/>
       {/* faq */}
       <Faq/>
       </div>
    </>
  )
}

export default NextdayDeli
